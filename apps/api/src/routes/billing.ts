import { FastifyPluginAsync } from "fastify";
import { stripe } from "../lib/stripe.js";
import { db } from "../lib/db.js";
import type { CheckoutRequest, CheckoutResponse, PortalResponse } from "@atiq/shared";

const billingRoutes: FastifyPluginAsync = async (app) => {
  // Create Stripe Checkout session for plan upgrade
  app.post<{ Body: CheckoutRequest }>("/billing/checkout", {
    schema: {
      body: {
        type: "object",
        required: ["plan"],
        properties: {
          plan: { type: "string", enum: ["pro", "team"] },
          successUrl: { type: "string" },
          cancelUrl: { type: "string" },
        },
      },
    },
  }, async (request, reply): Promise<CheckoutResponse> => {
    const { plan, successUrl, cancelUrl } = request.body;
    const userId = (request as any).userId;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const user = await db.user.findUnique({ 
      where: { id: userId }, 
      include: { stripeCustomer: true } 
    });
    
    if (!user) {
      return reply.code(404).send({ error: "User not found" }) as any;
    }

    let customerId = user.stripeCustomer?.stripeCustomerId;

    if (!customerId) {
      const customer = await stripe.customers.create({ 
        email: user.email, 
        metadata: { userId } 
      });
      customerId = customer.id;
      
      await db.stripeCustomer.create({
        data: { userId, stripeCustomerId: customerId }
      });
    }

    try {
      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        payment_method_types: ["card"],
        line_items: [
          {
            price: plan === "pro" ? process.env.STRIPE_PRICE_PRO : process.env.STRIPE_PRICE_TEAM,
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: successUrl || `${appUrl}/account?upgraded=1`,
        cancel_url: cancelUrl || `${appUrl}/pricing`,
        client_reference_id: userId,
        subscription_data: {
          metadata: { userId },
        },
      });

      return { sessionUrl: session.url! };
    } catch (err) {
      app.log.error(err, "Stripe Checkout Error");
      return { sessionUrl: `${appUrl}/pricing?error=stripe` };
    }
  });

  // Return Stripe Customer Portal URL
  app.get("/billing/portal", async (request, reply): Promise<PortalResponse | void> => {
    const userId = (request as any).userId;
    
    if (!userId) {
      return reply.code(401).send({ error: "Not logged in" });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    
    const user = await db.user.findUnique({ 
      where: { id: userId }, 
      include: { stripeCustomer: true } 
    });

    if (!user?.stripeCustomer) {
      app.log.warn({ userId }, "User requested portal without active customer ID");
      return { portalUrl: `${appUrl}/account?error=no_billing` };
    }

    try {
      const session = await stripe.billingPortal.sessions.create({
        customer: user.stripeCustomer.stripeCustomerId,
        return_url: `${appUrl}/account`,
      });
      return { portalUrl: session.url };
    } catch (err) {
      app.log.error(err, "Stripe Portal Error");
      return { portalUrl: `${appUrl}/account?error=stripe` };
    }
  });
};

export default billingRoutes;
