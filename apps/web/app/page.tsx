import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATiQ Editor — AI Code Editor for Developers",
  description:
    "The AI code editor that understands your entire codebase. Real-time chat, inline edits, and intelligent suggestions. Built for professional teams.",
};

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="section"
        style={{
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: 120,
          paddingBottom: 100,
        }}
      >
        {/* Background glow orbs */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 700,
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container animate-fade-up">
          <div className="badge" style={{ marginBottom: 24 }}>
            <span>●</span> Open Beta — Now Available
          </div>

          <h1 className="heading-xl" style={{ marginBottom: 24 }}>
            The AI Editor That
            <br />
            <span className="gradient-text">Understands Your Code</span>
          </h1>

          <p className="subtext" style={{ margin: "0 auto 40px" }}>
            ATiQ Editor combines the power of large language models with
            deep codebase context — real chat, inline edits, and intelligent
            suggestions that actually work.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/download" className="btn btn-primary animate-glow" style={{ fontSize: "1rem", padding: "14px 28px" }}>
              Download Free
            </a>
            <a href="/pricing" className="btn btn-outline" style={{ fontSize: "1rem", padding: "14px 28px" }}>
              View Pricing
            </a>
          </div>

          <p style={{ marginTop: 20, color: "var(--text-muted)", fontSize: "0.85rem" }}>
            Free plan included · No credit card required
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section" id="features" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="label">Why ATiQ</span>
            <h2 className="heading-lg">Built for serious developers</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {FEATURES.map((f) => (
              <div key={f.title} className="card">
                <div style={{ fontSize: "1.8rem", marginBottom: 16 }}>{f.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "var(--text-primary)",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="label">Workflow</span>
            <h2 className="heading-lg">From Idea to Code in Seconds</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
            {STEPS.map((s, i) => (
              <div key={s.title} style={{ position: "relative" }}>
                <div style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: "50%", 
                  background: "var(--accent)", 
                  color: "#fff", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontWeight: 700, 
                  fontFamily: "var(--font-mono)",
                  marginBottom: 20,
                  boxShadow: "0 0 15px var(--accent-glow)"
                }}>
                  {i + 1}
                </div>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="card featured"
            style={{ textAlign: "center", padding: "56px 40px" }}
          >
            <span className="label">Start Today</span>
            <h2 className="heading-lg" style={{ marginBottom: 16 }}>
              Ready to code smarter?
            </h2>
            <p className="subtext" style={{ margin: "0 auto 32px" }}>
              Download ATiQ Editor or install the VS Code extension.
              Free plan includes 30 AI requests per day.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/download" className="btn btn-primary animate-glow" style={{ fontSize: "1rem", padding: "14px 28px" }}>
                Download Now
              </a>
              <a href="/pricing" className="btn btn-outline" style={{ fontSize: "1rem", padding: "14px 28px" }}>
                Compare Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "32px 0",
          color: "var(--text-muted)",
          fontSize: "0.85rem",
        }}
      >
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700 }}>
            ATi<span style={{ color: "var(--accent)" }}>Q</span>
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="/pricing" style={{ color: "var(--text-muted)" }}>Pricing</a>
            <a href="/download" style={{ color: "var(--text-muted)" }}>Download</a>
            <a href="/docs" style={{ color: "var(--text-muted)" }}>Docs</a>
          </div>
          <span>© {new Date().getFullYear()} ATiQ Editor</span>
        </div>
      </footer>
    </main>
  );
}

const FEATURES = [
  {
    icon: "💬",
    title: "Context-Aware Chat",
    desc: "Ask anything about your code. ATiQ reads your open files, selection, and project structure to give precise answers.",
  },
  {
    icon: "✏️",
    title: "Inline Edits",
    desc: 'Select code → "Rewrite / Fix / Optimize". ATiQ returns a reviewable diff. Accept or reject each hunk independently.',
  },
  {
    icon: "⚡",
    title: "Instant Suggestions",
    desc: "Autocomplete that understands your codebase — not just token patterns. Powered by your full repository context.",
  },
  {
    icon: "🔒",
    title: "Privacy Mode",
    desc: "Enable zero-retention mode: no code is stored server-side. Minimal logs, maximum trust.",
  },
  {
    icon: "🏢",
    title: "Team Collaboration",
    desc: "Share prompt presets across your team, manage seats, and get audit logs for compliance.",
  },
  {
    icon: "🔌",
    title: "Works Everywhere",
    desc: "As a VS Code extension today, bundled into our own branded desktop editor tomorrow.",
  },
];

const STEPS = [
  {
    title: "Connect Your Workspace",
    desc: "Open any local folder or repository. ATiQ automatically indexes your imports, classes, and types.",
  },
  {
    title: "Chat & Direct",
    desc: "Type instructions in natural language. Use @file or @symbol to mention specific context from your project.",
  },
  {
    title: "Review & Apply",
    desc: "Watch as ATiQ generates high-quality code. Use the built-in diff viewer to review, accept, or reject every change.",
  },
];
