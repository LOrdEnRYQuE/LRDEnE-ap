import type { AIModel } from "@atiq/shared";
export interface LLMPayload {
    prompt: string;
    model: AIModel;
    system?: string;
    maxTokens?: number;
    temperature?: number;
}
export interface LLMStreamChunk {
    delta?: string;
    done?: boolean;
}
/**
 * Basic token estimation based on character count.
 * Avg 4 chars per token for English/Code.
 */
export declare function estimateTokens(text: string): number;
/**
 * Main entry point for streaming AI responses.
 * Routes requests to the appropriate provider based on model selection.
 */
export declare function streamResponse(payload: LLMPayload): AsyncGenerator<LLMStreamChunk>;
/**
 * Standard non-streaming completion for fixed-payload tasks (like diff generation).
 */
export declare function completeResponse(payload: LLMPayload): Promise<string>;
//# sourceMappingURL=llm.d.ts.map