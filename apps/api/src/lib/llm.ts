// ─────────────────────────────────────────────────────────────
// ATiQ Editor — LLM Service (AI Proxy)
// Abstraction for streaming AI responses across multiple providers.
// ─────────────────────────────────────────────────────────────

import OpenAI from "openai";
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
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

// ── Provider Interface ──────────────────────────────────────────

interface AIProvider {
  stream(payload: LLMPayload): AsyncGenerator<LLMStreamChunk>;
}

// ── OpenAI Provider ─────────────────────────────────────────────

class OpenAIProvider implements AIProvider {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || "placeholder",
    });
  }

  async* stream(payload: LLMPayload): AsyncGenerator<LLMStreamChunk> {
    const messages: any[] = [];
    if (payload.system) {
      messages.push({ role: "system", content: payload.system });
    }
    messages.push({ role: "user", content: payload.prompt });

    try {
      const stream = await this.client.chat.completions.create({
        model: payload.model,
        messages,
        stream: true,
        max_tokens: payload.maxTokens,
        temperature: payload.temperature,
      });

      for await (const chunk of stream) {
        const delta = chunk.choices[0]?.delta?.content || "";
        if (delta) yield { delta };
      }
    } catch (err) {
      console.error("[OpenAI] Error:", err);
      yield { delta: `\n[OpenAI Error: ${err instanceof Error ? err.message : "Service unavailable"}]\n` };
    }
  }
}

// ── Anthropic Provider (Placeholder) ──────────────────────────

class AnthropicProvider implements AIProvider {
  async* stream(payload: LLMPayload): AsyncGenerator<LLMStreamChunk> {
    // Note: In reality, we would use @anthropic-ai/sdk
    const mockMsg = `\n[Anthropic Proxy] Simulating ${payload.model} response...\n`;
    for (const char of mockMsg) {
      yield { delta: char };
      await new Promise(r => setTimeout(r, 5));
    }
    yield { delta: "Claude is currently in preview mode for ATiQ. Using GPT-4o fallback would be faster." };
  }
}

// ── Mock Provider ─────────────────────────────────────────────

class MockProvider implements AIProvider {
  async* stream(payload: LLMPayload): AsyncGenerator<LLMStreamChunk> {
    const mockText = `[MOCK MODE] Simulating response for ${payload.model}.
Prompt: "${payload.prompt.slice(0, 30)}..."
This allows UI development without hitting real API credits.`;
    
    for (const char of mockText) {
      yield { delta: char };
      await new Promise(r => setTimeout(r, 10));
    }
  }
}

// ── Provider Manager ──────────────────────────────────────────

class ProviderManager {
  private openai = new OpenAIProvider();
  private anthropic = new AnthropicProvider();
  private mock = new MockProvider();

  private isMock = process.env.OPENAI_API_KEY?.includes("placeholder") || !process.env.OPENAI_API_KEY;

  getProvider(model: AIModel): AIProvider {
    if (this.isMock) return this.mock;
    if (model.startsWith("claude")) return this.anthropic;
    return this.openai;
  }
}

const manager = new ProviderManager();

/**
 * Main entry point for streaming AI responses.
 * Routes requests to the appropriate provider based on model selection.
 */
export async function* streamResponse(payload: LLMPayload): AsyncGenerator<LLMStreamChunk> {
  const provider = manager.getProvider(payload.model);
  
  for await (const chunk of provider.stream(payload)) {
    yield chunk;
  }
  
  yield { done: true };
}

/**
 * Standard non-streaming completion for fixed-payload tasks (like diff generation).
 */
export async function completeResponse(payload: LLMPayload): Promise<string> {
  const provider = manager.getProvider(payload.model);
  let full = "";
  for await (const chunk of provider.stream(payload)) {
    if (chunk.delta) full += chunk.delta;
  }
  return full;
}
