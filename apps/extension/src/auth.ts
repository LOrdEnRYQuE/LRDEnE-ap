// ─────────────────────────────────────────────────────────────
// ATiQ Extension Auth Manager
// Handles JWT & Refresh Token rotation via VS Code SecretStorage
// ─────────────────────────────────────────────────────────────

import * as vscode from "vscode";
import { createClient, AuthError } from "@atiq/sdk";
import { getConfig } from "./config";

export class AuthManager {
  private static instance: AuthManager;
  private context!: vscode.ExtensionContext;
  private refreshPromise: Promise<string | undefined> | null = null;

  private constructor() {}

  public static getInstance(): AuthManager {
    if (!AuthManager.instance) {
      AuthManager.instance = new AuthManager();
    }
    return AuthManager.instance;
  }

  public initialize(context: vscode.ExtensionContext) {
    this.context = context;
  }

  public async getToken(): Promise<string | undefined> {
    return this.context.secrets.get("atiq.jwt");
  }

  public async getRefreshToken(): Promise<string | undefined> {
    return this.context.secrets.get("atiq.refreshToken");
  }

  public async setTokens(jwt: string, refreshToken: string): Promise<void> {
    await this.context.secrets.store("atiq.jwt", jwt);
    await this.context.secrets.store("atiq.refreshToken", refreshToken);
    vscode.commands.executeCommand("atiq.refreshStatusBar");
  }

  public async logout(): Promise<void> {
    await this.context.secrets.delete("atiq.jwt");
    await this.context.secrets.delete("atiq.refreshToken");
    vscode.commands.executeCommand("atiq.refreshStatusBar");
  }

  // Rotate tokens with concurrency lock
  public async rotateToken(): Promise<string | undefined> {
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = (async () => {
      const refreshToken = await this.getRefreshToken();
      if (!refreshToken) return undefined;

      const config = getConfig();
      try {
        const client = createClient({ apiUrl: config.apiUrl });
        const res = await client.auth.refresh({ refreshToken });
        await this.setTokens(res.jwt, res.refreshToken);
        return res.jwt;
      } catch (err) {
        await this.logout();
        return undefined;
      }
    })();

    try {
      const res = await this.refreshPromise;
      return res;
    } finally {
      this.refreshPromise = null;
    }
  }

  /**
   * Wrapper to automatically handle 401s and retry once after a refresh
   */
  public async withAuth<T>(action: (client: ReturnType<typeof createClient>) => Promise<T>): Promise<T> {
    const config = getConfig();
    let jwt = await this.getToken();

    if (!jwt) {
      throw new AuthError("Not logged in");
    }

    try {
      const client = createClient({ apiUrl: config.apiUrl, token: jwt });
      return await action(client);
    } catch (err) {
      if (err instanceof AuthError) {
        // Try refresh
        const newJwt = await this.rotateToken();
        if (newJwt) {
          const newClient = createClient({ apiUrl: config.apiUrl, token: newJwt });
          return await action(newClient);
        }
      }
      throw err;
    }
  }
}
