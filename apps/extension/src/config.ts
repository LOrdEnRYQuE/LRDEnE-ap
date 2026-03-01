// ─────────────────────────────────────────────────────────────
// ATiQ Extension Config
// Reads VS Code settings: atiq.apiUrl, atiq.token, atiq.model
// ─────────────────────────────────────────────────────────────

import * as vscode from "vscode";

export interface AtiqConfig {
  apiUrl: string;
  telemetryEnabled: boolean;
}

export function getConfig(): AtiqConfig {
  const config = vscode.workspace.getConfiguration("atiq");
  return {
    apiUrl: config.get<string>("apiUrl") ?? "http://localhost:8787",
    telemetryEnabled: config.get<boolean>("telemetryEnabled") ?? true,
  };
}
