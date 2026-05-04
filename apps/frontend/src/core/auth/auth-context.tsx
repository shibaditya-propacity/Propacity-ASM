import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { getToken, setToken, clearToken, saveUser, loadUser } from "./token";

// ── Types ─────────────────────────────────────────────────────────────────────
export interface AuthUser {
  id:    string;
  name:  string;
  email: string;
  role:  string;
}

interface AuthContextValue {
  user:            AuthUser | null;
  isAuthenticated: boolean;
  login:  (name: string, email: string, role: string, token: string, remember: boolean) => void;
  logout: () => void;
}

// ── Context ───────────────────────────────────────────────────────────────────
const AuthContext = createContext<AuthContextValue | null>(null);

function buildInitialUser(): AuthUser | null {
  if (!getToken()) return null;
  const stored = loadUser();
  return stored
    ? { id: "stub-user-id", name: stored.name, email: stored.email, role: stored.role }
    : null;
}

// ── Provider ──────────────────────────────────────────────────────────────────
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(buildInitialUser);

  const login = useCallback(
    (name: string, email: string, role: string, token: string, remember: boolean) => {
      setToken(token, remember);
      saveUser({ name, email, role }, remember);
      setUser({ id: "stub-user-id", name, email, role });
    },
    []
  );

  const logout = useCallback(() => {
    clearToken();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: user !== null, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useAuthContext(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used inside <AuthProvider>");
  return ctx;
}
