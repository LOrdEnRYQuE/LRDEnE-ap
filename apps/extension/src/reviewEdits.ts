import * as vscode from "vscode";
import * as path from "path";

interface PendingEdit {
  beforeText: string;
  afterText: string;
  originalUri: vscode.Uri;
}

export class EditManager {
  private static instance: EditManager;
  private pending = new Map<string, PendingEdit>();

  static getInstance() {
    if (!EditManager.instance) EditManager.instance = new EditManager();
    return EditManager.instance;
  }

  register(requestId: string, edit: PendingEdit) {
    this.pending.set(requestId, edit);
  }

  get(requestId: string) {
    return this.pending.get(requestId);
  }

  async accept(requestId: string) {
    const edit = this.pending.get(requestId);
    if (!edit) return;

    const workspaceEdit = new vscode.WorkspaceEdit();
    const document = await vscode.workspace.openTextDocument(edit.originalUri);
    
    // Replace the entire document content for simplicity and safety in v1
    const fullRange = new vscode.Range(
      document.positionAt(0),
      document.positionAt(document.getText().length)
    );

    workspaceEdit.replace(edit.originalUri, fullRange, edit.afterText);
    const success = await vscode.workspace.applyEdit(workspaceEdit);
    
    if (success) {
      vscode.window.showInformationMessage("ATiQ: Edit applied.");
      this.pending.delete(requestId);
      // Close the diff editor if possible? (Optional)
    }
  }

  reject(requestId: string) {
    this.pending.delete(requestId);
    vscode.window.showInformationMessage("ATiQ: Edit discarded.");
  }
}

export class AtiqEditProvider implements vscode.TextDocumentContentProvider {
  static scheme = "atiq-edit";

  provideTextDocumentContent(uri: vscode.Uri): string {
    const params = new URLSearchParams(uri.query);
    const reqId = params.get("req");
    const mode = params.get("mode"); // "before" or "after"
    
    if (!reqId) return "";
    
    const edit = EditManager.getInstance().get(reqId);
    if (!edit) return "Edit no longer available.";

    return mode === "after" ? edit.afterText : edit.beforeText;
  }
}

export async function showDiffReview(
  requestId: string,
  relPath: string,
  originalUri: vscode.Uri
): Promise<void> {
  const beforeUri = vscode.Uri.parse(
    `${AtiqEditProvider.scheme}:before?req=${requestId}&mode=before`
  );
  const afterUri = vscode.Uri.parse(
    `${AtiqEditProvider.scheme}:after?req=${requestId}&mode=after`
  );

  await vscode.commands.executeCommand(
    "vscode.diff",
    beforeUri,
    afterUri,
    `ATiQ Edit: ${path.basename(relPath)}`
  );

  const choice = await vscode.window.showInformationMessage(
    "Apply this edit?",
    "Accept", "Reject"
  );

  if (choice === "Accept") {
    await EditManager.getInstance().accept(requestId);
  } else if (choice === "Reject") {
    EditManager.getInstance().reject(requestId);
  }
}
