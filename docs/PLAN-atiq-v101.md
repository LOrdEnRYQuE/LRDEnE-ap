# PLAN: ATiQ Editor v1.0.1 Implementation

This plan formalizes the roadmap for ATiQ Editor v1.0.1, focusing on professionalizing the release process, improving observability, and expanding distribution.

## User Review Required

> [!IMPORTANT]
> Please review the following questions before we proceed with implementation:
>
> 1. **Telemetry Service**: Is there a preferred backend service for crash reporting and telemetry (e.g., Sentry, Azure Application Insights)?
> 2. **Desktop Build**: Are we building a standalone `Code-OSS` binary with ATiQ branding, or continuing with an Electron wrapper that hosts the extension/web view?
> 3. **Marketplace**: Which extension marketplace are we targeting (VS Code Marketplace, Open VSX, or both)?

## Proposed Changes

### [CI/CD Pipeline]

- Create `.github/workflows/release.yml` for automated VSIX packaging and GitHub Releases.
- Enhance `.github/workflows/ci.yml` with automated versioning and build artifacts.
- Implement `.github/workflows/extension-build.yml` and `.github/workflows/desktop-build.yml`.

### [Extension Observability]

- **errorHandler.ts**: Global error boundary for the extension.
- **errorReporting.ts**: UI notifications and reporting flow.
- **telemetry.ts**: Anonymous event tracking and performance metrics.

### [Desktop Distribution]

- **desktop-release.yml**: Automated build and signing for Windows/macOS/Linux.
- **updater.ts**: Logic for background update checks and prompts.

### [Telemetry Dashboard]

- **apps/api/src/routes/telemetry.ts**: API endpoints for data aggregation.
- **apps/web/src/pages/admin/telemetry.tsx**: Admin UI for viewing metrics.

## Verification Plan

### Automated Tests

- `pnpm test`: Run existing test suites.
- `python .agent/scripts/checklist.py .`: Full project audit.
- `python .agent/skills/vulnerability-scanner/scripts/security_scan.py .`: Security audit.

### Manual Verification

- Verify VSIX package generation and installation.
- Trigger synthetic errors to test crash reporting UI.
- Verify update notifications in the desktop app.
