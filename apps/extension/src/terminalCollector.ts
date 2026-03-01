import * as vscode from "vscode";

/**
 * TerminalCollector handles gathering context from the active terminal.
 * Monitors Shell Execution events to build an in-memory history of commands.
 */
export class TerminalCollector {
  private static instance: TerminalCollector;
  private recentCommands: Array<{ command: string; output: string }> = [];
  private readonly MAX_RECENT = 5;

  private constructor() {
    this.registerListeners();
  }

  public static getInstance(): TerminalCollector {
    if (!TerminalCollector.instance) {
      TerminalCollector.instance = new TerminalCollector();
    }
    return TerminalCollector.instance;
  }

  private registerListeners(): void {
    // VS Code 1.90+ Shell Integration events
    vscode.window.onDidEndTerminalShellExecution(async (event) => {
      const command = event.execution.commandLine.value;
      const output = await this.getCommandOutput(event.execution);
      
      if (output) {
        this.recentCommands.push({ command, output });
        if (this.recentCommands.length > this.MAX_RECENT) {
          this.recentCommands.shift();
        }
      }
    });
  }

  /**
   * Returns the collected terminal context.
   */
  public async getActiveTerminalContext(): Promise<string> {
    if (this.recentCommands.length === 0) {
      return "No recent terminal command outputs captured. Use shell integration to enable capture.";
    }

    let context = "Recent Terminal Activity:\n\n";
    for (const item of this.recentCommands) {
      context += `> ${item.command}\n${item.output}\n---\n`;
    }
    return context;
  }

  private async getCommandOutput(cmd: vscode.TerminalShellExecution): Promise<string | undefined> {
    try {
      const outputStream = cmd.read();
      if (!outputStream) return undefined;

      let result = "";
      const limit = 4000;
      
      for await (const chunk of outputStream) {
        result += chunk;
        if (result.length > limit) {
          result = result.slice(0, limit) + "\n[Output Truncated...]";
          break;
        }
      }
      
      return this.redactSecrets(result.trim());
    } catch {
      return undefined;
    }
  }

  /**
   * Enhanced regex scrub for common secret patterns and high-entropy strings with guardrails.
   * - Redacts long high-entropy strings (20-24+ chars) that match base64/hex-ish patterns
   * - Uses conservative redaction format to preserve debugging context
   */
  private redactSecrets(text: string): string {
    let redacted = text;

    // 1. Specific Known Patterns (API Keys, tokens)
    const knownPatterns = [
      /(API_KEY|SECRET|PASSWORD|TOKEN|AUTH|BEARER|AWS_SECRET)\s*[=:]\s*['"]?([a-zA-Z0-9_\-\.]{8,})['"]?/gi,
      /bearer\s+([a-zA-Z0-9\-\._~+/]+=*)/gi,
      /AIza[0-9A-Za-z-_]{35}/g, // Google API Key
      /sk-[a-zA-Z0-9]{20,}/g,    // OpenAI Key
    ];

    for (const p of knownPatterns) {
      redacted = redacted.replace(p, (match, group1, group2) => {
        // If we have a key=value pair, keep the key and partial value
        if (group1 && group2) {
          const prefix = group2.slice(0, Math.min(4, group2.length));
          return `${group1}=${prefix}...REDACTED…`;
        }
        // Otherwise mask but keep format hint
        if (match.startsWith('sk-')) {
          return `sk-…REDACTED…`;
        }
        return `${match.slice(0, Math.min(8, match.length))}…REDACTED…`;
      });
    }

    // 2. High-Entropy "Long Words" (Catch-all for Base64/Hex tokens)
    // Matches 20+ chars with base64/hex characteristics, avoiding false positives
    const entropyPattern = /\b[a-zA-Z0-9+/=_-]{20,}\b/g;
    redacted = redacted.replace(entropyPattern, (match) => {
      // Don't redact if it looks like a common non-secret:
      // - Contains path separators (/ or \)
      // - Contains dots (likely file extensions)
      // - Common words/phrases (case-insensitive)
      // - Very repetitive patterns (like "aaaaaaaaaa")
      if (match.includes("/") || match.includes("\\") || match.includes(".")) {
        return match;
      }
      
      // Skip if it's a common word (short list for practicality)
      const commonWords = ["the", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "by", "from", "up", "about", "into", "through", "during", "before", "after", "above", "below", "between", "among", "within", "without", "upon", "over", "under", "across", "behind", "beyond", "plus", "minus", "times", "divide", "equals", "greater", "less", "than", "not", "null", "undefined", "true", "false", "yes", "no", "ok", "error", "success", "failed", "pending", "complete", "done", "ready", "loading", "running", "stopped", "started", "finished", "cancelled", "timeout", "expired", "invalid", "valid", "active", "inactive", "enabled", "disabled", "auto", "manual", "test", "demo", "sample", "example", "default", "standard", "normal", "basic", "advanced", "simple", "complex", "custom", "generic", "specific", "general", "particular", "certain", "various", "multiple", "single", "individual", "separate", "combined", "merged", "split", "joined", "connected", "disconnected"];
      if (commonWords.includes(match.toLowerCase())) {
        return match;
      }
      
      // Skip if it's too repetitive (low entropy)
      if (new Set(match.toLowerCase().split('')).size < match.length * 0.3) {
        return match;
      }
      
      // Check if it has base64-like characteristics (mix of letters, numbers, +, /, =)
      const hasBase64Chars = /[+/=]/.test(match);
      const hasGoodMix = /[a-zA-Z]/.test(match) && /[0-9]/.test(match);
      
      if (hasBase64Chars || hasGoodMix) {
        const prefix = match.slice(0, Math.min(4, match.length));
        return `${prefix}…REDACTED…`;
      }
      
      return match;
    });

    return redacted;
  }

  public dispose(): void {
    // Subscription cleanup (optional as it's a singleton)
  }
}
