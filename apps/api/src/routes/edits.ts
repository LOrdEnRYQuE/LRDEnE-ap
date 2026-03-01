// ─────────────────────────────────────────────────────────────
// Edits Route
// POST /v1/edits — return a unified diff patch for inline edits
// ─────────────────────────────────────────────────────────────

import { FastifyPluginAsync } from "fastify";
import type { EditRequest, EditResponse } from "@atiq/shared";
import { db } from "../lib/db.js";
import { gateway } from "../lib/ai/index.js";
import { EDIT_SYSTEM_PROMPT } from "../lib/prompts.js";
import { parseUnifiedDiff } from "../lib/diff.js";
import { usageGuard } from "../middleware/usage.js";

import { getEntitlements } from "../lib/plans.js";

const editsRoutes: FastifyPluginAsync = async (app) => {
  app.post<{ Body: EditRequest }>("/v1/edits", {
    preHandler: [usageGuard]
  }, async (request, reply): Promise<EditResponse> => {
    const userId = (request as any).userId;
    const plan = (request as any).plan || "free";
    const entitlements = getEntitlements(plan);
    const model = entitlements.models.edits;
    const clientRequestId = (request.body as any).clientRequestId || request.id;
    // 1. Validation
    const { instruction, target, context } = request.body;
    if (!instruction || !target?.relPath || !context?.fileText) {
      return reply.code(400).send({
        error: { message: "Instruction, relPath, and fileText are required.", code: "VALIDATION_ERROR" },
        requestId: request.id,
      }) as never;
    }

    // Safety Check
    if (target.relPath.startsWith("/") || target.relPath.includes("..")) {
      return reply.code(400).send({
        error: { message: "Unsafe relative path provided.", code: "VALIDATION_ERROR" },
        requestId: request.id,
      }) as never;
    }

    try {
      const systemPrompt = EDIT_SYSTEM_PROMPT.replace("{relPath}", target.relPath);
      let prompt = `FILE: ${target.relPath}\n` +
        (target.selection ? `SELECTION RANGE: L${target.selection.startLine0} to L${target.selection.endLine0}\n` : "") +
        `INSTRUCTION: ${instruction}\n\n`;

      if (context.surroundingContext) {
        prompt += `BEFORE CONTEXT:\n${context.surroundingContext.before}\n\n` +
          `SELECTION:\n${context.selectionText || "(none)"}\n\n` +
          `AFTER CONTEXT:\n${context.surroundingContext.after}\n\n`;
      } else {
        prompt += `FULL FILE CONTENT:\n${context.fileText}\n\n`;
      }

      const rawDiff = await gateway.complete({
        systemPrompt,
        prompt,
        model: model as any,
        temperature: 0, 
      });

      const cleanDiff = rawDiff.replace(/^```[a-z]*\n/i, "").replace(/\n```$/m, "").trim();
      
      if (!cleanDiff) {
        // Mark as completed even if empty (no-op is a valid completion)
        await db.usageEvent.update({
          where: { clientRequestId },
          data: { status: "completed", model }
        }).catch(() => {});

        return {
          meta: { requestId: request.id, model, plan },
          diff: "",
          hunks: [],
          stats: { filesChanged: 0, hunks: 0, insertions: 0, deletions: 0 },
          safety: { scope: target.selection ? "selection" : "file", relPaths: [target.relPath], appliedByDefault: false }
        };
      }

      // Validate target
      const filesInDiff = [...cleanDiff.matchAll(/^\+\+\+ b\/(.+)$/gm)].map(m => m[1]);
      if (filesInDiff.length > 1) {
        return reply.code(400).send({
          error: { message: "Multi-file diffs not allowed.", code: "VALIDATION_ERROR" }
        }) as never;
      }

      const hunks = parseUnifiedDiff(cleanDiff);
      let insertions = 0;
      let deletions = 0;
      for (const hunk of hunks) {
        for (const line of hunk.lines) {
          if (line.type === "add") insertions++;
          if (line.type === "del") deletions++;
        }
      }

      const response: EditResponse = {
        meta: { requestId: request.id, model, plan },
        diff: cleanDiff,
        hunks,
        stats: {
          filesChanged: 1,
          hunks: hunks.length,
          insertions,
          deletions,
        },
        safety: {
          scope: target.selection ? "selection" : "file",
          relPaths: [target.relPath],
          appliedByDefault: false
        }
      };

      // 2. Commit Phase
      const today = new Date().toISOString().split("T")[0];
      await db.$transaction([
        db.usageEvent.update({
          where: { clientRequestId },
          data: { status: "completed", tokens: Math.ceil(cleanDiff.length / 4), model }
        }),
        db.usageCounter.upsert({
          where: { userId_date: { userId: userId || "anonymous", date: today } },
          create: { userId: userId || "anonymous", date: today, editCount: 1 },
          update: { editCount: { increment: 1 } }
        }),
        ...(request.body.noTelemetry ? [] : [
          db.edit.create({
            data: {
              userId: userId || "anonymous",
              instruction,
              fileContent: context.fileText,
              diff: cleanDiff,
              language: target.relPath.split(".").pop() || "text",
            }
          })
        ])
      ]).catch((err: any) => app.log.error({ err }, "Failed to commit edit usage"));

      return response;

    } catch (err) {
      app.log.error({ err, requestId: request.id }, "AI Edit error");
      await db.usageEvent.update({
        where: { clientRequestId },
        data: { status: "failed" }
      }).catch(() => {});
      
      return reply.code(502).send({
        error: { message: "Service unable to generate diff.", code: "PROVIDER_ERROR" }
      }) as never;
    }
  });
};

export default editsRoutes;
