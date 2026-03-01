# ATiQ Editor — AI-Powered Monorepo

Welcome to the **ATiQ Editor** workspace. This repository contains the full source code for the ATiQ coding assistant, including the VS Code extension, the web portal, and the high-performance backend.

## 🏗️ Project Structure

- **`apps/api`**: Fastify backend implementing real OpenAI streaming, Stripe billing, and usage gating.
- **`apps/web`**: Next.js 15 marketing site and user account portal.
- **`apps/extension`**: VS Code extension featuring real-time chat, inline diff reviews, and project context awareness.
- **`packages/sdk`**: Typed TypeScript client shared across the web and extension.
- **`packages/shared`**: Common types and constants used across the monorepo.

## 🚀 Quick Start

### 1. Prerequisite Cleansing

Due to file locks in some environments, we recommend a deep clean before the first build:

```bash
sudo rm -rf **/dist **/.turbo node_modules pnpm-lock.yaml
```

### 2. Install & Build

```bash
pnpm install
pnpm build
```

### 3. Configure Environment

Copy and populate `.env` files in `apps/api` and `apps/web`. At minimum, `apps/api/.env` needs:

```bash
OPENAI_API_KEY=sk-placeholder (triggers Mock Mode if placeholder)
STRIPE_SECRET_KEY=sk_test_placeholder
```

### 4. Development

```bash
pnpm dev
```

## 📜 Documentation

- [Project Walkthrough](./docs/walkthrough.md) — Detailed phase-by-phase implementation log.
- [Task Roadmap](./docs/task.md) — Current status and future plans.
- [Phase 4 Plan](./docs/PLAN-phase4.md) — Production hardening details.

## 🧪 Testing

Run Vitest suites across the monorepo:

```bash
pnpm test
```

---

**Built with ❤️ by ATiQ AI.**
