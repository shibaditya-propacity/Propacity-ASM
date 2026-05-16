# Module: Integrations

## Purpose

Manages third-party platform connections for each client workspace. Supports OAuth 2.0 and API-key providers. Each integration is scoped to a tenant and a client; one client can have at most one integration per provider. Stores encrypted credentials, tracks sync history, and exposes module readiness percentages for SEO, Ads, Social, Website, Reputation, Promoter, and Launch modules.

## Owns (data)

- `Client` — the developer brand managed by the agency (one tenant has many clients)
- `Provider` — global lookup of available integrations (no tenantId; seed data only)
- `Integration` — per-client connection status + encrypted credentials (`@@unique([clientId, providerId])`)
- `SyncLog` — append-only sync attempt log per integration
- `PlatformIntegration` — agency-level (platform-scoped) integration for shared tools

## Exposes (API)

All routes are mounted under `/api/v1/integrations`.

### Public

- `GET  /integrations/oauth/callback` — OAuth redirect target; exchanges code, stores tokens, posts result to opener via `postMessage`

### Protected (authGuard + tenantGuard)

- `GET  /integrations/clients` — list all clients for the tenant
- `POST /integrations/clients` — create a new client
- `GET  /integrations/matrix` — all clients × providers connection matrix
- `POST /integrations/oauth/refresh/:integrationId` — refresh an expired OAuth token
- `GET  /integrations/platform` — list platform-level integrations
- `POST /integrations/platform/:providerId/connect` — connect a platform integration via API key
- `POST /integrations/platform/:providerId/sync` — trigger platform sync
- `GET  /integrations/:clientId` — providers with connection status for a client
- `GET  /integrations/:clientId/readiness` — module readiness percentages
- `POST /integrations/:clientId/:providerId/connect` — initiate OAuth (returns `authUrl`) or connect via API key
- `POST /integrations/:clientId/:providerId/connect/api-key` — connect via API key directly
- `POST /integrations/:clientId/:providerId/disconnect` — revoke token + set NOT_CONNECTED
- `POST /integrations/:clientId/:providerId/sync` — trigger manual data pull
- `GET  /integrations/:clientId/:providerId/sync-logs` — paginated sync history

## OAuth providers

| Provider              | Service file                    | Scopes                                          |
| --------------------- | ------------------------------- | ----------------------------------------------- |
| Google Search Console | `oauth/google-oauth.service.ts` | `webmasters.readonly`                           |
| Google Analytics 4    | `oauth/google-oauth.service.ts` | `analytics.readonly`                            |
| Google Ads            | `oauth/google-oauth.service.ts` | `adwords`                                       |
| Meta Ads              | `oauth/meta-oauth.service.ts`   | `ads_read, ads_management, business_management` |

Credentials are encrypted at rest using AES-256-GCM (`oauth/credentials.ts`). The key is read from `CREDENTIALS_ENCRYPTION_KEY` (64-char hex).

## Sync handlers

| Provider              | File                                 | Data pulled                                              |
| --------------------- | ------------------------------------ | -------------------------------------------------------- |
| Google Search Console | `sync/google-search-console.sync.ts` | impressions, clicks, CTR, avg position, per-page data    |
| Google Analytics 4    | `sync/google-analytics.sync.ts`      | sessions, users, bounce rate, conversions, channels      |
| Google Ads            | `sync/google-ads.sync.ts`            | campaigns, keywords, spend, QS, Impression Share         |
| Meta Ads              | `sync/meta-ads.sync.ts`              | campaigns, spend, impressions, clicks, conversions, ROAS |

## Emits (events)

- `integrations.connected` — when a new integration is successfully connected
- `integrations.disconnected` — when an integration is disconnected
- `integrations.synced` — when a sync completes (SUCCESS or FAILED)
- `integrations.expired` — when a token refresh fails and status is set to EXPIRED

## Listens to (events)

None currently.

## Depends on (Platform Core services)

- `@/core/prisma/client` — database access
- `@/core/auth/auth.guard` — authentication
- `@/core/tenant/tenant.guard` — tenant scoping
- `@/core/validation/validate` — Zod middleware
- `@/core/errors/app-error` — error hierarchy
- `@/core/http/response` — response helpers

## Background jobs

| Queue               | Worker file              | Concurrency | Retries                            |
| ------------------- | ------------------------ | ----------- | ---------------------------------- |
| `integrations-sync` | `integrations.worker.ts` | 5           | 3 × exponential (5 s, 25 s, 125 s) |

`POST /:clientId/:providerId/sync` now returns `{ syncLogId, status: "IN_PROGRESS" }` immediately.
The worker picks up the job, runs the sync handler, and writes `SUCCESS` or `FAILED` to the SyncLog.
The frontend polls sync-logs to reflect the final status.

Queue and Redis connection are defined in `src/core/queue/`.

## Environment variables required

```
GOOGLE_CLIENT_ID           — Google OAuth app client ID
GOOGLE_CLIENT_SECRET       — Google OAuth app client secret
GOOGLE_REDIRECT_URI        — must match Google Cloud Console registered URI
GOOGLE_ADS_DEVELOPER_TOKEN — required only for Google Ads sync
META_APP_ID                — Meta app ID
META_APP_SECRET            — Meta app secret
META_REDIRECT_URI          — must match Meta App Dashboard registered URI
CREDENTIALS_ENCRYPTION_KEY — 64-char hex AES-256 key for token encryption
REDIS_URL                  — Redis connection string (default: redis://localhost:6379)
```

## Open questions

- Sync should be moved to a BullMQ worker for providers that may take >2 s to respond.
- Google Ads sync requires the user to have a Manager Account (MCC) or direct customer access; errors are surfaced in SyncLog.
- Meta long-lived tokens expire after 60 days; a background job should pre-emptively refresh them before expiry.
