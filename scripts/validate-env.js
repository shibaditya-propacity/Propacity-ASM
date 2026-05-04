#!/usr/bin/env node
/**
 * validate-env.js
 *
 * Checks that every required environment variable is present before the
 * application starts. Run this as part of your server startup or via:
 *
 *   node scripts/validate-env.js
 *
 * Exit code 0 = all variables present.
 * Exit code 1 = one or more missing — prints a clear error list and stops.
 *
 * Add new required variables to the REQUIRED_VARS array below.
 * Add optional-but-recommended variables to RECOMMENDED_VARS.
 */

"use strict";

// ── Required variables ────────────────────────────────────────────────────────
// The app WILL NOT START if any of these are missing or empty.
const REQUIRED_VARS = [
  {
    name: "DATABASE_URL",
    description: "PostgreSQL connection string for Prisma",
    example: "postgresql://user:password@localhost:5432/propacity_asm",
    // Minimal validation: must look like a postgres URL
    validate: (v) =>
      v.startsWith("postgresql://") || v.startsWith("postgres://"),
    validationHint: 'must start with "postgresql://" or "postgres://"',
  },
  {
    name: "JWT_SECRET",
    description: "HS256 signing key for JSON Web Tokens",
    example:
      "run: node -e \"console.log(require('crypto').randomBytes(48).toString('hex'))\"",
    // Enforce minimum length so weak secrets don't sneak into production
    validate: (v) => v.length >= 32,
    validationHint: "must be at least 32 characters long",
  },
];

// ── Recommended variables ─────────────────────────────────────────────────────
// Missing values produce a WARNING, not a hard failure.
// Use these for variables that have safe defaults in development.
const RECOMMENDED_VARS = [
  {
    name: "PORT",
    description: "HTTP port for the Express server",
    defaultValue: "3000",
  },
  {
    name: "NODE_ENV",
    description: "Runtime environment (development | production | test)",
    defaultValue: "development",
  },
  {
    name: "LOG_LEVEL",
    description:
      "pino log level (trace | debug | info | warn | error | silent)",
    defaultValue: "info",
  },
  {
    name: "CORS_ORIGIN",
    description: "Allowed CORS origin for the browser client",
    defaultValue: "http://localhost:5173 (dev default — set in production!)",
  },
];

// ── Validation logic ──────────────────────────────────────────────────────────

const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";

const errors = [];
const warnings = [];

for (const spec of REQUIRED_VARS) {
  const value = process.env[spec.name];

  if (!value || value.trim() === "") {
    errors.push(
      `  ${RED}✗${RESET} ${BOLD}${spec.name}${RESET} — ${spec.description}\n    Example: ${spec.example}`,
    );
    continue;
  }

  if (spec.validate && !spec.validate(value)) {
    errors.push(
      `  ${RED}✗${RESET} ${BOLD}${spec.name}${RESET} — invalid value (${spec.validationHint})`,
    );
  }
}

for (const spec of RECOMMENDED_VARS) {
  if (!process.env[spec.name] || process.env[spec.name].trim() === "") {
    warnings.push(
      `  ${YELLOW}⚠${RESET} ${BOLD}${spec.name}${RESET} — ${spec.description} (default: ${spec.defaultValue})`,
    );
  }
}

// ── Output ────────────────────────────────────────────────────────────────────

console.log(`\n${BOLD}Propacity ASM — Environment Variable Check${RESET}`);
console.log("─".repeat(50));

if (warnings.length > 0) {
  console.log(`\n${YELLOW}Warnings (using defaults):${RESET}`);
  for (const w of warnings) console.log(w);
}

if (errors.length === 0) {
  console.log(
    `\n${GREEN}✓ All required environment variables are present.${RESET}\n`,
  );
  process.exit(0);
} else {
  console.log(
    `\n${RED}${BOLD}Missing or invalid required environment variables:${RESET}`,
  );
  for (const e of errors) console.log(e);
  console.log(
    `\n${RED}${BOLD}Startup aborted.${RESET} Copy .env.example → .env and fill in the values above.\n`,
  );
  process.exit(1);
}
