import { Router } from "express";
import { authGuard } from "@/core/auth/auth.guard";
import { tenantGuard } from "@/core/tenant/tenant.guard";
import { validate } from "@/core/validation/validate";
import { SocialController } from "./social.controller";
import { SocialService } from "./social.service";
import { SocialRepository } from "./social.repository";
import { SocialSyncService } from "./social-sync.service";
import {
  SocialClientIdParamSchema,
  SocialPlatformParamSchema,
  FetchHandlesBodySchema,
  SaveProfileBodySchema,
  ConnectProfileBodySchema,
  SnapshotsQuerySchema,
} from "./social.dto";

// ── Wire dependencies ────────────────────────────────────────────────────────

const repo = new SocialRepository();
const syncService = new SocialSyncService(repo);
const service = new SocialService(repo, syncService);
const controller = new SocialController(service);

export function registerSocialRoutes(router: Router): void {
  const r = Router();

  r.use(authGuard);
  r.use(tenantGuard);

  // POST /social/:clientId/fetch-handles
  r.post(
    "/:clientId/fetch-handles",
    validate({
      params: SocialClientIdParamSchema,
      body: FetchHandlesBodySchema,
    }),
    controller.fetchHandles,
  );

  // GET /social/:clientId/profiles
  r.get(
    "/:clientId/profiles",
    validate({ params: SocialClientIdParamSchema }),
    controller.listProfiles,
  );

  // POST /social/:clientId/profiles
  r.post(
    "/:clientId/profiles",
    validate({
      params: SocialClientIdParamSchema,
      body: SaveProfileBodySchema,
    }),
    controller.saveProfile,
  );

  // POST /social/:clientId/profiles/:platform/connect
  r.post(
    "/:clientId/profiles/:platform/connect",
    validate({
      params: SocialPlatformParamSchema,
      body: ConnectProfileBodySchema,
    }),
    controller.connectProfile,
  );

  // POST /social/:clientId/profiles/:platform/sync
  r.post(
    "/:clientId/profiles/:platform/sync",
    validate({ params: SocialPlatformParamSchema }),
    controller.syncPlatform,
  );

  // POST /social/:clientId/sync (sync all connected platforms)
  r.post(
    "/:clientId/sync",
    validate({ params: SocialClientIdParamSchema }),
    controller.syncAll,
  );

  // GET /social/:clientId/dashboard
  r.get(
    "/:clientId/dashboard",
    validate({ params: SocialClientIdParamSchema }),
    controller.getDashboard,
  );

  // GET /social/:clientId/snapshots/:platform
  r.get(
    "/:clientId/snapshots/:platform",
    validate({
      params: SocialPlatformParamSchema,
      query: SnapshotsQuerySchema,
    }),
    controller.getSnapshots,
  );

  router.use("/social", r);
}
