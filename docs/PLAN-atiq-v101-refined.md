# Refined Project Plan: ATiQ Editor v1.0.1 (Architecture & Deployment Focus)

## 1. Goal

Professionalize the v1.0.1 release by refining the API architecture based on Node.js 2025 best practices, ensuring the genuine `Code-OSS` fork is built and distributed, and completing the telemetry dashboard with a verified UI.

## 2. Refined Steps

### Phase 1: Backend Professionalization (@backend-specialist)

- **Layered Architecture**: Transition all telemetry and session management to a service-based architecture (e.g., `TelemetryService`, `AuthService`).
- **Validation**: Ensure all API routes (especially `POST /telemetry/event`) use Zod/Fastify schemas strictly to prevent malformed data.
- **Centralized Error Handling**: Review the existing `ErrorHandler` in the extension to match professional patterns (e.g., standard error codes, diagnostic logging, and retry strategies).

### Phase 2: Desktop & CI/CD Refinement (@devops-engineer)

- **Code-OSS Build Pipeline**: Update `.github/workflows/desktop-release.yml` to build the fork in `apps/desktop/core`. This includes:
  - `npm install` and `npm run gulp compile` within `apps/desktop/core`.
  - Platform-specific packaging (using VS Code's native scripts where possible).
- **VSIX Automation**: Consolidate `extension-release.yml` and `ci.yml` packaging steps to ensure consistent builds using the latest `vsce` version.

### Phase 3: Web Dashboard Completion (@frontend-specialist)

- **UI Components**: Verified the existence of UI components in `apps/web`. Since `Card`, `Table`, etc. are missing, I'll use the `shadcn` MCP server to add them to the project correctly.
- **Integration**: Ensure the dashboard connects to the API via verified proxy/base URL.

### Phase 4: Verification (@test-engineer)

- **Integration Tests**: Create a suite to verify the telemetry recording flow from extension -> API -> database.
- **Security Audit**: Use `security_scan.py` to ensure no keys or malformed packets can trigger server-side vulnerabilities in the new routes.

## 3. Approval Checkpoint

_I will proceed with implementing these refinements sequentially._
