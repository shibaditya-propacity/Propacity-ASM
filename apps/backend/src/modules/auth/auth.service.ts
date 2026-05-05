import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { AuthRepository } from "./auth.repository";
import { AppError } from "@/core/errors/app-error";
import type { SignUpInput, SignInInput } from "./auth.dto";

const JWT_SECRET =
  process.env["JWT_SECRET"] ?? "dev-secret-key-not-for-production";
const JWT_EXPIRES = "7d";

function signToken(payload: {
  sub: string;
  tenantId: string;
  role: string;
  email: string;
  name: string;
}): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  } as jwt.SignOptions);
}

export class AuthService {
  constructor(private readonly repo: AuthRepository) {}

  async signUp(input: SignUpInput) {
    const existing = await this.repo.findUserByEmail(input.email.toLowerCase());
    if (existing) {
      throw new AppError({
        code: "AUTH_EMAIL_TAKEN",
        message: `Email already registered: ${input.email}`,
        publicMessage: "An account with this email already exists.",
        statusCode: 409,
      });
    }

    const tenant = await this.repo.findOrCreateDefaultTenant();
    const passwordHash = await argon2.hash(input.password);

    const user = await this.repo.createUser({
      tenantId: tenant.id,
      name: input.name,
      email: input.email.toLowerCase(),
      role: input.role,
      passwordHash,
    });

    const token = signToken({
      sub: user.id,
      tenantId: tenant.id,
      role: user.role,
      email: user.email,
      name: user.name,
    });
    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  async signIn(input: SignInInput) {
    const user = await this.repo.findUserByEmail(input.email.toLowerCase());

    // Use the same error for "not found" and "wrong password" to avoid enumeration
    const invalidCreds = new AppError({
      code: "AUTH_INVALID_CREDENTIALS",
      message: "Invalid credentials",
      publicMessage: "Incorrect email or password.",
      statusCode: 401,
    });

    if (!user) throw invalidCreds;

    const valid = await argon2.verify(user.passwordHash, input.password);
    if (!valid) throw invalidCreds;

    const token = signToken({
      sub: user.id,
      tenantId: user.tenantId,
      role: user.role,
      email: user.email,
      name: user.name,
    });
    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}
