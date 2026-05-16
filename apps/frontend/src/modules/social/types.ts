export type SocialPlatform = "INSTAGRAM" | "FACEBOOK" | "LINKEDIN" | "YOUTUBE";

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  "INSTAGRAM",
  "FACEBOOK",
  "LINKEDIN",
  "YOUTUBE",
];

export const PLATFORM_LABELS: Record<SocialPlatform, string> = {
  INSTAGRAM: "Instagram",
  FACEBOOK: "Facebook",
  LINKEDIN: "LinkedIn",
  YOUTUBE: "YouTube",
};

export const PLATFORM_COLORS: Record<SocialPlatform, string> = {
  INSTAGRAM: "#E1306C",
  FACEBOOK: "#1877F2",
  LINKEDIN: "#0A66C2",
  YOUTUBE: "#FF0000",
};

// ── API response shapes (mirrors backend row types) ───────────────────────────

export interface SocialProfile {
  id: string;
  tenantId: string;
  clientId: string;
  platform: SocialPlatform;
  handle: string;
  profileUrl: string | null;
  autoFetched: boolean;
  isConnected: boolean;
  accessToken: string | null;
  lastSyncAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface TopPost {
  title?: string;
  url?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  views?: number;
  thumbnail?: string;
  publishedAt?: string;
}

export interface SocialSnapshot {
  id: string;
  tenantId: string;
  socialProfileId: string;
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
  topPosts: TopPost[];
  audienceDemog: Record<string, unknown> | null;
  createdAt: string;
}

export interface SocialDashboardSummary {
  totalFollowers: number;
  avgEngagementRate: number | null;
  totalReach: number | null;
  bestPlatform: string | null;
  connectedCount: number;
}

export interface SocialDashboard {
  profiles: SocialProfile[];
  latestSnapshots: Record<string, SocialSnapshot | null>;
  summary: SocialDashboardSummary;
}

// ── Handle discovery ──────────────────────────────────────────────────────────

export interface FetchedHandle {
  platform: SocialPlatform;
  handle: string;
  profileUrl: string | null;
  confidence: "high" | "medium" | "low";
}

// ── Setup flow states ─────────────────────────────────────────────────────────

export type SetupStep =
  | "idle"
  | "searching"
  | "confirm"
  | "saving"
  | "dashboard";
