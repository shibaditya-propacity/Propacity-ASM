import { prisma } from "@/core/prisma/client";
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

// ── Helpers ──────────────────────────────────────────────────────────────────

function mapWorkshop(row: Record<string, unknown>): Workshop {
  return {
    id: row["id"] as string,
    tenantId: row["tenantId"] as string,
    title: row["title"] as string,
    description: (row["description"] as string | null) ?? null,
    format: row["format"] as "Online" | "In-person",
    city: (row["city"] as string | null) ?? null,
    venue: (row["venue"] as string | null) ?? null,
    date: row["date"] as string,
    time: (row["time"] as string | null) ?? null,
    capacity: row["capacity"] as number,
    ticketPrice: row["ticketPrice"] as number,
    registered: row["registered"] as number,
    attended: row["attended"] as number,
    adSpend: row["adSpend"] as number,
    cpRegistration: row["cpRegistration"] as number,
    speaker: (row["speaker"] as string | null) ?? null,
    registrationLink: (row["registrationLink"] as string | null) ?? null,
    tags: (row["tags"] as string | null) ?? null,
    notes: (row["notes"] as string | null) ?? null,
    audienceSegment: (row["audienceSegment"] as string | null) ?? null,
    campaignBudget: row["campaignBudget"] as number,
    expectedCPR: row["expectedCPR"] as number,
    status: row["status"] as Workshop["status"],
    createdAt: (row["createdAt"] as Date).toISOString(),
    updatedAt: (row["updatedAt"] as Date).toISOString(),
  };
}

function mapProspect(row: Record<string, unknown>): Prospect {
  return {
    id: row["id"] as string,
    tenantId: row["tenantId"] as string,
    workshopId: row["workshopId"] as string,
    name: row["name"] as string,
    designation: (row["designation"] as string | null) ?? null,
    company: row["company"] as string,
    city: (row["city"] as string | null) ?? null,
    scale: (row["scale"] as string | null) ?? null,
    phone: (row["phone"] as string | null) ?? null,
    email: (row["email"] as string | null) ?? null,
    source: (row["source"] as string | null) ?? null,
    classification: (row["classification"] as Prospect["classification"]) ?? null,
    stage: row["stage"] as Prospect["stage"],
    fitScore: (row["fitScore"] as number | null) ?? null,
    estimatedDealSize: (row["estimatedDealSize"] as number | null) ?? null,
    attended: row["attended"] as boolean,
    registeredAt: (row["registeredAt"] as Date).toISOString(),
    oneOnOneAt: (row["oneOnOneAt"] as string | null) ?? null,
    notes: (row["notes"] as string | null) ?? null,
    lastActivity: (row["lastActivity"] as Date).toISOString(),
    ownerPm: (row["ownerPm"] as string | null) ?? null,
    hasAudit: row["hasAudit"] as boolean,
    hasProposal: row["hasProposal"] as boolean,
    createdAt: (row["createdAt"] as Date).toISOString(),
    updatedAt: (row["updatedAt"] as Date).toISOString(),
  };
}

function mapBrandAudit(row: Record<string, unknown>): BrandAudit {
  return {
    id: row["id"] as string,
    tenantId: row["tenantId"] as string,
    prospectId: row["prospectId"] as string,
    type: row["type"] as BrandAudit["type"],
    status: row["status"] as BrandAudit["status"],
    generatedAt: row["generatedAt"] ? (row["generatedAt"] as Date).toISOString() : null,
    generatedBy: (row["generatedBy"] as string | null) ?? null,
    overallScore: (row["overallScore"] as number | null) ?? null,
    dimensions: (row["dimensions"] as BrandAudit["dimensions"]) ?? [],
    benchmarks: (row["benchmarks"] as BrandAudit["benchmarks"]) ?? [],
    topThreeOpportunities: (row["topThreeOpportunities"] as BrandAudit["topThreeOpportunities"]) ?? [],
    estimatedAnnualUpliftLeads: (row["estimatedAnnualUpliftLeads"] as number | null) ?? null,
    estimatedAnnualUpliftRevenue: row["estimatedAnnualUpliftRevenue"]
      ? Number(row["estimatedAnnualUpliftRevenue"])
      : null,
    competitorsAnalysed: (row["competitorsAnalysed"] as string[]) ?? [],
    dataSources: (row["dataSources"] as string[]) ?? [],
    notes: (row["notes"] as string | null) ?? null,
    createdAt: (row["createdAt"] as Date).toISOString(),
    updatedAt: (row["updatedAt"] as Date).toISOString(),
  };
}

// ── Workshop Repository ───────────────────────────────────────────────────────

export class GrowthRepository {
  // — Workshops —

  async findWorkshops(tenantId: string, query: ListWorkshopsQuery): Promise<{ data: Workshop[]; total: number }> {
    const where = {
      tenantId,
      deletedAt: null,
      ...(query.status && { status: query.status }),
      ...(query.search && { title: { contains: query.search, mode: "insensitive" as const } }),
    };
    const [rows, total] = await Promise.all([
      prisma.growthWorkshop.findMany({
        where,
        orderBy: { date: "desc" },
        take: query.limit,
        skip: query.offset,
      }),
      prisma.growthWorkshop.count({ where }),
    ]);
    return { data: rows.map(mapWorkshop), total };
  }

  async findWorkshopById(tenantId: string, id: string): Promise<Workshop | null> {
    const row = await prisma.growthWorkshop.findFirst({ where: { tenantId, id, deletedAt: null } });
    return row ? mapWorkshop(row) : null;
  }

  async createWorkshop(tenantId: string, input: CreateWorkshopInput): Promise<Workshop> {
    const row = await prisma.growthWorkshop.create({
      data: { tenantId, ...input, status: "Upcoming" },
    });
    return mapWorkshop(row);
  }

  async updateWorkshop(tenantId: string, id: string, input: UpdateWorkshopInput): Promise<Workshop | null> {
    const row = await prisma.growthWorkshop.updateMany({
      where: { tenantId, id, deletedAt: null },
      data: { ...input, updatedAt: new Date() },
    });
    if (row.count === 0) return null;
    return this.findWorkshopById(tenantId, id);
  }

  async softDeleteWorkshop(tenantId: string, id: string, deletedById: string): Promise<boolean> {
    const result = await prisma.growthWorkshop.updateMany({
      where: { tenantId, id, deletedAt: null },
      data: { deletedAt: new Date(), deletedById },
    });
    return result.count > 0;
  }

  // — Prospects —

  async findProspects(tenantId: string, query: ListProspectsQuery): Promise<{ data: Prospect[]; total: number }> {
    const where = {
      tenantId,
      deletedAt: null,
      ...(query.workshopId && { workshopId: query.workshopId }),
      ...(query.stage && { stage: query.stage }),
      ...(query.classification && { classification: query.classification }),
      ...(query.search && {
        OR: [
          { name: { contains: query.search, mode: "insensitive" as const } },
          { company: { contains: query.search, mode: "insensitive" as const } },
          { city: { contains: query.search, mode: "insensitive" as const } },
        ],
      }),
    };
    const [rows, total] = await Promise.all([
      prisma.growthProspect.findMany({
        where,
        orderBy: { lastActivity: "desc" },
        take: query.limit,
        skip: query.offset,
      }),
      prisma.growthProspect.count({ where }),
    ]);
    return { data: rows.map(mapProspect), total };
  }

  async findProspectById(tenantId: string, id: string): Promise<Prospect | null> {
    const row = await prisma.growthProspect.findFirst({ where: { tenantId, id, deletedAt: null } });
    return row ? mapProspect(row) : null;
  }

  async createProspect(tenantId: string, input: CreateProspectInput): Promise<Prospect> {
    const row = await prisma.growthProspect.create({
      data: { tenantId, ...input, stage: "Registered" },
    });
    return mapProspect(row);
  }

  async updateProspect(tenantId: string, id: string, input: UpdateProspectInput): Promise<Prospect | null> {
    const result = await prisma.growthProspect.updateMany({
      where: { tenantId, id, deletedAt: null },
      data: { ...input, lastActivity: new Date(), updatedAt: new Date() },
    });
    if (result.count === 0) return null;
    return this.findProspectById(tenantId, id);
  }

  async updateProspectStage(tenantId: string, id: string, input: UpdateProspectStageInput): Promise<Prospect | null> {
    const result = await prisma.growthProspect.updateMany({
      where: { tenantId, id, deletedAt: null },
      data: { stage: input.stage, lastActivity: new Date(), updatedAt: new Date() },
    });
    if (result.count === 0) return null;
    return this.findProspectById(tenantId, id);
  }

  // — Prospect Activities —

  async findProspectActivities(tenantId: string, prospectId: string): Promise<ProspectActivity[]> {
    const rows = await prisma.growthProspectActivity.findMany({
      where: { tenantId, prospectId },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return rows.map((r) => ({
      id: r.id,
      tenantId: r.tenantId,
      prospectId: r.prospectId,
      actorId: r.actorId,
      type: r.type,
      description: r.description,
      metadata: r.metadata ?? null,
      createdAt: r.createdAt.toISOString(),
    }));
  }

  async createProspectActivity(
    tenantId: string,
    prospectId: string,
    actorId: string,
    input: CreateProspectActivityInput
  ): Promise<ProspectActivity> {
    const row = await prisma.growthProspectActivity.create({
      data: { tenantId, prospectId, actorId, ...input },
    });
    return {
      id: row.id,
      tenantId: row.tenantId,
      prospectId: row.prospectId,
      actorId: row.actorId,
      type: row.type,
      description: row.description,
      metadata: row.metadata ?? null,
      createdAt: row.createdAt.toISOString(),
    };
  }

  // — Brand Audits —

  async findBrandAudits(tenantId: string, query: ListBrandAuditsQuery): Promise<{ data: BrandAudit[]; total: number }> {
    const where = {
      tenantId,
      deletedAt: null,
      ...(query.prospectId && { prospectId: query.prospectId }),
      ...(query.status && { status: query.status }),
    };
    const [rows, total] = await Promise.all([
      prisma.growthBrandAudit.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: query.limit,
        skip: query.offset,
      }),
      prisma.growthBrandAudit.count({ where }),
    ]);
    return { data: rows.map(mapBrandAudit), total };
  }

  async findBrandAuditById(tenantId: string, id: string): Promise<BrandAudit | null> {
    const row = await prisma.growthBrandAudit.findFirst({ where: { tenantId, id, deletedAt: null } });
    return row ? mapBrandAudit(row) : null;
  }

  async findBrandAuditByProspect(tenantId: string, prospectId: string): Promise<BrandAudit | null> {
    const row = await prisma.growthBrandAudit.findFirst({
      where: { tenantId, prospectId, deletedAt: null },
      orderBy: { createdAt: "desc" },
    });
    return row ? mapBrandAudit(row) : null;
  }

  async createBrandAudit(tenantId: string, input: CreateBrandAuditInput): Promise<BrandAudit> {
    const row = await prisma.growthBrandAudit.create({
      data: { tenantId, prospectId: input.prospectId, type: input.type, notes: input.notes ?? null },
    });
    return mapBrandAudit(row);
  }

  async updateBrandAuditStatus(tenantId: string, id: string, status: string): Promise<BrandAudit | null> {
    const result = await prisma.growthBrandAudit.updateMany({
      where: { tenantId, id, deletedAt: null },
      data: { status, updatedAt: new Date() },
    });
    if (result.count === 0) return null;
    return this.findBrandAuditById(tenantId, id);
  }
}
