# Milestone A Implementation — Paid Login Works

This plan detail the implementation of Milestone A for ATiQ Editor, moving from a scaffold with stubs to a functional auth and billing system.

**Project Type:** WEB (Monorepo with Fastify + Next.js + Extension)

## Success Criteria

- [ ] Users can receive a Magic Link and login.
- [ ] JWT tokens include encrypted plan information or reference DB state.
- [ ] Stripe Checkout creates subscriptions and updates the DB via local webhooks.
- [ ] `packages/sdk` provides a unified way to fetch entitlements.
- [ ] VS Code extension status bar reflects the current plan (Free/Pro).

## Status Overview

- Monorepo scaffold: ✅ Complete
- Stubs for Auth/Billing/Entitlements: ✅ Exist in `apps/api`
- Shared types: ✅ Exist in `packages/shared`
- SDK: ✅ Exists in `packages/sdk`

---

## 🏗️ Workstreams

### 1) Backend Specialist — "Source of Truth"

**Goal:** DB + Auth + Billing + Entitlements are real and deterministic.

| Task ID | Component          | Description                                                                                      | File Paths                                                       |
| ------- | ------------------ | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| BE-1    | Prisma Schema      | Define `User`, `RefreshToken`, `StripeCustomer`, `Subscription`, `UsageCounter`, `WebhookEvent`. | `apps/api/prisma/schema.prisma`                                  |
| BE-2    | Auth Logic         | `POST /auth/magiclink`, `POST /auth/verify`, `POST /auth/refresh`.                               | `apps/api/src/routes/auth.ts`, `apps/api/src/middleware/auth.ts` |
| BE-3    | Stripe Integration | `POST /billing/checkout`, `POST /billing/portal`, `POST /webhooks/stripe`.                       | `apps/api/src/routes/billing.ts`                                 |
| BE-4    | Entitlements       | `GET /v1/entitlements` reads from DB.                                                            | `apps/api/src/routes/entitlements.ts`                            |

**Backend Acceptance:**

- [ ] Webhook replay (`event.id` twice) is a no-op the second time.
- [ ] Refresh token rotation: old refresh token fails after use.
- [ ] `/v1/entitlements` flips plan within ~2 minutes after webhook.

### 2) Frontend Specialist — "Paid Loop UX"

**Goal:** User can pay + see plan/usage + manage billing.

| Task ID | Page/Component | Description                               | File Paths                      |
| ------- | -------------- | ----------------------------------------- | ------------------------------- |
| FE-1    | Pricing Page   | Connect to `POST /billing/checkout`.      | `apps/web/app/pricing/page.tsx` |
| FE-2    | Login Page     | Triggers magic link flow + dev shortcuts. | `apps/web/app/login/page.tsx`   |
| FE-3    | Account Page   | Shows plan + usage + "Manage Billing".    | `apps/web/app/account/page.tsx` |

**Frontend Acceptance:**

- [ ] Paid user lands on `/account` and sees correct plan/limits.
- [ ] "Manage Billing" opens Stripe portal.

### 3) Extension Specialist — "Plan Visible in Editor"

**Goal:** Status bar plan reflects entitlements reliably.

| Task ID | Component    | Description                                                                  | File Paths                        |
| ------- | ------------ | ---------------------------------------------------------------------------- | --------------------------------- |
| EX-1    | Auth Manager | Uses `SecretStorage` for tokens. 401 triggers refresh with concurrency lock. | `apps/extension/src/auth.ts`      |
| EX-2    | Status Bar   | Reads `/v1/entitlements` and displays Free/Pro/Team.                         | `apps/extension/src/statusbar.ts` |
| EX-3    | UI Commands  | "Upgrade" opens `/pricing`.                                                  | `apps/extension/src/extension.ts` |

**Extension Acceptance:**

- [ ] Plan changes show without restarting.
- [ ] No "random logout" from concurrent refresh calls.

### 4) Test Engineer — "Unbreakable"

**Goal:** Lock down auth and billing reliability.

| Task ID | Test Suite          | Description                                                | File Paths                                |
| ------- | ------------------- | ---------------------------------------------------------- | ----------------------------------------- |
| TE-1    | Webhook Idempotency | Same event twice → processed once.                         | `apps/api/src/__tests__/webhooks.test.ts` |
| TE-2    | Auth Security       | Bad signature rejection + Refresh rotation logic.          | `apps/api/src/__tests__/auth.test.ts`     |
| TE-3    | Plan Mapping        | Verify mapping of Stripe Price IDs to internal plan types. | `apps/api/src/__tests__/plans.test.ts`    |

---

## 📦 Delivery Schedule (Small PRs)

1. **PR 1**: Prisma + DB utilities + migrations.
2. **PR 2**: Auth endpoints + SDK + minimal web login.
3. **PR 3**: Stripe checkout + webhook + idempotency tests.
4. **PR 4**: Entitlements everywhere + extension status bar + web account polish.

---

## 🏁 Phase X: Verification

- [ ] `pnpm build` passes at root.
- [ ] `apps/api` unit tests for auth flow pass.
- [ ] Manual check: Free user cannot access Pro features.
- [ ] Manual check: Stripe webhook correctly upgrades user in DB.
- [ ] `security_scan.py` run on `apps/api`.

**Milestone A "Done means":** A new paying user sees **Pro** in Web `/account` and Extension status bar within **< 2 minutes**, consistently.
