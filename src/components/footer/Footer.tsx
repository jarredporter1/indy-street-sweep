import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="py-12 section-px bg-indy-navy text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <Image
            src="/images/logos/Street Sweep Logo Transparent 1.png"
            alt="Indy Street Sweep"
            width={180}
            height={50}
            className="h-12 w-auto brightness-0 invert"
            unoptimized
          />
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

        {/* Contact + Social */}
        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Get in Touch
            </h4>
            <div className="text-sm text-white/70 space-y-2">
              <p>Questions? Reach out to us.</p>
              <a
                href="mailto:trace@rootsrealty.co"
                className="text-indy-gold hover:text-white transition-colors"
              >
                trace@rootsrealty.co
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
            <a
              href="https://instagram.com/indystreetsweep"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@indystreetsweep</span>
            </a>
            <a
              href="https://instagram.com/roots.realty.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@roots.realty.co</span>
            </a>
            <a
              href="https://instagram.com/maxxmoorre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@maxxmoorre</span>
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
