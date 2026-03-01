import { db } from "./db.js";

/**
 * Service layer for Telemetry logic.
 * Decouples business logic from HTTP handlers.
 */
export class TelemetryService {
  /**
   * Records a single telemetry event.
   */
  async recordEvent(params: {
    type: string;
    event: string;
    value?: number;
    metadata?: any;
    version?: string;
    userId?: string;
  }) {
    const { type, event, value, metadata, version, userId } = params;
    
    return await db.telemetryEvent.create({
      data: {
        type,
        event,
        value,
        metadata,
        version,
        userId
      }
    });
  }

  /**
   * Retrieves aggregated statistics for the dashboard.
   */
  async getAggregatedStats() {
    const stats = await db.telemetryEvent.groupBy({
      by: ['type'],
      _count: {
        _all: true
      }
    });

    const recentEvents = await db.telemetryEvent.findMany({
      take: 50,
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { email: true } } }
    });

    return { stats, recentEvents };
  }
}

export const telemetryService = new TelemetryService();
