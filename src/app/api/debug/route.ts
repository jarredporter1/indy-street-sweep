import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { getRallyPoints, getSignups } = await import("@/lib/sheets");
    const [rallyPoints, signupRows] = await Promise.all([getRallyPoints(), getSignups()]);

    // Rally point IDs
    const rpIds = rallyPoints.map((rp) => ({ id: rp.id, name: rp.name }));

    // Signup rally point IDs (col index 5)
    const signupRpIds = signupRows.map((row) => row[5] ?? "(empty)");

    // Which signup IDs match a rally point
    const rpIdSet = new Set(rallyPoints.map((rp) => rp.id));
    const matched = signupRpIds.filter((id) => rpIdSet.has(id));

    return NextResponse.json({
      rallyPointCount: rallyPoints.length,
      signupRowCount: signupRows.length,
      rallyPointIds: rpIds,
      signupRallyPointIds: signupRpIds,
      matchedSignups: matched.length,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
