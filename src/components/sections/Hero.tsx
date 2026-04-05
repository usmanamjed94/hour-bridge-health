"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { Icons } from "../ui/Icons";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const t = (d: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "none" : "translateY(30px)",
    transition: `all 0.7s ease ${d}s`,
  });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FAFAF8 0%, #F0EDE8 40%, #E8E3DB 70%, #E0DBD2 100%)",
      }}
    >
      {/* Decorative overlays */}
      <div className="absolute inset-0 opacity-[0.04] hero-overlay-grid" />
      <div className="absolute rounded-full hero-overlay-tr" />
      <div className="absolute rounded-full hero-overlay-bl" />

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-[6%] relative z-[2] gap-12 py-6">
        <div className="w-full lg:max-w-[620px]">
          <div style={t(0.3)}>
            <span className="inline-flex items-center gap-2 bg-[rgba(42,140,122,0.08)] border border-[rgba(42,140,122,0.2)] rounded-full px-5 py-2 mb-7 font-body text-[13px] text-hb-accent font-semibold tracking-[0.05em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-hb-accent" />
              Physician-Founded Agency
            </span>
          </div>
          <h1
            className="font-display text-hb-text leading-[1.08] mb-6 tracking-[-0.03em] font-black"
            style={{ fontSize: "clamp(42px, 5.5vw, 72px)", ...t(0.4) }}
          >
            Locum Placements That <span className="text-hb-accent">Match Your Terms.</span>
          </h1>
          <p
            className="font-body text-[19px] text-hb-muted leading-[1.65] lg:max-w-[570px] mb-10"
            style={t(0.55)}
          >
            We are a physician-led agency that truly understands the locum industry - delivering you roles that exceed your expectations and make you fall in love with medicine, again.
          </p>
          <div className="flex gap-4 flex-wrap" style={t(0.65)}>
            <Button variant="primary" size="lg" icon={<Icons.Upload />} href="#contact" className="flex-1 justify-center">
              Submit Your CV
            </Button>
            <Button variant="secondary" size="lg" icon={<Icons.Phone />} href="#contact" className="flex-1 justify-center">
              Talk to an Advisor
            </Button>
          </div>
        </div>

        {/* Hero card */}
        <div
          className="w-full lg:w-[380px] shrink-0 rounded-[20px] bg-white border border-hb-border shadow-[0_12px_40px_rgba(44,62,80,0.08)] p-8 flex flex-col gap-6"
          style={t(0.7)}
        >
          <div>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2A8C7A22] to-[#2A8C7A44] flex items-center justify-center mb-5">
              <Icons.Stethoscope />
            </div>
            <p className="font-display text-[22px] text-hb-text leading-[1.3] mb-3 font-bold">
              We Know Locums Because We've Lived Them.
            </p>
            <p className="font-body text-sm text-hb-muted leading-[1.6]">
              Our placement advisors are trained by physicians who've lived the locum lifestyle. They understand exactly how geography, case mix, infrastructure, and earning potential impact your joy of doing locums.
            </p>
          </div>
          <div className="flex gap-3">
            {[
              { label: "States Covered", value: "50+" },
              { label: "Avg Days to Place", value: "25" },
              { label: "More Earnings", value: "+XX%" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex-1 p-4 rounded-xl bg-hb-light-teal text-center"
              >
                <div className="font-display text-2xl text-hb-accent font-bold">
                  {s.value}
                </div>
                <div className="font-body text-[11px] text-hb-muted uppercase tracking-[0.08em] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="px-[6%] pb-10 pt-8 relative z-[2]" style={t(0.8)}>
        <p className="font-body text-xs text-hb-muted font-bold uppercase tracking-[0.1em] mb-4">
          Physicians placed at leading institutions
        </p>
        <div
          className="overflow-hidden relative"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div
            className="flex items-center gap-16 w-max"
            style={{ animation: "marquee 20s linear infinite" }}
          >
            {[
              "Mayo Clinic Network",
              "Baelor Hospital Houston",
              "Sparrow Hospital Michigan",
              "Tenet Health",
              "HCA Healthcare",
              "Royal Oak Hospital",
              "Mayo Clinic Network",
              "Baelor Hospital Houston",
              "Sparrow Hospital Michigan",
              "Tenet Health",
              "HCA Healthcare",
              "Royal Oak Hospital",
            ].map((n, i) => (
              <a
                key={i}
                href="#"
                className="font-body text-sm font-semibold tracking-[0.02em] whitespace-nowrap transition-colors duration-300 text-[rgba(44,62,80,0.3)] hover:text-hb-accent"
              >
                {n}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
