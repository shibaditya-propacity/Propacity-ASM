import { AppError } from "@/core/errors/app-error";

export class SocialClientNotFoundError extends AppError {
  constructor(clientId: string) {
    super({
      code: "SOCIAL_CLIENT_NOT_FOUND",
      message: `Client ${clientId} not found`,
      publicMessage: "Client not found.",
      statusCode: 404,
    });
  }
}

export class SocialProfileNotFoundError extends AppError {
  constructor(platform: string) {
    super({
      code: "SOCIAL_PROFILE_NOT_FOUND",
      message: `Social profile for platform ${platform} not found`,
      publicMessage: "Social profile not found.",
      statusCode: 404,
    });
  }
}

export class SocialProfileAlreadyExistsError extends AppError {
  constructor(platform: string) {
    super({
      code: "SOCIAL_PROFILE_ALREADY_EXISTS",
      message: `A social profile for ${platform} already exists for this client`,
      publicMessage: `A ${platform} profile is already configured for this client.`,
      statusCode: 409,
    });
  }
}

export class SocialSyncFailedError extends AppError {
  constructor(platform: string, detail: string) {
    super({
      code: "SOCIAL_SYNC_FAILED",
      message: `Social sync failed for ${platform}: ${detail}`,
      publicMessage: `Failed to sync ${platform} data. Please try again.`,
      statusCode: 500,
    });
  }
}

export class SocialProfileNotConnectedError extends AppError {
  constructor(platform: string) {
    super({
      code: "SOCIAL_PROFILE_NOT_CONNECTED",
      message: `${platform} profile is not connected`,
      publicMessage: `${platform} is not connected. Please connect it first.`,
      statusCode: 422,
    });
  }
}

export class SocialHandleFetchFailedError extends AppError {
  constructor(detail: string) {
    super({
      code: "SOCIAL_HANDLE_FETCH_FAILED",
      message: `Handle discovery failed: ${detail}`,
      publicMessage:
        "Could not automatically find social handles. Please enter them manually.",
      statusCode: 422,
    });
  }
}
