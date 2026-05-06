-- CreateTable
CREATE TABLE "audit_developers" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "legalName" TEXT,
    "domain" TEXT,
    "city" TEXT,
    "yearEstablished" INTEGER,
    "positioning" TEXT,
    "productType" TEXT,
    "microMarkets" TEXT[],
    "targetSegments" TEXT[],
    "promoterName" TEXT,
    "promoterLinkedIn" TEXT,
    "websiteUrl" TEXT,
    "instagramHandle" TEXT,
    "facebookUrl" TEXT,
    "linkedinUrl" TEXT,
    "youtubeUrl" TEXT,
    "whatsappNumber" TEXT,
    "gmbPlaceId" TEXT,
    "acres99Url" TEXT,
    "housingUrl" TEXT,
    "magicbricksUrl" TEXT,
    "reraNumbers" TEXT[],
    "reraState" TEXT,
    "adSpendRange" TEXT,
    "adPlatforms" TEXT[],
    "crmTool" TEXT,
    "competitors" TEXT[],
    "metaAdLibraryName" TEXT,
    "pdlData" JSONB,
    "collateralDocs" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "audit_developers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audits" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "developerId" TEXT NOT NULL,
    "auditorName" TEXT,
    "auditDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "objective" TEXT,
    "knownRedFlags" TEXT,
    "overallScore" DOUBLE PRECISION,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "collectedData" JSONB,
    "dataSourceStatus" JSONB,
    "dimensions" JSONB NOT NULL DEFAULT '[]',
    "assets" JSONB NOT NULL DEFAULT '[]',
    "manualOverrides" JSONB,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "audits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "audit_developers_tenantId_idx" ON "audit_developers"("tenantId");

-- CreateIndex
CREATE INDEX "audit_developers_tenantId_brandName_idx" ON "audit_developers"("tenantId", "brandName");

-- CreateIndex
CREATE INDEX "audits_tenantId_createdAt_idx" ON "audits"("tenantId", "createdAt");

-- CreateIndex
CREATE INDEX "audits_tenantId_status_idx" ON "audits"("tenantId", "status");

-- CreateIndex
CREATE INDEX "audits_tenantId_developerId_idx" ON "audits"("tenantId", "developerId");

-- AddForeignKey
ALTER TABLE "audit_developers" ADD CONSTRAINT "audit_developers_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audits" ADD CONSTRAINT "audits_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audits" ADD CONSTRAINT "audits_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "audit_developers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
