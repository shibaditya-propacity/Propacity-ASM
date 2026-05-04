import { MessageSquare, Phone, Mail, Users, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import type { ProspectActivity } from "../types";

interface ProspectActivityTimelineProps {
  activities: ProspectActivity[];
}

type ActivityType = "note" | "call" | "email" | "meeting" | "stage_change";

const activityIcons: Record<ActivityType, React.ElementType> = {
  note: MessageSquare,
  call: Phone,
  email: Mail,
  meeting: Users,
  stage_change: ArrowRight,
};

const activityColors: Record<ActivityType, string> = {
  note: "bg-slate-100 text-slate-600",
  call: "bg-blue-100 text-blue-600",
  email: "bg-violet-100 text-violet-600",
  meeting: "bg-emerald-100 text-emerald-600",
  stage_change: "bg-amber-100 text-amber-600",
};

function getActivityType(type: string): ActivityType {
  const valid: ActivityType[] = ["note", "call", "email", "meeting", "stage_change"];
  return valid.includes(type as ActivityType) ? (type as ActivityType) : "note";
}

export function ProspectActivityTimeline({ activities }: ProspectActivityTimelineProps) {
  if (activities.length === 0) {
    return (
      <p className="text-sm text-slate-500 text-center py-6">No activities yet.</p>
    );
  }

  return (
    <ol className="space-y-4">
      {activities.map((activity) => {
        const type = getActivityType(activity.type);
        const Icon = activityIcons[type];
        const colorClass = activityColors[type];

        return (
          <li key={activity.id} className="flex gap-3">
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${colorClass}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-800">{activity.description}</p>
              <p className="text-xs text-slate-400 mt-0.5">
                {format(new Date(activity.createdAt), "dd MMM yyyy, HH:mm")}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
