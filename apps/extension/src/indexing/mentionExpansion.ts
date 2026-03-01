// ─────────────────────────────────────────────────────────────
// ATiQ Editor — Mention Expansion Utility
// Resolves @symbol and @file in message text.
// ─────────────────────────────────────────────────────────────

import * as vscode from "vscode";
import { IndexManager } from "./indexManager";
import { TerminalCollector } from "../terminalCollector";

export interface ResolvedMention {
  text: string;
  context: string;
}

export async function expandMentions(message: string): Promise<ResolvedMention[]> {
  const mentions: ResolvedMention[] = [];
  const indexer = IndexManager.getInstance();

  // 0. Resolve @map mention
  if (message.includes("@map")) {
    mentions.push({
      text: "@map",
      context: indexer.getArchitectureSummary()
    });
  }

  // 1. Resolve @terminal mention
  if (message.includes("@terminal")) {
    const terminalContext = await TerminalCollector.getInstance().getActiveTerminalContext();
    mentions.push({
      text: "@terminal",
      context: terminalContext
    });
  }

  // 2. Resolve @file mentions
  const fileMatches = message.matchAll(/@file\s+([^\s]+)/g);
  for (const match of fileMatches) {
    const filename = match[1];
    try {
      const files = await vscode.workspace.findFiles(`**/${filename}`, null, 1);
      if (files.length > 0) {
        const content = await vscode.workspace.fs.readFile(files[0]);
        const text = Buffer.from(content).toString("utf-8").slice(0, 5000); // 5k char cap
        mentions.push({
          text: match[0],
          context: `[@file ${filename}]\n${text}`
        });
      }
    } catch {
      // skip if file not found
    }
  }

  // 2. Resolve @symbol mentions
  const symbolMatches = message.matchAll(/@symbol\s+([^\s]+)/g);
  const activeEditor = vscode.window.activeTextEditor;
  const currentPath = activeEditor ? vscode.workspace.asRelativePath(activeEditor.document.uri) : undefined;

  for (const match of symbolMatches) {
    const symbolName = match[1];
    const results = indexer.search(symbolName, 1, currentPath);
    
    if (results.length > 0) {
      const symbol = results[0];
      try {
        const uri = vscode.Uri.joinPath(vscode.workspace.workspaceFolders![0].uri, symbol.relPath);
        const content = await vscode.workspace.fs.readFile(uri);
        const lines = Buffer.from(content).toString("utf-8").split("\n");
        
        // Extract +/- 20 lines around the symbol
        const start = Math.max(0, symbol.line0 - 10);
        const end = Math.min(lines.length, symbol.line0 + 30);
        const snippet = lines.slice(start, end).join("\n");

        const references = await indexer.findReferences(symbol.name, 3);
        const refBlock = references.length > 0 ? `\n\nUSAGES:\n${references.join("\n\n")}` : "";

        mentions.push({
          text: match[0],
          context: `[@symbol ${symbol.name}] ${symbol.relPath}:${symbol.line0 + 1}\n${snippet}${refBlock}`
        });
      } catch {
        // skip
      }
    }
  }

  return mentions;
}
