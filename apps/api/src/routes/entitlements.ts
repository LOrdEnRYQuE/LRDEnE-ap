// ─────────────────────────────────────────────────────────────
// Entitlements Route
// GET /v1/entitlements — returns plan limits and feature flags
// GET /me              — alias that also returns user info
// ─────────────────────────────────────────────────────────────

import { FastifyPluginAsync } from "fastify";
import { getEntitlements } from "../lib/plans.js";
import { db } from "../lib/db.js";

const entitlementsRoutes: FastifyPluginAsync = async (app) => {
  app.get("/v1/entitlements", async (request) => {
    let plan = request.plan;
    if (request.userId && !request.userId.startsWith("dev-")) {
      const user = await db.user.findUnique({ where: { id: request.userId }});
      if (user) plan = user.plan as any;
    }
    return getEntitlements(plan);
  });

  app.get("/me", async (request) => {
    let plan = request.plan;
    let email = "dev@atiq.dev";

    if (request.userId && !request.userId.startsWith("dev-")) {
      const user = await db.user.findUnique({ where: { id: request.userId }});
      if (user) {
        plan = user.plan as any;
        email = user.email;
      }
    }

    return {
      user: {
        id: request.userId ?? "anon",
        email,
        plan,
        usageToday: 0,
        createdAt: new Date().toISOString(),
      },
      entitlements: getEntitlements(plan),
    };
  });
};

export default entitlementsRoutes;
