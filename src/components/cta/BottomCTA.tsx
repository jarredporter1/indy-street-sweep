import Link from "next/link";

export function BottomCTA() {
  return (
    <section className="section-px pb-20">
      <div className="relative w-full min-h-[40vh] sm:min-h-[50vh] rounded-2xl overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-indy-navy"
          style={{ backgroundImage: "url('/images/image3.jpg')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] sm:min-h-[50vh] px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl text-center space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Ready to Make a{" "}
              <span className="text-indy-gold">Difference?</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
              Pick a park, grab your crew, and join 777 neighbors cleaning up
              Indianapolis. Two hours. One city. Real impact.
            </p>
            <Link
              href="/map"
              className="inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 bg-white text-indy-navy hover:bg-white/90 active:scale-[0.98] px-8 py-4 text-base"
            >
              Find Your Rally Point
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
