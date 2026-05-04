const TOKEN_KEY = "asm_auth_token";
const USER_KEY  = "asm_auth_user";

export interface StoredUser {
  name:  string;
  email: string;
  role:  string;
}

// ── Session token ──────────────────────────────────────────────────────────────
export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY) ?? sessionStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string, remember: boolean): void {
  (remember ? localStorage : sessionStorage).setItem(TOKEN_KEY, token);
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);
}

// ── Current user ──────────────────────────────────────────────────────────────
export function saveUser(user: StoredUser, remember: boolean): void {
  (remember ? localStorage : sessionStorage).setItem(USER_KEY, JSON.stringify(user));
}

export function loadUser(): StoredUser | null {
  const raw = localStorage.getItem(USER_KEY) ?? sessionStorage.getItem(USER_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw) as StoredUser; } catch { return null; }
}
