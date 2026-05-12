-- Dev migration: clear existing integration rows (they had no clientId).
-- Safe because int_integrations had no real data at this point.
TRUNCATE TABLE "int_sync_logs", "int_integrations" CASCADE;

-- DropIndex (old unique: tenantId + providerId)
DROP INDEX IF EXISTS "int_integrations_tenantId_providerId_key";

-- DropIndex (old status index)
DROP INDEX IF EXISTS "int_integrations_tenantId_status_idx";

-- CreateTable: int_clients
CREATE TABLE "int_clients" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "industry" TEXT,
    "avatarUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "int_clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex on int_clients
CREATE INDEX "int_clients_tenantId_createdAt_idx" ON "int_clients"("tenantId", "createdAt");

-- AddForeignKey on int_clients → Tenant
ALTER TABLE "int_clients" ADD CONSTRAINT "int_clients_tenantId_fkey"
  FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AlterTable: add clientId to int_integrations (table is now empty so NOT NULL is safe)
ALTER TABLE "int_integrations" ADD COLUMN "clientId" TEXT NOT NULL DEFAULT '';

-- Remove the temporary default
ALTER TABLE "int_integrations" ALTER COLUMN "clientId" DROP DEFAULT;

-- AddForeignKey on int_integrations → int_clients
ALTER TABLE "int_integrations" ADD CONSTRAINT "int_integrations_clientId_fkey"
  FOREIGN KEY ("clientId") REFERENCES "int_clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateIndex: new unique constraint (clientId + providerId)
CREATE UNIQUE INDEX "int_integrations_clientId_providerId_key" ON "int_integrations"("clientId", "providerId");

-- CreateIndex: clientId-based indexes
CREATE INDEX "int_integrations_clientId_createdAt_idx" ON "int_integrations"("clientId", "createdAt");
CREATE INDEX "int_integrations_clientId_status_idx" ON "int_integrations"("clientId", "status");
