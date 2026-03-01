// ─────────────────────────────────────────────────────────────
// Database Client Utility
// Uses the locally generated Prisma client in src/generated.
// ─────────────────────────────────────────────────────────────

import { PrismaClient } from "../generated/index.js";

const isDev = (process.env.NODE_ENV ?? "development") === "development";

const db = new PrismaClient({
  log: isDev ? ["query", "info", "warn", "error"] : ["error"],
});

// Explicitly connect to verify connectivity on start
try {
  await db.$connect();
  console.log("✅ Database connected successfully.");
} catch (err) {
  console.error("❌ Database connection failed:", err);
  // In a real production app, you might want to exit here, 
  // but for now we'll let it fail and throw on actual queries.
}

export { db };
