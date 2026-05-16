import { prisma } from "@/core/prisma/client";
import type { Prisma } from "@prisma/client";

// ── Row types ─────────────────────────────────────────────────────────────────

export type SeoSnapshotRow = {
  id: string;
  tenantId: string;
  clientId: string;
  syncDate: string;
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number;
  indexedPages: number;
  crawlErrors: number;
  mobileIssues: number;
  topPages: unknown;
  topQueries: unknown;
  organicSessions: unknown;
  createdAt: string;
};

export type SeoKeywordRow = {
  id: string;
  tenantId: string;
  clientId: string;
  keyword: string;
  currentRank: number | null;
  previousRank: number | null;
  searchVolume: number | null;
  weeklyHistory: unknown;
  createdAt: string;
  updatedAt: string;
};

export type SeoActionRow = {
  id: string;
  tenantId: string;
  clientId: string;
  title: string;
  description: string | null;
  category: string;
  impactLevel: string;
  effortLevel: string;
  status: string;
  assignedTo: string | null;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GoogleIntegrationRow = {
  id: string;
  status: string;
  credentials: unknown;
  accountLabel: string | null;
  metadata: unknown;
  lastSyncAt: string | null;
};

// ── Mappers ───────────────────────────────────────────────────────────────────

function mapSnapshot(r: Record<string, unknown>): SeoSnapshotRow {
  return {
    id: r["id"] as string,
    tenantId: r["tenantId"] as string,
    clientId: r["clientId"] as string,
    syncDate: (r["syncDate"] as Date).toISOString(),
    clicks: r["clicks"] as number,
    impressions: r["impressions"] as number,
    ctr: r["ctr"] as number,
    avgPosition: r["avgPosition"] as number,
    indexedPages: r["indexedPages"] as number,
    crawlErrors: r["crawlErrors"] as number,
    mobileIssues: r["mobileIssues"] as number,
    topPages: r["topPages"] ?? [],
    topQueries: r["topQueries"] ?? [],
    organicSessions: r["organicSessions"] ?? [],
    createdAt: (r["createdAt"] as Date).toISOString(),
  };
}

function mapKeyword(r: Record<string, unknown>): SeoKeywordRow {
  return {
    id: r["id"] as string,
    tenantId: r["tenantId"] as string,
    clientId: r["clientId"] as string,
    keyword: r["keyword"] as string,
    currentRank: (r["currentRank"] as number | null) ?? null,
    previousRank: (r["previousRank"] as number | null) ?? null,
    searchVolume: (r["searchVolume"] as number | null) ?? null,
    weeklyHistory: r["weeklyHistory"] ?? [],
    createdAt: (r["createdAt"] as Date).toISOString(),
    updatedAt: (r["updatedAt"] as Date).toISOString(),
  };
}

function mapAction(r: Record<string, unknown>): SeoActionRow {
  return {
    id: r["id"] as string,
    tenantId: r["tenantId"] as string,
    clientId: r["clientId"] as string,
    title: r["title"] as string,
    description: (r["description"] as string | null) ?? null,
    category: (r["category"] as string) ?? "TECHNICAL",
    impactLevel: r["impactLevel"] as string,
    effortLevel: r["effortLevel"] as string,
    status: r["status"] as string,
    assignedTo: (r["assignedTo"] as string | null) ?? null,
    dueDate: r["dueDate"] != null ? (r["dueDate"] as Date).toISOString() : null,
    createdAt: (r["createdAt"] as Date).toISOString(),
    updatedAt: (r["updatedAt"] as Date).toISOString(),
  };
}

function mapGoogleIntegration(
  r: Record<string, unknown>,
): GoogleIntegrationRow {
  return {
    id: r["id"] as string,
    status: r["status"] as string,
    credentials: r["credentials"] ?? {},
    accountLabel: (r["accountLabel"] as string | null) ?? null,
    metadata: r["metadata"] ?? null,
    lastSyncAt:
      r["lastSyncAt"] != null ? (r["lastSyncAt"] as Date).toISOString() : null,
  };
}

// ── Repository ────────────────────────────────────────────────────────────────

export class SeoRepository {
  // ── Client validation ──────────────────────────────────────────────────────

  async clientExists(tenantId: string, clientId: string): Promise<boolean> {
    const row = await prisma.client.findFirst({
      where: { tenantId, id: clientId },
      select: { id: true },
    });
    return row !== null;
  }

  // ── Google integrations ────────────────────────────────────────────────────
  // Queries the int_integrations table to look up a specific provider's
  // credentials for the given client. This is cross-module Prisma access —
  // acceptable because it is read-only and we query a shared physical database.

  async findGoogleIntegration(
    tenantId: string,
    clientId: string,
    providerName: string,
  ): Promise<GoogleIntegrationRow | null> {
    const row = await prisma.integration.findFirst({
      where: {
        tenantId,
        clientId,
        provider: { name: providerName },
      },
      select: {
        id: true,
        status: true,
        credentials: true,
        accountLabel: true,
        metadata: true,
        lastSyncAt: true,
      },
    });
    if (!row) return null;
    return mapGoogleIntegration(row as unknown as Record<string, unknown>);
  }

  async updateIntegrationCredentials(
    integrationId: string,
    credentials: Prisma.InputJsonValue,
    lastSyncAt?: Date,
  ): Promise<void> {
    await prisma.integration.update({
      where: { id: integrationId },
      data: {
        credentials,
        ...(lastSyncAt !== undefined && { lastSyncAt }),
        updatedAt: new Date(),
      },
    });
  }

  // ── Snapshots ──────────────────────────────────────────────────────────────

  async findLatestSnapshot(
    tenantId: string,
    clientId: string,
  ): Promise<SeoSnapshotRow | null> {
    const row = await prisma.seoSnapshot.findFirst({
      where: { tenantId, clientId },
      orderBy: { syncDate: "desc" },
    });
    if (!row) return null;
    return mapSnapshot(row as unknown as Record<string, unknown>);
  }

  async findRecentSnapshots(
    tenantId: string,
    clientId: string,
    limit = 6,
  ): Promise<SeoSnapshotRow[]> {
    const rows = await prisma.seoSnapshot.findMany({
      where: { tenantId, clientId },
      orderBy: { syncDate: "desc" },
      take: limit,
    });
    return rows.map((r) =>
      mapSnapshot(r as unknown as Record<string, unknown>),
    );
  }

  async createSnapshot(
    tenantId: string,
    clientId: string,
    data: {
      clicks: number;
      impressions: number;
      ctr: number;
      avgPosition: number;
      indexedPages: number;
      crawlErrors: number;
      mobileIssues: number;
      topPages: Prisma.InputJsonValue;
      topQueries: Prisma.InputJsonValue;
      organicSessions: Prisma.InputJsonValue;
    },
  ): Promise<SeoSnapshotRow> {
    const row = await prisma.seoSnapshot.create({
      data: { tenantId, clientId, syncDate: new Date(), ...data },
    });
    return mapSnapshot(row as unknown as Record<string, unknown>);
  }

  // ── Keywords ───────────────────────────────────────────────────────────────

  async findKeywords(
    tenantId: string,
    clientId: string,
  ): Promise<SeoKeywordRow[]> {
    const rows = await prisma.seoKeyword.findMany({
      where: { tenantId, clientId },
      orderBy: { createdAt: "asc" },
    });
    return rows.map((r) => mapKeyword(r as unknown as Record<string, unknown>));
  }

  async findKeywordByText(
    tenantId: string,
    clientId: string,
    keyword: string,
  ): Promise<SeoKeywordRow | null> {
    const row = await prisma.seoKeyword.findUnique({
      where: { tenantId_clientId_keyword: { tenantId, clientId, keyword } },
    });
    if (!row) return null;
    return mapKeyword(row as unknown as Record<string, unknown>);
  }

  async findKeywordById(
    tenantId: string,
    clientId: string,
    id: string,
  ): Promise<SeoKeywordRow | null> {
    const row = await prisma.seoKeyword.findFirst({
      where: { tenantId, clientId, id },
    });
    if (!row) return null;
    return mapKeyword(row as unknown as Record<string, unknown>);
  }

  async createKeyword(
    tenantId: string,
    clientId: string,
    keyword: string,
    searchVolume?: number,
  ): Promise<SeoKeywordRow> {
    const row = await prisma.seoKeyword.create({
      data: {
        tenantId,
        clientId,
        keyword,
        searchVolume: searchVolume ?? null,
      },
    });
    return mapKeyword(row as unknown as Record<string, unknown>);
  }

  async updateKeywordRanks(
    keywordId: string,
    tenantId: string,
    clientId: string,
    currentRank: number | null,
    weeklyHistory: Prisma.InputJsonValue,
  ): Promise<void> {
    const existing = await prisma.seoKeyword.findFirst({
      where: { tenantId, clientId, id: keywordId },
      select: { currentRank: true },
    });
    await prisma.seoKeyword.update({
      where: { id: keywordId },
      data: {
        previousRank: existing?.currentRank ?? null,
        currentRank,
        weeklyHistory,
        updatedAt: new Date(),
      },
    });
  }

  async deleteKeyword(
    tenantId: string,
    clientId: string,
    id: string,
  ): Promise<void> {
    await prisma.seoKeyword.deleteMany({ where: { tenantId, clientId, id } });
  }

  // ── Actions ────────────────────────────────────────────────────────────────

  // ── Actions (dashboard — top pending sorted by impact) ────────────────────

  async findActions(
    tenantId: string,
    clientId: string,
  ): Promise<SeoActionRow[]> {
    const impactOrder: Record<string, number> = { HIGH: 0, MEDIUM: 1, LOW: 2 };
    const rows = await prisma.seoAction.findMany({
      where: { tenantId, clientId, status: { not: "COMPLETED" } },
      orderBy: { createdAt: "desc" },
    });
    return rows
      .map((r) => mapAction(r as unknown as Record<string, unknown>))
      .sort(
        (a, b) =>
          (impactOrder[a.impactLevel] ?? 2) - (impactOrder[b.impactLevel] ?? 2),
      );
  }

  // ── Actions (queue page — all, with optional filters) ─────────────────────

  async findAllActions(
    tenantId: string,
    clientId: string,
    filters?: {
      status?: string;
      impactLevel?: string;
      effortLevel?: string;
      category?: string;
    },
  ): Promise<SeoActionRow[]> {
    const where: Record<string, unknown> = { tenantId, clientId };
    if (filters?.status) where["status"] = filters.status;
    if (filters?.impactLevel) where["impactLevel"] = filters.impactLevel;
    if (filters?.effortLevel) where["effortLevel"] = filters.effortLevel;
    if (filters?.category) where["category"] = filters.category;

    const rows = await prisma.seoAction.findMany({
      where: where as Prisma.SeoActionWhereInput,
      orderBy: [{ createdAt: "desc" }],
    });
    return rows.map((r) => mapAction(r as unknown as Record<string, unknown>));
  }

  async findActionById(
    tenantId: string,
    clientId: string,
    actionId: string,
  ): Promise<SeoActionRow | null> {
    const row = await prisma.seoAction.findFirst({
      where: { tenantId, clientId, id: actionId },
    });
    if (!row) return null;
    return mapAction(row as unknown as Record<string, unknown>);
  }

  async getActionCounts(
    tenantId: string,
    clientId: string,
  ): Promise<{
    total: number;
    pending: number;
    inProgress: number;
    completed: number;
  }> {
    const [total, pending, inProgress, completed] = await Promise.all([
      prisma.seoAction.count({ where: { tenantId, clientId } }),
      prisma.seoAction.count({
        where: { tenantId, clientId, status: "PENDING" },
      }),
      prisma.seoAction.count({
        where: { tenantId, clientId, status: "IN_PROGRESS" },
      }),
      prisma.seoAction.count({
        where: { tenantId, clientId, status: "COMPLETED" },
      }),
    ]);
    return { total, pending, inProgress, completed };
  }

  async createAction(
    tenantId: string,
    clientId: string,
    data: {
      title: string;
      description?: string;
      category?: string;
      impactLevel: string;
      effortLevel: string;
      assignedTo?: string;
      dueDate?: string;
    },
  ): Promise<SeoActionRow> {
    const row = await prisma.seoAction.create({
      data: {
        tenantId,
        clientId,
        title: data.title,
        description: data.description ?? null,
        category: data.category ?? "TECHNICAL",
        impactLevel: data.impactLevel,
        effortLevel: data.effortLevel,
        status: "PENDING",
        assignedTo: data.assignedTo ?? null,
        dueDate: data.dueDate ? new Date(data.dueDate) : null,
      },
    });
    return mapAction(row as unknown as Record<string, unknown>);
  }

  async updateAction(
    tenantId: string,
    clientId: string,
    actionId: string,
    data: {
      title?: string;
      description?: string | null;
      category?: string;
      impactLevel?: string;
      effortLevel?: string;
      status?: string;
      assignedTo?: string | null;
      dueDate?: string | null;
    },
  ): Promise<SeoActionRow> {
    const row = await prisma.seoAction.update({
      where: { id: actionId },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.description !== undefined && {
          description: data.description,
        }),
        ...(data.category !== undefined && { category: data.category }),
        ...(data.impactLevel !== undefined && {
          impactLevel: data.impactLevel,
        }),
        ...(data.effortLevel !== undefined && {
          effortLevel: data.effortLevel,
        }),
        ...(data.status !== undefined && { status: data.status }),
        ...(data.assignedTo !== undefined && { assignedTo: data.assignedTo }),
        ...(data.dueDate !== undefined && {
          dueDate: data.dueDate ? new Date(data.dueDate) : null,
        }),
        updatedAt: new Date(),
      },
    });
    return mapAction(row as unknown as Record<string, unknown>);
  }

  async deleteAction(
    tenantId: string,
    clientId: string,
    actionId: string,
  ): Promise<void> {
    await prisma.seoAction.deleteMany({
      where: { tenantId, clientId, id: actionId },
    });
  }

  async deleteActionsByClient(
    tenantId: string,
    clientId: string,
  ): Promise<void> {
    await prisma.seoAction.deleteMany({ where: { tenantId, clientId } });
  }
}
