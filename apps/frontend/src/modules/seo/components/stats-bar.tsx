import { StatCard } from "./stat-card";
import type { SeoDashboard } from "../types";

interface StatsBarProps {
  dashboard: SeoDashboard;
}

export function StatsBar({ dashboard }: StatsBarProps) {
  const { snapshot, keywords, actions } = dashboard;

  const trackedCount = keywords.length;

  const gainedThisMonth = keywords.filter(
    (kw) =>
      kw.currentRank !== null &&
      kw.previousRank !== null &&
      kw.currentRank < kw.previousRank,
  ).length;

  const avgRank =
    keywords.length > 0
      ? keywords
          .filter((kw) => kw.currentRank !== null)
          .reduce((sum, kw) => sum + (kw.currentRank ?? 0), 0) /
        Math.max(keywords.filter((kw) => kw.currentRank !== null).length, 1)
      : 0;

  // Ranking probability: inverse of avg rank (rank 1 = 100%, rank 20 = 5%)
  const rankingProbability =
    avgRank > 0 ? Math.max(0, Math.round(100 - (avgRank - 1) * 5)) : 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        label="Tracked Keywords"
        value={trackedCount}
        delta={trackedCount > 0 ? `${trackedCount} active` : "No keywords yet"}
        deltaPositive={trackedCount > 0}
      />
      <StatCard
        label="Avg Ranking Probability"
        value={`${rankingProbability}%`}
        delta={
          snapshot
            ? `Avg pos ${snapshot.avgPosition.toFixed(1)}`
            : "No data yet"
        }
        deltaPositive={snapshot ? snapshot.avgPosition <= 10 : false}
      />
      <StatCard
        label="Keywords Gained"
        value={gainedThisMonth}
        delta={
          gainedThisMonth > 0 ? `+${gainedThisMonth} moving up` : "No changes"
        }
        deltaPositive={gainedThisMonth > 0}
      />
      <StatCard
        label="Pending Actions"
        value={actions.length}
        delta={
          actions.length > 0
            ? `${actions.filter((a) => a.impactLevel === "HIGH").length} high impact`
            : "All clear"
        }
        deltaPositive={actions.length === 0}
      />
    </div>
  );
}
