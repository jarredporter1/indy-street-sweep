"use client";

import { useState } from "react";
import Link from "next/link";

interface AccordionItemProps {
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

export function AccordionItem({ question, answer, link }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-full bg-white rounded-xl px-4 py-4 sm:px-6 sm:py-5 mb-1 sm:mb-2 text-left cursor-pointer group transition-shadow hover:shadow-sm"
      aria-expanded={isOpen}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-indy-navy">
          {question}
        </span>
        {/* Plus / Minus icon */}
        <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center shrink-0 text-gray-400 group-hover:border-gray-400 transition-colors">
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 12 12"
            stroke="currentColor"
            strokeWidth={2}
          >
            {/* Horizontal bar (always shown) */}
            <line x1="2" y1="6" x2="10" y2="6" />
            {/* Vertical bar (hidden when open) */}
            <line
              x1="6"
              y1="2"
              x2="6"
              y2="10"
              className={`transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
          </svg>
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 mt-3" : "max-h-0"}`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        {link && (
          <Link
            href={link.href}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-sm font-semibold text-indy-navy hover:text-indy-red transition-colors mt-3"
          >
            {link.label}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </button>
  );
}
