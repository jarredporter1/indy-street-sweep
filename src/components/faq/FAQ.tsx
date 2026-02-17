"use client";

import { FAQ_CATEGORIES } from "@/lib/constants";
import { AccordionItem } from "./AccordionItem";

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 section-px">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left — big title */}
        <div className="lg:w-[320px] shrink-0">
          <h2 className="font-heading text-5xl sm:text-7xl lg:text-9xl font-black text-indy-navy tracking-tighter leading-none">
            FAQ.
          </h2>
          <p className="text-sm text-gray-500 mt-6 leading-relaxed max-w-[280px]">
            Got questions? We&apos;ve got answers. Here&apos;s everything you
            need to know about Indy Street Sweep.
          </p>
        </div>

        {/* Right — accordion by category */}
        <div className="flex-1 space-y-6">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.label} className="space-y-2">
              {/* Category label */}
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 px-1">
                {category.label}
              </p>
              {category.items.map((item) => (
                <AccordionItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  link={"link" in item ? (item as { question: string; answer: string; link: { label: string; href: string } }).link : undefined}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
