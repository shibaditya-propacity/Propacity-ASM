export const SeoEvents = {
  SyncCompleted: "seo.sync.completed",
  KeywordAdded: "seo.keyword.added",
  KeywordRemoved: "seo.keyword.removed",
} as const;

export type SeoEventPayloads = {
  [SeoEvents.SyncCompleted]: {
    tenantId: string;
    clientId: string;
    snapshotId: string;
  };
  [SeoEvents.KeywordAdded]: {
    tenantId: string;
    clientId: string;
    keyword: string;
  };
  [SeoEvents.KeywordRemoved]: {
    tenantId: string;
    clientId: string;
    keywordId: string;
  };
};
