// ─────────────────────────────────────────────────────────────
// Team & Organization Routes
// ─────────────────────────────────────────────────────────────

import { FastifyPluginAsync } from "fastify";
import { db } from "../lib/db.js";
import { getEntitlements } from "../lib/plans.js";
import { logAudit } from "../lib/audit.js";

const teamRoutes: FastifyPluginAsync = async (app) => {
  
  app.get("/v1/teams", async (request, reply) => {
    const userId = (request as any).userId;
    if (!userId) return reply.code(401).send({ error: "Unauthorized" });

    const memberships = await db.teamMembership.findMany({
      where: { userId },
      include: { team: true }
    });

    return memberships.map((m: any) => ({
      id: m.team.id,
      name: m.team.name,
      role: m.role,
      plan: m.team.plan
    }));
  });

  app.get<{ Params: { id: string } }>("/v1/teams/:id/stats", async (request, reply) => {
    const userId = (request as any).userId;
    const teamId = request.params.id;

    // Verify membership
    const membership = await db.teamMembership.findUnique({
      where: { userId_teamId: { userId, teamId } }
    });

    if (!membership || !["owner", "admin"].includes(membership.role)) {
      return reply.code(403).send({ error: "Insufficient permissions for team stats" });
    }

    // Aggregate token usage for the team
    const members = await db.teamMembership.findMany({
      where: { teamId },
      select: { userId: true, user: { select: { email: true } } }
    });

    const userIds = members.map((m: any) => m.userId);

    // Aggregate token usage via Database directly (Performant)
    const [userStats, modelStats] = await Promise.all([
      db.chat.groupBy({
        by: ['userId'],
        where: { userId: { in: userIds } },
        _sum: { tokens: true },
        _count: { id: true },
      }),
      db.chat.groupBy({
        by: ['model'],
        where: { userId: { in: userIds } },
        _sum: { tokens: true },
      })
    ]);

    const totalTokens = userStats.reduce((sum: number, s: any) => sum + (s._sum.tokens || 0), 0);
    
    const usageByUser = members.map((m: any) => {
      const stats = userStats.find((s: any) => s.userId === m.userId);
      return {
        email: m.user.email,
        tokens: stats?._sum.tokens || 0,
        chatCount: stats?._count.id || 0
      };
    }).sort((a: any, b: any) => b.tokens - a.tokens);

    const byModel: Record<string, number> = {};
    modelStats.forEach((s: any) => {
      if (!s.model) return;
      byModel[s.model] = s._sum.tokens || 0;
    });

    return {
      teamId,
      totalTokens,
      userCount: members.length,
      usage: {
        byUser: usageByUser,
        byModel
      }
    };
  });

  app.get<{ Params: { id: string }; Querystring: { limit?: string; offset?: string } }>(
    "/v1/teams/:id/audit-logs",
    async (request, reply) => {
      const userId = (request as any).userId;
      const teamId = request.params.id;
      const limit = parseInt(request.query.limit || "50");
      const offset = parseInt(request.query.offset || "0");

      const membership = await db.teamMembership.findUnique({
        where: { userId_teamId: { userId, teamId } }
      });

      if (!membership || !["owner", "admin"].includes(membership.role)) {
        return reply.code(403).send({ error: "Insufficient permissions for audit logs" });
      }

      const logs = await db.auditLog.findMany({
        where: { teamId },
        include: { user: { select: { email: true } } },
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: offset
      });

      return logs;
    }
  );

  app.post<{ Params: { id: string }; Body: { email: string; role?: string } }>(
    "/v1/teams/:id/invite",
    async (request, reply) => {
      const userId = (request as any).userId;
      const teamId = request.params.id;

      await logAudit({
        teamId,
        userId,
        action: "member_invite",
        metadata: { invitedEmail: request.body.email, role: request.body.role || "member" }
      });

      return { success: true, message: `Invite sent to ${request.body.email}` };
    }
  );
};

export default teamRoutes;
