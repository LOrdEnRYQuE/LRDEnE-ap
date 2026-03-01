import OpenAI from "openai";
export class OpenAIProvider {
    client;
    constructor(apiKey) {
        this.client = new OpenAI({ apiKey });
    }
    async *stream(payload) {
        const messages = [];
        if (payload.systemPrompt) {
            messages.push({ role: "system", content: payload.systemPrompt });
        }
        messages.push({ role: "user", content: payload.prompt });
        try {
            const stream = await this.client.chat.completions.create({
                model: payload.model,
                messages,
                stream: true,
                max_tokens: payload.maxTokens,
                temperature: payload.temperature ?? 0.7,
            }, {
                signal: payload.signal,
            });
            for await (const chunk of stream) {
                const delta = chunk.choices[0]?.delta?.content || "";
                if (delta)
                    yield { delta };
            }
            yield { done: true };
        }
        catch (err) {
            if (err.name === "AbortError") {
                return; // normal cancellation
            }
            console.error("[OpenAI] Stream error:", err);
            yield { error: err.message || "OpenAI error" };
        }
    }
    async complete(payload) {
        const messages = [];
        if (payload.systemPrompt) {
            messages.push({ role: "system", content: payload.systemPrompt });
        }
        messages.push({ role: "user", content: payload.prompt });
        const res = await this.client.chat.completions.create({
            model: payload.model,
            messages,
            max_tokens: payload.maxTokens,
            temperature: payload.temperature ?? 0.7,
        }, {
            signal: payload.signal,
        });
        return res.choices[0]?.message?.content || "";
    }
}
//# sourceMappingURL=openai.js.map