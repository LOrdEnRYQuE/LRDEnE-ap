// ─────────────────────────────────────────────────────────────
// ATiQ Inline Edits
// Selection → POST /v1/edits → Virtual Diff Review
// ─────────────────────────────────────────────────────────────

import * as vscode from "vscode";
import { getConfig } from "./config";
import { PlanLimitError } from "@atiq/sdk";
import { showDiffReview, EditManager } from "./reviewEdits";
import { AuthManager } from "./auth";

import { gatherContext } from "./contextBuilder";

export async function applyInlineEdit(
  instruction: string
): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage("ATiQ: Open a file first.");
    return;
  }

  const document = editor.document;
  const selection = editor.selection;
  const config = getConfig();

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: `ATiQ: ${instruction}…`,
      cancellable: false,
    },
    async () => {
      try {
        const contextData = await gatherContext(editor);
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
        const relPath = workspaceFolder 
          ? vscode.workspace.asRelativePath(document.uri, false)
          : document.uri.fsPath;

        // Calculate surrounding breadcrumb context (5 lines before/after)
        const lineStart = selection.start.line;
        const lineEnd = selection.end.line;
        const beforeRange = new vscode.Range(
          Math.max(0, lineStart - 5), 0,
          lineStart, 0
        );
        const afterRange = new vscode.Range(
          lineEnd + 1, 0,
          Math.min(document.lineCount - 1, lineEnd + 6), 0
        );

        const surroundingContext = {
          before: document.getText(beforeRange),
          after: document.getText(afterRange)
        };

        // Call the modern /v1/edits API
        const editResponse = await AuthManager.getInstance().withAuth(async (client) => {
          return await client.edits.apply({ 
            instruction,
            target: {
              relPath,
              selection: {
                startLine0: selection.start.line,
                startCol0: selection.start.character,
                endLine0: selection.end.line,
                endCol0: selection.end.character,
              }
            },
            context: {
              fileText: document.getText(),
              selectionText: document.getText(selection),
              surroundingContext,
            },
            noTelemetry: !config.telemetryEnabled,
          });
        });

        if (!editResponse.diff || editResponse.hunks.length === 0) {
          vscode.window.showInformationMessage("ATiQ: No changes requested or necessary.");
          return;
        }

        const originalText = document.getText();
        const lines = originalText.split("\n");
        
        // Apply hunks in reverse to keep line numbers stable
        const sortedHunks = [...editResponse.hunks].sort((a, b) => b.oldStart - a.oldStart);
        
        for (const hunk of sortedHunks) {
          const start = hunk.oldStart - 1; // 1-indexed to 0-indexed
          const deleteCount = hunk.oldCount;
          const newLines = hunk.lines
            .filter(l => l.type !== "del")
            .map(l => l.text);
          
          lines.splice(start, deleteCount, ...newLines);
        }
        
        const afterText = lines.join("\n");
        const requestId = editResponse.meta.requestId;

        // Register with EditManager
        EditManager.getInstance().register(requestId, {
          beforeText: originalText,
          afterText,
          originalUri: document.uri
        });

        // Show side-by-side diff review
        await showDiffReview(requestId, relPath, document.uri);

      } catch (err) {
        if (err instanceof PlanLimitError) {
          const action = await vscode.window.showWarningMessage(
            "ATiQ: Inline edits require a Pro plan.",
            "Upgrade"
          );
          if (action === "Upgrade") {
            const pricingUrl = config.apiUrl.replace(":8787", ":3000") + "/pricing";
            vscode.env.openExternal(vscode.Uri.parse(pricingUrl));
          }
          return;
        }

        // Generic Rate Limit / Quota check
        const message = err instanceof Error ? err.message : String(err);
        if (message.includes("quota") || message.includes("limit")) {
          const action = await vscode.window.showWarningMessage(
            `ATiQ: ${message}`,
            "Upgrade Plan"
          );
          if (action === "Upgrade Plan") {
            const pricingUrl = config.apiUrl.replace(":8787", ":3000") + "/pricing";
            vscode.env.openExternal(vscode.Uri.parse(pricingUrl));
          }
          return;
        }

        vscode.window.showErrorMessage(`ATiQ: ${message}`);
      }
    }
  );
}

