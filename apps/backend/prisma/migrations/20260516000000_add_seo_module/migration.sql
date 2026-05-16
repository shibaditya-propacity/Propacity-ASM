-- CreateTable: seo_snapshots
CREATE TABLE "seo_snapshots" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "syncDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "impressions" INTEGER NOT NULL DEFAULT 0,
    "ctr" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "avgPosition" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "indexedPages" INTEGER NOT NULL DEFAULT 0,
    "crawlErrors" INTEGER NOT NULL DEFAULT 0,
    "mobileIssues" INTEGER NOT NULL DEFAULT 0,
    "topPages" JSONB NOT NULL DEFAULT '[]',
    "topQueries" JSONB NOT NULL DEFAULT '[]',
    "organicSessions" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "seo_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable: seo_keywords
CREATE TABLE "seo_keywords" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "currentRank" INTEGER,
    "previousRank" INTEGER,
    "searchVolume" INTEGER,
    "weeklyHistory" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "seo_keywords_pkey" PRIMARY KEY ("id")
);

-- CreateTable: seo_actions
CREATE TABLE "seo_actions" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "impactLevel" TEXT NOT NULL DEFAULT 'Medium',
    "effortLevel" TEXT NOT NULL DEFAULT 'Medium',
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "assignedTo" TEXT,
    "dueDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "seo_actions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex on seo_snapshots
CREATE INDEX "seo_snapshots_tenantId_clientId_syncDate_idx" ON "seo_snapshots"("tenantId", "clientId", "syncDate");
CREATE INDEX "seo_snapshots_tenantId_clientId_idx" ON "seo_snapshots"("tenantId", "clientId");

-- CreateIndex on seo_keywords
CREATE UNIQUE INDEX "seo_keywords_tenantId_clientId_keyword_key" ON "seo_keywords"("tenantId", "clientId", "keyword");
CREATE INDEX "seo_keywords_tenantId_clientId_createdAt_idx" ON "seo_keywords"("tenantId", "clientId", "createdAt");

-- CreateIndex on seo_actions
CREATE INDEX "seo_actions_tenantId_clientId_status_idx" ON "seo_actions"("tenantId", "clientId", "status");
CREATE INDEX "seo_actions_tenantId_clientId_createdAt_idx" ON "seo_actions"("tenantId", "clientId", "createdAt");

-- AddForeignKey: seo_snapshots → Tenant
ALTER TABLE "seo_snapshots" ADD CONSTRAINT "seo_snapshots_tenantId_fkey"
  FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey: seo_snapshots → int_clients
ALTER TABLE "seo_snapshots" ADD CONSTRAINT "seo_snapshots_clientId_fkey"
  FOREIGN KEY ("clientId") REFERENCES "int_clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey: seo_keywords → Tenant
ALTER TABLE "seo_keywords" ADD CONSTRAINT "seo_keywords_tenantId_fkey"
  FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey: seo_keywords → int_clients
ALTER TABLE "seo_keywords" ADD CONSTRAINT "seo_keywords_clientId_fkey"
  FOREIGN KEY ("clientId") REFERENCES "int_clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey: seo_actions → Tenant
ALTER TABLE "seo_actions" ADD CONSTRAINT "seo_actions_tenantId_fkey"
  FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey: seo_actions → int_clients
ALTER TABLE "seo_actions" ADD CONSTRAINT "seo_actions_clientId_fkey"
  FOREIGN KEY ("clientId") REFERENCES "int_clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
