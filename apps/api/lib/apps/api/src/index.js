// ─────────────────────────────────────────────────────────────
// ATiQ API Server — Entry Point
// ─────────────────────────────────────────────────────────────
import Fastify from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import authMiddleware from "./middleware/auth.js";
import usageMiddleware from "./middleware/usage.js";
import authRoutes from "./routes/auth.js";
import entitlementsRoutes from "./routes/entitlements.js";
import chatRoutes from "./routes/chat.js";
import editsRoutes from "./routes/edits.js";
import billingRoutes from "./routes/billing.js";
import teamRoutes from "./routes/teams.js";
import devRoutes from "./routes/dev.js";
import internalRoutes from "./routes/internal.js";
import stripeWebhookRoutes from "./routes/webhooks/stripe.js";
// ── Startup Hygiene ───────────────────────────────────────────
process.on("unhandledRejection", (reason) => {
    console.error("[unhandledRejection]", reason);
    process.exit(1);
});
process.on("uncaughtException", (err) => {
    console.error("[uncaughtException]", err);
    process.exit(1);
});
const isDev = (process.env.NODE_ENV ?? "development") === "development";
async function main() {
    const app = Fastify({
        logger: {
            level: isDev ? "info" : "warn",
            // Optional pino-pretty for dev if available and desired
            // transport: isDev ? { target: "pino-pretty", options: { colorize: true } } : undefined,
        },
    });
    // ── Cross-origin (web app + extension) ────────────────────────
    await app.register(cors, {
        origin: isDev
            ? ["http://localhost:3000", "vscode-webview://*"]
            : [process.env.NEXT_PUBLIC_APP_URL ?? ""],
        credentials: true,
    });
    // ── Rate limiting by IP ────────────────────────────────────────
    await app.register(rateLimit, {
        max: 200,
        timeWindow: "1 minute",
        errorResponseBuilder: (request) => ({
            error: {
                code: "RATE_LIMIT",
                message: "Too many requests. Slow down.",
                hint: "Try again in a minute.",
            },
            requestId: request.id,
        }),
    });
    // ── Stripe Webhook Raw Body Support ────────────────────────────
    app.addContentTypeParser("application/json", { parseAs: "buffer" }, (req, body, done) => {
        // If it's a webhook, pass the raw buffer down
        if (req.url.startsWith("/webhooks/stripe")) {
            done(null, body);
            return;
        }
        // Otherwise, parse it as JSON
        try {
            const json = JSON.parse(body.toString());
            done(null, json);
        }
        catch (err) {
            err.statusCode = 400;
            done(err, undefined);
        }
    });
    // ── Auth & Usage middleware ───────────────────────────────────
    await app.register(authMiddleware);
    await app.register(usageMiddleware);
    // ── Health check ──────────────────────────────────────────────
    app.get("/health", async () => ({
        ok: true,
        ts: new Date().toISOString(),
        env: process.env.NODE_ENV,
    }));
    // ── Route plugins ──────────────────────────────────────────────
    await app.register(authRoutes);
    await app.register(entitlementsRoutes);
    await app.register(chatRoutes);
    await app.register(editsRoutes);
    await app.register(billingRoutes);
    await app.register(teamRoutes);
    await app.register(internalRoutes);
    await app.register(stripeWebhookRoutes);
    if (isDev) {
        await app.register(devRoutes);
    }
    // ── Global error handler ──────────────────────────────────────
    app.setErrorHandler((error, request, reply) => {
        app.log.error(error);
        const statusCode = error.statusCode ?? 500;
        // Canonical error codes
        const code = error.code ?? (statusCode === 500 ? "INTERNAL" : "VALIDATION_ERROR");
        const message = statusCode === 500 ? "Internal server error" : error.message;
        reply.status(statusCode).send({
            error: {
                code,
                message,
                hint: error.hint,
            },
            requestId: request.id,
        });
    });
    // ── 404 handler ───────────────────────────────────────────────
    app.setNotFoundHandler((request, reply) => {
        reply.status(404).send({
            error: {
                code: "NOT_FOUND",
                message: `Route ${request.method}:${request.url} not found`,
            },
            requestId: request.id,
        });
    });
    // ── Listen ─────────────────────────────────────────────────────
    const port = Number(process.env.PORT ?? 8787);
    try {
        await app.listen({ port, host: "0.0.0.0" });
        app.log.info(`ATiQ API running on http://localhost:${port}`);
    }
    catch (err) {
        app.log.error(err, "Failed to listen");
        process.exit(1);
    }
    return app;
}
// ── Execution ──────────────────────────────────────────────────
const appPromise = main().catch((err) => {
    console.error("[startup crash]", err);
    process.exit(1);
});
export default appPromise;
//# sourceMappingURL=index.js.map