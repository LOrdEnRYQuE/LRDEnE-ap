import type { AIProvider, AIProviderPayload, AIStreamChunk } from "./types.js";
export declare class MockProvider implements AIProvider {
    stream(payload: AIProviderPayload): AsyncGenerator<AIStreamChunk>;
    complete(payload: AIProviderPayload): Promise<string>;
}
//# sourceMappingURL=mock.d.ts.map