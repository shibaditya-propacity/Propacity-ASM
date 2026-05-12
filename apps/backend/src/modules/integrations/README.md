# Integrations Module

Manages third-party provider connections for a tenant. Tracks connection status, syncs, and module readiness across Growth, Social, SEO, Website, Reputation, Promoter, and Launch modules.

## Database models

| Model                 | Table                       | Notes                                        |
| --------------------- | --------------------------- | -------------------------------------------- |
| `Provider`            | `int_providers`             | Global lookup — no tenantId                  |
| `Integration`         | `int_integrations`          | Per-tenant provider connection               |
| `SyncLog`             | `int_sync_logs`             | Sync history per integration                 |
| `PlatformIntegration` | `int_platform_integrations` | Platform-level (Propacity-owned) connections |

## Routes

| Method | Path                                         | Description                                |
| ------ | -------------------------------------------- | ------------------------------------------ |
| GET    | `/integrations`                              | All providers + tenant's connection status |
| POST   | `/integrations/:providerId/connect/api-key`  | Connect via API key                        |
| POST   | `/integrations/:providerId/connect/oauth`    | Connect via OAuth                          |
| POST   | `/integrations/:providerId/disconnect`       | Disconnect integration                     |
| POST   | `/integrations/:providerId/sync`             | Trigger manual sync                        |
| GET    | `/integrations/:providerId/sync-logs`        | Paginated sync history                     |
| GET    | `/integrations/readiness`                    | Module readiness percentages               |
| GET    | `/integrations/oauth/callback`               | OAuth redirect callback                    |
| POST   | `/integrations/oauth/refresh/:integrationId` | Refresh OAuth tokens                       |
| GET    | `/integrations/platform`                     | Platform-level integrations                |
| POST   | `/integrations/platform/:providerId/connect` | Connect platform API key                   |
| POST   | `/integrations/platform/:providerId/sync`    | Sync platform integration                  |

## Auth guards

All routes require `authGuard` + `tenantGuard`. Platform management routes should additionally check `canManagePlatform` (admin-only).

## Module readiness map

Each Growth module tracks a list of relevant providers. The readiness percentage is `(connected / total_in_db) * 100` for providers that exist in the seeded database.

## Credentials security

Credentials (API keys, OAuth tokens) are stored as JSON blobs. In production these must be encrypted at rest using a KMS-backed encryption key before upsert and decrypted on read.
