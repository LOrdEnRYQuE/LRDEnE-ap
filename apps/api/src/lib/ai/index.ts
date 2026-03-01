import type { AIProvider, AIProviderPayload, AIStreamChunk } from "./types.js";
import { OpenAIProvider } from "./openai.js";
import { MockProvider } from "./mock.js";

class AIGateway {
  private openai: OpenAIProvider | null = null;
  private mock = new MockProvider();

  constructor() {
    const key = process.env.OPENAI_API_KEY;
    if (key && !key.includes("placeholder")) {
      this.openai = new OpenAIProvider(key);
    }
  }

  getProvider(payload: AIProviderPayload): AIProvider {
    if (process.env.AI_ENABLED !== "true") {
      throw new Error("AI is currently disabled on the server (maintenance/cost control).");
    }

    if (this.openai && payload.model.startsWith("gpt")) {
      return this.openai;
    }

    return this.mock;
  }

  async* stream(payload: AIProviderPayload): AsyncGenerator<AIStreamChunk> {
    const provider = this.getProvider(payload);
    for await (const chunk of provider.stream(payload)) {
      yield chunk;
    }
  }

  async complete(payload: AIProviderPayload): Promise<string> {
    const provider = this.getProvider(payload);
    return provider.complete(payload);
  }
}

export const gateway = new AIGateway();
export * from "./types.js";
