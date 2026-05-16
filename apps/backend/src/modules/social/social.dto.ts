import { z } from "zod";

// ── Shared constants ──────────────────────────────────────────────────────────

export const SOCIAL_PLATFORMS = [
  "INSTAGRAM",
  "FACEBOOK",
  "LINKEDIN",
  "YOUTUBE",
] as const;
export type SocialPlatformValue = (typeof SOCIAL_PLATFORMS)[number];

// ── Params ────────────────────────────────────────────────────────────────────

export const SocialClientIdParamSchema = z.object({
  clientId: z.string().min(1),
});
export type SocialClientIdParam = z.infer<typeof SocialClientIdParamSchema>;

export const SocialPlatformParamSchema = z.object({
  clientId: z.string().min(1),
  platform: z.enum(SOCIAL_PLATFORMS),
});
export type SocialPlatformParam = z.infer<typeof SocialPlatformParamSchema>;

// ── Fetch handles ─────────────────────────────────────────────────────────────

export const FetchHandlesBodySchema = z.object({
  brandName: z.string().min(1).max(200),
});
export type FetchHandlesBody = z.infer<typeof FetchHandlesBodySchema>;

export const FetchedHandleSchema = z.object({
  platform: z.enum(SOCIAL_PLATFORMS),
  handle: z.string(),
  profileUrl: z.string().nullable(),
  confidence: z.number().min(0).max(1), // 0-1 score
  autoFetched: z.boolean(),
});
export type FetchedHandle = z.infer<typeof FetchedHandleSchema>;

// ── Profiles ──────────────────────────────────────────────────────────────────

export const SaveProfileBodySchema = z.object({
  platform: z.enum(SOCIAL_PLATFORMS),
  handle: z.string().min(1).max(300),
  profileUrl: z.string().url().optional(),
  autoFetched: z.boolean().default(false),
});
export type SaveProfileBody = z.infer<typeof SaveProfileBodySchema>;

export const ConnectProfileBodySchema = z.object({
  accessToken: z.string().optional(),
});
export type ConnectProfileBody = z.infer<typeof ConnectProfileBodySchema>;

// ── Dashboard ─────────────────────────────────────────────────────────────────

export const SnapshotsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(52).default(12),
});
export type SnapshotsQuery = z.infer<typeof SnapshotsQuerySchema>;
