import { prisma } from "@/core/prisma/client";
import { Prisma } from "@prisma/client";
import type { SocialPlatform } from "@prisma/client";

// ── Row types ─────────────────────────────────────────────────────────────────

export type SocialProfileRow = {
  id: string;
  tenantId: string;
  clientId: string;
  platform: SocialPlatform;
  handle: string;
  profileUrl: string | null;
  autoFetched: boolean;
  isConnected: boolean;
  accessToken: string | null;
  tokenExpiry: string | null;
  lastSyncAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type SocialSnapshotRow = {
  id: string;
  tenantId: string;
  socialProfileId: string;
  platform: SocialPlatform;
  snapshotDate: string;
  followers: number;
  following: number | null;
  posts: number | null;
  avgLikes: number | null;
  avgComments: number | null;
  avgShares: number | null;
  engagementRate: number | null;
  reach: number | null;
  impressions: number | null;
  profileViews: number | null;
  topPosts: unknown;
  audienceDemog: unknown;
  createdAt: string;
};

// ── Mappers ───────────────────────────────────────────────────────────────────

function mapProfile(
  r: Record<string, unknown>,
  platform?: SocialPlatform,
): SocialProfileRow {
  return {
    id: r["id"] as string,
    tenantId: r["tenantId"] as string,
    clientId: r["clientId"] as string,
    platform: (r["platform"] as SocialPlatform) ?? platform,
    handle: r["handle"] as string,
    profileUrl: (r["profileUrl"] as string | null) ?? null,
    autoFetched: Boolean(r["autoFetched"]),
    isConnected: Boolean(r["isConnected"]),
    accessToken: (r["accessToken"] as string | null) ?? null,
    tokenExpiry:
      r["tokenExpiry"] != null
        ? (r["tokenExpiry"] as Date).toISOString()
        : null,
    lastSyncAt:
      r["lastSyncAt"] != null ? (r["lastSyncAt"] as Date).toISOString() : null,
    createdAt: (r["createdAt"] as Date).toISOString(),
    updatedAt: (r["updatedAt"] as Date).toISOString(),
  };
}

function mapSnapshot(
  r: Record<string, unknown>,
  platform?: SocialPlatform,
): SocialSnapshotRow {
  return {
    id: r["id"] as string,
    tenantId: r["tenantId"] as string,
    socialProfileId: r["socialProfileId"] as string,
    platform: (r["platform"] as SocialPlatform) ?? platform,
    snapshotDate: (r["snapshotDate"] as Date).toISOString(),
    followers: (r["followers"] as number) ?? 0,
    following: (r["following"] as number | null) ?? null,
    posts: (r["posts"] as number | null) ?? null,
    avgLikes: (r["avgLikes"] as number | null) ?? null,
    avgComments: (r["avgComments"] as number | null) ?? null,
    avgShares: (r["avgShares"] as number | null) ?? null,
    engagementRate: (r["engagementRate"] as number | null) ?? null,
    reach: (r["reach"] as number | null) ?? null,
    impressions: (r["impressions"] as number | null) ?? null,
    profileViews: (r["profileViews"] as number | null) ?? null,
    topPosts: r["topPosts"] ?? [],
    audienceDemog: r["audienceDemog"] ?? null,
    createdAt: (r["createdAt"] as Date).toISOString(),
  };
}

// ── Repository ────────────────────────────────────────────────────────────────

export class SocialRepository {
  // ── Client validation ──────────────────────────────────────────────────────

  async clientExists(tenantId: string, clientId: string): Promise<boolean> {
    const row = await prisma.client.findFirst({
      where: { tenantId, id: clientId },
      select: { id: true },
    });
    return row !== null;
  }

  // ── Profiles ───────────────────────────────────────────────────────────────

  async findProfiles(
    tenantId: string,
    clientId: string,
  ): Promise<SocialProfileRow[]> {
    const rows = await prisma.socialProfile.findMany({
      where: { tenantId, clientId },
      orderBy: { createdAt: "asc" },
    });
    return rows.map((r) => mapProfile(r as unknown as Record<string, unknown>));
  }

  async findProfileByPlatform(
    tenantId: string,
    clientId: string,
    platform: SocialPlatform,
  ): Promise<SocialProfileRow | null> {
    const row = await prisma.socialProfile.findUnique({
      where: { clientId_platform: { clientId, platform } },
    });
    if (!row) return null;
    if (row.tenantId !== tenantId) return null;
    return mapProfile(row as unknown as Record<string, unknown>);
  }

  async upsertProfile(
    tenantId: string,
    clientId: string,
    platform: SocialPlatform,
    data: {
      handle: string;
      profileUrl?: string | null;
      autoFetched?: boolean;
    },
  ): Promise<SocialProfileRow> {
    const row = await prisma.socialProfile.upsert({
      where: { clientId_platform: { clientId, platform } },
      create: {
        tenantId,
        clientId,
        platform,
        handle: data.handle,
        profileUrl: data.profileUrl ?? null,
        autoFetched: data.autoFetched ?? false,
        isConnected: false,
      },
      update: {
        handle: data.handle,
        profileUrl: data.profileUrl ?? null,
        autoFetched: data.autoFetched ?? false,
        updatedAt: new Date(),
      },
    });
    return mapProfile(row as unknown as Record<string, unknown>);
  }

  async markConnected(
    tenantId: string,
    clientId: string,
    platform: SocialPlatform,
    accessToken?: string | null,
    tokenExpiry?: Date | null,
  ): Promise<SocialProfileRow> {
    const row = await prisma.socialProfile.update({
      where: { clientId_platform: { clientId, platform } },
      data: {
        isConnected: true,
        accessToken: accessToken ?? null,
        tokenExpiry: tokenExpiry ?? null,
        updatedAt: new Date(),
      },
    });
    if (row.tenantId !== tenantId) {
      throw new Error("Tenant mismatch on markConnected");
    }
    return mapProfile(row as unknown as Record<string, unknown>);
  }

  async updateLastSyncAt(
    tenantId: string,
    clientId: string,
    platform: SocialPlatform,
  ): Promise<void> {
    await prisma.socialProfile.updateMany({
      where: { tenantId, clientId, platform },
      data: { lastSyncAt: new Date(), updatedAt: new Date() },
    });
  }

  // ── Snapshots ──────────────────────────────────────────────────────────────

  async findLatestSnapshot(
    tenantId: string,
    socialProfileId: string,
    platform: SocialPlatform,
  ): Promise<SocialSnapshotRow | null> {
    const row = await prisma.socialSnapshot.findFirst({
      where: { tenantId, socialProfileId },
      orderBy: { snapshotDate: "desc" },
    });
    if (!row) return null;
    return mapSnapshot(row as unknown as Record<string, unknown>, platform);
  }

  async findRecentSnapshots(
    tenantId: string,
    socialProfileId: string,
    platform: SocialPlatform,
    limit = 12,
  ): Promise<SocialSnapshotRow[]> {
    const rows = await prisma.socialSnapshot.findMany({
      where: { tenantId, socialProfileId },
      orderBy: { snapshotDate: "desc" },
      take: limit,
    });
    return rows
      .map((r) =>
        mapSnapshot(r as unknown as Record<string, unknown>, platform),
      )
      .reverse();
  }

  async createSnapshot(
    tenantId: string,
    socialProfileId: string,
    data: {
      followers: number;
      following?: number | null;
      posts?: number | null;
      avgLikes?: number | null;
      avgComments?: number | null;
      avgShares?: number | null;
      engagementRate?: number | null;
      reach?: number | null;
      impressions?: number | null;
      profileViews?: number | null;
      topPosts?: Prisma.InputJsonValue;
      audienceDemog?: Prisma.InputJsonValue;
    },
    platform: SocialPlatform,
  ): Promise<SocialSnapshotRow> {
    const row = await prisma.socialSnapshot.create({
      data: {
        tenantId,
        socialProfileId,
        snapshotDate: new Date(),
        followers: data.followers,
        following: data.following ?? null,
        posts: data.posts ?? null,
        avgLikes: data.avgLikes ?? null,
        avgComments: data.avgComments ?? null,
        avgShares: data.avgShares ?? null,
        engagementRate: data.engagementRate ?? null,
        reach: data.reach ?? null,
        impressions: data.impressions ?? null,
        profileViews: data.profileViews ?? null,
        topPosts: data.topPosts ?? [],
        audienceDemog: data.audienceDemog ?? Prisma.DbNull,
      },
    });
    return mapSnapshot(row as unknown as Record<string, unknown>, platform);
  }
}
