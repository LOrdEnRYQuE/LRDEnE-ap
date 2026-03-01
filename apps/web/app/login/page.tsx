"use client";

import React, { useState } from "react";
import { createClient } from "@atiq/sdk";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787";

export default function Login() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

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

  if (sent) {
    return (
      <main className="section" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
        <div className="card" style={{ maxWidth: 440, width: "100%", textAlign: "center", padding: "48px 40px" }}>
          <div style={{ color: "var(--accent)", fontSize: "3rem", marginBottom: 16 }}>✉️</div>
          <h1 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8 }}>Check your inbox</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: 32 }}>
            We sent a magic link to <strong>{email}</strong>.<br />
            Click the link in the email to sign in.
          </p>
          <button onClick={() => setSent(false)} className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
            Back to login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      className="section"
      style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}
    >
      <div
        className="card"
        style={{ maxWidth: 440, width: "100%", textAlign: "center", padding: "48px 40px" }}
      >
        <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "1.4rem", marginBottom: 8 }}>
          ATi<span style={{ color: "var(--accent)" }}>Q</span>
        </div>
        <h1
          style={{
            fontSize: "1.4rem",
            fontWeight: 700,
            marginBottom: 8,
            color: "var(--text-primary)",
          }}
        >
          Welcome back
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: 32 }}>
          Enter your email and we&apos;ll send you a magic link to sign in.
        </p>

        {/* Magic link form */}
        <form
          style={{ display: "flex", flexDirection: "column", gap: 12 }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" style={{ display: "none" }}>
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              padding: "12px 16px",
              color: "var(--text-primary)",
              fontSize: "0.95rem",
              width: "100%",
              outline: "none",
              fontFamily: "var(--font-sans)",
              transition: "border-color 0.2s",
            }}
          />
          <button
            type="submit"
            className="btn btn-primary animate-glow"
            disabled={loading}
            style={{ justifyContent: "center", padding: "13px 20px", fontSize: "0.95rem" }}
          >
            {loading ? "Sending..." : "Send Magic Link"}
          </button>
        </form>

        <p style={{ marginTop: 24, color: "var(--text-muted)", fontSize: "0.82rem" }}>
          No password needed. We&apos;ll email you a secure link.
          <br />
          By signing in you agree to our{" "}
          <a href="/legal/terms" style={{ color: "var(--text-secondary)" }}>
            Terms
          </a>{" "}
          and{" "}
          <a href="/legal/privacy" style={{ color: "var(--text-secondary)" }}>
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </main>
  );
}
