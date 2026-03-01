// ─────────────────────────────────────────────────────────────
// ATiQ Editor — Indexer Types
// ─────────────────────────────────────────────────────────────

export type SymbolKind =
  | "class"
  | "function"
  | "method"
  | "interface"
  | "type"
  | "const"
  | "var"
  | "enum"
  | "module";

export interface IndexedSymbol {
  id: string; // `${relPath}:${kind}:${name}:${line0}`
  name: string;
  kind: SymbolKind;
  relPath: string;
  line0: number; // 0-indexed
  col0: number;
  signature?: string;
  updatedAt: number;
}

export interface IndexMeta {
  fileCount: number;
  symbolCount: number;
  totalBytes: number;
  lastBuildTime: number;
  version: number;
  isCapped: boolean;
}

export const INDEX_VERSION = 1;

export const INDEX_CONFIG = {
  MAX_FILES: 20_000,
  MAX_TOTAL_BYTES: 200 * 1024 * 1024, // 200MB
  MAX_FILE_BYTES: 512 * 1024, // 512KB per file
  EXCLUDE_PATTERNS: [
    "**/node_modules/**",
    "**/.git/**",
    "**/dist/**",
    "**/build/**",
    "**/.next/**",
    "**/out/**",
    "**/coverage/**",
    "**/.turbo/**",
    "**/bin/**",
    "**/obj/**",
  ],
};
