// ─────────────────────────────────────────────────────────────
// Plan → Entitlement Map
// Single source of truth for limits and feature flags per plan.
// ─────────────────────────────────────────────────────────────
const PLAN_MAP = {
    free: {
        plan: "free",
        limits: { requestsPerDay: 30, maxContextChars: 20_000, maxTokensPerRequest: 2_000 },
        features: {
            chat: true,
            inlineEdits: false,
            repoIndexing: false,
            sharedPresets: false,
            auditLogs: false,
            sso: false,
        },
        models: {
            chat: "gpt-4o-mini",
            edits: "gpt-4o-mini",
        },
    },
    pro: {
        plan: "pro",
        limits: { requestsPerDay: 400, maxContextChars: 80_000, maxTokensPerRequest: 8_000 },
        features: {
            chat: true,
            inlineEdits: true,
            repoIndexing: false,
            sharedPresets: false,
            auditLogs: false,
            sso: false,
        },
        models: {
            chat: "gpt-4o",
            edits: "gpt-4o",
        },
    },
    team: {
        plan: "team",
        limits: { requestsPerDay: 2_000, maxContextChars: 200_000, maxTokensPerRequest: 16_000 },
        features: {
            chat: true,
            inlineEdits: true,
            repoIndexing: true,
            sharedPresets: true,
            auditLogs: true,
            sso: false,
        },
        models: {
            chat: "gpt-4o",
            edits: "gpt-4o",
        },
    },
    enterprise: {
        plan: "enterprise",
        limits: { requestsPerDay: 999_999, maxContextChars: 500_000, maxTokensPerRequest: 32_000 },
        features: {
            chat: true,
            inlineEdits: true,
            repoIndexing: true,
            sharedPresets: true,
            auditLogs: true,
            sso: true,
        },
        models: {
            chat: "gpt-4o",
            edits: "gpt-4o",
        },
    },
};
export function getEntitlements(plan) {
    return PLAN_MAP[plan];
}
export function planFromDevToken(authHeader) {
    const token = (authHeader ?? "").replace("Bearer ", "").trim();
    if (token === "dev-pro")
        return "pro";
    if (token === "dev-team")
        return "team";
    if (token === "dev-enterprise")
        return "enterprise";
    return "free";
}
//# sourceMappingURL=plans.js.map