/**
 * Log an administrative action to a team's audit trail.
 */
export declare function logAudit(params: {
    teamId: string;
    userId: string;
    action: string;
    entityId?: string;
    metadata?: any;
}): Promise<any>;
/**
 * Log potential security events (anomalies, failures, etc.)
 */
export declare function logSecurity(params: {
    userId?: string;
    type: string;
    severity: "info" | "warning" | "critical";
    ip?: string;
    metadata?: any;
}): Promise<any>;
//# sourceMappingURL=audit.d.ts.map