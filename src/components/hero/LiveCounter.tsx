"use client";

import { useVolunteerCount } from "@/hooks/useVolunteerCount";

interface LiveCounterProps {
  initialCount: number;
  goal: number;
}

export function LiveCounter({ initialCount, goal }: LiveCounterProps) {
  const count = useVolunteerCount(initialCount);
  const percentage = Math.min((count / goal) * 100, 100);

  return (
    <div className="w-full max-w-md space-y-3">
      {/* Count display */}
      <div className="flex items-baseline gap-1">
        <span className="text-4xl sm:text-5xl font-black text-white tabular-nums animate-count" key={count}>
          {count.toLocaleString()}
        </span>
        <span className="text-xl sm:text-2xl font-bold text-white/50">
          / {goal.toLocaleString()}
        </span>
      </div>
      <p className="text-sm text-white/60">volunteers signed up</p>

      {/* Progress bar */}
      <div className="w-full h-3 bg-white/15 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indy-red to-indy-gold rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
