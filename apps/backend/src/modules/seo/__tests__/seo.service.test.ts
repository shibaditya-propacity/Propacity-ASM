import { describe, it, expect, vi, beforeEach } from "vitest";
import { SeoService } from "../seo.service";
import type { SeoRepository } from "../seo.repository";
import { SeoSyncService } from "../seo-sync.service";
import {
  SeoClientNotFoundError,
  SeoKeywordAlreadyExistsError,
} from "../seo.errors";

// ── Mocks ─────────────────────────────────────────────────────────────────────

function makeRepo(overrides: Partial<SeoRepository> = {}): SeoRepository {
  return {
    clientExists: vi.fn().mockResolvedValue(true),
    findGoogleIntegration: vi.fn().mockResolvedValue(null),
    updateIntegrationCredentials: vi.fn().mockResolvedValue(undefined),
    findLatestSnapshot: vi.fn().mockResolvedValue(null),
    findRecentSnapshots: vi.fn().mockResolvedValue([]),
    createSnapshot: vi.fn(),
    findKeywords: vi.fn().mockResolvedValue([]),
    findKeywordByText: vi.fn().mockResolvedValue(null),
    findKeywordById: vi.fn().mockResolvedValue(null),
    createKeyword: vi.fn(),
    updateKeywordRanks: vi.fn().mockResolvedValue(undefined),
    deleteKeyword: vi.fn().mockResolvedValue(undefined),
    findActions: vi.fn().mockResolvedValue([]),
    createAction: vi.fn(),
    deleteActionsByClient: vi.fn().mockResolvedValue(undefined),
    ...overrides,
  } as unknown as SeoRepository;
}

function makeSync(overrides: Partial<SeoSyncService> = {}): SeoSyncService {
  return {
    syncClient: vi.fn().mockResolvedValue("snapshot-id"),
    ...overrides,
  } as unknown as SeoSyncService;
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe("SeoService", () => {
  const TENANT = "tenant-1";
  const CLIENT = "client-1";

  describe("getDashboard", () => {
    it("throws SeoClientNotFoundError when client does not exist", async () => {
      const repo = makeRepo({ clientExists: vi.fn().mockResolvedValue(false) });
      const service = new SeoService(repo, makeSync());
      await expect(service.getDashboard(TENANT, CLIENT)).rejects.toThrow(
        SeoClientNotFoundError,
      );
    });

    it("returns dashboard with null snapshot when no data synced yet", async () => {
      const service = new SeoService(makeRepo(), makeSync());
      const result = await service.getDashboard(TENANT, CLIENT);
      expect(result.snapshot).toBeNull();
      expect(result.keywords).toHaveLength(0);
      expect(result.integrationStatus.gscConnected).toBe(false);
    });
  });

  describe("addKeyword", () => {
    it("throws SeoKeywordAlreadyExistsError for duplicate keyword", async () => {
      const repo = makeRepo({
        findKeywordByText: vi
          .fn()
          .mockResolvedValue({ id: "kw-1", keyword: "test" }),
      });
      const service = new SeoService(repo, makeSync());
      await expect(
        service.addKeyword(TENANT, CLIENT, { keyword: "test" }),
      ).rejects.toThrow(SeoKeywordAlreadyExistsError);
    });

    it("creates keyword successfully", async () => {
      const created = { id: "kw-new", keyword: "pune 2bhk" };
      const repo = makeRepo({
        createKeyword: vi.fn().mockResolvedValue(created),
      });
      const service = new SeoService(repo, makeSync());
      const result = await service.addKeyword(TENANT, CLIENT, {
        keyword: "pune 2bhk",
      });
      expect(result).toEqual(created);
    });
  });

  describe("triggerSync", () => {
    it("throws SeoClientNotFoundError when client does not exist", async () => {
      const repo = makeRepo({ clientExists: vi.fn().mockResolvedValue(false) });
      const service = new SeoService(repo, makeSync());
      await expect(service.triggerSync(TENANT, CLIENT)).rejects.toThrow(
        SeoClientNotFoundError,
      );
    });

    it("returns snapshotId on success", async () => {
      const service = new SeoService(makeRepo(), makeSync());
      const result = await service.triggerSync(TENANT, CLIENT);
      expect(result.snapshotId).toBe("snapshot-id");
    });
  });
});
