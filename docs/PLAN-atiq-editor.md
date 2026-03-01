# docs/PLAN-atiq-editor.md

# ATiQ Editor — Canonical Plan (Hardened)

> **Project type:** SaaS + VS Code Extension (first) → Code-OSS Desktop (later)  
> **Stack:** pnpm monorepo · Fastify · Next.js 15 · VS Code Extension API · Prisma · Stripe · Code-OSS  
> **Strategy:** Extension-first → Validate paid loop → Ship core AI value → Fork & distribute desktop editor

## 0) Goal

Build a commercial AI coding product people pay for because it’s useful:

- **Milestone A:** Payment loop works end-to-end.
- **Milestone B:** AI workflows feel excellent and safe.
- **Milestone C:** ATiQ ships as a standalone desktop product (installers + updates).

## 1) Monorepo Layout

```text
atiq-editor/
├── apps/
│   ├── api/          (Fastify: auth, billing, entitlements, AI gateway)
│   ├── web/          (Next: marketing, pricing, downloads, account portal)
│   ├── extension/    (VS Code extension: chat, edits, status bar)
│   └── desktop/      (Code-OSS fork: Milestone C)
├── packages/
│   ├── sdk/          (typed client used by web + extension)
│   ├── prompts/      (prompt templates + versioning)
│   └── shared/       (types + constants)
└── docs/
    ├── PLAN-atiq-editor.md
    └── COMPLIANCE.md
```

## 2) Cross-cutting Standards (apply to all milestones)

### 2.1 API Error Contract (Unified)

All API errors must return:

```json
{
  "error": {
    "code": "UNAUTHENTICATED|PLAN_LIMIT|RATE_LIMIT|VALIDATION_ERROR|PROVIDER_ERROR|INTERNAL",
    "message": "Human readable",
    "hint": "Optional remediation",
    "requestId": "trace id"
  }
}
```

**Status code semantics**

- `401` UNAUTHENTICATED (missing/invalid session)
- `402` PLAN_LIMIT (upgrade required, feature-gated)
- `429` RATE_LIMIT (usage exceeded / throttling)
- `400` VALIDATION_ERROR
- `502` PROVIDER_ERROR (LLM provider outage/timeout)
- `500` INTERNAL

### 2.2 SDK Rule

No “random fetch” sprinkled around:

- Web and Extension must call the API through `packages/sdk`.

### 2.3 Secrets Rule

- No provider keys or Stripe secrets in clients.
- Extension tokens stored in **VS Code SecretStorage** (never settings.json).

---

# 🗺️ Roadmap — 3 Milestones

## Milestone A — Paid login works end-to-end

### Goal

A user can land → choose plan → pay → see Pro unlock in **web + extension** reliably.

### Definition of Done (A DoD)

Paying users see **Pro** reflected in Web Account + Extension within **< 2 minutes**, consistently.

### Deliverables

#### A1) Persistence (Prisma first)

**Minimum models**

- `User`
- `Session` (or access+refresh tokens)
- `RefreshToken` (hashed)
- `StripeCustomer`
- `Subscription`
- `UsageCounter`
- `WebhookEvent` (Stripe idempotency)

**Done means**

- [ ] `prisma migrate` works locally + CI
- [ ] User upsert happens on auth verify
- [ ] Entitlements are computed from DB state (not hardcoded)

#### A2) Auth — Magic Link + Refresh Tokens (hardened)

**Endpoints**

- `POST /auth/magiclink` (rate-limited)
- `GET /auth/verify?token=...` (single-use, TTL)
- `POST /auth/refresh` (rotation)
- `POST /auth/logout` (revoke refresh token)

**Rules**

- Magic link token: short TTL + single-use + invalidate previous tokens
- Refresh tokens:
  - stored hashed in DB (never plaintext)
  - rotated: each refresh returns new refresh token; old is revoked
  - include `tokenId`, `issuedAt`, `expiresAt`, `revokedAt`, `replacedByTokenId`

**Extension storage**

- tokens stored via `context.secrets` (SecretStorage)

**Done means**

- [ ] Refresh rotation works (old token rejected after refresh)
- [ ] Logout revokes refresh token
- [ ] `/auth/magiclink` abuse controls exist (rate limit per email + IP)

#### A3) Stripe Checkout + Webhooks (signature + idempotency)

**Endpoints**

- `POST /billing/checkout` (creates Stripe checkout session)
- `POST /webhooks/stripe` (signature verification)

**Hard requirements**

- Verify Stripe signature
- Idempotency: store processed `event.id` in DB; ignore duplicates
- Map Stripe price/product → internal plan (`free|pro|team`)

**Testing requirement**

- Replay same webhook `event.id` twice → second is a no-op

**Done means**

- [ ] Paying updates subscription/plan in DB via webhook
- [ ] Entitlements reflect plan changes within 2 minutes
- [ ] Webhook replay test passes

#### A4) Entitlements + Account Portal

**Endpoint**

- `GET /v1/entitlements`

**Web**

- Account page shows: plan, limits, usage counters, “Manage billing”

**Done means**

- [ ] Web account displays plan + usage
- [ ] “Manage Billing” opens Stripe customer portal

#### A5) Extension Plan Status

- Status bar shows plan
- Upgrade action opens pricing page
- Extension handles 401/402/429 gracefully

**Done means**

- [ ] Status bar updates on login/refresh
- [ ] Plan gates show actionable messages

---

## Milestone B — People feel value

### Goal

Core AI workflows feel good, safe, and worth paying for:

- streaming chat
- inline edits with review
- consistent limits + cancellation

### Definition of Done (B DoD)

**20/20 failure-free runs** for chat + edits with limits + cancellation behavior (no hung streams, no silent overwrite).

### Deliverables

#### B1) AIProvider + ModelRouter (introduced early)

**Interfaces**

- `AIProvider.streamChat(...)` → async stream
- `AIProvider.complete(...)` → non-stream
- `ModelRouter` selects provider/model based on plan + feature

**Done means**

- [ ] OpenAI provider works end-to-end
- [ ] Router enforces plan-based model availability
- [ ] All calls run through metering middleware

#### B2) Streaming Chat (SSE) + Abort Propagation

**Endpoint**

- `GET/POST /v1/ai/chat:stream` (SSE)

**Contract**

- Client can cancel → abort reaches API → abort reaches provider
- Stream ends cleanly with final event (`[DONE]` or `event: done`)
- Provider timeouts defined + handled

**Done means**

- [ ] Cancel works from extension UI
- [ ] No hanging streams on cancel/timeout
- [ ] Provider timeout policy documented + implemented

#### B3) Inline Edits returning Structured Patches (Unified Diff)

**Endpoint**

- `POST /v1/ai/edits`

**Patch safety rules**

- Default: edits are limited to the active file
- If selection exists: patch must apply within selection context unless user explicitly opts into broader change
- Never auto-apply: always preview first

**Done means**

- [ ] Patch output is consistent unified diff
- [ ] Conflicts detected and shown to user

#### B4) Diff Review UI (VS Code)

- Preview changes
- Accept/Reject hunks (or accept whole patch at minimum)
- Apply via `WorkspaceEdit`

**Done means**

- [ ] Review UI prevents accidental overwrite
- [ ] Apply/reject is deterministic and reversible (undo works)

#### B5) Usage Metering + Limits (DB-backed)

**Middleware**

- increments counters (requests + tokens)
- blocks when limit exceeded

**Semantics**

- `402` for plan-gated features (upgrade)
- `429` for rate limit/usage exceeded
- define whether aborted requests count (recommended: do not count as “request”, but record minimal telemetry)

**Done means**

- [ ] Limits enforce reliably (Free < Pro < Team)
- [ ] Usage shows in web dashboard

#### B6) Symbol Indexer (Lite) — Extension Host + Local DB (capped)

**Location (now)**

- VS Code extension host (Node)

**Caps**

- max disk usage (e.g. 200MB)
- max files indexed (e.g. 20k)
- ignore patterns (node_modules, dist, build, .git)
- clear index command

**Done means**

- [ ] Index respects caps
- [ ] Clear/rebuild works
- [ ] No runaway disk growth

---

## Milestone C — Desktop Distribution (Code-OSS fork)

### Goal

ATiQ Editor is installable and updatable as a standalone desktop app.

### Definition of Done (C DoD)

Signed installers ship for **macOS + Windows**, downloads page points to real artifacts, and **auto-updates validated** on both platforms.

### Deliverables

#### C1) Code-OSS Fork + Branding

- Replace product strings, name, icons, app identifiers
- Ensure no Microsoft/VS Code trademarks remain
- Bundle ATiQ extension as built-in

**Done means**

- [ ] App runs as ATiQ Editor
- [ ] Extension ships preinstalled and works out-of-box

#### C2) Extension Registry Strategy

- Configure Open VSX or custom registry for extension installation/updates
- Document decision + config

**Done means**

- [ ] Registry configured and tested
- [ ] Bundled extension update path defined

#### C3) Packaging + Signing + Notarization

- macOS signing + notarization
- Windows signing (EV preferred)
- Linux packaging (AppImage minimum)

**Done means**

- [ ] Users can install without security-block friction loops

#### C4) Release Pipeline + Update Channel

- GitHub Actions: build on tags
- Upload artifacts + checksums
- Update feeds configured and validated on macOS + Windows

**Done means**

- [ ] Tag release produces signed artifacts
- [ ] Auto-update works on macOS + Windows (validated)

---

# ✅ Final Success Criteria

1. Revenue ready: user pays → Pro unlocks in editor fast and reliably
2. Product feel: chat streaming + edits are safe, cancellable, and consistent
3. Standalone: ATiQ Editor installs as a desktop product (not “just an extension”)
