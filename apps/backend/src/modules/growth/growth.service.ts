import { GrowthRepository } from "./growth.repository";
import { GrowthEvents } from "./growth.events";
import {
  WorkshopNotFoundError,
  ProspectNotFoundError,
  BrandAuditNotFoundError,
  InvalidStageTransitionError,
} from "./growth.errors";
import { GrowthPolicy } from "./growth.policy";
import { ForbiddenError } from "@/core/errors/app-error";
import { auditService } from "@/core/audit/audit.service";
import { eventBus } from "@/core/events/event-bus";
import type {
  CreateWorkshopInput,
  UpdateWorkshopInput,
  ListWorkshopsQuery,
  Workshop,
  CreateProspectInput,
  UpdateProspectInput,
  UpdateProspectStageInput,
  ListProspectsQuery,
  Prospect,
  CreateBrandAuditInput,
  ListBrandAuditsQuery,
  BrandAudit,
  CreateProspectActivityInput,
  ProspectActivity,
} from "./growth.dto";

interface User {
  id: string;
  name: string;
  role: string;
  permissions: string[];
}

// Valid stage transitions
const STAGE_TRANSITIONS: Record<string, string[]> = {
  Registered: ["Attended", "Lost"],
  Attended: ["Segmented · Agency", "Segmented · Transaction", "Lost"],
  "Segmented · Agency": ["Session Scheduled", "Lost"],
  "Segmented · Transaction": ["Lost"],
  "Session Scheduled": ["Audited", "Lost"],
  Audited: ["Proposal Sent", "Lost"],
  "Proposal Sent": ["In Discussion", "Won", "Lost"],
  "In Discussion": ["Won", "Lost"],
  Won: [],
  Lost: [],
};

export class GrowthService {
  constructor(private readonly repo: GrowthRepository) {}

  // ── Workshops ───────────────────────────────────────────────────────────────

  async listWorkshops(tenantId: string, query: ListWorkshopsQuery) {
    return this.repo.findWorkshops(tenantId, query);
  }

  async getWorkshop(tenantId: string, id: string): Promise<Workshop> {
    const workshop = await this.repo.findWorkshopById(tenantId, id);
    if (!workshop) throw new WorkshopNotFoundError(id);
    return workshop;
  }

  async createWorkshop(
    tenantId: string,
    user: User,
    input: CreateWorkshopInput,
  ): Promise<Workshop> {
    if (!GrowthPolicy.canManageWorkshops(user)) {
      throw new ForbiddenError("growth.workshop.manage");
    }
    const workshop = await this.repo.createWorkshop(
      tenantId,
      input,
      user.name || undefined,
    );
    await auditService.log({
      tenantId,
      actorId: user.id,
      action: "growth.workshop.created",
      resourceType: "growth_workshop",
      resourceId: workshop.id,
      metadata: { title: workshop.title },
    });
    eventBus.emit(GrowthEvents.WorkshopCreated, { tenantId, workshop });
    return workshop;
  }

  async updateWorkshop(
    tenantId: string,
    user: User,
    id: string,
    input: UpdateWorkshopInput,
  ): Promise<Workshop> {
    if (!GrowthPolicy.canManageWorkshops(user)) {
      throw new ForbiddenError("growth.workshop.manage");
    }
    const updated = await this.repo.updateWorkshop(tenantId, id, input);
    if (!updated) throw new WorkshopNotFoundError(id);
    await auditService.log({
      tenantId,
      actorId: user.id,
      action: "growth.workshop.updated",
      resourceType: "growth_workshop",
      resourceId: id,
    });
    return updated;
  }

  async deleteWorkshop(
    tenantId: string,
    user: User,
    id: string,
  ): Promise<void> {
    if (!GrowthPolicy.canDeleteWorkshop(user)) {
      throw new ForbiddenError("growth.workshop.delete");
    }
    const deleted = await this.repo.softDeleteWorkshop(tenantId, id, user.id);
    if (!deleted) throw new WorkshopNotFoundError(id);
    await auditService.log({
      tenantId,
      actorId: user.id,
      action: "growth.workshop.deleted",
      resourceType: "growth_workshop",
      resourceId: id,
    });
  }

  // ── Prospects ───────────────────────────────────────────────────────────────

  async listProspects(tenantId: string, query: ListProspectsQuery) {
    return this.repo.findProspects(tenantId, query);
  }

  async getProspect(tenantId: string, id: string): Promise<Prospect> {
    const prospect = await this.repo.findProspectById(tenantId, id);
    if (!prospect) throw new ProspectNotFoundError(id);
    return prospect;
  }

  async createProspect(
    tenantId: string,
    user: User,
    input: CreateProspectInput,
  ): Promise<Prospect> {
    if (!GrowthPolicy.canManageProspects(user)) {
      throw new ForbiddenError("growth.prospect.manage");
    }
    // Verify workshop exists in this tenant
    const workshop = await this.repo.findWorkshopById(
      tenantId,
      input.workshopId,
    );
    if (!workshop) throw new WorkshopNotFoundError(input.workshopId);

    const prospect = await this.repo.createProspect(tenantId, input);
    await auditService.log({
      tenantId,
      actorId: user.id,
      action: "growth.prospect.created",
      resourceType: "growth_prospect",
      resourceId: prospect.id,
      metadata: { name: prospect.name, company: prospect.company },
    });
    eventBus.emit(GrowthEvents.ProspectCreated, { tenantId, prospect });
    return prospect;
  }

  async updateProspect(
    tenantId: string,
    user: User,
    id: string,
    input: UpdateProspectInput,
  ): Promise<Prospect> {
    if (!GrowthPolicy.canManageProspects(user)) {
      throw new ForbiddenError("growth.prospect.manage");
    }
    const updated = await this.repo.updateProspect(tenantId, id, input);
    if (!updated) throw new ProspectNotFoundError(id);
    await auditService.log({
      tenantId,
      actorId: user.id,
      action: "growth.prospect.updated",
      resourceType: "growth_prospect",
      resourceId: id,
    });
    return updated;
  }

  async updateProspectStage(
    tenantId: string,
    user: User,
    id: string,
    input: UpdateProspectStageInput,
  ): Promise<Prospect> {
    if (!GrowthPolicy.canManageProspects(user)) {
      throw new ForbiddenError("growth.prospect.manage");
    }
    const prospect = await this.repo.findProspectById(tenantId, id);
    if (!prospect) throw new ProspectNotFoundError(id);

    const allowed = STAGE_TRANSITIONS[prospect.stage] ?? [];
    if (!allowed.includes(input.stage)) {
      throw new InvalidStageTransitionError(prospect.stage, input.stage);
    }

    const updated = await this.repo.updateProspectStage(tenantId, id, input);
    if (!updated) throw new ProspectNotFoundError(id);

    // Log activity
    await this.repo.createProspectActivity(tenantId, id, user.id, {
      type: "stage_change",
      description: `Stage changed from "${prospect.stage}" to "${input.stage}"${input.notes ? `: ${input.notes}` : ""}`,
    });

    await auditService.log({
      tenantId,
      actorId: user.id,
      action: "growth.prospect.stage_changed",
      resourceType: "growth_prospect",
      resourceId: id,
      metadata: { from: prospect.stage, to: input.stage },
    });

    eventBus.emit(GrowthEvents.ProspectStageChanged, {
      tenantId,
      prospectId: id,
      fromStage: prospect.stage,
      toStage: input.stage,
    });

    return updated;
  }

  async getProspectActivities(
    tenantId: string,
    id: string,
  ): Promise<ProspectActivity[]> {
    const prospect = await this.repo.findProspectById(tenantId, id);
    if (!prospect) throw new ProspectNotFoundError(id);
    return this.repo.findProspectActivities(tenantId, id);
  }

  async addProspectActivity(
    tenantId: string,
    user: User,
    id: string,
    input: CreateProspectActivityInput,
  ): Promise<ProspectActivity> {
    const prospect = await this.repo.findProspectById(tenantId, id);
    if (!prospect) throw new ProspectNotFoundError(id);
    return this.repo.createProspectActivity(tenantId, id, user.id, input);
  }

  // ── Brand Audits ────────────────────────────────────────────────────────────

  async listBrandAudits(tenantId: string, query: ListBrandAuditsQuery) {
    return this.repo.findBrandAudits(tenantId, query);
  }

  async getBrandAudit(tenantId: string, id: string): Promise<BrandAudit> {
    const audit = await this.repo.findBrandAuditById(tenantId, id);
    if (!audit) throw new BrandAuditNotFoundError(id);
    return audit;
  }

  async getProspectBrandAudit(
    tenantId: string,
    prospectId: string,
  ): Promise<BrandAudit | null> {
    return this.repo.findBrandAuditByProspect(tenantId, prospectId);
  }

  async createBrandAudit(
    tenantId: string,
    user: User,
    input: CreateBrandAuditInput,
  ): Promise<BrandAudit> {
    if (!GrowthPolicy.canManageAudits(user)) {
      throw new ForbiddenError("growth.audit.manage");
    }
    const prospect = await this.repo.findProspectById(
      tenantId,
      input.prospectId,
    );
    if (!prospect) throw new ProspectNotFoundError(input.prospectId);

    const audit = await this.repo.createBrandAudit(tenantId, input);

    await auditService.log({
      tenantId,
      actorId: user.id,
      action: "growth.brand_audit.created",
      resourceType: "growth_brand_audit",
      resourceId: audit.id,
      metadata: { prospectId: input.prospectId },
    });

    eventBus.emit(GrowthEvents.BrandAuditCreated, { tenantId, audit });
    return audit;
  }

  async updateBrandAuditStatus(
    tenantId: string,
    user: User,
    id: string,
    status: string,
  ): Promise<BrandAudit> {
    if (!GrowthPolicy.canManageAudits(user)) {
      throw new ForbiddenError("growth.audit.manage");
    }
    const updated = await this.repo.updateBrandAuditStatus(
      tenantId,
      id,
      status,
    );
    if (!updated) throw new BrandAuditNotFoundError(id);
    await auditService.log({
      tenantId,
      actorId: user.id,
      action: "growth.brand_audit.status_updated",
      resourceType: "growth_brand_audit",
      resourceId: id,
      metadata: { status },
    });
    return updated;
  }
}
