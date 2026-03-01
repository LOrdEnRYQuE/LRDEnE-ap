export type Plan = "free" | "pro" | "team" | "enterprise";
export type AIModel = "gpt-4o-mini" | "gpt-4o" | "claude-3-5-sonnet-latest" | "claude-3-haiku-20240307";
export declare const MODEL_PRICING_TIER: Record<AIModel, Plan>;
export interface PlanLimits {
    requestsPerDay: number;
    maxContextChars: number;
    maxTokensPerRequest: number;
}
export interface PlanFeatures {
    chat: boolean;
    inlineEdits: boolean;
    repoIndexing: boolean;
    sharedPresets: boolean;
    auditLogs: boolean;
    sso: boolean;
}
export interface EntitlementResponse {
    plan: Plan;
    limits: PlanLimits;
    features: PlanFeatures;
    models: {
        chat: AIModel;
        edits: AIModel;
    };
}
export interface UserRecord {
    id: string;
    email: string;
    plan: Plan;
    stripeCustomerId?: string;
    usageToday: number;
    createdAt: string;
}
export interface MeResponse {
    user: UserRecord;
    entitlements: EntitlementResponse;
}
export interface MagicLinkRequest {
    email: string;
}
export interface MagicLinkResponse {
    message: string;
}
export interface VerifyRequest {
    token: string;
}
export interface VerifyResponse {
    jwt: string;
    refreshToken: string;
    user: UserRecord;
}
export interface RefreshRequest {
    refreshToken: string;
}
export interface RefreshResponse {
    jwt: string;
    refreshToken: string;
    user: UserRecord;
}
export interface ChatMessage {
    role: "user" | "assistant" | "system";
    content: string;
}
export interface ChatRequest {
    messages: ChatMessage[];
    context?: {
        file?: string;
        path?: string;
        selection?: string;
        language?: string;
        symbols?: string[];
        otherFiles?: string[];
    };
    clientRequestId?: string;
}
export interface ChatStreamDelta {
    delta: string;
}
export interface EditLine {
    type: "context" | "add" | "del";
    text: string;
}
export interface EditHunk {
    oldStart: number;
    oldCount: number;
    newStart: number;
    newCount: number;
    header: string;
    lines: EditLine[];
}
export interface EditRequest {
    instruction: string;
    target: {
        relPath: string;
        selection?: {
            startLine0: number;
            startCol0: number;
            endLine0: number;
            endCol0: number;
        };
    };
    context: {
        fileText: string;
        selectionText?: string;
        surroundingContext?: {
            before: string;
            after: string;
        };
        repoHints?: string[];
    };
    clientRequestId?: string;
    noTelemetry?: boolean;
}
export interface EditResponse {
    meta: {
        requestId: string;
        model: string;
        plan: string;
    };
    diff: string;
    hunks: EditHunk[];
    stats: {
        filesChanged: number;
        hunks: number;
        insertions: number;
        deletions: number;
    };
    safety: {
        scope: "selection" | "file";
        relPaths: string[];
        appliedByDefault: boolean;
    };
}
export interface CheckoutRequest {
    plan: Exclude<Plan, "free" | "enterprise">;
    successUrl?: string;
    cancelUrl?: string;
}
export interface CheckoutResponse {
    sessionUrl: string;
}
export interface PortalResponse {
    portalUrl: string;
}
export interface TeamResponse {
    id: string;
    name: string;
    role: string;
    plan: string;
}
export interface TeamStatsResponse {
    teamId: string;
    totalTokens: number;
    userCount: number;
    usage: {
        byUser: Array<{
            email: string;
            tokens: number;
            chatCount: number;
        }>;
        byModel: Record<string, number>;
    };
}
export interface AuditLogResponse {
    id: string;
    action: string;
    userId: string;
    user: {
        email: string;
    };
    entityId?: string;
    metadata?: any;
    createdAt: string;
}
export interface ApiErrorResponse {
    error: {
        code: "UNAUTHENTICATED" | "PLAN_LIMIT" | "RATE_LIMIT" | "VALIDATION_ERROR" | "PROVIDER_ERROR" | "INTERNAL";
        message: string;
        hint?: string;
    };
    requestId?: string;
}
//# sourceMappingURL=index.d.ts.map