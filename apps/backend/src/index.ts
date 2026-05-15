import { createApp } from "./app";
import { createSyncWorker } from "./modules/integrations/integrations.worker";

const PORT = process.env["PORT"] ? parseInt(process.env["PORT"]) : 3000;

// ── HTTP server ───────────────────────────────────────────────────────────────

const app = createApp();
app.listen(PORT, () => {
  console.log(`ASM backend listening on :${PORT}`);
});

// ── Background workers ────────────────────────────────────────────────────────

const syncWorker = createSyncWorker();

// Graceful shutdown: close worker before process exits so in-flight jobs
// are not abandoned mid-execution.
async function shutdown(signal: string) {
  console.log(`[shutdown] received ${signal} — closing sync worker`);
  await syncWorker.close();
  console.log("[shutdown] sync worker closed");
  process.exit(0);
}

process.on("SIGTERM", () => void shutdown("SIGTERM"));
process.on("SIGINT", () => void shutdown("SIGINT"));
