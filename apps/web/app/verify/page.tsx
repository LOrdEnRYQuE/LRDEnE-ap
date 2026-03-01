"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const verifyStarted = useRef(false);

  useEffect(() => {
    if (verifyStarted.current) return;
    
    const token = searchParams.get("token");
    if (!token) {
      setError("No verification token found.");
      return;
    }

    verifyStarted.current = true;
    
    (async () => {
      try {
        await login(token);
        // On success, go to account dashboard
        router.push("/account");
      } catch (err) {
        console.error("Verification failed", err);
        setError("Invalid or expired login link.");
      }
    })();
  }, [searchParams, login, router]);

  return (
    <main className="section" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <div className="card" style={{ maxWidth: 440, width: "100%", textAlign: "center", padding: "48px 40px" }}>
        {error ? (
          <>
            <div style={{ color: "var(--accent-red)", fontSize: "3rem", marginBottom: 16 }}>⚠️</div>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8 }}>Authentication Failed</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: 32 }}>
              {error}
            </p>
            <a href="/login" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Back to login
            </a>
          </>
        ) : (
          <>
            <div className="animate-glow" style={{ width: 48, height: 48, borderRadius: "50%", border: "3px solid var(--accent)", borderTopColor: "transparent", margin: "0 auto 24px" }} />
            <h1 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8 }}>Verifying...</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Please wait while we sign you in.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
