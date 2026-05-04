import { describe, it, expect, vi, beforeEach } from "vitest";
import { GrowthService } from "../growth.service";
import { GrowthRepository } from "../growth.repository";
import { InvalidStageTransitionError, WorkshopNotFoundError } from "../growth.errors";

const mockRepo = {
  findWorkshops: vi.fn(),
  findWorkshopById: vi.fn(),
  createWorkshop: vi.fn(),
  updateWorkshop: vi.fn(),
  softDeleteWorkshop: vi.fn(),
  findProspects: vi.fn(),
  findProspectById: vi.fn(),
  createProspect: vi.fn(),
  updateProspect: vi.fn(),
  updateProspectStage: vi.fn(),
  findProspectActivities: vi.fn(),
  createProspectActivity: vi.fn(),
  findBrandAudits: vi.fn(),
  findBrandAuditById: vi.fn(),
  findBrandAuditByProspect: vi.fn(),
  createBrandAudit: vi.fn(),
  updateBrandAuditStatus: vi.fn(),
} satisfies Partial<GrowthRepository>;

const user = { id: "user-1", permissions: ["growth.view", "growth.prospect.manage", "growth.workshop.manage", "growth.audit.manage", "growth.workshop.delete"] };

describe("GrowthService", () => {
  let service: GrowthService;

  beforeEach(() => {
    vi.clearAllMocks();
    service = new GrowthService(mockRepo as unknown as GrowthRepository);
  });

  describe("updateProspectStage", () => {
    it("throws WorkshopNotFoundError if prospect not found", async () => {
      mockRepo.findProspectById.mockResolvedValue(null);
      await expect(
        service.updateProspectStage("tenant-1", user, "prospect-1", { stage: "Attended" })
      ).rejects.toThrow();
    });

    it("throws InvalidStageTransitionError for illegal transition", async () => {
      mockRepo.findProspectById.mockResolvedValue({
        id: "p1", tenantId: "t1", stage: "Won", name: "Test", company: "Co",
        workshopId: "w1", designation: null, city: null, scale: null, phone: null,
        email: null, source: null, classification: null, fitScore: null,
        estimatedDealSize: null, attended: true, registeredAt: new Date().toISOString(),
        oneOnOneAt: null, notes: null, lastActivity: new Date().toISOString(),
        ownerPm: null, hasAudit: false, hasProposal: false,
        createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
      });
      await expect(
        service.updateProspectStage("tenant-1", user, "p1", { stage: "Registered" })
      ).rejects.toThrow(InvalidStageTransitionError);
    });

    it("updates stage when transition is valid", async () => {
      const prospect = {
        id: "p1", tenantId: "t1", stage: "Registered", name: "Test", company: "Co",
        workshopId: "w1", designation: null, city: null, scale: null, phone: null,
        email: null, source: null, classification: null, fitScore: null,
        estimatedDealSize: null, attended: true, registeredAt: new Date().toISOString(),
        oneOnOneAt: null, notes: null, lastActivity: new Date().toISOString(),
        ownerPm: null, hasAudit: false, hasProposal: false,
        createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
      };
      mockRepo.findProspectById.mockResolvedValue(prospect);
      mockRepo.updateProspectStage.mockResolvedValue({ ...prospect, stage: "Attended" });
      mockRepo.createProspectActivity.mockResolvedValue({ id: "act-1", tenantId: "t1", prospectId: "p1", actorId: user.id, type: "stage_change", description: "", metadata: null, createdAt: new Date().toISOString() });

      const result = await service.updateProspectStage("t1", user, "p1", { stage: "Attended" });
      expect(result.stage).toBe("Attended");
    });
  });
});
