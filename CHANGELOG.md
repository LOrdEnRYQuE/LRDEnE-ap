# ATiQ AI — Changelog

## [1.0.0] — 2026-03-01

### 🚀 First production release.

---

### Extension

**Added**

- **Project Map Sidebar**: A new Activity Bar view that visualizes the workspace folder structure and indexed symbols (classes, functions, methods). Click to jump directly to the code.
- **Terminal Context (@terminal)**: Capture and inject the last 5 terminal command outputs into AI chat. Uses VS Code Shell Integration to bridge the gap between error logs and AI assistance.
- **Architecture Context (@map)**: Mention `@map` in chat to automatically feed a high-level summary of the project's architecture (folders/files/symbols) into the AI.
- **Onboarding Walkthrough**: Three-step "Welcome to ATiQ AI" guide in VS Code for sign-in, AI chat, and inline edits.
- **Inline Edits (Cmd+K)**: Select code, hit Cmd+K, enter an instruction. ATiQ generates a unified diff in a VS Code diff view. Accept or Reject — no auto-write.
- **AI Chat Panel**: Streaming chat with real-time Markdown rendering including code blocks, bold, and lists.
- **Code Block Actions**: Per-block "Copy", "Apply" (insert at cursor), and "Run" (execute in ATiQ terminal) buttons.
- **Repo Symbol Index**: Automatic background indexing of TS/JS/Python/Go/Rust symbols. Persists to disk across sessions.
- **@mention Completions**: Type `@symbol` or `@file` in chat to get a keyboard-navigable autocomplete dropdown wired to the symbol index.
- **Path Proximity Ranking**: `@symbol` results are ranked by architectural proximity to the active file.
- **Cross-Reference Engine**: `@symbol` expansions include up to 3 "Used in…" snippets from across the repo.
- **Telemetry Toggle**: `atiq.telemetryEnabled` setting. When OFF, prompts and responses are never stored server-side.
- **Reactive Status Bar**: Live symbol count (`$(database) ATiQ: 4,312 symbols`) that updates in real-time via EventEmitter.
- **Auth**: Magic Link sign-in with secure token storage (`SecretStorage`). Auto-refreshes JWTs.
- **Plan Badge**: Status bar shows `[free]` / `[pro]` / `[team]` after sign-in.
- **Context Passing**: Inline edits include 5 lines of surrounding context for higher diff accuracy.
- **Enhanced Safety**: Automatic secret scrubbing (API keys, tokens, etc.) for all `@terminal` context injections.

**Changed**

- Removed deprecated `atiq.token` and `atiq.model` settings.

---

### API

**Added**

- `POST /v1/chat/stream` — SSE streaming chat with model tiering (Free → `gpt-4o-mini`, Pro → `gpt-4o`).
- `POST /v1/edits` — Inline edit endpoint returning unified diff, structured hunks, and safety scope.
- `GET /v1/entitlements` — Returns plan limits and model capabilities for the authenticated user.
- `POST /auth/magic-link` + `POST /auth/verify` — Magic Link authentication flow.
- `POST /auth/refresh` — JWT rotation using refresh tokens.
- **Usage Guard** (`usageGuard` middleware): Pre-flight quota check before all AI endpoints. Returns `402 PLAN_LIMIT` or `429 RATE_LIMIT`.
- **Idempotency**: All usage events tracked by `clientRequestId` — retries never double-bill.
- **noTelemetry flag**: When set, usage counters still increment (quota enforcement) but AI interactions are not persisted.
- **Stripe Webhooks**: `checkout.session.completed`, `customer.subscription.updated/deleted` — idempotent via `WebhookEvent` deduplication.
- **Team Routes**: Team membership, invite, and per-team audit log endpoints.
- **Multi-provider AI Gateway**: Routes between OpenAI and Anthropic providers with automatic fallback.
- **Safety**: Path traversal guard on `relPath` for inline edits. Multi-file diffs rejected.

**Security**

- `.env` excluded from all builds and `.vscodeignore`.
- Secrets never logged.
- Rate limiting: 200 req/min per IP via `@fastify/rate-limit`.

---

### Packages

**`@atiq/shared@1.0.0`**

- `ChatRequest`, `EditRequest`, `EditResponse`, `EditHunk` interfaces.
- `noTelemetry` optional flag on both request types.
- Plan map types and entitlement model.

**`@atiq/sdk@1.0.0`**

- `createClient({ apiUrl, token })`.
- `client.chat.stream(request, signal)` — SSE streaming with AbortSignal.
- `client.edits.create(request)` — Type-safe edit requests.
- `client.auth.verify(token)` / `client.auth.refresh(refreshToken)`.
- `client.user.entitlements()`.

---

### Performance (E4)

- Chat DOM capped at 100 messages (older messages GC'd automatically).
- Streaming Markdown parser falls back to plain-text mode above 50KB to prevent regex backtracking.
- Symbol index file watcher debounce: 10s save interval to avoid thrashing on rapid file saves.

---

## Release Gate

A new machine should be able to:

1. Install extension from `.vsix`
2. Set `atiq.apiUrl` in settings
3. Sign in via Magic Link
4. Run a chat and a Cmd+K edit

…in under 2 minutes.
