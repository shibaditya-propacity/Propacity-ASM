-- Add prospectId to audits so a full brand-audit run can be linked to a growth prospect.
-- This is a nullable expansion — existing rows remain valid with prospectId = NULL.

-- AlterTable
ALTER TABLE "audits" ADD COLUMN "prospectId" TEXT;

-- AddForeignKey (SET NULL on prospect delete keeps audit history intact)
ALTER TABLE "audits" ADD CONSTRAINT "audits_prospectId_fkey"
  FOREIGN KEY ("prospectId") REFERENCES "growth_prospects"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateIndex
CREATE INDEX "audits_tenantId_prospectId_idx" ON "audits"("tenantId", "prospectId");
