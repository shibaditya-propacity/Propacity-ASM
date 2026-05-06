import { AppError } from "@/core/errors/app-error";

export class AuditNotFoundError extends AppError {
  constructor(id: string) {
    super({
      code: "AUDIT_NOT_FOUND",
      message: `Audit ${id} not found`,
      publicMessage: "Audit not found",
      statusCode: 404,
    });
  }
}

export class AuditDeveloperNotFoundError extends AppError {
  constructor(id: string) {
    super({
      code: "AUDIT_DEVELOPER_NOT_FOUND",
      message: `AuditDeveloper ${id} not found`,
      publicMessage: "Developer record not found",
      statusCode: 404,
    });
  }
}
