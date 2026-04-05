"use client";

import { useRef, useState } from "react";
import { FadeIn } from "../ui/FadeIn";
import { Icons } from "../ui/Icons";

const faqs = [
  {
    q: "I\u2019m a highly specialized surgeon \u2014 is this agency really equipped for my subspecialty?",
    a: "Yes. Our physician advisors understand subspecialty requirements \u2014 from the specific instrumentation an orthopedic spine surgeon needs to the hemodynamic monitoring an interventional cardiologist requires. We don\u2019t send you somewhere that checks boxes on paper. We verify equipment, case volume, and support staff before presenting any opportunity.",
  },
  {
    q: "What if the facility isn\u2019t the right fit once I arrive?",
    a: "We stand behind every match. If a placement doesn\u2019t meet the clinical standards we discussed, we\u2019ll work with you immediately to resolve the issue or transition you to a better-fit facility. Because our advisors understand your clinical needs firsthand, this rarely happens \u2014 but when it does, we move fast.",
  },
  {
    q: "How is Hour Bridge different from CompHealth, Weatherby, or other major agencies?",
    a: "Two fundamental differences: First, your placement advisor understands clinical lifestyle intricacies \u2014 he is not a sales rep working from a script. Second, our lean model means lowest industry fee vs. the 25\u201340%+ fee other agencies charge facilities. Lower fees mean higher take-home pay for you and a lower cost for facilities, which translates to more available assignments and faster placements.",
  },
  {
    q: "How long does it take from CV submission to starting an assignment?",
    a: "Most physicians are matched within 28 days of their initial advisor consultation. Credentialing timelines vary by state and facility, but we proactively manage the process so you\u2019re not waiting around. Urgent-need placements can move even faster if administrative overheads are low.",
  },
  {
    q: "Is there a fee or long-term contract I should know about?",
    a: "There is no fee to you \u2014 ever. Facilities pay the placement fee. There are no long-term contracts, no non-compete clauses, and no exclusivity requirements. You can work with other agencies simultaneously. We earn your loyalty by delivering better matches and better rates, not by locking you in.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id="faq" className="bg-white py-[120px] px-[6%] max-md:py-[60px]">
      <div className="max-w-[760px] mx-auto">
        <FadeIn>
          <p className="font-body text-[13px] text-hb-accent uppercase tracking-[0.12em] font-semibold mb-4 text-center">
            Common Questions
          </p>
          <h2
            className="font-display text-hb-text leading-[1.15] mb-16 tracking-[-0.02em] text-center"
            style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
          >
            Everything you&apos;d ask before
            <br />
            trusting a new agency.
          </h2>
        </FadeIn>

        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className={`border-t border-hb-border ${
                  i === faqs.length - 1 ? "border-b" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center py-6 bg-transparent cursor-pointer text-left gap-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-body text-base text-hb-text font-semibold leading-[1.4]">
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 text-hb-accent transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "none",
                    }}
                  >
                    <Icons.ChevronDown />
                  </span>
                </button>
                <div
                  ref={(el) => { contentRefs.current[i] = el; }}
                  className="overflow-hidden transition-[max-height] duration-400 ease-in-out"
                  style={{ maxHeight: isOpen ? (contentRefs.current[i]?.scrollHeight ?? 600) : 0 }}
                >
                  <p className="font-body text-[15px] text-hb-muted leading-[1.7] pb-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
