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
  low: "#8fcea0",
  medium: "#2ea043",
  high: "#013d0e",
};

// Low density background is light — needs dark text. Medium/high are dark enough for white.
export const DENSITY_TEXT_COLORS: Record<DensityLevel, string> = {
  low: "#013d0e",
  medium: "white",
  high: "white",
};

export const DENSITY_LABELS: Record<DensityLevel, string> = {
  low: "Needs volunteers",
  medium: "Getting there",
  high: "Well-staffed",
};

export function formatCount(count: number): string {
  return count.toLocaleString();
}
