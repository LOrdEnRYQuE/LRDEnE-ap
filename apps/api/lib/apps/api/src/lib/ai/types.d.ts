import type { AIModel } from "@atiq/shared";
export interface AIStreamChunk {
    delta?: string;
    error?: string;
    done?: boolean;
}
export interface AIProviderPayload {
    prompt: string;
    model: AIModel;
    systemPrompt?: string;
    maxTokens?: number;
    temperature?: number;
    signal?: AbortSignal;
}
export interface AIProvider {
    stream(payload: AIProviderPayload): AsyncGenerator<AIStreamChunk>;
    complete(payload: AIProviderPayload): Promise<string>;
}
//# sourceMappingURL=types.d.ts.map