"use client";

import dynamic from "next/dynamic";
import type { RallyPointWithCount } from "@/types";

const HeatMap = dynamic(() => import("./HeatMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center">
      <div className="text-center space-y-2">
        <div className="w-10 h-10 border-4 border-indy-navy/20 border-t-indy-navy rounded-full animate-spin mx-auto" />
        <p className="text-sm text-gray-500">Loading map...</p>
      </div>
    </div>
  ),
});

interface HeatMapLoaderProps {
  rallyPoints: RallyPointWithCount[];
}

export function HeatMapLoader({ rallyPoints }: HeatMapLoaderProps) {
  return (
    <div className="w-full h-full">
      <HeatMap rallyPoints={rallyPoints} />
    </div>
  );
}
