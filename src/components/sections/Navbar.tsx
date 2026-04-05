"use client";

import { useState } from "react";
import { Icons } from "../ui/Icons";
import { Button } from "../ui/Button";

export function Navbar({ animate = false, style }: { animate?: boolean; style?: React.CSSProperties }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="flex justify-between items-center py-6 px-[6%] relative z-10"
      style={{ ...style }}
    >
      <a href="#hero" className="flex items-center">
        <span className="font-display text-[22px] text-hb-text tracking-[-0.02em] font-bold">
          Hour Bridge Health
        </span>
      </a>

      {/* Desktop nav */}
      <div className="hidden 950:flex gap-8 items-center">
        {[
          { label: "Our Difference", href: "#solution" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "FAQs", href: "#faq" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-hb-muted text-sm font-body px-4 py-2 rounded-full hover:bg-hb-accent hover:text-white transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
        <Button variant="primary" size="sm" icon={<Icons.Upload />} href="#contact">
          Submit Your CV
        </Button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="950:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`block w-6 h-0.5 bg-hb-text transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-hb-text transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-hb-text transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-hb-border p-6 flex flex-col gap-4 950:hidden z-50">
          {[
            { label: "Our Difference", href: "#solution" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "FAQs", href: "#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="w-full group cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-hb-muted text-sm font-body px-4 py-2 rounded-full w-fit block group-hover:bg-hb-accent group-hover:text-white transition-all duration-300">
                {item.label}
              </span>
            </a>
          ))}
          <Button variant="primary" size="sm" icon={<Icons.Upload />} href="#contact">
            Submit Your CV
          </Button>
        </div>
      )}
    </nav>
  );
}
