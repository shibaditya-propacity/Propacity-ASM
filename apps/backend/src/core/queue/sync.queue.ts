import { Queue } from "bullmq";
import { redisConnection } from "./redis.connection";
import { SYNC_QUEUE_NAME, type SyncJobPayload } from "./queue.types";

/**
 * Singleton Queue instance for integration sync jobs.
 * Import this wherever a sync needs to be enqueued (service layer only).
 */
export const syncQueue = new Queue<SyncJobPayload>(SYNC_QUEUE_NAME, {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 5_000, // 5 s → 25 s → 125 s
    },
    removeOnComplete: { count: 100 },
    removeOnFail: { count: 200 },
  },
});
