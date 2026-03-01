// ─────────────────────────────────────────────────────────────
// ATiQ Editor — Symbol Index Manager
// ─────────────────────────────────────────────────────────────

import * as vscode from "vscode";
import * as fs from "fs/promises";
import * as path from "path";
import { IndexedSymbol, IndexMeta, INDEX_VERSION, INDEX_CONFIG } from "./types";
import { extractSymbolsFromContent } from "./extractor";

export class IndexManager {
  private static instance: IndexManager;
  private symbols: Map<string, IndexedSymbol> = new Map();
  private meta: IndexMeta;
  private storageUri: vscode.Uri;
  private isIndexing: boolean = false;
  private watcher: vscode.FileSystemWatcher | undefined;
  private readonly _onChanged = new vscode.EventEmitter<void>();
  public readonly onChanged: vscode.Event<void> = this._onChanged.event;

  private constructor(context: vscode.ExtensionContext) {
    this.storageUri = context.globalStorageUri;
    this.meta = this.createEmptyMeta();
  }

  public static getInstance(context?: vscode.ExtensionContext): IndexManager {
    if (!IndexManager.instance && context) {
      IndexManager.instance = new IndexManager(context);
    }
    return IndexManager.instance;
  }

  private createEmptyMeta(): IndexMeta {
    return {
      fileCount: 0,
      symbolCount: 0,
      totalBytes: 0,
      lastBuildTime: 0,
      version: INDEX_VERSION,
      isCapped: false,
    };
  }

  public async initialize(): Promise<void> {
    await fs.mkdir(this.storageUri.fsPath, { recursive: true });
    await this.loadFromDisk();
    
    // Initial build if empty
    if (this.symbols.size === 0) {
      await this.rebuild();
    }

    this.setupWatcher();
  }

  private async loadFromDisk(): Promise<void> {
    const indexPath = path.join(this.storageUri.fsPath, "index-v1.json");
    const metaPath = path.join(this.storageUri.fsPath, "index-meta.json");

    try {
      const metaData = await fs.readFile(metaPath, "utf-8");
      const meta = JSON.parse(metaData) as IndexMeta;

      if (meta.version === INDEX_VERSION) {
        this.meta = meta;
        const indexData = await fs.readFile(indexPath, "utf-8");
        const list = JSON.parse(indexData) as IndexedSymbol[];
        for (const s of list) {
          this.symbols.set(s.id, s);
        }
      }
    } catch {
      // fresh start
    }
  }

  public async saveToDisk(): Promise<void> {
    const indexPath = path.join(this.storageUri.fsPath, "index-v1.json");
    const metaPath = path.join(this.storageUri.fsPath, "index-meta.json");

    const list = Array.from(this.symbols.values());
    this.meta.symbolCount = list.length;
    this.meta.lastBuildTime = Date.now();

    await fs.writeFile(indexPath, JSON.stringify(list));
    await fs.writeFile(metaPath, JSON.stringify(this.meta));
  }

  public async rebuild(): Promise<void> {
    if (this.isIndexing) return;
    this.isIndexing = true;
    this._onChanged.fire();
    this.symbols.clear();
    this.meta = this.createEmptyMeta();

    const files = await vscode.workspace.findFiles(
      "**/*.{ts,tsx,js,jsx,py,go,rs,py}", 
      `{${INDEX_CONFIG.EXCLUDE_PATTERNS.join(",")}}`
    );

    for (const file of files) {
      if (this.meta.isCapped) break;
      await this.indexFile(file);
    }

    await this.saveToDisk();
    this.isIndexing = false;
    this._onChanged.fire();
  }

  public async indexFile(uri: vscode.Uri): Promise<void> {
    if (this.meta.fileCount >= INDEX_CONFIG.MAX_FILES) {
      this.meta.isCapped = true;
      return;
    }

    try {
      const stat = await vscode.workspace.fs.stat(uri);
      if (stat.size > INDEX_CONFIG.MAX_FILE_BYTES) return; // skip large files

      // Skip if total size cap exceeded
      if (this.meta.totalBytes + stat.size > INDEX_CONFIG.MAX_TOTAL_BYTES) {
        this.meta.isCapped = true;
        return;
      }

      const content = Buffer.from(await vscode.workspace.fs.readFile(uri)).toString("utf-8");
      
      const relPath = vscode.workspace.asRelativePath(uri);
      const results = extractSymbolsFromContent(content, relPath);

      // Remove existing symbols for this file
      for (const [id, s] of this.symbols.entries()) {
        if (s.relPath === relPath) this.symbols.delete(id);
      }

      // Add new ones
      for (const res of results) {
        const id = `${relPath}:${res.kind}:${res.name}:${res.line0}`;
        this.symbols.set(id, {
          ...res,
          id,
          relPath,
          updatedAt: Date.now(),
        });
      }

      this.meta.fileCount++;
      this.meta.totalBytes += stat.size;
      this._onChanged.fire();
    } catch (err) {
      // console.error(`Failed to index ${uri.fsPath}:`, err);
    }
  }

  private setupWatcher(): void {
    if (this.watcher) this.watcher.dispose();

    this.watcher = vscode.workspace.createFileSystemWatcher("**/*.{ts,tsx,js,jsx,py,go,rs}");
    
    this.watcher.onDidChange(uri => this.indexFile(uri));
    this.watcher.onDidCreate(uri => this.indexFile(uri));
    this.watcher.onDidDelete(uri => {
      const relPath = vscode.workspace.asRelativePath(uri);
      for (const [id, s] of this.symbols.entries()) {
        if (s.relPath === relPath) this.symbols.delete(id);
      }
    });

    // Debounced save
    let saveTimeout: ReturnType<typeof setTimeout> | undefined;
    const triggerSave = () => {
      if (saveTimeout) clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => this.saveToDisk(), 10000);
    };

    this.watcher.onDidChange(triggerSave);
    this.watcher.onDidCreate(triggerSave);
    this.watcher.onDidDelete(triggerSave);
  }

  public search(query: string, limit = 30, currentFilePath?: string): IndexedSymbol[] {
    const q = query.toLowerCase();
    const results: IndexedSymbol[] = [];

    for (const s of this.symbols.values()) {
      const name = s.name.toLowerCase();
      if (name.includes(q)) {
        results.push(s);
      }
    }

    // Ranking algorithm (feels premium)
    return results
      .sort((a, b) => {
        const aLower = a.name.toLowerCase();
        const bLower = b.name.toLowerCase();

        // 1. Starts with query wins (priority)
        const aStarts = aLower.startsWith(q);
        const bStarts = bLower.startsWith(q);
        if (aStarts && !bStarts) return -1;
        if (bStarts && !aStarts) return 1;

        // 2. Path proximity (Architecture-aware)
        if (currentFilePath) {
          const aInSameFile = a.relPath === currentFilePath;
          const bInSameFile = b.relPath === currentFilePath;
          if (aInSameFile && !bInSameFile) return -1;
          if (bInSameFile && !aInSameFile) return 1;

          // Same directory boost
          const aDir = path.dirname(a.relPath);
          const bDir = path.dirname(b.relPath);
          const currentDir = path.dirname(currentFilePath);
          const aInSameDir = aDir === currentDir;
          const bInSameDir = bDir === currentDir;
          if (aInSameDir && !bInSameDir) return -1;
          if (bInSameDir && !aInSameDir) return 1;
        }

        // 3. Shorter name (exact match priority)
        if (a.name.length !== b.name.length) {
          return a.name.length - b.name.length;
        }

        // 4. Alphabetical
        return a.name.localeCompare(b.name);
      })
      .slice(0, limit);
  }

  public getSymbols(): IndexedSymbol[] {
    return Array.from(this.symbols.values());
  }

  public getStatus(): { isIndexing: boolean; meta: IndexMeta } {
    return { isIndexing: this.isIndexing, meta: this.meta };
  }

  public async findReferences(symbolName: string, limit = 5): Promise<string[]> {
    const references: string[] = [];
    const q = new RegExp(`\\b${symbolName}\\b`); // whole word match

    // Very simple reference search: check files in workspace
    const files = await vscode.workspace.findFiles(
      "**/*.{ts,tsx,js,jsx,py,go,rs}",
      `{${INDEX_CONFIG.EXCLUDE_PATTERNS.join(",")}}`
    );

    for (const file of files) {
      if (references.length >= limit) break;
      
      const content = Buffer.from(await vscode.workspace.fs.readFile(file)).toString("utf-8");
      if (q.test(content)) {
        const relPath = vscode.workspace.asRelativePath(file);
        // Find first match and get a snippet
        const lines = content.split("\n");
        const lineIndex = lines.findIndex(l => q.test(l));
        if (lineIndex !== -1) {
          const start = Math.max(0, lineIndex - 2);
          const end = Math.min(lines.length, lineIndex + 3);
          const snippet = lines.slice(start, end).join("\n");
          references.push(`[Used in ${relPath}:L${lineIndex + 1}]\n${snippet}`);
        }
      }
    }

    return references;
  }

  public async clear(): Promise<void> {
    this.symbols.clear();
    this.meta = this.createEmptyMeta();
    this._onChanged.fire();
    await this.saveToDisk();
  }

  public getArchitectureSummary(): string {
    const symbols = this.getSymbols();
    const files = new Map<string, IndexedSymbol[]>();
    for (const s of symbols) {
      if (!files.has(s.relPath)) files.set(s.relPath, []);
      files.get(s.relPath)!.push(s);
    }

    let summary = "Project Architecture Map:\n\n";
    const sortedFiles = Array.from(files.keys()).sort();
    
    // Top 50 files to avoid context bloating
    for (const relPath of sortedFiles.slice(0, 50)) {
       const fileSymbols = files.get(relPath)!;
       summary += `- ${relPath}\n`;
       for (const s of fileSymbols.slice(0, 10)) {
         summary += `  * ${s.kind}: ${s.name}\n`;
       }
       if (fileSymbols.length > 10) summary += `  * ... and ${fileSymbols.length - 10} more symbols\n`;
    }

    if (sortedFiles.length > 50) {
      summary += `\n... and ${sortedFiles.length - 50} more files indexed.\n`;
    }

    return summary;
  }
}
