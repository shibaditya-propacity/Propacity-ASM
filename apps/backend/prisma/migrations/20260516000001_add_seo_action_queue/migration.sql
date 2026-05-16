-- Add category column to seo_actions
ALTER TABLE "seo_actions" ADD COLUMN "category" TEXT NOT NULL DEFAULT 'TECHNICAL';
