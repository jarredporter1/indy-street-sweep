"use client";

import { useState, useEffect, useCallback } from "react";
import type { RallyPointWithCount } from "@/types";

export function useRallyPoints(initialData: RallyPointWithCount[]) {
  const [rallyPoints, setRallyPoints] = useState<RallyPointWithCount[]>(initialData);

  const fetchRallyPoints = useCallback(async () => {
    try {
      const res = await fetch("/api/rally-points");
      if (res.ok) {
        const data = await res.json();
        setRallyPoints(data.rallyPoints);
      }
    } catch {
      // Silently fail — keep showing last known data
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchRallyPoints, 30000);
    return () => clearInterval(interval);
  }, [fetchRallyPoints]);

  return rallyPoints;
}
