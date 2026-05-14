/**
 * Shared Google OAuth handler for Search Console, Analytics 4, and Google Ads.
 * All three use the same OAuth 2.0 client; each provider requests its own scopes.
 */
import type { StoredCredentials } from "./credentials";
import { storeTokens, loadTokens, encryptState } from "./credentials";
import type { OAuthState } from "./credentials";

// ── Scope map (provider name → scopes) ───────────────────────────────────────

const SCOPE_MAP: Record<string, string> = {
  "Google Search Console":
    "https://www.googleapis.com/auth/webmasters.readonly",
  "Google Analytics 4": "https://www.googleapis.com/auth/analytics.readonly",
  "Google Ads": "https://www.googleapis.com/auth/adwords",
};

// ── Config helpers ────────────────────────────────────────────────────────────

function clientId(): string {
  return process.env["GOOGLE_CLIENT_ID"] ?? "";
}
function clientSecret(): string {
  return process.env["GOOGLE_CLIENT_SECRET"] ?? "";
}
function redirectUri(): string {
  return (
    process.env["GOOGLE_REDIRECT_URI"] ??
    "http://localhost:3000/api/v1/integrations/oauth/callback"
  );
}

// ── OAuth URL ─────────────────────────────────────────────────────────────────

export function getGoogleAuthUrl(
  providerName: string,
  state: OAuthState,
): string {
  const scope = SCOPE_MAP[providerName];
  if (!scope) throw new Error(`No scope mapping for provider: ${providerName}`);

  const params = new URLSearchParams({
    client_id: clientId(),
    redirect_uri: redirectUri(),
    response_type: "code",
    scope,
    access_type: "offline",
    prompt: "consent",
    state: encryptState(state),
  });

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

// ── Token exchange ────────────────────────────────────────────────────────────

interface GoogleTokenResponse {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
}

export async function exchangeGoogleCode(
  code: string,
): Promise<StoredCredentials> {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId(),
      client_secret: clientSecret(),
      redirect_uri: redirectUri(),
      grant_type: "authorization_code",
    }).toString(),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Google token exchange failed: ${body}`);
  }

  const data = (await res.json()) as GoogleTokenResponse;
  return storeTokens({
    accessToken: data.access_token,
    refreshToken: data.refresh_token ?? "",
    expiresAt: Date.now() + data.expires_in * 1000,
  });
}

// ── Token refresh ─────────────────────────────────────────────────────────────

export async function refreshGoogleToken(
  stored: StoredCredentials,
): Promise<StoredCredentials> {
  const tokens = loadTokens(stored);
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token: tokens.refreshToken,
      client_id: clientId(),
      client_secret: clientSecret(),
      grant_type: "refresh_token",
    }).toString(),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Google token refresh failed: ${body}`);
  }

  const data = (await res.json()) as GoogleTokenResponse;
  return storeTokens({
    accessToken: data.access_token,
    refreshToken: tokens.refreshToken, // refresh token doesn't change
    expiresAt: Date.now() + data.expires_in * 1000,
  });
}

// ── Token revocation ──────────────────────────────────────────────────────────

export async function revokeGoogleToken(
  stored: StoredCredentials,
): Promise<void> {
  const tokens = loadTokens(stored);
  await fetch(
    `https://oauth2.googleapis.com/revoke?token=${encodeURIComponent(tokens.accessToken)}`,
    { method: "POST" },
  ).catch(() => {
    // Best-effort revocation — don't block disconnect on API failure
  });
}

// ── Account label detection ───────────────────────────────────────────────────

export async function detectGoogleAccountLabel(
  providerName: string,
  accessToken: string,
): Promise<string | null> {
  try {
    if (providerName === "Google Search Console") {
      return await detectSearchConsoleSite(accessToken);
    }
    if (providerName === "Google Analytics 4") {
      return await detectGA4Property(accessToken);
    }
    if (providerName === "Google Ads") {
      return await detectGoogleAdsCustomer(accessToken);
    }
    return null;
  } catch {
    return null;
  }
}

// All verified permission levels can query the searchAnalytics API.
// siteRestrictedUser has full read access — only management actions are restricted.
const GSC_QUERYABLE_PERMISSIONS = new Set([
  "siteOwner",
  "siteFullUser",
  "siteRestrictedUser",
]);

async function detectSearchConsoleSite(
  accessToken: string,
): Promise<string | null> {
  const res = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as {
    siteEntry?: Array<{ siteUrl: string; permissionLevel: string }>;
  };
  const sites = data.siteEntry ?? [];
  // Prefer a site where we can actually run analytics queries
  const queryable = sites.find((s) =>
    GSC_QUERYABLE_PERMISSIONS.has(s.permissionLevel),
  );
  return (queryable ?? sites[0])?.siteUrl ?? null;
}

async function detectGA4Property(accessToken: string): Promise<string | null> {
  const res = await fetch(
    "https://analyticsadmin.googleapis.com/v1beta/accountSummaries",
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  if (!res.ok) return null;
  const data = (await res.json()) as {
    accountSummaries?: Array<{
      propertySummaries?: Array<{ property: string; displayName: string }>;
    }>;
  };
  const prop =
    data.accountSummaries?.[0]?.propertySummaries?.[0]?.property ?? null;
  // Convert from "properties/123456" to "123456" then prefix G-
  if (!prop) return null;
  const id = prop.replace("properties/", "");
  return `G-${id}`;
}

async function detectGoogleAdsCustomer(
  accessToken: string,
): Promise<string | null> {
  const developerToken = process.env["GOOGLE_ADS_DEVELOPER_TOKEN"] ?? "";
  const res = await fetch(
    "https://googleads.googleapis.com/v14/customers:listAccessibleCustomers",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "developer-token": developerToken,
      },
    },
  );
  if (!res.ok) return null;
  const data = (await res.json()) as {
    resourceNames?: string[];
  };
  const resource = data.resourceNames?.[0];
  if (!resource) return null;
  // "customers/1234567890" → "123-456-7890"
  const rawId = resource.replace("customers/", "");
  return rawId.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}
