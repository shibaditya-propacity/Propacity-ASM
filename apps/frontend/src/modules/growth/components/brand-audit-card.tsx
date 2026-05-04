import { Chip, ProgressBar } from "@/core/ui";
import type { BrandAudit, AuditStatus } from "../types";

interface BrandAuditCardProps {
  audit: BrandAudit;
}

type ChipTone = "slate" | "emerald" | "amber" | "red" | "blue" | "violet";

function auditStatusTone(status: AuditStatus): ChipTone {
  switch (status) {
    case "Pending":
      return "amber";
    case "In Progress":
      return "blue";
    case "Reviewed":
      return "violet";
    case "Shared":
      return "emerald";
    case "Converted":
      return "emerald";
    default:
      return "slate";
  }
}

export function BrandAuditCard({ audit }: BrandAuditCardProps) {
  return (
    <div className="card card-pad space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-500 mb-1">Type</div>
          <div className="text-sm font-medium text-slate-800">{audit.type}</div>
        </div>
        <Chip tone={auditStatusTone(audit.status)}>{audit.status}</Chip>
      </div>

      <div className="flex items-center gap-6">
        <div>
          <div className="text-xs text-slate-500 mb-0.5">Overall Score</div>
          <div className="text-2xl font-bold text-slate-900">
            {audit.overallScore !== null ? audit.overallScore : "Pending"}
          </div>
        </div>
      </div>

      {audit.dimensions.length > 0 && (
        <div>
          <div className="text-xs font-semibold text-slate-600 mb-2">Dimensions</div>
          <ul className="space-y-2">
            {audit.dimensions.map((dim) => (
              <li key={dim.name}>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>{dim.name}</span>
                  <span className="font-medium">{dim.score}</span>
                </div>
                <ProgressBar value={dim.score} max={100} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {audit.topThreeOpportunities.length > 0 && (
        <div>
          <div className="text-xs font-semibold text-slate-600 mb-2">Top Opportunities</div>
          <ul className="list-disc list-inside space-y-1">
            {audit.topThreeOpportunities.slice(0, 3).map((opp) => (
              <li key={opp.title} className="text-xs text-slate-700">
                <span className="font-medium">{opp.title}</span>
                {opp.estimatedUplift && (
                  <span className="text-slate-500"> — {opp.estimatedUplift}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
