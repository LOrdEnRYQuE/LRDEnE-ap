import * as vscode from "vscode";
import { IndexManager } from "./indexing/indexManager";
import { IndexedSymbol } from "./indexing/types";
import * as path from "path";

export class ProjectMapProvider implements vscode.TreeDataProvider<TreeItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<TreeItem | undefined | null | void> = new vscode.EventEmitter<TreeItem | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<TreeItem | undefined | null | void> = this._onDidChangeTreeData.event;

  constructor() {
    const indexer = IndexManager.getInstance();
    indexer.onChanged(() => this.refresh());
  }

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: TreeItem): vscode.TreeItem {
    return element;
  }

  async getChildren(element?: TreeItem): Promise<TreeItem[]> {
    const indexer = IndexManager.getInstance();
    if (!indexer) return [];

    const symbols = indexer.getSymbols();

    if (!element) {
      // Root: show folders and files that have symbols
      const filesWithSymbols = new Set<string>();
      for (const s of symbols) {
        filesWithSymbols.add(s.relPath);
      }

      const rootItems: TreeItem[] = [];
      const folders = new Map<string, string[]>();

      for (const relPath of filesWithSymbols) {
        const parts = relPath.split(path.sep);
        if (parts.length > 1) {
          const rootFolder = parts[0];
          if (!folders.has(rootFolder)) folders.set(rootFolder, []);
          folders.get(rootFolder)!.push(relPath);
        } else {
          rootItems.push(new FileItem(relPath));
        }
      }

      for (const [folder, files] of folders.entries()) {
        rootItems.push(new FolderItem(folder, files));
      }

      return rootItems.sort((a, b) => a.label!.toString().localeCompare(b.label!.toString()));
    }

    if (element instanceof FolderItem) {
      return element.files.map(f => new FileItem(f)).sort((a,b) => a.label!.toString().localeCompare(b.label!.toString()));
    }

    if (element instanceof FileItem) {
      const fileSymbols = symbols
        .filter(s => s.relPath === element.relPath)
        .sort((a, b) => a.line0 - b.line0);
      
      return fileSymbols.map(s => new SymbolItem(s));
    }

    return [];
  }
}

type TreeItem = FolderItem | FileItem | SymbolItem;

class FolderItem extends vscode.TreeItem {
  constructor(public readonly name: string, public readonly files: string[]) {
    super(name, vscode.TreeItemCollapsibleState.Collapsed);
    this.iconPath = new vscode.ThemeIcon("folder");
    this.contextValue = "folder";
  }
}

class FileItem extends vscode.TreeItem {
  constructor(public readonly relPath: string) {
    const label = path.basename(relPath);
    super(label, vscode.TreeItemCollapsibleState.Collapsed);
    this.iconPath = new vscode.ThemeIcon("file");
    this.resourceUri = vscode.Uri.file(relPath);
    this.tooltip = relPath;
    this.contextValue = "file";
    this.command = {
        command: "vscode.open",
        title: "Open File",
        arguments: [vscode.Uri.joinPath(vscode.workspace.workspaceFolders?.[0].uri || vscode.Uri.file("/"), relPath)]
    };
  }
}

class SymbolItem extends vscode.TreeItem {
  constructor(public readonly symbol: IndexedSymbol) {
    super(symbol.name, vscode.TreeItemCollapsibleState.None);
    this.description = symbol.kind;
    this.iconPath = this.getIconForKind(symbol.kind);
    this.tooltip = `${symbol.kind} ${symbol.name}\nLine ${symbol.line0 + 1}`;
    this.contextValue = "symbol";
    
    this.command = {
        command: "vscode.open",
        title: "Go to Symbol",
        arguments: [
            vscode.Uri.joinPath(vscode.workspace.workspaceFolders?.[0].uri || vscode.Uri.file("/"), symbol.relPath),
            { selection: new vscode.Range(symbol.line0, symbol.col0, symbol.line0, symbol.col0) }
        ]
    };
  }

  private getIconForKind(kind: string): vscode.ThemeIcon {
    switch (kind) {
      case "class": return new vscode.ThemeIcon("symbol-class");
      case "function": return new vscode.ThemeIcon("symbol-function");
      case "interface": return new vscode.ThemeIcon("symbol-interface");
      case "method": return new vscode.ThemeIcon("symbol-method");
      case "type": return new vscode.ThemeIcon("symbol-parameter");
      case "const": return new vscode.ThemeIcon("symbol-constant");
      case "enum": return new vscode.ThemeIcon("symbol-enum");
      default: return new vscode.ThemeIcon("symbol-variable");
    }
  }
}
