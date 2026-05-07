import type { Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { ok, created } from "@/core/http/response";
import { BrandAuditService } from "./brand-audit.service";
import { BrandAuditRepository } from "./brand-audit.repository";
import { AuditNotFoundError } from "./brand-audit.errors";
import type {
  CreateAuditInput,
  ListAuditsQuery,
  IdParam,
  ManualInputInput,
  LinkProspectInput,
} from "./brand-audit.dto";
import { prisma } from "@/core/prisma/client";

const UPLOADS_DIR = path.resolve(process.cwd(), "uploads");

// ── Shared helpers (ported from Next.js _shared.ts) ───────────────────────────

type ItemStatus = "PASS" | "FAIL" | "PARTIAL" | "NA";
const STATUS_MAP: Record<string, ItemStatus> = {
  pass: "PASS",
  fail: "FAIL",
  partial: "PARTIAL",
  na: "NA",
};

export function buildManualOverrideNote(overrides: unknown): string {
  if (
    !overrides ||
    typeof overrides !== "object" ||
    Object.keys(overrides as object).length === 0
  )
    return "";
  const lines = Object.entries(overrides as Record<string, unknown>)
    .filter(([, v]) => v !== null && v !== undefined && v !== "")
    .map(([k, v]) => `  - ${k}: ${JSON.stringify(v)}`);
  if (!lines.length) return "";
  return (
    "\n\nMANUAL AUDITOR INPUT: The following data was manually provided by the auditor and should be " +
    "treated as ground truth, taking precedence over inferred or auto-collected data where applicable:\n" +
    lines.join("\n")
  );
}

export function buildDataAvailabilityNote(missing: string[]): string {
  if (!missing.length) return "";
  return (
    "\n\nDATA AVAILABILITY NOTE: The following data sources are unavailable for this audit: " +
    missing.join(", ") +
    '. STRICT RULES: (1) Set status to "na" and finding to "Data source unavailable — cannot evaluate"' +
    " for every checklist item that depends on these sources." +
    ' (2) Do NOT use "partial" as a substitute for missing data.' +
    ' (3) Do NOT write observations like "the existence of X suggests Y" when you cannot see actual data.' +
    " (4) Do NOT infer, assume, or speculate about data you were not given."
  );
}

async function saveSkippedDimension(
  auditId: string,
  tenantId: string,
  repo: BrandAuditRepository,
  code: string,
): Promise<null> {
  const dimensionData = {
    code,
    score: null,
    status: "no_data",
    aiSummary: "No data sources were available — analysis skipped.",
    aiFindings: { insufficientData: true, skipped: true },
    aiFlags: [],
    items: [],
    analyzedAt: new Date().toISOString(),
  };
  await repo.updateDimension(tenantId, auditId, dimensionData);
  return null;
}

async function saveDimensionResult(
  auditId: string,
  tenantId: string,
  repo: BrandAuditRepository,
  code: string,
  findings: {
    score: number;
    summary: string;
    items: Array<{
      code: string;
      status: string;
      finding: string;
      recommendation: string;
      priority: string;
      dataSource: string;
      sourceUrl?: string;
    }>;
    criticalFlags: string[];
    strengths: string[];
    quickWins: string[];
    [key: string]: unknown;
  },
): Promise<number | null> {
  const items = (findings.items ?? []).map((item) => ({
    itemCode: item.code,
    status: STATUS_MAP[item.status?.toLowerCase?.()] ?? "FAIL",
    aiNote: item.finding,
    dataSource: item.dataSource,
    sourceUrl: item.sourceUrl ?? null,
  }));

  const naCount = items.filter((i) => i.status === "NA").length;
  const insufficientData = items.length > 0 && naCount / items.length > 0.5;
  const score = insufficientData ? null : findings.score;

  const dimensionData = {
    code,
    score,
    status: insufficientData ? "insufficient_data" : "complete",
    aiSummary: findings.summary,
    aiFindings: { ...(findings as Record<string, unknown>), insufficientData },
    aiFlags: findings.criticalFlags ?? [],
    items,
    analyzedAt: new Date().toISOString(),
  };

  await repo.updateDimension(tenantId, auditId, dimensionData);
  return score;
}

/** Load audit + developer from Prisma (Express-side equivalent of getAuditWithDev) */
async function getAuditWithDev(
  tenantId: string,
  auditId: string,
  repo: BrandAuditRepository,
) {
  const audit = await repo.findById(tenantId, auditId);
  if (!audit || !audit.developer)
    return {
      audit: null,
      dev: null,
      manualOverrides: {} as Record<string, unknown>,
    };
  const manualOverrides =
    (audit.manualOverrides as Record<string, unknown>) ?? {};
  return { audit, dev: audit.developer, manualOverrides };
}

const WEIGHTS: Record<string, number> = {
  D1: 8,
  D2: 12,
  D3: 10,
  D4: 12,
  D5: 8,
  D6: 8,
  D7: 15,
  D8: 10,
  D9: 9,
  D10: 8,
};

const DIMENSION_SOURCES: Record<string, string[]> = {
  D1: ["PDL", "DataForSEO"],
  D2: ["WebCrawler", "DataForSEO", "Screenshot"],
  D3: ["HikerAPI", "PDL"],
  D4: ["MetaAdLibrary"],
  D5: ["Screenshot"],
  D6: ["WebCrawler"],
  D7: ["Reviews"],
  D8: ["WebCrawler", "DataForSEO"],
  D9: ["Reviews", "HikerAPI", "DataForSEO"],
  D10: ["WebCrawler", "PDL", "PromoterLinkedIn"],
};

/** Returns today's date in YYYY-MM-DD format, always a string. */
function todayDate(): string {
  return new Date().toISOString().slice(0, 10);
}

// ── Controller ────────────────────────────────────────────────────────────────

export class BrandAuditController {
  constructor(
    private readonly service: BrandAuditService,
    private readonly repo: BrandAuditRepository,
  ) {}

  // ── CRUD ──────────────────────────────────────────────────────────────────

  createAudit = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const input = req.validated.body as CreateAuditInput;
      const result = await this.service.createAudit(req.tenant.id, input);
      if (result.existing) {
        ok(res, result);
      } else {
        created(res, result);
      }
    } catch (err) {
      next(err);
    }
  };

  getAudit = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const audit = await this.service.getAudit(req.tenant.id, id);
      ok(res, audit);
    } catch (err) {
      next(err);
    }
  };

  listAudits = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const query = req.validated.query as ListAuditsQuery;
      const result = await this.service.listAudits(req.tenant.id, query);
      ok(res, result.data, {
        pagination: {
          page: result.page,
          limit: result.limit,
          total: result.total,
        },
      });
    } catch (err) {
      next(err);
    }
  };

  updateManualOverrides = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const { dimensionCode, data } = req.validated.body as ManualInputInput;
      await this.service.updateManualOverrides(
        req.tenant.id,
        id,
        dimensionCode,
        data,
      );
      ok(res, { success: true });
    } catch (err) {
      next(err);
    }
  };

  // ── Prospect linking ───────────────────────────────────────────────────────

  getAuditByProspect = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { prospectId } = req.validated.params as { prospectId: string };
      const audit = await this.service.getAuditByProspect(
        req.tenant.id,
        prospectId,
      );
      ok(res, audit);
    } catch (err) {
      next(err);
    }
  };

  linkAuditToProspect = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.validated.params as IdParam;
      const { prospectId } = req.validated.body as LinkProspectInput;
      await this.service.linkAuditToProspect(req.tenant.id, id, prospectId);
      ok(res, { success: true });
    } catch (err) {
      next(err);
    }
  };

  backfillProspectLinks = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const result = await this.service.backfillProspectLinks(req.tenant.id);
      ok(res, result);
    } catch (err) {
      next(err);
    }
  };

  // ── Upload collateral PDF ─────────────────────────────────────────────────

  uploadCollateral = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.params as { id: string };
      const tenantId = req.tenant.id;

      const body = req.body as {
        fileData?: string;
        fileName?: string;
        size?: number;
      };

      if (!body.fileData || !body.fileName) {
        res.status(400).json({ error: "fileData and fileName are required" });
        return;
      }

      const MAX_BYTES = 5 * 1024 * 1024;
      const rawSize = body.size ?? 0;
      if (rawSize > MAX_BYTES) {
        res.status(400).json({ error: "File must be 5 MB or smaller" });
        return;
      }

      const ext = path.extname(body.fileName).toLowerCase();
      if (ext !== ".pdf") {
        res.status(400).json({ error: "Only PDF files are allowed" });
        return;
      }

      await fs.promises.mkdir(UPLOADS_DIR, { recursive: true });

      const diskName = `${Date.now()}-${crypto.randomBytes(8).toString("hex")}.pdf`;
      const filePath = path.join(UPLOADS_DIR, diskName);

      // Strip data-URL prefix if present (e.g. "data:application/pdf;base64,")
      const base64 = body.fileData.includes(",")
        ? body.fileData.split(",")[1]!
        : body.fileData;

      await fs.promises.writeFile(filePath, Buffer.from(base64, "base64"));

      const host = `${req.protocol}://${req.get("host")}`;
      const url = `${host}/uploads/${diskName}`;

      const asset = {
        type: "collateral_pdf",
        fileName: diskName,
        originalName: body.fileName,
        size: rawSize,
        uploadedAt: new Date().toISOString(),
        url,
      };

      await this.repo.addAsset(tenantId, id, asset);

      ok(res, asset);
    } catch (err) {
      next(err);
    }
  };

  // ── SSE: Run full audit ────────────────────────────────────────────────────

  runAudit = async (req: Request, res: Response): Promise<void> => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    function send(data: object): void {
      try {
        res.write(`data: ${JSON.stringify(data)}\n\n`);
      } catch {
        /* stream closed */
      }
    }

    const id = (req.params["id"] ??
      (req.validated?.params as IdParam | undefined)?.id) as string;
    const tenantId = req.tenant.id;
    const selfOrigin =
      process.env["API_BASE_URL"] ??
      process.env["RENDER_EXTERNAL_URL"] ??
      `http://localhost:${process.env["PORT"] ?? 3000}`;
    const apiBase = `${selfOrigin}/api/v1/brand-audit`;
    const authHeader = req.headers["authorization"] ?? "";

    try {
      const audit = await this.repo.findById(tenantId, id);
      if (!audit) {
        send({ stage: "error", message: "Audit not found" });
        res.end();
        return;
      }
      const dev = audit.developer;
      if (!dev) {
        send({ stage: "error", message: "Developer not found" });
        res.end();
        return;
      }

      await this.repo.updateStatus(tenantId, id, "COLLECTING");
      send({ stage: "collecting", message: "Starting data collection..." });

      type CollectTask = {
        key: string;
        source: string;
        enabled: boolean;
        body: Record<string, unknown>;
      };

      const collectTasks: CollectTask[] = [
        {
          key: "company-data",
          source: "PDL",
          enabled: !!(dev.domain || dev.brandName),
          body: {
            domain: dev.domain,
            brandName: dev.brandName,
            auditId: id,
            developerId: dev.id,
          },
        },
        {
          key: "gmb",
          source: "Reviews",
          enabled: !!dev.brandName,
          body: { placeId: dev.gmbPlaceId, auditId: id },
        },
        {
          key: "seo",
          source: "DataForSEO",
          enabled: !!(dev.domain || dev.brandName),
          body: { domain: dev.domain, brandName: dev.brandName, auditId: id },
        },
        {
          key: "website",
          source: "WebCrawler",
          enabled: !!dev.websiteUrl,
          body: { websiteUrl: dev.websiteUrl, auditId: id },
        },
        {
          key: "instagram",
          source: "HikerAPI",
          enabled: !!(
            dev.instagramHandle ||
            dev.facebookUrl ||
            dev.linkedinUrl
          ),
          body: { instagramHandle: dev.instagramHandle, auditId: id },
        },
        {
          key: "meta-ads",
          source: "MetaAdLibrary",
          enabled: true,
          body: {
            brandName: dev.metaAdLibraryName ?? dev.brandName,
            auditId: id,
          },
        },
        {
          key: "screenshot",
          source: "Screenshot",
          enabled: !!dev.websiteUrl,
          body: { websiteUrl: dev.websiteUrl, domain: dev.domain, auditId: id },
        },
        {
          key: "promoter-linkedin",
          source: "PromoterLinkedIn",
          enabled: !!dev.promoterLinkedIn,
          body: { auditId: id },
        },
      ];

      const collectedSources: string[] = [];
      const failedSources: string[] = [];

      await Promise.allSettled(
        collectTasks
          .filter((t) => t.enabled)
          .map(async (task) => {
            send({
              stage: "collecting",
              source: task.source,
              status: "in_progress",
            });
            try {
              const r = await fetch(`${apiBase}/collect/${task.key}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: authHeader,
                },
                body: JSON.stringify(task.body),
              });

              let succeeded = r.ok;
              if (r.ok) {
                try {
                  const json = (await r.json()) as {
                    success?: boolean;
                    error?: string;
                  };
                  succeeded = json.success !== false;
                  if (!succeeded) {
                    console.error(
                      `[collect/${task.source}] API reported failure: ${json.error}`,
                    );
                  }
                } catch {
                  /* response not JSON */
                }
              }

              if (succeeded) {
                collectedSources.push(task.source);
                send({
                  stage: "collecting",
                  source: task.source,
                  status: "done",
                });
              } else {
                failedSources.push(task.source);
                send({
                  stage: "collecting",
                  source: task.source,
                  status: "failed",
                });
              }
            } catch (err) {
              console.error(
                `Collection failed for ${task.source}:`,
                err instanceof Error ? err.message : err,
              );
              failedSources.push(task.source);
              send({
                stage: "collecting",
                source: task.source,
                status: "failed",
              });
            }
          }),
      );

      await this.repo.updateStatus(tenantId, id, "ANALYZING", {
        dataSourceStatus: {
          collected: collectedSources,
          failed: failedSources,
        },
      });

      send({
        stage: "analyzing",
        message: "Starting AI analysis...",
        collectedSources,
        failedSources,
      });

      const dimensionScores: Record<string, number | null> = {};

      const runDimension = async (
        dim: string,
      ): Promise<{ success: boolean; score?: number | null }> => {
        const r = await fetch(`${apiBase}/analyze/${dim}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authHeader,
          },
          body: JSON.stringify({ auditId: id }),
        });
        return r.json().catch(() => ({ success: false })) as Promise<{
          success: boolean;
          score?: number | null;
        }>;
      };

      for (const dim of [
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "d10",
      ]) {
        const code = dim.toUpperCase();
        send({ stage: "analyzing", dimension: code, status: "in_progress" });
        try {
          let result = await runDimension(dim);
          if (result.success === false) {
            console.warn(`[analyze/${code}] attempt 1 failed, retrying in 5s…`);
            await new Promise((r) => setTimeout(r, 5000));
            result = await runDimension(dim);
          }

          if (result.success !== false) {
            dimensionScores[code] = result.score ?? null;
            send({
              stage: "analyzing",
              dimension: code,
              status: "done",
              score: result.score ?? null,
            });
          } else {
            console.error(`[analyze/${code}] failed after retry`);
            send({ stage: "analyzing", dimension: code, status: "failed" });
          }
        } catch (err) {
          console.error(
            `Analysis failed for ${code}:`,
            err instanceof Error ? err.message : err,
          );
          send({ stage: "analyzing", dimension: code, status: "failed" });
        }

        await new Promise((r) => setTimeout(r, 1500));
      }

      // Calculate overall score
      let totalWeight = 0;
      let weightedSum = 0;
      for (const [dim, score] of Object.entries(dimensionScores)) {
        if (score === null) continue;
        const w = WEIGHTS[dim] ?? 0;
        weightedSum += score * w;
        totalWeight += w;
      }
      const overallScore =
        totalWeight > 0 ? Math.round(weightedSum / totalWeight) : null;

      // Run collateral analysis — non-blocking
      try {
        await fetch(`${apiBase}/analyze/collateral`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authHeader,
          },
          body: JSON.stringify({ auditId: id }),
        });
      } catch (err) {
        console.error(
          "[collateral] analysis failed:",
          err instanceof Error ? err.message : err,
        );
      }

      await this.repo.updateStatus(tenantId, id, "COMPLETE", { overallScore });
      send({
        stage: "complete",
        overallScore,
        collectedSources,
        failedSources,
      });
    } catch (error) {
      console.error("Run audit error:", error);
      try {
        await this.repo.updateStatus(tenantId, id, "FAILED");
      } catch {
        /* ignore */
      }
      send({ stage: "error", message: "Audit failed. Please try again." });
    } finally {
      res.end();
    }
  };

  // ── SSE: Rerun single dimension ────────────────────────────────────────────

  rerunDimension = async (req: Request, res: Response): Promise<void> => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    function send(data: object): void {
      try {
        res.write(`data: ${JSON.stringify(data)}\n\n`);
      } catch {
        /* stream closed */
      }
    }

    const id = req.params["id"] as string;
    const tenantId = req.tenant.id;
    const selfOrigin =
      process.env["API_BASE_URL"] ??
      process.env["RENDER_EXTERNAL_URL"] ??
      `http://localhost:${process.env["PORT"] ?? 3000}`;
    const apiBase = `${selfOrigin}/api/v1/brand-audit`;
    const authHeader = req.headers["authorization"] ?? "";

    // dimension + skipCollection from query params
    const dimension = ((req.query["dimension"] as string) ?? "").toUpperCase();
    const skipCollection = req.query["skipCollection"] === "true";

    try {
      if (!dimension || !DIMENSION_SOURCES[dimension]) {
        send({ stage: "error", message: `Unknown dimension: ${dimension}` });
        res.end();
        return;
      }

      const audit = await this.repo.findById(tenantId, id);
      if (!audit) {
        send({ stage: "error", message: "Audit not found" });
        res.end();
        return;
      }
      const dev = audit.developer;
      if (!dev) {
        send({ stage: "error", message: "Developer not found" });
        res.end();
        return;
      }

      const sourcesNeeded = DIMENSION_SOURCES[dimension] ?? [];

      if (!skipCollection) {
        send({
          stage: "collecting",
          message: `Re-collecting data for ${dimension}…`,
        });

        type BuildTask = {
          source: string;
          urlKey: string;
          enabled: boolean;
          body: Record<string, unknown>;
        };

        function buildCollectTask(source: string): BuildTask | null {
          switch (source) {
            case "PDL":
              return {
                source,
                urlKey: "company-data",
                enabled: !!(dev!.domain || dev!.brandName),
                body: {
                  domain: dev!.domain,
                  brandName: dev!.brandName,
                  auditId: id,
                  developerId: dev!.id,
                },
              };
            case "Reviews":
              return {
                source,
                urlKey: "gmb",
                enabled: !!dev!.brandName,
                body: { placeId: dev!.gmbPlaceId, auditId: id },
              };
            case "DataForSEO":
              return {
                source,
                urlKey: "seo",
                enabled: !!(dev!.domain || dev!.brandName),
                body: {
                  domain: dev!.domain,
                  brandName: dev!.brandName,
                  auditId: id,
                },
              };
            case "WebCrawler":
              return {
                source,
                urlKey: "website",
                enabled: !!dev!.websiteUrl,
                body: { websiteUrl: dev!.websiteUrl, auditId: id },
              };
            case "HikerAPI":
              return {
                source,
                urlKey: "instagram",
                enabled: !!(
                  dev!.instagramHandle ||
                  dev!.facebookUrl ||
                  dev!.linkedinUrl
                ),
                body: { instagramHandle: dev!.instagramHandle, auditId: id },
              };
            case "MetaAdLibrary":
              return {
                source,
                urlKey: "meta-ads",
                enabled: true,
                body: {
                  brandName: dev!.metaAdLibraryName ?? dev!.brandName,
                  auditId: id,
                },
              };
            case "Screenshot":
              return {
                source,
                urlKey: "screenshot",
                enabled: !!dev!.websiteUrl,
                body: {
                  websiteUrl: dev!.websiteUrl,
                  domain: dev!.domain,
                  auditId: id,
                },
              };
            case "PromoterLinkedIn":
              return {
                source,
                urlKey: "promoter-linkedin",
                enabled: !!dev!.promoterLinkedIn,
                body: { auditId: id },
              };
            default:
              return null;
          }
        }

        const tasks = sourcesNeeded
          .map(buildCollectTask)
          .filter((t): t is BuildTask => t !== null && t.enabled);

        await Promise.allSettled(
          tasks.map(async (task) => {
            send({
              stage: "collecting",
              source: task.source,
              status: "in_progress",
            });
            try {
              const r = await fetch(`${apiBase}/collect/${task.urlKey}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: authHeader,
                },
                body: JSON.stringify(task.body),
              });
              const json = r.ok
                ? await r.json().catch(() => ({}))
                : ({} as Record<string, unknown>);
              const succeeded =
                (json as { success?: boolean }).success !== false && r.ok;
              send({
                stage: "collecting",
                source: task.source,
                status: succeeded ? "done" : "failed",
              });
            } catch {
              send({
                stage: "collecting",
                source: task.source,
                status: "failed",
              });
            }
          }),
        );
      } else {
        send({
          stage: "collecting",
          message: "Collection skipped — using manual data",
          status: "done",
        });
      }

      // Analysis phase
      send({
        stage: "analyzing",
        dimension,
        status: "in_progress",
        message: `Re-analyzing ${dimension}…`,
      });

      const dimRoute = dimension.toLowerCase();
      const analyzeRes = await fetch(`${apiBase}/analyze/${dimRoute}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        body: JSON.stringify({ auditId: id }),
      });
      const analyzeJson = (await analyzeRes
        .json()
        .catch(() => ({ success: false }))) as {
        success?: boolean;
        score?: number | null;
        error?: string;
      };

      if (analyzeJson.success === false) {
        send({ stage: "analyzing", dimension, status: "failed" });
        send({
          stage: "error",
          message: analyzeJson.error ?? "Analysis failed",
        });
        res.end();
        return;
      }

      const newScore: number | null = analyzeJson.score ?? null;
      send({ stage: "analyzing", dimension, status: "done", score: newScore });

      // Recalculate overall score
      const freshAudit = await this.repo.findById(tenantId, id);
      let overallScore: number | null = null;

      if (freshAudit) {
        const dims =
          (freshAudit.dimensions as Array<{
            code: string;
            score?: number | null;
            status?: string;
          }>) ?? [];
        let totalWeight = 0;
        let weightedSum = 0;
        for (const d of dims) {
          if (d.score == null) continue;
          const w = WEIGHTS[d.code] ?? 0;
          weightedSum += d.score * w;
          totalWeight += w;
        }
        overallScore =
          totalWeight > 0 ? Math.round(weightedSum / totalWeight) : null;

        const allDimCodes = Object.keys(WEIGHTS);
        const allAnalyzed = allDimCodes.every((code) => {
          const d = dims.find((x) => x.code === code);
          return (
            d && (d.status === "complete" || d.status === "insufficient_data")
          );
        });

        await this.repo.updateStatus(
          tenantId,
          id,
          allAnalyzed ? "COMPLETE" : freshAudit.status,
          {
            overallScore,
          },
        );
      }

      send({ stage: "complete", dimension, score: newScore, overallScore });
    } catch (err) {
      console.error("Rerun dimension error:", err);
      send({
        stage: "error",
        message: "Re-analysis failed. Please try again.",
      });
    } finally {
      res.end();
    }
  };

  // ── Collect endpoints ──────────────────────────────────────────────────────

  collectGmb = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId, placeId } = req.body as {
        auditId: string;
        placeId?: string;
      };
      const tenantId = req.tenant.id;

      const { getPlaceDetails, getSerperPlaceRating } =
        await import("./lib/apis/googlePlaces");
      const { getGoogleReviewsSummary } =
        await import("./lib/apis/apifyReviews");
      type ReviewSummary = Awaited<ReturnType<typeof getGoogleReviewsSummary>>;

      const audit = auditId
        ? await this.repo.findById(tenantId, auditId)
        : null;
      const dev = audit?.developer ?? null;

      let geoapifyDetails = null;
      if (placeId) {
        try {
          geoapifyDetails = await getPlaceDetails(placeId);
        } catch (err) {
          console.error(
            "[gmb] Geoapify error:",
            err instanceof Error ? err.message : err,
          );
        }
      }

      let reviewSummary: ReviewSummary | null = null;
      if (dev?.brandName) {
        try {
          reviewSummary = await getGoogleReviewsSummary(
            dev.brandName,
            dev.city ?? undefined,
          );
        } catch (err) {
          console.error(
            "[gmb] Apify reviews failed:",
            err instanceof Error ? err.message : err,
          );
        }
      }

      let serperData: {
        rating: number | null;
        user_ratings_total: number | null;
        address: string | null;
      } | null = null;
      const apifyHasRating = reviewSummary?.overallRating != null;

      if (!apifyHasRating && dev?.brandName) {
        try {
          serperData = await getSerperPlaceRating(
            dev.brandName,
            dev.city ?? undefined,
          );
        } catch (err) {
          console.error(
            "[gmb] Serper fallback failed:",
            err instanceof Error ? err.message : err,
          );
        }
      }

      if (!reviewSummary && serperData?.rating != null) {
        reviewSummary = {
          source: "apify_google_reviews",
          placeName: null,
          placeAddress: serperData.address,
          placeUrl: null,
          overallRating: serperData.rating,
          totalReviews: serperData.user_ratings_total,
          fetchedCount: 0,
          ratingDistribution: { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 },
          above4Count: 0,
          above4Pct: 0,
          avgFetchedRating: null,
          responseRate: 0,
          localGuideCount: 0,
          positiveThemes: [],
          negativeThemes: [],
          recentSamples: [],
        } as ReviewSummary;
      }

      const gmbData = {
        rating:
          reviewSummary?.overallRating ??
          (geoapifyDetails as Record<string, unknown> | null)?.["rating"] ??
          null,
        user_ratings_total:
          reviewSummary?.totalReviews ??
          (geoapifyDetails as Record<string, unknown> | null)?.[
            "user_ratings_total"
          ] ??
          null,
        address:
          reviewSummary?.placeAddress ??
          (geoapifyDetails as Record<string, unknown> | null)?.[
            "formatted_address"
          ] ??
          null,
        website:
          (geoapifyDetails as Record<string, unknown> | null)?.["website"] ??
          null,
        phone:
          (geoapifyDetails as Record<string, unknown> | null)?.[
            "formatted_phone_number"
          ] ?? null,
        reviewsSource: reviewSummary
          ? reviewSummary.fetchedCount > 0
            ? "apify"
            : "serper_fallback"
          : "none",
      };

      if (auditId) {
        await this.repo.updateCollectedData(tenantId, auditId, {
          gmbData,
          googleReviews: reviewSummary ?? null,
        });
      }

      ok(res, { success: true, data: { gmbData, reviewSummary }, error: null });
    } catch (error) {
      const msg =
        error instanceof Error ? error.message : "Failed to collect GMB data";
      console.error("[gmb] collection error:", msg);
      ok(res, { success: false, data: null, error: msg });
    }
  };

  collectSeo = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { domain, brandName, auditId } = req.body as {
        domain?: string;
        brandName?: string;
        auditId?: string;
      };
      const tenantId = req.tenant.id;

      const {
        getSerpResults,
        getBacklinksSummary,
        postOnPageTask,
        getOnPageResults,
        findDomainInSerp,
      } = await import("./lib/apis/dataForSeo");

      const [serpResult, backlinksResult] = await Promise.allSettled([
        getSerpResults(brandName ?? domain ?? ""),
        domain ? getBacklinksSummary(domain) : Promise.resolve(null),
      ]);

      let technicalSeo = null;
      if (domain) {
        try {
          const taskId = await postOnPageTask(domain);
          if (taskId) {
            await new Promise((r) => setTimeout(r, 15000));
            technicalSeo = await getOnPageResults(taskId);
          }
        } catch (err) {
          console.error(
            "Technical SEO task failed:",
            err instanceof Error ? err.message : err,
          );
        }
      }

      const serpData =
        serpResult.status === "fulfilled" ? serpResult.value : null;
      const backlinks =
        backlinksResult.status === "fulfilled" ? backlinksResult.value : null;
      const domainRanking =
        serpData && domain ? findDomainInSerp(serpData, domain) : null;

      if (serpResult.status === "rejected") {
        const msg =
          serpResult.reason instanceof Error
            ? serpResult.reason.message
            : "SEO data collection failed";
        console.error("SEO SERP collection error:", msg);
        if (auditId) {
          const existing = await this.repo.findById(tenantId, auditId);
          const cached = (
            existing?.collectedData as Record<string, unknown> | null
          )?.["seoKeywords"];
          if (cached) {
            ok(res, {
              success: true,
              data: { serpData: cached },
              cached: true,
            });
            return;
          }
        }
        ok(res, { success: false, data: null, error: "SEO data unavailable" });
        return;
      }

      if (auditId) {
        await this.repo.updateCollectedData(tenantId, auditId, {
          seoKeywords: serpData,
          backlinks,
          technicalSeo,
        });
      }

      ok(res, {
        success: true,
        data: { serpData, backlinks, technicalSeo, domainRanking },
        error: null,
      });
    } catch (error) {
      const msg =
        error instanceof Error ? error.message : "Failed to collect SEO data";
      console.error("SEO collection error:", msg);
      ok(res, { success: false, data: null, error: msg });
    }
  };

  collectWebsite = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { websiteUrl, auditId } = req.body as {
        websiteUrl?: string;
        auditId?: string;
      };
      const tenantId = req.tenant.id;

      if (!websiteUrl) {
        ok(res, { success: false, data: null, error: "websiteUrl required" });
        return;
      }

      const { crawlWebsite } = await import("./lib/apis/webCrawler");

      let insights = null;
      try {
        insights = await crawlWebsite(websiteUrl);
      } catch (err) {
        console.error(
          "[website] crawlWebsite error:",
          err instanceof Error ? err.message : String(err),
        );
      }

      if (!insights && auditId) {
        const existing = await this.repo.findById(tenantId, auditId);
        const cached = (
          (existing?.collectedData as Record<string, unknown> | null)?.[
            "websiteContent"
          ] as Record<string, unknown> | null
        )?.["insights"];
        if (cached) {
          ok(res, {
            success: true,
            data: { insights: cached, rawPageCount: 0 },
            cached: true,
          });
          return;
        }
      }

      if (!insights) {
        ok(res, {
          success: false,
          data: null,
          error: "Website crawl returned no content",
        });
        return;
      }

      if (auditId) {
        await this.repo.updateCollectedData(tenantId, auditId, {
          websiteContent: {
            insights,
            rawPageCount: (insights as { pages?: number }).pages,
          },
        });
      }

      ok(res, {
        success: true,
        data: { insights, pageCount: (insights as { pages?: number }).pages },
        error: null,
      });
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Failed to collect website data";
      console.error("Website collection error:", msg);
      ok(res, { success: false, data: null, error: msg });
    }
  };

  collectInstagram = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { instagramHandle, auditId } = req.body as {
        instagramHandle?: string;
        auditId?: string;
      };
      const tenantId = req.tenant.id;

      if (!instagramHandle && !auditId) {
        ok(res, {
          success: false,
          data: null,
          error: "instagramHandle or auditId required",
        });
        return;
      }

      const { getSocialInsights } = await import("./lib/apis/socialInsights");

      const audit = auditId
        ? await this.repo.findById(tenantId, auditId)
        : null;
      const dev = audit?.developer ?? null;

      const handle =
        dev?.instagramHandle?.replace("@", "") ??
        instagramHandle?.replace("@", "") ??
        null;
      const brandName = dev?.brandName ?? handle ?? "Unknown";

      const insights = await getSocialInsights({
        brandName,
        instagramHandle: handle,
        facebookUrl: dev?.facebookUrl ?? null,
        linkedinUrl: dev?.linkedinUrl ?? null,
        youtubeUrl: dev?.youtubeUrl ?? null,
      });

      const hasAnyData =
        insights.instagram ||
        insights.facebook ||
        insights.linkedin ||
        insights.youtube;

      if (!hasAnyData) {
        if (auditId) {
          const existing = await this.repo.findById(tenantId, auditId);
          const cached = (
            existing?.collectedData as Record<string, unknown> | null
          )?.["instagramData"];
          if (cached) {
            ok(res, {
              success: true,
              data: { instagram: cached },
              cached: true,
            });
            return;
          }
        }
        ok(res, {
          success: false,
          data: null,
          error: "No social data found for any platform",
        });
        return;
      }

      if (auditId) {
        const patch: Record<string, unknown> = {};
        if (insights.instagram) patch["instagramData"] = insights.instagram;
        if (insights.facebook) patch["facebookData"] = insights.facebook;
        if (insights.linkedin) patch["linkedinData"] = insights.linkedin;
        if (insights.youtube) patch["youtubeData"] = insights.youtube;
        if (Object.keys(patch).length) {
          await this.repo.updateCollectedData(tenantId, auditId, patch);
        }
      }

      ok(res, { success: true, data: insights, error: null });
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Failed to collect social data";
      console.error("Social collection error:", msg);
      ok(res, { success: false, data: null, error: msg });
    }
  };

  collectMetaAds = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { brandName, auditId } = req.body as {
        brandName?: string;
        auditId?: string;
      };
      const tenantId = req.tenant.id;

      const { getMetaAds, analyzeMetaAds } =
        await import("./lib/apis/metaAdLibrary");

      let ads: Awaited<ReturnType<typeof getMetaAds>> = [];
      try {
        ads = await getMetaAds(brandName ?? "");
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error("Meta ads API error:", msg);
        if (auditId) {
          const existing = await this.repo.findById(tenantId, auditId);
          const cached = (
            existing?.collectedData as Record<string, unknown> | null
          )?.["metaAdsData"];
          if (cached) {
            ok(res, { success: true, data: cached, cached: true });
            return;
          }
        }
        ok(res, { success: false, data: null, error: "Ad data unavailable" });
        return;
      }

      const analysis = analyzeMetaAds(ads);
      const data = { ads, analysis };

      if (auditId) {
        await this.repo.updateCollectedData(tenantId, auditId, {
          metaAdsData: data,
        });
      }

      ok(res, { success: true, data, error: null });
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Failed to collect Meta ads data";
      console.error("Meta ads collection error:", msg);
      ok(res, { success: false, data: null, error: msg });
    }
  };

  collectScreenshot = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { websiteUrl, domain, auditId } = req.body as {
        websiteUrl?: string;
        domain?: string;
        auditId?: string;
      };
      const tenantId = req.tenant.id;

      const { captureScreenshot, checkClearbitLogo } =
        await import("./lib/apis/shotApi");

      const [screenshotResult, logoResult] = await Promise.allSettled([
        websiteUrl ? captureScreenshot(websiteUrl) : Promise.resolve(null),
        domain ? checkClearbitLogo(domain) : Promise.resolve(null),
      ]);

      const screenshotUrl =
        screenshotResult.status === "fulfilled" ? screenshotResult.value : null;
      const logoUrl =
        logoResult.status === "fulfilled" ? logoResult.value : null;

      if (screenshotResult.status === "rejected") {
        console.error("Screenshot capture failed:", screenshotResult.reason);
      }
      if (logoResult.status === "rejected") {
        console.error("Logo fetch failed:", logoResult.reason);
      }

      if (auditId && (screenshotUrl || logoUrl)) {
        const patch: Record<string, unknown> = {};
        if (screenshotUrl) patch["screenshotUrl"] = screenshotUrl;
        if (logoUrl) patch["logoUrl"] = logoUrl;
        await this.repo.updateCollectedData(tenantId, auditId, patch);
      }

      if (!screenshotUrl && !logoUrl && (websiteUrl || domain)) {
        ok(res, {
          success: false,
          data: null,
          error: "Both screenshot and logo capture failed",
        });
        return;
      }

      ok(res, { success: true, data: { screenshotUrl, logoUrl }, error: null });
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Failed to collect screenshots";
      console.error("Screenshot collection error:", msg);
      ok(res, { success: false, data: null, error: msg });
    }
  };

  collectCompanyData = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { domain, brandName, auditId, developerId } = req.body as {
        domain?: string;
        brandName?: string;
        auditId?: string;
        developerId?: string;
      };

      const { enrichCompany, extractCompanyData } =
        await import("./lib/apis/pdl");

      let pdlData = null;
      let extracted = null;

      if (domain) {
        try {
          pdlData = await enrichCompany(domain);
          if (pdlData && developerId) {
            extracted = extractCompanyData(pdlData);
            // Update developer's pdlData directly in Prisma
            await prisma.auditDeveloper.update({
              where: { id: developerId },
              data: {
                pdlData:
                  pdlData as import("@prisma/client").Prisma.InputJsonValue,
              },
            });
          }
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error("Company data API error:", msg);
          ok(res, { success: false, data: null, error: msg });
          return;
        }
      }

      void auditId;
      ok(res, {
        success: true,
        data: { pdlData, extracted, brandName },
        error: null,
      });
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Failed to collect company data";
      console.error("Company data collection error:", msg);
      ok(res, { success: false, data: null, error: msg });
    }
  };

  collectCompetitors = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;

      if (!auditId) {
        ok(res, { success: false, error: "auditId required" });
        return;
      }

      const audit = await this.repo.findById(tenantId, auditId);
      if (!audit) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }
      const dev = audit.developer;
      if (!dev) {
        ok(res, { success: false, error: "Developer not found" });
        return;
      }

      const { searchCompetitors } = await import("./lib/apis/dataForSeo");

      function extractKeywordsFromSerp(serpData: unknown): string[] {
        const data = serpData as {
          organic?: Array<{ title?: string; snippet?: string }>;
        } | null;
        if (!data?.organic?.length) return [];
        const stopWords = new Set([
          "the",
          "and",
          "for",
          "are",
          "with",
          "this",
          "that",
          "from",
          "your",
          "our",
          "best",
          "top",
          "real",
          "estate",
          "property",
          "properties",
          "india",
          "in",
          "of",
          "a",
          "an",
          "to",
          "is",
          "it",
          "be",
          "as",
          "at",
          "by",
          "we",
          "you",
          "or",
          "on",
          "do",
          "if",
          "so",
          "up",
          "how",
        ]);
        const freq: Record<string, number> = {};
        for (const item of data.organic.slice(0, 8)) {
          const text =
            `${item.title ?? ""} ${item.snippet ?? ""}`.toLowerCase();
          const words = text.match(/\b[a-z]{4,}\b/g) ?? [];
          for (const w of words) {
            if (!stopWords.has(w)) freq[w] = (freq[w] ?? 0) + 1;
          }
        }
        return Object.entries(freq)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([w]) => w);
      }

      const serpKeywords = extractKeywordsFromSerp(
        (audit.collectedData as Record<string, unknown> | null)?.[
          "seoKeywords"
        ],
      );

      const competitors = await searchCompetitors(
        dev.brandName,
        dev.productType ?? "",
        dev.city ?? "",
        serpKeywords,
      );

      const competitorData = {
        competitors,
        keywords: serpKeywords,
        collectedAt: new Date().toISOString(),
      };

      await this.repo.updateCollectedData(tenantId, auditId, {
        competitorData,
      });

      ok(res, { success: true, competitors, keywords: serpKeywords });
    } catch (error) {
      const msg =
        error instanceof Error ? error.message : "Competitor search failed";
      console.error("[competitors] error:", msg);
      ok(res, { success: false, error: msg });
    }
  };

  collectPromoterLinkedIn = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;

      if (!auditId) {
        ok(res, { success: false, error: "auditId required" });
        return;
      }

      const audit = await this.repo.findById(tenantId, auditId);
      if (!audit) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }
      const dev = audit.developer;

      if (!dev?.promoterLinkedIn) {
        ok(res, { success: false, error: "No promoter LinkedIn URL provided" });
        return;
      }

      const { getPromoterLinkedInInsights } =
        await import("./lib/apis/socialInsights");

      const data = await getPromoterLinkedInInsights(
        dev.promoterLinkedIn,
        dev.promoterName ?? null,
      );

      await this.repo.updateCollectedData(tenantId, auditId, {
        promoterLinkedInData: data,
      });

      ok(res, { success: true, data });
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Failed to collect promoter LinkedIn data";
      console.error("Promoter LinkedIn collection error:", msg);
      ok(res, { success: false, error: msg });
    }
  };

  // ── Analyze endpoints ──────────────────────────────────────────────────────

  analyzeD1 = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;
      const { audit, dev, manualOverrides } = await getAuditWithDev(
        tenantId,
        auditId,
        this.repo,
      );
      if (!audit || !dev) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }

      const { analyzeWithGroq } = await import("./lib/groq");
      const { buildD1Prompt } = await import("./prompts/d1-brand-overview");

      const auditDate = todayDate();
      const cd = audit.collectedData as Record<string, unknown> | null;

      const missing: string[] = [];
      if (!dev.pdlData) missing.push("company enrichment data (PDL)");
      if (!cd?.["seoKeywords"]) missing.push("SEO/SERP data");

      if (missing.length === 2) {
        const score = await saveSkippedDimension(
          auditId,
          tenantId,
          this.repo,
          "D1",
        );
        ok(res, { success: true, score, dimension: "D1", skipped: true });
        return;
      }

      const prompt =
        buildD1Prompt(
          dev,
          dev.pdlData ?? null,
          cd?.["seoKeywords"] ?? null,
          auditDate,
        ) +
        buildDataAvailabilityNote(missing) +
        buildManualOverrideNote(manualOverrides["D1"]);

      const raw = await analyzeWithGroq(prompt);
      const findings = JSON.parse(raw) as Parameters<
        typeof saveDimensionResult
      >[4];
      const score = await saveDimensionResult(
        auditId,
        tenantId,
        this.repo,
        "D1",
        findings,
      );
      ok(res, { success: true, score, dimension: "D1", findings });
    } catch (error) {
      console.error(
        "D1 analysis error:",
        error instanceof Error ? error.message : error,
      );
      ok(res, {
        success: false,
        score: null,
        dimension: "D1",
        error: "Analysis failed. Please try again.",
      });
    }
  };

  analyzeD2 = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;
      const { audit, dev, manualOverrides } = await getAuditWithDev(
        tenantId,
        auditId,
        this.repo,
      );
      if (!audit || !dev) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }

      const { analyzeWithGroq } = await import("./lib/groq");
      const { buildD2Prompt } = await import("./prompts/d2-website-seo");

      const auditDate = todayDate();
      const cd = audit.collectedData as Record<string, unknown> | null;

      const websiteContent = cd?.["websiteContent"] ?? null;
      const websiteInsights =
        (websiteContent as Record<string, unknown> | null)?.["insights"] ??
        null;

      const missing: string[] = [];
      if (!websiteInsights) missing.push("website crawl data");
      if (!cd?.["seoKeywords"]) missing.push("SEO/SERP data");
      if (!cd?.["screenshotUrl"]) missing.push("website screenshot");

      if (missing.length === 3) {
        const score = await saveSkippedDimension(
          auditId,
          tenantId,
          this.repo,
          "D2",
        );
        ok(res, { success: true, score, dimension: "D2", skipped: true });
        return;
      }

      const devFields = {
        brandName: dev.brandName,
        positioning: dev.positioning ?? null,
        city: dev.city ?? null,
        targetSegments: dev.targetSegments ?? [],
        websiteUrl: dev.websiteUrl ?? null,
      };

      const prompt =
        buildD2Prompt(
          devFields,
          websiteInsights,
          cd?.["seoKeywords"] ?? null,
          cd?.["backlinks"] ?? null,
          cd?.["technicalSeo"] ?? null,
          (cd?.["screenshotUrl"] as string | null) ?? null,
          auditDate,
        ) +
        buildDataAvailabilityNote(missing) +
        buildManualOverrideNote(manualOverrides["D2"]);

      const raw = await analyzeWithGroq(prompt);
      const findings = JSON.parse(raw) as Parameters<
        typeof saveDimensionResult
      >[4];
      const score = await saveDimensionResult(
        auditId,
        tenantId,
        this.repo,
        "D2",
        findings,
      );
      ok(res, { success: true, score, dimension: "D2", findings });
    } catch (error) {
      console.error(
        "D2 analysis error:",
        error instanceof Error ? error.message : error,
      );
      ok(res, {
        success: false,
        score: null,
        dimension: "D2",
        error: "Analysis failed. Please try again.",
      });
    }
  };

  analyzeD3 = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;
      const { audit, dev, manualOverrides } = await getAuditWithDev(
        tenantId,
        auditId,
        this.repo,
      );
      if (!audit || !dev) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }

      const { analyzeWithGroq } = await import("./lib/groq");
      const { buildD3Prompt } = await import("./prompts/d3-social-media");

      const auditDate = todayDate();
      const cd = audit.collectedData as Record<string, unknown> | null;

      const instagramData = cd?.["instagramData"] ?? null;
      const facebookData = cd?.["facebookData"] ?? null;
      const linkedinData = cd?.["linkedinData"] ?? null;
      const youtubeData = cd?.["youtubeData"] ?? null;

      const missing: string[] = [];
      if (!instagramData) missing.push("Instagram data");
      if (!facebookData) missing.push("Facebook data");
      if (!linkedinData) missing.push("LinkedIn data");
      if (!youtubeData) missing.push("YouTube data");

      const devWithSocials = {
        brandName: dev.brandName,
        positioning: dev.positioning ?? null,
        city: dev.city ?? null,
        targetSegments: dev.targetSegments ?? [],
        websiteUrl: dev.websiteUrl ?? null,
        instagramHandle: dev.instagramHandle ?? null,
        facebookUrl: dev.facebookUrl ?? null,
        linkedinUrl: dev.linkedinUrl ?? null,
        youtubeUrl: dev.youtubeUrl ?? null,
      };

      const prompt =
        buildD3Prompt(
          devWithSocials,
          instagramData,
          facebookData,
          linkedinData,
          youtubeData,
          auditDate,
        ) +
        buildDataAvailabilityNote(missing) +
        buildManualOverrideNote(manualOverrides["D3"]);

      const raw = await analyzeWithGroq(prompt);
      const findings = JSON.parse(raw) as Parameters<
        typeof saveDimensionResult
      >[4];
      const score = await saveDimensionResult(
        auditId,
        tenantId,
        this.repo,
        "D3",
        findings,
      );
      ok(res, { success: true, score, dimension: "D3", findings });
    } catch (error) {
      console.error(
        "D3 analysis error:",
        error instanceof Error ? error.message : error,
      );
      ok(res, {
        success: false,
        score: null,
        dimension: "D3",
        error: "Analysis failed. Please try again.",
      });
    }
  };

  analyzeD4 = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;
      const { audit, dev, manualOverrides } = await getAuditWithDev(
        tenantId,
        auditId,
        this.repo,
      );
      if (!audit || !dev) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }

      const { analyzeWithGroq } = await import("./lib/groq");
      const { buildD4Prompt } = await import("./prompts/d4-paid-media");

      const auditDate = todayDate();
      const cd = audit.collectedData as Record<string, unknown> | null;

      const missing: string[] = [];
      if (!cd?.["metaAdsData"])
        missing.push("Meta Ads Library data (ad creatives, spend, activity)");

      const prompt =
        buildD4Prompt(dev, cd?.["metaAdsData"] ?? null, auditDate) +
        buildDataAvailabilityNote(missing) +
        buildManualOverrideNote(manualOverrides["D4"]);

      const raw = await analyzeWithGroq(prompt);
      const findings = JSON.parse(raw) as Parameters<
        typeof saveDimensionResult
      >[4];
      const score = await saveDimensionResult(
        auditId,
        tenantId,
        this.repo,
        "D4",
        findings,
      );
      ok(res, { success: true, score, dimension: "D4", findings });
    } catch (error) {
      console.error(
        "D4 analysis error:",
        error instanceof Error ? error.message : error,
      );
      ok(res, {
        success: false,
        score: null,
        dimension: "D4",
        error: "Analysis failed. Please try again.",
      });
    }
  };

  analyzeD5 = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;
      const { audit, dev, manualOverrides } = await getAuditWithDev(
        tenantId,
        auditId,
        this.repo,
      );
      if (!audit || !dev) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }

      const { analyzeWithVision } = await import("./lib/anthropic");
      const { analyzeWithGroq } = await import("./lib/groq");
      const { buildD5Prompt } = await import("./prompts/d5-visual-identity");

      const cd = audit.collectedData as Record<string, unknown> | null;
      const logoUrl = (cd?.["logoUrl"] as string | null) ?? null;
      const screenshotUrl = (cd?.["screenshotUrl"] as string | null) ?? null;
      const auditDate = todayDate();

      const missing: string[] = [];
      if (!logoUrl) missing.push("brand logo image");
      if (!screenshotUrl) missing.push("website screenshot");

      const prompt =
        buildD5Prompt(dev, logoUrl, screenshotUrl, auditDate) +
        buildDataAvailabilityNote(missing) +
        buildManualOverrideNote(manualOverrides["D5"]);

      async function runD5Analysis(p: string): Promise<string> {
        if (screenshotUrl) {
          try {
            return await analyzeWithVision(p, screenshotUrl, "image/png");
          } catch (err) {
            console.warn(
              "[D5] screenshot vision failed, trying logo fallback:",
              err instanceof Error ? err.message : err,
            );
          }
        }
        if (logoUrl) {
          try {
            return await analyzeWithVision(p, logoUrl, "image/png");
          } catch (err) {
            console.warn(
              "[D5] logo vision failed, falling back to text-only:",
              err instanceof Error ? err.message : err,
            );
          }
        }
        return analyzeWithGroq(p);
      }

      const raw = await runD5Analysis(prompt);
      const findings = JSON.parse(raw) as Parameters<
        typeof saveDimensionResult
      >[4];
      const score = await saveDimensionResult(
        auditId,
        tenantId,
        this.repo,
        "D5",
        findings,
      );
      ok(res, { success: true, score, dimension: "D5", findings });
    } catch (error) {
      console.error(
        "D5 analysis error:",
        error instanceof Error ? error.message : error,
      );
      ok(res, {
        success: false,
        score: null,
        dimension: "D5",
        error: "Analysis failed. Please try again.",
      });
    }
  };

  analyzeD6 = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;
      const { audit, dev, manualOverrides } = await getAuditWithDev(
        tenantId,
        auditId,
        this.repo,
      );
      if (!audit || !dev) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }

      const { analyzeWithGroq } = await import("./lib/groq");
      const { buildD6Prompt } = await import("./prompts/d6-collateral");

      const auditDate = todayDate();
      const cd = audit.collectedData as Record<string, unknown> | null;

      const missing: string[] = [];
      if (!cd?.["websiteContent"]) missing.push("website content / crawl data");

      const prompt =
        buildD6Prompt(dev, cd?.["websiteContent"] ?? null, auditDate) +
        buildDataAvailabilityNote(missing) +
        buildManualOverrideNote(manualOverrides["D6"]);

      const raw = await analyzeWithGroq(prompt);
      const findings = JSON.parse(raw) as Parameters<
        typeof saveDimensionResult
      >[4];
      const score = await saveDimensionResult(
        auditId,
        tenantId,
        this.repo,
        "D6",
        findings,
      );
      ok(res, { success: true, score, dimension: "D6", findings });
    } catch (error) {
      console.error(
        "D6 analysis error:",
        error instanceof Error ? error.message : error,
      );
      ok(res, {
        success: false,
        score: null,
        dimension: "D6",
        error: "Analysis failed. Please try again.",
      });
    }
  };

  analyzeD7 = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;
      const { audit, dev, manualOverrides } = await getAuditWithDev(
        tenantId,
        auditId,
        this.repo,
      );
      if (!audit || !dev) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }

      const { analyzeWithGroq } = await import("./lib/groq");
      const { buildD7Prompt } = await import("./prompts/d7-reputation");

      const auditDate = todayDate();
      const cd = audit.collectedData as Record<string, unknown> | null;

      const missing: string[] = [];
      const reviews = cd?.["googleReviews"] as {
        overallRating?: number | null;
        fetchedCount?: number;
      } | null;
      const hasAnyReviewData =
        reviews &&
        (reviews.overallRating != null || (reviews.fetchedCount ?? 0) > 0);
      if (!cd?.["gmbData"] && !hasAnyReviewData)
        missing.push(
          "Google My Business / review data (rating, address, reviews)",
        );
      if (!hasAnyReviewData) missing.push("Google Reviews data");

      const prompt =
        buildD7Prompt(
          dev,
          cd?.["gmbData"] ?? null,
          cd?.["googleReviews"] ?? null,
          auditDate,
        ) +
        buildDataAvailabilityNote(missing) +
        buildManualOverrideNote(manualOverrides["D7"]);

      const raw = await analyzeWithGroq(prompt);
      const findings = JSON.parse(raw) as Parameters<
        typeof saveDimensionResult
      >[4];
      const score = await saveDimensionResult(
        auditId,
        tenantId,
        this.repo,
        "D7",
        findings,
      );
      ok(res, { success: true, score, dimension: "D7", findings });
    } catch (error) {
      console.error(
        "D7 analysis error:",
        error instanceof Error ? error.message : error,
      );
      ok(res, {
        success: false,
        score: null,
        dimension: "D7",
        error: "Analysis failed. Please try again.",
      });
    }
  };

  analyzeD8 = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;
      const { audit, dev, manualOverrides } = await getAuditWithDev(
        tenantId,
        auditId,
        this.repo,
      );
      if (!audit || !dev) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }

      const { analyzeWithGroq } = await import("./lib/groq");
      const { buildD8Prompt } = await import("./prompts/d8-technology");

      const auditDate = todayDate();
      const cd = audit.collectedData as Record<string, unknown> | null;

      const missing: string[] = [];
      if (!cd?.["websiteContent"])
        missing.push(
          "website crawl data (D8-5, D8-6, D8-9, D8-10, D8-11 cannot be verified)",
        );
      if (!cd?.["technicalSeo"])
        missing.push("technical SEO data (D8-4 tech stack cannot be verified)");

      const devForPrompt = {
        brandName: dev.brandName,
        positioning: dev.positioning ?? null,
        city: dev.city ?? null,
        targetSegments: dev.targetSegments ?? [],
        websiteUrl: dev.websiteUrl ?? null,
        crmTool: dev.crmTool ?? null,
        adPlatforms: dev.adPlatforms ?? [],
        whatsappNumber: dev.whatsappNumber ?? null,
      };

      const prompt =
        buildD8Prompt(
          devForPrompt,
          cd?.["websiteContent"] ?? null,
          cd?.["technicalSeo"] ?? null,
          auditDate,
        ) +
        buildDataAvailabilityNote(missing) +
        buildManualOverrideNote(manualOverrides["D8"]);

      const raw = await analyzeWithGroq(prompt);
      const findings = JSON.parse(raw) as Parameters<
        typeof saveDimensionResult
      >[4];
      const score = await saveDimensionResult(
        auditId,
        tenantId,
        this.repo,
        "D8",
        findings,
      );
      ok(res, { success: true, score, dimension: "D8", findings });
    } catch (error) {
      console.error(
        "D8 analysis error:",
        error instanceof Error ? error.message : error,
      );
      ok(res, {
        success: false,
        score: null,
        dimension: "D8",
        error: "Analysis failed. Please try again.",
      });
    }
  };

  analyzeD9 = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;
      const { audit, dev, manualOverrides } = await getAuditWithDev(
        tenantId,
        auditId,
        this.repo,
      );
      if (!audit || !dev) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }

      const { analyzeWithGroq } = await import("./lib/groq");
      const { buildD9Prompt } = await import("./prompts/d9-competitors");

      const auditDate = todayDate();
      const cd = audit.collectedData as Record<string, unknown> | null;

      const missing: string[] = [];
      if (!cd?.["gmbData"]) missing.push("Google My Business data");
      if (!cd?.["instagramData"]) missing.push("Instagram data");
      if (!cd?.["seoKeywords"]) missing.push("SEO/SERP data");

      const prompt =
        buildD9Prompt(
          dev,
          cd?.["gmbData"] ?? null,
          cd?.["instagramData"] ?? null,
          cd?.["seoKeywords"] ?? null,
          auditDate,
        ) +
        buildDataAvailabilityNote(missing) +
        buildManualOverrideNote(manualOverrides["D9"]);

      const raw = await analyzeWithGroq(prompt);
      const findings = JSON.parse(raw) as Parameters<
        typeof saveDimensionResult
      >[4];
      const score = await saveDimensionResult(
        auditId,
        tenantId,
        this.repo,
        "D9",
        findings,
      );
      ok(res, { success: true, score, dimension: "D9", findings });
    } catch (error) {
      console.error(
        "D9 analysis error:",
        error instanceof Error ? error.message : error,
      );
      ok(res, {
        success: false,
        score: null,
        dimension: "D9",
        error: "Analysis failed. Please try again.",
      });
    }
  };

  analyzeD10 = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;
      const { audit, dev, manualOverrides } = await getAuditWithDev(
        tenantId,
        auditId,
        this.repo,
      );
      if (!audit || !dev) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }

      const { analyzeWithGroq } = await import("./lib/groq");
      const { buildD10Prompt } = await import("./prompts/d10-promoter");

      const auditDate = todayDate();
      const cd = audit.collectedData as Record<string, unknown> | null;
      const promoterLinkedInData = cd?.["promoterLinkedInData"] ?? null;

      const missing: string[] = [];
      if (!cd?.["websiteContent"]) missing.push("website content / crawl data");
      if (!dev.pdlData) missing.push("company enrichment data");
      if (!promoterLinkedInData)
        missing.push("promoter personal LinkedIn profile data");

      const prompt =
        buildD10Prompt(
          dev,
          cd?.["websiteContent"] ?? null,
          dev.pdlData ?? null,
          promoterLinkedInData,
          auditDate,
        ) +
        buildDataAvailabilityNote(missing) +
        buildManualOverrideNote(manualOverrides["D10"]);

      const raw = await analyzeWithGroq(prompt);
      const findings = JSON.parse(raw) as Parameters<
        typeof saveDimensionResult
      >[4];
      const score = await saveDimensionResult(
        auditId,
        tenantId,
        this.repo,
        "D10",
        findings,
      );
      ok(res, { success: true, score, dimension: "D10", findings });
    } catch (error) {
      console.error(
        "D10 analysis error:",
        error instanceof Error ? error.message : error,
      );
      ok(res, {
        success: false,
        score: null,
        dimension: "D10",
        error: "Analysis failed. Please try again.",
      });
    }
  };

  analyzeCollateral = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId } = req.body as { auditId: string };
      const tenantId = req.tenant.id;

      if (!auditId) {
        ok(res, { success: false, error: "auditId required" });
        return;
      }

      const audit = await this.repo.findById(tenantId, auditId);
      if (!audit) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }
      const dev = audit.developer;
      if (!dev) {
        ok(res, { success: false, error: "Developer not found" });
        return;
      }

      const { analyzeWithGroq } = await import("./lib/groq");

      const rawDocs = dev.collateralDocs as Array<{
        name: string;
        textContent: string;
      }> | null;
      const docs = (rawDocs ?? []).filter((d) => d.textContent?.trim());

      if (docs.length === 0) {
        await this.repo.updateCollectedData(tenantId, auditId, {
          collateralAnalysis: null,
        });
        ok(res, {
          success: true,
          skipped: true,
          reason: "No collateral documents uploaded",
        });
        return;
      }

      function buildCollateralPrompt(
        brandName: string,
        collateralDocs: Array<{ name: string; textContent: string }>,
      ): string {
        const docSections = collateralDocs
          .map(
            (d, i) => `=== Document ${i + 1}: ${d.name} ===\n${d.textContent}`,
          )
          .join("\n\n");
        return `You are a brand analyst. Analyze ONLY the collateral documents provided below — do not use any external knowledge or assumptions about the brand.

Brand: ${brandName}

${docSections}

Return a JSON object (no markdown, no explanation) matching this exact shape:
{
  "summary": "2-3 sentence overview of what the collateral communicates",
  "keyFindings": ["finding 1", "finding 2", "finding 3"],
  "marketPositioning": "How the brand positions itself based on these documents",
  "score": <integer 0-100 reflecting collateral quality and completeness>,
  "gaps": ["gap or missing element 1", "gap 2"],
  "recommendations": ["recommendation 1", "recommendation 2"]
}

Rules:
- Base everything strictly on the document content above.
- If a field cannot be determined from the documents, use a brief "Not determinable from provided documents" value.
- score: 100 = exceptional collateral, 0 = no useful content found.
- Output ONLY the JSON object, nothing else.`;
      }

      const prompt = buildCollateralPrompt(dev.brandName, docs);
      const raw = await analyzeWithGroq(prompt);

      let result: Record<string, unknown>;
      try {
        result = JSON.parse(raw) as Record<string, unknown>;
      } catch {
        ok(res, {
          success: false,
          error: "Analysis failed. Please try again.",
        });
        return;
      }

      const analysis = {
        summary: String(result["summary"] ?? ""),
        keyFindings: Array.isArray(result["keyFindings"])
          ? result["keyFindings"].map(String)
          : [],
        marketPositioning: String(result["marketPositioning"] ?? ""),
        score:
          typeof result["score"] === "number"
            ? Math.min(100, Math.max(0, Math.round(result["score"])))
            : 0,
        gaps: Array.isArray(result["gaps"]) ? result["gaps"].map(String) : [],
        recommendations: Array.isArray(result["recommendations"])
          ? result["recommendations"].map(String)
          : [],
        docsAnalyzed: docs.length,
        analyzedAt: new Date().toISOString(),
      };

      await this.repo.updateCollectedData(tenantId, auditId, {
        collateralAnalysis: analysis,
      });

      ok(res, { success: true, analysis });
    } catch (error) {
      console.error(
        "[analyze/collateral]",
        error instanceof Error ? error.message : error,
      );
      ok(res, { success: false, error: "Analysis failed. Please try again." });
    }
  };

  analyzeLogo = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { auditId, logoUrl: providedLogoUrl } = req.body as {
        auditId: string;
        logoUrl?: string;
      };
      const tenantId = req.tenant.id;
      const { audit, dev } = await getAuditWithDev(
        tenantId,
        auditId,
        this.repo,
      );
      if (!audit || !dev) {
        ok(res, { success: false, error: "Audit not found" });
        return;
      }

      const { analyzeWithVision, analyzeWithClaude } =
        await import("./lib/anthropic");
      const { buildLogoVisionPrompt } = await import("./prompts/logo-vision");

      const cd = audit.collectedData as Record<string, unknown> | null;
      const imageUrl =
        providedLogoUrl ?? (cd?.["logoUrl"] as string | undefined);

      if (!imageUrl) {
        ok(res, {
          success: false,
          error: "No logo URL available — logo analysis skipped",
        });
        return;
      }

      const prompt = buildLogoVisionPrompt(
        dev.brandName,
        dev.positioning ?? "",
      );

      let raw: string;
      try {
        raw = await analyzeWithVision(prompt, imageUrl);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.warn("[logo] vision failed, falling back to text-only:", msg);
        raw = await analyzeWithClaude(prompt);
      }

      const analysis = JSON.parse(raw) as unknown;
      ok(res, { success: true, analysis, logoUrl: imageUrl });
    } catch (error) {
      console.error(
        "Logo analysis error:",
        error instanceof Error ? error.message : error,
      );
      ok(res, {
        success: false,
        analysis: null,
        error: "Analysis failed. Please try again.",
      });
    }
  };

  // ── Brand lookup (pre-fill form) ───────────────────────────────────────────
  // GET /brand-audit/lookup?brandName=X&city=Y
  // All data sources run in parallel: Serper → PDL → social scraper →
  // tech detector → social metrics → YouTube channel.

  lookupBrand = async (req: Request, res: Response): Promise<void> => {
    const { brandName, city } = req.query as {
      brandName?: string;
      city?: string;
    };

    if (!brandName?.trim()) {
      res.status(400).json({
        ok: false,
        error: { code: "VALIDATION_ERROR", message: "brandName required" },
      });
      return;
    }

    try {
      const { getSerpResults, getSocialProfileUrl } =
        await import("./lib/apis/dataForSeo");
      const { enrichCompany, extractCompanyData } =
        await import("./lib/apis/pdl");
      const { scrapeSocialLinks } = await import("./lib/apis/socialScraper");
      const { detectTechAndAssets } = await import("./lib/apis/techDetector");
      const {
        getInstagramInsights,
        getLinkedInInsights,
        getFacebookInsights,
        getYouTubeInsights,
      } = await import("./lib/apis/socialInsights");

      // ── Phase 1: Find domain via Serper ────────────────────────────────
      const query = city
        ? `${brandName} ${city} real estate developer`
        : `${brandName} real estate developer India`;
      const serpData = await getSerpResults(query);

      let domain: string | null = null;
      let websiteUrl: string | null = null;

      if (serpData?.organic && Array.isArray(serpData.organic)) {
        const results = serpData.organic as Array<{
          link: string;
          title: string;
        }>;
        const skipPatterns =
          /99acres|housing\.com|magicbricks|justdial|sulekha|indiamart|wikipedia|linkedin\.com\/(jobs|company\/search)/i;
        const nameParts = brandName
          .toLowerCase()
          .split(/\s+/)
          .filter((s) => s.length > 2);

        for (const r of results) {
          if (!r.link) continue;
          try {
            const urlObj = new URL(r.link);
            const host = urlObj.hostname.replace("www.", "");
            if (skipPatterns.test(host)) continue;
            const isMatch = nameParts.some(
              (part) =>
                host.toLowerCase().includes(part) ||
                r.title.toLowerCase().includes(part),
            );
            if (isMatch) {
              websiteUrl = `https://${host}`;
              domain = host;
              break;
            }
          } catch {
            continue;
          }
        }
        if (!domain) {
          for (const r of results.slice(0, 5)) {
            if (!r.link) continue;
            try {
              const urlObj = new URL(r.link);
              const host = urlObj.hostname.replace("www.", "");
              if (!skipPatterns.test(host)) {
                websiteUrl = `https://${host}`;
                domain = host;
                break;
              }
            } catch {
              continue;
            }
          }
        }
      }

      // ── Phase 2: All enrichment sources in parallel ─────────────────────
      const [pdlResult, scrapedLinksResult, techResult, socialProfilesResult] =
        await Promise.allSettled([
          domain ? enrichCompany(domain) : Promise.resolve(null),
          websiteUrl ? scrapeSocialLinks(websiteUrl) : Promise.resolve(null),
          websiteUrl ? detectTechAndAssets(websiteUrl) : Promise.resolve(null),
          // Find social profile URLs via Serper in parallel
          Promise.allSettled([
            getSocialProfileUrl(brandName, "instagram.com"),
            getSocialProfileUrl(brandName, "linkedin.com/company"),
            getSocialProfileUrl(brandName, "facebook.com"),
            getSocialProfileUrl(brandName, "youtube.com"),
            getSocialProfileUrl(brandName, "twitter.com"),
          ]),
        ]);

      // ── Merge identity data ────────────────────────────────────────────
      let industry: string | null = null;
      let description: string | null = null;
      let founded: number | null = null;

      const socialUrls: Record<string, string | null> = {
        instagram: null,
        linkedin: null,
        facebook: null,
        youtube: null,
        twitter: null,
      };

      if (pdlResult.status === "fulfilled" && pdlResult.value) {
        const extracted = extractCompanyData(pdlResult.value);
        industry = extracted.industry ?? null;
        description = extracted.summary ?? null;
        founded = extracted.founded ?? null;
        socialUrls.linkedin = extracted.socialLinks.linkedin ?? null;
        socialUrls.instagram = extracted.socialLinks.instagram ?? null;
        socialUrls.facebook = extracted.socialLinks.facebook ?? null;
        socialUrls.youtube = extracted.socialLinks.youtube ?? null;
        socialUrls.twitter = extracted.socialLinks.twitter ?? null;
      }

      if (
        scrapedLinksResult.status === "fulfilled" &&
        scrapedLinksResult.value
      ) {
        const s = scrapedLinksResult.value;
        socialUrls.linkedin ??= s.linkedin;
        socialUrls.instagram ??= s.instagram;
        socialUrls.facebook ??= s.facebook;
        socialUrls.youtube ??= s.youtube;
        socialUrls.twitter ??= s.twitter;
      }

      if (socialProfilesResult.status === "fulfilled") {
        const [ig, li, fb, yt, tw] = socialProfilesResult.value;
        if (ig.status === "fulfilled" && ig.value)
          socialUrls.instagram ??= ig.value;
        if (li.status === "fulfilled" && li.value)
          socialUrls.linkedin ??= li.value;
        if (fb.status === "fulfilled" && fb.value)
          socialUrls.facebook ??= fb.value;
        if (yt.status === "fulfilled" && yt.value)
          socialUrls.youtube ??= yt.value;
        if (tw.status === "fulfilled" && tw.value)
          socialUrls.twitter ??= tw.value;
      }

      // ── Phase 3: Social metrics + YouTube (need URLs from phase 2) ──────
      const [igMetrics, liMetrics, fbMetrics, ytMetrics] =
        await Promise.allSettled([
          socialUrls.instagram
            ? getInstagramInsights(
                socialUrls.instagram
                  .replace(/.*instagram\.com\//, "")
                  .replace(/\/$/, ""),
                brandName,
              )
            : Promise.resolve(null),
          socialUrls.linkedin
            ? getLinkedInInsights(socialUrls.linkedin, brandName)
            : Promise.resolve(null),
          socialUrls.facebook
            ? getFacebookInsights(socialUrls.facebook, brandName)
            : Promise.resolve(null),
          socialUrls.youtube
            ? getYouTubeInsights(socialUrls.youtube, brandName)
            : Promise.resolve(null),
        ]);

      // ── Assemble response ──────────────────────────────────────────────
      const tech = techResult.status === "fulfilled" ? techResult.value : null;
      const logo = domain ? `https://logo.clearbit.com/${domain}` : null;

      ok(res, {
        brandName,
        domain,
        websiteUrl,
        logo,
        industry,
        description,
        founded,

        social: {
          instagram: {
            url: socialUrls.instagram,
            handle:
              igMetrics.status === "fulfilled"
                ? (igMetrics.value?.handle ?? null)
                : null,
            followers:
              igMetrics.status === "fulfilled"
                ? (igMetrics.value?.followers ?? null)
                : null,
            totalPosts:
              igMetrics.status === "fulfilled"
                ? (igMetrics.value?.totalPosts ?? null)
                : null,
          },
          linkedin: {
            url: socialUrls.linkedin,
            followers:
              liMetrics.status === "fulfilled"
                ? (liMetrics.value?.followers ?? null)
                : null,
            employees:
              liMetrics.status === "fulfilled"
                ? (liMetrics.value?.employees ?? null)
                : null,
          },
          facebook: {
            url: socialUrls.facebook,
            likes:
              fbMetrics.status === "fulfilled"
                ? (fbMetrics.value?.likes ?? null)
                : null,
            followers:
              fbMetrics.status === "fulfilled"
                ? (fbMetrics.value?.followers ?? null)
                : null,
          },
          youtube: {
            url: socialUrls.youtube,
            subscribers:
              ytMetrics.status === "fulfilled"
                ? (ytMetrics.value?.subscribers ?? null)
                : null,
            totalVideos:
              ytMetrics.status === "fulfilled"
                ? (ytMetrics.value?.totalVideos ?? null)
                : null,
            videos:
              ytMetrics.status === "fulfilled"
                ? (ytMetrics.value?.recentVideos ?? []).slice(0, 3)
                : [],
          },
          twitter: { url: socialUrls.twitter },
        },

        techStack: tech?.techStack ?? null,
        fonts: tech ? tech.fonts.families : [],
        colors: tech ? tech.colors.palette : [],
        developerCredit: tech?.developerCredit ?? null,

        seo: {
          metaTitle: tech?.seo.metaTitle ?? null,
          metaDescription: tech?.seo.metaDescription ?? null,
          ogImage: tech?.seo.ogImage ?? null,
          hasSSL: websiteUrl?.startsWith("https://") ?? false,
          hasRobotsTxt: tech?.seo.hasRobotsTxt ?? null,
          hasSitemap: tech?.seo.hasSitemap ?? null,
          canonical: tech?.seo.canonical ?? null,
        },
      });
    } catch (error) {
      console.error(
        "Brand lookup error:",
        error instanceof Error ? error.message : error,
      );
      res.status(500).json({
        ok: false,
        error: { code: "LOOKUP_FAILED", message: "Brand lookup failed" },
      });
    }
  };
}
