import { NextRequest, NextResponse } from "next/server";

/** Preview milestone emails in the browser.
 *  Usage: /api/debug/milestone-preview?milestone=50
 *  Optional: &count=53  (defaults to the milestone number)
 */

interface MilestoneContent {
  subject: string;
  headline: string;
  lines: string[];
  cta: string;
}

const MILESTONE_CONTENT: Record<number, (count: number, remaining: number) => MilestoneContent> = {
  50: (count, remaining) => ({
    subject: "We Just Hit 50 Volunteers",
    headline: "50!",
    lines: [
      `<strong>50 people</strong> said yes to waking up early on a Tuesday morning to serve Indianapolis.`,
      `<strong>50 people</strong> said yes to being part of something bigger than themselves.`,
      `If you haven't invited someone yet, now's the time. We've got ${remaining} more spots to fill.`,
    ],
    cta: "Invite Someone to Sign Up",
  }),
  100: (count, remaining) => ({
    subject: "Triple Digits: 100 Volunteers Signed Up",
    headline: "100!",
    lines: [
      `100 volunteers. That's enough people to cover 4 full rally points on July 7.`,
      `But we're going for 26 parks across Indianapolis. And at this pace, we're going to get there.`,
      `Keep sharing. ${remaining} spots left.`,
    ],
    cta: "Share the Sign-Up Link",
  }),
  200: (_count, remaining) => ({
    subject: "200 People. One Morning.",
    headline: "200!",
    lines: [
      `200 people waking up early on a Tuesday in July to clean Indianapolis parks.`,
      `That's not normal — that's special. We're a quarter of the way to 777.`,
      `${remaining} spots remain. The momentum is building.`,
    ],
    cta: "Help Us Keep Going",
  }),
  300: (_count, remaining) => ({
    subject: "300 Volunteers — Almost Halfway",
    headline: "300!",
    lines: [
      `We're almost halfway to 777. At this pace, we're going to hit our goal.`,
      `Every person who signs up makes the impact bigger for every park across the city.`,
      `Keep inviting people. ${remaining} spots to go.`,
    ],
    cta: "Invite Your People",
  }),
  400: (count, remaining) => ({
    subject: "400 Strong",
    headline: "400!",
    lines: [
      `${count} volunteers signed up for July 7. We're over halfway there.`,
      `This started as an idea. Now it's a movement.`,
      `The momentum is real. ${remaining} spots left. Let's finish this.`,
    ],
    cta: "Help Us Close the Gap",
  }),
  500: (_count, _remaining) => ({
    subject: "500 Volunteers. 277 To Go.",
    headline: "500!",
    lines: [
      `That's more people than most companies employ. And they're all showing up on one morning to clean Indianapolis.`,
      `We're in the home stretch. 277 spots left until we hit 777.`,
      `If you know someone who hasn't signed up, send them the link.`,
    ],
    cta: "Send the Sign-Up Link",
  }),
  600: (_count, remaining) => ({
    subject: `600 Signed Up. ${remaining} Spots Left.`,
    headline: "600!",
    lines: [
      `We can see the finish line. ${remaining} spots left until 777 volunteers for July 7.`,
      `If you haven't invited someone yet, now's the time.`,
      `Let's close this out.`,
    ],
    cta: "Help Us Finish",
  }),
  700: (_count, remaining) => ({
    subject: "700 Volunteers. 77 Spots Remaining.",
    headline: "700!",
    lines: [
      `${remaining} spots left until we hit 777 volunteers for July 7.`,
      `We are this close. This is really happening.`,
      `One more push and we're there.`,
    ],
    cta: "Fill the Last Spots",
  }),
};

function buildEmail(milestone: number, count: number): string {
  const pct = ((count / 777) * 100).toFixed(1);
  const remaining = 777 - count;
  const contentFn = MILESTONE_CONTENT[milestone];
  if (!contentFn) return "<p>Invalid milestone. Use ?milestone=50,100,200,300,400,500,600,700</p>";

  const { subject, headline, lines, cta } = contentFn(count, remaining);

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;line-height:1.6;color:#333;background:#f4f4f4;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

<div style="background:#2D5016;color:white;padding:40px 20px;text-align:center;">
  <h1 style="font-size:48px;margin:0;font-weight:bold;">${headline}</h1>
  <p style="font-size:20px;margin:10px 0 0 0;color:#e0e0e0;">We Just Hit ${milestone} Volunteers</p>
</div>

<div style="padding:30px 20px;">
  <p style="font-size:16px;">Hey Jarred,</p>

  ${lines.map((line) => `<p style="font-size:16px;line-height:1.8;">${line}</p>`).join("\n  ")}

  <div style="background:#e0e0e0;height:30px;border-radius:15px;margin:25px 0 10px;overflow:hidden;">
    <div style="background:linear-gradient(90deg,#2D5016,#4CAF50);height:100%;width:${pct}%;border-radius:15px;"></div>
  </div>
  <p style="text-align:center;margin:0 0 25px;font-size:18px;font-weight:bold;color:#2D5016;">${count} / 777 volunteers (${pct}%)</p>

  <div style="background:#f4f4f4;padding:20px;border-left:4px solid #4CAF50;margin:20px 0;">
    <p style="margin:5px 0;font-size:15px;">&#9989; ${count} volunteers signed up</p>
    <p style="margin:5px 0;font-size:15px;">&#127919; ${remaining} spots left to fill</p>
    <p style="margin:5px 0;font-size:15px;">&#128205; 26 rally points across Indianapolis</p>
    <p style="margin:5px 0;font-size:15px;">&#128197; July 7, 2026 &middot; 8:00&ndash;10:00 AM</p>
  </div>

  <div style="text-align:center;margin:25px 0;">
    <a href="https://indystreetsweep.com" style="display:inline-block;background:#4CAF50;color:white;padding:15px 40px;text-decoration:none;border-radius:5px;font-weight:bold;font-size:16px;">${cta}</a>
  </div>

  <p style="font-size:15px;">This is happening,</p>
  <p style="font-size:15px;"><strong>Trace Burgess</strong><br>
  Indy Street Sweep<br>
  <a href="https://indystreetsweep.com" style="color:#4CAF50;">indystreetsweep.com</a></p>
</div>

<div style="background:#f8f8f8;padding:20px;text-align:center;font-size:14px;color:#666;">
  <p style="margin:0;">777 volunteers. 26 parks. 1 morning. 1 city.</p>
</div>

</div>
</body>
</html>`;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const milestone = parseInt(searchParams.get("milestone") || "50");
  const count = parseInt(searchParams.get("count") || String(milestone));

  const html = buildEmail(milestone, count);
  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
