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
