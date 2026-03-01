import { describe, it, expect } from "vitest";
import { streamResponse } from "../lib/llm";

describe("LLM Service", () => {
  it("should stream a mock response when API key is placeholder", async () => {
    // Set placeholder key for testing IS_MOCK branch
    process.env.OPENAI_API_KEY = "sk-placeholder";

    const payload = {
      prompt: "Hello AI",
      model: "test-model"
    };

    const chunks = [];
    for await (const chunk of streamResponse(payload as any)) {
      if (chunk.delta) {
        chunks.push(chunk.delta);
      }
      if (chunk.done) break;
    }

    const fullResponse = chunks.join("");
    expect(fullResponse).toContain("[MOCK MODE]");
    expect(fullResponse).toContain("Hello AI");
  });
});
