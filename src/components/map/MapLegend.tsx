"use client";

import { DENSITY_COLORS, DENSITY_LABELS } from "@/lib/utils";

export function MapLegend() {
  return (
    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[1000] bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-2 sm:p-3 text-xs space-y-1.5">
      {(["low", "medium", "high"] as const).map((level) => (
        <div key={level} className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: DENSITY_COLORS[level] }} />
          <span className="text-gray-600">{DENSITY_LABELS[level]}</span>
        </div>
      ))}
    </div>
  );
}
