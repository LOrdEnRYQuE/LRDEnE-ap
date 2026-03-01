"use client";

import React, { useState } from "react";
import { createClient } from "@atiq/sdk";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787";

export default function Login() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const client = createClient({ apiUrl: API_URL });
      await client.auth.sendMagicLink({ email });
      setSent(true);
    } catch (err) {
      alert("Error sending magic link. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="section" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "20px" }}>
      {/* Aurora Background */}
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 480, padding: 0 }}>
        <div className="glass animate-fade-up" style={{ borderRadius: "var(--radius-lg)", padding: "clamp(32px, 8vw, 56px) clamp(24px, 6vw, 48px)", textAlign: "center" }}>
          
          <div style={{ display: "inline-flex", marginBottom: 32 }}>
            <div className="badge" style={{ padding: "6px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}>
              <span className="gradient-text" style={{ fontWeight: 700, letterSpacing: "0.05em" }}>ATiQ EDITOR v1.0</span>
            </div>
          </div>

          <h1 className="heading-lg" style={{ marginBottom: 12 }}>
            {sent ? "Check your inbox" : mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          
          <p className="subtext" style={{ margin: "0 auto 40px", fontSize: "0.95rem" }}>
            {sent 
              ? `We sent a magic link to ${email}. Click it to securely sign in.`
              : mode === "login" 
                ? "Enter your email for a secure, passwordless login." 
                : "Join the future of programming. Start for free today."}
          </p>

          {!sent ? (
            <>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ textAlign: "left" }}>
                  <label htmlFor="email" style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input-field"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    autoFocus
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary animate-glow"
                  disabled={loading}
                  style={{ width: "100%", justifyContent: "center", height: 52, fontSize: "1rem" }}
                >
                  {loading ? "Discovering..." : mode === "login" ? "Send Magic Link" : "Join the Waitlist"}
                </button>
              </form>

              <div style={{ marginTop: 32, paddingTop: 32, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "center", gap: 8, fontSize: "0.9rem" }}>
                <span style={{ color: "var(--text-muted)" }}>
                  {mode === "login" ? "Don't have an account?" : "Already have an account?"}
                </span>
                <button 
                  onClick={() => setMode(mode === "login" ? "signup" : "login")}
                  style={{ background: "none", border: "none", color: "var(--accent)", fontWeight: 600, cursor: "pointer", padding: 0 }}
                >
                  {mode === "login" ? "Sign up" : "Log in"}
                </button>
              </div>
            </>
          ) : (
            <div className="animate-fade-up">
              <div style={{ fontSize: "4rem", marginBottom: 24 }}>✨</div>
              <button 
                onClick={() => setSent(false)} 
                className="btn btn-outline" 
                style={{ width: "100%", justifyContent: "center", height: 52 }}
              >
                Try a different email
              </button>
            </div>
          )}

          <div style={{ marginTop: 40, fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
            By continuing, you agree to our{" "}
            <a href="/legal/terms" style={{ color: "var(--text-secondary)", textDecoration: "underline" }}>Terms</a>
            {" "}and{" "}
            <a href="/legal/privacy" style={{ color: "var(--text-secondary)", textDecoration: "underline" }}>Privacy Policy</a>.
          </div>
        </div>
      </div>
    </main>
  );
}
