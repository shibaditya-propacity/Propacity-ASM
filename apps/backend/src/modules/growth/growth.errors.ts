import { AppError, NotFoundError } from "@/core/errors/app-error";

export class WorkshopNotFoundError extends NotFoundError {
  constructor(id: string) {
    super("Workshop", id);
    this.code = "GROWTH_WORKSHOP_NOT_FOUND";
  }

  get code(): string {
    return "GROWTH_WORKSHOP_NOT_FOUND";
  }
  set code(_v: string) { /* readonly */ }
}

export class ProspectNotFoundError extends NotFoundError {
  constructor(id: string) {
    super("Prospect", id);
  }
  override get code() { return "GROWTH_PROSPECT_NOT_FOUND"; }
}

export class BrandAuditNotFoundError extends NotFoundError {
  constructor(id: string) {
    super("BrandAudit", id);
  }
  override get code() { return "GROWTH_BRAND_AUDIT_NOT_FOUND"; }
}

export class InvalidStageTransitionError extends AppError {
  constructor(from: string, to: string) {
    super({
      code: "GROWTH_INVALID_STAGE_TRANSITION",
      message: `Invalid stage transition from "${from}" to "${to}"`,
      publicMessage: `Cannot move prospect from "${from}" to "${to}".`,
      statusCode: 422,
    });
  }
}
