import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download",
  description: "Download ATiQ Editor for macOS, Windows, and Linux.",
};

const PLATFORMS = [
  {
    os: "macOS",
    icon: "",
    arch: ["Apple Silicon (M1/M2/M3)", "Intel (x86_64)"],
    files: ["ATiQ-Editor-arm64.dmg", "ATiQ-Editor-x64.dmg"],
    hint: "macOS 12+ required",
  },
  {
    os: "Windows",
    icon: "🪟",
    arch: ["x64"],
    files: ["ATiQ-Editor-Setup-x64.exe"],
    hint: "Windows 10/11 required",
  },
  {
    os: "Linux",
    icon: "🐧",
    arch: ["AppImage (universal)", "deb (Ubuntu/Debian)"],
    files: ["ATiQ-Editor-x86_64.AppImage", "ATiQ-Editor-amd64.deb"],
    hint: "glibc 2.31+ required",
  },
];

export default function Download() {
  return (
    <main className="section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="label">Download</span>
          <h1 className="heading-xl" style={{ marginBottom: 16 }}>
            Get ATiQ Editor
          </h1>
          <p className="subtext" style={{ margin: "0 auto 32px" }}>
            Available for all major platforms. Or install the VS Code extension first
            and get the full experience today.
          </p>

          {/* VS Code extension CTA — recommended first */}
          <div
            className="card featured"
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              padding: "24px 40px",
              marginBottom: 48,
            }}
          >
            <span style={{ fontSize: "2rem" }}>🧩</span>
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              VS Code Extension
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: 360 }}>
              Install in seconds. Works with your existing VS Code setup.
              Recommended starting point.
            </p>
            <a
              href="vscode:extension/atiq.atiq-ai"
              className="btn btn-primary animate-glow"
            >
              Install Extension
            </a>
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              Also available on Open VSX Registry
            </span>
          </div>
        </div>

        {/* Desktop builds */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span className="label">Desktop App</span>
          <h2 className="heading-lg" style={{ marginBottom: 8 }}>
            Standalone Editor
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: 8 }}>
            Code-OSS based. ATiQ extension preinstalled.
          </p>
          <div
            className="badge"
            style={{
              background: "rgba(245,158,11,0.12)",
              borderColor: "rgba(245,158,11,0.3)",
              color: "var(--accent-amber)",
            }}
          >
            Coming Soon — Beta Q2 2025
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            opacity: 0.6,
            pointerEvents: "none",
          }}
        >
          {PLATFORMS.map((p) => (
            <div key={p.os} className="card">
              <div style={{ fontSize: "2rem", marginBottom: 12 }}>{p.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                {p.os}
              </h3>
              {p.arch.map((a, i) => (
                <div
                  key={a}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom:
                      i < p.arch.length - 1 ? "1px solid var(--border)" : "none",
                    gap: 12,
                  }}
                >
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>{a}</span>
                  <button
                    disabled
                    className="btn btn-outline"
                    style={{ padding: "6px 14px", fontSize: "0.8rem", opacity: 0.5 }}
                  >
                    Soon
                  </button>
                </div>
              ))}
              <p style={{ marginTop: 14, color: "var(--text-muted)", fontSize: "0.78rem" }}>
                {p.hint}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
