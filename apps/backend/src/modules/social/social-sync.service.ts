/**
 * Orchestrates a full social media sync for a single platform:
 *  1. Fetch latest metrics from the platform service.
 *  2. Persist a SocialSnapshot.
 *  3. Update lastSyncAt on the SocialProfile.
 */

import type { SocialPlatform } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { SocialRepository } from "./social.repository";
import { getInstagramMetrics } from "./instagram.service";
import { getFacebookMetrics } from "./facebook.service";
import { getLinkedInMetrics } from "./linkedin.service";
import { getYouTubeMetrics } from "./youtube.service";
import { SocialSyncFailedError } from "./social.errors";

export class SocialSyncService {
  constructor(private readonly repo: SocialRepository) {}

  async syncProfile(
    tenantId: string,
    clientId: string,
    platform: SocialPlatform,
    handle: string,
    brandName: string,
  ): Promise<string> {
    const profile = await this.repo.findProfileByPlatform(
      tenantId,
      clientId,
      platform,
    );
    if (!profile)
      throw new SocialSyncFailedError(platform, "Profile not found");

    try {
      let snapshotData: {
        followers: number;
        following?: number | null;
        posts?: number | null;
        avgLikes?: number | null;
        avgComments?: number | null;
        avgShares?: number | null;
        engagementRate?: number | null;
        reach?: number | null;
        impressions?: number | null;
        topPosts?: Prisma.InputJsonValue;
      } = { followers: 0 };

      switch (platform) {
        case "INSTAGRAM": {
          const metrics = await getInstagramMetrics(handle, brandName);
          snapshotData = {
            followers: metrics.followers,
            following: metrics.following,
            posts: metrics.posts,
            avgLikes: metrics.avgLikes,
            avgComments: metrics.avgComments,
            engagementRate: metrics.engagementRate,
            reach: metrics.reach,
            topPosts: metrics.topPosts as Prisma.InputJsonValue,
          };
          break;
        }
        case "FACEBOOK": {
          const metrics = await getFacebookMetrics(handle, brandName);
          // metrics.likes = page-level total likes (≈ followers), not per-post avg
          snapshotData = {
            followers: metrics.followers,
            engagementRate: metrics.engagementRate,
            reach: metrics.reach,
            topPosts: metrics.topPosts as Prisma.InputJsonValue,
          };
          break;
        }
        case "LINKEDIN": {
          const metrics = await getLinkedInMetrics(handle, brandName);
          snapshotData = {
            followers: metrics.followers,
            impressions: metrics.impressions,
            engagementRate: metrics.engagementRate,
            topPosts: metrics.topPosts as Prisma.InputJsonValue,
          };
          break;
        }
        case "YOUTUBE": {
          const metrics = await getYouTubeMetrics(handle, brandName);
          // Engagement rate ≈ avg likes / subscribers × 100
          const ytEr =
            metrics.avgLikes != null && metrics.followers > 0
              ? Math.round((metrics.avgLikes / metrics.followers) * 10000) / 100
              : null;
          snapshotData = {
            followers: metrics.followers,
            posts: metrics.posts,
            avgLikes: metrics.avgLikes,
            avgComments: metrics.avgComments,
            reach: metrics.reach,
            engagementRate: ytEr,
            topPosts: metrics.topPosts as Prisma.InputJsonValue,
          };
          break;
        }
      }

      const snapshot = await this.repo.createSnapshot(
        tenantId,
        profile.id,
        snapshotData,
        platform,
      );

      await this.repo.updateLastSyncAt(tenantId, clientId, platform);

      return snapshot.id;
    } catch (err) {
      throw new SocialSyncFailedError(
        platform,
        err instanceof Error ? err.message : String(err),
      );
    }
  }

  async syncAllConnected(
    tenantId: string,
    clientId: string,
    brandName: string,
  ): Promise<
    { platform: string; snapshotId: string | null; error?: string }[]
  > {
    const profiles = await this.repo.findProfiles(tenantId, clientId);

    // Sync ALL profiles (connected or not) — public SERP/API metrics don't need OAuth.
    // Mark each profile as connected after a successful sync.
    const results = await Promise.allSettled(
      profiles.map((p) =>
        this.syncProfile(tenantId, clientId, p.platform, p.handle, brandName),
      ),
    );

    // Auto-connect profiles that synced successfully
    await Promise.allSettled(
      results.map((r, i) => {
        const profile = profiles[i];
        if (r.status === "fulfilled" && profile && !profile.isConnected) {
          return this.repo.markConnected(tenantId, clientId, profile.platform);
        }
        return Promise.resolve();
      }),
    );

    return results.map((r, i) => {
      const platform = profiles[i]?.platform ?? "UNKNOWN";
      if (r.status === "fulfilled") {
        return { platform, snapshotId: r.value };
      }
      return {
        platform,
        snapshotId: null,
        error: r.reason instanceof Error ? r.reason.message : String(r.reason),
      };
    });
  }
}
