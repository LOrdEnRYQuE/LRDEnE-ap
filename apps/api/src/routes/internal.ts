import { FastifyPluginAsync } from "fastify";
import { db } from "../lib/db.js";

const internalRoutes: FastifyPluginAsync = async (app) => {
  app.get("/internal/usage/me", async (request, reply) => {
    const userId = (request as any).userId;
    if (!userId) {
      return reply.code(401).send({ error: "Unauthorized" });
    }

    const today = new Date().toISOString().split("T")[0];
    const [counter, recentEvents] = await Promise.all([
      db.usageCounter.findUnique({
        where: { userId_date: { userId, date: today } }
      }),
      db.usageEvent.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 10
      })
    ]);

    return {
      userId,
      date: today,
      usage: {
        chat: counter?.chatCount || 0,
        edit: counter?.editCount || 0
      },
      recentEvents: recentEvents.map((e: any) => ({
        id: e.clientRequestId,
        type: e.type,
        status: e.status,
        model: e.model,
        time: e.createdAt
      }))
    };
  });
};

export default internalRoutes;
