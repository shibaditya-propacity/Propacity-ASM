import { SeoRepository } from "./seo.repository";
import type {
  SeoSnapshotRow,
  SeoKeywordRow,
  SeoActionRow,
} from "./seo.repository";
import { SeoSyncService } from "./seo-sync.service";
import {
  SeoClientNotFoundError,
  SeoKeywordAlreadyExistsError,
  SeoKeywordNotFoundError,
  SeoActionNotFoundError,
} from "./seo.errors";
import type {
  AddKeywordInput,
  CreateActionBody,
  UpdateActionBody,
  ActionsQuery,
} from "./seo.dto";

// ── Types returned to the controller ─────────────────────────────────────────

export interface SeoDashboard {
  integrationStatus: {
    gscConnected: boolean;
    ga4Connected: boolean;
    lastSyncAt: string | null;
  };
  snapshot: SeoSnapshotRow | null;
  keywords: SeoKeywordRow[];
  actions: SeoActionRow[];
  topMovers: Array<{
    keyword: string;
    currentRank: number | null;
    previousRank: number | null;
    searchVolume: number | null;
    rankChange: number | null;
  }>;
}

export class SeoService {
  constructor(
    private readonly repo: SeoRepository,
    private readonly sync: SeoSyncService,
  ) {}

  // ── Dashboard ──────────────────────────────────────────────────────────────

  async getDashboard(
    tenantId: string,
    clientId: string,
  ): Promise<SeoDashboard> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);

    const [gscIntegration, ga4Integration, snapshot, keywords, actions] =
      await Promise.all([
        this.repo.findGoogleIntegration(
          tenantId,
          clientId,
          "Google Search Console",
        ),
        this.repo.findGoogleIntegration(
          tenantId,
          clientId,
          "Google Analytics 4",
        ),
        this.repo.findLatestSnapshot(tenantId, clientId),
        this.repo.findKeywords(tenantId, clientId),
        this.repo.findActions(tenantId, clientId),
      ]);

    const lastSyncAt =
      gscIntegration?.lastSyncAt ?? snapshot?.createdAt ?? null;

    const topMovers = keywords
      .filter((kw) => kw.currentRank !== null && kw.previousRank !== null)
      .map((kw) => ({
        keyword: kw.keyword,
        currentRank: kw.currentRank,
        previousRank: kw.previousRank,
        searchVolume: kw.searchVolume,
        rankChange:
          kw.previousRank !== null && kw.currentRank !== null
            ? kw.previousRank - kw.currentRank // positive = improved (moved up)
            : null,
      }))
      .sort((a, b) => Math.abs(b.rankChange ?? 0) - Math.abs(a.rankChange ?? 0))
      .slice(0, 10);

    return {
      integrationStatus: {
        gscConnected: !!gscIntegration && gscIntegration.status === "CONNECTED",
        ga4Connected: !!ga4Integration && ga4Integration.status === "CONNECTED",
        lastSyncAt,
      },
      snapshot,
      keywords,
      actions,
      topMovers,
    };
  }

  // ── Organic traffic chart ──────────────────────────────────────────────────

  async getOrganicTraffic(
    tenantId: string,
    clientId: string,
  ): Promise<{ organicSessions: unknown }> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);

    const snapshot = await this.repo.findLatestSnapshot(tenantId, clientId);
    return { organicSessions: snapshot?.organicSessions ?? [] };
  }

  // ── Keywords ───────────────────────────────────────────────────────────────

  async listKeywords(
    tenantId: string,
    clientId: string,
  ): Promise<SeoKeywordRow[]> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);
    return this.repo.findKeywords(tenantId, clientId);
  }

  async addKeyword(
    tenantId: string,
    clientId: string,
    input: AddKeywordInput,
  ): Promise<SeoKeywordRow> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);

    const existing = await this.repo.findKeywordByText(
      tenantId,
      clientId,
      input.keyword,
    );
    if (existing) throw new SeoKeywordAlreadyExistsError(input.keyword);

    return this.repo.createKeyword(
      tenantId,
      clientId,
      input.keyword,
      input.searchVolume,
    );
  }

  async removeKeyword(
    tenantId: string,
    clientId: string,
    keywordId: string,
  ): Promise<void> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);

    const kw = await this.repo.findKeywordById(tenantId, clientId, keywordId);
    if (!kw) throw new SeoKeywordNotFoundError(keywordId);

    await this.repo.deleteKeyword(tenantId, clientId, keywordId);
  }

  // ── Actions ────────────────────────────────────────────────────────────────

  /** Dashboard use: top pending actions sorted by impact. */
  async listActions(
    tenantId: string,
    clientId: string,
  ): Promise<SeoActionRow[]> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);
    return this.repo.findActions(tenantId, clientId);
  }

  /** Action Queue page: all actions with optional filters + counts. */
  async listAllActions(
    tenantId: string,
    clientId: string,
    query: ActionsQuery,
  ): Promise<{
    actions: SeoActionRow[];
    counts: {
      total: number;
      pending: number;
      inProgress: number;
      completed: number;
    };
  }> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);

    const [actions, counts] = await Promise.all([
      this.repo.findAllActions(tenantId, clientId, {
        status: query.status,
        impactLevel: query.impact,
        effortLevel: query.effort,
        category: query.category,
      }),
      this.repo.getActionCounts(tenantId, clientId),
    ]);
    return { actions, counts };
  }

  async createManualAction(
    tenantId: string,
    clientId: string,
    body: CreateActionBody,
  ): Promise<SeoActionRow> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);
    return this.repo.createAction(tenantId, clientId, {
      title: body.title,
      description: body.description,
      category: body.category,
      impactLevel: body.impactLevel,
      effortLevel: body.effortLevel,
      assignedTo: body.assignedTo,
      dueDate: body.dueDate,
    });
  }

  async updateAction(
    tenantId: string,
    clientId: string,
    actionId: string,
    body: UpdateActionBody,
  ): Promise<SeoActionRow> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);

    const action = await this.repo.findActionById(tenantId, clientId, actionId);
    if (!action) throw new SeoActionNotFoundError(actionId);

    return this.repo.updateAction(tenantId, clientId, actionId, {
      title: body.title,
      description: body.description,
      category: body.category,
      impactLevel: body.impactLevel,
      effortLevel: body.effortLevel,
      status: body.status,
      assignedTo: body.assignedTo,
      dueDate: body.dueDate,
    });
  }

  async deleteAction(
    tenantId: string,
    clientId: string,
    actionId: string,
  ): Promise<void> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);

    const action = await this.repo.findActionById(tenantId, clientId, actionId);
    if (!action) throw new SeoActionNotFoundError(actionId);

    await this.repo.deleteAction(tenantId, clientId, actionId);
  }

  // ── Sync ───────────────────────────────────────────────────────────────────

  async triggerSync(
    tenantId: string,
    clientId: string,
  ): Promise<{ snapshotId: string }> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);

    const snapshotId = await this.sync.syncClient(tenantId, clientId);
    return { snapshotId };
  }

  // ── Rank tracking ──────────────────────────────────────────────────────────

  async getRankTracking(
    tenantId: string,
    clientId: string,
  ): Promise<SeoKeywordRow[]> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SeoClientNotFoundError(clientId);
    return this.repo.findKeywords(tenantId, clientId);
  }
}
