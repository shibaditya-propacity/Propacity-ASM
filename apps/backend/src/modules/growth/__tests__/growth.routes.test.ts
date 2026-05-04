// Integration test stub — requires a real test database
// Run with: vitest run src/modules/growth/__tests__/growth.routes.test.ts

import { describe, it, expect } from "vitest";

describe("Growth routes (integration)", () => {
  it.todo("GET /api/v1/growth/workshops — returns 401 without token");
  it.todo("POST /api/v1/growth/workshops — creates workshop with valid payload");
  it.todo("POST /api/v1/growth/workshops — returns 400 for missing title");
  it.todo("GET /api/v1/growth/prospects — returns paginated results");
  it.todo("POST /api/v1/growth/prospects/:id/stage — validates stage transition");
});
