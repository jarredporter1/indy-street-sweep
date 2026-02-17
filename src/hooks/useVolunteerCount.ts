"use client";

import { useState, useEffect, useCallback } from "react";

export function useVolunteerCount(initialCount: number) {
  const [count, setCount] = useState(initialCount);

  const fetchCount = useCallback(async () => {
    try {
      const res = await fetch("/api/volunteer-count");
      if (res.ok) {
        const data = await res.json();
        setCount(data.count);
      }
    } catch {
      // Silently fail — keep showing last known count
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, [fetchCount]);

  return count;
}
