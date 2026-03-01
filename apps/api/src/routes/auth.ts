// ─────────────────────────────────────────────────────────────
// Auth Routes
// POST /auth/magiclink  — request magic link email
// POST /auth/verify     — verify token, return JWT
// POST /auth/refresh    — refresh JWT and rotate refresh token
// ─────────────────────────────────────────────────────────────

import { FastifyPluginAsync } from "fastify";
import type { MagicLinkRequest, MagicLinkResponse, VerifyRequest, VerifyResponse, RefreshRequest, RefreshResponse } from "@atiq/shared";
import { db } from "../lib/db.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-super-secret-change-in-production";
const ACCESS_TOKEN_EXPIRES_IN = "1h"; // short lived access token
const REFRESH_TOKEN_TTL_DAYS = 30; // 30 days
const VERIFICATION_TOKEN_TTL_MINS = 15; // 15 mins for magic link

function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function generateRandomToken() {
  return crypto.randomBytes(32).toString("hex");
}

const authRoutes: FastifyPluginAsync = async (app) => {
  // Send magic link email
  app.post<{ Body: MagicLinkRequest }>("/auth/magiclink", {
    schema: {
      body: {
        type: "object",
        required: ["email"],
        properties: {
          email: { type: "string", format: "email" },
        },
      },
    },
  }, async (request, reply): Promise<MagicLinkResponse> => {
    const { email } = request.body;

    // 1. Rate limiting: Check if a token was sent very recently (e.g., < 1 min ago)
    const recentToken = await db.verificationToken.findFirst({
      where: { 
        email,
        createdAt: { gte: new Date(Date.now() - 60 * 1000) }
      },
      orderBy: { createdAt: "desc" }
    });

    if (recentToken) {
      const err: any = new Error("Please wait a minute before requesting another link.");
      err.statusCode = 429;
      err.code = "RATE_LIMIT";
      throw err;
    }

    // 2. Invalidate previous tokens for this email
    await db.verificationToken.deleteMany({
      where: { email },
    });

    // 3. Generate new token
    const token = generateRandomToken();
    const hashedMagicLink = hashToken(token);
    const expiresAt = new Date(Date.now() + VERIFICATION_TOKEN_TTL_MINS * 60 * 1000);

    await db.verificationToken.create({
      data: { email, token: hashedMagicLink, expiresAt },
    });

    // Real world: Send via Resend/Postmark
    if (process.env.NODE_ENV === "development") {
      app.log.info({ email, token }, "Magic link generated (use this token to verify)");
    } else {
      app.log.info({ email }, "Magic link requested");
    }

    return { message: `Magic link sent to ${email}` };
  });

  // Verify magic link token → return JWT + Refresh Token
  app.post<{ Body: VerifyRequest }>("/auth/verify", {
    schema: {
      body: {
        type: "object",
        required: ["token"],
        properties: {
          token: { type: "string" },
        },
      },
    },
  }, async (request, reply): Promise<VerifyResponse> => {
    const { token } = request.body;
    const hashedMagicLink = hashToken(token);

    // Look for valid magic link token
    const verificationToken = await db.verificationToken.findUnique({
      where: { token: hashedMagicLink },
    });

    if (!verificationToken || verificationToken.expiresAt < new Date()) {
      const err: any = new Error("Invalid or expired magic link token");
      err.statusCode = 401;
      err.code = "UNAUTHENTICATED";
      throw err;
    }

    const { email } = verificationToken;

    // Destroy single-use token
    await db.verificationToken.delete({ where: { token: hashedMagicLink } });

    // UPSERT User
    const user = await db.user.upsert({
      where: { email },
      update: { updatedAt: new Date() },
      create: { 
        email,
        plan: "free", // Defaulting new installs to free
      },
    });

    // Create session
    const accessToken = jwt.sign(
      { sub: user.id, email: user.email, plan: user.plan }, 
      JWT_SECRET, 
      { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
    );
    
    const refreshTokenPlain = generateRandomToken();
    const hashedToken = hashToken(refreshTokenPlain);
    const refreshExpiresAt = new Date(Date.now() + REFRESH_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000);

    await db.refreshToken.create({
      data: {
        userId: user.id,
        hashedToken,
        expiresAt: refreshExpiresAt,
      },
    });

    app.log.info({ userId: user.id }, "User session verified and persisted");

    return {
      jwt: accessToken,
      refreshToken: refreshTokenPlain,
      user: {
        id: user.id,
        email: user.email,
        plan: user.plan as any,
        usageToday: 0,
        createdAt: user.createdAt.toISOString(),
      },
    };
  });

  // Refresh Token Rotation
  app.post<{ Body: RefreshRequest }>("/auth/refresh", {
    schema: {
      body: {
        type: "object",
        required: ["refreshToken"],
        properties: {
          refreshToken: { type: "string" },
        },
      },
    },
  }, async (request, reply): Promise<RefreshResponse> => {
    const { refreshToken: rawToken } = request.body;

    if (!rawToken) {
       const err: any = new Error("Missing refresh token");
       err.statusCode = 400;
       err.code = "VALIDATION_ERROR";
       throw err;
    }

    const hashedToken = hashToken(rawToken);

    // Find valid refresh token
    const tokenRecord = await db.refreshToken.findUnique({
      where: { hashedToken },
      include: { user: true }
    });

    if (!tokenRecord || tokenRecord.expiresAt < new Date()) {
      const err: any = new Error("Invalid or expired refresh token");
      err.statusCode = 401;
      err.code = "UNAUTHENTICATED";
      throw err;
    }

    if (tokenRecord.revokedAt) {
      // Security: Token replay detected! Revoke all tokens for this user.
      await db.refreshToken.updateMany({
        where: { userId: tokenRecord.userId },
        data: { revokedAt: new Date() },
      });
      const err: any = new Error("Security alert: Token replay detected. All sessions revoked.");
      err.statusCode = 401;
      err.code = "UNAUTHENTICATED";
      throw err;
    }

    // Mark current token as revoked
    await db.refreshToken.update({
      where: { id: tokenRecord.id },
      data: { revokedAt: new Date() },
    });

    const user = tokenRecord.user;

    // Issue new ones
    const newAccessToken = jwt.sign(
      { sub: user.id, email: user.email, plan: user.plan }, 
      JWT_SECRET, 
      { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
    );
    
    const newRefreshTokenPlain = generateRandomToken();
    const newHashedToken = hashToken(newRefreshTokenPlain);
    const newRefreshExpiresAt = new Date(Date.now() + REFRESH_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000);

    await db.refreshToken.create({
      data: {
        userId: user.id,
        hashedToken: newHashedToken,
        expiresAt: newRefreshExpiresAt,
      },
    });

    return {
      jwt: newAccessToken,
      refreshToken: newRefreshTokenPlain,
      user: {
        id: user.id,
        email: user.email,
        plan: user.plan as any,
        usageToday: 0,
        createdAt: user.createdAt.toISOString(),
      },
    };
  });

  // Logout - Revoke current refresh token
  app.post<{ Body: RefreshRequest }>("/auth/logout", {
    schema: {
      body: {
        type: "object",
        required: ["refreshToken"],
        properties: {
          refreshToken: { type: "string" },
        },
      },
    },
  }, async (request, reply) => {
    const { refreshToken: rawToken } = request.body;
    if (rawToken) {
      const hashedToken = hashToken(rawToken);
      await db.refreshToken.update({
        where: { hashedToken },
        data: { revokedAt: new Date() },
      }).catch(() => {}); // ignore errors if token doesn't exist
    }
    return { success: true };
  });
};

export default authRoutes;
