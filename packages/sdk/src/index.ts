// ─────────────────────────────────────────────────────────────
// ATiQ SDK — Typed API client
// Used by: apps/web, apps/extension
// ─────────────────────────────────────────────────────────────

import type {
  EntitlementResponse,
  MeResponse,
  MagicLinkRequest,
  MagicLinkResponse,
  VerifyRequest,
  VerifyResponse,
  ChatRequest,
  EditRequest,
  EditResponse,
  CheckoutRequest,
  CheckoutResponse,
  PortalResponse,
  ApiErrorResponse,
  TeamResponse,
  TeamStatsResponse,
  AuditLogResponse,
  RefreshRequest,
  RefreshResponse,
} from "../../shared/src/index.js";

// ── Error Classes ─────────────────────────────────────────────

export class AtiqError extends Error {
  constructor(
    public readonly code: ApiErrorResponse["error"]["code"],
    message: string,
    public readonly statusCode: number,
    public readonly hint?: string,
    public readonly requestId?: string
  ) {
    super(message);
    this.name = "AtiqError";
  }
}

export class AuthError extends AtiqError {
  constructor(message = "Unauthorized", requestId?: string) {
    super("UNAUTHENTICATED", message, 401, undefined, requestId);
    this.name = "AuthError";
  }
}

export class PlanLimitError extends AtiqError {
  constructor(message = "Plan limit reached. Please upgrade.", requestId?: string) {
    super("PLAN_LIMIT", message, 402, "Upgrade required", requestId);
    this.name = "PlanLimitError";
  }
}

export class RateLimitError extends AtiqError {
  constructor(message = "Daily limit reached.", requestId?: string) {
    super("RATE_LIMIT", message, 429, "Quota reset tomorrow", requestId);
    this.name = "RateLimitError";
  }
}

// ── Client Config ─────────────────────────────────────────────

export interface ClientConfig {
  apiUrl: string;
  token?: string;
}

// ── Internal fetch helper ─────────────────────────────────────

async function apiFetch<T>(
  config: ClientConfig,
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${config.apiUrl}${path}`;
  const headers: any = {
    "Content-Type": "application/json",
    ...(config.token ? { Authorization: `Bearer ${config.token}` } : {}),
    ...(options.headers ?? {}),
  };

  const res = await fetch(url, { ...options, headers });

  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as Partial<ApiErrorResponse>;
    const errorData = body.error ?? { code: "INTERNAL", message: `HTTP ${res.status}` };
    const code = errorData.code;
    const message = errorData.message;
    const requestId = body.requestId;

    if (res.status === 401) throw new AuthError(message, requestId);
    if (res.status === 402) throw new PlanLimitError(message, requestId);
    
    throw new AtiqError(code, message, res.status, errorData.hint, requestId);
  }

  return res.json() as Promise<T>;
}

// ── Auth API ──────────────────────────────────────────────────

function createAuthClient(config: ClientConfig) {
  return {
    sendMagicLink: (body: MagicLinkRequest) =>
      apiFetch<MagicLinkResponse>(config, "/auth/magiclink", {
        method: "POST",
        body: JSON.stringify(body),
      }),

    verify: (body: VerifyRequest) =>
      apiFetch<VerifyResponse>(config, "/auth/verify", {
        method: "POST",
        body: JSON.stringify(body),
      }),

    refresh: (body: RefreshRequest) =>
      apiFetch<RefreshResponse>(config, "/auth/refresh", {
        method: "POST",
        body: JSON.stringify(body),
      }),

    logout: (body: { refreshToken?: string }) =>
      apiFetch<{ success: boolean }>(config, "/auth/logout", {
        method: "POST",
        body: JSON.stringify(body),
      }),
  };
}

// ── User + Entitlements API ───────────────────────────────────

function createUserClient(config: ClientConfig) {
  return {
    me: () => apiFetch<MeResponse>(config, "/me"),
    entitlements: () => apiFetch<EntitlementResponse>(config, "/v1/entitlements"),
  };
}

// ── Chat API ──────────────────────────────────────────────────

export interface StreamCallbacks {
  onDelta?: (text: string) => void;
  onMeta?: (meta: { requestId: string; model: string; plan: string }) => void;
  onError?: (error: ApiErrorResponse["error"]) => void;
  onDone?: (usage?: any) => void;
}

function createChatClient(config: ClientConfig) {
  return {
    stream: async (
      request: ChatRequest,
      callbacks: StreamCallbacks,
      signal?: AbortSignal
    ): Promise<void> => {
      const url = `${config.apiUrl}/v1/chat/stream`;
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (config.token) headers["Authorization"] = `Bearer ${config.token}`;

      // Inject idempotency key if missing
      const body = {
        ...request,
        clientRequestId: request.clientRequestId || crypto.randomUUID()
      };

      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
        signal,
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as Partial<ApiErrorResponse>;
        const errorData = body.error ?? { code: "INTERNAL", message: `HTTP ${res.status}` };
        
        if (res.status === 401) throw new AuthError(errorData.message, body.requestId);
        if (res.status === 402) throw new PlanLimitError(errorData.message, body.requestId);
        if (res.status === 429) throw new RateLimitError(errorData.message, body.requestId);
        
        throw new AtiqError(errorData.code, errorData.message, res.status, errorData.hint, body.requestId);
      }

      if (!res.body) throw new Error("Response body is null");

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";

      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const frames = buffer.split("\n\n");
          buffer = frames.pop() ?? "";

          for (const frame of frames) {
            const lines = frame.split("\n");
            let eventType = "delta";
            let data = "";

            for (const line of lines) {
              if (line.startsWith("event: ")) {
                eventType = line.slice(7).trim();
              } else if (line.startsWith("data: ")) {
                data = line.slice(6).trim();
              }
            }

            if (!data) continue;

            try {
              const json = JSON.parse(data);
              
              switch (eventType) {
                case "delta":
                  if (json.delta) callbacks.onDelta?.(json.delta);
                  break;
                case "meta":
                  callbacks.onMeta?.(json);
                  break;
                case "error":
                  callbacks.onError?.(json.error || json);
                  break;
                case "done":
                  callbacks.onDone?.(json.usage);
                  return;
              }
            } catch (e) {
              console.warn("Failed to parse SSE JSON payload", data, e);
            }
          }
        }
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }
        throw err;
      } finally {
        reader.releaseLock();
      }
    },
  };
}

// ── Edits API ─────────────────────────────────────────────────

function createEditsClient(config: ClientConfig) {
  return {
    apply: (request: EditRequest) => {
      const body = {
        ...request,
        clientRequestId: request.clientRequestId || crypto.randomUUID()
      };
      
      return apiFetch<EditResponse>(config, "/v1/edits", {
        method: "POST",
        body: JSON.stringify(body),
      });
    },
  };
}

// ── Billing API ───────────────────────────────────────────────

function createBillingClient(config: ClientConfig) {
  return {
    createCheckout: (body: CheckoutRequest) =>
      apiFetch<CheckoutResponse>(config, "/billing/checkout", {
        method: "POST",
        body: JSON.stringify(body),
      }),

    portal: () =>
      apiFetch<PortalResponse>(config, "/billing/portal"),
  };
}

// ── Team API ──────────────────────────────────────────────────

function createTeamClient(config: ClientConfig) {
  return {
    list: () => apiFetch<TeamResponse[]>(config, "/v1/teams"),
    getStats: (teamId: string) => apiFetch<TeamStatsResponse>(config, `/v1/teams/${teamId}/stats`),
    getAuditLogs: (teamId: string, limit = 50, offset = 0) => 
      apiFetch<AuditLogResponse[]>(config, `/v1/teams/${teamId}/audit-logs?limit=${limit}&offset=${offset}`),
    invite: (teamId: string, email: string) => 
      apiFetch<{ success: boolean }>(config, `/v1/teams/${teamId}/invite`, {
        method: "POST",
        body: JSON.stringify({ email }),
      }),
  };
}

function createInternalClient(config: ClientConfig) {
  return {
    usage: () => apiFetch<any>(config, "/internal/usage/me"),
  };
}

// ── Main factory ──────────────────────────────────────────────

export function createClient(config: ClientConfig) {
  return {
    auth: createAuthClient(config),
    user: createUserClient(config),
    chat: createChatClient(config),
    edits: createEditsClient(config),
    billing: createBillingClient(config),
    team: createTeamClient(config),
    internal: createInternalClient(config),
  };
}

export type AtiqClient = ReturnType<typeof createClient>;
export * from "../../shared/src/index.js";
