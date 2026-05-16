import { Worker, type Job } from "bullmq";
import { redisConnection } from "@/core/queue/redis.connection";
import { SYNC_QUEUE_NAME, type SyncJobPayload } from "@/core/queue/queue.types";
import { IntegrationsRepository } from "./integrations.repository";
import { IntegrationsService } from "./integrations.service";

// ── Singleton service wired the same way as in integrations.routes.ts ─────────

const repo = new IntegrationsRepository();
const service = new IntegrationsService(repo);

// ── Worker ────────────────────────────────────────────────────────────────────

/**
 * Processes `integrations-sync` jobs off the queue.
 *
 * Each job carries the full context needed to run a sync independently:
 * tenantId, clientId, providerId, integrationId, and the pre-created syncLogId.
 *
 * On success  → SyncLog status set to SUCCESS, integration metadata updated.
 * On failure  → SyncLog status set to FAILED with error message.
 * BullMQ will retry up to 3 times (exponential back-off) before marking FAILED.
 */
export function createSyncWorker(): Worker<SyncJobPayload> {
  const worker = new Worker<SyncJobPayload>(
    SYNC_QUEUE_NAME,
    async (job: Job<SyncJobPayload>) => {
      const { tenantId, clientId, providerId, integrationId, syncLogId } =
        job.data;

      console.log(
        `[sync-worker] job ${job.id} — ${providerId} for client ${clientId} (attempt ${job.attemptsMade + 1})`,
      );

      await service.runSync({
        tenantId,
        clientId,
        providerId,
        integrationId,
        syncLogId,
      });
    },
    {
      connection: redisConnection,
      concurrency: 5,
    },
  );

  worker.on("completed", (job) => {
    console.log(
      `[sync-worker] job ${job.id} completed — ${job.data.providerId}`,
    );
  });

  worker.on("failed", (job, err) => {
    console.error(
      `[sync-worker] job ${job?.id} failed (attempt ${job?.attemptsMade}) — ${err.message}`,
    );
  });

  worker.on("error", (err) => {
    console.error("[sync-worker] worker error —", err.message);
  });

  return worker;
}
