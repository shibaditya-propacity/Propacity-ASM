export type AuditStatus =
  | "DRAFT"
  | "COLLECTING"
  | "ANALYZING"
  | "COMPLETE"
  | "FAILED";
export type ItemStatus = "PASS" | "FAIL" | "PARTIAL" | "NA";
export type Priority = "critical" | "high" | "medium" | "low";
export type ScoreTier =
  | "needs-work"
  | "developing"
  | "established"
  | "strong"
  | "best-in-class";

export interface FullAuditItem {
  itemCode: string;
  status: ItemStatus | null;
  aiNote: string | null;
  dataSource: string | null;
  sourceUrl: string | null;
}

export interface FullAuditFindings {
  score?: number;
  summary?: string;
  criticalFlags?: string[];
  strengths?: string[];
  quickWins?: string[];
  items?: Array<{
    code: string;
    status: string;
    finding: string;
    recommendation: string;
    priority: Priority;
    dataSource: string;
    sourceUrl?: string | null;
  }>;
}

export interface FullAuditDimension {
  code: string;
  score: number | null;
  status: string;
  aiSummary: string | null;
  aiFindings: FullAuditFindings | null;
  aiFlags: string[] | null;
  items: FullAuditItem[];
  analyzedAt: string | null;
}

export interface FullAuditDeveloper {
  id: string;
  brandName: string;
  legalName: string | null;
  domain: string | null;
  city: string | null;
  websiteUrl: string | null;
  instagramHandle: string | null;
  facebookUrl: string | null;
  linkedinUrl: string | null;
  promoterName: string | null;
  microMarkets: string[];
  targetSegments: string[];
  competitors: string[];
}

export interface FullAudit {
  id: string;
  tenantId: string;
  developerId: string;
  prospectId: string | null;
  auditorName: string | null;
  auditDate: string;
  objective: string | null;
  knownRedFlags: string | null;
  overallScore: number | null;
  status: AuditStatus;
  collectedData: unknown;
  dataSourceStatus: { collected: string[]; failed: string[] } | null;
  dimensions: FullAuditDimension[];
  assets: unknown;
  manualOverrides: unknown;
  createdAt: string;
  updatedAt: string;
  developer: FullAuditDeveloper | null;
}

export interface DeveloperInput {
  brandName: string;
  legalName?: string;
  domain?: string;
  city?: string;
  yearEstablished?: number;
  positioning?: string;
  productType?: string;
  microMarkets: string[];
  targetSegments: string[];
  promoterName?: string;
  promoterLinkedIn?: string;
  websiteUrl?: string;
  instagramHandle?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  gmbPlaceId?: string;
  competitors: string[];
  metaAdLibraryName?: string;
  adSpendRange?: string;
  adPlatforms: string[];
  reraNumbers: string[];
}

export interface CreateFullAuditInput {
  developer: DeveloperInput;
  auditorName?: string;
  objective?: string;
  knownRedFlags?: string;
  prospectId?: string;
}

export interface ProgressEvent {
  stage: "collecting" | "analyzing" | "complete" | "error";
  source?: string;
  dimension?: string;
  status?: "in_progress" | "done" | "failed";
  overallScore?: number | null;
  score?: number | null;
  message?: string;
}

export function getScoreTier(score: number): ScoreTier {
  if (score <= 40) return "needs-work";
  if (score <= 60) return "developing";
  if (score <= 75) return "established";
  if (score <= 90) return "strong";
  return "best-in-class";
}

export function getScoreTierLabel(tier: ScoreTier): string {
  const labels: Record<ScoreTier, string> = {
    "needs-work": "Needs Work",
    developing: "Developing",
    established: "Established",
    strong: "Strong",
    "best-in-class": "Best-in-Class",
  };
  return labels[tier];
}

export function getScoreTierClass(tier: ScoreTier): string {
  const classes: Record<ScoreTier, string> = {
    "needs-work": "text-red-600",
    developing: "text-amber-600",
    established: "text-yellow-600",
    strong: "text-green-600",
    "best-in-class": "text-emerald-700",
  };
  return classes[tier];
}
