import * as vscode from "vscode";
import { getConfig } from "./config";
import { gatherContext } from "./contextBuilder";
import { AuthManager } from "./auth";
import { expandMentions } from "./indexing/mentionExpansion";
import { IndexManager } from "./indexing/indexManager";
import * as path from "path";

export class ChatPanel {
  public static currentPanel: ChatPanel | undefined;
  private readonly panel: vscode.WebviewPanel;
  private readonly extensionUri: vscode.Uri;
  private disposables: vscode.Disposable[] = [];

  static createOrShow(extensionUri: vscode.Uri): void {
    const column = vscode.ViewColumn.Two;

    if (ChatPanel.currentPanel) {
      ChatPanel.currentPanel.panel.reveal(column);
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      "atiqChat",
      "ATiQ Chat",
      column,
      {
        enableScripts: true,
        localResourceRoots: [vscode.Uri.joinPath(extensionUri, "media")],
        retainContextWhenHidden: true,
      }
    );

    ChatPanel.currentPanel = new ChatPanel(panel, extensionUri);
  }

  private currentAbortController: AbortController | undefined;

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this.panel = panel;
    this.extensionUri = extensionUri;
    this.panel.iconPath = vscode.Uri.joinPath(extensionUri, "media", "icon.png");
    this.panel.onDidDispose(() => this.dispose(), null, this.disposables);
    this.panel.webview.html = this.getHtml(this.panel.webview);

    // Handle messages from the webview UI
    this.panel.webview.onDidReceiveMessage(
      async (msg: { type: string; text?: string; instruction?: string; kind?: string; query?: string }) => {
        if (msg.type === "ask" && msg.text) {
          await this.sendChat(msg.text);
        } else if (msg.type === "stop") {
          this.currentAbortController?.abort();
        } else if (msg.type === "apply" && msg.text) {
          const editor = vscode.window.activeTextEditor;
          const text = msg.text;
          if (editor && text) {
            editor.edit((editBuilder: vscode.TextEditorEdit) => {
              editBuilder.insert(editor.selection.active, text);
            });
          }
        } else if (msg.type === "terminal.run" && (msg as any).code) {
          const terminal = vscode.window.terminals.find(t => t.name === "ATiQ") || vscode.window.createTerminal("ATiQ");
          terminal.show();
          terminal.sendText((msg as any).code);
        } else if (msg.type === "completions" && msg.kind && msg.query !== undefined) {
          const indexer = IndexManager.getInstance();
          let items: any[] = [];
          if (msg.kind === "symbol") {
            items = indexer.search(msg.query, 10).map(s => ({
              name: s.name,
              kind: s.kind,
              relPath: s.relPath
            }));
          } else if (msg.kind === "file") {
            const files = await vscode.workspace.findFiles(`**/*${msg.query}*`, "**/node_modules/**", 10);
            items = files.map(f => ({
              name: path.basename(f.fsPath),
              kind: "file",
              relPath: vscode.workspace.asRelativePath(f)
            }));
          }
          this.post({ type: "completions", items });
        }
      },
      null,
      this.disposables
    );
  }

  private async sendChat(userMessage: string): Promise<void> {
    if (this.currentAbortController) {
      this.currentAbortController.abort();
    }
    this.currentAbortController = new AbortController();
    this.post({ type: "start" });

    try {
      const context = await gatherContext();
      const mentions = await expandMentions(userMessage);
      
      // Inject resolved mentions into the user's message
      let enrichedPrompt = userMessage;
      if (mentions.length > 0) {
        const contextBlock = mentions.map(m => m.context).join("\n\n---\n\n");
        enrichedPrompt = `USER REQUEST:\n${userMessage}\n\nRELEVANT CONTEXT:\n${contextBlock}`;
      }

      const signal = this.currentAbortController.signal;

      await AuthManager.getInstance().withAuth(async (client) => {
        await client.chat.stream(
          {
            messages: [{ role: "user", content: enrichedPrompt }],
            context: {
              path: context.currentFile.path,
              selection: context.selection,
              language: context.currentFile.language,
              symbols: context.symbols,
              otherFiles: context.openTabs.map(t => t.path),
            },
            noTelemetry: !getConfig().telemetryEnabled,
          },
          {
            onDelta: (delta: string) => {
              if (signal.aborted) return;
              this.post({ type: "delta", text: delta });
            },
            onError: (error) => {
              this.post({ type: "delta", text: `\n[API Error: ${error.message}]\n` });
            },
            onMeta: (meta) => {
              console.log("Stream Meta:", meta);
            }
          },
          signal
        );
      });
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        this.post({ type: "delta", text: `\n[Request Cancelled]\n` });
      } else {
        const message = err instanceof Error ? err.message : String(err);
        this.post({ type: "delta", text: `\n[Failed to reach API: ${message}]\n` });
      }
    } finally {
      this.currentAbortController = undefined;
      this.post({ type: "done" });
    }
  }

  private post(msg: unknown): void {
    this.panel.webview.postMessage(msg);
  }

  private getHtml(webview: vscode.Webview): string {
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.extensionUri, "media", "main.js")
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.extensionUri, "media", "main.css")
    );
    const nonce = getNonce();

    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Security-Policy"
    content="default-src 'none';
             style-src ${webview.cspSource} 'nonce-${nonce}';
             script-src 'nonce-${nonce}';" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="${styleUri}" rel="stylesheet" />
  <title>ATiQ Chat</title>
</head>
<body>
  <header class="top-bar">
    <span class="logo">ATi<span class="accent">Q</span></span>
    <span class="plan-badge" id="plan-badge">dev-pro</span>
  </header>
  <div class="messages" id="messages"></div>
  <div id="completion-menu" class="completion-menu"></div>
  <div class="input-area">
    <div class="input-container">
      <textarea
        id="inp"
        placeholder="Ask ATiQ (@symbol, @file)..."
        rows="3"
        aria-label="Chat input"
      ></textarea>
      <div class="actions">
        <button id="stop-btn" style="display:none" aria-label="Stop generation">Stop</button>
        <button id="send-btn" aria-label="Send message">Send</button>
      </div>
    </div>
  </div>
  <script nonce="${nonce}" src="${scriptUri}"></script>
</body>
</html>`;
  }

  dispose(): void {
    this.currentAbortController?.abort();
    ChatPanel.currentPanel = undefined;
    this.panel.dispose();
    while (this.disposables.length) {
      this.disposables.pop()?.dispose();
    }
  }
}

function getNonce(): string {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
