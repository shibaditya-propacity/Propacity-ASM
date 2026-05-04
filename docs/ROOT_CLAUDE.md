# Claude Code instructions — Propacity ASM monorepo

You are working on the **Propacity ASM** codebase, a multi-tenant SaaS platform for digital agencies running real-estate developer brands. This repository is a **monorepo** containing both the backend and frontend applications, plus shared packages.

This file is the **root router** for AI coding agents (Claude Code, Cursor, etc.). Read it in full at the start of every session. Do not skip sections. Do not summarize them away.

---

## 1. The hard rules — apply everywhere in this repo

These rules apply to every line of code in every package. They override anything else you have learned about "best practices."

1. **Stay in your lane.** When working on backend code, you are governed by `docs/BACKEND_GUIDELINES.md`. When working on frontend code, you are governed by `docs/FRONTEND_GUIDELINES.md`. Read the relevant doc in full before writing code.
2. **Modules are sealed.** A module never imports from another module. Cross-module communication goes through Platform Core (backend) or shared `core/` building blocks (frontend). If you find yourself wanting to import across modules, **stop and ask the user.**
3. **No invented patterns.** If a pattern you need is not described in the guidelines and not already present in the codebase, **stop and ask** before inventing one. Consistency across modules matters more than local cleverness.
4. **No unapproved libraries.** Both guideline documents list the exact libraries and versions you may use. If you need a library not on the list, **stop and ask.** Do not run `npm install` or `pnpm add` based on Stack Overflow.
5. **Never violate multi-tenancy.** Every database query must be scoped to a tenant. Every API route must be authenticated and tenant-resolved. Forgetting this is a **critical security bug**, not a style issue. (Backend §11.)
6. **Less code, not more.** A thirty-line solution that follows the patterns is better than a three-hundred-line solution that's "more flexible." Flexibility is added by the next intern, when needed, not speculatively.
7. **Ask, don't assume.** When the user's request is ambiguous, ask one clarifying question rather than producing three plausible variants.

---

## 2. Where to find what

| You are working on… | Read this **before** writing code |
|---|---|
| Anything in `apps/backend/` | `docs/BACKEND_GUIDELINES.md` (full read, every session) |
| Anything in `apps/frontend/` | `docs/FRONTEND_GUIDELINES.md` (full read, every session) |
| A specific backend module | `apps/backend/src/modules/<module>/README.md` |
| A specific frontend module | `apps/frontend/src/modules/<module>/README.md` |
| Shared validation schemas | `packages/schemas/README.md` |
| An architectural question | `docs/adr/` — search for an existing ADR before raising a new question |

The two guideline docs are **authoritative**. If anything in this file or in a module README appears to contradict them, the guidelines win. If you spot a real contradiction, surface it to the user — do not silently pick one.

---

## 3. Routing your work — the decision tree

Use this at the start of every task.

**Step 1.** Identify which app the change belongs to.
- Backend (API, services, database, jobs) → `apps/backend/`
- Frontend (UI, routes, components) → `apps/frontend/`
- Both (a new feature that spans both) → backend first, then frontend, with a clear handoff
- Shared schemas or types → `packages/schemas/`

**Step 2.** Identify which module the change belongs to.
- The sidebar items in the product map one-to-one with module folders in both apps.
- If the change doesn't fit any existing module, **stop and ask** whether to create a new module or extend Platform Core.

**Step 3.** Read in this order:
1. The relevant guideline doc (`docs/BACKEND_GUIDELINES.md` or `docs/FRONTEND_GUIDELINES.md`).
2. The module's `README.md`.
3. At least one existing peer file in the module (a service, a page, a component) so you mirror its patterns.

**Step 4.** Plan, then code.
- For changes touching more than three files, write a short plan and confirm with the user before generating code.
- For changes inside one module that follow established patterns, proceed and surface the diff for review.

---

## 4. The monorepo layout

```
asm/
├── CLAUDE.md                        ← you are here
├── docs/
│   ├── BACKEND_GUIDELINES.md        ← the backend contract
│   ├── FRONTEND_GUIDELINES.md       ← the frontend contract
│   └── adr/                         ← architecture decision records
├── packages/
│   └── schemas/                     ← shared Zod schemas + inferred types
├── apps/
│   ├── backend/
│   │   ├── CLAUDE.md                ← backend app-scoped instructions
│   │   ├── src/
│   │   │   ├── core/                ← Platform Core (auth, tenant, audit, ...)
│   │   │   ├── modules/             ← One folder per sidebar module
│   │   │   └── workers/             ← Background job handlers
│   │   ├── prisma/
│   │   └── package.json
│   └── frontend/
│       ├── CLAUDE.md                ← frontend app-scoped instructions
│       ├── src/
│       │   ├── core/                ← shell, ui, hooks, auth, layout
│       │   ├── modules/             ← One folder per sidebar module
│       │   └── styles/
│       └── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

Each `CLAUDE.md` lower in the tree narrows the context. When you are working inside `apps/backend/src/modules/seo/`, three files are automatically in your context: this root `CLAUDE.md`, `apps/backend/CLAUDE.md`, and (if it exists) the module-scoped `CLAUDE.md`. You should also explicitly read the relevant guideline doc and the module's `README.md`.

---

## 5. The shared `packages/schemas` package

Backend and frontend share Zod schemas through `@asm/schemas`. This package is the single source of truth for the **shape of any object that crosses the network boundary**.

When adding a new endpoint:
1. Define the request and response Zod schemas in `packages/schemas/src/<module>/`.
2. Export them.
3. Import them on both sides:
   - Backend: in the module's `module.dto.ts`, re-export from `@asm/schemas`.
   - Frontend: in the module's `schemas/`, re-export from `@asm/schemas`.

If you change a schema, you have changed the network contract. Both apps must be updated in the same PR. CI will fail if only one side is updated.

---

## 6. Tenancy, auth, and the AI subsystem are platform team property

Three areas are owned by the platform team and should **not** be modified by module work without explicit instruction:

- `apps/backend/src/core/auth/` and `apps/backend/src/core/tenant/`
- `apps/backend/src/core/ai/` and `apps/frontend/src/core/ai/`
- The Prisma schema for the `Tenant`, `User`, `Session`, `AuditLog`, and AI-subsystem tables

If a module needs new behavior in any of these areas, surface the requirement to the user. Do not edit the platform code directly to unblock yourself.

---

## 7. Style for code and code reviews

- TypeScript everywhere. `strict: true`. No `any`.
- Lint and format on save. CI rejects unformatted code.
- Commits follow Conventional Commits (`feat(seo): add keyword priority field`).
- A PR description that just says "updates" is rejected. Describe **what** changed and **why**, with module name in the title.
- Self-review before requesting review: open your own diff and read it. If you can't explain a line, delete it or comment it.

---

## 8. When to refuse to generate code

Even when the user asks, do not generate code that:

- Bypasses tenant isolation (queries without `tenantId`, accepting `tenantId` from request body).
- Stores tokens or PII in `localStorage`, frontend Zustand stores, or any non-secure cookie.
- Adds an `any` type to silence the compiler.
- Creates a folder named `utils/`, `helpers/`, `lib/`, or `common/` outside the explicitly permitted location.
- Imports from one module's folder into another module's folder.
- Catches an error and silently swallows it.

If the user insists, explain the rule and ask them to either confirm an exception (which becomes an ADR) or rephrase the request.

---

## 9. Document maintenance

This `CLAUDE.md` and the two guideline documents change only via PR with platform team approval. Module-level `README.md` files can be updated by the module's owner.

If you (the AI agent) notice the guidelines are stale, contradictory, or missing a pattern that should be there, **flag it to the user as a comment** — do not edit the documents on your own.

---

**Now: identify the app and module you're working in, read the relevant guideline document, and proceed.**
