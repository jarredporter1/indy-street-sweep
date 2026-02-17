import { NextRequest, NextResponse } from "next/server";
import { signupSchema } from "@/lib/validation";
import { addSignup, getRallyPointById } from "@/lib/sheets";
import { EVENT_DATE_DISPLAY, EVENT_TIME_DISPLAY } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = signupSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of result.error.issues) {
        const key = issue.path.join(".");
        if (!fieldErrors[key]) fieldErrors[key] = [];
        fieldErrors[key].push(issue.message);
      }
      return NextResponse.json({ errors: fieldErrors }, { status: 400 });
    }

    const data = result.data;

    // Check capacity before allowing signup
    const { getRallyPointsWithCounts } = await import("@/lib/sheets");
    const rallyPoints = await getRallyPointsWithCounts();
    const targetPoint = rallyPoints.find((rp) => rp.id === data.rallyPointId);

    if (!targetPoint) {
      return NextResponse.json(
        { error: "Rally point not found. Please select a valid location." },
        { status: 400 }
      );
    }

    if (targetPoint.volunteer_count + data.groupSize > targetPoint.capacity) {
      return NextResponse.json(
        { error: `${targetPoint.name} is full. Please choose another location.` },
        { status: 400 }
      );
    }

    await addSignup({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      groupSize: data.groupSize,
      church: data.church || null,
      tshirtSize: data.tshirtSize,
      role: data.role,
      rallyPointId: data.rallyPointId,
      previousExperience: data.previousExperience || null,
      trialRunAvailable: data.trialRunAvailable ?? null,
    });

    const rallyPoint = await getRallyPointById(data.rallyPointId);

    return NextResponse.json(
      {
        success: true,
        confirmation: {
          name: data.name,
          role: data.role,
          groupSize: data.groupSize,
          rallyPoint: {
            name: rallyPoint?.name || "",
            address: rallyPoint?.address || "",
            zone: rallyPoint?.zone || "",
          },
          eventDate: EVENT_DATE_DISPLAY,
          eventTime: EVENT_TIME_DISPLAY,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Signup route error:", err);
    return NextResponse.json(
      { error: "Failed to save signup. Please try again." },
      { status: 500 }
    );
  }
}
