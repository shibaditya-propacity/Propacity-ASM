export interface AppErrorParams {
  code: string;
  message: string;
  publicMessage: string;
  statusCode: number;
  details?: Record<string, unknown>;
}

export class AppError extends Error {
  readonly code: string;
  readonly publicMessage: string;
  readonly statusCode: number;
  readonly details?: Record<string, unknown>;

  constructor(params: AppErrorParams) {
    super(params.message);
    this.code = params.code;
    this.publicMessage = params.publicMessage;
    this.statusCode = params.statusCode;
    this.details = params.details;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string, id: string) {
    super({
      code: "NOT_FOUND",
      message: `${resource} ${id} not found`,
      publicMessage: `${resource} not found`,
      statusCode: 404,
    });
  }
}

export class ForbiddenError extends AppError {
  constructor(permission: string) {
    super({
      code: "FORBIDDEN",
      message: `Missing permission: ${permission}`,
      publicMessage: "You don't have permission to perform this action.",
      statusCode: 403,
    });
  }
}

export class ValidationError extends AppError {
  constructor(err: unknown) {
    super({
      code: "VALIDATION_ERROR",
      message: `Validation failed: ${String(err)}`,
      publicMessage: "The request data is invalid.",
      statusCode: 400,
      details: err instanceof Object ? (err as Record<string, unknown>) : undefined,
    });
  }
}

export class ConflictError extends AppError {
  constructor(msg: string) {
    super({
      code: "CONFLICT",
      message: msg,
      publicMessage: msg,
      statusCode: 409,
    });
  }
}
