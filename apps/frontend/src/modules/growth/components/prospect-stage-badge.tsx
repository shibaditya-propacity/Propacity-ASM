import { Chip } from "@/core/ui";
import type { ProspectStage } from "../types";

interface ProspectStageBadgeProps {
  stage: ProspectStage;
}

type ChipTone = "slate" | "emerald" | "amber" | "red" | "blue" | "violet";

function stageChipTone(stage: ProspectStage): ChipTone {
  switch (stage) {
    case "Registered":
      return "slate";
    case "Attended":
      return "blue";
    case "Segmented · Agency":
    case "Segmented · Transaction":
      return "violet";
    case "Session Scheduled":
      return "amber";
    case "Audited":
      return "emerald";
    case "Proposal Sent":
      return "blue";
    case "In Discussion":
      return "amber";
    case "Won":
      return "emerald";
    case "Lost":
      return "red";
    default:
      return "slate";
  }
}

export function ProspectStageBadge({ stage }: ProspectStageBadgeProps) {
  return <Chip tone={stageChipTone(stage)}>{stage}</Chip>;
}
