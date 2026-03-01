import * as vscode from 'vscode';

interface PerformanceMetrics {
  [key: string]: number;
}

interface SystemHealth {
  [key: string]: any;
}

interface UserInteraction {
  timestamp: Date;
  action: string;
  duration?: number;
}

/**
 * Enhanced telemetry collection for ATiQ Editor.
 * Tracks performance metrics, user interactions, and system health.
 */
export class TelemetryService {
  private static instance: TelemetryService;
  private performanceMetrics: PerformanceMetrics = {};
  private userInteractions: UserInteraction[] = [];
  private systemHealth: SystemHealth = {};

  private constructor() {
    this.setupPerformanceTracking();
  }

  public static getInstance(): TelemetryService {
    if (!TelemetryService.instance) {
      TelemetryService.instance = new TelemetryService();
    }
    return TelemetryService.instance;
  }

  private setupPerformanceTracking(): void {
    // Track extension load time
    const startTime = Date.now();
    
    vscode.window.onDidChangeActiveTextEditor(() => {
      if (vscode.window.activeTextEditor) {
        const loadTime = Date.now() - startTime;
        this.recordMetric('extension.load_time', loadTime);
      }
    });

    // Track command execution times
    vscode.commands.registerCommand('atiq.openChat', () => {
      const startTime = Date.now();
      return {
        execute: async (...args: any[]) => {
          const duration = Date.now() - startTime;
          this.recordMetric('command.open_chat', duration);
          // Execute original command
          return vscode.commands.executeCommand('atiq.openChat', ...args);
        }
      };
    });

    // Track memory usage
    setInterval(() => {
      const memUsage = process.memoryUsage();
      this.systemHealth.memory_usage = {
        heapUsed: memUsage.heapUsed,
        heapTotal: memUsage.heapTotal,
        external: memUsage.external
      };
    }, 30000); // Every 30 seconds
  }

  private recordMetric(name: string, value: number): void {
    this.performanceMetrics[name] = (this.performanceMetrics[name] || 0) + value;
  }

  public getMetrics(): {
    return {
      performance: this.performanceMetrics,
      systemHealth: this.systemHealth,
      interactions: this.userInteractions
    };
  }

  public recordInteraction(action: string, duration?: number): void {
    this.userInteractions.push({
      timestamp: new Date(),
      action,
      duration
    });
  }
}
