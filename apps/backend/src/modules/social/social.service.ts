import type { SocialPlatform } from "@prisma/client";
import { SocialRepository } from "./social.repository";
import type { SocialProfileRow, SocialSnapshotRow } from "./social.repository";
import { SocialSyncService } from "./social-sync.service";
import { fetchBrandHandles } from "./brand-handle-fetch.service";
import {
  SocialClientNotFoundError,
  SocialProfileNotFoundError,
} from "./social.errors";
import type {
  FetchHandlesBody,
  SaveProfileBody,
  FetchedHandle,
  SnapshotsQuery,
} from "./social.dto";

// ── Types returned to the controller ─────────────────────────────────────────

export interface SocialDashboard {
  profiles: SocialProfileRow[];
  latestSnapshots: Record<string, SocialSnapshotRow | null>; // keyed by platform
  summary: {
    totalFollowers: number;
    avgEngagementRate: number | null;
    totalReach: number | null;
    bestPlatform: string | null;
    connectedCount: number;
  };
}

export class SocialService {
  constructor(
    private readonly repo: SocialRepository,
    private readonly sync: SocialSyncService,
  ) {}

  // ── Handle discovery ────────────────────────────────────────────────────────

  async fetchHandles(
    tenantId: string,
    clientId: string,
    body: FetchHandlesBody,
  ): Promise<FetchedHandle[]> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SocialClientNotFoundError(clientId);
    return fetchBrandHandles(body.brandName);
  }

  // ── Profiles ────────────────────────────────────────────────────────────────

  async listProfiles(
    tenantId: string,
    clientId: string,
  ): Promise<SocialProfileRow[]> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SocialClientNotFoundError(clientId);
    return this.repo.findProfiles(tenantId, clientId);
  }

  async saveProfile(
    tenantId: string,
    clientId: string,
    body: SaveProfileBody,
  ): Promise<SocialProfileRow> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SocialClientNotFoundError(clientId);

    return this.repo.upsertProfile(
      tenantId,
      clientId,
      body.platform as SocialPlatform,
      {
        handle: body.handle,
        profileUrl: body.profileUrl ?? null,
        autoFetched: body.autoFetched,
      },
    );
  }

  async connectProfile(
    tenantId: string,
    clientId: string,
    platform: SocialPlatform,
    accessToken?: string,
  ): Promise<SocialProfileRow> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SocialClientNotFoundError(clientId);

    const profile = await this.repo.findProfileByPlatform(
      tenantId,
      clientId,
      platform,
    );
    if (!profile) throw new SocialProfileNotFoundError(platform);

    return this.repo.markConnected(tenantId, clientId, platform, accessToken);
  }

  // ── Sync ────────────────────────────────────────────────────────────────────

  async syncPlatform(
    tenantId: string,
    clientId: string,
    platform: SocialPlatform,
    brandName: string,
  ): Promise<{ snapshotId: string }> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SocialClientNotFoundError(clientId);

    const profile = await this.repo.findProfileByPlatform(
      tenantId,
      clientId,
      platform,
    );
    if (!profile) throw new SocialProfileNotFoundError(platform);

    const snapshotId = await this.sync.syncProfile(
      tenantId,
      clientId,
      platform,
      profile.handle,
      brandName,
    );
    return { snapshotId };
  }

  async syncAll(
    tenantId: string,
    clientId: string,
    brandName: string,
  ): Promise<
    { platform: string; snapshotId: string | null; error?: string }[]
  > {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SocialClientNotFoundError(clientId);
    return this.sync.syncAllConnected(tenantId, clientId, brandName);
  }

  // ── Dashboard ───────────────────────────────────────────────────────────────

  async getDashboard(
    tenantId: string,
    clientId: string,
  ): Promise<SocialDashboard> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SocialClientNotFoundError(clientId);

    const profiles = await this.repo.findProfiles(tenantId, clientId);

    const latestSnapshots: Record<string, SocialSnapshotRow | null> = {};
    await Promise.all(
      profiles.map(async (p) => {
        const snap = await this.repo.findLatestSnapshot(
          tenantId,
          p.id,
          p.platform,
        );
        latestSnapshots[p.platform] = snap;
      }),
    );

    // Summary
    let totalFollowers = 0;
    let totalReach: number | null = null;
    let engagementRates: number[] = [];
    let bestPlatform: string | null = null;
    let bestFollowers = 0;

    for (const profile of profiles) {
      const snap = latestSnapshots[profile.platform];
      if (!snap) continue;
      totalFollowers += snap.followers;
      if (snap.reach != null) {
        totalReach = (totalReach ?? 0) + snap.reach;
      }
      if (snap.engagementRate != null) {
        engagementRates.push(snap.engagementRate);
      }
      if (snap.followers > bestFollowers) {
        bestFollowers = snap.followers;
        bestPlatform = profile.platform;
      }
    }

    const avgEngagementRate =
      engagementRates.length > 0
        ? engagementRates.reduce((a, b) => a + b, 0) / engagementRates.length
        : null;

    return {
      profiles,
      latestSnapshots,
      summary: {
        totalFollowers,
        avgEngagementRate:
          avgEngagementRate !== null
            ? Math.round(avgEngagementRate * 100) / 100
            : null,
        totalReach,
        bestPlatform,
        connectedCount: profiles.filter((p) => p.isConnected).length,
      },
    };
  }

  // ── Snapshots (historical) ──────────────────────────────────────────────────

  async getSnapshots(
    tenantId: string,
    clientId: string,
    platform: SocialPlatform,
    query: SnapshotsQuery,
  ): Promise<SocialSnapshotRow[]> {
    const exists = await this.repo.clientExists(tenantId, clientId);
    if (!exists) throw new SocialClientNotFoundError(clientId);

    const profile = await this.repo.findProfileByPlatform(
      tenantId,
      clientId,
      platform,
    );
    if (!profile) throw new SocialProfileNotFoundError(platform);

    return this.repo.findRecentSnapshots(
      tenantId,
      profile.id,
      platform,
      query.limit,
    );
  }
}
