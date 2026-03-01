import * as vscode from 'vscode';

/**
 * Global error handler for unhandled exceptions.
 * Provides user-friendly error messages with actionable steps.
 */
export class ErrorHandler {
  private static instance: ErrorHandler;
  private recentErrors: Array<{ timestamp: Date; error: Error; context?: any }> = [];
  private readonly MAX_RECENT_ERRORS = 10;

  private constructor() {
    this.registerListeners();
  }

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  private registerListeners(): void {
    // Global process-level error handling
    process.on('uncaughtException', (error) => {
      this.handleError(error, 'Uncaught Exception');
    });

    process.on('unhandledRejection', (reason) => {
      const error = reason instanceof Error ? reason : new Error(String(reason));
      this.handleError(error, 'Unhandled Rejection');
    });
  }

  public async handleError(error: Error, context: string, extra?: any): Promise<void> {
    const timestamp = new Date();
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      extensionVersion: '1.0.1',
      timestamp: timestamp.toISOString(),
      context: context || 'Unknown context',
      extra
    };

    this.recentErrors.unshift({ timestamp, error, context: extra });
    if (this.recentErrors.length > this.MAX_RECENT_ERRORS) {
      this.recentErrors.pop();
    }

    console.error('[ATiQ Error]', JSON.stringify(errorInfo, null, 2));

    // Show user-friendly error message
    const actions = ['View Details', 'Report Issue'];
    const selectedAction = await vscode.window.showErrorMessage(
      `❌ ATiQ Error: ${error.message}`,
      ...actions
    );

    if (selectedAction === 'Report Issue') {
      vscode.commands.executeCommand('atiq.reportIssue', errorInfo);
    }
  }

  public dispose(): void {
    // Cleanup listeners if needed
  }
}
