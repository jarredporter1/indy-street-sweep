import type { DensityLevel } from "@/types";

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getDensityLevel(count: number): DensityLevel {
  if (count <= 10) return "low";
  if (count <= 25) return "medium";
  return "high";
}

export const DENSITY_COLORS: Record<DensityLevel, string> = {
  low: "#EF4444",
  medium: "#F59E0B",
  high: "#22C55E",
};

export const DENSITY_LABELS: Record<DensityLevel, string> = {
  low: "Needs volunteers",
  medium: "Getting there",
  high: "Well-staffed",
};

export function formatCount(count: number): string {
  return count.toLocaleString();
}
