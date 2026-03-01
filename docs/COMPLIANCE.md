# docs/COMPLIANCE.md

# ATiQ Editor — Compliance Checklist

This document centralizes compliance and distribution hygiene for ATiQ Editor:

- trademark scrub
- third-party license attribution
- extension registry considerations
- privacy posture basics

## 1) Trademark & Branding Scrub

### Requirements

- ATiQ must not ship Microsoft / VS Code trademarks in:
  - product name
  - icons
  - UI strings
  - app identifiers / bundle IDs
  - marketing copy and screenshots

### Checklist

- [ ] Product name: “ATiQ Editor” everywhere (desktop + web + installer)
- [ ] Icons replaced (app icon + internal icons)
- [ ] `product.json` / branding configs updated
- [ ] Any “Visual Studio Code” wording removed from UI and marketing
- [ ] Screenshots/docs updated to ATiQ branding

## 2) Open Source Attribution & Notices

### Policy

Ship a `THIRD_PARTY_NOTICES` file with:

- key OSS dependencies
- license texts where required
- attribution statements where required

### Checklist

- [ ] Generate dependency license report (API/Web/Extension/Desktop)
- [ ] Include notices in desktop distribution package
- [ ] Include license links on website footer or legal page
- [ ] Keep notices updated via CI step

## 3) Extension Registry Strategy

### Decision Record

Choose one:

- [ ] Open VSX
- [ ] Custom extension registry
- [ ] Bundled-only for v1 (no external installs)

### Checklist

- [ ] Document decision and rationale
- [ ] Configure marketplace/gallery endpoints accordingly
- [ ] Validate extension update behavior in desktop builds

## 4) Security & Privacy Baseline

### Data handling principles

- Default: do not store raw code prompts unless user opts in
- Store minimal operational telemetry:
  - requestId
  - timing
  - token counts
  - plan + feature used

### Checklist

- [ ] No provider secrets in clients
- [ ] Tokens stored securely (SecretStorage in extension)
- [ ] Auth refresh tokens hashed + rotated
- [ ] Define retention policy (e.g., 7/30 days) for logs
- [ ] Provide “privacy mode” toggle (no prompt retention)

## 5) Stripe & Billing Hygiene

### Checklist

- [ ] Webhook signature verification enabled
- [ ] Webhook idempotency enforced (event.id stored)
- [ ] Replay test exists and passes
- [ ] Plan mapping tested for each Stripe price/product

## 6) Distribution Verification (Release Gate)

### Minimum release bar

- macOS: signed + notarized build installs cleanly
- Windows: signed installer runs without SmartScreen chaos (as much as possible)
- Auto-update validated on both

### Checklist

- [ ] macOS notarization verified on a clean machine/user account
- [ ] Windows installer tested on fresh VM
- [ ] Update channel validated end-to-end
- [ ] Checksums published with releases
