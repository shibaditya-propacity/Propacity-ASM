import { Chip } from "@/core/ui";
import type { AuditStatus } from "../brand-audit.types";

type ChipTone = "slate" | "emerald" | "amber" | "red" | "blue" | "violet";

function tone(status: AuditStatus): ChipTone {
  switch (status) {
    case "DRAFT":
      return "slate";
    case "COLLECTING":
      return "blue";
    case "ANALYZING":
      return "amber";
    case "COMPLETE":
      return "emerald";
    case "FAILED":
      return "red";
  }
}

const labels: Record<AuditStatus, string> = {
  DRAFT: "Draft",
  COLLECTING: "Collecting",
  ANALYZING: "Analysing",
  COMPLETE: "Complete",
  FAILED: "Failed",
};

export function AuditStatusBadge({ status }: { status: AuditStatus }) {
  return (
    <Chip tone={tone(status)} dot>
      {labels[status]}
    </Chip>
  );
}
