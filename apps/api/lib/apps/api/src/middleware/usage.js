import { db } from "../lib/db.js";
import { getEntitlements } from "../lib/plans.js";
export async function usageGuard(request, reply) {
    const userId = request.userId;
    const requestId = request.body.clientRequestId || request.id;
    const type = request.url.includes("chat") ? "chat" : "edit";
    // 1. Identify Plan
    let plan = request.plan || "free";
    if (userId && !userId.startsWith("dev-")) {
        const user = await db.user.findUnique({ where: { id: userId } });
        if (user)
            plan = user.plan;
    }
    const entitlements = getEntitlements(plan);
    // 2. Feature Gating
    if (type === "edit" && !entitlements.features.inlineEdits) {
        return reply.code(402).send({
            error: {
                message: "Inline edits require a Pro plan or higher.",
                code: "PLAN_LIMIT",
                hint: "Upgrade at atiq.ai/pricing"
            },
            requestId
        });
    }
    // 3. Rate Limiting (Daily Quota)
    const today = new Date().toISOString().split("T")[0];
    const counter = await db.usageCounter.findUnique({
        where: { userId_date: { userId: userId || "anonymous", date: today } }
    });
    const currentCount = type === "chat" ? (counter?.chatCount || 0) : (counter?.editCount || 0);
    const limit = type === "chat" ? entitlements.limits.requestsPerDay : (entitlements.features.inlineEdits ? 100 : 0);
    if (currentCount >= limit) {
        return reply.code(429).send({
            error: {
                message: `Daily ${type} limit reached.`,
                code: "RATE_LIMIT",
                hint: "Your quota will reset tomorrow."
            },
            requestId
        });
    }
    // 4. Idempotency Check
    const existingEvent = await db.usageEvent.findUnique({
        where: { clientRequestId: requestId }
    });
    if (existingEvent) {
        if (existingEvent.status === "completed") {
            return reply.code(409).send({
                error: { message: "Request already processed.", code: "DUPLICATE_REQUEST" },
                requestId
            });
        }
    }
    else {
        // 5. Reserve (Start phase)
        await db.usageEvent.create({
            data: {
                userId: userId || "anonymous",
                clientRequestId: requestId,
                type,
                status: "started"
            }
        }).catch(() => { });
    }
}
const usagePlugin = async (app) => {
    app.decorate("usageGuard", usageGuard);
};
export default usagePlugin;
//# sourceMappingURL=usage.js.map