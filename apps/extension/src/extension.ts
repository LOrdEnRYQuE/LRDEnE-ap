// ─────────────────────────────────────────────────────────────
// ATiQ Extension — Entry Point
// Registers all commands and sets up the status bar item.
// ─────────────────────────────────────────────────────────────

import * as vscode from "vscode";
import { ChatPanel } from "./chatPanel";
import { applyInlineEdit } from "./inlineEdits";
import { getConfig } from "./config";
import { createClient } from "@atiq/sdk";
import { AtiqEditProvider } from "./reviewEdits";
import { AuthManager } from "./auth";
import { IndexManager } from "./indexing/indexManager";
import { ProjectMapProvider } from "./projectMap";
import { TerminalCollector } from "./terminalCollector";
import { ErrorHandler } from "./errorHandler";
import { ErrorReporting } from "./errorReporting";
import { TelemetryService } from "./telemetry";

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  AuthManager.getInstance().initialize(context);
  
  // Initialize Observability
  const errorHandler = ErrorHandler.getInstance();
  const errorReporting = ErrorReporting.getInstance();
  const telemetry = TelemetryService.getInstance();

  const indexer = IndexManager.getInstance(context);
  await indexer.initialize();

  // Initialize Terminal Context tracking
  TerminalCollector.getInstance();

  // Register Virtual Document Provider for AI reviews
  context.subscriptions.push(
    vscode.workspace.registerTextDocumentContentProvider(
      AtiqEditProvider.scheme,
      new AtiqEditProvider()
    )
  );

  // ── Status bar ─────────────────────────────────────────────
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBar.text = "$(sparkle) ATiQ";
  statusBar.tooltip = "Open ATiQ Chat (⌘⌃A)";
  statusBar.command = "atiq.openChat";
  statusBar.show();
  context.subscriptions.push(statusBar);

  const indexStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 99);
  updateIndexStatusBar(indexStatusBar);
  indexStatusBar.show();
  context.subscriptions.push(indexStatusBar);

  // Show plan badge in status bar after resolving entitlements
  refreshStatusBar(statusBar);

  // ── Indexer commands ───────────────────────────────────────
  context.subscriptions.push(
    vscode.commands.registerCommand("atiq.rebuildIndex", async () => {
      vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "ATiQ: Rebuilding Index...",
        cancellable: false
      }, async () => {
        await indexer.rebuild();
        updateIndexStatusBar(indexStatusBar);
      });
    }),
    vscode.commands.registerCommand("atiq.clearIndex", async () => {
      await indexer.clear();
      updateIndexStatusBar(indexStatusBar);
      vscode.window.showInformationMessage("ATiQ: Symbol index cleared.");
    }),
    vscode.commands.registerCommand("atiq.showIndexStatus", () => {
      const { meta } = indexer.getStatus();
      vscode.window.showInformationMessage(
        `ATiQ Index: ${meta.fileCount} files, ${meta.symbolCount} symbols. ${meta.isCapped ? " (CAPPED)" : ""}`
      );
    })
  );

  // ── Chat command ───────────────────────────────────────────
  context.subscriptions.push(
    vscode.commands.registerCommand("atiq.openChat", () => {
      ChatPanel.createOrShow(context.extensionUri);
    })
  );

  // ── Inline edit commands ───────────────────────────────────
  context.subscriptions.push(
    vscode.commands.registerCommand("atiq.editSelection", async () => {
      const input = await vscode.window.showInputBox({ 
        prompt: "Edit instruction (e.g. 'Add error handling', 'Refactor into class')",
        placeHolder: "Enter instructions for AI..."
      });
      if (!input) return;
      await applyInlineEdit(input);
    }),
    vscode.commands.registerCommand("atiq.fixCode", () =>
      applyInlineEdit("Fix bugs and issues in this code")
    ),
    vscode.commands.registerCommand("atiq.rewrite", () =>
      applyInlineEdit("Rewrite and optimize this code for better readability and performance")
    ),
    vscode.commands.registerCommand("atiq.writeTests", () =>
      applyInlineEdit("Write comprehensive unit tests for this code")
    ),
    vscode.commands.registerCommand("atiq.explain", () => {
      ChatPanel.createOrShow(context.extensionUri);
    }),
    vscode.commands.registerCommand("atiq.refreshStatusBar", () => {
      refreshStatusBar(statusBar);
    }),
    vscode.commands.registerCommand("atiq.login", async () => {
      const token = await vscode.window.showInputBox({ 
        prompt: "Enter your ATiQ access token (Magic Link verify token)", 
        password: true 
      });
      if (!token) return;

      try {
        const config = getConfig();
        const client = createClient({ apiUrl: config.apiUrl });
        const res = await client.auth.verify({ token });
        
        await AuthManager.getInstance().setTokens(res.jwt, res.refreshToken);
        vscode.window.showInformationMessage(`ATiQ: Logged in as ${res.user.email}`);
      } catch (err: any) {
        vscode.window.showErrorMessage(`ATiQ: Login failed - ${err.message}`);
      }
    }),
    vscode.commands.registerCommand("atiq.logout", async () => {
      await AuthManager.getInstance().logout();
      vscode.window.showInformationMessage("ATiQ: Logged out");
    })
  );

  // ── Config change listener ─────────────────────────────────
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("atiq")) {
        refreshStatusBar(statusBar);
      }
    })
  );

  // Listen for indexer changes — properly tracked as a disposable
  context.subscriptions.push(
    indexer.onChanged(() => updateIndexStatusBar(indexStatusBar))
  );

  // Project Map Sidebar
  const projectMapProvider = new ProjectMapProvider();
  context.subscriptions.push(
    vscode.window.createTreeView("atiq-project-map", {
      treeDataProvider: projectMapProvider,
      showCollapseAll: true
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("atiq.projectMap.refresh", () => {
      projectMapProvider.refresh();
    })
  );

  // Sync with active editor
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(() => {
      projectMapProvider.refresh();
    })
  );

  // ── Observability Commands ───────────────────────────────
  context.subscriptions.push(
    vscode.commands.registerCommand("atiq.reportIssue", (errorInfo?: any) => {
      // In a real app, this would open a webview or browser with pre-filled error data
      vscode.window.showInformationMessage("Opening issue report form...");
      if (errorInfo) {
        telemetry.recordInteraction("error_reported", 0);
        console.log("Reported Error Info:", errorInfo);
      }
    })
  );

  telemetry.recordInteraction("extension_activated");
}

function updateIndexStatusBar(statusBar: vscode.StatusBarItem) {
  const { isIndexing, meta } = IndexManager.getInstance().getStatus();
  if (isIndexing) {
    statusBar.text = `$(sync~spin) Indexing ${meta.symbolCount}...`;
  } else if (meta.isCapped) {
    statusBar.text = `$(warning) ATiQ: ${meta.symbolCount} [Capped]`;
    statusBar.color = new vscode.ThemeColor("statusBarItem.warningForeground");
  } else {
    statusBar.text = `$(database) ATiQ: ${meta.symbolCount} symbols`;
    statusBar.color = undefined;
  }
}

async function refreshStatusBar(statusBar: vscode.StatusBarItem): Promise<void> {
  try {
    const config = getConfig();
    const jwt = await AuthManager.getInstance().getToken();
    
    if (!jwt) {
      statusBar.text = `$(sparkle) ATiQ [Offline]`;
      return;
    }

    const client = createClient({ apiUrl: config.apiUrl, token: jwt });
    const data = await client.user.entitlements();
    statusBar.text = `$(sparkle) ATiQ [${data.plan}]`;
  } catch (err) {
    statusBar.text = `$(sparkle) ATiQ [Disconnected]`;
  }
}

export function deactivate(): void {
  // vscode.EventEmitter is disposed via context.subscriptions above
  // No additional cleanup needed
}

// CI trigger
