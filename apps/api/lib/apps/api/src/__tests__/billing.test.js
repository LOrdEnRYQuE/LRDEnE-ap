import { describe, it, expect, beforeAll } from "vitest";
import Fastify from "fastify";
import billingRoutes from "../routes/billing";
describe("Billing Routes", () => {
    let app;
    beforeAll(async () => {
        app = Fastify();
        // Register types and shared context if needed, or mock them
        await app.register(billingRoutes);
    });
    it("should return a mock success URL when STRIPE_SECRET_KEY is placeholder", async () => {
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
        expect(response.statusCode).toBe(200);
        const body = JSON.parse(response.payload);
        expect(body.sessionUrl).toContain("mock_success=1");
    });
    it("should return a mock portal URL", async () => {
        process.env.STRIPE_SECRET_KEY = "sk_test_placeholder";
        const response = await app.inject({
            method: "GET",
            url: "/billing/portal"
        });
        expect(response.statusCode).toBe(200);
        const body = JSON.parse(response.payload);
        expect(body.portalUrl).toContain("mock_portal=1");
    });
});
//# sourceMappingURL=billing.test.js.map