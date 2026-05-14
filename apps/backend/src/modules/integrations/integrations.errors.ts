import { AppError } from "@/core/errors/app-error";

export class ClientNotFoundError extends AppError {
  constructor(id: string) {
    super({
      code: "INTEGRATIONS_CLIENT_NOT_FOUND",
      message: `Client ${id} not found`,
      publicMessage: "Client not found",
      statusCode: 404,
    });
  }
}

export class ProviderNotFoundError extends AppError {
  constructor(id: string) {
    super({
      code: "INTEGRATIONS_PROVIDER_NOT_FOUND",
      message: `Provider ${id} not found`,
      publicMessage: "Provider not found",
      statusCode: 404,
    });
  }
}

export class IntegrationNotFoundError extends AppError {
  constructor(id: string) {
    super({
      code: "INTEGRATIONS_INTEGRATION_NOT_FOUND",
      message: `Integration ${id} not found`,
      publicMessage: "Integration not found",
      statusCode: 404,
    });
  }
}

export class IntegrationAlreadyConnectedError extends AppError {
  constructor(providerName: string) {
    super({
      code: "INTEGRATIONS_ALREADY_CONNECTED",
      message: `Provider ${providerName} is already connected`,
      publicMessage:
        "This integration is already connected. Disconnect it first to reconnect.",
      statusCode: 409,
    });
  }
}

export class IntegrationNotConnectedError extends AppError {
  constructor() {
    super({
      code: "INTEGRATIONS_NOT_CONNECTED",
      message: "Integration is not connected",
      publicMessage: "This integration is not connected. Connect it first.",
      statusCode: 422,
    });
  }
}

export class InvalidAuthTypeError extends AppError {
  constructor(providerName: string, authType: string) {
    super({
      code: "INTEGRATIONS_INVALID_AUTH_TYPE",
      message: `Provider ${providerName} uses ${authType} auth — wrong connect payload`,
      publicMessage: `This provider uses ${authType === "OAUTH2" ? "OAuth" : "API key"} authentication.`,
      statusCode: 400,
    });
  }
}

export class OAuthUnsupportedProviderError extends AppError {
  constructor(providerName: string) {
    super({
      code: "INTEGRATIONS_OAUTH_UNSUPPORTED_PROVIDER",
      message: `No OAuth handler registered for provider: ${providerName}`,
      publicMessage: "OAuth is not supported for this provider yet.",
      statusCode: 400,
    });
  }
}

export class OAuthTokenRefreshError extends AppError {
  constructor(detail: string) {
    super({
      code: "INTEGRATIONS_OAUTH_REFRESH_FAILED",
      message: `OAuth token refresh failed: ${detail}`,
      publicMessage:
        "Your session has expired. Please reconnect this integration.",
      statusCode: 422,
    });
  }
}

export class OAuthCallbackError extends AppError {
  constructor(detail: string) {
    super({
      code: "INTEGRATIONS_OAUTH_CALLBACK_ERROR",
      message: `OAuth callback error: ${detail}`,
      publicMessage: "Authorization failed. Please try connecting again.",
      statusCode: 400,
    });
  }
}

export class SyncFailedError extends AppError {
  constructor(detail: string) {
    super({
      code: "INTEGRATIONS_SYNC_FAILED",
      message: `Sync failed: ${detail}`,
      // Pass the detail through as the public message — sync errors are
      // user-actionable (wrong site URL, insufficient permissions, etc.)
      publicMessage: detail,
      statusCode: 422,
    });
  }
}
