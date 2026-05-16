// ── Integration status ────────────────────────────────────────────────────────

export interface SeoIntegrationStatus {
  gscConnected: boolean;
  ga4Connected: boolean;
  lastSyncAt: string | null;
}

// ── Snapshot ──────────────────────────────────────────────────────────────────

export interface TopPage {
  page?: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface TopQuery {
  query?: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface MonthlySession {
  month: string; // "YYYY-MM"
  sessions: number;
}

export interface SeoSnapshot {
  id: string;
  tenantId: string;
  clientId: string;
  syncDate: string;
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number;
  indexedPages: number;
  crawlErrors: number;
  mobileIssues: number;
  topPages: TopPage[];
  topQueries: TopQuery[];
  organicSessions: MonthlySession[];
  createdAt: string;
}

// ── Keyword ───────────────────────────────────────────────────────────────────

export interface SeoKeyword {
  id: string;
  tenantId: string;
  clientId: string;
  keyword: string;
  currentRank: number | null;
  previousRank: number | null;
  searchVolume: number | null;
  weeklyHistory: Array<number | null>;
  createdAt: string;
  updatedAt: string;
}

export interface AddKeywordInput {
  keyword: string;
  searchVolume?: number;
}

// ── Top mover ─────────────────────────────────────────────────────────────────

export interface TopMover {
  keyword: string;
  currentRank: number | null;
  previousRank: number | null;
  searchVolume: number | null;
  rankChange: number | null; // positive = improved rank
}

// ── Action ────────────────────────────────────────────────────────────────────

export type ImpactLevel = "HIGH" | "MEDIUM" | "LOW";
export type EffortLevel = "QUICK" | "MEDIUM" | "HEAVY";
export type ActionStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED";
export type ActionCategory = "CONTENT" | "TECHNICAL" | "SCHEMA" | "BACKLINKS";

export interface SeoAction {
  id: string;
  tenantId: string;
  clientId: string;
  title: string;
  description: string | null;
  category: ActionCategory;
  impactLevel: ImpactLevel;
  effortLevel: EffortLevel;
  status: ActionStatus;
  assignedTo: string | null;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ActionCounts {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
}

export interface ActionsFilters {
  status?: ActionStatus;
  impact?: ImpactLevel;
  effort?: EffortLevel;
  category?: ActionCategory;
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

export interface SeoDashboard {
  integrationStatus: SeoIntegrationStatus;
  snapshot: SeoSnapshot | null;
  keywords: SeoKeyword[];
  actions: SeoAction[];
  topMovers: TopMover[];
}
