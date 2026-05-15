import type { RedisOptions } from "bullmq";

/**
 * Shared Redis connection options used by every Queue and Worker in the app.
 * Reads REDIS_URL (e.g. redis://localhost:6379) and falls back to localhost
 * so local dev works without any extra config.
 */
function parseRedisUrl(url: string): RedisOptions {
  const parsed = new URL(url);
  return {
    host: parsed.hostname || "127.0.0.1",
    port: parsed.port ? parseInt(parsed.port) : 6379,
    password: parsed.password || undefined,
    tls: parsed.protocol === "rediss:" ? {} : undefined,
  };
}

const redisUrl = process.env["REDIS_URL"] ?? "redis://localhost:6379";

export const redisConnection: RedisOptions = parseRedisUrl(redisUrl);
