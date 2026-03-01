name: Crash Handler

on:
  push:
    branches: [main, master]
    paths:
      - "apps/extension/**"

jobs:
  create-error-handler:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: recursive

      - name: Create error handler
        run: |
          cat > apps/extension/src/errorHandler.ts << 'EOF'
          import * as vscode from 'vscode';

          /**
           * Global error handler for unhandled exceptions.
           * Provides user-friendly error messages with actionable steps.
           */
          export class ErrorHandler {
            private static instance: ErrorHandler;
            private recentErrors: Array<{ timestamp: Date; error: Error; context?: string }> = [];
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
              vscode.window.onDidOpenTextDocument((event) => {
                const activeEditor = vscode.window.activeTextEditor;
                if (activeEditor) {
                  const disposable = activeEditor.onDidChangeContent(() => {
                    const document = activeEditor.document;
                    if (document) {
                      try {
                        // Check for ATiQ command errors
                        const text = document.getText();
                        if (text.includes('ATiQ:') && !text.includes('ATiQ: Login')) {
                          this.handleError(new Error('ATiQ command error'), 'Command execution failed', document);
                        }
                      } catch (error) {
                        this.handleError(error, 'Document processing', document);
                      }
                    }
                  });
                  vscode.workspace.onDidSaveTextDocument((event) => {
                    try {
                      // Validate document before save
                      const text = event.document.getText();
                      if (text.includes('Bearer ') || text.includes('sk-')) {
                        vscode.window.showWarningMessage('⚠️ Secret detected in document! Please remove sensitive information before saving.', 'Security Warning');
                        return false; // Prevent save
                      }
                    } catch (error) {
                      this.handleError(error, 'Document validation', event.document);
                    }
                  });
                }
              });

              vscode.window.onDidChangeActiveTextEditor((event) => {
                if (event.textEditor) {
                  event.textEditor.onDidChangeContent(() => {
                    const document = event.textEditor.document;
                    if (document) {
                      try {
                        const text = document.getText();
                        if (text.includes('Bearer ') || text.includes('sk-')) {
                          vscode.window.showWarningMessage('⚠️ Secret detected in document! Please remove sensitive information.', 'Security Warning');
                        }
                      } catch (error) {
                        this.handleError(error, 'Editor content change', document);
                      }
                    }
                  });
                }
              });
            }

            private handleError(error: Error, context: string, document?: vscode.TextDocument): void {
              const timestamp = new Date();
              const errorInfo = {
                message: error.message,
                stack: error.stack,
                extensionVersion: '1.0.0',
                timestamp: timestamp.toISOString(),
                context: context || 'Unknown context'
              };

              this.recentErrors.unshift({ timestamp, error: error, context: document });
              if (this.recentErrors.length > this.MAX_RECENT_ERRORS) {
                this.recentErrors.pop();
              }

              // Show user-friendly error message
              const actions = ['View Details', 'Copy Error', 'Report Issue'];
              const selectedAction = await vscode.window.showErrorMessage(
                `❌ ${error.message}`,
                ...actions,
                { modal: true }
              );

              this.logError(errorInfo, selectedAction);
            }

            private logError(errorInfo: any, selectedAction?: string): void {
              console.error('[ATiQ Error]', JSON.stringify(errorInfo, null, 2));
              
              // Store error for reporting
              const errorLog = {
                ...errorInfo,
                action: selectedAction || 'Dismissed',
                userAgent: this.getUserAgent()
              };

              // Add to recent errors for debugging
              this.recentErrors.push(errorInfo);
            }

            private getUserAgent(): string {
              // Return a user agent string for error reporting
              return \`ATiQ Editor v1.0.0 (VSCode \${vscode.version})\`;
            }

            public dispose(): void {
              // Cleanup listeners
            }
          }
          EOF

          git add apps/extension/src/errorHandler.ts
          git commit -m "feat: Add global error handler with user-friendly reporting"
