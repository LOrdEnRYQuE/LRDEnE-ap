import fs from 'node:fs/promises';
import path from 'node:path';
import { app } from 'electron';

export interface SymbolInfo {
  name: string;
  type: 'class' | 'function' | 'interface' | 'type' | 'const';
  file: string;
  line: number;
}

const IGNORE_DIRS = ['node_modules', '.git', 'dist', '.next', '.turbo', 'build'];
const ALLOWED_EXTS = ['.ts', '.tsx', '.js', '.jsx'];

class SymbolIndexer {
  private symbols: SymbolInfo[] = [];
  private isIndexing = false;
  private cachePath: string;

  constructor() {
    this.cachePath = path.join(app.getPath('userData'), 'symbol-cache.json');
    this.loadCache();
  }

  private async loadCache() {
    try {
      const data = await fs.readFile(this.cachePath, 'utf-8');
      this.symbols = JSON.parse(data);
      console.log(`[Indexer] Loaded ${this.symbols.length} symbols from cache.`);
    } catch {
      // No cache or invalid cache
    }
  }

  private async saveCache() {
    try {
      await fs.writeFile(this.cachePath, JSON.stringify(this.symbols));
    } catch (err) {
      console.error('[Indexer] Failed to save cache:', err);
    }
  }

  async indexProject(rootPath: string) {
    if (this.isIndexing) return;
    this.isIndexing = true;
    
    const startTime = Date.now();
    console.log(`[Indexer] Starting parallel index of: ${rootPath}`);

    try {
      const allFiles: string[] = [];
      await this.collectFiles(rootPath, allFiles);
      
      this.symbols = []; // Reset but keep cache until done? No, let's refresh.
      
      // Parallel indexing with concurrency limit of 10
      const limit = 10;
      for (let i = 0; i < allFiles.length; i += limit) {
        const chunk = allFiles.slice(i, i + limit);
        await Promise.all(chunk.map(file => this.extractSymbols(file)));
      }

      await this.saveCache();
      console.log(`[Indexer] Parallel indexing done in ${Date.now() - startTime}ms. Found ${this.symbols.length} symbols.`);
    } catch (err) {
      console.error('[Indexer] Error indexing project:', err);
    } finally {
      this.isIndexing = false;
    }
  }

  private async collectFiles(dir: string, fileList: string[]) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (!IGNORE_DIRS.includes(entry.name)) {
          await this.collectFiles(fullPath, fileList);
        }
      } else if (entry.isFile()) {
        if (ALLOWED_EXTS.includes(path.extname(entry.name))) {
          fileList.push(fullPath);
        }
      }
    }
  }

  private async extractSymbols(filePath: string) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const lines = content.split('\n');

      const regexps = [
        { type: 'class', regex: /^\s*(?:export\s+)?class\s+([a-zA-Z0-9_$]+)/ },
        { type: 'function', regex: /^\s*(?:export\s+)?(?:async\s+)?function\s+([a-zA-Z0-9_$]+)/ },
        { type: 'interface', regex: /^\s*(?:export\s+)?interface\s+([a-zA-Z0-9_$]+)/ },
        { type: 'type', regex: /^\s*(?:export\s+)?type\s+([a-zA-Z0-9_$]+)/ },
        { type: 'const', regex: /^\s*(?:export\s+)?const\s+([a-zA-Z0-9_$]+)\s*=/ },
      ];

      lines.forEach((line, index) => {
        for (const { type, regex } of regexps) {
          const match = line.match(regex);
          if (match) {
            this.symbols.push({
              name: match[1],
              type: type as any,
              file: filePath,
              line: index + 1,
            });
            break;
          }
        }
      });
    } catch (err) {
      // Skip files that fail
    }
  }

  search(query: string): SymbolInfo[] {
    if (!query) return [];
    const q = query.toLowerCase();
    
    // Scored search: 
    // 3 points: exact match
    // 2 points: starts with
    // 1 point: includes
    const scored = this.symbols
      .map(s => {
        const nameLower = s.name.toLowerCase();
        let score = 0;
        if (nameLower === q) score = 3;
        else if (nameLower.startsWith(q)) score = 2;
        else if (nameLower.includes(q)) score = 1;
        
        return { symbol: s, score };
      })
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score || a.symbol.name.length - b.symbol.name.length)
      .slice(0, 15);

    return scored.map(x => x.symbol);
  }

  getStatus() {
    return {
      isIndexing: this.isIndexing,
      count: this.symbols.length,
    };
  }
}

export const indexer = new SymbolIndexer();
