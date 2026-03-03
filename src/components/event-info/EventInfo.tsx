import Link from "next/link";
import { EVENT_DATE_DISPLAY, EVENT_TIME_DISPLAY } from "@/lib/constants";

const FEATURES = [
  {
    icon: "01",
    title: "Sign Up",
    description: "Pick your park and rally point. Bring your friends, family, or group.",
    link: { label: "Sign Up to Serve", href: "/map" },
  },
  {
    icon: "02",
    title: "Show Up",
    description: "Just bring comfortable clothes, closed-toe shoes, sunscreen, and a water bottle. We handle the rest.",
    items: [
      "Gloves (courtesy of Indy Parks)",
      "Trash bags (courtesy of Indy Parks)",
      "Safety vests",
      "Truck pickup for all collected trash",
      "Site leader training & support",
    ],
  },
  {
    icon: "03",
    title: "Clean Up",
    description: "Two hours of impact, together. Your site leader keeps things moving — just follow their lead.",
  },
  {
    icon: "04",
    title: "Celebrate",
    description: "Wrap up together. T-shirts, photos, and the pride of a city served well.",
  },
];

export function EventInfo() {
  return (
    <section id="info" className="bg-indy-navy py-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-[600px]">
        {/* Left column — image with overlay text + CTA */}
        <div className="relative overflow-hidden rounded-2xl lg:rounded-none lg:rounded-l-2xl min-h-[300px] sm:min-h-[400px] lg:min-h-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/image4.JPG')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-10">
            <div className="space-y-4 pt-8">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                How It Works
              </h2>
              <p className="text-white/70 leading-relaxed max-w-sm">
                {EVENT_DATE_DISPLAY} &middot; {EVENT_TIME_DISPLAY}. From signup to
                celebration — here&apos;s what your Day of Caring looks like.
              </p>
            </div>
            <Link
              href="/map"
              className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 bg-white text-indy-navy hover:bg-white/90 active:scale-[0.98] px-8 py-3.5 text-sm w-full mt-8"
            >
              Find Your Rally Point
            </Link>
          </div>
        </div>

        {/* Right columns — 2x2 feature cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {FEATURES.map((feature) => (
            <div
              key={feature.icon}
              className="bg-indy-navy p-6 sm:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[250px]"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-sm font-semibold text-white/60">
                  {feature.icon}
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
                {"items" in feature && feature.items && (
                  <ul className="space-y-1.5 pt-1">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                        <svg className="w-4 h-4 text-indy-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {"link" in feature && feature.link && (
                  <Link
                    href={feature.link.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-indy-gold hover:text-white transition-colors"
                  >
                    {feature.link.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
