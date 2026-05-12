import { describe, it, expect, vi, beforeEach } from "vitest";
import { IntegrationsService } from "../integrations.service";
import type { IntegrationsRepository } from "../integrations.repository";
import {
  ProviderNotFoundError,
  IntegrationNotFoundError,
} from "../integrations.errors";

// ── Minimal mock factory ──────────────────────────────────────────────────────

function makeRepo(): IntegrationsRepository {
  return {
    findAllProviders: vi.fn(),
    findProviderById: vi.fn(),
    findClients: vi.fn(),
    findClientById: vi.fn(),
    createClient: vi.fn(),
    findIntegrations: vi.fn(),
    findAllTenantIntegrations: vi.fn(),
    findIntegration: vi.fn(),
    findIntegrationById: vi.fn(),
    upsertIntegration: vi.fn(),
    updateIntegrationStatus: vi.fn(),
    deleteIntegration: vi.fn(),
    createSyncLog: vi.fn(),
    updateSyncLog: vi.fn(),
    findSyncLogs: vi.fn(),
    findPlatformIntegrations: vi.fn(),
    upsertPlatformIntegration: vi.fn(),
  } as unknown as IntegrationsRepository;
}

const MOCK_CLIENT = {
  id: "client-1",
  tenantId: "tenant-1",
  name: "Test Client",
  industry: null,
  avatarUrl: null,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const MOCK_PROVIDER = {
  id: "prov-1",
  name: "Test Provider",
  category: "Analytics",
  description: "A test provider",
  authType: "API_KEY",
  logoUrl: "https://example.com/logo.svg",
  moduleRelevance: ["Ads"],
  isActive: true,
  createdAt: new Date().toISOString(),
};

const MOCK_INTEGRATION = {
  id: "int-1",
  tenantId: "tenant-1",
  clientId: "client-1",
  providerId: "prov-1",
  status: "CONNECTED",
  accountLabel: null,
  credentials: {},
  lastSyncAt: null,
  metadata: null,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  provider: MOCK_PROVIDER,
};

// ── Tests ─────────────────────────────────────────────────────────────────────

describe("IntegrationsService", () => {
  let repo: IntegrationsRepository;
  let service: IntegrationsService;

  beforeEach(() => {
    repo = makeRepo();
    service = new IntegrationsService(repo);
  });

  describe("connectApiKey", () => {
    it("connects successfully for an API_KEY provider", async () => {
      vi.mocked(repo.findClientById).mockResolvedValue(MOCK_CLIENT);
      vi.mocked(repo.findProviderById).mockResolvedValue(MOCK_PROVIDER);
      vi.mocked(repo.upsertIntegration).mockResolvedValue(MOCK_INTEGRATION);

      const result = await service.connectApiKey(
        "tenant-1",
        "client-1",
        "prov-1",
        { apiKey: "sk-test-123", accountLabel: "My Account" },
      );

      expect(result.status).toBe("CONNECTED");
      expect(repo.upsertIntegration).toHaveBeenCalledWith(
        "tenant-1",
        "client-1",
        "prov-1",
        expect.objectContaining({ status: "CONNECTED" }),
      );
    });

    it("throws ProviderNotFoundError for unknown provider", async () => {
      vi.mocked(repo.findClientById).mockResolvedValue(MOCK_CLIENT);
      vi.mocked(repo.findProviderById).mockResolvedValue(null);

      await expect(
        service.connectApiKey("tenant-1", "client-1", "unknown", {
          apiKey: "sk-test",
        }),
      ).rejects.toThrow(ProviderNotFoundError);
    });
  });

  describe("disconnect", () => {
    it("deletes the integration when it exists", async () => {
      vi.mocked(repo.findClientById).mockResolvedValue(MOCK_CLIENT);
      vi.mocked(repo.findIntegration).mockResolvedValue(MOCK_INTEGRATION);
      vi.mocked(repo.deleteIntegration).mockResolvedValue();

      await service.disconnect("tenant-1", "client-1", "prov-1");

      expect(repo.deleteIntegration).toHaveBeenCalledWith(
        "tenant-1",
        "client-1",
        "prov-1",
      );
    });

    it("throws IntegrationNotFoundError when integration does not exist", async () => {
      vi.mocked(repo.findClientById).mockResolvedValue(MOCK_CLIENT);
      vi.mocked(repo.findIntegration).mockResolvedValue(null);

      await expect(
        service.disconnect("tenant-1", "client-1", "prov-1"),
      ).rejects.toThrow(IntegrationNotFoundError);
    });
  });

  describe("getModuleReadiness", () => {
    it("returns readiness for all modules", async () => {
      vi.mocked(repo.findClientById).mockResolvedValue(MOCK_CLIENT);
      vi.mocked(repo.findAllProviders).mockResolvedValue([MOCK_PROVIDER]);
      vi.mocked(repo.findIntegrations).mockResolvedValue([MOCK_INTEGRATION]);

      const result = await service.getModuleReadiness("tenant-1", "client-1");

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
      result.forEach((r) => {
        expect(r).toHaveProperty("module");
        expect(r).toHaveProperty("connected");
        expect(r).toHaveProperty("total");
        expect(r).toHaveProperty("pct");
        expect(r.pct).toBeGreaterThanOrEqual(0);
        expect(r.pct).toBeLessThanOrEqual(100);
      });
    });
  });
});
