-- CreateTable
CREATE TABLE "int_providers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "authType" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "moduleRelevance" TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "int_providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "int_integrations" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NOT_CONNECTED',
    "accountLabel" TEXT,
    "credentials" JSONB NOT NULL DEFAULT '{}',
    "lastSyncAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "int_integrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "int_sync_logs" (
    "id" TEXT NOT NULL,
    "integrationId" TEXT NOT NULL,
    "triggeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "recordsSynced" INTEGER,
    "errorMessage" TEXT,

    CONSTRAINT "int_sync_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "int_platform_integrations" (
    "id" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NOT_CONNECTED',
    "accountLabel" TEXT,
    "credentials" JSONB NOT NULL DEFAULT '{}',
    "lastSyncAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "int_platform_integrations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "int_providers_name_key" ON "int_providers"("name");

-- CreateIndex
CREATE INDEX "int_providers_category_idx" ON "int_providers"("category");

-- CreateIndex
CREATE INDEX "int_integrations_tenantId_createdAt_idx" ON "int_integrations"("tenantId", "createdAt");

-- CreateIndex
CREATE INDEX "int_integrations_tenantId_status_idx" ON "int_integrations"("tenantId", "status");

-- CreateIndex
CREATE INDEX "int_integrations_providerId_idx" ON "int_integrations"("providerId");

-- CreateIndex
CREATE UNIQUE INDEX "int_integrations_tenantId_providerId_key" ON "int_integrations"("tenantId", "providerId");

-- CreateIndex
CREATE INDEX "int_sync_logs_integrationId_triggeredAt_idx" ON "int_sync_logs"("integrationId", "triggeredAt");

-- CreateIndex
CREATE UNIQUE INDEX "int_platform_integrations_providerId_key" ON "int_platform_integrations"("providerId");

-- AddForeignKey
ALTER TABLE "int_integrations" ADD CONSTRAINT "int_integrations_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "int_integrations" ADD CONSTRAINT "int_integrations_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "int_providers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "int_sync_logs" ADD CONSTRAINT "int_sync_logs_integrationId_fkey" FOREIGN KEY ("integrationId") REFERENCES "int_integrations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "int_platform_integrations" ADD CONSTRAINT "int_platform_integrations_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "int_providers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
