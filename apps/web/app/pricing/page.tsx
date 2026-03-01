import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple pricing for every team. Start free, upgrade when you need more.",
};

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    desc: "Get started with AI-assisted coding. No credit card.",
    token: "dev-free",
    featured: false,
    features: [
      "30 AI requests / day",
      "20K character context",
      "Chat on open file",
      "VS Code extension",
      "Community support",
    ],
    missing: ["Inline edits", "Repo indexing", "Shared presets"],
    cta: "Download Free",
    href: "/download",
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    desc: "For individual developers who want full AI power.",
    token: "dev-pro",
    featured: true,
    features: [
      "400 AI requests / day",
      "80K character context",
      "Chat + inline edits",
      "Accept/reject diffs",
      "Priority support",
    ],
    missing: ["Repo-wide indexing", "Shared presets"],
    cta: "Start Pro",
    href: "/login?plan=pro",
  },
  {
    name: "Team",
    price: "$40",
    period: "/seat/month",
    desc: "For teams that need more power and org controls.",
    token: "dev-team",
    featured: false,
    features: [
      "2,000 AI requests / day",
      "200K character context",
      "Everything in Pro",
      "Repo-wide indexing",
      "Shared prompt presets",
      "Audit logs",
      "Seat management",
    ],
    missing: [],
    cta: "Start Team Trial",
    href: "/login?plan=team",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "On-prem VPC, SSO/SAML, and dedicated support.",
    token: null,
    featured: false,
    features: [
      "Unlimited requests",
      "500K+ character context",
      "Everything in Team",
      "SSO / SAML",
      "On-prem VPC proxy",
      "Data retention controls",
      "SLA + dedicated support",
    ],
    missing: [],
    cta: "Contact Sales",
    href: "mailto:sales@atiq.dev",
  },
];

export default function Pricing() {
  return (
    <main className="section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="label">Pricing</span>
          <h1 className="heading-xl" style={{ marginBottom: 16 }}>
            Simple, honest pricing
          </h1>
          <p className="subtext" style={{ margin: "0 auto" }}>
            Start free. Upgrade when you need more power. Cancel any time.
          </p>
        </div>

        {/* Plan cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            alignItems: "start",
          }}
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`card ${plan.featured ? "featured" : ""}`}
              style={{ position: "relative" }}
            >
              {plan.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--accent)",
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 16px",
                    borderRadius: 100,
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              <h2
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.1rem",
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}
              >
                {plan.name}
              </h2>

              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "2.4rem",
                    fontWeight: 700,
                    color: plan.featured ? "var(--accent)" : "var(--text-primary)",
                  }}
                >
                  {plan.price}
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  {plan.period}
                </span>
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: 20 }}>
                {plan.desc}
              </p>

              {plan.token && (
                <div style={{ marginBottom: 20 }}>
                  <code style={{ fontSize: "0.78rem" }}>Dev token: {plan.token}</code>
                </div>
              )}

              <a
                href={plan.href}
                className={`btn ${plan.featured ? "btn-primary animate-glow" : "btn-outline"}`}
                style={{ width: "100%", justifyContent: "center", marginBottom: 24 }}
              >
                {plan.cta}
              </a>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.88rem" }}>
                    <span style={{ color: "var(--accent-green)", flexShrink: 0 }}>✓</span>
                    <span style={{ color: "var(--text-secondary)" }}>{f}</span>
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.88rem" }}>
                    <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>✕</span>
                    <span style={{ color: "var(--text-muted)" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <p
          style={{
            textAlign: "center",
            marginTop: 48,
            color: "var(--text-muted)",
            fontSize: "0.88rem",
            marginBottom: 64,
          }}
        >
          All prices in USD. Billed monthly or annually (20% off). Questions?{" "}
          <a href="mailto:hello@atiq.dev">hello@atiq.dev</a>
        </p>

        {/* Comparison Table */}
        <div style={{ marginTop: 80 }}>
          <h2 className="heading-lg" style={{ textAlign: "center", marginBottom: 40 }}>Compare Features</h2>
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ textAlign: "left", background: "rgba(255,255,255,0.02)" }}>
                  <th style={{ padding: "16px 24px", color: "var(--text-primary)" }}>Feature</th>
                  {PLANS.map(p => <th key={p.name} style={{ padding: "16px 24px", color: "var(--text-primary)" }}>{p.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={row.feature} style={{ borderTop: "1px solid var(--border)", background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                    <td style={{ padding: "16px 24px", color: "var(--text-primary)", fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ padding: "16px 24px" }}>{row.free}</td>
                    <td style={{ padding: "16px 24px" }}>{row.pro}</td>
                    <td style={{ padding: "16px 24px" }}>{row.team}</td>
                    <td style={{ padding: "16px 24px" }}>{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

const COMPARISON_ROWS = [
  { feature: "Daily AI Requests", free: "30", pro: "400", team: "2,000", enterprise: "Unlimited" },
  { feature: "Context Window", free: "20K chars", pro: "80K chars", team: "200K chars", enterprise: "500K+ chars" },
  { feature: "Inline Edits", free: "✕", pro: "✓", team: "✓", enterprise: "✓" },
  { feature: "Repo Indexing", free: "✕", pro: "✕", team: "✓", enterprise: "✓" },
  { feature: "SSO / SAML", free: "✕", pro: "✕", team: "✕", enterprise: "✓" },
  { feature: "Support", free: "Community", pro: "Priority", team: "24/7 Priority", enterprise: "Dedicated Manager" },
];
