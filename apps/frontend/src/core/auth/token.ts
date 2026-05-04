// ── Keys ─────────────────────────────────────────────────────────────────────
const TOKEN_KEY    = "asm_auth_token";
const USER_KEY     = "asm_auth_user";
const ACCOUNTS_KEY = "asm_accounts";

// ── Types ────────────────────────────────────────────────────────────────────
export interface StoredAccount {
  name:     string;
  email:    string;
  password: string; // plain-text in mock — never store plain passwords in production
  role:     string;
}

export interface StoredUser {
  name:  string;
  email: string;
  role:  string;
}

// ── Session token ─────────────────────────────────────────────────────────────
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

// ── Accounts database (mock) ──────────────────────────────────────────────────
export function getAccounts(): StoredAccount[] {
  const raw = localStorage.getItem(ACCOUNTS_KEY);
  if (!raw) return [];
  try { return JSON.parse(raw) as StoredAccount[]; } catch { return []; }
}

export function saveAccount(account: StoredAccount): void {
  const accounts = getAccounts();
  accounts.push(account);
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

export function findAccount(email: string): StoredAccount | null {
  return (
    getAccounts().find((a) => a.email.toLowerCase() === email.toLowerCase()) ?? null
  );
}

export function emailTaken(email: string): boolean {
  return !!findAccount(email);
}
