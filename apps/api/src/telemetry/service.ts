import { TelemetryEvent, PrivacySettings } from './schemas';

export class TelemetryService {
  private static instance: TelemetryService;
  private privacySettings: PrivacySettings;
  private eventBuffer: TelemetryEvent[] = [];
  private flushInterval: NodeJS.Timeout | null = null;

  private constructor() {
    this.privacySettings = this.loadPrivacySettings();
    this.setupPeriodicFlush();
  }

  public static getInstance(): TelemetryService {
    if (!TelemetryService.instance) {
      TelemetryService.instance = new TelemetryService();
    }
    return TelemetryService.instance;
  }

  private loadPrivacySettings(): PrivacySettings {
    // Load from extension storage or default to privacy-first
    return {
      telemetryEnabled: false, // Default to disabled
      shareCrashReports: true,
      shareUsageData: false,
      retentionDays: 30,
    };
  }

  private setupPeriodicFlush(): void {
    // Flush events every 5 minutes
    this.flushInterval = setInterval(() => {
      this.flushEvents();
    }, 5 * 60 * 1000);
  }

  public async trackEvent(event: Omit<TelemetryEvent, 'timestamp'>): Promise<void> {
    if (!this.privacySettings.telemetryEnabled) {
      return; // Respect user privacy settings
    }

    // Filter sensitive data
    const sanitizedEvent = this.sanitizeEvent(event);

    const fullEvent: TelemetryEvent = {
      ...sanitizedEvent,
      timestamp: new Date(),
    };

    this.eventBuffer.push(fullEvent);

    // Auto-flush if buffer gets too large
    if (this.eventBuffer.length >= 100) {
      await this.flushEvents();
    }
  }

  private sanitizeEvent(event: Omit<TelemetryEvent, 'timestamp'>): Omit<TelemetryEvent, 'timestamp'> {
    // Remove any potentially sensitive data from metadata
    const sanitized = { ...event };
    
    if (sanitized.metadata) {
      // Remove common sensitive fields
      const sensitiveKeys = ['password', 'token', 'key', 'secret', 'auth', 'credential'];
      Object.keys(sanitized.metadata).forEach(key => {
        if (sensitiveKeys.some(sensitive => key.toLowerCase().includes(sensitive))) {
          delete sanitized.metadata[key];
        }
      });
    }

    return sanitized;
  }

  private async flushEvents(): Promise<void> {
    if (this.eventBuffer.length === 0) {
      return;
    }

    const eventsToSend = [...this.eventBuffer];
    this.eventBuffer = [];

    try {
      // Send to telemetry API
      await fetch('/api/telemetry/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ events: eventsToSend }),
      });
    } catch (error) {
      console.error('Failed to send telemetry events:', error);
      // Could implement retry logic here
    }
  }

  public updatePrivacySettings(settings: Partial<PrivacySettings>): void {
    this.privacySettings = { ...this.privacySettings, ...settings };
    // Save to extension storage
    this.savePrivacySettings();
  }

  private savePrivacySettings(): void {
    // Save to extension storage
    // Implementation depends on extension API
  }

  public getPrivacySettings(): PrivacySettings {
    return { ...this.privacySettings };
  }

  public async trackCommand(command: string, duration?: number): Promise<void> {
    await this.trackEvent({
      sessionId: this.getSessionId(),
      eventType: 'command_executed',
      metadata: {
        command,
        duration,
      },
      version: this.getVersion(),
      platform: this.getPlatform(),
    });
  }

  public async trackError(error: Error, context?: string): Promise<void> {
    if (!this.privacySettings.shareCrashReports) {
      return;
    }

    await this.trackEvent({
      sessionId: this.getSessionId(),
      eventType: 'error_occurred',
      metadata: {
        error: error.message,
        stack: error.stack,
        context,
      },
      version: this.getVersion(),
      platform: this.getPlatform(),
    });
  }

  private getSessionId(): string {
    // Generate or retrieve session ID
    return 'session-' + Math.random().toString(36).substr(2, 9);
  }

  private getVersion(): string {
    // Get extension version
    return '1.1.0'; // Should be dynamic
  }

  private getPlatform(): string {
    // Get platform information
    return navigator.platform || 'unknown';
  }

  public dispose(): void {
    if (this.flushInterval) {
      clearInterval(this.flushInterval);
      this.flushInterval = null;
    }
    this.flushEvents(); // Final flush
  }
}
