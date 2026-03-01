import { test, expect, describe, vi, beforeEach } from 'vitest';
import Fastify from 'fastify';
import stripeWebhookRoutes from '../routes/webhooks/stripe.js';
import { db } from '../lib/db.js';
import { stripe } from '../lib/stripe.js';
// Mock stripe constructEvent
vi.mock('../lib/stripe.js', () => ({
    stripe: {
        webhooks: {
            constructEvent: vi.fn(),
        }
    }
}));
describe('Stripe Webhooks', () => {
    let app;
    beforeEach(async () => {
        app = Fastify();
        // Replicate raw body parser from index.ts
        app.addContentTypeParser("application/json", { parseAs: "buffer" }, (req, body, done) => {
            done(null, body);
        });
        await app.register(stripeWebhookRoutes);
        // clear db for test isolation
        await db.webhookEvent.deleteMany({});
    });
    test('returns 400 if signature is missing', async () => {
        const res = await app.inject({
            method: 'POST',
            url: '/webhooks/stripe',
            payload: { foo: 'bar' }
        });
        expect(res.statusCode).toBe(400);
        expect(JSON.parse(res.payload).error).toBe('Missing stripe-signature header');
    });
    test('idempotency: should not process the same event twice', async () => {
        const eventId = 'evt_test_duplicate';
        stripe.webhooks.constructEvent.mockReturnValue({
            id: eventId,
            type: 'customer.subscription.deleted',
            data: {
                object: {
                    id: 'sub_stub',
                    customer: 'cus_stub',
                    metadata: { userId: 'user_stub' }
                }
            }
        });
        // First call
        const res1 = await app.inject({
            method: 'POST',
            url: '/webhooks/stripe',
            headers: { 'stripe-signature': 'mock_sig' },
            payload: "{}"
        });
        expect(res1.statusCode).toBe(200);
        // Second call
        const res2 = await app.inject({
            method: 'POST',
            url: '/webhooks/stripe',
            headers: { 'stripe-signature': 'mock_sig' },
            payload: "{}"
        });
        expect(res2.statusCode).toBe(200);
        // Verify it was only recorded once
        const events = await db.webhookEvent.findMany({ where: { id: eventId } });
        expect(events.length).toBe(1);
    });
});
//# sourceMappingURL=webhooks.idempotency.test.js.map