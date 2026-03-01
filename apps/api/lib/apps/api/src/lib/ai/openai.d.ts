import type { AIProvider, AIProviderPayload, AIStreamChunk } from "./types.js";
export declare class OpenAIProvider implements AIProvider {
    private client;
    constructor(apiKey: string);
    stream(payload: AIProviderPayload): AsyncGenerator<AIStreamChunk>;
    complete(payload: AIProviderPayload): Promise<string>;
}
//# sourceMappingURL=openai.d.ts.map