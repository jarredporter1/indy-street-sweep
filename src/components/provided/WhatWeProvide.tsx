const ITEMS = [
  { label: "Gloves", detail: "courtesy of Indy Parks" },
  { label: "Trash bags", detail: "courtesy of Indy Parks" },
  { label: "Safety vests" },
  { label: "Truck pickup for all collected trash" },
  { label: "Site leader training & support" },
];

export function WhatWeProvide() {
  return (
    <section className="py-16 sm:py-20 section-px">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium text-indy-red uppercase tracking-wider">
            Come as you are
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-indy-navy tracking-tight">
            What We Provide
          </h2>
          <p className="text-gray-600">
            Just bring comfortable clothes, closed-toe shoes, sunscreen, and a water bottle. We handle the rest.
          </p>
        </div>

        <ul className="space-y-3 text-left max-w-md mx-auto">
          {ITEMS.map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-indy-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">
                {item.label}
                {item.detail && (
                  <span className="text-gray-400"> ({item.detail})</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
