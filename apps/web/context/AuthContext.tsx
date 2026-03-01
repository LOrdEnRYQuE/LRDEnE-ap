"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import { createClient } from "@atiq/sdk";
import type { User, Entitlements } from "@atiq/shared";

interface AuthState {
  user: User | null;
  entitlements: Entitlements | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  login: (token: string) => Promise<void>;
  logout: () => void;
  refreshState: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8787";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    entitlements: null,
    isLoading: true,
    isAuthenticated: false,
  });

  const getTokens = useCallback(() => {
    if (typeof window === "undefined") return { jwt: null, refresh: null };
    return {
      jwt: localStorage.getItem("atiq_jwt"),
      refresh: localStorage.getItem("atiq_refresh"),
    };
  }, []);

  const setTokens = useCallback((jwt: string, refresh: string) => {
    localStorage.setItem("atiq_jwt", jwt);
    localStorage.setItem("atiq_refresh", refresh);
  }, []);

  const clearTokens = useCallback(() => {
    localStorage.removeItem("atiq_jwt");
    localStorage.removeItem("atiq_refresh");
  }, []);

  const refreshState = useCallback(async () => {
    const { jwt: token } = getTokens();
    if (!token) {
      setState(s => ({ ...s, isLoading: false, user: null, entitlements: null, isAuthenticated: false }));
      return;
    }

    try {
      const client = createClient({ apiUrl: API_URL, token });
      const me = await client.user.me();
      setState({
        user: me.user,
        entitlements: me.entitlements,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch (err) {
      // If 401, we'd normally try to rotate, but let's see if we can just clear for now
      console.warn("Auth check failed, user may be logged out", err);
      clearTokens();
      setState({ user: null, entitlements: null, isLoading: false, isAuthenticated: false });
    }
  }, [getTokens, clearTokens]);

  useEffect(() => {
    refreshState();
  }, [refreshState]);

  const login = useCallback(async (magicToken: string) => {
    setState(s => ({ ...s, isLoading: true }));
    try {
      const client = createClient({ apiUrl: API_URL });
      const res = await client.auth.verify({ token: magicToken });
      setTokens(res.jwt, res.refreshToken);
      await refreshState();
    } catch (err) {
      setState(s => ({ ...s, isLoading: false }));
      throw err;
    }
  }, [setTokens, refreshState]);

  const logout = useCallback(async () => {
    const { refresh: refreshToken } = getTokens();
    if (refreshToken) {
      try {
        const client = createClient({ apiUrl: API_URL });
        await client.auth.logout({ refreshToken });
      } catch (err) {
        console.warn("Server-side logout failed", err);
      }
    }
    clearTokens();
    setState({ user: null, entitlements: null, isLoading: false, isAuthenticated: false });
  }, [clearTokens, getTokens]);

  const value = useMemo(() => ({
    ...state,
    login,
    logout,
    refreshState,
  }), [state, login, logout, refreshState]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
