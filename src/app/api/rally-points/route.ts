import { NextResponse } from "next/server";
import { getRallyPointsWithCounts } from "@/lib/sheets";
import { RALLY_POINT_SEED_DATA } from "@/lib/constants";
import type { RallyPointWithCount } from "@/types";

function getFallbackData(): RallyPointWithCount[] {
  return RALLY_POINT_SEED_DATA.map((rp, i) => ({
    id: `rp-${i + 1}`,
    name: rp.name,
    address: rp.address,
    lat: rp.lat,
    lng: rp.lng,
    description: null,
    capacity: rp.capacity,
    zone: rp.zone,
    site_leader_id: null,
    volunteer_count: 0,
    signup_count: 0,
  }));
}

export async function GET() {
  try {
    const rallyPoints = await getRallyPointsWithCounts();
    if (rallyPoints.length === 0) {
      return NextResponse.json({ rallyPoints: getFallbackData() });
    }
    return NextResponse.json({ rallyPoints });
  } catch (error) {
    console.error("Rally points error:", error);
    return NextResponse.json({ rallyPoints: getFallbackData() });
  }
}
