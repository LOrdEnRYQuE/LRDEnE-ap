"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { createClient } from "@atiq/sdk";

const PLAN_LABELS: Record<string, { label: string; color: string }> = {
  free: { label: "Free", color: "var(--text-muted)" },
  pro: { label: "Pro", color: "var(--accent)" },
  team: { label: "Team", color: "var(--accent-neon)" },
  enterprise: { label: "Enterprise", color: "var(--accent-amber)" },
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787";

export default function Account() {
  const { user, entitlements, isLoading, isAuthenticated, logout } = useAuth();
  const [portalLoading, setPortalLoading] = useState(false);
  const [usage, setUsage] = useState<any>(null);

  useEffect(() => {
    if (isAuthenticated) {
      const jwt = localStorage.getItem("atiq_jwt");
      if (jwt) {
        const client = createClient({ apiUrl: API_URL, token: jwt });
        client.internal.usage()
          .then(setUsage)
          .catch(console.error);
      }
    }
  }, [isAuthenticated]);

  const handlePortal = async () => {
    setPortalLoading(true);
    const jwt = localStorage.getItem("atiq_jwt");
    if (!jwt) return;
    
    try {
      const client = createClient({ apiUrl: API_URL, token: jwt });
      const { portalUrl } = await client.billing.portal();
      window.location.href = portalUrl;
    } catch (err) {
      alert("Error reaching billing portal. Please try again.");
    } finally {
      setPortalLoading(false);
    }
  };

  if (isLoading) {
    return <main className="section"><div className="container" style={{ textAlign: "center", padding: "100px 0" }}>Loading...</div></main>;
  }

  if (!isAuthenticated) {
    return (
      <main className="section">
        <div className="container" style={{ maxWidth: 760, textAlign: "center", padding: "100px 0" }}>
          <h1 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 16 }}>Sign in to view your account</h1>
          <a href="/login" className="btn btn-primary">Sign in</a>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <h1 style={{ fontFamily: "var(--font-mono)", fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>
          Account
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: 40 }}>
          Manage your plan, view usage, and update billing.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Current Plan */}
          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 600 }}>
                Current Plan
              </h2>
              <span
                className="badge"
                style={{
                  color: PLAN_LABELS[user?.plan || "free"]?.color ?? "var(--accent)",
                  borderColor: PLAN_LABELS[user?.plan || "free"]?.color ?? "var(--accent)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                {PLAN_LABELS[user?.plan || "free"]?.label ?? user?.plan}
              </span>
            </div>
            
            {/* Daily Usage Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              <UsageStat 
                label="Chat Requests (Today)" 
                current={usage?.usage?.chat || 0} 
                limit={entitlements?.limits.requestsPerDay || 0} 
              />
              <UsageStat 
                label="Inline Edits (Today)" 
                current={usage?.usage?.edit || 0} 
                limit={entitlements?.features.inlineEdits ? 100 : 0} 
              />
            </div>
          </div>

          {/* Technical Limits */}
          <div className="card">
            <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 600, marginBottom: 16 }}>
              Plan Limits
            </h2>
            {entitlements && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: 16,
                }}
              >
                <Stat label="Context chars" value={(entitlements.limits.maxContextChars / 1000).toFixed(0) + "K"} />
                <Stat label="Max tokens" value={(entitlements.limits.maxTokensPerRequest / 1000).toFixed(0) + "K"} />
              </div>
            )}
          </div>

          {/* Features */}
          <div className="card">
            <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 600, marginBottom: 16 }}>
              Features
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {entitlements && Object.entries(entitlements.features).map(([key, enabled]) => (
                <div key={key} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem", textTransform: "capitalize" }}>
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  <span style={{ color: enabled ? "var(--accent-green)" : "var(--text-muted)", fontSize: "0.85rem", fontWeight: 600 }}>
                    {enabled ? "✓ Enabled" : "✕ Upgrade"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Billing */}
          <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 600, marginBottom: 4 }}>
                Billing
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                Manage payment methods and invoices.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="/pricing" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.88rem" }}>
                Change Plan
              </a>
              <button 
                onClick={handlePortal} 
                disabled={portalLoading} 
                className="btn btn-primary" 
                style={{ padding: "8px 16px", fontSize: "0.88rem" }}
              >
                {portalLoading ? "Loading..." : "Billing Portal"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function UsageStat({ label, current, limit }: { label: string; current: number; limit: number }) {
  const percent = limit > 0 ? Math.min(100, (current / limit) * 100) : 0;
  const isClose = percent > 80;
  
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-sm)",
        padding: "16px",
      }}
    >
      <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.4rem", fontWeight: 700, color: isClose ? "var(--accent-amber)" : "var(--accent)" }}>
          {current}
        </div>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          / {limit}
        </div>
      </div>
      <div style={{ width: "100%", height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2, overflow: "hidden" }}>
        <div 
          style={{ 
            width: `${percent}%`, 
            height: "100%", 
            background: isClose ? "var(--accent-amber)" : "var(--accent)",
            transition: "width 0.3s ease" 
          }} 
        />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-sm)",
        padding: "16px",
      }}
    >
      <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.4rem", fontWeight: 700, color: "var(--accent)" }}>
        {value}
      </div>
    </div>
  );
}
