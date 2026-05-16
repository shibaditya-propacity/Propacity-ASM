import type { SocialPlatform } from "../types";

export const socialKeys = {
  all: ["social"] as const,

  profiles: (clientId: string) =>
    [...socialKeys.all, "profiles", clientId] as const,

  dashboard: (clientId: string) =>
    [...socialKeys.all, "dashboard", clientId] as const,

  snapshots: (clientId: string, platform: SocialPlatform) =>
    [...socialKeys.all, "snapshots", clientId, platform] as const,

  clients: () => ["integrations", "clients"] as const,
};
