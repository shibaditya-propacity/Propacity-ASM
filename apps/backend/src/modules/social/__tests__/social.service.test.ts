import { describe, it, expect, vi, beforeEach } from "vitest";
import { SocialService } from "../social.service";
import type { SocialRepository } from "../social.repository";
import type { SocialSyncService } from "../social-sync.service";
import { SocialClientNotFoundError } from "../social.errors";

const mockRepo: Partial<SocialRepository> = {
  clientExists: vi.fn(),
  findProfiles: vi.fn(),
  findProfileByPlatform: vi.fn(),
  upsertProfile: vi.fn(),
  markConnected: vi.fn(),
  findLatestSnapshot: vi.fn(),
  findRecentSnapshots: vi.fn(),
};

const mockSync: Partial<SocialSyncService> = {
  syncProfile: vi.fn(),
  syncAllConnected: vi.fn(),
};

function makeService() {
  return new SocialService(
    mockRepo as SocialRepository,
    mockSync as SocialSyncService,
  );
}

describe("SocialService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("listProfiles", () => {
    it("throws SocialClientNotFoundError when client does not exist", async () => {
      vi.mocked(mockRepo.clientExists!).mockResolvedValue(false);
      const service = makeService();
      await expect(service.listProfiles("t1", "c1")).rejects.toBeInstanceOf(
        SocialClientNotFoundError,
      );
    });

    it("returns profiles when client exists", async () => {
      vi.mocked(mockRepo.clientExists!).mockResolvedValue(true);
      vi.mocked(mockRepo.findProfiles!).mockResolvedValue([]);
      const service = makeService();
      const result = await service.listProfiles("t1", "c1");
      expect(result).toEqual([]);
      expect(mockRepo.findProfiles).toHaveBeenCalledWith("t1", "c1");
    });
  });

  describe("connectProfile", () => {
    it("throws when client not found", async () => {
      vi.mocked(mockRepo.clientExists!).mockResolvedValue(false);
      const service = makeService();
      await expect(
        service.connectProfile("t1", "c1", "YOUTUBE"),
      ).rejects.toBeInstanceOf(SocialClientNotFoundError);
    });
  });

  describe("getDashboard", () => {
    it("returns summary with totalFollowers = 0 when no snapshots", async () => {
      vi.mocked(mockRepo.clientExists!).mockResolvedValue(true);
      vi.mocked(mockRepo.findProfiles!).mockResolvedValue([]);
      const service = makeService();
      const dashboard = await service.getDashboard("t1", "c1");
      expect(dashboard.summary.totalFollowers).toBe(0);
      expect(dashboard.summary.connectedCount).toBe(0);
    });
  });
});
