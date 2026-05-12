import { IntegrationsRepository } from "./integrations.repository";
import type {
  ClientRow,
  IntegrationRow,
  ProviderRow,
  SyncLogRow,
  PlatformIntegrationRow,
} from "./integrations.repository";
import type {
  CreateClientInput,
  ConnectApiKeyBody,
  ConnectOAuthBody,
  SyncLogsQuery,
} from "./integrations.dto";
import {
  ClientNotFoundError,
  IntegrationNotFoundError,
  IntegrationNotConnectedError,
  InvalidAuthTypeError,
  ProviderNotFoundError,
} from "./integrations.errors";

// ── Module readiness map ──────────────────────────────────────────────────────

const MODULE_READINESS_PROVIDERS: Record<string, string[]> = {
  Ads: [
    "Meta Ads",
    "Google Ads",
    "LinkedIn Ads",
    "YouTube Ads",
    "Google Analytics 4",
    "Google Tag Manager",
    "Google Search Console",
    "SEMrush",
    "Ahrefs",
    "Hotjar",
    "Microsoft Clarity",
    "Programmatic Display",
    "OTT/CTV Ads",
  ],
  Social: [
    "Instagram",
    "LinkedIn Page",
    "YouTube Channel",
    "Twitter/X",
    "Meta Ads",
    "Google Business Profile",
    "WhatsApp Business",
  ],
  SEO: [
    "SEMrush",
    "Ahrefs",
    "Moz",
    "Screaming Frog",
    "Google Search Console",
    "Google Analytics 4",
    "Google Business Profile",
  ],
  Website: [
    "Google Analytics 4",
    "Google Tag Manager",
    "Hotjar",
    "Microsoft Clarity",
    "Google Search Console",
    "Cloudflare",
    "Screaming Frog",
  ],
  Reputation: [
    "Google Business Profile",
    "MagicBricks",
    "99acres",
    "Housing.com",
    "JLL/Anarock",
    "Instagram",
    "LinkedIn Page",
    "YouTube Channel",
    "Twitter/X",
    "Anthropic Claude",
  ],
  Promoter: ["WhatsApp Business"],
  Launch: ["Razorpay"],
};

// ── Service ───────────────────────────────────────────────────────────────────

export class IntegrationsService {
  constructor(private readonly repo: IntegrationsRepository) {}

  // ── Clients ────────────────────────────────────────────────────────────────

  async listClients(tenantId: string): Promise<ClientRow[]> {
    return this.repo.findClients(tenantId);
  }

  async createClient(
    tenantId: string,
    input: CreateClientInput,
  ): Promise<ClientRow> {
    return this.repo.createClient(tenantId, {
      name: input.name,
      industry: input.industry ?? null,
      avatarUrl: input.avatarUrl ?? null,
    });
  }

  // ── Providers + integrations ───────────────────────────────────────────────

  async listProvidersWithStatus(
    tenantId: string,
    clientId: string,
  ): Promise<Array<ProviderRow & { integration: IntegrationRow | null }>> {
    const client = await this.repo.findClientById(tenantId, clientId);
    if (!client) throw new ClientNotFoundError(clientId);

    const [providers, integrations] = await Promise.all([
      this.repo.findAllProviders(),
      this.repo.findIntegrations(tenantId, clientId),
    ]);

    const integrationMap = new Map(integrations.map((i) => [i.providerId, i]));

    return providers.map((p) => ({
      ...p,
      integration: integrationMap.get(p.id) ?? null,
    }));
  }

  // ── Connect ────────────────────────────────────────────────────────────────

  async connectApiKey(
    tenantId: string,
    clientId: string,
    providerId: string,
    body: ConnectApiKeyBody,
  ): Promise<IntegrationRow> {
    const [client, provider] = await Promise.all([
      this.repo.findClientById(tenantId, clientId),
      this.repo.findProviderById(providerId),
    ]);
    if (!client) throw new ClientNotFoundError(clientId);
    if (!provider) throw new ProviderNotFoundError(providerId);
    if (provider.authType !== "API_KEY")
      throw new InvalidAuthTypeError(provider.name, provider.authType);

    return this.repo.upsertIntegration(tenantId, clientId, providerId, {
      status: "CONNECTED",
      accountLabel: body.accountLabel ?? null,
      credentials: {
        apiKey: body.apiKey,
      } as unknown as import("@prisma/client").Prisma.InputJsonValue,
    });
  }

  async connectOAuth(
    tenantId: string,
    clientId: string,
    providerId: string,
    body: ConnectOAuthBody,
  ): Promise<IntegrationRow> {
    const [client, provider] = await Promise.all([
      this.repo.findClientById(tenantId, clientId),
      this.repo.findProviderById(providerId),
    ]);
    if (!client) throw new ClientNotFoundError(clientId);
    if (!provider) throw new ProviderNotFoundError(providerId);
    if (provider.authType !== "OAUTH2")
      throw new InvalidAuthTypeError(provider.name, provider.authType);

    return this.repo.upsertIntegration(tenantId, clientId, providerId, {
      status: "CONNECTED",
      accountLabel: body.accountLabel ?? null,
      credentials: {
        oauthCode: body.code,
      } as unknown as import("@prisma/client").Prisma.InputJsonValue,
    });
  }

  // ── Disconnect ─────────────────────────────────────────────────────────────

  async disconnect(
    tenantId: string,
    clientId: string,
    providerId: string,
  ): Promise<void> {
    const client = await this.repo.findClientById(tenantId, clientId);
    if (!client) throw new ClientNotFoundError(clientId);

    const integration = await this.repo.findIntegration(
      tenantId,
      clientId,
      providerId,
    );
    if (!integration) throw new IntegrationNotFoundError(providerId);

    await this.repo.deleteIntegration(tenantId, clientId, providerId);
  }

  // ── Sync ───────────────────────────────────────────────────────────────────

  async triggerSync(
    tenantId: string,
    clientId: string,
    providerId: string,
  ): Promise<{ syncLogId: string; status: string }> {
    const integration = await this.repo.findIntegration(
      tenantId,
      clientId,
      providerId,
    );
    if (!integration) throw new IntegrationNotFoundError(providerId);
    if (integration.status !== "CONNECTED")
      throw new IntegrationNotConnectedError();

    const syncLog = await this.repo.createSyncLog(
      integration.id,
      "IN_PROGRESS",
    );
    await this.repo.updateSyncLog(syncLog.id, {
      status: "SUCCESS",
      recordsSynced: 0,
    });
    await this.repo.updateIntegrationStatus(
      tenantId,
      clientId,
      providerId,
      "CONNECTED",
      {
        lastSyncAt: new Date(),
      },
    );

    return { syncLogId: syncLog.id, status: "SUCCESS" };
  }

  async getSyncLogs(
    tenantId: string,
    clientId: string,
    providerId: string,
    query: SyncLogsQuery,
  ): Promise<{ data: SyncLogRow[]; total: number }> {
    return this.repo.findSyncLogs(tenantId, clientId, providerId, query);
  }

  // ── Module readiness ───────────────────────────────────────────────────────

  async getModuleReadiness(
    tenantId: string,
    clientId: string,
  ): Promise<
    Array<{ module: string; connected: number; total: number; pct: number }>
  > {
    const client = await this.repo.findClientById(tenantId, clientId);
    if (!client) throw new ClientNotFoundError(clientId);

    const [providers, integrations] = await Promise.all([
      this.repo.findAllProviders(),
      this.repo.findIntegrations(tenantId, clientId),
    ]);

    const providerNameToStatus = new Map<string, string>();
    for (const integration of integrations) {
      providerNameToStatus.set(integration.provider.name, integration.status);
    }

    const providerNames = new Set(providers.map((p) => p.name));

    return Object.entries(MODULE_READINESS_PROVIDERS).map(
      ([mod, providerList]) => {
        const validProviders = providerList.filter((name) =>
          providerNames.has(name),
        );
        const total = validProviders.length;
        const connected = validProviders.filter(
          (name) => providerNameToStatus.get(name) === "CONNECTED",
        ).length;
        const pct = total > 0 ? Math.round((connected / total) * 100) : 0;
        return { module: mod, connected, total, pct };
      },
    );
  }

  // ── All-clients matrix ─────────────────────────────────────────────────────

  async getConnectionMatrix(tenantId: string): Promise<{
    providers: ProviderRow[];
    clients: ClientRow[];
    matrix: Record<string, Record<string, string>>;
  }> {
    const [providers, clients, integrations] = await Promise.all([
      this.repo.findAllProviders(),
      this.repo.findClients(tenantId),
      this.repo.findAllTenantIntegrations(tenantId),
    ]);

    // matrix[clientId][providerId] = status
    const matrix: Record<string, Record<string, string>> = {};
    for (const client of clients) {
      matrix[client.id] = {};
    }
    for (const integration of integrations) {
      if (matrix[integration.clientId]) {
        matrix[integration.clientId]![integration.providerId] =
          integration.status;
      }
    }

    return { providers, clients, matrix };
  }

  // ── OAuth callback ─────────────────────────────────────────────────────────

  async handleOAuthCallback(
    _tenantId: string,
    _providerId: string | undefined,
    _code: string,
  ): Promise<{ success: boolean }> {
    return { success: true };
  }

  // ── Platform integrations ──────────────────────────────────────────────────

  async getPlatformIntegrations(): Promise<PlatformIntegrationRow[]> {
    return this.repo.findPlatformIntegrations();
  }

  async connectPlatformApiKey(
    providerId: string,
    body: ConnectApiKeyBody,
  ): Promise<PlatformIntegrationRow> {
    const provider = await this.repo.findProviderById(providerId);
    if (!provider) throw new ProviderNotFoundError(providerId);

    return this.repo.upsertPlatformIntegration(providerId, {
      status: "CONNECTED",
      accountLabel: body.accountLabel ?? null,
      credentials: {
        apiKey: body.apiKey,
      } as unknown as import("@prisma/client").Prisma.InputJsonValue,
    });
  }

  async syncPlatform(providerId: string): Promise<{ status: string }> {
    await this.repo.upsertPlatformIntegration(providerId, {
      status: "CONNECTED",
      lastSyncAt: new Date(),
    });
    return { status: "SUCCESS" };
  }
}
