import type { DensityLevel } from "@/types";

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getDensityLevel(count: number): DensityLevel {
  if (count <= 15) return "low";
  if (count <= 25) return "medium";
  return "high";
}

export const DENSITY_COLORS: Record<DensityLevel, string> = {
  low: "#dc2626",
  medium: "#f59e0b",
  high: "#16a34a",
};

export const DENSITY_TEXT_COLORS: Record<DensityLevel, string> = {
  low: "white",
  medium: "white",
  high: "white",
};

export const DENSITY_LABELS: Record<DensityLevel, string> = {
  low: "Needs help",
  medium: "Getting there",
  high: "Well-staffed",
};

export function formatCount(count: number): string {
  return count.toLocaleString();
}
