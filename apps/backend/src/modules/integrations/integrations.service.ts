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
  SyncLogsQuery,
} from "./integrations.dto";
import {
  ClientNotFoundError,
  IntegrationNotFoundError,
  IntegrationNotConnectedError,
  InvalidAuthTypeError,
  ProviderNotFoundError,
  OAuthUnsupportedProviderError,
  OAuthTokenRefreshError,
  SyncFailedError,
} from "./integrations.errors";
import type { StoredCredentials } from "./oauth/credentials";
import { isExpired, loadTokens } from "./oauth/credentials";
import {
  getGoogleAuthUrl,
  exchangeGoogleCode,
  refreshGoogleToken,
  revokeGoogleToken,
  detectGoogleAccountLabel,
} from "./oauth/google-oauth.service";
import {
  getMetaAuthUrl,
  exchangeMetaCode,
  refreshMetaToken,
  revokeMetaToken,
  detectMetaAdAccount,
} from "./oauth/meta-oauth.service";
import { syncGoogleSearchConsole } from "./sync/google-search-console.sync";
import { syncGoogleAnalytics } from "./sync/google-analytics.sync";
import { syncGoogleAds } from "./sync/google-ads.sync";
import { syncMetaAds } from "./sync/meta-ads.sync";
import type { Prisma } from "@prisma/client";

// ── Provider classification ───────────────────────────────────────────────────

const GOOGLE_PROVIDERS = new Set([
  "Google Search Console",
  "Google Analytics 4",
  "Google Ads",
]);
const META_PROVIDERS = new Set(["Meta Ads"]);

function isGoogleProvider(name: string): boolean {
  return GOOGLE_PROVIDERS.has(name);
}
function isMetaProvider(name: string): boolean {
  return META_PROVIDERS.has(name);
}

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

  // ── OAuth — initiate ───────────────────────────────────────────────────────

  async initiateOAuth(
    tenantId: string,
    clientId: string,
    providerId: string,
  ): Promise<{ authUrl: string }> {
    const [client, provider] = await Promise.all([
      this.repo.findClientById(tenantId, clientId),
      this.repo.findProviderById(providerId),
    ]);
    if (!client) throw new ClientNotFoundError(clientId);
    if (!provider) throw new ProviderNotFoundError(providerId);
    if (provider.authType !== "OAUTH2")
      throw new InvalidAuthTypeError(provider.name, provider.authType);

    const state = { tenantId, clientId, providerId, ts: Date.now() };

    if (isGoogleProvider(provider.name)) {
      return { authUrl: getGoogleAuthUrl(provider.name, state) };
    }
    if (isMetaProvider(provider.name)) {
      return { authUrl: getMetaAuthUrl(state) };
    }

    throw new OAuthUnsupportedProviderError(provider.name);
  }

  // ── Connect — API key ──────────────────────────────────────────────────────

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
      } as unknown as Prisma.InputJsonValue,
    });
  }

  // ── OAuth — callback ───────────────────────────────────────────────────────

  async handleOAuthCallback(
    tenantId: string,
    clientId: string,
    providerId: string,
    code: string,
  ): Promise<{ success: boolean; providerName: string }> {
    const provider = await this.repo.findProviderById(providerId);
    if (!provider) throw new ProviderNotFoundError(providerId);

    let stored: StoredCredentials;
    let accessToken: string;

    if (isGoogleProvider(provider.name)) {
      stored = await exchangeGoogleCode(code);
      accessToken = loadTokens(stored).accessToken;
    } else if (isMetaProvider(provider.name)) {
      stored = await exchangeMetaCode(code);
      accessToken = loadTokens(stored).accessToken;
    } else {
      throw new OAuthUnsupportedProviderError(provider.name);
    }

    // Best-effort account label detection
    let accountLabel: string | null = null;
    if (isGoogleProvider(provider.name)) {
      accountLabel = await detectGoogleAccountLabel(provider.name, accessToken);
    } else if (isMetaProvider(provider.name)) {
      accountLabel = await detectMetaAdAccount(accessToken);
    }

    await this.repo.upsertIntegration(tenantId, clientId, providerId, {
      status: "CONNECTED",
      accountLabel,
      credentials: stored as unknown as Prisma.InputJsonValue,
    });

    return { success: true, providerName: provider.name };
  }

  // ── OAuth — token refresh ──────────────────────────────────────────────────

  async refreshOAuthToken(
    tenantId: string,
    integrationId: string,
  ): Promise<{ success: boolean }> {
    const integration = await this.repo.findIntegrationById(
      tenantId,
      integrationId,
    );
    if (!integration) throw new IntegrationNotFoundError(integrationId);

    const provider = await this.repo.findProviderById(integration.providerId);
    if (!provider) throw new ProviderNotFoundError(integration.providerId);

    const stored = integration.credentials as StoredCredentials;

    try {
      let refreshed: StoredCredentials;
      if (isGoogleProvider(provider.name)) {
        refreshed = await refreshGoogleToken(stored);
      } else if (isMetaProvider(provider.name)) {
        refreshed = await refreshMetaToken(stored);
      } else {
        throw new OAuthUnsupportedProviderError(provider.name);
      }

      await this.repo.upsertIntegration(
        tenantId,
        integration.clientId,
        integration.providerId,
        {
          status: "CONNECTED",
          credentials: refreshed as unknown as Prisma.InputJsonValue,
        },
      );
      return { success: true };
    } catch (err) {
      await this.repo.updateIntegrationStatus(
        tenantId,
        integration.clientId,
        integration.providerId,
        "EXPIRED",
      );
      throw new OAuthTokenRefreshError(
        err instanceof Error ? err.message : String(err),
      );
    }
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

    // Best-effort token revocation
    const provider = await this.repo.findProviderById(providerId);
    if (provider && integration.credentials) {
      const stored = integration.credentials as StoredCredentials;
      if (isGoogleProvider(provider.name)) {
        await revokeGoogleToken(stored).catch(() => {});
      } else if (isMetaProvider(provider.name)) {
        await revokeMetaToken(stored).catch(() => {});
      }
    }

    // Set NOT_CONNECTED + clear credentials (preserve the row for history)
    await this.repo.upsertIntegration(tenantId, clientId, providerId, {
      status: "NOT_CONNECTED",
      credentials: {} as unknown as Prisma.InputJsonValue,
      lastSyncAt: null,
    });
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
    // Allow retry from ERROR/EXPIRED — only block if credentials were never set
    if (integration.status === "NOT_CONNECTED")
      throw new IntegrationNotConnectedError();

    const provider = await this.repo.findProviderById(providerId);
    if (!provider) throw new ProviderNotFoundError(providerId);

    const syncLog = await this.repo.createSyncLog(
      integration.id,
      "IN_PROGRESS",
    );

    try {
      // Auto-refresh expired tokens
      let stored = integration.credentials as StoredCredentials;
      if (stored?.enc_accessToken && isExpired(stored)) {
        stored = await this.doTokenRefresh(provider.name, stored);
        await this.repo.upsertIntegration(tenantId, clientId, providerId, {
          status: "CONNECTED",
          credentials: stored as unknown as Prisma.InputJsonValue,
        });
      }

      const accessToken = stored?.enc_accessToken
        ? loadTokens(stored).accessToken
        : ((stored as unknown as { apiKey?: string })?.apiKey ?? "");

      // Auto-detect accountLabel for Google providers if it was never saved
      // (can happen when OAuth was connected before the API was enabled)
      let accountLabel = integration.accountLabel ?? "";
      if (!accountLabel && isGoogleProvider(provider.name)) {
        const detected = await detectGoogleAccountLabel(
          provider.name,
          accessToken,
        ).catch(() => null);
        if (detected) {
          accountLabel = detected;
          await this.repo.upsertIntegration(tenantId, clientId, providerId, {
            status: "CONNECTED",
            accountLabel: detected,
          });
        }
      }

      // Dispatch to the correct sync handler
      let result: { recordsSynced: number; metadata: unknown };
      if (provider.name === "Google Search Console") {
        if (!accountLabel) {
          throw new Error(
            "No verified site found in Search Console. Visit search.google.com/search-console, verify a site, then retry.",
          );
        }
        const data = await syncGoogleSearchConsole(
          stored,
          accessToken,
          accountLabel,
        );
        result = {
          recordsSynced: data.recordsSynced,
          metadata: data,
        };
      } else if (provider.name === "Google Analytics 4") {
        const data = await syncGoogleAnalytics(accessToken, accountLabel);
        result = { recordsSynced: data.recordsSynced, metadata: data };
      } else if (provider.name === "Google Ads") {
        const data = await syncGoogleAds(accessToken, accountLabel);
        result = { recordsSynced: data.recordsSynced, metadata: data };
      } else if (provider.name === "Meta Ads") {
        const data = await syncMetaAds(accessToken, accountLabel);
        result = { recordsSynced: data.recordsSynced, metadata: data };
      } else {
        // Generic provider — mark as synced with 0 records
        result = { recordsSynced: 0, metadata: null };
      }

      await this.repo.updateSyncLog(syncLog.id, {
        status: "SUCCESS",
        recordsSynced: result.recordsSynced,
      });

      await this.repo.updateIntegrationStatus(
        tenantId,
        clientId,
        providerId,
        "CONNECTED",
        { lastSyncAt: new Date() },
      );

      if (result.metadata) {
        await this.repo.upsertIntegration(tenantId, clientId, providerId, {
          status: "CONNECTED",
          metadata: result.metadata as unknown as Prisma.InputJsonValue,
          lastSyncAt: new Date(),
        });
      }

      return { syncLogId: syncLog.id, status: "SUCCESS" };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      await this.repo.updateSyncLog(syncLog.id, {
        status: "FAILED",
        errorMessage: msg,
      });
      await this.repo.updateIntegrationStatus(
        tenantId,
        clientId,
        providerId,
        "ERROR",
      );
      // Re-throw as a SyncFailedError so the error handler returns 422 with
      // the real message instead of swallowing it as a generic 500.
      throw new SyncFailedError(msg);
    }
  }

  private async doTokenRefresh(
    providerName: string,
    stored: StoredCredentials,
  ): Promise<StoredCredentials> {
    if (isGoogleProvider(providerName)) return refreshGoogleToken(stored);
    if (isMetaProvider(providerName)) return refreshMetaToken(stored);
    return stored;
  }

  async getSyncLogs(
    tenantId: string,
    clientId: string,
    providerId: string,
    query: SyncLogsQuery,
  ): Promise<{ data: SyncLogRow[]; total: number }> {
    return this.repo.findSyncLogs(tenantId, clientId, providerId, query);
  }

  // ── Account label (manual override) ───────────────────────────────────────

  async updateAccountLabel(
    tenantId: string,
    clientId: string,
    providerId: string,
    accountLabel: string,
  ): Promise<void> {
    const integration = await this.repo.findIntegration(
      tenantId,
      clientId,
      providerId,
    );
    if (!integration) throw new IntegrationNotFoundError(providerId);

    await this.repo.upsertIntegration(tenantId, clientId, providerId, {
      status: integration.status,
      accountLabel: accountLabel.trim() || null,
    });
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
      } as unknown as Prisma.InputJsonValue,
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
