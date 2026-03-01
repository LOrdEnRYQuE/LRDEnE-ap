import type { AIProvider, AIProviderPayload, AIStreamChunk } from "./types.js";

export class MockProvider implements AIProvider {
  async* stream(payload: AIProviderPayload): AsyncGenerator<AIStreamChunk> {
    const text = `[MOCK] Response for ${payload.model}.
Input (30 chars): "${payload.prompt.slice(0, 30)}..."
This mode is active because AI_ENABLED is true but keys are missing.`;

    for (const char of text) {
      if (payload.signal?.aborted) break;
      yield { delta: char };
      await new Promise(r => setTimeout(r, 10));
    }
    yield { done: true };
  }

  async complete(payload: AIProviderPayload): Promise<string> {
    return `[MOCK COMPLETE] Response for ${payload.model}.`;
  }
}
