"use strict";
// ─────────────────────────────────────────────────────────────
// ATiQ SDK — Typed API client
// Used by: apps/web, apps/extension
// ─────────────────────────────────────────────────────────────
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitError = exports.PlanLimitError = exports.AuthError = exports.AtiqError = void 0;
exports.createClient = createClient;
// ── Error Classes ─────────────────────────────────────────────
class AtiqError extends Error {
    code;
    statusCode;
    hint;
    requestId;
    constructor(code, message, statusCode, hint, requestId) {
        super(message);
        this.code = code;
        this.statusCode = statusCode;
        this.hint = hint;
        this.requestId = requestId;
        this.name = "AtiqError";
    }
}
exports.AtiqError = AtiqError;
class AuthError extends AtiqError {
    constructor(message = "Unauthorized", requestId) {
        super("UNAUTHENTICATED", message, 401, undefined, requestId);
        this.name = "AuthError";
    }
}
exports.AuthError = AuthError;
class PlanLimitError extends AtiqError {
    constructor(message = "Plan limit reached. Please upgrade.", requestId) {
        super("PLAN_LIMIT", message, 402, "Upgrade required", requestId);
        this.name = "PlanLimitError";
    }
}
exports.PlanLimitError = PlanLimitError;
class RateLimitError extends AtiqError {
    constructor(message = "Daily limit reached.", requestId) {
        super("RATE_LIMIT", message, 429, "Quota reset tomorrow", requestId);
        this.name = "RateLimitError";
    }
}
exports.RateLimitError = RateLimitError;
// ── Internal fetch helper ─────────────────────────────────────
async function apiFetch(config, path, options = {}) {
    const url = `${config.apiUrl}${path}`;
    const headers = {
        "Content-Type": "application/json",
        ...(config.token ? { Authorization: `Bearer ${config.token}` } : {}),
        ...(options.headers ?? {}),
    };
    const res = await fetch(url, { ...options, headers });
    if (!res.ok) {
        const body = (await res.json().catch(() => ({})));
        const errorData = body.error ?? { code: "INTERNAL", message: `HTTP ${res.status}` };
        const code = errorData.code;
        const message = errorData.message;
        const requestId = body.requestId;
        if (res.status === 401)
            throw new AuthError(message, requestId);
        if (res.status === 402)
            throw new PlanLimitError(message, requestId);
        throw new AtiqError(code, message, res.status, errorData.hint, requestId);
    }
    return res.json();
}
// ── Auth API ──────────────────────────────────────────────────
function createAuthClient(config) {
    return {
        sendMagicLink: (body) => apiFetch(config, "/auth/magiclink", {
            method: "POST",
            body: JSON.stringify(body),
        }),
        verify: (body) => apiFetch(config, "/auth/verify", {
            method: "POST",
            body: JSON.stringify(body),
        }),
        refresh: (body) => apiFetch(config, "/auth/refresh", {
            method: "POST",
            body: JSON.stringify(body),
        }),
        logout: (body) => apiFetch(config, "/auth/logout", {
            method: "POST",
            body: JSON.stringify(body),
        }),
    };
}
// ── User + Entitlements API ───────────────────────────────────
function createUserClient(config) {
    return {
        me: () => apiFetch(config, "/me"),
        entitlements: () => apiFetch(config, "/v1/entitlements"),
    };
}
function createChatClient(config) {
    return {
        stream: async (request, callbacks, signal) => {
            const url = `${config.apiUrl}/v1/chat/stream`;
            const headers = {
                "Content-Type": "application/json",
            };
            if (config.token)
                headers["Authorization"] = `Bearer ${config.token}`;
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
                const body = (await res.json().catch(() => ({})));
                const errorData = body.error ?? { code: "INTERNAL", message: `HTTP ${res.status}` };
                if (res.status === 401)
                    throw new AuthError(errorData.message, body.requestId);
                if (res.status === 402)
                    throw new PlanLimitError(errorData.message, body.requestId);
                if (res.status === 429)
                    throw new RateLimitError(errorData.message, body.requestId);
                throw new AtiqError(errorData.code, errorData.message, res.status, errorData.hint, body.requestId);
            }
            if (!res.body)
                throw new Error("Response body is null");
            const reader = res.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let buffer = "";
            try {
                while (true) {
                    const { value, done } = await reader.read();
                    if (done)
                        break;
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
                            }
                            else if (line.startsWith("data: ")) {
                                data = line.slice(6).trim();
                            }
                        }
                        if (!data)
                            continue;
                        try {
                            const json = JSON.parse(data);
                            switch (eventType) {
                                case "delta":
                                    if (json.delta)
                                        callbacks.onDelta?.(json.delta);
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
                        }
                        catch (e) {
                            console.warn("Failed to parse SSE JSON payload", data, e);
                        }
                    }
                }
            }
            catch (err) {
                if (err instanceof Error && err.name === "AbortError") {
                    return;
                }
                throw err;
            }
            finally {
                reader.releaseLock();
            }
        },
    };
}
// ── Edits API ─────────────────────────────────────────────────
function createEditsClient(config) {
    return {
        apply: (request) => {
            const body = {
                ...request,
                clientRequestId: request.clientRequestId || crypto.randomUUID()
            };
            return apiFetch(config, "/v1/edits", {
                method: "POST",
                body: JSON.stringify(body),
            });
        },
    };
}
// ── Billing API ───────────────────────────────────────────────
function createBillingClient(config) {
    return {
        createCheckout: (body) => apiFetch(config, "/billing/checkout", {
            method: "POST",
            body: JSON.stringify(body),
        }),
        portal: () => apiFetch(config, "/billing/portal"),
    };
}
// ── Team API ──────────────────────────────────────────────────
function createTeamClient(config) {
    return {
        list: () => apiFetch(config, "/v1/teams"),
        getStats: (teamId) => apiFetch(config, `/v1/teams/${teamId}/stats`),
        getAuditLogs: (teamId, limit = 50, offset = 0) => apiFetch(config, `/v1/teams/${teamId}/audit-logs?limit=${limit}&offset=${offset}`),
        invite: (teamId, email) => apiFetch(config, `/v1/teams/${teamId}/invite`, {
            method: "POST",
            body: JSON.stringify({ email }),
        }),
    };
}
function createInternalClient(config) {
    return {
        usage: () => apiFetch(config, "/internal/usage/me"),
    };
}
// ── Main factory ──────────────────────────────────────────────
function createClient(config) {
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
__exportStar(require("../../shared/src/index.js"), exports);
