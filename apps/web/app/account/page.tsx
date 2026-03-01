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
    return (
      <main className="section" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
        <div className="animate-glow" style={{ width: 40, height: 40, borderRadius: "50%", border: "3px solid var(--accent)", borderTopColor: "transparent" }} />
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="section" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div className="aurora-bg">
          <div className="aurora-blob blob-1"></div>
          <div className="aurora-blob blob-2"></div>
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 600, textAlign: "center" }}>
          <div className="glass animate-fade-up" style={{ padding: "64px 48px", borderRadius: "var(--radius-lg)" }}>
            <h1 className="heading-lg" style={{ marginBottom: 16 }}>Secure Access Required</h1>
            <p className="subtext" style={{ marginBottom: 32, marginInline: "auto" }}>Please sign in to your ATiQ account to manage your subscription and view usage metrics.</p>
            <a href="/login" className="btn btn-primary animate-glow" style={{ padding: "14px 32px" }}>Sign in to Dashboard</a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Aurora Background */}
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-3"></div>
      </div>

      <div className="container animate-fade-up" style={{ position: "relative", zIndex: 1, maxWidth: 840 }}>
        <header style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <div>
              <span className="badge" style={{ marginBottom: 16 }}>DASHBOARD</span>
              <h1 className="heading-lg" style={{ marginBottom: 8 }}>Account Overview</h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                Logged in as <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{user?.email}</span>
              </p>
            </div>
            <button onClick={logout} className="btn btn-outline" style={{ padding: "10px 20px" }}>
              Sign out session
            </button>
          </div>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
          
          {/* Main Status Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 32 }}>
            {/* Current Plan Card */}
            <div className="glass" style={{ padding: "40px", borderRadius: "var(--radius-lg)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
                <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em", color: "var(--text-muted)" }}>
                  SUBSCRIPTION
                </h2>
                <div 
                  className="badge" 
                  style={{ 
                    padding: "6px 14px",
                    background: "rgba(255,255,255,0.03)", 
                    borderColor: PLAN_LABELS[user?.plan || "free"]?.color,
                    color: PLAN_LABELS[user?.plan || "free"]?.color 
                  }}
                >
                  {PLAN_LABELS[user?.plan || "free"]?.label}
                </div>
              </div>
              
              <div style={{ marginBottom: 40 }}>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: 4 }}>Active Tier</div>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  {PLAN_LABELS[user?.plan || "free"]?.label} Edition
                </div>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={handlePortal} disabled={portalLoading} className="btn btn-primary" style={{ flex: 1, justifyContent: "center" }}>
                  {portalLoading ? "Connecting..." : "Manage Billing"}
                </button>
                <a href="/pricing" className="btn btn-outline" style={{ flex: 1, justifyContent: "center" }}>
                  Upgrade
                </a>
              </div>
            </div>

            {/* Daily Usage Metrics */}
            <div className="glass" style={{ padding: "40px", borderRadius: "var(--radius-lg)" }}>
              <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: 32 }}>
                QUOTA UTILIZATION
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <UsageStat 
                  label="AI Chat Requests" 
                  current={usage?.usage?.chat || 0} 
                  limit={entitlements?.limits.requestsPerDay || 0} 
                />
                <UsageStat 
                  label="Code Edits" 
                  current={usage?.usage?.edit || 0} 
                  limit={entitlements?.features.inlineEdits ? 100 : 0} 
                />
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="glass" style={{ padding: "40px", borderRadius: "var(--radius-lg)" }}>
            <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: 24 }}>
              TECHNICAL CAPABILITIES
            </h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginBottom: 40 }}>
              <Stat label="Context Window" value={(entitlements?.limits.maxContextChars ? entitlements.limits.maxContextChars / 1000 : 0).toFixed(0) + "K chars"} />
              <Stat label="Max Tokens" value={(entitlements?.limits.maxTokensPerRequest ? entitlements.limits.maxTokensPerRequest / 1000 : 0).toFixed(0) + "K tokens"} />
            </div>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32 }}>
              <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: 20, textTransform: "uppercase" }}>Feature Availability</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {entitlements && Object.entries(entitlements.features).map(([key, enabled]) => (
                  <div key={key} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: enabled ? "rgba(16, 185, 129, 0.1)" : "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: enabled ? "var(--accent-green)" : "var(--text-muted)", fontSize: "0.75rem", fontWeight: 900 }}>
                        {enabled ? "✓" : "✕"}
                      </span>
                    </div>
                    <span style={{ color: enabled ? "var(--text-primary)" : "var(--text-muted)", fontSize: "0.9rem", fontWeight: 500 }}>
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                  </div>
                ))}
              </div>
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
