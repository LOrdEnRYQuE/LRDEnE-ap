"use client";

import React from "react";
import { useAuth } from "../../context/AuthContext";

export function Nav() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-logo">
          ATi<span>Q</span>
        </a>
        <ul className="nav-links">
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/download">Download</a></li>
          <li><a href="/docs">Docs</a></li>
        </ul>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {isAuthenticated ? (
            <>
              <a href="/account" style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginRight: 8 }}>
                {user?.email}
              </a>
              <button onClick={logout} className="btn btn-outline" style={{ padding: "8px 16px" }}>
                Sign out
              </button>
              <a href="/account" className="btn btn-primary animate-glow" style={{ padding: "8px 16px" }}>
                Dashboard
              </a>
            </>
          ) : (
            <>
              <a href="/login" className="btn btn-outline" style={{ padding: "8px 16px" }}>
                Sign in
              </a>
              <a href="/pricing" className="btn btn-primary animate-glow" style={{ padding: "8px 16px" }}>
                Get Pro
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
