// ─────────────────────────────────────────────────────────────
// Audit & Security Logger
// Central utility for Phase 9 implementation.
// ─────────────────────────────────────────────────────────────

import { db } from "./db.js";

/**
 * Log an administrative action to a team's audit trail.
 */
export async function logAudit(params: {
  teamId: string;
  userId: string;
  action: string;
  entityId?: string;
  metadata?: any;
}) {
  try {
    const { teamId, userId, action, entityId, metadata } = params;
    
    // In local dev with mock DB, this will resolve safely
    return await db.auditLog.create({
      data: {
        teamId,
        userId,
        action,
        entityId,
        metadata: metadata ? JSON.parse(JSON.stringify(metadata)) : null,
      },
    });
  } catch (err) {
    console.error("Failed to write audit log:", err);
  }
}

/**
 * Log potential security events (anomalies, failures, etc.)
 */
export async function logSecurity(params: {
  userId?: string;
  type: string;
  severity: "info" | "warning" | "critical";
  ip?: string;
  metadata?: any;
}) {
  try {
    const { userId, type, severity, ip, metadata } = params;
    
    return await db.securityEvent.create({
      data: {
        userId,
        type,
        severity,
        ip,
        metadata: metadata ? JSON.parse(JSON.stringify(metadata)) : null,
      },
    });
  } catch (err) {
    console.error("Failed to write security event:", err);
  }
}
