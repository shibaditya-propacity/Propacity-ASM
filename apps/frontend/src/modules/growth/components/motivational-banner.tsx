import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MotivationalBannerProps {
  wonCount: number;
}

function getMessage(n: number): string {
  if (n === 0) return "The grind is silent. Your first deal is one conversation away.";
  if (n === 1) return "First blood. 🩸 The pipeline is just getting warm.";
  if (n === 2) return "Two won. Momentum is a drug — don't let it fade.";
  if (n === 3) return "Three and climbing. 🚀 You're compounding now.";
  if (n === 4) return "Four closed. 💪 Keep the rhythm, the funnel rewards consistency.";
  return `🔥 ${n} deals won. This is pipeline mastery.`;
}

interface BadgeConfig {
  label:     string;
  className: string;
}

function getBadge(n: number): BadgeConfig {
  if (n === 0) return { label: "0 Won",    className: "bg-white/10 text-white/60 border border-white/20" };
  if (n <= 2)  return { label: `${n} Won`, className: "bg-amber-400/20 text-amber-300 border border-amber-400/40" };
  if (n <= 4)  return { label: `${n} Won`, className: "bg-emerald-400/20 text-emerald-300 border border-emerald-400/40" };
  return {
    label:     `${n} Won`,
    className: "bg-white/15 text-white border border-white/30 shadow-[0_0_14px_rgba(255,255,255,0.2)]",
  };
}

export function MotivationalBanner({ wonCount }: MotivationalBannerProps) {
  const message  = getMessage(wonCount);
  const badge    = getBadge(wonCount);
  const prevWon  = useRef(wonCount);

  useEffect(() => {
    if (wonCount > prevWon.current) {
      import("canvas-confetti").then(({ default: confetti }) => {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.15, x: 0.75 },
          colors: ["#2D3FE7", "#7C3AED", "#10B981", "#F59E0B", "#ffffff"] });
      });
    }
    prevWon.current = wonCount;
  }, [wonCount]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="shrink-0 h-16 flex items-center px-6 gap-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(100deg, #1a28a8 0%, #2D3FE7 40%, #7C3AED 100%)",
      }}
    >
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* Glow blob */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-40 h-10 rounded-full bg-white/10 blur-2xl pointer-events-none" />

      {/* Pulsing dot */}
      <span className="relative shrink-0 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
      </span>

      {/* Message */}
      <AnimatePresence mode="wait">
        <motion.p
          key={wonCount}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative flex-1 text-sm text-white font-semibold truncate min-w-0 drop-shadow"
        >
          {message}
        </motion.p>
      </AnimatePresence>

      {/* Badge */}
      <AnimatePresence mode="wait">
        <motion.span
          key={badge.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`relative shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${badge.className}`}
        >
          {badge.label}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
