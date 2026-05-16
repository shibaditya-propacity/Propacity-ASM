# Module: SEO

## Purpose

Provides real-time SEO performance dashboards for each client workspace. Pulls data from Google Search Console (organic clicks, impressions, CTR, avg position, top pages, top queries, indexed pages) and Google Analytics 4 (monthly organic sessions, users, bounce rate). Stores per-client snapshots after each sync and surfaces a prioritised action queue generated from the data.

## Owns (data)

- `SeoSnapshot` — per-client, per-sync performance snapshot stored in `seo_snapshots`
- `SeoKeyword` — tracked keywords per client stored in `seo_keywords`
- `SeoAction` — recommended action queue per client stored in `seo_actions`

## Exposes (API)

All routes are under `/api/v1/seo/:clientId/`.

| Method | Path                             | Description                                                                 |
| ------ | -------------------------------- | --------------------------------------------------------------------------- |
| GET    | `/:clientId/dashboard`           | Full dashboard payload (snapshot + keywords + actions + integration status) |
| GET    | `/:clientId/organic-traffic`     | Monthly organic sessions array for chart                                    |
| GET    | `/:clientId/rank-tracking`       | Tracked keywords with weekly rank history                                   |
| GET    | `/:clientId/keywords`            | List tracked keywords                                                       |
| POST   | `/:clientId/keywords`            | Add a keyword to track                                                      |
| DELETE | `/:clientId/keywords/:keywordId` | Remove a tracked keyword                                                    |
| GET    | `/:clientId/actions`             | List pending action queue (sorted High → Low impact)                        |
| POST   | `/:clientId/sync`                | Trigger a full data sync from GSC + GA4                                     |

## Emits (events)

- `seo.sync.completed` — after a successful sync
- `seo.keyword.added` — after adding a tracked keyword
- `seo.keyword.removed` — after removing a tracked keyword

## Listens to (events)

None.

## Depends on (Platform Core services)

- `@/core/auth/auth.guard` — JWT authentication
- `@/core/tenant/tenant.guard` — tenant isolation
- `@/core/validation/validate` — Zod request validation
- `@/core/errors/app-error` — typed error hierarchy
- `@/core/http/response` — response helpers
- `@/core/prisma/client` — Prisma singleton

## Background jobs

None currently. The sync endpoint is synchronous. Long-running syncs should be moved to a BullMQ job (`seo-sync` queue) in a future iteration.

## Token flow

1. `POST /:clientId/sync` receives `clientId`
2. `SeoRepository.findGoogleIntegration` looks up `int_integrations` joined to `int_providers` by provider name ("Google Search Console" / "Google Analytics 4")
3. `google-oauth.service.ts → resolveAccessToken` exchanges auth code or refreshes token as needed
4. Updated credentials are persisted back to `int_integrations` via `updateIntegrationCredentials`
5. GSC API calls use `Integration.accountLabel` as the site URL (e.g. `https://example.com/`)
6. GA4 API calls use `Integration.metadata.propertyId` (e.g. `properties/123456789`)

## Open questions

- Should sync be moved to a BullMQ background job to avoid HTTP timeout on large sites?
- Should the action queue be client-editable (title, due date, assignee) via additional PATCH endpoints?
- Token refresh: if both GSC and GA4 tokens are expired simultaneously, we make two serial token-refresh calls. Consider parallelising.
