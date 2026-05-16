# Module: SEO (Frontend)

## Purpose

Provides a real-time SEO performance dashboard scoped to a selected client. Pulls data from the SEO backend module which aggregates Google Search Console and Google Analytics 4 data. Shows organic traffic trends, keyword rank tracking, top movers, and a recommended action queue.

## Routes

| Path             | Page                                                         |
| ---------------- | ------------------------------------------------------------ |
| `/seo`           | `SeoDashboardPage` (redirects to `/seo/dashboard` behaviour) |
| `/seo/dashboard` | `SeoDashboardPage`                                           |

## Pages

### `SeoDashboardPage`

- Fetches client list via `useSeoClients` (calls `/integrations/clients`)
- Reads selected client from `useSeoStore` (persisted in localStorage)
- Fetches full dashboard payload via `useSeoDashboard`
- States: client selector → ConnectBanner → SyncPrompt → full dashboard

## Components (module-internal)

| Component             | Purpose                                                      |
| --------------------- | ------------------------------------------------------------ |
| `SeoHeader`           | Client switcher + sync button topbar                         |
| `ConnectBanner`       | Shown when GSC or GA4 not connected                          |
| `SyncPrompt`          | Shown when connected but no sync run yet                     |
| `StatsBar`            | 4 KPI stat cards                                             |
| `StatCard`            | Single metric card                                           |
| `OrganicTrafficChart` | recharts AreaChart of monthly organic sessions               |
| `RankTrackingChart`   | recharts LineChart of keyword rank history (Y-axis inverted) |
| `TopMovers`           | List of biggest rank changers                                |
| `WhatComesNext`       | Top 3 recommended actions with impact/effort badges          |

## API hooks

| Hook                  | Calls                                | Invalidates               |
| --------------------- | ------------------------------------ | ------------------------- |
| `useSeoClients`       | GET `/integrations/clients`          | —                         |
| `useSeoDashboard`     | GET `/seo/:clientId/dashboard`       | —                         |
| `useSeoSync`          | POST `/seo/:clientId/sync`           | all seo keys for clientId |
| `useSeoKeywords`      | GET `/seo/:clientId/keywords`        | —                         |
| `useAddSeoKeyword`    | POST `/seo/:clientId/keywords`       | keywords + dashboard      |
| `useRemoveSeoKeyword` | DELETE `/seo/:clientId/keywords/:id` | keywords + dashboard      |
| `useSeoActions`       | GET `/seo/:clientId/actions`         | —                         |

## Permissions used

All SEO routes are accessible to any authenticated user (`growth.view`). No fine-grained frontend permission gating yet.

## State

- **URL state:** none (client selection is not in URL — same pattern as Integrations)
- **Zustand:** `useSeoStore` — persists `selectedClientId` in localStorage under `asm_seo_selected_client`

## Open questions

- Should `selectedClientId` be shared with the Integrations store (same key) so switching client in one module syncs the other?
- Should the full keyword list have add/remove controls on the dashboard page, or on a separate `/seo/keywords` route?
