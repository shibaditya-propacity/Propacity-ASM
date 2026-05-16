/**
 * Component tests for the SEO Dashboard.
 * Stubs — full tests require MSW mocking of the SEO API endpoints.
 */
import { describe, it, expect } from "vitest";

describe("SeoDashboardPage (stub)", () => {
  it("is a placeholder for component tests", () => {
    // TODO: use renderWithProviders + MSW to cover:
    //   - Shows client selector when no client selected
    //   - Shows ConnectBanner when integrations not connected
    //   - Shows SyncPrompt when connected but never synced
    //   - Shows dashboard with stats/charts when data is available
    //   - Sync button triggers POST /seo/:clientId/sync and invalidates queries
    expect(true).toBe(true);
  });
});
