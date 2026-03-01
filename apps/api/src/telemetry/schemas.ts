import { z } from 'zod';

// Telemetry event schemas
export const TelemetryEventSchema = z.object({
  timestamp: z.date(),
  sessionId: z.string(),
  userId: z.string().optional(), // Only if user opted in
  eventType: z.enum(['command_executed', 'extension_loaded', 'error_occurred', 'feature_used']),
  metadata: z.record(z.string(), z.unknown()),
  version: z.string(),
  platform: z.string(),
});

export type TelemetryEvent = z.infer<typeof TelemetryEventSchema>;

// Privacy settings
export const PrivacySettingsSchema = z.object({
  telemetryEnabled: z.boolean().default(false),
  shareCrashReports: z.boolean().default(true),
  shareUsageData: z.boolean().default(false),
  retentionDays: z.number().min(7).max(365).default(30),
});

export type PrivacySettings = z.infer<typeof PrivacySettingsSchema>;

// Dashboard metrics
export const DashboardMetricsSchema = z.object({
  totalUsers: z.number(),
  activeUsers: z.number(),
  errorRate: z.number(),
  avgResponseTime: z.number(),
  topCommands: z.array(z.object({
    command: z.string(),
    count: z.number(),
  })),
  platformBreakdown: z.record(z.string(), z.number()),
  versionDistribution: z.record(z.string(), z.number()),
});

export type DashboardMetrics = z.infer<typeof DashboardMetricsSchema>;
