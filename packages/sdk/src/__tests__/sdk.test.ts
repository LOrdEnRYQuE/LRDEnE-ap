import { describe, it, expect, vi, beforeEach } from "vitest";
import { createClient } from "../index";

describe("ATiQ SDK", () => {
  const mockFetch = vi.fn();
  global.fetch = mockFetch;

  beforeEach(() => {
    mockFetch.mockReset();
  });

  it("should include auth headers in requests", async () => {
    const client = createClient({ apiUrl: "http://api.test", token: "test-token" });
    
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ plan: "pro" }),
    });

    await client.user.entitlements();

    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("/v1/me/entitlements"),
      expect.objectContaining({
        headers: expect.objectContaining({
          "Authorization": "Bearer test-token",
        }),
      })
    );
  });

  it("should handle error responses", async () => {
    const client = createClient({ apiUrl: "http://api.test", token: "test-token" });

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 403,
      json: async () => ({ error: "Plan limit reached", code: "PLAN_LIMIT" }),
    });

    try {
      await client.edits.apply({ code: "const x = 1", instruction: "fix" });
      fail("Should have thrown");
    } catch (err: any) {
      expect(err.message).toContain("Plan limit reached");
    }
  });
});
