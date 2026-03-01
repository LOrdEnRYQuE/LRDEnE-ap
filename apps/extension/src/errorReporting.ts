import * as vscode from 'vscode';

/**
 * User-facing error reporting UI.
 * Provides non-intrusive error notifications with actionable steps.
 */
export class ErrorReporting {
  private static instance: ErrorReporting;
  private recentReports: Array<{ timestamp: Date; error: Error; action: string; context?: string }> = [];
  private readonly MAX_RECENT_REPORTS = 5;

  private constructor() {
    this.setupStatusBar();
  }

  public static getInstance(): ErrorReporting {
    if (!ErrorReporting.instance) {
      ErrorReporting.instance = new ErrorReporting();
    }
    return ErrorReporting.instance;
  }

  private setupStatusBar(): void {
    const statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Right,
      5000,
      'ATiQ Support',
      vscode.ThemeIcon.File
    );
    statusBarItem.command = 'atiq.reportIssue';
    statusBarItem.tooltip = 'Report ATiQ Issue';

    statusBarItem.show();
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (editor) {
        statusBarItem.show();
      } else {
        statusBarItem.hide();
      }
    });
  }

  public async showIssueDialog(error: Error, context?: string): Promise<void> {
    const actions: vscode.MessageItem[] = [
      { title: 'Report Issue', action: 'report' },
      { title: 'Copy Error', action: 'copy' },
      { title: 'Dismiss', action: 'dismiss' }
    ];
    
    const selectedAction = await vscode.window.showErrorMessage(
      `❌ ${error.message}`,
      actions,
      { modal: true }
    );

    this.addReport(error, selectedAction.action, context);
  }

  private addReport(error: Error, action: string, context?: string): void {
    const timestamp = new Date();
    const report = {
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name
      },
      extensionVersion: '1.0.0',
      timestamp: timestamp.toISOString(),
      context: context || 'Unknown context',
      action,
      userAgent: this.getUserAgent()
    };

    this.recentReports.unshift(report);
    if (this.recentReports.length > this.MAX_RECENT_REPORTS) {
      this.recentReports.pop();
    }

    // Store report for potential telemetry
    console.log('[ATiQ Error Report]', JSON.stringify(report, null, 2));
  }

  private getUserAgent(): string {
    return `ATiQ Editor v1.0.0 (VSCode ${vscode.version})`;
  }

  public dispose(): void {
    // Cleanup status bar
  }
}
