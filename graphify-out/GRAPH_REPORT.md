# Graph Report - .  (2026-05-04)

## Corpus Check
- Corpus is ~25,899 words - fits in a single context window. You may not need a graph.

## Summary
- 326 nodes · 390 edges · 69 communities detected
- Extraction: 82% EXTRACTED · 17% INFERRED · 1% AMBIGUOUS · INFERRED: 66 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Backend Data & Event Layer|Backend Data & Event Layer]]
- [[_COMMUNITY_Frontend Shell & Query Hooks|Frontend Shell & Query Hooks]]
- [[_COMMUNITY_App Wiring & Backend Core|App Wiring & Backend Core]]
- [[_COMMUNITY_Shared Zod Schemas|Shared Zod Schemas]]
- [[_COMMUNITY_Frontend Pages & API Client|Frontend Pages & API Client]]
- [[_COMMUNITY_Auth  Tenant  Error Middleware|Auth / Tenant / Error Middleware]]
- [[_COMMUNITY_Frontend Mutations & Components|Frontend Mutations & Components]]
- [[_COMMUNITY_Growth Domain Errors|Growth Domain Errors]]
- [[_COMMUNITY_Core Error Hierarchy|Core Error Hierarchy]]
- [[_COMMUNITY_Frontend Routes & Permissions|Frontend Routes & Permissions]]
- [[_COMMUNITY_Growth API Hooks|Growth API Hooks]]
- [[_COMMUNITY_Growth Service Orchestration|Growth Service Orchestration]]
- [[_COMMUNITY_HTTP Response Helpers|HTTP Response Helpers]]
- [[_COMMUNITY_Validation Middleware|Validation Middleware]]
- [[_COMMUNITY_Growth DTO Layer|Growth DTO Layer]]
- [[_COMMUNITY_Node Group 15|Node Group 15]]
- [[_COMMUNITY_Node Group 16|Node Group 16]]
- [[_COMMUNITY_Node Group 17|Node Group 17]]
- [[_COMMUNITY_Node Group 18|Node Group 18]]
- [[_COMMUNITY_Node Group 19|Node Group 19]]
- [[_COMMUNITY_Node Group 20|Node Group 20]]
- [[_COMMUNITY_Node Group 21|Node Group 21]]
- [[_COMMUNITY_Node Group 22|Node Group 22]]
- [[_COMMUNITY_Node Group 23|Node Group 23]]
- [[_COMMUNITY_Node Group 24|Node Group 24]]
- [[_COMMUNITY_Node Group 25|Node Group 25]]
- [[_COMMUNITY_Node Group 26|Node Group 26]]
- [[_COMMUNITY_Node Group 27|Node Group 27]]
- [[_COMMUNITY_Node Group 28|Node Group 28]]
- [[_COMMUNITY_Node Group 29|Node Group 29]]
- [[_COMMUNITY_Node Group 30|Node Group 30]]
- [[_COMMUNITY_Node Group 31|Node Group 31]]
- [[_COMMUNITY_Node Group 32|Node Group 32]]
- [[_COMMUNITY_Node Group 33|Node Group 33]]
- [[_COMMUNITY_Node Group 34|Node Group 34]]
- [[_COMMUNITY_Node Group 35|Node Group 35]]
- [[_COMMUNITY_Node Group 36|Node Group 36]]
- [[_COMMUNITY_Node Group 37|Node Group 37]]
- [[_COMMUNITY_Node Group 38|Node Group 38]]
- [[_COMMUNITY_Node Group 39|Node Group 39]]
- [[_COMMUNITY_Node Group 40|Node Group 40]]
- [[_COMMUNITY_Node Group 41|Node Group 41]]
- [[_COMMUNITY_Node Group 42|Node Group 42]]
- [[_COMMUNITY_Node Group 43|Node Group 43]]
- [[_COMMUNITY_Node Group 44|Node Group 44]]
- [[_COMMUNITY_Node Group 45|Node Group 45]]
- [[_COMMUNITY_Node Group 46|Node Group 46]]
- [[_COMMUNITY_Node Group 47|Node Group 47]]
- [[_COMMUNITY_Node Group 48|Node Group 48]]
- [[_COMMUNITY_Node Group 49|Node Group 49]]
- [[_COMMUNITY_Node Group 50|Node Group 50]]
- [[_COMMUNITY_Node Group 51|Node Group 51]]
- [[_COMMUNITY_Node Group 52|Node Group 52]]
- [[_COMMUNITY_Node Group 53|Node Group 53]]
- [[_COMMUNITY_Node Group 54|Node Group 54]]
- [[_COMMUNITY_Node Group 55|Node Group 55]]
- [[_COMMUNITY_Node Group 56|Node Group 56]]
- [[_COMMUNITY_Node Group 57|Node Group 57]]
- [[_COMMUNITY_Node Group 58|Node Group 58]]
- [[_COMMUNITY_Node Group 59|Node Group 59]]
- [[_COMMUNITY_Node Group 60|Node Group 60]]
- [[_COMMUNITY_Node Group 61|Node Group 61]]
- [[_COMMUNITY_Node Group 62|Node Group 62]]
- [[_COMMUNITY_Node Group 63|Node Group 63]]
- [[_COMMUNITY_Node Group 64|Node Group 64]]
- [[_COMMUNITY_Node Group 65|Node Group 65]]
- [[_COMMUNITY_Node Group 66|Node Group 66]]
- [[_COMMUNITY_Node Group 67|Node Group 67]]
- [[_COMMUNITY_Node Group 68|Node Group 68]]

## God Nodes (most connected - your core abstractions)
1. `GrowthService` - 19 edges
2. `GrowthRepository` - 18 edges
3. `GrowthService` - 15 edges
4. `AppError Class` - 15 edges
5. `ApiError / api client` - 13 edges
6. `growthRoutes` - 12 edges
7. `growthKeys Query Key Factory` - 12 edges
8. `Backend Engineering Guidelines` - 12 edges
9. `LoadingState (component)` - 10 edges
10. `GrowthRepository` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Backend Engineering Guidelines` --rationale_for--> `growthRoutes`  [INFERRED]
  docs/BACKEND_GUIDELINES.md → apps/frontend/src/modules/growth/growth.routes.tsx
- `Backend Engineering Guidelines` --rationale_for--> `GrowthRepository`  [INFERRED]
  docs/BACKEND_GUIDELINES.md → apps/backend/src/app.ts
- `Backend Engineering Guidelines` --rationale_for--> `GrowthService`  [INFERRED]
  docs/BACKEND_GUIDELINES.md → apps/backend/src/app.ts
- `Backend Engineering Guidelines` --rationale_for--> `GrowthController`  [INFERRED]
  docs/BACKEND_GUIDELINES.md → apps/backend/src/app.ts
- `Backend Engineering Guidelines` --rationale_for--> `AppError Class`  [EXTRACTED]
  docs/BACKEND_GUIDELINES.md → apps/backend/src/core/errors/app-error.ts

## Hyperedges (group relationships)
- **Growth domain schemas (Workshop, Prospect, BrandAudit)** — workshop_schema, prospect_schema, brand_audit_schema, growth_index_schemas, index_schemas_package [EXTRACTED 1.00]
- **Frontend build toolchain (Vite, Tailwind, PostCSS)** — vite_config, tailwind_config, postcss_config [INFERRED 0.85]
- **Core UI component library** — chip_ui, kpi_ui, section_header_ui, skeleton_ui, progress_bar_ui, core_ui_index [EXTRACTED 1.00]
- **State feedback components (empty, error, loading)** — empty_state, error_state, loading_state [INFERRED 0.90]
- **Frontend app entrypoint and routing** — main_tsx, router_tsx, app_shell, growth_routes, query_client [EXTRACTED 0.95]
- **Growth module mutation hooks sharing apiClient and growthKeys** — use_create_prospect_usecreateprospect, use_create_brand_audit_usecreatebrandaudit, use_update_workshop_useupdateworkshop, client_apiclient [EXTRACTED 1.00]
- **All lazy-loaded Growth pages registered in growthRoutes** — growth_routes_growthroutesobj, growth_routes_growthdashboardpage, growth_routes_growthworkshopspage, growth_routes_growthworkshopdetailpage, growth_routes_growthprospectspage, growth_routes_growthprospectdetailpage, growth_routes_growthbrandauditspage [EXTRACTED 1.00]
- **Form components in growth module using react-hook-form + zod** — prospect_form_prospectform, add_activity_form_addactivityform, prospect_stage_form_prospectstageform, workshop_form_workshopform [INFERRED 0.90]
- **Badge/status display components in growth module** — workshop_status_badge_workshopstatusbadge, prospect_stage_badge_prospectstagebadge, brand_audit_card_brandauditcard [INFERRED 0.85]
- **Growth API React Query Hooks** — use_create_workshop_hook, use_prospects_hook, use_delete_workshop_hook, use_brand_audits_hook, use_update_prospect_hook, use_update_prospect_stage_hook, use_prospect_brand_audit_hook, use_create_prospect_activity_hook, use_prospect_activities_hook, use_workshop_hook, use_workshops_hook, use_prospect_hook [EXTRACTED 1.00]
- **Growth Module Pages** — growth_brand_audits_page, growth_workshop_detail_page, growth_dashboard_page, growth_workshops_page, growth_prospects_page, growth_prospect_detail_page [INFERRED 0.90]
- **Backend Growth Module Dependency Chain** — growth_repository, growth_service, growth_controller, growth_routes, backend_app [EXTRACTED 1.00]
- **All API Hooks Consuming growthKeys** — use_create_workshop_hook, use_delete_workshop_hook, use_brand_audits_hook, use_update_prospect_hook, use_update_prospect_stage_hook, use_prospect_brand_audit_hook, use_create_prospect_activity_hook, use_prospect_activities_hook, use_workshop_hook, use_workshops_hook, use_prospect_hook, use_prospects_hook [EXTRACTED 1.00]
- **Growth Module Backend Layer Stack** — growth_routes, growth_controller, growth_service, growth_repository [EXTRACTED 1.00]
- **Platform Core Services** — auth_guard, audit_service, event_bus, validate_middleware, error_handler, http_response, prisma_client [EXTRACTED 1.00]
- **AppError Class Hierarchy** — app_error, not_found_error, forbidden_error, validation_error, conflict_error, workshop_not_found_error, prospect_not_found_error, brand_audit_not_found_error, invalid_stage_transition_error [EXTRACTED 1.00]
- **Growth Module Seven-File Rule Compliance** — growth_routes, growth_controller, growth_service, growth_repository, growth_dto, growth_errors, growth_events, growth_policy [EXTRACTED 1.00]
- **GrowthService Core Dependencies** — growth_service, audit_service, event_bus, growth_policy, growth_repository, growth_errors [EXTRACTED 1.00]
- **Growth Module Test Suite** — growth_service_test, growth_routes_test [EXTRACTED 1.00]
- **Monorepo Governing Documentation** — root_claude, backend_guidelines, frontend_guidelines, backend_claude, frontend_claude [EXTRACTED 1.00]

## Communities

### Community 0 - "Backend Data & Event Layer"
Cohesion: 0.07
Nodes (7): AuditService, EventBus, GrowthRepository, mapBrandAudit(), mapProspect(), mapWorkshop(), GrowthService

### Community 1 - "Frontend Shell & Query Hooks"
Cohesion: 0.08
Nodes (19): AppShell (layout), Chip (UI component), core/ui/index.ts, EmptyState (component), ErrorState (component), GrowthBrandAuditsPage(), GrowthDashboardPage(), Kpi (UI component) (+11 more)

### Community 2 - "App Wiring & Backend Core"
Cohesion: 0.14
Nodes (28): @asm/schemas Shared Zod Package, AuditService, Backend Express App Factory, Backend App AI Agent Instructions, Backend Growth Module README, Backend Engineering Guidelines, Backend Entry Point, errorHandler Middleware (+20 more)

### Community 3 - "Shared Zod Schemas"
Cohesion: 0.09
Nodes (22): AcquisitionSourceSchema (enum), AuditBenchmarkSchema (zod), AuditDimensionSchema (zod), AuditStatusSchema (enum), AuditTypeSchema (enum), BrandAuditSchema (zod), CreateBrandAuditSchema (zod), CreateProspectSchema (zod) (+14 more)

### Community 4 - "Frontend Pages & API Client"
Cohesion: 0.22
Nodes (20): ApiError / api client, GrowthBrandAuditsPage, GrowthDashboardPage, GrowthProspectDetailPage, GrowthProspectsPage, GrowthWorkshopDetailPage, GrowthWorkshopsPage, growthKeys Query Key Factory (+12 more)

### Community 5 - "Auth / Tenant / Error Middleware"
Cohesion: 0.12
Nodes (13): createApp(), AppError Class, authGuard Middleware, BrandAuditNotFoundError, ConflictError, registerGrowthRoutes(), InvalidStageTransitionError, NotFoundError (+5 more)

### Community 6 - "Frontend Mutations & Components"
Cohesion: 0.14
Nodes (15): AddActivityForm (component), BrandAuditCard (component), apiClient (HTTP client object), ProspectActivityTimeline (component), ProspectForm (component), CreateProspectActivitySchema (zod schema), ProspectStageForm (component), CreateProspectActivityInput (interface) (+7 more)

### Community 7 - "Growth Domain Errors"
Cohesion: 0.17
Nodes (4): BrandAuditNotFoundError, InvalidStageTransitionError, ProspectNotFoundError, WorkshopNotFoundError

### Community 8 - "Core Error Hierarchy"
Cohesion: 0.18
Nodes (5): AppError, ConflictError, ForbiddenError, NotFoundError, ValidationError

### Community 9 - "Frontend Routes & Permissions"
Cohesion: 0.25
Nodes (8): GrowthPermissions (const permission map), GrowthBrandAuditsPage (lazy page), GrowthDashboardPage (lazy page), GrowthProspectDetailPage (lazy page), GrowthProspectsPage (lazy page), growthRoutes (RouteObject), GrowthWorkshopDetailPage (lazy page), GrowthWorkshopsPage (lazy page)

### Community 10 - "Growth API Hooks"
Cohesion: 0.4
Nodes (2): ApiError, queryClient (QueryClient instance)

### Community 11 - "Growth Service Orchestration"
Cohesion: 0.5
Nodes (2): WorkshopStatusBadge(), WorkshopTable (component)

### Community 12 - "HTTP Response Helpers"
Cohesion: 0.67
Nodes (2): createTestQueryClient(), renderWithProviders()

### Community 13 - "Validation Middleware"
Cohesion: 0.5
Nodes (0): 

### Community 14 - "Growth DTO Layer"
Cohesion: 0.5
Nodes (2): ProspectStageBadge(), ProspectTable (component)

### Community 15 - "Node Group 15"
Cohesion: 0.67
Nodes (1): GrowthController

### Community 16 - "Node Group 16"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Node Group 17"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Node Group 18"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Node Group 19"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Node Group 20"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Node Group 21"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Node Group 22"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Node Group 23"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "Node Group 24"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "Node Group 25"
Cohesion: 1.0
Nodes (0): 

### Community 26 - "Node Group 26"
Cohesion: 1.0
Nodes (0): 

### Community 27 - "Node Group 27"
Cohesion: 1.0
Nodes (0): 

### Community 28 - "Node Group 28"
Cohesion: 1.0
Nodes (0): 

### Community 29 - "Node Group 29"
Cohesion: 1.0
Nodes (0): 

### Community 30 - "Node Group 30"
Cohesion: 1.0
Nodes (0): 

### Community 31 - "Node Group 31"
Cohesion: 1.0
Nodes (0): 

### Community 32 - "Node Group 32"
Cohesion: 1.0
Nodes (0): 

### Community 33 - "Node Group 33"
Cohesion: 1.0
Nodes (0): 

### Community 34 - "Node Group 34"
Cohesion: 1.0
Nodes (0): 

### Community 35 - "Node Group 35"
Cohesion: 1.0
Nodes (0): 

### Community 36 - "Node Group 36"
Cohesion: 1.0
Nodes (0): 

### Community 37 - "Node Group 37"
Cohesion: 1.0
Nodes (0): 

### Community 38 - "Node Group 38"
Cohesion: 1.0
Nodes (0): 

### Community 39 - "Node Group 39"
Cohesion: 1.0
Nodes (0): 

### Community 40 - "Node Group 40"
Cohesion: 1.0
Nodes (0): 

### Community 41 - "Node Group 41"
Cohesion: 1.0
Nodes (0): 

### Community 42 - "Node Group 42"
Cohesion: 1.0
Nodes (0): 

### Community 43 - "Node Group 43"
Cohesion: 1.0
Nodes (0): 

### Community 44 - "Node Group 44"
Cohesion: 1.0
Nodes (0): 

### Community 45 - "Node Group 45"
Cohesion: 1.0
Nodes (0): 

### Community 46 - "Node Group 46"
Cohesion: 1.0
Nodes (0): 

### Community 47 - "Node Group 47"
Cohesion: 1.0
Nodes (0): 

### Community 48 - "Node Group 48"
Cohesion: 1.0
Nodes (0): 

### Community 49 - "Node Group 49"
Cohesion: 1.0
Nodes (0): 

### Community 50 - "Node Group 50"
Cohesion: 1.0
Nodes (0): 

### Community 51 - "Node Group 51"
Cohesion: 1.0
Nodes (0): 

### Community 52 - "Node Group 52"
Cohesion: 1.0
Nodes (0): 

### Community 53 - "Node Group 53"
Cohesion: 1.0
Nodes (0): 

### Community 54 - "Node Group 54"
Cohesion: 1.0
Nodes (0): 

### Community 55 - "Node Group 55"
Cohesion: 1.0
Nodes (0): 

### Community 56 - "Node Group 56"
Cohesion: 1.0
Nodes (0): 

### Community 57 - "Node Group 57"
Cohesion: 1.0
Nodes (0): 

### Community 58 - "Node Group 58"
Cohesion: 1.0
Nodes (0): 

### Community 59 - "Node Group 59"
Cohesion: 1.0
Nodes (0): 

### Community 60 - "Node Group 60"
Cohesion: 1.0
Nodes (0): 

### Community 61 - "Node Group 61"
Cohesion: 1.0
Nodes (0): 

### Community 62 - "Node Group 62"
Cohesion: 1.0
Nodes (0): 

### Community 63 - "Node Group 63"
Cohesion: 1.0
Nodes (0): 

### Community 64 - "Node Group 64"
Cohesion: 1.0
Nodes (0): 

### Community 65 - "Node Group 65"
Cohesion: 1.0
Nodes (0): 

### Community 66 - "Node Group 66"
Cohesion: 1.0
Nodes (0): 

### Community 67 - "Node Group 67"
Cohesion: 1.0
Nodes (0): 

### Community 68 - "Node Group 68"
Cohesion: 1.0
Nodes (1): CreateBrandAuditSchema (re-export from @asm/schemas)

## Ambiguous Edges - Review These
- `useCreateProspect()` → `WorkshopForm (component)`  [AMBIGUOUS]
  apps/frontend/src/modules/growth/components/workshop-form.tsx · relation: conceptually_related_to
- `ProspectActivity (interface)` → `BrandAuditCard (component)`  [AMBIGUOUS]
  apps/frontend/src/modules/growth/components/brand-audit-card.tsx · relation: conceptually_related_to
- `GrowthRepository` → `AuditService`  [AMBIGUOUS]
  apps/backend/src/modules/growth/growth.repository.ts · relation: conceptually_related_to

## Knowledge Gaps
- **39 isolated node(s):** `AcquisitionSourceSchema (enum)`, `UpdateProspectStageSchema (zod)`, `UpdateProspectSchema (zod)`, `WorkshopFormatSchema (enum)`, `CreateWorkshopSchema (zod)` (+34 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Node Group 16`** (2 nodes): `chip.tsx`, `Chip()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 17`** (2 nodes): `section-header.tsx`, `SectionHeader()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 18`** (2 nodes): `progress-bar.tsx`, `ProgressBar()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 19`** (2 nodes): `skeleton.tsx`, `Skeleton()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 20`** (2 nodes): `topbar.tsx`, `Topbar()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 21`** (2 nodes): `use-workspace.ts`, `useWorkspace()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 22`** (2 nodes): `empty-state.tsx`, `EmptyState()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 23`** (2 nodes): `brand-audit-card.tsx`, `auditStatusTone()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 24`** (2 nodes): `prospect-form.tsx`, `onSubmit()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 25`** (2 nodes): `prospect-activity-timeline.tsx`, `getActivityType()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 26`** (2 nodes): `onSubmit()`, `add-activity-form.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 27`** (2 nodes): `prospect-stage-form.tsx`, `onSubmit()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 28`** (2 nodes): `workshop-form.tsx`, `onSubmit()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 29`** (2 nodes): `use-create-workshop.ts`, `useCreateWorkshop()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 30`** (2 nodes): `use-delete-workshop.ts`, `useDeleteWorkshop()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 31`** (2 nodes): `use-update-prospect.ts`, `useUpdateProspect()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 32`** (2 nodes): `use-update-prospect-stage.ts`, `useUpdateProspectStage()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 33`** (2 nodes): `use-prospect-brand-audit.ts`, `useProspectBrandAudit()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 34`** (2 nodes): `use-create-prospect-activity.ts`, `useCreateProspectActivity()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 35`** (2 nodes): `use-prospect-activities.ts`, `useProspectActivities()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 36`** (2 nodes): `use-workshop.ts`, `useWorkshop()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 37`** (2 nodes): `use-prospect.ts`, `useProspect()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 38`** (2 nodes): `error-handler.ts`, `errorHandler()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 39`** (1 nodes): `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 40`** (1 nodes): `prospect.schema.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 41`** (1 nodes): `workshop.schema.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 42`** (1 nodes): `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 43`** (1 nodes): `brand-audit.schema.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 44`** (1 nodes): `tailwind.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 45`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 46`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 47`** (1 nodes): `kpi.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 48`** (1 nodes): `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 49`** (1 nodes): `app-shell.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 50`** (1 nodes): `error-state.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 51`** (1 nodes): `loading-state.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 52`** (1 nodes): `query-client.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 53`** (1 nodes): `types.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 54`** (1 nodes): `growth.permissions.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 55`** (1 nodes): `prospect.schema.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 56`** (1 nodes): `workshop.schema.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 57`** (1 nodes): `brand-audit.schema.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 58`** (1 nodes): `workshop-table.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 59`** (1 nodes): `prospect-table.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 60`** (1 nodes): `keys.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 61`** (1 nodes): `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 62`** (1 nodes): `client.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 63`** (1 nodes): `growth.dto.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 64`** (1 nodes): `growth.events.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 65`** (1 nodes): `growth.policy.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 66`** (1 nodes): `growth.service.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 67`** (1 nodes): `growth.routes.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node Group 68`** (1 nodes): `CreateBrandAuditSchema (re-export from @asm/schemas)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `useCreateProspect()` and `WorkshopForm (component)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `ProspectActivity (interface)` and `BrandAuditCard (component)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `GrowthRepository` and `AuditService`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `growthRoutes` connect `App Wiring & Backend Core` to `Frontend Shell & Query Hooks`, `Auth / Tenant / Error Middleware`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Why does `AppError Class` connect `Auth / Tenant / Error Middleware` to `App Wiring & Backend Core`, `Growth Domain Errors`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Why does `GrowthService` connect `Backend Data & Event Layer` to `App Wiring & Backend Core`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **What connects `AcquisitionSourceSchema (enum)`, `UpdateProspectStageSchema (zod)`, `UpdateProspectSchema (zod)` to the rest of the system?**
  _39 weakly-connected nodes found - possible documentation gaps or missing edges._