-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'agency_member',
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "resourceType" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "growth_workshops" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "format" TEXT NOT NULL,
    "city" TEXT,
    "venue" TEXT,
    "date" TEXT NOT NULL,
    "time" TEXT,
    "capacity" INTEGER NOT NULL,
    "ticketPrice" INTEGER NOT NULL DEFAULT 0,
    "registered" INTEGER NOT NULL DEFAULT 0,
    "attended" INTEGER NOT NULL DEFAULT 0,
    "adSpend" INTEGER NOT NULL DEFAULT 0,
    "cpRegistration" INTEGER NOT NULL DEFAULT 0,
    "speaker" TEXT,
    "registrationLink" TEXT,
    "tags" TEXT,
    "notes" TEXT,
    "audienceSegment" TEXT,
    "campaignBudget" INTEGER NOT NULL DEFAULT 0,
    "expectedCPR" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'Upcoming',
    "deletedAt" TIMESTAMP(3),
    "deletedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "growth_workshops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "growth_prospects" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "workshopId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT,
    "company" TEXT NOT NULL,
    "city" TEXT,
    "scale" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "source" TEXT,
    "classification" TEXT,
    "stage" TEXT NOT NULL DEFAULT 'Registered',
    "fitScore" INTEGER,
    "estimatedDealSize" INTEGER,
    "attended" BOOLEAN NOT NULL DEFAULT false,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "oneOnOneAt" TEXT,
    "notes" TEXT,
    "lastActivity" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerPm" TEXT,
    "hasAudit" BOOLEAN NOT NULL DEFAULT false,
    "hasProposal" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),
    "deletedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "growth_prospects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "growth_prospect_activities" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "prospectId" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "growth_prospect_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "growth_brand_audits" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "prospectId" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'Brand Positioning',
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "generatedAt" TIMESTAMP(3),
    "generatedBy" TEXT,
    "overallScore" INTEGER,
    "dimensions" JSONB NOT NULL DEFAULT '[]',
    "benchmarks" JSONB NOT NULL DEFAULT '[]',
    "topThreeOpportunities" JSONB NOT NULL DEFAULT '[]',
    "estimatedAnnualUpliftLeads" INTEGER,
    "estimatedAnnualUpliftRevenue" BIGINT,
    "competitorsAnalysed" JSONB NOT NULL DEFAULT '[]',
    "dataSources" JSONB NOT NULL DEFAULT '[]',
    "notes" TEXT,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "growth_brand_audits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_slug_key" ON "Tenant"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_tenantId_idx" ON "users"("tenantId");

-- CreateIndex
CREATE INDEX "audit_logs_tenantId_createdAt_idx" ON "audit_logs"("tenantId", "createdAt");

-- CreateIndex
CREATE INDEX "audit_logs_tenantId_resourceType_resourceId_idx" ON "audit_logs"("tenantId", "resourceType", "resourceId");

-- CreateIndex
CREATE INDEX "growth_workshops_tenantId_createdAt_idx" ON "growth_workshops"("tenantId", "createdAt");

-- CreateIndex
CREATE INDEX "growth_workshops_tenantId_status_idx" ON "growth_workshops"("tenantId", "status");

-- CreateIndex
CREATE INDEX "growth_prospects_tenantId_createdAt_idx" ON "growth_prospects"("tenantId", "createdAt");

-- CreateIndex
CREATE INDEX "growth_prospects_tenantId_stage_idx" ON "growth_prospects"("tenantId", "stage");

-- CreateIndex
CREATE INDEX "growth_prospects_tenantId_workshopId_idx" ON "growth_prospects"("tenantId", "workshopId");

-- CreateIndex
CREATE INDEX "growth_prospect_activities_tenantId_prospectId_createdAt_idx" ON "growth_prospect_activities"("tenantId", "prospectId", "createdAt");

-- CreateIndex
CREATE INDEX "growth_brand_audits_tenantId_createdAt_idx" ON "growth_brand_audits"("tenantId", "createdAt");

-- CreateIndex
CREATE INDEX "growth_brand_audits_tenantId_prospectId_idx" ON "growth_brand_audits"("tenantId", "prospectId");

-- CreateIndex
CREATE INDEX "growth_brand_audits_tenantId_status_idx" ON "growth_brand_audits"("tenantId", "status");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "growth_workshops" ADD CONSTRAINT "growth_workshops_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "growth_prospects" ADD CONSTRAINT "growth_prospects_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "growth_prospects" ADD CONSTRAINT "growth_prospects_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "growth_workshops"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "growth_prospect_activities" ADD CONSTRAINT "growth_prospect_activities_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "growth_prospect_activities" ADD CONSTRAINT "growth_prospect_activities_prospectId_fkey" FOREIGN KEY ("prospectId") REFERENCES "growth_prospects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "growth_brand_audits" ADD CONSTRAINT "growth_brand_audits_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "growth_brand_audits" ADD CONSTRAINT "growth_brand_audits_prospectId_fkey" FOREIGN KEY ("prospectId") REFERENCES "growth_prospects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
