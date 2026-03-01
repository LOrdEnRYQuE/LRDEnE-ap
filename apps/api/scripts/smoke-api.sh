#!/usr/bin/env bash
# apps/api/scripts/smoke-api.sh
set -euo pipefail

API="${API_URL:-http://localhost:8788}"
AUTH="Bearer dev-pro"

echo "--- 1. Health Check ---"
curl -fsS "$API/health" || echo "Health check failed (ensure API is running)"

echo -e "\n--- 2. Entitlements Check (dev-pro) ---"
curl -fsS -H "Authorization: $AUTH" "$API/v1/entitlements"

echo -e "\n--- 3. 404 Canonical Error Check ---"
# Expecting a JSON error body even for 404
curl -sS "$API/this-does-not-exist" | grep -q "error" && echo "PASS: Correct error shape for 404" || echo "FAIL: No error object in 404 response"

echo -e "\n--- 4. Rate Limit / Usage Initial Check ---"
# Just verifying we can hit it
curl -fsS -H "Authorization: $AUTH" "$API/v1/user/usage" 2>/dev/null || echo "Info: No usage route yet or needs implementation"

echo -e "\n--- Smoke Test Complete ---"
