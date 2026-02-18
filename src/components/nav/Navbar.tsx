"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="bg-background section-px py-5">
      <div className="flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logos/Street Sweep Logo Transparent 1.png"
            alt="Street Sweep Indy"
            width={180}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#partners" className="text-sm text-gray-600 hover:text-indy-navy transition-colors">
            Partners
          </a>
          <a href="#about" className="text-sm text-gray-600 hover:text-indy-navy transition-colors">
            About
          </a>
          <a href="#info" className="text-sm text-gray-600 hover:text-indy-navy transition-colors">
            How It Works
          </a>
          <a href="#faq" className="text-sm text-gray-600 hover:text-indy-navy transition-colors">
            FAQ
          </a>
        </div>

        {/* CTA */}
        <Link
          href="/map"
          className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 bg-indy-navy text-white hover:bg-indy-navy/90 active:scale-[0.98] px-4 py-3 text-xs sm:px-6 sm:text-sm"
        >
          Sign Up to Serve
        </Link>
      </div>
    </nav>
  );
}
