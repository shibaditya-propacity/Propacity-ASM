import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Users,
  MessageSquare,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

interface MotivationalBannerProps {
  wonCount: number;
  inDiscussion?: number;
  totalProspects?: number;
  upcomingWorkshops?: number;
}

function getInsight(won: number, inDiscussion: number): string {
  if (won === 0 && inDiscussion === 0)
    return "Your pipeline is empty. Book the first workshop.";
  if (won === 0 && inDiscussion > 0)
    return `${inDiscussion} prospect${inDiscussion > 1 ? "s" : ""} in active discussion — close the gap.`;
  if (won === 1) return "First deal closed. Pipeline is warming up.";
  if (won <= 3)
    return `${won} deals closed. Momentum is building — keep qualifying.`;
  if (won <= 6)
    return `${won} deals won. Conversion rate is solid. Push harder.`;
  return `${won} deals closed. This is pipeline mastery.`;
}

interface StatChipProps {
  icon: typeof Trophy;
  label: string;
  value: string | number;
  accent: string;
}

function StatChip({ icon: Icon, label, value, accent }: StatChipProps) {
  return (
    <div
      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/12 border border-white/20 text-white/90 backdrop-blur-sm ${accent}`}
    >
      <Icon className="w-3 h-3 opacity-80" />
      <span className="opacity-70">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}

export function MotivationalBanner({
  wonCount,
  inDiscussion = 0,
  totalProspects = 0,
  upcomingWorkshops = 0,
}: MotivationalBannerProps) {
  const insight = getInsight(wonCount, inDiscussion);
  const prevWon = useRef(wonCount);

  useEffect(() => {
    if (wonCount > prevWon.current) {
      import("canvas-confetti").then(({ default: confetti }) => {
        confetti({
          particleCount: 140,
          spread: 85,
          origin: { y: 0.18, x: 0.7 },
          colors: ["#2D3FE7", "#7C3AED", "#10B981", "#F59E0B", "#ffffff"],
        });
      });
    }
    prevWon.current = wonCount;
  }, [wonCount]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="shrink-0 px-6 py-3 flex items-center gap-5 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(105deg, #1a28a8 0%, #2D3FE7 45%, #6d28d9 100%)",
      }}
    >
      {/* Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 16px)",
        }}
      />
      {/* Glow blob */}
      <div className="absolute right-24 top-1/2 -translate-y-1/2 w-48 h-12 rounded-full bg-white/8 blur-2xl pointer-events-none" />

      {/* Live dot */}
      <span className="relative shrink-0 flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
      </span>

      {/* Insight text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={wonCount}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="relative text-sm text-white font-semibold truncate flex-1 min-w-0 drop-shadow-sm"
        >
          {insight}
        </motion.p>
      </AnimatePresence>

      {/* Stat chips */}
      <div className="flex items-center gap-2 shrink-0">
        {totalProspects > 0 && (
          <StatChip
            icon={Users}
            label="prospects"
            value={totalProspects}
            accent=""
          />
        )}
        {inDiscussion > 0 && (
          <StatChip
            icon={MessageSquare}
            label="in discussion"
            value={inDiscussion}
            accent=""
          />
        )}
        {upcomingWorkshops > 0 && (
          <StatChip
            icon={CalendarDays}
            label="upcoming"
            value={upcomingWorkshops}
            accent=""
          />
        )}
        <StatChip
          icon={Trophy}
          label="won"
          value={wonCount}
          accent="border-amber-400/40 bg-amber-400/15"
        />
      </div>

      {/* Trend icon */}
      <TrendingUp className="w-4 h-4 text-white/30 shrink-0" />
    </motion.div>
  );
}
