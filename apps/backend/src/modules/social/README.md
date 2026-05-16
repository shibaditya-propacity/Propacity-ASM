# Module: Social Media

## Purpose

Tracks social media presence and performance for client brands across Instagram, Facebook, LinkedIn, and YouTube. Agencies enter a brand name; the system automatically discovers social handles via Google SERP search (Serper API), the agency confirms or manually enters handles, and the module then fetches and stores periodic metrics snapshots.

## Owns (data)

- `SocialProfile` — one row per client per platform; stores handle, connection state, access token
- `SocialSnapshot` — point-in-time metrics: followers, engagement rate, reach, top posts

## Exposes (API)

### Handle discovery

- `POST /social/:clientId/fetch-handles` — given `{ brandName }`, search Google for handles across all four platforms

### Profiles

- `GET  /social/:clientId/profiles` — all configured social profiles for a client
- `POST /social/:clientId/profiles` — save or confirm a handle (creates or updates)
- `POST /social/:clientId/profiles/:platform/connect` — mark a profile as connected (optionally stores OAuth token)

### Sync

- `POST /social/:clientId/profiles/:platform/sync` — pull fresh metrics for one platform
- `POST /social/:clientId/sync` — sync all connected platforms at once

### Dashboard & history

- `GET  /social/:clientId/dashboard` — full dashboard data: profiles + latest snapshot per platform + summary
- `GET  /social/:clientId/snapshots/:platform` — historical snapshots for charts

## Emits (events)

- `social.profile.connected` — when a platform is marked as connected
- `social.profile.synced` — when a sync snapshot is persisted
- `social.handles.fetched` — when auto-discovery runs

## Listens to (events)

None currently.

## Depends on (Platform Core services)

- `authGuard` — JWT verification
- `tenantGuard` — tenant scoping
- `validate` — Zod input validation
- `AppError` hierarchy via `social.errors.ts`

## API Key mapping

| Platform                         | Key used               | Mechanism                             |
| -------------------------------- | ---------------------- | ------------------------------------- |
| Handle discovery (all platforms) | `SERPER_API_KEY`       | Google SERP via serper.dev            |
| Instagram metrics                | `SERPER_API_KEY`       | SERP scraping of public profile pages |
| Facebook metrics                 | `SERPER_API_KEY`       | SERP scraping of public page data     |
| LinkedIn metrics                 | `SERPER_API_KEY`       | SERP scraping of public company pages |
| YouTube metrics                  | `YOUTUBE_DATA_API_KEY` | YouTube Data API v3 (public channels) |

Future OAuth flows (for private analytics) would additionally need:

- Instagram/Facebook: `META_APP_ID` + `META_APP_SECRET` (already in `.env.example`)
- LinkedIn: `LINKEDIN_CLIENT_ID` + `LINKEDIN_CLIENT_SECRET` (in `.env.example`)

## Background jobs

None yet. Sync is triggered on-demand via HTTP.

## Open questions

- Rate limits: Serper has a monthly quota. If usage grows, add caching of snapshot data.
- LinkedIn private analytics require LinkedIn OAuth which is not yet configured.
