/**
 * Handles Google OAuth2 token exchange and refresh for the SEO module.
 * Tokens are stored in Integration.credentials as:
 *   { access_token, refresh_token, expires_at (unix ms), token_type }
 *
 * If credentials only contain `oauthCode`, the code is exchanged on first use.
 */

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";

const CLIENT_ID = process.env["GOOGLE_CLIENT_ID"] ?? "";
const CLIENT_SECRET = process.env["GOOGLE_CLIENT_SECRET"] ?? "";
const REDIRECT_URI =
  process.env["GOOGLE_REDIRECT_URI"] ??
  "http://localhost:3000/api/v1/integrations/oauth/callback";

export interface GoogleOAuthCredentials {
  access_token?: string;
  refresh_token?: string;
  expires_at?: number; // unix ms
  token_type?: string;
  oauthCode?: string; // raw authorization code (pre-exchange)
}

export interface TokenResult {
  access_token: string;
  refresh_token?: string;
  expires_at: number;
  token_type: string;
  credentials: GoogleOAuthCredentials; // updated credentials to persist
}

/**
 * Exchange an authorization code for access + refresh tokens.
 */
export async function exchangeCode(code: string): Promise<TokenResult> {
  const body = new URLSearchParams({
    code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  });

  const res = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  const json = (await res.json()) as {
    access_token?: string;
    refresh_token?: string;
    expires_in?: number;
    token_type?: string;
    error?: string;
    error_description?: string;
  };

  if (!res.ok || !json.access_token) {
    throw new Error(
      `Google token exchange failed: ${json.error ?? "unknown"} — ${json.error_description ?? ""}`,
    );
  }

  const expires_at = Date.now() + (json.expires_in ?? 3600) * 1000;

  const credentials: GoogleOAuthCredentials = {
    access_token: json.access_token,
    refresh_token: json.refresh_token,
    expires_at,
    token_type: json.token_type ?? "Bearer",
  };

  return {
    access_token: json.access_token,
    refresh_token: json.refresh_token,
    expires_at,
    token_type: credentials.token_type ?? "Bearer",
    credentials,
  };
}

/**
 * Refresh an expired access token using the stored refresh token.
 */
export async function refreshAccessToken(
  refreshToken: string,
): Promise<TokenResult> {
  const body = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: "refresh_token",
  });

  const res = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  const json = (await res.json()) as {
    access_token?: string;
    refresh_token?: string;
    expires_in?: number;
    token_type?: string;
    error?: string;
    error_description?: string;
  };

  if (!res.ok || !json.access_token) {
    throw new Error(
      `Google token refresh failed: ${json.error ?? "unknown"} — ${json.error_description ?? ""}`,
    );
  }

  const expires_at = Date.now() + (json.expires_in ?? 3600) * 1000;

  const credentials: GoogleOAuthCredentials = {
    access_token: json.access_token,
    // Google only returns a new refresh_token occasionally; keep old one if absent.
    refresh_token: json.refresh_token ?? refreshToken,
    expires_at,
    token_type: json.token_type ?? "Bearer",
  };

  return {
    access_token: json.access_token,
    refresh_token: credentials.refresh_token,
    expires_at,
    token_type: credentials.token_type ?? "Bearer",
    credentials,
  };
}

/**
 * Resolves a valid access token from stored credentials.
 * Exchanges the code or refreshes the token as needed.
 * Returns the token string and the updated credentials object (caller must persist).
 */
export async function resolveAccessToken(
  stored: GoogleOAuthCredentials,
): Promise<{
  accessToken: string;
  updatedCredentials: GoogleOAuthCredentials;
}> {
  // Case 1 — credentials hold a raw authorization code that hasn't been exchanged yet.
  if (!stored.access_token && stored.oauthCode) {
    const result = await exchangeCode(stored.oauthCode);
    return {
      accessToken: result.access_token,
      updatedCredentials: result.credentials,
    };
  }

  // Case 2 — access token exists and is still valid.
  const buffer = 5 * 60 * 1000; // 5-minute buffer before expiry
  if (
    stored.access_token &&
    stored.expires_at &&
    Date.now() < stored.expires_at - buffer
  ) {
    return { accessToken: stored.access_token, updatedCredentials: stored };
  }

  // Case 3 — token expired, refresh it.
  if (stored.refresh_token) {
    const result = await refreshAccessToken(stored.refresh_token);
    return {
      accessToken: result.access_token,
      updatedCredentials: result.credentials,
    };
  }

  throw new Error(
    "No usable Google OAuth credentials: access_token expired and no refresh_token available.",
  );
}
