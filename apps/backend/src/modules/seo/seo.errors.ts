import { AppError } from "@/core/errors/app-error";

export class SeoClientNotFoundError extends AppError {
  constructor(clientId: string) {
    super({
      code: "SEO_CLIENT_NOT_FOUND",
      message: `Client ${clientId} not found`,
      publicMessage: "Client not found.",
      statusCode: 404,
    });
  }
}

export class SeoIntegrationNotConnectedError extends AppError {
  constructor(provider: string) {
    super({
      code: "SEO_INTEGRATION_NOT_CONNECTED",
      message: `${provider} integration is not connected for this client`,
      publicMessage: `${provider} is not connected. Please connect it in Integrations first.`,
      statusCode: 422,
    });
  }
}

export class SeoSyncFailedError extends AppError {
  constructor(detail: string) {
    super({
      code: "SEO_SYNC_FAILED",
      message: `SEO sync failed: ${detail}`,
      publicMessage: "Failed to sync SEO data. Please try again.",
      statusCode: 500,
    });
  }
}

export class SeoKeywordAlreadyExistsError extends AppError {
  constructor(keyword: string) {
    super({
      code: "SEO_KEYWORD_ALREADY_EXISTS",
      message: `Keyword "${keyword}" already tracked for this client`,
      publicMessage: "This keyword is already being tracked.",
      statusCode: 409,
    });
  }
}

export class SeoKeywordNotFoundError extends AppError {
  constructor(keywordId: string) {
    super({
      code: "SEO_KEYWORD_NOT_FOUND",
      message: `SEO keyword ${keywordId} not found`,
      publicMessage: "Keyword not found.",
      statusCode: 404,
    });
  }
}

export class SeoActionNotFoundError extends AppError {
  constructor(actionId: string) {
    super({
      code: "SEO_ACTION_NOT_FOUND",
      message: `SEO action ${actionId} not found`,
      publicMessage: "Action not found.",
      statusCode: 404,
    });
  }
}
