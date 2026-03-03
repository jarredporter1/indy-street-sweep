import { NextResponse } from "next/server";
import { getRallyPointsWithCounts, getSignups, getRallyPoints } from "@/lib/sheets";

export async function GET(request: Request) {
  // Simple auth check — only allow with the correct secret
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");
  if (secret !== process.env.DAY_BEFORE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [signupRows, rallyPoints] = await Promise.all([
    getSignups(),
    getRallyPoints(),
  ]);

  // Build rally point lookup
  const rpMap = new Map(rallyPoints.map((rp) => [rp.id, rp]));

  // Build site leader lookup (from signups where role = site_leader)
  const siteLeaders = new Map<string, { name: string; phone: string }>();
  for (const row of signupRows) {
    if (row[7] === "site_leader") {
      const rpId = row[5];
      siteLeaders.set(rpId, { name: row[0] || "", phone: row[2] || "" });
    }
  }

  // Build volunteer list with rally point details
  const volunteers = signupRows.map((row) => {
    const rpId = row[5];
    const rp = rpMap.get(rpId);
    const leader = siteLeaders.get(rpId);

    return {
      name: row[0] || "Volunteer",
      email: row[1] || "",
      rallyPointName: rp?.name || "",
      rallyPointAddress: rp?.address || "",
      siteLeaderName: leader?.name || "TBD",
      siteLeaderPhone: leader?.phone || "",
    };
  }).filter((v) => v.email);

  return NextResponse.json({ volunteers, count: volunteers.length });
}
