/**
 * Payload enqueued whenever a manual or scheduled sync is triggered.
 * All IDs are required so the worker is self-contained and needs no
 * additional lookups to identify the job.
 */
export interface SyncJobPayload {
  tenantId: string;
  clientId: string;
  providerId: string;
  integrationId: string;
  /** Pre-created SyncLog row so the HTTP response can return it immediately. */
  syncLogId: string;
}

export const SYNC_QUEUE_NAME = "integrations-sync" as const;
