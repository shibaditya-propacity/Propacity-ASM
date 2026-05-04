# Propacity ASM — Frontend Engineering Guidelines

**Document type:** Engineering Standard Operating Procedure **Audience:** Human engineers, interns, and AI coding agents (Claude Code, Cursor, etc.) **Authority:** This document is the contract. Any deviation requires an ADR. **Stack:** React 18 · TypeScript 5.x · Vite · React Router 6 · TanStack Query 5 · Zustand · Tailwind CSS · shadcn/ui · React Hook Form + Zod **Last updated:** 2026-05-03

* * *

## 0\. How to read this document (instructions for AI agents)

You are an AI coding agent generating frontend code for the Propacity ASM platform. This document is **prescriptive, not advisory**. When this document conflicts with general best practices you have learned, **this document wins**. When this document conflicts with the user's request, ask the user to confirm before deviating.

Rules of engagement:

1. Before writing any frontend code, locate the module you are working in and read the existing files in that module. Mirror the patterns you find. Do not invent new patterns.
2. If a pattern you need is not described in this document and not already present in the codebase, **stop and ask** before inventing one.
3. Every component must follow the component hierarchy in §5. No exceptions.
4. Every piece of state must be classified as **server state**, **URL state**, **form state**, or **client UI state** (§7) and stored using the corresponding tool. No exceptions.
5. Every API call goes through TanStack Query via a typed hook (§8). Never call `fetch` directly from a component.
6. Every form uses React Hook Form + Zod, with the same Zod schema the backend uses (§9). No `useState` for form fields.
7. Every visual element must use design tokens from `@/styles/tokens` (§11). No hardcoded colors, spacing, or font sizes.
8. When in doubt, generate less code, not more. A 50-line component that does one thing correctly is better than a 300-line component that does five things.

* * *

## 1\. Architectural model

The Propacity ASM frontend is a **single-page React application** built with Vite. It is a **modular monolith on the frontend** — one app, one bundle, organized internally into modules that mirror the sidebar and the backend modules one-to-one.

The application has a stable **app shell** (sidebar, top header, Copilot panel, Client Workspace switcher, notifications) that wraps a **routed working area**. Each sidebar item maps to a module. Each module owns its routes, pages, components, hooks, types, and tests inside its own folder.

Two views, one shell: the platform serves both an **internal team view** and a **client-facing view** against the same API. The active view is determined at boot by the authenticated user's audience role and selects which sidebar items, pages, and components are mounted. Components must never branch on view inline (`if (isClient) ...`) — view-specific UI lives in separate components composed at the route level.

Why this matters for AI agents: when you are working inside `src/modules/seo/`, you may not import from `src/modules/performance-marketing/`. If you find yourself wanting to, stop and ask — there is almost certainly a Platform Core hook or component you should be using instead.

* * *

## 2\. Tech stack — exact versions and choices

These are not suggestions. Use exactly these libraries.

| Concern | Library | Version | Notes |
| --- | --- | --- | --- |
| Build tool | Vite | 5.x | No CRA. No Webpack. |
| Framework | React | 18.x | No 19 yet. Function components only — no class components. |
| Language | TypeScript | 5.4+ | `strict: true`, `noUncheckedIndexedAccess: true` |
| Routing | React Router | 6.22+ | Data routers (`createBrowserRouter`) only |
| Server state | TanStack Query | 5.x | The only way to fetch from the backend |
| Client state | Zustand | 4.x | For the small amount of cross-component client state we need |
| HTTP client | `fetch` (native) wrapped | —   | Never `axios`. The wrapper is in `core/api/client.ts`. |
| Forms | React Hook Form | 7.x | All forms. No exceptions. |
| Validation | Zod | 3.x | Same schemas as backend, shared via `@asm/schemas` package |
| Styling | Tailwind CSS | 3.4+ | Utility-first. No CSS Modules. No styled-components. |
| Component library | shadcn/ui | latest | Copy-pasted into the repo, not a dependency. Located in `core/ui/`. |
| Icons | `lucide-react` | latest | The only icon library |
| Charts | `recharts` | 2.x | The only chart library |
| Tables | TanStack Table | 8.x | For data tables with sort/filter/pagination |
| Date/time | `date-fns` | 3.x | Never `moment`, never `dayjs` |
| Date pickers | `react-day-picker` | latest | Wrapped in `core/ui/date-picker.tsx` |
| Toasts | `sonner` | latest | Wrapped in `core/ui/toast.tsx` |
| Animations | `framer-motion` | 11.x | Only for genuinely needed motion. Default to no animation. |
| Testing | Vitest + RTL | latest | Jest is not used |
| E2E | Playwright | latest | Owned by platform team |

If you need a library not on this list, **ask before installing**. Do not `npm install` whatever Stack Overflow suggests.

* * *

## 3\. Folder structure — canonical and non-negotiable

```
asm-frontend/
├── public/
├── src/
│   ├── main.tsx                      # Entry point. Mounts <App />.
│   ├── App.tsx                       # Top-level providers + router.
│   ├── router.tsx                    # createBrowserRouter config. Module routes registered here.
│   ├── core/                         # Platform Core. Shared building blocks.
│   │   ├── api/                      # API client, request/response types
│   │   │   ├── client.ts             # fetch wrapper, error normalization
│   │   │   ├── types.ts              # ApiResponse<T>, ApiError envelope
│   │   │   └── query-client.ts       # TanStack Query instance + defaults
│   │   ├── auth/                     # Auth provider, useAuth hook, guards
│   │   ├── tenant/                   # Current agency context, useTenant hook
│   │   ├── workspace/                # Current client workspace context, useWorkspace hook
│   │   ├── layout/                   # AppShell, Sidebar, TopHeader, EmptyState, ErrorBoundary
│   │   ├── ui/                       # shadcn/ui components copied in. Building blocks only.
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── data-table.tsx
│   │   │   ├── form.tsx              # RHF + Zod wiring
│   │   │   └── ...
│   │   ├── components/               # Cross-module composite components
│   │   │   ├── currency.tsx
│   │   │   ├── date-display.tsx
│   │   │   ├── status-badge.tsx
│   │   │   ├── confirm-dialog.tsx
│   │   │   └── ...
│   │   ├── hooks/                    # Cross-module hooks (useDebounce, useLocalStorage, etc.)
│   │   ├── ai/                       # Copilot SDK, useCopilot hook
│   │   ├── permissions/              # usePermission hook, <Can> component
│   │   ├── errors/                   # error mapping, <ErrorState>, <ErrorBoundary>
│   │   └── utils/                    # NAMED utility folders only — see §3 rules
│   │       ├── currency/
│   │       ├── dates/
│   │       └── strings/
│   ├── modules/
│   │   ├── seo/
│   │   │   ├── seo.routes.tsx                # Route definitions for this module
│   │   │   ├── pages/                        # One file per route. Top-level page components.
│   │   │   │   ├── seo-dashboard.page.tsx
│   │   │   │   ├── seo-keywords.page.tsx
│   │   │   │   └── seo-keyword-detail.page.tsx
│   │   │   ├── components/                   # Components used only inside this module
│   │   │   │   ├── keyword-table.tsx
│   │   │   │   ├── keyword-form.tsx
│   │   │   │   └── ranking-chart.tsx
│   │   │   ├── api/                          # TanStack Query hooks + request fns
│   │   │   │   ├── keys.ts                   # query key factory
│   │   │   │   ├── use-keywords.ts
│   │   │   │   ├── use-create-keyword.ts
│   │   │   │   └── use-delete-keyword.ts
│   │   │   ├── schemas/                      # Zod schemas (shared with backend ideally)
│   │   │   │   └── keyword.schema.ts
│   │   │   ├── types.ts                      # TypeScript types for this module
│   │   │   ├── store.ts                      # Zustand store (only if needed)
│   │   │   ├── seo.permissions.ts            # Permission constants for this module
│   │   │   ├── __tests__/
│   │   │   │   ├── keyword-form.test.tsx
│   │   │   │   └── seo-dashboard.test.tsx
│   │   │   └── README.md                     # What this module does. Required.
│   │   ├── performance-marketing/
│   │   ├── influencer-marketing/
│   │   └── ...
│   ├── styles/
│   │   ├── globals.css                       # Tailwind directives + base styles
│   │   ├── tokens.css                        # CSS custom properties — design tokens
│   │   └── tailwind.config.ts                # Maps tokens.css to Tailwind theme
│   └── types/
│       └── env.d.ts                          # Vite env types
├── tests/
│   └── helpers/
├── .env.example
├── package.json
├── tsconfig.json
├── eslint.config.js
├── vite.config.ts
└── CLAUDE.md                                 # Points AI agents to this document

```

**Rules:**

- A new module = a new folder under `src/modules/`. No exceptions.
- A new module folder must contain at minimum: `module.routes.tsx`, `pages/`, `components/`, `api/`, `types.ts`, a `README.md`, and a `__tests__/` folder. Empty stubs are fine; missing files are not.
- Code that is shared across modules goes in `src/core/`. If you find yourself copy-pasting between two modules, that code belongs in `core/`. Stop and ask.
- Never create a folder named `utils/`, `helpers/`, `lib/`, `misc/`, or `common/` at any level. The only `utils/` allowed is `src/core/utils/`, and inside it every utility must be in a **named subfolder** by domain (`currency/`, `dates/`, `strings/`).
- Never put a component file at the root of `src/`. Every component lives in either `core/` or a module.

* * *

## 4\. Module anatomy

Every module has the same shape. Each piece has one job. **Do not merge concerns.**

### `module.routes.tsx`

Defines this module's route subtree. **Thin.** No data fetching. No business logic.

```tsx
// src/modules/seo/seo.routes.tsx
import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import { ModuleLayout } from "@/core/layout/module-layout";
import { requirePermission } from "@/core/permissions/loaders";

const SeoDashboardPage = lazy(() => import("./pages/seo-dashboard.page"));
const SeoKeywordsPage = lazy(() => import("./pages/seo-keywords.page"));
const SeoKeywordDetailPage = lazy(() => import("./pages/seo-keyword-detail.page"));

export const seoRoutes: RouteObject = {
  path: "seo",
  element: <ModuleLayout module="seo" />,
  loader: requirePermission("seo.view"),
  children: [
    { index: true, element: <SeoDashboardPage /> },
    { path: "keywords", element: <SeoKeywordsPage /> },
    { path: "keywords/:keywordId", element: <SeoKeywordDetailPage /> },
  ],
};

```

Rules:

- Pages are always lazy-loaded. Each module ships as its own chunk.
- Permission guards are applied via the route `loader`, not inside components. Unauthorized users never even mount the page.
- Module routes are registered in `src/router.tsx` by adding the imported `seoRoutes` object to the `children` of the authenticated layout. Adding a module = one line in `router.tsx`. Explicit, never auto-discovered.

### `pages/*.page.tsx`

One file per route. The page component is the **composition root** for the route — it orchestrates data fetching and lays out the page-level components. Pages must remain thin.

```tsx
// src/modules/seo/pages/seo-keywords.page.tsx
import { PageHeader } from "@/core/layout/page-header";
import { KeywordTable } from "../components/keyword-table";
import { CreateKeywordButton } from "../components/create-keyword-button";
import { useKeywords } from "../api/use-keywords";
import { useKeywordsFilters } from "../hooks/use-keywords-filters";
import { LoadingState } from "@/core/components/loading-state";
import { ErrorState } from "@/core/components/error-state";
import { EmptyState } from "@/core/components/empty-state";

export default function SeoKeywordsPage() {
  const filters = useKeywordsFilters();
  const query = useKeywords(filters);

  return (
    <>
      <PageHeader
        title="Keywords"
        subtitle="Tracked search terms for this client"
        actions={<CreateKeywordButton />}
      />

      {query.isPending && <LoadingState />}
      {query.isError && <ErrorState error={query.error} onRetry={query.refetch} />}
      {query.isSuccess && query.data.length === 0 && (
        <EmptyState
          title="No keywords yet"
          description="Add the first keyword to start tracking rankings."
          action={<CreateKeywordButton />}
        />
      )}
      {query.isSuccess && query.data.length > 0 && (
        <KeywordTable keywords={query.data} />
      )}
    </>
  );
}

```

Rules:

- A page file's default export is the page component. Always default-exported (because they're lazy-loaded).
- Pages **always** render four explicit branches: loading, error, empty, success. Never just `query.data?.map(...)` — the empty state is a feature, not an edge case.
- A page is allowed to call multiple hooks and compose multiple components, but it should not exceed ~150 lines. If it does, extract sub-components into `components/`.

### `components/*.tsx`

Components used only inside this module. Each component file exports one component (with optional sub-components if tightly coupled).

Component naming: **kebab-case file names**, **PascalCase component names**.

- `keyword-table.tsx` exports `KeywordTable`
- `create-keyword-button.tsx` exports `CreateKeywordButton`

If a component is reused by another module, it must be moved to `core/components/`. CI lints catch cross-module imports.

### `api/*.ts`

TanStack Query hooks + the underlying request functions. Every API call the module makes lives here.

```ts
// src/modules/seo/api/keys.ts
export const seoKeys = {
  all: ["seo"] as const,
  keywords: (workspaceId: string) => [...seoKeys.all, "keywords", workspaceId] as const,
  keyword: (workspaceId: string, id: string) =>
    [...seoKeys.keywords(workspaceId), id] as const,
};

```

```ts
// src/modules/seo/api/use-keywords.ts
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { useWorkspace } from "@/core/workspace/use-workspace";
import { seoKeys } from "./keys";
import { Keyword, ListKeywordsQuery } from "../types";

export function useKeywords(query: ListKeywordsQuery) {
  const { workspaceId } = useWorkspace();
  return useQuery({
    queryKey: [...seoKeys.keywords(workspaceId), query],
    queryFn: () =>
      apiClient.get<Keyword[]>("/seo/keywords", { params: { ...query, workspaceId } }),
  });
}

```

```ts
// src/modules/seo/api/use-create-keyword.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/core/api/client";
import { useWorkspace } from "@/core/workspace/use-workspace";
import { toast } from "@/core/ui/toast";
import { seoKeys } from "./keys";
import { CreateKeywordInput, Keyword } from "../types";

export function useCreateKeyword() {
  const queryClient = useQueryClient();
  const { workspaceId } = useWorkspace();

  return useMutation({
    mutationFn: (input: CreateKeywordInput) =>
      apiClient.post<Keyword>("/seo/keywords", { ...input, workspaceId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: seoKeys.keywords(workspaceId) });
      toast.success("Keyword added");
    },
  });
}

```

Rules:

- One hook per file. File name matches hook name (`use-create-keyword.ts` → `useCreateKeyword`).
- Query keys come from a typed factory in `keys.ts`. Never inline a query key as a raw array in a component or hook.
- Mutations always invalidate the relevant query keys on success. If you don't invalidate, you've created stale-data bug.
- Every mutation hook surfaces success/failure feedback via `toast` unless the calling component handles it explicitly.
- Components never call `apiClient` directly. They go through hooks.

### `schemas/*.schema.ts`

Zod schemas, ideally shared with the backend via the `@asm/schemas` workspace package.

```ts
// src/modules/seo/schemas/keyword.schema.ts
import { z } from "zod";

export const CreateKeywordSchema = z.object({
  phrase: z.string().min(1, "Phrase is required").max(200),
  intent: z.enum(["informational", "transactional", "navigational"]),
  priority: z.number().int().min(1).max(5).default(3),
});

export type CreateKeywordInput = z.infer<typeof CreateKeywordSchema>;

```

The schema is the single source of truth. The TypeScript type is **always** inferred via `z.infer`. Never hand-write the type.

### `types.ts`

Module-level TypeScript types — typically just re-exports of `z.infer` types from schemas, plus any UI-only types.

### `module.permissions.ts`

Permission constants used by this module's UI guards. Mirrors backend permission strings.

```ts
// src/modules/seo/seo.permissions.ts
export const SeoPermissions = {
  View: "seo.view",
  KeywordCreate: "seo.keyword.create",
  KeywordDelete: "seo.keyword.delete",
} as const;

```

### `store.ts` (optional)

A Zustand store for module-local UI state that doesn't fit in a component. **Most modules will not need a store.** Add one only if multiple components share UI state that doesn't belong in a URL parameter.

* * *

## 5\. Component hierarchy and rules

Components are organized into four tiers. Each tier has rules about what it can import from.

### Tier 1 — UI primitives (`core/ui/`)

Buttons, inputs, dialogs, tables. Mostly shadcn/ui components copied into the repo. **Style-only, no business logic.** No data fetching. No knowledge of tenants, users, or domain entities.

### Tier 2 — Composite components (`core/components/`)

Components that combine Tier 1 primitives with cross-cutting platform concerns: a `<Currency>` component that knows about Indian formatting, a `<StatusBadge>` that maps domain statuses to colors, a `<DateDisplay>` that knows the IST timezone rule. Still no data fetching of business entities.

### Tier 3 — Module components (`modules/<m>/components/`)

Components that know about a specific module's domain. May call module hooks (`useKeywords()`). Composed from Tier 1 and Tier 2.

### Tier 4 — Pages (`modules/<m>/pages/`)

Composition roots. Orchestrate data fetching, lay out Tier 3 components, manage page-level URL state.

### Import rules (enforced by ESLint)

- Tier 1 imports from: nothing (just React, Tailwind, lucide-react)
- Tier 2 imports from: Tier 1, `core/utils/`, `core/hooks/`
- Tier 3 imports from: Tier 1, Tier 2, the **same module's** `api/`, `types`, `schemas/`
- Tier 4 imports from: Tier 1, Tier 2, the same module's Tier 3 components, the same module's `api/`
- **Modules never import from other modules.** Cross-module reuse moves the component to Tier 2.

### Component file rules

- One component per file. Tightly-coupled sub-components may live in the same file but are not exported.
- Component file: `kebab-case.tsx`. Component identifier: `PascalCase`.
- Props interfaces are named `<ComponentName>Props` and live in the same file.
- Always destructure props in the function signature: `function KeywordTable({ keywords, onSelect }: KeywordTableProps)`.
- A component must not exceed ~200 lines. If it grows past that, extract sub-components.
- A component must not take more than ~7 props. If it does, you're either lacking composition or it should accept a single object prop.
- Never use `React.FC`. Type the props directly.
- Never use default exports for module components. Default exports are reserved for page components (which are lazy-loaded).

* * *

## 6\. Layout and the app shell

The app shell is composed of four pieces:

```
<AppShell>
  <Sidebar />              ← left, persistent
  <TopHeader />            ← top, persistent
  <WorkingArea>            ← right of sidebar, below header
    <Outlet />             ← React Router renders the active module here
  </WorkingArea>
  <CopilotPanel />         ← right slide-over, ambient
</AppShell>

```

`AppShell` is in `core/layout/app-shell.tsx`. Modules **never** render their own sidebar, header, or shell chrome. A module renders only inside the working area.

A module typically wraps its routes in a `<ModuleLayout module="seo" />` that provides:

- Module-level sub-navigation (the tab strip seen in some screens)
- The Client Workspace context (already set at the shell level, but referenced here for clarity)
- A `<Suspense>` boundary for lazy children
- A module-scoped `<ErrorBoundary>` so a crash in one module doesn't take down the whole app

Page-level chrome (page title, subtitle, action buttons in the header) is rendered via the `<PageHeader>` composite (Tier 2), not by inserting raw text into the shell.

* * *

## 7\. State management — four buckets, four tools

Every piece of state in the app belongs to **exactly one** of these four buckets. Misclassification is a common bug source.

### 1\. Server state — TanStack Query

Anything that comes from or persists to the backend. **Never** mirror server state into Zustand or `useState`. The cache is the source of truth.

Examples: list of keywords, current invoice, contract details, user list, notification list.

### 2\. URL state — React Router + search params

Anything that should survive a refresh, deep link, or back-button press. Filters, tab selection, sort order, pagination cursor, currently-open detail ID.

Use `useSearchParams` for query-string state. Use route params for path state. Wrap repeated patterns in module-level hooks: `useKeywordsFilters()`, `useInvoicesDateRange()`.

**Heuristic:** if a user pastes the URL into Slack, what should the recipient see? Whatever needs to be reproduced is URL state.

### 3\. Form state — React Hook Form

Anything inside a form, while the form is being filled. The moment a form submits, the values become server state.

### 4\. Client UI state — `useState` / Zustand

Genuinely local UI state that doesn't belong in any of the above. Hover, focus, "is this dropdown open", "is this drawer collapsed".

- For state local to one component: `useState`.
- For state shared across components in the **same** module: a Zustand store in `modules/<m>/store.ts`.
- For state shared **across** modules: a Zustand store in `core/<area>/store.ts`. These are rare; ask before creating one.

### Forbidden patterns

- `useState` to hold a fetched list of objects from the server.
- A Zustand store to hold what could be URL state.
- `useEffect(() => fetch(...))`. Always use TanStack Query.
- A "global app state" Redux/Zustand store with everything in it. We do not have one. Keep state where it belongs.
- Storing JWTs, tokens, or PII in a Zustand store. Auth state belongs in `core/auth/`, which manages it via secure cookies + a minimal in-memory user object.

* * *

## 8\. Data fetching

### The API client

A single thin wrapper around `fetch` that:

- Prepends `VITE_API_BASE_URL`.
- Attaches the access token from `core/auth`.
- Handles 401 by triggering a refresh attempt; if the refresh fails, redirects to login.
- Parses the standard response envelope `{ ok, data, error }` (defined in the backend guidelines §6) and:
    - On `ok: true`, returns `data` typed as `T`.
    - On `ok: false`, throws a typed `ApiError` with `code`, `message`, `statusCode`.
- Adds the `X-Tenant-Id` and `X-Workspace-Id` headers from the current contexts.

Components and hooks call `apiClient.get<T>(path, opts)` / `.post<T>` / etc. Never `fetch()` directly.

### TanStack Query defaults

Configured once in `core/api/query-client.ts`:

```ts
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,            // 30 seconds default; override per-hook as needed
      gcTime: 5 * 60_000,
      retry: (failureCount, error) => {
        if (error instanceof ApiError && [400, 401, 403, 404, 422].includes(error.statusCode)) {
          return false;
        }
        return failureCount < 2;
      },
      refetchOnWindowFocus: true,
    },
    mutations: {
      retry: false,
    },
  },
});

```

### Query key conventions

- Always built via the module's `keys` factory.
- Always include `workspaceId` (or `tenantId`) in the key when the data is workspace-scoped. Switching workspaces must not show stale data from the previous workspace — including the workspace ID in the key guarantees it.
- Hooks return the raw `useQuery` result. Components destructure `isPending`, `isError`, `isSuccess`, `data`, `error`. Don't pre-flatten in the hook.

### Mutations

- Optimistic updates only when the operation is genuinely fast and the rollback path is well-defined. Otherwise show a loading state and invalidate on success.
- Every mutation invalidates at least one query key on success.
- Errors from mutations bubble up; the calling component decides whether to show a toast or inline error message. Default behavior in our toast helper handles "show the public error message" automatically.

* * *

## 9\. Forms

Every form in the app uses **React Hook Form + Zod** through the `<Form>` wrapper in `core/ui/form.tsx`. **No exceptions.** No `useState` for form fields. No uncontrolled input grab-bags.

```tsx
// src/modules/seo/components/keyword-form.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/core/ui/form";
import { Input } from "@/core/ui/input";
import { Select, SelectItem } from "@/core/ui/select";
import { Button } from "@/core/ui/button";
import { CreateKeywordSchema, CreateKeywordInput } from "../schemas/keyword.schema";
import { useCreateKeyword } from "../api/use-create-keyword";

interface KeywordFormProps {
  onSuccess?: () => void;
}

export function KeywordForm({ onSuccess }: KeywordFormProps) {
  const form = useForm<CreateKeywordInput>({
    resolver: zodResolver(CreateKeywordSchema),
    defaultValues: { phrase: "", intent: "informational", priority: 3 },
  });

  const createKeyword = useCreateKeyword();

  const onSubmit = form.handleSubmit(async (values) => {
    await createKeyword.mutateAsync(values);
    form.reset();
    onSuccess?.();
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="phrase"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Keyword phrase</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g. 2BHK flats Pune" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ... other fields */}
        <Button type="submit" disabled={createKeyword.isPending}>
          {createKeyword.isPending ? "Saving..." : "Add keyword"}
        </Button>
      </form>
    </Form>
  );
}

```

Rules:

- The Zod schema used by the form **must** match the backend's schema for that endpoint. Ideally imported from a shared `@asm/schemas` package; if not, kept in lockstep manually with a comment linking to the backend file.
- Every field uses `<FormField>` + `<FormMessage>`. Validation messages render automatically.
- Submit handlers call mutations from `api/`. Never call `apiClient` directly from the form.
- Disable the submit button while `mutation.isPending`. Never allow double-submit.
- `defaultValues` must be set explicitly. React Hook Form behaves badly with undefined initial values.

* * *

## 10\. Routing

### Router setup

We use React Router 6 data routers (`createBrowserRouter`).

```tsx
// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "@/core/layout/app-shell";
import { LoginPage } from "@/modules/auth/pages/login.page";
import { authLoader } from "@/core/auth/loaders";

import { seoRoutes } from "@/modules/seo/seo.routes";
import { performanceMarketingRoutes } from "@/modules/performance-marketing/performance-marketing.routes";
// ... other modules

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <AppShell />,
    loader: authLoader,                  // Redirects to /login if not authed
    children: [
      seoRoutes,
      performanceMarketingRoutes,
      // ... other modules
    ],
  },
]);

```

### URL conventions

- Paths are kebab-case plural (`/seo/keywords`, `/influencer-marketing/campaigns`).
- Resource detail uses an ID segment (`/seo/keywords/:keywordId`). ID names are `<entity>Id`, never just `:id`.
- Filters live in query strings as camelCase (`?intent=transactional&dateFrom=2026-01-01`).
- The current Client Workspace is **not** in the URL — it lives in a context provider sourced from the user's last selection. Switching workspace is a global action, not a navigation.

### Protected routes

- The top-level authenticated layout has `loader: authLoader` which redirects unauthenticated users to `/login`.
- Permission-protected routes use `loader: requirePermission("seo.view")` which redirects to a 403 page if the user lacks the permission.
- Components inside protected routes can assume the user is authenticated. They use `useAuth()` to access the user object — they never null-check it.

### Navigation

- Use `<Link>` and `<NavLink>` for declarative navigation. Use `useNavigate()` only for navigation triggered by an action (e.g. after a successful create).
- Never set `window.location` to navigate. Ever.

* * *

## 11\. Design system and styling

The design system is documented in detail in the `userPreferences` block included with this codebase (Propacity Visual Language). This section covers how AI agents should **apply** it.

### Tokens, not values

All colors, spacings, font sizes, font weights, and shadows are defined as CSS custom properties in `src/styles/tokens.css` and exposed via Tailwind's theme in `tailwind.config.ts`. **AI agents must use the token-mapped Tailwind classes.** Hardcoded colors, spacings, or sizes are forbidden.

```tsx
// ❌ BAD
<div className="bg-[#0062FF] text-white p-[16px] rounded-[8px]">

// ✅ GOOD
<div className="bg-primary text-primary-foreground p-4 rounded-lg">

```

The Tailwind config maps tokens like:

- `bg-primary` → Propacity primary blue `#0062FF`
- `bg-primary-light` → 10% blue overlay
- `text-text-primary`, `text-text-secondary`, `text-text-muted`
- `border-border`, `border-border-light`
- `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg` (per the Untitled UI scale)
- Spacing scale uses Tailwind's default (which is 4px-based and aligns with our 4px base unit)

### Typography

- Font family: `Inter` for body, weight tokens applied via `font-normal` / `font-medium` / `font-semibold` / `font-bold`.
- Size scale: use Tailwind's default size classes which map to our type scale (`text-xs` 12px, `text-sm` 14px, `text-base` 16px, `text-lg` 18px, `text-xl` 20px, etc.).
- **Never use more than 2 font weights on a single screen.** This is a hard product rule, not a guideline.

### Spacing

- 4px base unit. Use Tailwind's spacing classes (`p-1` = 4px, `p-2` = 8px, `p-3` = 12px, `p-4` = 16px, `p-5` = 20px, `p-6` = 24px).
- Consistent gaps: `gap-2` (8px) between tightly related items, `gap-4` (16px) between fields in a form section, `gap-6` (24px) between sections.

### Components

Always use the wrappers in `core/ui/`. They already encode the design system — radius, padding, shadow, hover behavior, focus rings.

- Button: `<Button variant="primary" | "secondary" | "destructive" | "ghost" | "outline">` with `size="sm" | "default" | "lg"`.
- Input: `<Input>` (already 48px tall with the right border color and focus ring).
- Card: `<Card>` (10px radius, light border, no heavy shadow).
- StatusBadge: `<StatusBadge status="success" | "warning" | "error" | "info" | "neutral">`. Always 10% opacity background, full color text. Never solid background badges.
- Currency: `<Currency value={233434} />` — renders `₹ 2,33,434` per the Indian number system rule.
- DateDisplay: `<DateDisplay value={iso} format="long" | "short" | "relative">` — handles IST and the standard format.

### What never goes inline

- Inline colors (`style={{ color: "#FC5A5A" }}`) — use Tailwind tokens.
- Inline font sizes — use Tailwind size classes.
- Inline shadows — use Tailwind shadow classes.
- `className` strings with hex codes inside arbitrary brackets (`bg-[#FC5A5A]`) — forbidden except for the very rare case of a one-off illustration which must be wrapped in a documented component.

* * *

## 12\. Loading, error, and empty states

Every screen that fetches data **must** explicitly render four states. Skipping any of them is a bug, not a polish task.

### Loading

- Use **skeleton loaders** for content areas, not spinners. `<Skeleton className="h-12 w-full" />` etc.
- Use **inline spinners** only inside buttons during a mutation.
- Never block the entire screen with an overlay. The shell remains interactive.

### Error

- Use the `<ErrorState>` composite (`core/components/error-state.tsx`).
- Show the public error message from the API. Never the raw `error.stack` or internal message.
- Always offer a recovery action: `Retry`, `Reload`, or `Back`.
- Wrap each module in an `<ErrorBoundary>` so a render-time crash in one module doesn't take down the shell.

### Empty

- Use the `<EmptyState>` composite. Required: title, description, and an action when applicable.
- Never show a blank white screen or "No data". The empty state is a product feature — it teaches the user what should be there and how to create it.

### Success (the data path)

- Always render through the typed component, never directly off `query.data?.`. Branching on `isSuccess && data.length > 0` makes the intent explicit.

* * *

## 13\. Permissions in the UI

Permissions are enforced on the backend. The frontend uses them only to **hide controls the user can't act on** — not as a security boundary.

```tsx
import { Can } from "@/core/permissions/can";
import { SeoPermissions } from "../seo.permissions";

<Can permission={SeoPermissions.KeywordCreate}>
  <Button>+ Add keyword</Button>
</Can>

```

Or imperatively:

```tsx
const canCreate = usePermission(SeoPermissions.KeywordCreate);

```

Rules:

- Never compute permission strings on the fly. Use the constants from `module.permissions.ts`.
- Never use permissions to gate a route — that's the route loader's job (§10).
- A user without permission should not see a disabled button. They should not see the button at all. Disabled buttons leak information and frustrate users.

* * *

## 14\. Accessibility

Non-negotiables:

- Every interactive element is keyboard-accessible. Tab order matches visual order.
- Every form field has an associated `<label>` (the `<FormLabel>` wrapper in `core/ui/form.tsx` handles this).
- Every icon-only button has an `aria-label`.
- Color is never the only signal. Status colors are paired with an icon, label, or badge text.
- Focus rings are visible. Do not `outline: none` without providing an alternative focus indicator.
- Modals and dialogs trap focus and restore it on close. The shadcn/ui Dialog handles this.
- Text contrast meets WCAG AA. Our tokens are designed to satisfy this; use them as defined.

* * *

## 15\. Performance

### What to optimize for

1. Time-to-interactive on initial load.
2. Smooth interaction on data-heavy pages (tables with hundreds of rows).
3. Memory footprint over a long session.

### Default rules

- Lazy-load every module (already done via `seo.routes.tsx` `lazy()` imports).
- Code-split at the route level. Don't add manual splits inside a module without measuring first.
- Memoize selectively. Default to **not** using `React.memo`, `useMemo`, or `useCallback`. Add them only when a profiler shows a hot path. Premature memoization causes more bugs than it prevents.
- Virtualize tables with more than ~200 rows. Use TanStack Table + `react-virtual`.
- Debounce search inputs (`useDebounce`, 300ms default).
- Never render a chart with more than ~500 data points without sampling/aggregating server-side.

### What to never do

- Never `useEffect(() => { setX(computed) }, [deps])` to derive state. Compute it inline or with `useMemo`.
- Never call `fetch` in a `useEffect`. Always TanStack Query.
- Never render in a `requestAnimationFrame` loop unless the component is genuinely doing real-time animation, in which case use `framer-motion`.

* * *

## 16\. Testing

Three tiers, in order of preference: **unit**, **component**, **e2e**.

### Unit tests (Vitest)

For pure functions in `core/utils/` and module-level helpers. Fast, run on every commit.

### Component tests (Vitest + React Testing Library)

For Tier 2, Tier 3, and Tier 4 components. Render the component, interact with it via `userEvent`, assert on visible output.

- Mock the API at the network layer using `msw`. **Never** mock TanStack Query directly — that bypasses the layer we want to test.
- Test from the user's perspective: query by role and label, not by class or test-id. Test-ids are a last resort.
- Every form component has at least one test that submits the happy path and one that submits invalid data and asserts the error message.

```tsx
// src/modules/seo/__tests__/keyword-form.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { KeywordForm } from "../components/keyword-form";
import { renderWithProviders } from "@/tests/helpers/render";

describe("KeywordForm", () => {
  it("submits a valid keyword", async () => {
    renderWithProviders(<KeywordForm />);
    await userEvent.type(screen.getByLabelText(/keyword phrase/i), "2bhk pune");
    await userEvent.click(screen.getByRole("button", { name: /add keyword/i }));
    expect(await screen.findByText(/keyword added/i)).toBeInTheDocument();
  });

  it("shows validation error for empty phrase", async () => {
    renderWithProviders(<KeywordForm />);
    await userEvent.click(screen.getByRole("button", { name: /add keyword/i }));
    expect(await screen.findByText(/phrase is required/i)).toBeInTheDocument();
  });
});

```

### E2E tests (Playwright)

Owned by the platform team, run on the deployed staging environment. Out of scope for module interns.

### Coverage rules

- A PR adding a new component without at least one component test is rejected by CI.
- A PR adding a new form without happy-path + validation-failure tests is rejected.
- Coverage target: 70% line coverage per module. The platform team owns coverage for `core/`.

* * *

## 17\. Things AI agents must never do

This is the hard list. Violating any of these is a critical bug, not a style issue.

1. **Never** call `fetch` directly from a component or non-API hook. Use `apiClient` inside a `use*` hook.
2. **Never** use `useEffect` to fetch data. Use TanStack Query.
3. **Never** mirror server data into `useState` or Zustand. The query cache is the source of truth.
4. **Never** import from another module's folder (`from "@/modules/X"` inside `src/modules/Y/`).
5. **Never** put a hardcoded color, spacing, font size, or shadow inline. Use design tokens via Tailwind classes.
6. **Never** use `useState` for form fields. Use React Hook Form.
7. **Never** read `process.env` outside `core/config/`. In Vite, use `import.meta.env.VITE_*` only inside the config layer.
8. **Never** use `any` in TypeScript. Use `unknown` and narrow, or define the type properly. CI lints for `any`.
9. **Never** disable a lint rule without a comment explaining why.
10. **Never** create a folder named `utils/`, `helpers/`, `lib/`, `misc/`, or `common/` outside of `core/utils/<named-domain>/`.
11. **Never** default-export a non-page component.
12. **Never** ship a screen without explicit loading, error, and empty states.
13. **Never** show a disabled button to a user who lacks permission. Hide it.
14. **Never** use `window.location` for navigation. Use React Router.
15. **Never** install a library without checking §2.
16. **Never** put PII, tokens, or JWTs in Zustand or localStorage. Auth state is managed by `core/auth/`.
17. **Never** leave a `console.log` in committed code. Use the logger if real telemetry is needed.

If you find yourself wanting to do any of the above, **stop and ask the user.**

* * *

## 18\. Module README — required template

Every module's `README.md` must follow this structure. AI agents creating a new module must populate this file before writing code.

```markdown
# Module: <name>

## Purpose
One paragraph. What does this module do for the user, in plain English?

## Routes
List the routes this module mounts and what each page is.

## Pages
For each page: which API hooks it uses, what user actions it supports.

## Components (module-internal)
List of components in `components/`, one line each.

## API hooks
List of hooks in `api/`, what they call, what they invalidate.

## Permissions used
List from `module.permissions.ts`.

## State
- URL state owned by this module
- Zustand store keys, if any

## Open questions
Anything ambiguous or pending decisions. AI agents must read this before
making changes.

```

* * *

## 19\. The CLAUDE.md pointer

The repo root `CLAUDE.md` is short and points here:

```markdown
# Claude Code instructions for asm-frontend

This codebase is governed by **two authoritative documents**:

1. `docs/FRONTEND_GUIDELINES.md` — read this in full before writing any code.
2. The module-specific `README.md` in the folder you are working in.

Before generating code:

- Identify the module folder you are working in.
- Read its `README.md`.
- Read at least one existing page and one existing component in that module to understand the patterns.
- If the change crosses module boundaries, stop and ask the user how to proceed.

Never invent a new pattern when an existing one applies. If you must invent,
flag it explicitly in your response so the reviewer can ADR it.

```

* * *