import { createCipheriv, createDecipheriv, randomBytes } from "crypto";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12;
const TAG_LENGTH = 16;

function getKey(): Buffer {
  const raw = process.env["CREDENTIALS_ENCRYPTION_KEY"];
  if (raw && raw.length === 64) return Buffer.from(raw, "hex");
  // Dev fallback — all-zero key; a production deploy must set the env var.
  console.warn(
    "[integrations] CREDENTIALS_ENCRYPTION_KEY not set — using insecure dev key",
  );
  return Buffer.alloc(32, 0);
}

export function encrypt(plaintext: string): string {
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, getKey(), iv);
  const encrypted = Buffer.concat([
    cipher.update(plaintext, "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, encrypted]).toString("base64url");
}

export function decrypt(ciphertext: string): string {
  const buf = Buffer.from(ciphertext, "base64url");
  const iv = buf.subarray(0, IV_LENGTH);
  const tag = buf.subarray(IV_LENGTH, IV_LENGTH + TAG_LENGTH);
  const encrypted = buf.subarray(IV_LENGTH + TAG_LENGTH);
  const decipher = createDecipheriv(ALGORITHM, getKey(), iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(encrypted), decipher.final()]).toString(
    "utf8",
  );
}

// ── State param ───────────────────────────────────────────────────────────────

export interface OAuthState {
  tenantId: string;
  clientId: string;
  providerId: string;
  ts: number;
}

export function encryptState(state: OAuthState): string {
  return encrypt(JSON.stringify(state));
}

export function decryptState(ciphertext: string): OAuthState {
  return JSON.parse(decrypt(ciphertext)) as OAuthState;
}

// ── Stored credentials ────────────────────────────────────────────────────────

export interface RawTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number; // unix ms
}

export interface StoredCredentials {
  /** AES-encrypted access token */
  enc_accessToken: string;
  /** AES-encrypted refresh token */
  enc_refreshToken: string;
  expiresAt: number;
}

export function storeTokens(tokens: RawTokens): StoredCredentials {
  return {
    enc_accessToken: encrypt(tokens.accessToken),
    enc_refreshToken: encrypt(tokens.refreshToken),
    expiresAt: tokens.expiresAt,
  };
}

export function loadTokens(stored: StoredCredentials): RawTokens {
  return {
    accessToken: decrypt(stored.enc_accessToken),
    refreshToken: decrypt(stored.enc_refreshToken),
    expiresAt: stored.expiresAt,
  };
}

export function isExpired(stored: StoredCredentials): boolean {
  // Treat as expired if within 5 minutes of expiry
  return Date.now() >= stored.expiresAt - 5 * 60 * 1000;
}
