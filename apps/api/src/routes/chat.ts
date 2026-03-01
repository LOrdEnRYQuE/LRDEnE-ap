import { FastifyPluginAsync } from "fastify";
import type { ChatRequest } from "@atiq/shared";
import { gateway } from "../lib/ai/index.js";
import { db } from "../lib/db.js";
import { usageGuard } from "../middleware/usage.js";
import { getEntitlements } from "../lib/plans.js";

const chatRoutes: FastifyPluginAsync = async (app) => {
  app.post<{ Body: ChatRequest }>("/v1/chat/stream", {
    preHandler: [usageGuard]
  }, async (request, reply) => {
    const userId = (request as any).userId;
    const plan = (request as any).plan || "free";
    const entitlements = getEntitlements(plan);
    const clientRequestId = (request.body as any).clientRequestId || request.id;

    // 1. Validation
    const { messages = [] } = request.body;
    if (messages.length === 0) {
      return reply.code(400).send({
        error: { message: "Messages are required.", code: "VALIDATION_ERROR" },
        requestId: request.id,
      }) as never;
    }

    const lastMessage = messages[messages.length - 1].content;
    const model = entitlements.models.chat;
    const maxTokens = Math.min(2000, entitlements.limits.maxTokensPerRequest);

    // 2. SSE Setup
    reply.raw.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    });

    const abortController = new AbortController();
    request.raw.on("close", async () => {
      if (!reply.raw.writableEnded) {
        app.log.info({ userId, requestId: request.id }, "Client closed stream");
        abortController.abort();
        // Update status to cancelled
        await db.usageEvent.update({
          where: { clientRequestId },
          data: { status: "cancelled" }
        }).catch(() => {});
      }
    });

    // Send initial meta
    reply.raw.write(`event: meta\ndata: ${JSON.stringify({ requestId: request.id, model, plan })}\n\n`);

    let fullResponse = "";

    try {
      const stream = gateway.stream({
        prompt: lastMessage,
        model: model as any,
        maxTokens,
        signal: abortController.signal,
      });

      for await (const chunk of stream) {
        if (abortController.signal.aborted) break;

        if (chunk.error) {
          reply.raw.write(`event: error\ndata: ${JSON.stringify({ error: { message: chunk.error, code: "PROVIDER_ERROR" } })}\n\n`);
          break;
        }

        if (chunk.done) {
          reply.raw.write(`event: done\ndata: ${JSON.stringify({ usage: { tokens: Math.ceil(fullResponse.length / 4) } })}\n\n`);
          break;
        }

        if (chunk.delta) {
          fullResponse += chunk.delta;
          reply.raw.write(`event: delta\ndata: ${JSON.stringify({ delta: chunk.delta })}\n\n`);
        }
      }

      // 3. Commit Phase
      if (fullResponse && !abortController.signal.aborted) {
        const tokens = Math.ceil(fullResponse.length / 4);
        const today = new Date().toISOString().split("T")[0];

        await db.$transaction([
          db.usageEvent.update({
            where: { clientRequestId },
            data: { status: "completed", tokens, model }
          }),
          db.usageCounter.upsert({
            where: { userId_date: { userId, date: today } },
            create: { userId, date: today, chatCount: 1 },
            update: { chatCount: { increment: 1 } }
          }),
          ...(request.body.noTelemetry ? [] : [
            db.chat.create({
              data: {
                userId,
                prompt: lastMessage,
                response: fullResponse,
                model: model as any,
                tokens
              }
            })
          ])
        ]).catch((err: any) => app.log.error({ err }, "Failed to commit chat usage"));
      }

    } catch (err: any) {
      app.log.error({ err, requestId: request.id }, "Streaming error");
      await db.usageEvent.update({
        where: { clientRequestId },
        data: { status: "failed" }
      }).catch(() => {});
      
      if (!reply.raw.writableEnded) {
        reply.raw.write(`event: error\ndata: ${JSON.stringify({ error: { message: "Internal streaming error", code: "SERVER_ERROR" } })}\n\n`);
      }
    } finally {
      reply.raw.end();
    }
  });
};

export default chatRoutes;
