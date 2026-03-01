// ─────────────────────────────────────────────────────────────
// ATiQ Editor — Symbol Extractor (Regex-based)
// Lightweight extraction for TS/JS, Python, Go.
// ─────────────────────────────────────────────────────────────

import { IndexedSymbol, SymbolKind } from "./types";

interface ExtractorResult {
  name: string;
  kind: SymbolKind;
  line0: number;
  col0: number;
  signature: string;
}

export function extractSymbolsFromContent(
  content: string,
  relPath: string
): ExtractorResult[] {
  const results: ExtractorResult[] = [];
  const lines = content.split("\n");

  const ext = relPath.split(".").pop()?.toLowerCase();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.length === 0 || trimmed.startsWith("//") || trimmed.startsWith("#") || trimmed.startsWith("/*")) {
      continue;
    }

    // ── TypeScript / JavaScript ──
    if (ext === "ts" || ext === "tsx" || ext === "js" || ext === "jsx") {
      // 1. Classes
      let match = trimmed.match(/^(?:export\s+)?class\s+(\w+)/);
      if (match) {
        results.push(createResult(match[1], "class", i, line));
        continue;
      }

      // 2. Functions
      match = trimmed.match(/^(?:export\s+)?(?:async\s+)?function\s+(\w+)/);
      if (match) {
        results.push(createResult(match[1], "function", i, line));
        continue;
      }

      // 3. Interfaces / Types
      match = trimmed.match(/^(?:export\s+)?(?:interface|type|enum)\s+(\w+)/);
      if (match) {
        const kind: SymbolKind = trimmed.includes("interface") ? "interface" : (trimmed.includes("enum") ? "enum" : "type");
        results.push(createResult(match[1], kind, i, line));
        continue;
      }

      // 4. Constants (conservative)
      match = trimmed.match(/^(?:export\s+)?const\s+(\w+)\s*=/);
      if (match) {
        results.push(createResult(match[1], "const", i, line));
        continue;
      }
    }

    // ── Python ──
    if (ext === "py") {
      // 1. Classes
      let match = trimmed.match(/^class\s+(\w+)/);
      if (match) {
        results.push(createResult(match[1], "class", i, line));
        continue;
      }

      // 2. Functions / Methods
      match = trimmed.match(/^def\s+(\w+)/);
      if (match) {
        results.push(createResult(match[1], trimmed.startsWith("    ") ? "method" : "function", i, line));
        continue;
      }
    }

    // ── Go ──
    if (ext === "go") {
      // 1. Functions
      let match = trimmed.match(/^func\s+(\w+)/);
      if (match) {
        results.push(createResult(match[1], "function", i, line));
        continue;
      }

      // 2. Methods: func (r *Type) Name(...)
      match = trimmed.match(/^func\s+\(.*\)\s+(\w+)/);
      if (match) {
        results.push(createResult(match[1], "method", i, line));
        continue;
      }

      // 3. Types
      match = trimmed.match(/^type\s+(\w+)\s+(struct|interface|func|type)/);
      if (match) {
        results.push(createResult(match[1], trimmed.includes("interface") ? "interface" : "type", i, line));
        continue;
      }
    }
  }

  return results;
}

function createResult(name: string, kind: SymbolKind, line0: number, fullLine: string): ExtractorResult {
  return {
    name,
    kind,
    line0,
    col0: fullLine.indexOf(name),
    signature: fullLine.trim(),
  };
}
