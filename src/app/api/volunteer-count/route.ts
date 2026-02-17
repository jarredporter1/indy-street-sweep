import { NextResponse } from "next/server";
import { getVolunteerCount } from "@/lib/sheets";

export async function GET() {
  try {
    const count = await getVolunteerCount();
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Volunteer count error:", error);
    return NextResponse.json({ count: 0 });
  }
}
