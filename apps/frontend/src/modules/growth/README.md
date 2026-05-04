# Growth Module

The Growth module manages the full prospect lifecycle from workshop attendance through brand audits, proposals, and deal closure.

## Overview

| Concern | Location |
|---|---|
| Types | `types.ts` (re-exports from `@asm/schemas` + local activity types) |
| Permissions | `growth.permissions.ts` |
| Schemas | `schemas/` (re-exports from `@asm/schemas` + local activity schema) |
| API Hooks | `api/` (one hook per file, named `use-<action>.ts`) |
| Query Keys | `api/keys.ts` |
| Components | `components/` (named exports, kebab-case filenames) |
| Pages | `pages/` (default exports, handles all 4 states) |
| Routes | `growth.routes.tsx` |

## Routes

| Path | Page | Description |
|---|---|---|
| `/growth` | `GrowthDashboardPage` | KPI summary + recent workshops + pipeline counts |
| `/growth/workshops` | `GrowthWorkshopsPage` | Workshop list with search/status filters |
| `/growth/workshops/:workshopId` | `GrowthWorkshopDetailPage` | Workshop info + prospects in that workshop |
| `/growth/prospects` | `GrowthProspectsPage` | Prospect list with stage/classification/search filters |
| `/growth/prospects/:prospectId` | `GrowthProspectDetailPage` | Prospect detail, activity timeline, brand audit |
| `/growth/brand-audits` | `GrowthBrandAuditsPage` | All brand audits with status filter |

## Data Model

- **Workshop** → has many **Prospects** → has one **BrandAudit**
- **ProspectActivity** logs every stage change, note, call, email, or meeting

## Key Patterns

- All pages use loading / error / empty / success states
- Forms use React Hook Form + zodResolver (no useState for fields)
- URL state (useSearchParams) is used for filters to support deep-linking
- Query keys come from `api/keys.ts` factory

## Permissions

Defined in `growth.permissions.ts`. Currently used for documentation purposes only; gate enforcement happens at the API layer.
