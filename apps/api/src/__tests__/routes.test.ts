// ─────────────────────────────────────────────────────────────
// API Route Tests — Vitest
// ─────────────────────────────────────────────────────────────

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import Fastify from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";

import authMiddleware from "../middleware/auth.js";
import entitlementsRoutes from "../routes/entitlements.js";
import chatRoutes from "../routes/chat.js";
import editsRoutes from "../routes/edits.js";
import authRoutes from "../routes/auth.js";

// Build a test app instance (no listening port needed)
async function buildTestApp() {
  const app = Fastify({ logger: false });
  await app.register(cors, { origin: true });
  await app.register(rateLimit, { max: 1000, timeWindow: "1 minute" });
  await app.register(authMiddleware);
  app.get("/health", async () => ({ ok: true }));
  await app.register(authRoutes);
  await app.register(entitlementsRoutes);
  await app.register(chatRoutes);
  await app.register(editsRoutes);
  await app.ready();
  return app;
}

let app: Awaited<ReturnType<typeof buildTestApp>>;

beforeAll(async () => {
  app = await buildTestApp();
});

afterAll(async () => {
  await app.close();
});

// ── Health ────────────────────────────────────────────────────

describe("GET /health", () => {
  it("returns ok:true", async () => {
    const res = await app.inject({ method: "GET", url: "/health" });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toMatchObject({ ok: true });
  });
});

// ── Entitlements ───────────────────────────────────────────────

describe("GET /v1/entitlements", () => {
  it("free plan has limited features", async () => {
    const res = await app.inject({ method: "GET", url: "/v1/entitlements" });
    expect(res.statusCode).toBe(200);
    const body = res.json();
    expect(body.plan).toBe("free");
    expect(body.features.chat).toBe(true);
    expect(body.features.inlineEdits).toBe(false);
    expect(body.limits.requestsPerDay).toBe(30);
  });

  it("dev-pro token returns pro plan", async () => {
    const res = await app.inject({
      method: "GET",
      url: "/v1/entitlements",
      headers: { authorization: "Bearer dev-pro" },
    });
    expect(res.statusCode).toBe(200);
    const body = res.json();
    expect(body.plan).toBe("pro");
    expect(body.features.inlineEdits).toBe(true);
    expect(body.limits.requestsPerDay).toBe(400);
  });

  it("dev-team token returns team plan", async () => {
    const res = await app.inject({
      method: "GET",
      url: "/v1/entitlements",
      headers: { authorization: "Bearer dev-team" },
    });
    const body = res.json();
    expect(body.plan).toBe("team");
    expect(body.features.repoIndexing).toBe(true);
  });
});

// ── Auth ───────────────────────────────────────────────────────

describe("POST /auth/magiclink", () => {
  it("returns message for valid email", async () => {
    const res = await app.inject({
      method: "POST",
      url: "/auth/magiclink",
      payload: { email: "test@example.com" },
    });
    expect(res.statusCode).toBe(200);
    expect(res.json().message).toContain("test@example.com");
  });

  it("rejects invalid email", async () => {
    const res = await app.inject({
      method: "POST",
      url: "/auth/magiclink",
      payload: { email: "not-an-email" },
    });
    expect(res.statusCode).toBe(400);
  });
});

// ── Edits ──────────────────────────────────────────────────────

describe("POST /v1/edits", () => {
  it("returns patch for pro plan with new schema", async () => {
    const res = await app.inject({
      method: "POST",
      url: "/v1/edits",
      headers: { authorization: "Bearer dev-pro" },
      payload: { 
        instruction: "Add a comment",
        target: { relPath: "src/index.ts" },
        context: { fileText: "const x = 1;" }
      },
    });
    expect(res.statusCode).toBe(200);
    const body = res.json();
    expect(body).toHaveProperty("diff");
    expect(body).toHaveProperty("hunks");
    expect(body).toHaveProperty("stats");
    expect(body.stats).toHaveProperty("insertions");
  });

  it("returns 402 for free plan (plan limit)", async () => {
    const res = await app.inject({
      method: "POST",
      url: "/v1/edits",
      payload: { 
        instruction: "Fix this",
        target: { relPath: "src/index.ts" },
        context: { fileText: "const x = 1;" }
      },
    });
    expect(res.statusCode).toBe(402);
  });

  it("rejects unsafe relative paths", async () => {
    const res = await app.inject({
      method: "POST",
      url: "/v1/edits",
      headers: { authorization: "Bearer dev-pro" },
      payload: { 
        instruction: "Fix this",
        target: { relPath: "../../etc/passwd" },
        context: { fileText: "some code" }
      },
    });
    expect(res.statusCode).toBe(400);
    expect(res.json().error.message).toContain("Unsafe relative path");
  });
});
