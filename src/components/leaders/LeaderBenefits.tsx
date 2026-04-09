import Link from "next/link";

const BENEFITS = [
  "Free trial sweep attendance (March/May)",
  "Pre-event training meeting (May or June at 6338 Westfield Blvd)",
  "Full support from our team",
  "Direct communication with your volunteers",
  "All materials provided",
];

export function LeaderBenefits() {
  return (
    <section className="py-16 sm:py-20 section-px bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm font-medium text-indy-red uppercase tracking-wider">
            Make a bigger impact
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-indy-navy tracking-tight">
            Lead a Rally Point
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Site leaders manage ~30 volunteers at one park. You set the tone,
            we give you everything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Benefits list */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-indy-navy">
              What you get
            </h3>
            <ul className="space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indy-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Meetings */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-indy-navy">
              Leader meetings
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-1">
                <p className="text-sm font-semibold text-indy-navy">May Meeting</p>
                <p className="text-xs text-gray-500">May 6 — 8:00–9:30 AM</p>
                <p className="text-xs text-gray-500">6338 Westfield Blvd or Google Meet</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-1">
                <p className="text-sm font-semibold text-indy-navy">June Meeting</p>
                <p className="text-xs text-gray-500">Date TBD</p>
                <p className="text-xs text-gray-500">6338 Westfield Blvd or Google Meet</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/map"
            className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 bg-indy-navy text-white hover:bg-indy-navy/90 active:scale-[0.98] px-8 py-3.5 text-sm"
          >
            Sign Up to Lead a Site
          </Link>
        </div>
      </div>
    </section>
  );
}
