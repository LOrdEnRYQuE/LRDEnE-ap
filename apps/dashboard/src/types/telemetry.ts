export interface DashboardMetrics {
  totalUsers: number;
  activeUsers: number;
  errorRate: number;
  avgResponseTime: number;
  topCommands: Array<{
    command: string;
    count: number;
  }>;
  platformBreakdown: Record<string, number>;
  versionDistribution: Record<string, number>;
}

export interface TelemetryEvent {
  timestamp: Date;
  sessionId: string;
  userId?: string;
  eventType: 'command_executed' | 'extension_loaded' | 'error_occurred' | 'feature_used';
  metadata: Record<string, unknown>;
  version: string;
  platform: string;
}

export interface PrivacySettings {
  telemetryEnabled: boolean;
  shareCrashReports: boolean;
  shareUsageData: boolean;
  retentionDays: number;
}
