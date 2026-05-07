import { prisma } from "@/core/prisma/client";
import type { Prisma } from "@prisma/client";
import type { DeveloperInput, ListAuditsQuery } from "./brand-audit.dto";

// ── Types returned by the repository ─────────────────────────────────────────

export type AuditRow = {
  id: string;
  tenantId: string;
  developerId: string;
  prospectId: string | null;
  auditorName: string | null;
  auditDate: string;
  objective: string | null;
  knownRedFlags: string | null;
  overallScore: number | null;
  status: string;
  collectedData: unknown;
  dataSourceStatus: unknown;
  dimensions: unknown;
  assets: unknown;
  manualOverrides: unknown;
  createdAt: string;
  updatedAt: string;
  developer: DeveloperRow | null;
};

export type DeveloperRow = {
  id: string;
  tenantId: string;
  brandName: string;
  legalName: string | null;
  domain: string | null;
  city: string | null;
  yearEstablished: number | null;
  positioning: string | null;
  productType: string | null;
  microMarkets: string[];
  targetSegments: string[];
  promoterName: string | null;
  promoterLinkedIn: string | null;
  websiteUrl: string | null;
  instagramHandle: string | null;
  facebookUrl: string | null;
  linkedinUrl: string | null;
  youtubeUrl: string | null;
  whatsappNumber: string | null;
  gmbPlaceId: string | null;
  acres99Url: string | null;
  housingUrl: string | null;
  magicbricksUrl: string | null;
  reraNumbers: string[];
  reraState: string | null;
  adSpendRange: string | null;
  adPlatforms: string[];
  crmTool: string | null;
  competitors: string[];
  metaAdLibraryName: string | null;
  pdlData: unknown;
  collateralDocs: unknown;
  createdAt: string;
  updatedAt: string;
};

// ── Mappers ───────────────────────────────────────────────────────────────────

function mapDeveloper(row: Record<string, unknown>): DeveloperRow {
  return {
    id: row["id"] as string,
    tenantId: row["tenantId"] as string,
    brandName: row["brandName"] as string,
    legalName: (row["legalName"] as string | null) ?? null,
    domain: (row["domain"] as string | null) ?? null,
    city: (row["city"] as string | null) ?? null,
    yearEstablished: (row["yearEstablished"] as number | null) ?? null,
    positioning: (row["positioning"] as string | null) ?? null,
    productType: (row["productType"] as string | null) ?? null,
    microMarkets: (row["microMarkets"] as string[]) ?? [],
    targetSegments: (row["targetSegments"] as string[]) ?? [],
    promoterName: (row["promoterName"] as string | null) ?? null,
    promoterLinkedIn: (row["promoterLinkedIn"] as string | null) ?? null,
    websiteUrl: (row["websiteUrl"] as string | null) ?? null,
    instagramHandle: (row["instagramHandle"] as string | null) ?? null,
    facebookUrl: (row["facebookUrl"] as string | null) ?? null,
    linkedinUrl: (row["linkedinUrl"] as string | null) ?? null,
    youtubeUrl: (row["youtubeUrl"] as string | null) ?? null,
    whatsappNumber: (row["whatsappNumber"] as string | null) ?? null,
    gmbPlaceId: (row["gmbPlaceId"] as string | null) ?? null,
    acres99Url: (row["acres99Url"] as string | null) ?? null,
    housingUrl: (row["housingUrl"] as string | null) ?? null,
    magicbricksUrl: (row["magicbricksUrl"] as string | null) ?? null,
    reraNumbers: (row["reraNumbers"] as string[]) ?? [],
    reraState: (row["reraState"] as string | null) ?? null,
    adSpendRange: (row["adSpendRange"] as string | null) ?? null,
    adPlatforms: (row["adPlatforms"] as string[]) ?? [],
    crmTool: (row["crmTool"] as string | null) ?? null,
    competitors: (row["competitors"] as string[]) ?? [],
    metaAdLibraryName: (row["metaAdLibraryName"] as string | null) ?? null,
    pdlData: (row["pdlData"] as unknown) ?? null,
    collateralDocs: (row["collateralDocs"] as unknown) ?? [],
    createdAt: (row["createdAt"] as Date).toISOString(),
    updatedAt: (row["updatedAt"] as Date).toISOString(),
  };
}

function mapAudit(
  row: Record<string, unknown>,
  developer?: Record<string, unknown> | null,
): AuditRow {
  return {
    id: row["id"] as string,
    tenantId: row["tenantId"] as string,
    developerId: row["developerId"] as string,
    prospectId: (row["prospectId"] as string | null) ?? null,
    auditorName: (row["auditorName"] as string | null) ?? null,
    auditDate: (row["auditDate"] as Date).toISOString(),
    objective: (row["objective"] as string | null) ?? null,
    knownRedFlags: (row["knownRedFlags"] as string | null) ?? null,
    overallScore: (row["overallScore"] as number | null) ?? null,
    status: row["status"] as string,
    collectedData: row["collectedData"] ?? null,
    dataSourceStatus: row["dataSourceStatus"] ?? null,
    dimensions: row["dimensions"] ?? [],
    assets: row["assets"] ?? [],
    manualOverrides: row["manualOverrides"] ?? null,
    createdAt: (row["createdAt"] as Date).toISOString(),
    updatedAt: (row["updatedAt"] as Date).toISOString(),
    developer: developer ? mapDeveloper(developer) : null,
  };
}

// ── Repository ────────────────────────────────────────────────────────────────

export class BrandAuditRepository {
  /**
   * Upsert developer (match on brandName case-insensitive or domain within tenant),
   * then create a new audit linked to that developer.
   */
  async create(
    tenantId: string,
    devData: DeveloperInput,
    auditData: {
      auditorName?: string;
      objective?: string;
      knownRedFlags?: string;
      prospectId?: string;
    },
  ): Promise<AuditRow> {
    // Upsert developer: find by brandName (case-insensitive) or domain within tenant
    const brandNameLower = devData.brandName.toLowerCase();

    const existingDev = await prisma.auditDeveloper.findFirst({
      where: {
        tenantId,
        OR: [
          { brandName: { equals: devData.brandName, mode: "insensitive" } },
          ...(devData.domain ? [{ domain: devData.domain.toLowerCase() }] : []),
        ],
      },
    });

    let developerId: string;

    if (existingDev) {
      // Update existing developer with latest data
      const updated = await prisma.auditDeveloper.update({
        where: { id: existingDev.id },
        data: {
          ...devData,
          brandName: devData.brandName,
          domain: devData.domain?.toLowerCase() ?? null,
          collateralDocs: (devData.collateralDocs ??
            []) as Prisma.InputJsonValue,
          updatedAt: new Date(),
        },
      });
      developerId = updated.id;
    } else {
      const created = await prisma.auditDeveloper.create({
        data: {
          tenantId,
          ...devData,
          brandName: devData.brandName,
          domain: devData.domain?.toLowerCase() ?? null,
          collateralDocs: (devData.collateralDocs ??
            []) as Prisma.InputJsonValue,
        },
      });
      developerId = created.id;
    }

    const audit = await prisma.audit.create({
      data: {
        tenantId,
        developerId,
        prospectId: auditData.prospectId ?? null,
        auditorName: auditData.auditorName ?? null,
        objective: auditData.objective ?? null,
        knownRedFlags: auditData.knownRedFlags ?? null,
        status: "DRAFT",
        dimensions: [],
        assets: [],
      },
      include: { developer: true },
    });

    return mapAudit(
      audit as unknown as Record<string, unknown>,
      audit.developer as unknown as Record<string, unknown>,
    );
  }

  /**
   * Find audit by id within tenant, including developer relation.
   */
  async findById(tenantId: string, id: string): Promise<AuditRow | null> {
    const row = await prisma.audit.findFirst({
      where: { tenantId, id, deletedAt: null },
      include: { developer: true },
    });
    if (!row) return null;
    return mapAudit(
      row as unknown as Record<string, unknown>,
      row.developer as unknown as Record<string, unknown>,
    );
  }

  /**
   * List audits with developer included.
   */
  async list(
    tenantId: string,
    query: ListAuditsQuery,
  ): Promise<{ data: AuditRow[]; total: number }> {
    const offset = (query.page - 1) * query.limit;
    const where = {
      tenantId,
      deletedAt: null as null,
      ...(query.status ? { status: query.status } : {}),
      ...(query.search
        ? {
            developer: {
              brandName: {
                contains: query.search,
                mode: "insensitive" as const,
              },
            },
          }
        : {}),
    };

    const [rows, total] = await Promise.all([
      prisma.audit.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: query.limit,
        skip: offset,
        include: { developer: true },
      }),
      prisma.audit.count({ where }),
    ]);

    return {
      data: rows.map((r) =>
        mapAudit(
          r as unknown as Record<string, unknown>,
          r.developer as unknown as Record<string, unknown>,
        ),
      ),
      total,
    };
  }

  /**
   * Patch status + optional extra fields on an audit.
   */
  async updateStatus(
    tenantId: string,
    id: string,
    status: string,
    extra?: Prisma.AuditUpdateInput,
  ): Promise<AuditRow | null> {
    const result = await prisma.audit.updateMany({
      where: { tenantId, id, deletedAt: null },
      data: { status, ...extra, updatedAt: new Date() },
    });
    if (result.count === 0) return null;
    return this.findById(tenantId, id);
  }

  /**
   * Merge-patch the collectedData JSON field.
   */
  async updateCollectedData(
    tenantId: string,
    id: string,
    patch: Record<string, unknown>,
  ): Promise<void> {
    const row = await prisma.audit.findUniqueOrThrow({ where: { id } });
    if (row.tenantId !== tenantId)
      throw new Error(`Audit ${id} not found in tenant ${tenantId}`);
    const existing = (row.collectedData as Record<string, unknown>) ?? {};
    await prisma.audit.update({
      where: { id },
      data: {
        collectedData: { ...existing, ...patch } as Prisma.InputJsonValue,
      },
    });
  }

  /**
   * Find-and-replace (by code) in the dimensions JSON array.
   * If no entry for code exists yet, it is appended.
   */
  async updateDimension(
    tenantId: string,
    id: string,
    dimensionData: Record<string, unknown>,
  ): Promise<void> {
    const row = await prisma.audit.findUniqueOrThrow({ where: { id } });
    if (row.tenantId !== tenantId)
      throw new Error(`Audit ${id} not found in tenant ${tenantId}`);

    const code = dimensionData["code"] as string;
    const dims = (row.dimensions as Array<Record<string, unknown>>) ?? [];
    const idx = dims.findIndex((d) => d["code"] === code);

    if (idx >= 0) {
      dims[idx] = { ...dims[idx], ...dimensionData };
    } else {
      dims.push(dimensionData);
    }

    await prisma.audit.update({
      where: { id },
      data: { dimensions: dims as Prisma.InputJsonValue },
    });
  }

  /**
   * Save (overwrite) the manualOverrides JSON field.
   */
  async updateManualOverrides(
    tenantId: string,
    id: string,
    overrides: Record<string, unknown>,
  ): Promise<void> {
    await prisma.audit.updateMany({
      where: { tenantId, id, deletedAt: null },
      data: {
        manualOverrides: overrides as Prisma.InputJsonValue,
        updatedAt: new Date(),
      },
    });
  }

  /**
   * Find the most recent non-deleted audit linked to a given growth prospect.
   */
  async findByProspectId(
    tenantId: string,
    prospectId: string,
  ): Promise<AuditRow | null> {
    const row = await prisma.audit.findFirst({
      where: { tenantId, prospectId, deletedAt: null },
      orderBy: { createdAt: "desc" },
      include: { developer: true },
    });
    if (!row) return null;
    return mapAudit(
      row as unknown as Record<string, unknown>,
      row.developer as unknown as Record<string, unknown>,
    );
  }

  /**
   * Append an asset object to the Audit.assets JSON array.
   */
  async addAsset(
    tenantId: string,
    auditId: string,
    asset: Record<string, unknown>,
  ): Promise<void> {
    const row = await prisma.audit.findFirst({
      where: { tenantId, id: auditId, deletedAt: null },
      select: { assets: true },
    });
    if (!row) throw new Error(`Audit ${auditId} not found`);
    const existing = Array.isArray(row.assets) ? (row.assets as unknown[]) : [];
    await prisma.audit.update({
      where: { id: auditId },
      data: {
        assets: [...existing, asset] as Prisma.InputJsonValue,
        updatedAt: new Date(),
      },
    });
  }

  /**
   * Set or replace the prospect link on an existing audit.
   */
  async linkToProspect(
    tenantId: string,
    auditId: string,
    prospectId: string,
  ): Promise<void> {
    await prisma.audit.updateMany({
      where: { tenantId, id: auditId, deletedAt: null },
      data: { prospectId, updatedAt: new Date() },
    });
  }

  /**
   * Backfill: for each AuditDeveloper in this tenant, find a GrowthProspect whose
   * company name matches the developer's brandName (case-insensitive). When there is
   * exactly one unambiguous match, link the most recent un-linked audit to that prospect.
   * Returns the number of audits updated.
   *
   * Safe to call multiple times — only processes audits where prospectId IS NULL.
   */
  async backfillProspectLinks(tenantId: string): Promise<number> {
    const developers = await prisma.auditDeveloper.findMany({
      where: { tenantId },
      include: {
        audits: {
          where: { tenantId, deletedAt: null, prospectId: null },
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    let updated = 0;

    for (const dev of developers) {
      if (dev.audits.length === 0) continue;

      const prospects = await prisma.growthProspect.findMany({
        where: {
          tenantId,
          deletedAt: null,
          company: { equals: dev.brandName, mode: "insensitive" },
        },
        select: { id: true },
      });

      if (prospects.length !== 1) continue;

      const auditId = dev.audits[0]!.id;
      await prisma.audit.update({
        where: { id: auditId },
        data: { prospectId: prospects[0]!.id, updatedAt: new Date() },
      });
      updated++;
    }

    return updated;
  }

  /**
   * Find an existing COMPLETE audit for the same developer (by brandName or domain) within tenant.
   */
  async findCompleteAuditForBrand(
    tenantId: string,
    brandName: string,
    domain?: string,
  ): Promise<AuditRow | null> {
    const existingDev = await prisma.auditDeveloper.findFirst({
      where: {
        tenantId,
        OR: [
          { brandName: { equals: brandName, mode: "insensitive" } },
          ...(domain ? [{ domain: domain.toLowerCase() }] : []),
        ],
      },
    });

    if (!existingDev) return null;

    const audit = await prisma.audit.findFirst({
      where: {
        tenantId,
        developerId: existingDev.id,
        status: "COMPLETE",
        deletedAt: null,
      },
      orderBy: { createdAt: "desc" },
      include: { developer: true },
    });

    if (!audit) return null;
    return mapAudit(
      audit as unknown as Record<string, unknown>,
      audit.developer as unknown as Record<string, unknown>,
    );
  }
}
