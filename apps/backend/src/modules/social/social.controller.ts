import type { Request, Response, NextFunction } from "express";
import { ok, created } from "@/core/http/response";
import { SocialService } from "./social.service";
import type {
  SocialClientIdParam,
  SocialPlatformParam,
  FetchHandlesBody,
  SaveProfileBody,
  ConnectProfileBody,
  SnapshotsQuery,
} from "./social.dto";
import type { SocialPlatform } from "@prisma/client";

export class SocialController {
  constructor(private readonly service: SocialService) {}

  // ── Handle discovery ────────────────────────────────────────────────────────

  fetchHandles = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SocialClientIdParam;
      const body = req.validated.body as FetchHandlesBody;
      const data = await this.service.fetchHandles(
        req.tenant.id,
        clientId,
        body,
      );
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ── Profiles ────────────────────────────────────────────────────────────────

  listProfiles = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SocialClientIdParam;
      const data = await this.service.listProfiles(req.tenant.id, clientId);
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  saveProfile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SocialClientIdParam;
      const body = req.validated.body as SaveProfileBody;
      const data = await this.service.saveProfile(
        req.tenant.id,
        clientId,
        body,
      );
      created(res, data);
    } catch (err) {
      next(err);
    }
  };

  connectProfile = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, platform } = req.validated
        .params as SocialPlatformParam;
      const body = req.validated.body as ConnectProfileBody;
      const data = await this.service.connectProfile(
        req.tenant.id,
        clientId,
        platform as SocialPlatform,
        body.accessToken,
      );
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ── Sync ────────────────────────────────────────────────────────────────────

  syncPlatform = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, platform } = req.validated
        .params as SocialPlatformParam;
      const brandName = (req.body as Record<string, unknown>)?.["brandName"] as
        | string
        | undefined;
      const data = await this.service.syncPlatform(
        req.tenant.id,
        clientId,
        platform as SocialPlatform,
        brandName ?? "brand",
      );
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  syncAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SocialClientIdParam;
      const brandName = (req.body as Record<string, unknown>)?.["brandName"] as
        | string
        | undefined;
      const data = await this.service.syncAll(
        req.tenant.id,
        clientId,
        brandName ?? "brand",
      );
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ── Dashboard ───────────────────────────────────────────────────────────────

  getDashboard = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId } = req.validated.params as SocialClientIdParam;
      const data = await this.service.getDashboard(req.tenant.id, clientId);
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };

  // ── Snapshots ───────────────────────────────────────────────────────────────

  getSnapshots = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { clientId, platform } = req.validated
        .params as SocialPlatformParam;
      const query = req.validated.query as SnapshotsQuery;
      const data = await this.service.getSnapshots(
        req.tenant.id,
        clientId,
        platform as SocialPlatform,
        query,
      );
      ok(res, data);
    } catch (err) {
      next(err);
    }
  };
}
