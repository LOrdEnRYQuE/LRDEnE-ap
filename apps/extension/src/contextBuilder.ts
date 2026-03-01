import * as vscode from "vscode";
import { IndexManager } from "./indexing/indexManager";

export interface ContextData {
  currentFile: {
    path: string;
    content: string;
    language: string;
  };
  selection?: string;
  openTabs: Array<{ path: string; content: string }>;
  symbols: string[];
}

/**
 * Gathers rich context from the active workspace to improve AI responses.
 */
export async function gatherContext(editor?: vscode.TextEditor): Promise<ContextData> {
  const activeEditor = editor || vscode.window.activeTextEditor;
  
  const currentFile = activeEditor ? {
    path: activeEditor.document.uri.fsPath,
    content: activeEditor.document.getText(),
    language: activeEditor.document.languageId,
  } : { path: "none", content: "", language: "" };

  const selection = activeEditor?.selection.isEmpty 
    ? undefined 
    : activeEditor?.document.getText(activeEditor.selection);

  // Gather symbols from current file (native)
  let symbols: string[] = [];
  if (activeEditor) {
    const symbolDefinitions = await vscode.commands.executeCommand<vscode.DocumentSymbol[]>(
      "vscode.executeDocumentSymbolProvider",
      activeEditor.document.uri
    );
    if (symbolDefinitions) {
      symbols = symbolDefinitions.map(s => `${s.kind}: ${s.name}`);
    }
  }

  // Also include a few workspace-wide symbols from the index for global awareness
  const indexer = IndexManager.getInstance();
  if (indexer) {
    const fileName = activeEditor?.document.fileName.split(/[\\/]/).pop() || "";
    const indexed = indexer.search(fileName, 5);
    for (const s of indexed) {
      symbols.push(`[Indexed] ${s.kind}: ${s.name} (${s.relPath})`);
    }
  }

  // Gather snippets from other open tabs (up to 3)
  const openTabs: Array<{ path: string; content: string }> = [];
  const visibleEditors = vscode.window.visibleTextEditors.filter(e => e !== activeEditor);
  
  for (const e of visibleEditors.slice(0, 3)) {
    openTabs.push({
      path: e.document.uri.fsPath,
      content: e.document.getText().slice(0, 1000), // snippet for context
    });
  }

  return {
    currentFile,
    selection,
    openTabs,
    symbols: symbols.slice(0, 25), // limit to top 25 symbols
  };
}
