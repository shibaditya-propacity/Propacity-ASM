# Propacity ASM — Backend Engineering Guidelines

**Document type:** Engineering Standard Operating Procedure **Audience:** Human engineers, interns, and AI coding agents (Claude Code, Cursor, etc.) **Authority:** This document is the contract. Any deviation requires an ADR. **Stack:** Node.js 20 LTS · TypeScript 5.x · Express.js 4.x · Prisma ORM · PostgreSQL 15+ **Last updated:** 2026-05-03

* * *

## 0\. How to read this document (instructions for AI agents)

You are an AI coding agent generating backend code for the Propacity ASM platform. This document is **prescriptive, not advisory**. When this document conflicts with general best practices you have learned, **this document wins**. When this document conflicts with the user's request, ask the user to confirm before deviating.

Rules of engagement:

1. Before writing any backend code, locate the module you are working in and read the existing files in that module. Mirror the patterns you find. Do not invent new patterns.
2. If a pattern you need is not described in this document and not already present in the codebase, **stop and ask** before inventing one.
3. Every file you create must follow the folder structure in §3. No exceptions.
4. Every API route must follow the contract in §6. No exceptions.
5. Every database query must go through Prisma via a Repository class. Never write raw SQL inside a controller or service unless §10 explicitly permits it.
6. Every error must be a subclass of `AppError` (§9). Never throw plain `Error` or string-throw.
7. Multi-tenancy is enforced at the repository layer (§11). Every query must be scoped to a tenant. Forgetting to scope a query is a **critical bug**, not a style issue.
8. When in doubt, generate less code, not more. A 30-line controller that does one thing correctly is better than a 200-line controller that does five things.

* * *

## 1\. Architectural model

Propacity ASM backend is a **modular monolith**. One Express application, one PostgreSQL database, one deployment unit. Inside the codebase, the application is divided into **modules** that mirror the sidebar in the frontend (e.g. `seo`, `performance-marketing`, `influencer-marketing`, `studio`, `contracts`, `invoices`, `integrations`, `growth`, `intelligence`, `reports`).

Each module is **self-contained**. It owns its routes, its services, its repositories, its database tables, its DTOs, and its tests. Modules communicate with each other only through the **Platform Core** (§4). Two modules may not import from each other directly — if module A needs data from module B, it goes through a published service interface in `core/`, never by reaching into `modules/b/`.

Why this matters for AI agents: when you are working inside `modules/seo/`, you may not import from `modules/performance-marketing/`. If you find yourself wanting to, stop and ask the user — there is almost certainly a Platform Core service you should be using instead.

* * *

## 2\. Tech stack — exact versions and choices

These are not suggestions. Use exactly these libraries.

| Concern | Library | Version | Notes |
| --- | --- | --- | --- |
| Runtime | Node.js | 20 LTS | No 18, no 22 |
| Language | TypeScript | 5.4+ | `strict: true` always |
| HTTP framework | Express | 4.19+ | Express 5 is not approved yet |
| ORM | Prisma | 5.x | Single `schema.prisma` file at repo root |
| Database | PostgreSQL | 15+ | Single database, schema-per-environment |
| Validation | Zod | 3.x | All inbound payloads validated with Zod |
| Auth (JWT) | `jsonwebtoken` | 9.x | RS256 only, never HS256 |
| Password hashing | `argon2` | latest | Never bcrypt, never plain SHA |
| Logger | `pino` | 9.x | Structured JSON logs only |
| Testing | Vitest | latest | Jest is not used |
| HTTP test | `supertest` | latest | For integration tests |
| Date/time | `date-fns` | 3.x | Never `moment`, never raw `Date` math |
| ID generation | `cuid2` | latest | Never `uuid`, never auto-increment for public IDs |
| Background jobs | BullMQ | 5.x | Backed by Redis |
| File uploads | `multer` + S3 SDK v3 | latest | Direct-to-S3 for files >5MB |
| HTTP client | `undici` (built-in `fetch`) | —   | No `axios`, no `node-fetch` |

If you need a library not on this list, **ask before installing**. Do not `npm install` whatever StackOverflow suggests.

* * *

## 3\. Folder structure — canonical and non-negotiable

```
asm-backend/
├── prisma/
│   ├── schema.prisma          # Single schema file, organized by module via comments
│   ├── migrations/            # Prisma-managed
│   └── seed.ts                # Idempotent seed script
├── src/
│   ├── index.ts               # Entry point. Only bootstraps app.ts and starts server.
│   ├── app.ts                 # Express app construction. Middleware order is sacred.
│   ├── core/                  # Platform Core. Shared services consumed by all modules.
│   │   ├── auth/              # JWT issue/verify, session, RBAC enforcement
│   │   ├── tenant/            # Tenant resolution, tenant context
│   │   ├── audit/             # Audit log writer (every mutation logs here)
│   │   ├── events/            # In-process event bus (typed)
│   │   ├── jobs/              # BullMQ queue setup
│   │   ├── storage/           # S3 abstraction
│   │   ├── ai/                # Copilot SDK, embeddings, Memory Vault interface
│   │   ├── errors/            # AppError hierarchy + global handler
│   │   ├── http/              # Response shapes, request types
│   │   ├── prisma/            # PrismaClient singleton + middleware
│   │   ├── logger/            # pino instance + request logger
│   │   ├── config/            # Typed env loader
│   │   └── validation/        # Zod helpers, common schemas
│   ├── modules/
│   │   ├── seo/
│   │   │   ├── seo.routes.ts          # Route registration. Thin.
│   │   │   ├── seo.controller.ts      # HTTP layer. Thin.
│   │   │   ├── seo.service.ts         # Business logic. Most of the code lives here.
│   │   │   ├── seo.repository.ts      # All Prisma calls. The only file that imports prisma.
│   │   │   ├── seo.dto.ts             # Zod schemas + inferred TypeScript types
│   │   │   ├── seo.errors.ts          # Module-specific AppError subclasses
│   │   │   ├── seo.events.ts          # Event names + payload types this module emits
│   │   │   ├── seo.policy.ts          # Authorization rules for this module
│   │   │   ├── __tests__/
│   │   │   │   ├── seo.service.test.ts
│   │   │   │   └── seo.routes.test.ts
│   │   │   └── README.md              # What this module does. Required.
│   │   ├── performance-marketing/
│   │   ├── influencer-marketing/
│   │   ├── studio/
│   │   ├── contracts/
│   │   ├── invoices/
│   │   ├── integrations/
│   │   └── ...
│   └── workers/
│       ├── index.ts                   # Worker process entry
│       └── handlers/                  # Job handlers, one file per queue
├── tests/
│   ├── helpers/
│   └── fixtures/
├── .env.example
├── package.json
├── tsconfig.json
├── eslint.config.js
└── CLAUDE.md                          # Points AI agents to this document

```

**Rules:**

- A new module = a new folder under `src/modules/`. No exceptions.
- A new module folder must contain **at minimum** the seven `module-name.*.ts` files listed above plus a `README.md` and a `__tests__/` folder. Empty stub files are fine; missing files are not.
- Code that is shared across modules goes in `src/core/`. If you find yourself copy-pasting between two modules, that code belongs in `core/`. Stop and ask.
- Never create a folder named `utils/`, `helpers/`, `lib/`, or `common/`. These are dumping grounds. If you need a utility, it belongs in a named subfolder of `core/` (e.g. `core/dates/`, `core/currency/`).

* * *

## 4\. Module anatomy — the seven-file rule

Every module has exactly seven concern-files plus tests and a README. Each file has one job. **Do not merge concerns.**

### `module.routes.ts`

Registers Express routes. **Thin.** No business logic. No data access.

```ts
// src/modules/seo/seo.routes.ts
import { Router } from "express";
import { authGuard } from "@/core/auth/auth.guard";
import { tenantGuard } from "@/core/tenant/tenant.guard";
import { validate } from "@/core/validation/validate";
import { SeoController } from "./seo.controller";
import { CreateKeywordSchema, ListKeywordsQuerySchema } from "./seo.dto";

export function registerSeoRoutes(router: Router, controller: SeoController) {
  const r = Router();

  r.use(authGuard);
  r.use(tenantGuard);

  r.get("/keywords", validate({ query: ListKeywordsQuerySchema }), controller.listKeywords);
  r.post("/keywords", validate({ body: CreateKeywordSchema }), controller.createKeyword);
  r.get("/keywords/:id", controller.getKeyword);
  r.delete("/keywords/:id", controller.deleteKeyword);

  router.use("/seo", r);
}

```

Rules:

- `authGuard` and `tenantGuard` are applied at the module router level, not per-route. If a route must be public, it lives in a separate sub-router with a comment explaining why.
- All inbound validation happens here via `validate(...)` middleware. Controllers receive **already-validated** input.
- Route paths use kebab-case. `/keyword-rankings`, never `/keywordRankings`.

### `module.controller.ts`

HTTP layer. **Thin.** Translates HTTP → service call → HTTP response. Contains zero business logic.

```ts
// src/modules/seo/seo.controller.ts
import { Request, Response, NextFunction } from "express";
import { ok, created, noContent } from "@/core/http/response";
import { SeoService } from "./seo.service";
import { CreateKeywordInput, ListKeywordsQuery } from "./seo.dto";

export class SeoController {
  constructor(private readonly service: SeoService) {}

  listKeywords = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.validated.query as ListKeywordsQuery;
      const result = await this.service.listKeywords(req.tenant.id, query);
      return ok(res, result);
    } catch (err) {
      next(err);
    }
  };

  createKeyword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const input = req.validated.body as CreateKeywordInput;
      const keyword = await this.service.createKeyword(req.tenant.id, req.user.id, input);
      return created(res, keyword);
    } catch (err) {
      next(err);
    }
  };
}

```

Rules:

- Controllers are classes with arrow-function methods (preserves `this` binding for Express handlers).
- Controllers always call `next(err)` on error. Never `res.status(500).send(...)` directly. The global error handler (§9) formats the response.
- Controllers never call Prisma. Ever.
- Controllers never call other modules' services. Cross-module logic lives in `core/` or in domain events (§7).

### `module.service.ts`

Business logic lives here. **Most of the module's code is in this file.** Pure functions where possible. Side effects through injected dependencies only.

```ts
// src/modules/seo/seo.service.ts
import { SeoRepository } from "./seo.repository";
import { CreateKeywordInput, ListKeywordsQuery, Keyword } from "./seo.dto";
import { KeywordAlreadyExistsError } from "./seo.errors";
import { AuditService } from "@/core/audit/audit.service";
import { EventBus } from "@/core/events/event-bus";
import { SeoEvents } from "./seo.events";

export class SeoService {
  constructor(
    private readonly repo: SeoRepository,
    private readonly audit: AuditService,
    private readonly events: EventBus,
  ) {}

  async listKeywords(tenantId: string, query: ListKeywordsQuery): Promise<Keyword[]> {
    return this.repo.findKeywords(tenantId, query);
  }

  async createKeyword(tenantId: string, userId: string, input: CreateKeywordInput): Promise<Keyword> {
    const existing = await this.repo.findKeywordByPhrase(tenantId, input.phrase);
    if (existing) throw new KeywordAlreadyExistsError(input.phrase);

    const keyword = await this.repo.createKeyword(tenantId, input);

    await this.audit.log({
      tenantId,
      actorId: userId,
      action: "seo.keyword.created",
      resourceType: "keyword",
      resourceId: keyword.id,
      metadata: { phrase: keyword.phrase },
    });

    this.events.emit(SeoEvents.KeywordCreated, { tenantId, keyword });

    return keyword;
  }
}

```

Rules:

- Services accept primitives (IDs, DTOs), not Express `Request` objects. A service must be callable from a controller, a worker, or a test without modification.
- Every mutation writes an audit log entry. No exceptions.
- Every domain-significant event is emitted via the event bus so other modules can react asynchronously.
- Services may call other services from the same module. Services may call `core/` services freely. Services **may not** import from another module's folder.

### `module.repository.ts`

The **only** file in the module that imports `prisma`. All database access goes through here.

```ts
// src/modules/seo/seo.repository.ts
import { prisma } from "@/core/prisma/client";
import { CreateKeywordInput, ListKeywordsQuery, Keyword } from "./seo.dto";

export class SeoRepository {
  async findKeywords(tenantId: string, query: ListKeywordsQuery): Promise<Keyword[]> {
    return prisma.seoKeyword.findMany({
      where: {
        tenantId,
        ...(query.search && { phrase: { contains: query.search, mode: "insensitive" } }),
      },
      orderBy: { createdAt: "desc" },
      take: query.limit ?? 50,
      skip: query.offset ?? 0,
    });
  }

  async findKeywordByPhrase(tenantId: string, phrase: string): Promise<Keyword | null> {
    return prisma.seoKeyword.findFirst({ where: { tenantId, phrase } });
  }

  async createKeyword(tenantId: string, input: CreateKeywordInput): Promise<Keyword> {
    return prisma.seoKeyword.create({
      data: { tenantId, ...input },
    });
  }
}

```

Rules:

- **Every query must include `tenantId` in the `where` clause.** This is the multi-tenancy contract. A query without `tenantId` is a bug.
- Repositories never throw `AppError` subclasses. They return `null` for "not found" and let the service decide what to do. Repositories may throw raw Prisma errors which are translated by the global error handler (§9).
- Repositories never call other repositories or services. They are the leaf of the call graph.
- Pagination uses `limit` and `offset`. No cursor pagination unless explicitly required and ADR-approved.

### `module.dto.ts`

Zod schemas + their inferred TypeScript types. **The DTO is the source of truth for the shape of any object crossing a module boundary** (HTTP, events, queue messages).

```ts
// src/modules/seo/seo.dto.ts
import { z } from "zod";

export const CreateKeywordSchema = z.object({
  phrase: z.string().min(1).max(200),
  intent: z.enum(["informational", "transactional", "navigational"]),
  priority: z.number().int().min(1).max(5).default(3),
});
export type CreateKeywordInput = z.infer<typeof CreateKeywordSchema>;

export const ListKeywordsQuerySchema = z.object({
  search: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  offset: z.coerce.number().int().min(0).default(0),
});
export type ListKeywordsQuery = z.infer<typeof ListKeywordsQuerySchema>;

export const KeywordSchema = z.object({
  id: z.string(),
  tenantId: z.string(),
  phrase: z.string(),
  intent: z.enum(["informational", "transactional", "navigational"]),
  priority: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export type Keyword = z.infer<typeof KeywordSchema>;

```

Rules:

- Every DTO has a Zod schema. The TypeScript type is **always** inferred via `z.infer`. Never hand-write the type.
- Naming: `XxxSchema` for the Zod schema, `XxxInput`/`Xxx` for the inferred type.
- Output DTOs (what the API returns) must be defined just like input DTOs. Never `res.json(prismaModel)` directly — go through a typed mapper if the Prisma row shape and the API row shape differ.

### `module.errors.ts`

All custom errors for the module. Subclasses of `AppError`.

```ts
// src/modules/seo/seo.errors.ts
import { AppError } from "@/core/errors/app-error";

export class KeywordAlreadyExistsError extends AppError {
  constructor(phrase: string) {
    super({
      code: "SEO_KEYWORD_ALREADY_EXISTS",
      message: `Keyword "${phrase}" already exists for this tenant.`,
      statusCode: 409,
      publicMessage: "This keyword is already being tracked.",
    });
  }
}

```

### `module.events.ts`

Names and payload types for events this module emits.

```ts
// src/modules/seo/seo.events.ts
import { Keyword } from "./seo.dto";

export const SeoEvents = {
  KeywordCreated: "seo.keyword.created",
  KeywordDeleted: "seo.keyword.deleted",
  RankingUpdated: "seo.ranking.updated",
} as const;

export type SeoEventPayloads = {
  [SeoEvents.KeywordCreated]: { tenantId: string; keyword: Keyword };
  [SeoEvents.KeywordDeleted]: { tenantId: string; keywordId: string };
  [SeoEvents.RankingUpdated]: { tenantId: string; keywordId: string; rank: number };
};

```

### `module.policy.ts`

Authorization rules. Pure functions. Called from the service before any sensitive operation.

```ts
// src/modules/seo/seo.policy.ts
import { User } from "@/core/auth/types";

export const SeoPolicy = {
  canCreateKeyword(user: User): boolean {
    return user.permissions.includes("seo.keyword.create");
  },
  canDeleteKeyword(user: User, keyword: { createdById: string }): boolean {
    return user.permissions.includes("seo.keyword.delete") || user.id === keyword.createdById;
  },
};

```

* * *

## 5\. Wiring — how modules are registered

A single `app.ts` wires modules into the Express app. **Wiring is explicit. No auto-discovery.** When a new module is added, an intern must add one line to `app.ts`. This is intentional — it forces visibility.

```ts
// src/app.ts
import express, { Router } from "express";
import { errorHandler } from "@/core/errors/error-handler";
import { requestLogger } from "@/core/logger/request-logger";
import { eventBus } from "@/core/events/event-bus";
import { auditService } from "@/core/audit/audit.service";

import { registerSeoRoutes } from "@/modules/seo/seo.routes";
import { SeoController } from "@/modules/seo/seo.controller";
import { SeoService } from "@/modules/seo/seo.service";
import { SeoRepository } from "@/modules/seo/seo.repository";
// ... other modules

export function createApp() {
  const app = express();

  app.use(express.json({ limit: "1mb" }));
  app.use(requestLogger);

  const apiRouter = Router();

  // SEO module wiring
  const seoRepo = new SeoRepository();
  const seoService = new SeoService(seoRepo, auditService, eventBus);
  const seoController = new SeoController(seoService);
  registerSeoRoutes(apiRouter, seoController);

  // (other modules wired the same way)

  app.use("/api/v1", apiRouter);
  app.use(errorHandler);

  return app;
}

```

Rules:

- All API routes live under `/api/v1/`. Versioning is at the URL prefix level. When v2 is needed, mount a parallel `/api/v2/` and migrate routes one at a time.
- Manual dependency injection. No DI containers (InversifyJS, tsyringe, etc.) — they obscure what depends on what and AI agents struggle with their conventions.

* * *

## 6\. API contract — the response envelope

Every API response — success or error — uses this exact shape:

```ts
// Success
{
  "ok": true,
  "data": <T>,
  "meta"?: { "pagination": { "limit": 50, "offset": 0, "total": 234 } }
}

// Error
{
  "ok": false,
  "error": {
    "code": "SEO_KEYWORD_ALREADY_EXISTS",
    "message": "This keyword is already being tracked.",
    "details"?: { ... }
  }
}

```

Status codes:

- `200` GET success
- `201` POST that creates a resource
- `204` DELETE success (no body)
- `400` Validation error (Zod failure)
- `401` Not authenticated
- `403` Authenticated but not authorized
- `404` Resource not found or not visible to tenant
- `409` Conflict (duplicate, state violation)
- `422` Semantic validation error (input is well-formed but business rule rejects it)
- `429` Rate limited
- `500` Unexpected server error
- `503` Dependency unavailable

Helpers in `core/http/response.ts`:

```ts
export const ok = <T>(res: Response, data: T, meta?: object) =>
  res.status(200).json({ ok: true, data, ...(meta && { meta }) });

export const created = <T>(res: Response, data: T) =>
  res.status(201).json({ ok: true, data });

export const noContent = (res: Response) => res.status(204).send();

```

**Never** call `res.send()`, `res.json()`, or `res.status().json()` directly in a controller. Always use the helper. AI agents: if the helper you need does not exist, add it to `core/http/response.ts`, do not inline the response shape.

Naming conventions:

- URL paths: kebab-case plural nouns (`/keyword-rankings`, `/influencer-campaigns`)
- Query params: camelCase (`?clientWorkspaceId=...&dateFrom=...`)
- Request/response body fields: camelCase
- Resource IDs: opaque cuid2 strings, never sequential integers in public APIs

* * *

## 7\. Cross-module communication

Two modules **never** import from each other. There are exactly three legal ways for module A to interact with module B:

1. **Synchronous read** through a Platform Core service. If module A needs to read data owned by module B, that data must be exposed via a service in `core/` (e.g. `core/clients/clients.service.ts`). The Platform Core team owns these interfaces.
2. **Asynchronous events.** Module A emits an event. Module B subscribes. Use this for "when X happens in module A, module B should react" flows. Events are typed via `SeoEventPayloads`\-style declarations.
3. **Background jobs.** Module A enqueues a job. Module B's worker handles it. Use this for slow or retryable cross-module work.

Rules:

- A `grep` for `from "@/modules/X"` inside `src/modules/Y/` must return zero results for any X ≠ Y. This is enforced by a CI lint rule (`eslint-plugin-boundaries` or equivalent).
- The event bus is in-process for now. Treat it as if it were a real message queue — event handlers must be idempotent.

* * *

## 8\. Validation

Every inbound payload — body, query, path params — is validated via Zod at the route level. A controller must never see unvalidated input.

```ts
// src/core/validation/validate.ts
import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import { ValidationError } from "@/core/errors/app-error";

type Schemas = { body?: ZodSchema; query?: ZodSchema; params?: ZodSchema };

export const validate = (schemas: Schemas) => (req: Request, _res: Response, next: NextFunction) => {
  try {
    req.validated = {
      body: schemas.body ? schemas.body.parse(req.body) : undefined,
      query: schemas.query ? schemas.query.parse(req.query) : undefined,
      params: schemas.params ? schemas.params.parse(req.params) : undefined,
    };
    next();
  } catch (err) {
    next(new ValidationError(err));
  }
};

```

The `req.validated` object is the **only** place a controller reads input from. Never read `req.body`, `req.query`, or `req.params` directly in a controller.

* * *

## 9\. Errors

One base class, one global handler, one response shape.

```ts
// src/core/errors/app-error.ts
export interface AppErrorParams {
  code: string;          // SCREAMING_SNAKE machine code, prefixed with module
  message: string;       // Internal message (logged, never sent to client)
  publicMessage: string; // Safe to show to users
  statusCode: number;
  details?: Record<string, unknown>;
}

export class AppError extends Error {
  readonly code: string;
  readonly publicMessage: string;
  readonly statusCode: number;
  readonly details?: Record<string, unknown>;

  constructor(params: AppErrorParams) {
    super(params.message);
    this.code = params.code;
    this.publicMessage = params.publicMessage;
    this.statusCode = params.statusCode;
    this.details = params.details;
  }
}

```

The global error handler (`src/core/errors/error-handler.ts`):

- If error is `AppError`: respond with `{ ok: false, error: { code, message: publicMessage, details } }` and the appropriate status.
- If error is a `ZodError`: respond with `400` and a flattened error map.
- If error is a `Prisma.PrismaClientKnownRequestError`: translate `P2002` (unique violation) to a `ConflictError`, `P2025` (not found) to a `NotFoundError`, others to `500`.
- Otherwise: log full stack at `error` level, respond with `500` and the generic public message `"Something went wrong on our end."`. Never leak stack traces or internal messages to clients.

**Rules:**

- `throw new Error("...")` in module code is forbidden. CI lints for this.
- Error codes are unique per error type and prefixed by module: `SEO_KEYWORD_ALREADY_EXISTS`, `INVOICES_PAYMENT_FAILED`, `AUTH_INVALID_TOKEN`.
- The internal `message` may contain debugging context (IDs, values). The `publicMessage` must never contain user IDs, internal IDs, or anything an attacker could pivot on.

* * *

## 10\. Database — Prisma + PostgreSQL

### Schema organization

One `schema.prisma` file, organized by module via section comments.

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// =============================================================
// CORE — tenants, users, audit, files
// =============================================================

model Tenant {
  id        String   @id @default(cuid())
  name      String
  slug      String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  users     User[]
}

// =============================================================
// MODULE: SEO
// =============================================================

model SeoKeyword {
  id        String   @id @default(cuid())
  tenantId  String
  tenant    Tenant   @relation(fields: [tenantId], references: [id], onDelete: Cascade)
  phrase    String
  intent    String   // 'informational' | 'transactional' | 'navigational'
  priority  Int      @default(3)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([tenantId, phrase])
  @@index([tenantId, createdAt])
  @@map("seo_keywords")
}

```

### Naming conventions

- Prisma model names: `PascalCase` singular (`SeoKeyword`, not `SeoKeywords`).
- Database table names (`@@map`): `snake_case` plural, prefixed with module name (`seo_keywords`, `pm_campaigns`, `inv_invoices`). Module prefixes prevent collisions and make raw SQL debugging humane.
- Field names in Prisma: `camelCase`. Prisma maps to `snake_case` columns automatically when configured; use `@map` per-field if you need to override.
- Foreign keys: `<entity>Id` (`tenantId`, `userId`, `clientWorkspaceId`).

### Mandatory columns on every table

Every table that holds tenant data must have:

- `id String @id @default(cuid())` — opaque public ID
- `tenantId String` — the tenant owner (with FK to `Tenant`)
- `createdAt DateTime @default(now())`
- `updatedAt DateTime @updatedAt`

Every table that supports soft-delete adds:

- `deletedAt DateTime?` — null means active
- `deletedById String?` — who deleted it

Tables that don't carry tenant data are limited to: `Tenant`, `User`, `Session`, `AuditLog` (system-wide indices), and global lookup tables. Adding a new tenant-less table requires an ADR.

### Indexing

- Every `tenantId` column has a compound index with the most common sort/filter column: `@@index([tenantId, createdAt])`.
- Every foreign key column gets an index. Prisma does not create these automatically.
- Unique constraints scoped to a tenant are compound: `@@unique([tenantId, slug])`.
- Do not add an index speculatively. Every index slows writes. If you're not sure an index is needed, leave it off — we'll add it when query plans show a sequential scan in production.

### Migrations

- Every schema change goes through `prisma migrate dev` locally and `prisma migrate deploy` in CI. Never `prisma db push` against any non-local database.
- Migration names are descriptive: `2026_05_03_add_seo_keyword_priority`, never `update_schema`.
- Backwards-incompatible migrations (dropping a column, renaming a column, narrowing a type) follow the **expand-contract** pattern:
    1. **Expand:** add the new column, dual-write from app code, backfill in a separate migration.
    2. **Migrate readers:** switch reads to the new column, deploy.
    3. **Contract:** drop the old column in a later release.
- Never edit a migration that has been merged to `main`. Add a new migration to fix what you got wrong.

### Transactions

- Use `prisma.$transaction` when two or more writes must succeed or fail together.
- Transactions live in the **service** layer, not the repository. The service composes repository calls inside `prisma.$transaction([...])` or the interactive variant.
- Keep transactions short. Never await a network call (HTTP, S3, queue) inside a transaction.

### Raw SQL

Permitted only for:

- Reporting queries that Prisma cannot express efficiently (use `prisma.$queryRaw` with parameterized inputs only).
- Bulk operations where Prisma's per-row overhead is unacceptable.

Forbidden:

- String-concatenated SQL. Always parameterized via the tagged template (`prisma.$queryRaw\`SELECT ... WHERE id = ${id}\`\`).
- Raw SQL in a controller. Raw SQL lives in the repository, behind a typed method.

* * *

## 11\. Multi-tenancy — non-negotiable rules

Propacity ASM is multi-tenant at two levels: **agency** (the paying customer) and **client workspace** (the developer brand the agency manages). The platform isolates agencies from each other absolutely. Within an agency, users are scoped to one or more client workspaces by their role.

### The contract

1. Every table that holds business data has a `tenantId` column. (`tenantId` = agency ID. The intra-agency `clientWorkspaceId` is a separate column on tables that are scoped to a specific client.)
2. Every query — find, create, update, delete — must filter on `tenantId`. There is no global query.
3. The `tenantId` is resolved from the authenticated user at the start of every request by `tenantGuard` and exposed as `req.tenant.id`. Controllers pass it down to services. Services pass it down to repositories. Repositories use it in the `where` clause.
4. **An agency user can never read or write data belonging to another agency.** This is the single most important security invariant in the platform.

### Enforcement

Two layers of defense:

**Layer 1 — Application:** Every repository method takes `tenantId` as its first argument. CI lints catch repository methods that don't.

**Layer 2 — Database:** PostgreSQL Row-Level Security policies on every tenant-scoped table. Even if a developer forgets the `tenantId` filter in the application, the database refuses to return rows from other tenants.

```sql
ALTER TABLE seo_keywords ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation ON seo_keywords
  USING (tenant_id = current_setting('app.tenant_id')::text);

```

The Prisma client is wrapped in middleware that sets `app.tenant_id` per connection at the start of each request. (Setup details live in `core/prisma/`.)

### Forbidden patterns

- A repository method without `tenantId` in its signature. **Critical bug.**
- A Prisma query without `tenantId` in `where`. **Critical bug.**
- Passing `tenantId` from a request body or query string instead of from `req.tenant.id`. **Critical bug — this is a tenant-spoofing vulnerability.**
- Using `prisma.$queryRawUnsafe` on tenant-scoped tables. Forbidden.

* * *

## 12\. Authentication and authorization

### Authentication

- Sessions are JWT access tokens (15-minute lifetime) + refresh tokens (30-day, rotating, stored as HttpOnly cookies).
- JWTs are signed with RS256. Public key is distributed to services that need to verify; private key lives only in the auth issuer.
- Passwords are hashed with `argon2id`. No exceptions.
- Every login, logout, and refresh is audit-logged.

### `authGuard` middleware

Verifies the access token, loads the user, attaches `req.user` and `req.tenant`. Rejects with `401` if missing/invalid.

### `tenantGuard` middleware

Confirms `req.user.tenantId` is set and active. Sets the database connection's `app.tenant_id`. Rejects with `401` or `403` if invalid.

### Authorization

Role-based with permission strings. A user has roles (`agency_admin`, `agency_member`, `client_viewer`, etc.) which expand to a flat set of permission strings (`seo.keyword.create`, `invoices.invoice.send`, etc.).

Authorization checks happen in the **service** layer, not the controller, because the service is the only layer with enough context to make the decision (it has the resource being acted on, not just the request).

```ts
async deleteKeyword(tenantId: string, user: User, keywordId: string) {
  const keyword = await this.repo.findKeywordById(tenantId, keywordId);
  if (!keyword) throw new KeywordNotFoundError(keywordId);

  if (!SeoPolicy.canDeleteKeyword(user, keyword)) {
    throw new ForbiddenError("seo.keyword.delete");
  }

  await this.repo.deleteKeyword(tenantId, keywordId);
}

```

* * *

## 13\. Configuration and environment

All env vars are validated at boot. Boot fails fast if a required var is missing.

```ts
// src/core/config/index.ts
import { z } from "zod";

const ConfigSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "staging", "production"]),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  S3_BUCKET: z.string(),
  S3_REGION: z.string(),
  // ...
});

export const config = ConfigSchema.parse(process.env);

```

Rules:

- Never read `process.env` outside `core/config/`.
- Never log the value of any secret (database URL, JWT key, third-party API key). The logger has a redaction list — add new secret keys to it.
- Provide a complete `.env.example` with every variable. AI agents creating new env vars must update both `.env.example` and the Zod schema.

* * *

## 14\. Logging, observability, and audit

Three distinct concerns. Do not confuse them.

**Logs** (pino, structured JSON) — runtime debugging, not for compliance.

- Every request gets a `requestId` (set by `requestLogger` middleware).
- Log levels: `trace`, `debug`, `info`, `warn`, `error`, `fatal`. Default in production is `info`.
- Never `console.log`. CI lints for it. Use `req.log.info({...}, "message")`.

**Metrics** (Prometheus-format, exposed on `/metrics` on a separate internal port) — counts, durations, gauges.

- HTTP request count and duration by route.
- DB query duration histogram.
- Job queue depth and processing time.
- Each module may add module-specific metrics under a namespace (`seo_*`, `pm_*`).

**Audit log** (database table, written via `core/audit/audit.service.ts`) — compliance trail.

- Every mutation writes an `AuditLog` row: who, when, what, on which resource, with what before/after diff.
- Audit logs are append-only. Never updated. Never deleted (retention is governed by policy, not by application code).
- Audit log writes happen inside the same transaction as the mutation when possible.

* * *

## 15\. Background jobs

Use BullMQ. One queue per concern (e.g. `seo-rankings-fetch`, `invoices-send-email`, `integrations-sync`).

```ts
// src/modules/seo/seo.service.ts
await this.jobs.queue("seo-rankings-fetch").add("fetch", { tenantId, keywordId }, {
  attempts: 5,
  backoff: { type: "exponential", delay: 1000 },
  removeOnComplete: 100,
  removeOnFail: 1000,
});

```

Rules:

- Job handlers live in `src/workers/handlers/`. Each handler is a function that takes a typed payload.
- Job handlers must be **idempotent**. They will be retried.
- Long-running work (>5 seconds) goes through a job. HTTP handlers must return in <2 seconds.
- Jobs that touch tenant data must receive `tenantId` in their payload and set the connection-level tenant context at the start of the handler.

* * *

## 16\. Testing

Three tiers, in order of preference: **unit**, **integration**, **e2e**.

**Unit tests** (Vitest) — services and pure functions. Mock the repository. Fast, run on every commit.

- File pattern: `*.test.ts` next to the source under `__tests__/`.
- Coverage target: 80% for service files, 100% for policy files. Repositories and controllers are covered by integration tests, not unit tests.

**Integration tests** (Vitest + supertest + a real test database) — the route → controller → service → repository → database path.

- Spin up a fresh PostgreSQL schema per test file. Use `prisma migrate deploy` against it.
- Seed the minimum data per test. Don't share fixtures across files.
- Every endpoint has at least one happy-path and one auth-failure integration test.

**End-to-end tests** — Playwright tests on the deployed staging environment. Out of scope for module interns; owned by the platform team.

Rules:

- A PR that adds a new endpoint without integration tests is rejected automatically by CI.
- Tests must not depend on test execution order.
- Tests must clean up after themselves (transaction-per-test or explicit teardown).

* * *

## 17\. Things AI agents must never do

This is the hard list. Violating any of these is a critical bug, not a style issue.

1. **Never write a Prisma query without `tenantId` in the `where` clause** for any tenant-scoped table.
2. **Never read `tenantId` from a request body or query string.** Always from `req.tenant.id`.
3. **Never** `throw new Error("...")`. Use a subclass of `AppError`.
4. **Never** call `res.send`, `res.json`, or `res.status().json()` directly. Use the helpers in `core/http/response.ts`.
5. **Never** import from another module's folder (`from "@/modules/X"` inside `src/modules/Y/`).
6. **Never** put business logic in a controller.
7. **Never** call Prisma from a controller or service. Go through the repository.
8. **Never** read `req.body`, `req.query`, or `req.params` in a controller. Use `req.validated`.
9. **Never** log secrets, JWTs, passwords, or full request bodies of mutation endpoints.
10. **Never** install a library without checking §2. If the library you need isn't on the list, stop and ask.
11. **Never** create a folder named `utils/`, `helpers/`, `lib/`, or `common/`.
12. **Never** edit a migration after it's been merged to `main`. Add a new one.
13. **Never** use `prisma.$queryRawUnsafe` on tenant-scoped tables.
14. **Never** skip an audit log on a mutation.
15. **Never** assume an event will be processed exactly once. Handlers are idempotent.

If you find yourself wanting to do any of the above, **stop and ask the user.**

* * *

## 18\. Module README — required template

Every module's `README.md` must follow this structure. AI agents creating a new module must populate this file before writing code.

```markdown
# Module: <name>

## Purpose
One paragraph. What does this module do for the user?

## Owns (data)
List of Prisma models owned by this module. Models prefixed with the module
name (e.g. `SeoKeyword`, `SeoRanking`).

## Exposes (API)
List of HTTP routes mounted by this module, grouped by resource.

## Emits (events)
List of events from `module.events.ts`.

## Listens to (events)
List of events this module subscribes to and what it does on each.

## Depends on (Platform Core services)
Which `core/` services does this module use?

## Background jobs
List of BullMQ queues this module enqueues to or consumes from.

## Open questions
Anything ambiguous or pending decisions. AI agents must read this before
making changes.

```

* * *

## 19\. The CLAUDE.md pointer

The repo root `CLAUDE.md` is short and points here:

```markdown
# Claude Code instructions for asm-backend

This codebase is governed by **two authoritative documents**:

1. `docs/BACKEND_GUIDELINES.md` — read this in full before writing any code.
2. The module-specific `README.md` in the folder you are working in.

Before generating code:

- Identify the module folder you are working in.
- Read its `README.md`.
- Read at least one existing service file in that module to understand the patterns.
- If the change crosses module boundaries, stop and ask the user how to proceed.

Never invent a new pattern when an existing one applies. If you must invent,
flag it explicitly in your response so the reviewer can ADR it.

```

* * *