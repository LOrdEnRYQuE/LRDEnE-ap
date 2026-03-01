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
      5000
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
    const reportIssue = { title: 'Report Issue' } as vscode.MessageItem;
    const copyError = { title: 'Copy Error' } as vscode.MessageItem;
    const dismiss = { title: 'Dismiss' } as vscode.MessageItem;
    
    const selectedAction = await vscode.window.showErrorMessage(
      `❌ ${error.message}`,
      { modal: true },
      reportIssue,
      copyError,
      dismiss
    );

    if (selectedAction) {
      const action = selectedAction.title === 'Report Issue' ? 'report' :
                    selectedAction.title === 'Copy Error' ? 'copy' : 'dismiss';
      this.addReport(error, action, context);
    }
  }

  private addReport(error: Error, action: string, context?: string): void {
    const timestamp = new Date();
    const report = {
      timestamp,
      error,
      action,
      context: context || 'Unknown context'
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
