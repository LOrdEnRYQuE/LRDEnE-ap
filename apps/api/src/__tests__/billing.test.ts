import { describe, it, expect, vi, beforeAll } from "vitest";
import Fastify from "fastify";
import billingRoutes from "../routes/billing";

describe("Billing Routes", () => {
  let app: any;

  beforeAll(async () => {
    app = Fastify();
    // Register types and shared context if needed, or mock them
    await app.register(billingRoutes);
  });

  it("should return 401 when STRIPE_SECRET_KEY is placeholder without auth", async () => {
    process.env.STRIPE_SECRET_KEY = "sk_test_placeholder";
    process.env.NEXT_PUBLIC_APP_URL = "http://localhost:3000";

    const response = await app.inject({
      method: "POST",
      url: "/billing/checkout",
      payload: {
        plan: "pro",
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000/cancel"
      }
    });

    // Should return 401 because userId is not authenticated
    expect(response.statusCode).toBe(401);
  });

  it("should return 401 for portal without authentication", async () => {
    process.env.STRIPE_SECRET_KEY = "sk_test_placeholder";
    
    const response = await app.inject({
      method: "GET",
      url: "/billing/portal"
    });

    // Should return 401 because userId is not authenticated
    expect(response.statusCode).toBe(401);
  });
});
