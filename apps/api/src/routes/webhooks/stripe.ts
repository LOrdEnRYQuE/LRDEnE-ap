import { FastifyPluginAsync } from "fastify";
import { stripe } from "../../lib/stripe.js";
import { db } from "../../lib/db.js";
import { getPlanFromPriceId } from "../../lib/planMap.js";
import Stripe from "stripe";

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "whsec_placeholder";

const stripeWebhookRoutes: FastifyPluginAsync = async (app) => {
  app.post("/webhooks/stripe", { config: { rawBody: true } }, async (request, reply) => {
    const signature = request.headers["stripe-signature"];

    if (!signature) {
      return reply.code(400).send({ error: "Missing stripe-signature header" });
    }

    let event: Stripe.Event;

    try {
      // request.body is a Buffer here because of the custom JSON parser in index.ts
      event = stripe.webhooks.constructEvent(
        request.body as Buffer,
        signature,
        WEBHOOK_SECRET
      );
    } catch (err: any) {
      app.log.error(`Webhook signature verification failed: ${err.message}`);
      return reply.code(400).send({ error: "Invalid signature" });
    }

    // Idempotency: Check if already processed
    const existingEvent = await db.webhookEvent.findUnique({
      where: { id: event.id }
    });

    if (existingEvent) {
      app.log.info({ eventId: event.id }, "Webhook already processed, ignoring");
      return reply.send({ received: true });
    }

    // Wrap processing in a transaction
    try {
      await db.$transaction(async (tx) => {
        // Record event to prevent double processing
        await tx.webhookEvent.create({
          data: { id: event.id }
        });

        if (event.type === 'customer.subscription.created' || event.type === 'customer.subscription.updated') {
          const subscription = event.data.object as Stripe.Subscription;
          const stripeCustomerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer.id;
          
          let userId = subscription.metadata.userId;

          if (!userId) {
            const custom = await tx.stripeCustomer.findUnique({ where: { stripeCustomerId }});
            if (custom) userId = custom.userId;
          }

          if (userId) {
            const priceId = subscription.items.data[0]?.price.id;
            const plan = getPlanFromPriceId(priceId);

            await tx.subscription.upsert({
              where: { stripeSubscriptionId: subscription.id },
              update: {
                status: subscription.status,
                plan,
                currentPeriodEnd: new Date(subscription.current_period_end * 1000)
              },
              create: {
                userId,
                stripeSubscriptionId: subscription.id,
                status: subscription.status,
                plan,
                currentPeriodEnd: new Date(subscription.current_period_end * 1000)
              }
            });

            // If active, update user.plan
            if (subscription.status === 'active' || subscription.status === 'trialing') {
              await tx.user.update({
                where: { id: userId },
                data: { plan }
              });
            } else if (subscription.status === 'canceled' || subscription.status === 'unpaid' || subscription.status === 'past_due') {
              await tx.user.update({
                where: { id: userId },
                data: { plan: "free" }
              });
            }
          }
        } else if (event.type === 'customer.subscription.deleted') {
          const subscription = event.data.object as Stripe.Subscription;
          
          await tx.subscription.update({
            where: { stripeSubscriptionId: subscription.id },
            data: { status: 'canceled', plan: 'free' }
          });

          let userId = subscription.metadata.userId;
          if (!userId) {
            const custom = await tx.subscription.findUnique({ where: { stripeSubscriptionId: subscription.id } });
            if (custom) userId = custom.userId;
          }

          if (userId) {
            await tx.user.update({
              where: { id: userId },
              data: { plan: "free" }
            });
          }
        }
      });
    } catch (err: any) {
      app.log.error(`Webhook processing failed: ${err.message}`);
      return reply.code(500).send({ error: "Failed to process webhook" });
    }

    return reply.send({ received: true });
  });
};

export default stripeWebhookRoutes;
