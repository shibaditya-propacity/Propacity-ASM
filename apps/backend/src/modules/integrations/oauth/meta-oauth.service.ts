/**
 * Meta (Facebook + Instagram) OAuth handler for Meta Ads.
 */
import type { StoredCredentials } from "./credentials";
import { storeTokens, loadTokens, encryptState } from "./credentials";
import type { OAuthState } from "./credentials";

const SCOPES = ["ads_read", "ads_management", "business_management"].join(",");
const META_VERSION = "v20.0";

function appId(): string {
  return process.env["META_APP_ID"] ?? "";
}
function appSecret(): string {
  return process.env["META_APP_SECRET"] ?? "";
}
function redirectUri(): string {
  return (
    process.env["META_REDIRECT_URI"] ??
    "http://localhost:3000/api/v1/integrations/oauth/callback"
  );
}

// ── OAuth URL ─────────────────────────────────────────────────────────────────

export function getMetaAuthUrl(state: OAuthState): string {
  const params = new URLSearchParams({
    client_id: appId(),
    redirect_uri: redirectUri(),
    scope: SCOPES,
    response_type: "code",
    state: encryptState(state),
  });
  return `https://www.facebook.com/${META_VERSION}/dialog/oauth?${params.toString()}`;
}

// ── Token exchange ────────────────────────────────────────────────────────────

interface MetaTokenResponse {
  access_token: string;
  token_type: string;
  expires_in?: number;
}

export async function exchangeMetaCode(
  code: string,
): Promise<StoredCredentials> {
  const params = new URLSearchParams({
    client_id: appId(),
    client_secret: appSecret(),
    redirect_uri: redirectUri(),
    code,
  });
  const res = await fetch(
    `https://graph.facebook.com/${META_VERSION}/oauth/access_token?${params.toString()}`,
  );

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Meta token exchange failed: ${body}`);
  }

  const data = (await res.json()) as MetaTokenResponse;

  // Exchange short-lived token for long-lived token (60 days)
  const longLived = await exchangeForLongLivedToken(data.access_token);

  return storeTokens({
    accessToken: longLived.access_token,
    // Meta long-lived tokens don't have a refresh token; we store the token itself
    // and re-exchange when expired using the app secret proof.
    refreshToken: longLived.access_token,
    expiresAt: Date.now() + (longLived.expires_in ?? 5184000) * 1000,
  });
}

async function exchangeForLongLivedToken(
  shortToken: string,
): Promise<MetaTokenResponse> {
  const params = new URLSearchParams({
    grant_type: "fb_exchange_token",
    client_id: appId(),
    client_secret: appSecret(),
    fb_exchange_token: shortToken,
  });
  const res = await fetch(
    `https://graph.facebook.com/${META_VERSION}/oauth/access_token?${params.toString()}`,
  );
  if (!res.ok) {
    // If long-lived exchange fails, return the short token as-is
    return { access_token: shortToken, token_type: "bearer", expires_in: 3600 };
  }
  return (await res.json()) as MetaTokenResponse;
}

// ── Token refresh (extend expiry) ─────────────────────────────────────────────

export async function refreshMetaToken(
  stored: StoredCredentials,
): Promise<StoredCredentials> {
  const tokens = loadTokens(stored);
  // Meta: refreshing a long-lived token resets its 60-day window
  const params = new URLSearchParams({
    grant_type: "fb_exchange_token",
    client_id: appId(),
    client_secret: appSecret(),
    fb_exchange_token: tokens.accessToken,
  });
  const res = await fetch(
    `https://graph.facebook.com/${META_VERSION}/oauth/access_token?${params.toString()}`,
  );
  if (!res.ok) throw new Error("Meta token refresh failed");
  const data = (await res.json()) as MetaTokenResponse;
  return storeTokens({
    accessToken: data.access_token,
    refreshToken: data.access_token,
    expiresAt: Date.now() + (data.expires_in ?? 5184000) * 1000,
  });
}

// ── Token revocation ──────────────────────────────────────────────────────────

export async function revokeMetaToken(
  stored: StoredCredentials,
): Promise<void> {
  const tokens = loadTokens(stored);
  const params = new URLSearchParams({
    access_token: tokens.accessToken,
  });
  await fetch(
    `https://graph.facebook.com/${META_VERSION}/me/permissions?${params.toString()}`,
    { method: "DELETE" },
  ).catch(() => {});
}

// ── Account label detection ───────────────────────────────────────────────────

export async function detectMetaAdAccount(
  accessToken: string,
): Promise<string | null> {
  try {
    const params = new URLSearchParams({
      access_token: accessToken,
      fields: "account_id,name",
      limit: "1",
    });
    const res = await fetch(
      `https://graph.facebook.com/${META_VERSION}/me/adaccounts?${params.toString()}`,
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      data?: Array<{ account_id: string; name: string }>;
    };
    const account = data.data?.[0];
    if (!account) return null;
    return `act_${account.account_id}`;
  } catch {
    return null;
  }
}
