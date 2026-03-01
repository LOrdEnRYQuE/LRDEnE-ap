// ─────────────────────────────────────────────────────────────
// Dev Utilities Route (DEBUG ONLY)
// POST /dev/seed-team — Creates a mock team and members for testing
// ─────────────────────────────────────────────────────────────
import { db } from "../lib/db.js";
const devRoutes = async (app) => {
    app.post("/dev/seed-team", async (request, reply) => {
        if (process.env.NODE_ENV === "production") {
            return reply.code(403).send({ error: "Not allowed in production" });
        }
        try {
            // 1. Create Team
            const team = await db.team.upsert({
                where: { id: "dev-team-1" },
                update: {},
                create: {
                    id: "dev-team-1",
                    name: "Acme Corp (Engineering)",
                    plan: "team",
                }
            });
            // 2. Ensure Users exist
            const users = [
                { id: "dev-user-pro", email: "lead@acme.com", plan: "pro" },
                { id: "dev-user-1", email: "dev1@acme.com", plan: "free" },
                { id: "dev-user-2", email: "dev2@acme.com", plan: "free" },
            ];
            for (const u of users) {
                await db.user.upsert({
                    where: { id: u.id },
                    update: {},
                    create: {
                        id: u.id,
                        email: u.email,
                        plan: u.plan
                    }
                });
                // 3. Create Membership
                await db.teamMembership.upsert({
                    where: { userId_teamId: { userId: u.id, teamId: team.id } },
                    update: {},
                    create: {
                        userId: u.id,
                        teamId: team.id,
                        role: u.id === "dev-user-pro" ? "owner" : "member"
                    }
                });
            }
            // 4. Create some mock chats for analytics
            await db.chat.createMany({
                data: [
                    { userId: "dev-user-pro", prompt: "Explain team management", tokens: 1200, model: "gpt-4o" },
                    { userId: "dev-user-1", prompt: "Fix centered div", tokens: 450, model: "gpt-4o-mini" },
                    { userId: "dev-user-2", prompt: "Write a unit test", tokens: 800, model: "gpt-4o-mini" },
                ]
            });
            return { success: true, teamId: team.id };
        }
        catch (err) {
            return reply.code(500).send({ error: err.message });
        }
    });
};
export default devRoutes;
//# sourceMappingURL=dev.js.map