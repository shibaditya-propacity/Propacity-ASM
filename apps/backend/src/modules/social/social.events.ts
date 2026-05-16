export const SocialEvents = {
  ProfileConnected: "social.profile.connected",
  ProfileSynced: "social.profile.synced",
  HandlesFetched: "social.handles.fetched",
} as const;

export type SocialEventPayloads = {
  [SocialEvents.ProfileConnected]: {
    tenantId: string;
    clientId: string;
    platform: string;
    profileId: string;
  };
  [SocialEvents.ProfileSynced]: {
    tenantId: string;
    clientId: string;
    platform: string;
    snapshotId: string;
  };
  [SocialEvents.HandlesFetched]: {
    tenantId: string;
    clientId: string;
    brandName: string;
    platformsFound: string[];
  };
};
