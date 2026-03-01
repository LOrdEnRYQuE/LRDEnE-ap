import { FastifyPluginAsync } from "fastify";
import { telemetryService } from "../lib/telemetryService.js";

/**
 * Telemetry Routes for ATiQ Editor.
 * Refactored to use a layered service architecture.
 */
const telemetryRoutes: FastifyPluginAsync = async (app) => {
  // Record a new telemetry event
  app.post("/telemetry/event", {
    schema: {
      body: {
        type: "object",
        required: ["type", "event"],
        properties: {
          type: { type: "string" },
          event: { type: "string" },
          value: { type: "number" },
          metadata: { type: "object" },
          version: { type: "string" }
        }
      }
    }
  }, async (request, reply) => {
    const { type, event, value, metadata, version } = request.body as any;
    const userId = (request as any).user?.sub;

    try {
      await telemetryService.recordEvent({
        type,
        event,
        value,
        metadata,
        version,
        userId
      });
      return { success: true };
    } catch (err) {
      app.log.error(err, "Failed to record telemetry event");
      return { success: false };
    }
  });

  // Get aggregated stats for dashboard (Admin only)
  app.get("/telemetry/stats", async (request, reply) => {
    // Note: Admin authorization should be handled in a middleware
    try {
      const { stats, recentEvents } = await telemetryService.getAggregatedStats();
      return { stats, recentEvents };
    } catch (err) {
      app.log.error(err, "Failed to fetch telemetry stats");
      reply.status(500).send({ error: "Failed to fetch telemetry statistics" });
    }
  });
};

export default telemetryRoutes;
