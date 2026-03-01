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
    <main className="section" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Aurora Background */}
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }} className="animate-fade-up">
          <span className="badge" style={{ marginBottom: 20 }}>PRICING PLANS</span>
          <h1 className="heading-xl" style={{ marginBottom: 20 }}>
            Choose Your <span className="gradient-text">Coding Superpower</span>
          </h1>
          <p className="subtext" style={{ margin: "0 auto" }}>
            From individual creators to world-class engineering teams. 
            Scale your productivity with deep AI context.
          </p>
        </div>

        {/* Plan cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
          className="animate-fade-up"
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`glass ${plan.featured ? "featured" : ""}`}
              style={{ 
                position: "relative", 
                padding: "40px 32px", 
                borderRadius: "var(--radius-lg)",
                transition: "transform 0.3s ease, border-color 0.3s ease",
                ...(plan.featured ? { borderColor: "var(--accent)", boxShadow: "var(--shadow-glow)" } : {})
              }}
            >
              {plan.featured && (
                <div style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--accent)",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  padding: "4px 16px",
                  borderRadius: 100,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase"
                }}>
                  Recommended
                </div>
              )}

              <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", fontWeight: 700, marginBottom: 16 }}>
                {plan.name}
              </h2>

              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "2.8rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  {plan.price}
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                  {plan.period}
                </span>
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 32, minHeight: "3.2em" }}>
                {plan.desc}
              </p>

              <a
                href={plan.href}
                className={`btn ${plan.featured ? "btn-primary animate-glow" : "btn-outline"}`}
                style={{ width: "100%", justifyContent: "center", padding: "14px 20px", marginBottom: 40, fontSize: "1rem" }}
              >
                {plan.cta}
              </a>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: "0.9rem" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "var(--accent-green)", fontSize: "0.7rem" }}>✓</span>
                    </div>
                    <span style={{ color: "var(--text-secondary)" }}>{f}</span>
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: "0.9rem", opacity: 0.5 }}>
                    <span style={{ color: "var(--text-muted)", flexShrink: 0, marginLeft: 2 }}>✕</span>
                    <span style={{ color: "var(--text-muted)" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <div style={{ textAlign: "center", marginTop: 80, color: "var(--text-muted)", fontSize: "0.9rem" }}>
          <p>All plans include a 14-day money-back guarantee.</p>
          <div style={{ marginTop: 12 }}>
            Need something else? <a href="mailto:hello@atiq.dev" style={{ color: "var(--text-secondary)", textDecoration: "underline" }}>Contact our sales team</a>
          </div>
        </div>

        {/* Comparison Table */}
        <div style={{ marginTop: 120, paddingBottom: 80 }}>
          <h2 className="heading-lg" style={{ textAlign: "center", marginBottom: 48 }}>Feature Breakdown</h2>
          <div className="glass" style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.02)" }}>
                    <th style={{ padding: "20px 24px", textAlign: "left", color: "var(--text-primary)", fontWeight: 700 }}>Capabilities</th>
                    {PLANS.map(p => <th key={p.name} style={{ padding: "20px 24px", textAlign: "center", color: "var(--text-primary)", fontWeight: 700 }}>{p.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr key={row.feature} style={{ borderTop: "1px solid var(--border)", background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                      <td style={{ padding: "18px 24px", color: "var(--text-primary)", fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: "18px 24px", textAlign: "center", color: "var(--text-secondary)" }}>{row.free}</td>
                      <td style={{ padding: "18px 24px", textAlign: "center", color: "var(--text-secondary)" }}>{row.pro}</td>
                      <td style={{ padding: "18px 24px", textAlign: "center", color: "var(--text-secondary)" }}>{row.team}</td>
                      <td style={{ padding: "18px 24px", textAlign: "center", color: "var(--text-secondary)" }}>{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
