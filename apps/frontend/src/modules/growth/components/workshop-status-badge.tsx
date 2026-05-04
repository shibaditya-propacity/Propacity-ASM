import { Chip } from "@/core/ui";
import type { WorkshopStatus } from "../types";

interface WorkshopStatusBadgeProps {
  status: WorkshopStatus;
}

type ChipTone = "slate" | "emerald" | "amber" | "red" | "blue" | "violet";

function statusChipTone(status: WorkshopStatus): ChipTone {
  switch (status) {
    case "Upcoming":
      return "blue";
    case "Live":
      return "emerald";
    case "Completed":
      return "slate";
    case "Cancelled":
      return "red";
    default:
      return "slate";
  }
}

export function WorkshopStatusBadge({ status }: WorkshopStatusBadgeProps) {
  return <Chip tone={statusChipTone(status)}>{status}</Chip>;
}
