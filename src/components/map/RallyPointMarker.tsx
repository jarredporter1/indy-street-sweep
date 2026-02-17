"use client";

import { Marker } from "react-leaflet";
import L from "leaflet";
import type { RallyPointWithCount } from "@/types";
import { getDensityLevel, DENSITY_COLORS } from "@/lib/utils";
import { useMemo } from "react";

interface RallyPointMarkerProps {
  point: RallyPointWithCount;
  isSelected: boolean;
  isHovered: boolean;
  onSignUp: (rallyPointId: string) => void;
  onMarkerClick: () => void;
}

function createColoredIcon(color: string, count: number, isSelected: boolean, isHovered: boolean) {
  const highlighted = isSelected || isHovered;
  const size = highlighted ? 44 : 32;
  const strokeWidth = highlighted ? 4 : 2;
  const strokeColor = isHovered && !isSelected ? "#013d0e" : "white";
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 2}" fill="${color}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
      <text x="${size / 2}" y="${size / 2 + 1}" text-anchor="middle" dominant-baseline="central" fill="white" font-size="${highlighted ? 14 : 11}" font-weight="700" font-family="system-ui, sans-serif">${count}</text>
    </svg>
  `;

  return L.divIcon({
    html: svgIcon,
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
}

export function RallyPointMarker({ point, isSelected, isHovered, onMarkerClick }: RallyPointMarkerProps) {
  const density = getDensityLevel(point.volunteer_count);
  const color = DENSITY_COLORS[density];

  const icon = useMemo(
    () => createColoredIcon(color, point.volunteer_count, isSelected, isHovered),
    [color, point.volunteer_count, isSelected, isHovered]
  );

  return (
    <Marker
      position={[point.lat, point.lng]}
      icon={icon}
      eventHandlers={{
        click: () => onMarkerClick(),
      }}
    />
  );
}
