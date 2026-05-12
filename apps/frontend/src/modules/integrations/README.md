# Integrations Module (Frontend)

Manages third-party provider connections for the current tenant. Routes under `/integrations`.

## Views (tabs)

| Tab               | Path                        | Component               |
| ----------------- | --------------------------- | ----------------------- |
| This Client       | `/integrations`             | `ThisClientView`        |
| All Clients       | `/integrations/all-clients` | `AllClientsView` (stub) |
| Platform Services | `/integrations/platform`    | `PlatformServicesView`  |

## Key components

- `IntegrationCard` — provider card with connect/disconnect/sync actions
- `IntegrationGrid` — card grid with category tab filter
- `ConnectModal` — API key connect form (modal)
- `ModuleReadiness` — per-module connectivity progress bars
- `StatsBar` — overall connectivity summary
- `CategoryTabs` — filter tabs by provider category
- `SyncStatusBadge` — coloured status pill for sync log entries

## API hooks

All hooks live in `api/`. Keys factory is in `api/keys.ts`.

| Hook                      | Purpose                                   |
| ------------------------- | ----------------------------------------- |
| `useIntegrations`         | All providers + tenant integration status |
| `useConnectApiKey`        | Connect via API key (mutation)            |
| `useConnectOAuth`         | Connect via OAuth (mutation)              |
| `useDisconnect`           | Disconnect integration (mutation)         |
| `useSync`                 | Trigger manual sync (mutation)            |
| `useSyncLogs`             | Paginated sync history                    |
| `useReadiness`            | Module readiness percentages              |
| `usePlatformIntegrations` | Platform-level integrations               |
| `useConnectPlatform`      | Connect platform service (mutation)       |
| `useSyncPlatform`         | Sync platform service (mutation)          |

## Adding a new provider

Providers are seeded in the backend (`apps/backend/prisma/seed.ts`). The frontend fetches them dynamically — no frontend constants file is needed.
