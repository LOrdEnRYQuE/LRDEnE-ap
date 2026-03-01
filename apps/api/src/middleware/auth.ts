// ─────────────────────────────────────────────────────────────
// JWT Auth Middleware — Fastify plugin
// Dev mode: accepts "dev-free", "dev-pro", "dev-team" tokens
// ─────────────────────────────────────────────────────────────

import { FastifyPluginAsync, FastifyRequest } from "fastify";
import fp from "fastify-plugin";
import type { Plan } from "@atiq/shared";
import { planFromDevToken } from "../lib/plans.js";

declare module "fastify" {
  interface FastifyRequest {
    plan: Plan;
    userId?: string;
  }
}

import jwt from "jsonwebtoken";

const authMiddleware: FastifyPluginAsync = async (app) => {
  app.decorateRequest("plan", "free");
  app.decorateRequest("userId", undefined);

  app.addHook("preHandler", async (request: FastifyRequest, reply) => {
    const authHeader = request.headers.authorization;
    if (
      request.url.startsWith("/auth/") ||
      request.url.startsWith("/dev/") ||
      request.url === "/health" ||
      request.url.startsWith("/webhooks/")
    ) {
      if (!authHeader) request.plan = "free";
      return; // Public routes
    }

    if (!authHeader) {
      request.plan = "free";
      return;
    }

    // Dev mode: hardcoded tokens bypass real JWT validation
    if (authHeader.startsWith("Bearer dev-")) {
      request.plan = planFromDevToken(authHeader);
      request.userId = `dev-user-${request.plan}`;
      return;
    }

    // Production: real JWT validation
    const token = authHeader.replace("Bearer ", "").trim();
    if (!token) {
      request.plan = "free";
      return;
    }

    try {
      const secret = process.env.JWT_SECRET || "dev-super-secret-change-in-production";
      const payload = jwt.verify(token, secret) as any;
      
      request.userId = payload.sub || payload.id;
      // In a real app, you'd fetch the user's current plan from the DB here
      // For now, we assume 'free' unless the payload explicitly contains a plan
      request.plan = payload.plan || "free";
    } catch (err) {
      app.log.warn({ err }, "Invalid JWT attempt");
      request.plan = "free";
    }
  });
};

export default fp(authMiddleware);
