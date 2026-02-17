export function Footer() {
  return (
    <footer className="py-12 section-px bg-indy-navy text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-bold">
            Indy Street Sweep
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Day of Caring 777
            <br />
            United in service. Neighbors serving neighbors.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2 text-sm text-white/70">
            <a href="#info" className="hover:text-white transition-colors">How It Works</a>
            <a href="/map" className="hover:text-white transition-colors">Find a Rally Point</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#partners" className="hover:text-white transition-colors">Partners</a>
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
            Get in Touch
          </h4>
          <div className="text-sm text-white/70 space-y-2">
            <p>Questions? Reach out to us.</p>
            <a
              href="mailto:hello@indystreetsweep.com"
              className="text-indy-gold hover:text-white transition-colors"
            >
              hello@indystreetsweep.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} Indy Street Sweep. A Citizens 7 initiative.
        </p>
        <p className="text-xs text-white/40">
          Built with love for Indianapolis.
        </p>
      </div>
    </footer>
  );
}
