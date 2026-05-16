-- CreateEnum
CREATE TYPE "SocialPlatform" AS ENUM ('INSTAGRAM', 'FACEBOOK', 'LINKEDIN', 'YOUTUBE');

-- AlterTable
ALTER TABLE "seo_actions" ALTER COLUMN "impactLevel" SET DEFAULT 'MEDIUM',
ALTER COLUMN "effortLevel" SET DEFAULT 'MEDIUM',
ALTER COLUMN "status" SET DEFAULT 'PENDING',
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "seo_keywords" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "seo_snapshots" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "social_profiles" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "platform" "SocialPlatform" NOT NULL,
    "handle" TEXT NOT NULL,
    "profileUrl" TEXT,
    "autoFetched" BOOLEAN NOT NULL DEFAULT false,
    "isConnected" BOOLEAN NOT NULL DEFAULT false,
    "accessToken" TEXT,
    "tokenExpiry" TIMESTAMP(3),
    "lastSyncAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "social_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_snapshots" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "socialProfileId" TEXT NOT NULL,
    "snapshotDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "followers" INTEGER NOT NULL DEFAULT 0,
    "following" INTEGER,
    "posts" INTEGER,
    "avgLikes" DOUBLE PRECISION,
    "avgComments" DOUBLE PRECISION,
    "avgShares" DOUBLE PRECISION,
    "engagementRate" DOUBLE PRECISION,
    "reach" INTEGER,
    "impressions" INTEGER,
    "profileViews" INTEGER,
    "topPosts" JSONB NOT NULL DEFAULT '[]',
    "audienceDemog" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "social_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "social_profiles_tenantId_clientId_idx" ON "social_profiles"("tenantId", "clientId");

-- CreateIndex
CREATE INDEX "social_profiles_tenantId_platform_idx" ON "social_profiles"("tenantId", "platform");

-- CreateIndex
CREATE UNIQUE INDEX "social_profiles_clientId_platform_key" ON "social_profiles"("clientId", "platform");

-- CreateIndex
CREATE INDEX "social_snapshots_socialProfileId_snapshotDate_idx" ON "social_snapshots"("socialProfileId", "snapshotDate");

-- CreateIndex
CREATE INDEX "social_snapshots_tenantId_snapshotDate_idx" ON "social_snapshots"("tenantId", "snapshotDate");

-- AddForeignKey
ALTER TABLE "social_profiles" ADD CONSTRAINT "social_profiles_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_profiles" ADD CONSTRAINT "social_profiles_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "int_clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_snapshots" ADD CONSTRAINT "social_snapshots_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_snapshots" ADD CONSTRAINT "social_snapshots_socialProfileId_fkey" FOREIGN KEY ("socialProfileId") REFERENCES "social_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
