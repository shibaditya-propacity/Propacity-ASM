# Module: Growth

## Purpose
The Growth module powers the workshop-driven developer acquisition funnel for real-estate agencies. It manages paid workshops, tracks attendees as prospects through a 9-stage CRM pipeline, and stores AI-generated brand audits and proposals. The flow is: Meta ad → paid workshop → segmentation → 1-on-1 → brand audit → custom proposal → onboarding.

## Owns (data)
- `GrowthWorkshop` — workshops with date, format, capacity, ad spend, registrations, attendance
- `GrowthProspect` — attendees moving through the pipeline; one workshop → many prospects
- `GrowthProspectActivity` — immutable activity log (stage changes, notes, calls, emails)
- `GrowthBrandAudit` — AI-generated brand audit reports linked to a prospect

## Exposes (API)
### Workshops
- `GET /api/v1/growth/workshops` — list with filters (status, search, pagination)
- `POST /api/v1/growth/workshops` — create a workshop
- `GET /api/v1/growth/workshops/:id` — get single workshop
- `PATCH /api/v1/growth/workshops/:id` — update workshop
- `DELETE /api/v1/growth/workshops/:id` — soft delete

### Prospects
- `GET /api/v1/growth/prospects` — list with filters (workshopId, stage, classification, search)
- `POST /api/v1/growth/prospects` — register a prospect
- `GET /api/v1/growth/prospects/:id` — get single prospect
- `PATCH /api/v1/growth/prospects/:id` — update prospect details
- `POST /api/v1/growth/prospects/:id/stage` — transition stage (validated against allowed transitions)
- `GET /api/v1/growth/prospects/:id/activities` — activity timeline
- `POST /api/v1/growth/prospects/:id/activities` — add activity
- `GET /api/v1/growth/prospects/:id/brand-audit` — get prospect's latest audit

### Brand Audits
- `GET /api/v1/growth/brand-audits` — list audits with filters
- `POST /api/v1/growth/brand-audits` — create audit record
- `GET /api/v1/growth/brand-audits/:id` — get audit
- `PATCH /api/v1/growth/brand-audits/:id/status` — update audit status

## Emits (events)
- `growth.workshop.created` — after workshop creation
- `growth.workshop.updated` — after workshop update
- `growth.prospect.created` — after prospect registration
- `growth.prospect.stage_changed` — after stage transition (triggers AI audit workflow at Segmented → Agency)
- `growth.brand_audit.created` — after audit record created
- `growth.brand_audit.completed` — after audit AI generation completes

## Listens to (events)
None currently. Future: `intelligence.copilot.audit_completed` to update audit status.

## Depends on (Platform Core services)
- `core/auth/auth.guard` — JWT verification
- `core/tenant/tenant.guard` — tenant resolution
- `core/audit/audit.service` — mutation audit logs
- `core/events/event-bus` — domain events
- `core/errors/app-error` — error hierarchy
- `core/http/response` — response helpers
- `core/prisma/client` — database access
- `core/validation/validate` — Zod validation middleware

## Background jobs
- `growth-audit-generate` (future) — triggers AI audit generation when stage reaches Segmented

## Open questions
- Stage transition rules currently hardcoded in service — may need DB-backed config for multi-tenant customization
- Brand audit AI generation is not yet wired — `GrowthBrandAudit` is created as a shell and filled by the AI subsystem
