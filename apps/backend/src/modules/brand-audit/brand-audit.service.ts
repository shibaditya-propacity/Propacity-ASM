import { BrandAuditRepository } from "./brand-audit.repository";
import type { AuditRow } from "./brand-audit.repository";
import { AuditNotFoundError } from "./brand-audit.errors";
import type { CreateAuditInput, ListAuditsQuery } from "./brand-audit.dto";

export type BackfillResult = { migrated: number };

export class BrandAuditService {
  constructor(private readonly repo: BrandAuditRepository) {}

  /**
   * Check for an existing COMPLETE audit for the same brand (within tenant).
   * Return it if found (with an `existing: true` flag), otherwise create a new one.
   */
  async createAudit(
    tenantId: string,
    input: CreateAuditInput,
  ): Promise<AuditRow & { existing: boolean }> {
    const existingAudit = await this.repo.findCompleteAuditForBrand(
      tenantId,
      input.developer.brandName,
      input.developer.domain,
    );

    if (existingAudit) {
      return { ...existingAudit, existing: true };
    }

    const audit = await this.repo.create(tenantId, input.developer, {
      auditorName: input.auditorName,
      objective: input.objective,
      knownRedFlags: input.knownRedFlags,
      prospectId: input.prospectId,
    });

    return { ...audit, existing: false };
  }

  async getAudit(tenantId: string, id: string): Promise<AuditRow> {
    const audit = await this.repo.findById(tenantId, id);
    if (!audit) throw new AuditNotFoundError(id);
    return audit;
  }

  async listAudits(
    tenantId: string,
    query: ListAuditsQuery,
  ): Promise<{ data: AuditRow[]; total: number; page: number; limit: number }> {
    const { data, total } = await this.repo.list(tenantId, query);
    return { data, total, page: query.page, limit: query.limit };
  }

  async getAuditByProspect(
    tenantId: string,
    prospectId: string,
  ): Promise<AuditRow | null> {
    return this.repo.findByProspectId(tenantId, prospectId);
  }

  async linkAuditToProspect(
    tenantId: string,
    auditId: string,
    prospectId: string,
  ): Promise<void> {
    const audit = await this.repo.findById(tenantId, auditId);
    if (!audit) throw new AuditNotFoundError(auditId);
    await this.repo.linkToProspect(tenantId, auditId, prospectId);
  }

  async backfillProspectLinks(tenantId: string): Promise<BackfillResult> {
    const migrated = await this.repo.backfillProspectLinks(tenantId);
    return { migrated };
  }

  async updateManualOverrides(
    tenantId: string,
    id: string,
    dimensionCode: string,
    data: Record<string, unknown>,
  ): Promise<void> {
    const audit = await this.repo.findById(tenantId, id);
    if (!audit) throw new AuditNotFoundError(id);

    const existing = (audit.manualOverrides as Record<string, unknown>) ?? {};
    const dimOverrides =
      (existing[dimensionCode] as Record<string, unknown>) ?? {};
    const updated = {
      ...existing,
      [dimensionCode]: { ...dimOverrides, ...data },
    };

    await this.repo.updateManualOverrides(tenantId, id, updated);
  }
}
