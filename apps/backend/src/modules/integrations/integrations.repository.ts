import { prisma } from "@/core/prisma/client";
import type { Prisma } from "@prisma/client";
import type { SyncLogsQuery } from "./integrations.dto";

// ── Row types ─────────────────────────────────────────────────────────────────

export type ClientRow = {
  id: string;
  tenantId: string;
  name: string;
  industry: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ProviderRow = {
  id: string;
  name: string;
  category: string;
  description: string;
  authType: string;
  logoUrl: string;
  moduleRelevance: string[];
  isActive: boolean;
  createdAt: string;
};

export type IntegrationRow = {
  id: string;
  tenantId: string;
  clientId: string;
  providerId: string;
  status: string;
  accountLabel: string | null;
  credentials: unknown;
  lastSyncAt: string | null;
  metadata: unknown;
  createdAt: string;
  updatedAt: string;
  provider: ProviderRow;
};

export type SyncLogRow = {
  id: string;
  integrationId: string;
  triggeredAt: string;
  status: string;
  recordsSynced: number | null;
  errorMessage: string | null;
};

export type PlatformIntegrationRow = {
  id: string;
  providerId: string;
  status: string;
  accountLabel: string | null;
  credentials: unknown;
  lastSyncAt: string | null;
  createdAt: string;
  updatedAt: string;
  provider: ProviderRow;
};

// ── Mappers ───────────────────────────────────────────────────────────────────

function mapClient(row: Record<string, unknown>): ClientRow {
  return {
    id: row["id"] as string,
    tenantId: row["tenantId"] as string,
    name: row["name"] as string,
    industry: (row["industry"] as string | null) ?? null,
    avatarUrl: (row["avatarUrl"] as string | null) ?? null,
    createdAt: (row["createdAt"] as Date).toISOString(),
    updatedAt: (row["updatedAt"] as Date).toISOString(),
  };
}

function mapProvider(row: Record<string, unknown>): ProviderRow {
  return {
    id: row["id"] as string,
    name: row["name"] as string,
    category: row["category"] as string,
    description: row["description"] as string,
    authType: row["authType"] as string,
    logoUrl: row["logoUrl"] as string,
    moduleRelevance: (row["moduleRelevance"] as string[]) ?? [],
    isActive: row["isActive"] as boolean,
    createdAt: (row["createdAt"] as Date).toISOString(),
  };
}

function mapIntegration(
  row: Record<string, unknown>,
  provider: Record<string, unknown>,
): IntegrationRow {
  return {
    id: row["id"] as string,
    tenantId: row["tenantId"] as string,
    clientId: row["clientId"] as string,
    providerId: row["providerId"] as string,
    status: row["status"] as string,
    accountLabel: (row["accountLabel"] as string | null) ?? null,
    credentials: row["credentials"] ?? {},
    lastSyncAt:
      row["lastSyncAt"] != null
        ? (row["lastSyncAt"] as Date).toISOString()
        : null,
    metadata: row["metadata"] ?? null,
    createdAt: (row["createdAt"] as Date).toISOString(),
    updatedAt: (row["updatedAt"] as Date).toISOString(),
    provider: mapProvider(provider),
  };
}

function mapSyncLog(row: Record<string, unknown>): SyncLogRow {
  return {
    id: row["id"] as string,
    integrationId: row["integrationId"] as string,
    triggeredAt: (row["triggeredAt"] as Date).toISOString(),
    status: row["status"] as string,
    recordsSynced: (row["recordsSynced"] as number | null) ?? null,
    errorMessage: (row["errorMessage"] as string | null) ?? null,
  };
}

function mapPlatformIntegration(
  row: Record<string, unknown>,
  provider: Record<string, unknown>,
): PlatformIntegrationRow {
  return {
    id: row["id"] as string,
    providerId: row["providerId"] as string,
    status: row["status"] as string,
    accountLabel: (row["accountLabel"] as string | null) ?? null,
    credentials: row["credentials"] ?? {},
    lastSyncAt:
      row["lastSyncAt"] != null
        ? (row["lastSyncAt"] as Date).toISOString()
        : null,
    createdAt: (row["createdAt"] as Date).toISOString(),
    updatedAt: (row["updatedAt"] as Date).toISOString(),
    provider: mapProvider(provider),
  };
}

// ── Repository ────────────────────────────────────────────────────────────────

export class IntegrationsRepository {
  // ── Clients ────────────────────────────────────────────────────────────────

  async findClients(tenantId: string): Promise<ClientRow[]> {
    const rows = await prisma.client.findMany({
      where: { tenantId },
      orderBy: { createdAt: "asc" },
    });
    return rows.map((r) => mapClient(r as unknown as Record<string, unknown>));
  }

  async findClientById(
    tenantId: string,
    id: string,
  ): Promise<ClientRow | null> {
    const row = await prisma.client.findFirst({ where: { tenantId, id } });
    if (!row) return null;
    return mapClient(row as unknown as Record<string, unknown>);
  }

  async createClient(
    tenantId: string,
    data: { name: string; industry?: string | null; avatarUrl?: string | null },
  ): Promise<ClientRow> {
    const row = await prisma.client.create({
      data: {
        tenantId,
        name: data.name,
        industry: data.industry ?? null,
        avatarUrl: data.avatarUrl ?? null,
      },
    });
    return mapClient(row as unknown as Record<string, unknown>);
  }

  // ── Providers ──────────────────────────────────────────────────────────────

  async findAllProviders(): Promise<ProviderRow[]> {
    const rows = await prisma.provider.findMany({
      where: { isActive: true },
      orderBy: [{ category: "asc" }, { name: "asc" }],
    });
    return rows.map((r) =>
      mapProvider(r as unknown as Record<string, unknown>),
    );
  }

  async findProviderById(id: string): Promise<ProviderRow | null> {
    const row = await prisma.provider.findFirst({
      where: { id, isActive: true },
    });
    if (!row) return null;
    return mapProvider(row as unknown as Record<string, unknown>);
  }

  // ── Integrations ───────────────────────────────────────────────────────────

  async findIntegrations(
    tenantId: string,
    clientId: string,
  ): Promise<IntegrationRow[]> {
    const rows = await prisma.integration.findMany({
      where: { tenantId, clientId },
      include: { provider: true },
      orderBy: { createdAt: "desc" },
    });
    return rows.map((r) =>
      mapIntegration(
        r as unknown as Record<string, unknown>,
        r.provider as unknown as Record<string, unknown>,
      ),
    );
  }

  async findAllTenantIntegrations(tenantId: string): Promise<IntegrationRow[]> {
    const rows = await prisma.integration.findMany({
      where: { tenantId },
      include: { provider: true },
      orderBy: { createdAt: "desc" },
    });
    return rows.map((r) =>
      mapIntegration(
        r as unknown as Record<string, unknown>,
        r.provider as unknown as Record<string, unknown>,
      ),
    );
  }

  async findIntegration(
    tenantId: string,
    clientId: string,
    providerId: string,
  ): Promise<IntegrationRow | null> {
    const row = await prisma.integration.findUnique({
      where: { clientId_providerId: { clientId, providerId } },
      include: { provider: true },
    });
    // Enforce tenant isolation even though clientId is the primary scoping key.
    if (!row || row.tenantId !== tenantId) return null;
    return mapIntegration(
      row as unknown as Record<string, unknown>,
      row.provider as unknown as Record<string, unknown>,
    );
  }

  async findIntegrationById(
    tenantId: string,
    id: string,
  ): Promise<IntegrationRow | null> {
    const row = await prisma.integration.findFirst({
      where: { tenantId, id },
      include: { provider: true },
    });
    if (!row) return null;
    return mapIntegration(
      row as unknown as Record<string, unknown>,
      row.provider as unknown as Record<string, unknown>,
    );
  }

  async upsertIntegration(
    tenantId: string,
    clientId: string,
    providerId: string,
    data: {
      status: string;
      accountLabel?: string | null;
      credentials?: Prisma.InputJsonValue;
      lastSyncAt?: Date | null;
      metadata?: Prisma.InputJsonValue | null;
    },
  ): Promise<IntegrationRow> {
    const row = await prisma.integration.upsert({
      where: { clientId_providerId: { clientId, providerId } },
      create: {
        tenantId,
        clientId,
        providerId,
        status: data.status,
        accountLabel: data.accountLabel ?? null,
        credentials: data.credentials ?? {},
        lastSyncAt: data.lastSyncAt ?? null,
        metadata: data.metadata ?? null,
      },
      update: {
        status: data.status,
        ...(data.accountLabel !== undefined && {
          accountLabel: data.accountLabel,
        }),
        ...(data.credentials !== undefined && {
          credentials: data.credentials,
        }),
        ...(data.lastSyncAt !== undefined && { lastSyncAt: data.lastSyncAt }),
        ...(data.metadata !== undefined && { metadata: data.metadata }),
        updatedAt: new Date(),
      },
      include: { provider: true },
    });
    return mapIntegration(
      row as unknown as Record<string, unknown>,
      row.provider as unknown as Record<string, unknown>,
    );
  }

  async updateIntegrationStatus(
    tenantId: string,
    clientId: string,
    providerId: string,
    status: string,
    extra?: { lastSyncAt?: Date },
  ): Promise<void> {
    await prisma.integration.updateMany({
      where: { tenantId, clientId, providerId },
      data: { status, ...extra, updatedAt: new Date() },
    });
  }

  async deleteIntegration(
    tenantId: string,
    clientId: string,
    providerId: string,
  ): Promise<void> {
    await prisma.integration.deleteMany({
      where: { tenantId, clientId, providerId },
    });
  }

  // ── Sync logs ──────────────────────────────────────────────────────────────

  async createSyncLog(
    integrationId: string,
    status: string,
  ): Promise<SyncLogRow> {
    const row = await prisma.syncLog.create({
      data: { integrationId, status },
    });
    return mapSyncLog(row as unknown as Record<string, unknown>);
  }

  async updateSyncLog(
    id: string,
    data: {
      status: string;
      recordsSynced?: number | null;
      errorMessage?: string | null;
    },
  ): Promise<void> {
    await prisma.syncLog.update({ where: { id }, data });
  }

  async findSyncLogs(
    tenantId: string,
    clientId: string,
    providerId: string,
    query: SyncLogsQuery,
  ): Promise<{ data: SyncLogRow[]; total: number }> {
    const integration = await prisma.integration.findUnique({
      where: { clientId_providerId: { clientId, providerId } },
      select: { id: true, tenantId: true },
    });
    if (!integration || integration.tenantId !== tenantId)
      return { data: [], total: 0 };

    const where = { integrationId: integration.id };
    const [rows, total] = await Promise.all([
      prisma.syncLog.findMany({
        where,
        orderBy: { triggeredAt: "desc" },
        take: query.limit,
        skip: query.offset,
      }),
      prisma.syncLog.count({ where }),
    ]);

    return {
      data: rows.map((r) =>
        mapSyncLog(r as unknown as Record<string, unknown>),
      ),
      total,
    };
  }

  // ── Platform integrations ──────────────────────────────────────────────────

  async findPlatformIntegrations(): Promise<PlatformIntegrationRow[]> {
    const rows = await prisma.platformIntegration.findMany({
      include: { provider: true },
      orderBy: { createdAt: "desc" },
    });
    return rows.map((r) =>
      mapPlatformIntegration(
        r as unknown as Record<string, unknown>,
        r.provider as unknown as Record<string, unknown>,
      ),
    );
  }

  async upsertPlatformIntegration(
    providerId: string,
    data: {
      status: string;
      accountLabel?: string | null;
      credentials?: Prisma.InputJsonValue;
      lastSyncAt?: Date | null;
    },
  ): Promise<PlatformIntegrationRow> {
    const row = await prisma.platformIntegration.upsert({
      where: { providerId },
      create: {
        providerId,
        status: data.status,
        accountLabel: data.accountLabel ?? null,
        credentials: data.credentials ?? {},
        lastSyncAt: data.lastSyncAt ?? null,
      },
      update: {
        status: data.status,
        ...(data.accountLabel !== undefined && {
          accountLabel: data.accountLabel,
        }),
        ...(data.credentials !== undefined && {
          credentials: data.credentials,
        }),
        ...(data.lastSyncAt !== undefined && { lastSyncAt: data.lastSyncAt }),
        updatedAt: new Date(),
      },
      include: { provider: true },
    });
    return mapPlatformIntegration(
      row as unknown as Record<string, unknown>,
      row.provider as unknown as Record<string, unknown>,
    );
  }
}
