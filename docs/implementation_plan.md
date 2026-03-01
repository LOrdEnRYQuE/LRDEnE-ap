# ATiQ Editor — Monorepo Scaffold Implementation Plan

Building the full ATiQ Editor monorepo in the existing workspace `/Users/leads/Documents/autonomus/lrdene-app/`. The scaffold implements **Phase 0 + Phase 1** of the plan: root monorepo wiring, the Fastify API backend (auth stub + entitlements + streaming chat), the Next.js 15 web app (pricing, download, account), the VS Code extension (chat sidebar + inline edits), and shared packages (sdk, types).

> [!IMPORTANT]
> This is a **new project scaffold** — no existing source files to preserve. Only `.agent/`, `Docx/`, `docs/`, and `blueprint.md` exist today. All new files go into a clean structure.

---

## Proposed Changes

### Root Monorepo Config

#### [NEW] [pnpm-workspace.yaml](file:///Users/leads/Documents/autonomus/lrdene-app/pnpm-workspace.yaml)

Declares `apps/*` and `packages/*` workspaces.

#### [NEW] [package.json](file:///Users/leads/Documents/autonomus/lrdene-app/package.json)

Root `package.json` with `dev`, `build`, `lint`, `typecheck` scripts via Turborepo.

#### [NEW] [turbo.json](file:///Users/leads/Documents/autonomus/lrdene-app/turbo.json)

Pipeline: `build → ^build`, `dev → persistent`, `lint + typecheck`.

#### [NEW] [tsconfig.base.json](file:///Users/leads/Documents/autonomus/lrdene-app/tsconfig.base.json)

Strict TypeScript base config — extended by all packages.

#### [NEW] [.env.example](file:///Users/leads/Documents/autonomus/lrdene-app/.env.example)

All required env vars (DATABASE_URL, JWT_SECRET, STRIPE keys, OPENAI_API_KEY, etc.)

---

### packages/shared — Shared Types

#### [NEW] packages/shared/src/types.ts

Core TypeScript types: `Plan`, `EntitlementResponse`, `EditHunk`, `EditResponse`, `UserRecord`.

#### [NEW] packages/shared/package.json + tsconfig.json

---

### packages/sdk — Typed API Client

#### [NEW] packages/sdk/src/index.ts

`createClient(config)` factory exposing:

- `client.entitlements.get()`
- `client.chat.stream(prompt, onDelta)`
- `client.edits.apply(code, instruction)`

#### [NEW] packages/sdk/package.json + tsconfig.json

---

### apps/api — Fastify Backend

#### [NEW] apps/api/src/index.ts

Fastify server with CORS, JWT middleware stub, rate limiting plugin.

#### [NEW] apps/api/src/routes/auth.ts

- `POST /auth/magiclink` — accepts email, returns `{ message }`
- `POST /auth/verify` — accepts token, returns `{ jwt, user }`

#### [NEW] apps/api/src/routes/entitlements.ts

- `GET /v1/entitlements` — reads plan from JWT (or dev token), returns feature flags + limits

#### [NEW] apps/api/src/routes/chat.ts

- `GET /v1/chat/stream?q=…` — SSE streaming (fake → real LLM swap-ready)
- `POST /v1/chat` — JSON body version for SDK

#### [NEW] apps/api/src/routes/edits.ts

- `POST /v1/edits` → returns `{ patch, hunks[] }` (stub for now)

#### [NEW] apps/api/src/routes/billing.ts

- `POST /billing/checkout` — Stripe checkout session stub
- `POST /billing/webhook` — Stripe webhook handler stub

#### [NEW] apps/api/src/middleware/auth.ts

JWT verification middleware (dev tokens: `dev-free`, `dev-pro`, `dev-team`).

#### [NEW] apps/api/src/lib/plans.ts

Entitlement map per plan — single source of truth.

#### [NEW] apps/api/package.json + tsconfig.json + .env

---

### apps/web — Next.js 15 Web App

#### [NEW] apps/web/app/layout.tsx

Root layout with Google Fonts (Geist + Geist Mono), dark theme global CSS.

#### [NEW] apps/web/app/page.tsx

Marketing home: hero section with animated gradient, features grid, CTA buttons.

#### [NEW] apps/web/app/pricing/page.tsx

Pricing cards (Free / Pro / Team / Enterprise) — styled dark cards with feature matrix.

#### [NEW] apps/web/app/download/page.tsx

Platform download buttons: macOS `.dmg`, Windows `.exe`, Linux `.AppImage`.

#### [NEW] apps/web/app/login/page.tsx

Magic link auth form.

#### [NEW] apps/web/app/account/page.tsx

Account portal — reads from `GET /v1/entitlements`, shows plan + usage.

#### [NEW] apps/web/app/globals.css

Dark design system: electric blue/neon accents, Geist Mono headings, CSS variables.

#### [NEW] apps/web/package.json + next.config.mjs + tsconfig.json

---

### apps/extension — VS Code Extension

#### [NEW] apps/extension/src/extension.ts

Registers commands: `atiq.openChat`, `atiq.fixCode`, `atiq.rewrite`, `atiq.writeTests`, `atiq.explain`.

#### [NEW] apps/extension/src/chatPanel.ts

Webview panel with SSE streaming, context builder (file + selection + open tabs), plan gating.

#### [NEW] apps/extension/src/inlineEdits.ts

Selection → `POST /v1/edits` → `WorkspaceEdit` with accept/reject diff UI.

#### [NEW] apps/extension/src/config.ts

Reads `atiq.apiUrl` and `atiq.token` from VS Code settings.

#### [NEW] apps/extension/media/main.js + main.css

Webview UI: dark chat panel, message bubbles, streaming indicator.

#### [NEW] apps/extension/package.json + tsconfig.json

---

## Verification Plan

### Automated Tests

No existing tests in the workspace yet. I will add:

1. **API smoke test** — `apps/api/src/__tests__/routes.test.ts` using `vitest` + `supertest`:

   ```bash
   cd apps/api && pnpm test
   ```

   Covers: `GET /health`, `GET /v1/entitlements` (free/pro/team), `GET /v1/chat/stream`.

2. **TypeScript typecheck across all packages:**

   ```bash
   pnpm typecheck
   ```

3. **Build verification:**
   ```bash
   pnpm build
   ```

### Manual Verification Steps

1. **Start the dev server:**

   ```bash
   pnpm install && pnpm dev
   ```

   Expected: API on `http://localhost:8787`, Web on `http://localhost:3000`.

2. **API sanity check:**

   ```bash
   curl http://localhost:8787/health
   # → {"ok":true}

   curl -H "Authorization: Bearer dev-pro" http://localhost:8787/v1/entitlements
   # → JSON with plan:"pro", features.inlineEdits:true
   ```

3. **Web pages:**
   - `http://localhost:3000` → Marketing home loads
   - `http://localhost:3000/pricing` → 3 plan cards render
   - `http://localhost:3000/download` → Platform buttons shown
   - `http://localhost:3000/account` → Shows plan from API

4. **VS Code Extension:**
   ```
   cd apps/extension && pnpm build
   ```
   Then in VS Code: Open `apps/extension/` folder → Press F5 → Extension Dev Host opens → Cmd+Shift+P → "ATiQ: Open Chat" → Type a message → streaming response appears.
