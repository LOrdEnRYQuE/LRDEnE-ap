import type { EntitlementResponse, MeResponse, MagicLinkRequest, MagicLinkResponse, VerifyRequest, VerifyResponse, ChatRequest, EditRequest, EditResponse, CheckoutRequest, CheckoutResponse, PortalResponse, ApiErrorResponse, TeamResponse, TeamStatsResponse, AuditLogResponse, RefreshRequest, RefreshResponse } from "../../shared/src/index.js";
export declare class AtiqError extends Error {
    readonly code: ApiErrorResponse["error"]["code"];
    readonly statusCode: number;
    readonly hint?: string | undefined;
    readonly requestId?: string | undefined;
    constructor(code: ApiErrorResponse["error"]["code"], message: string, statusCode: number, hint?: string | undefined, requestId?: string | undefined);
}
export declare class AuthError extends AtiqError {
    constructor(message?: string, requestId?: string);
}
export declare class PlanLimitError extends AtiqError {
    constructor(message?: string, requestId?: string);
}
export declare class RateLimitError extends AtiqError {
    constructor(message?: string, requestId?: string);
}
export interface ClientConfig {
    apiUrl: string;
    token?: string;
}
export interface StreamCallbacks {
    onDelta?: (text: string) => void;
    onMeta?: (meta: {
        requestId: string;
        model: string;
        plan: string;
    }) => void;
    onError?: (error: ApiErrorResponse["error"]) => void;
    onDone?: (usage?: any) => void;
}
export declare function createClient(config: ClientConfig): {
    auth: {
        sendMagicLink: (body: MagicLinkRequest) => Promise<MagicLinkResponse>;
        verify: (body: VerifyRequest) => Promise<VerifyResponse>;
        refresh: (body: RefreshRequest) => Promise<RefreshResponse>;
        logout: (body: {
            refreshToken?: string;
        }) => Promise<{
            success: boolean;
        }>;
    };
    user: {
        me: () => Promise<MeResponse>;
        entitlements: () => Promise<EntitlementResponse>;
    };
    chat: {
        stream: (request: ChatRequest, callbacks: StreamCallbacks, signal?: AbortSignal) => Promise<void>;
    };
    edits: {
        apply: (request: EditRequest) => Promise<EditResponse>;
    };
    billing: {
        createCheckout: (body: CheckoutRequest) => Promise<CheckoutResponse>;
        portal: () => Promise<PortalResponse>;
    };
    team: {
        list: () => Promise<TeamResponse[]>;
        getStats: (teamId: string) => Promise<TeamStatsResponse>;
        getAuditLogs: (teamId: string, limit?: number, offset?: number) => Promise<AuditLogResponse[]>;
        invite: (teamId: string, email: string) => Promise<{
            success: boolean;
        }>;
    };
    internal: {
        usage: () => Promise<any>;
    };
};
export type AtiqClient = ReturnType<typeof createClient>;
export * from "../../shared/src/index.js";
//# sourceMappingURL=index.d.ts.map