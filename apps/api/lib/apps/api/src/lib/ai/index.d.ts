import type { AIProvider, AIProviderPayload, AIStreamChunk } from "./types.js";
declare class AIGateway {
    private openai;
    private mock;
    constructor();
    getProvider(payload: AIProviderPayload): AIProvider;
    stream(payload: AIProviderPayload): AsyncGenerator<AIStreamChunk>;
    complete(payload: AIProviderPayload): Promise<string>;
}
export declare const gateway: AIGateway;
export * from "./types.js";
//# sourceMappingURL=index.d.ts.map