"use client";

import { FadeIn } from "../ui/FadeIn";
import { Icons } from "../ui/Icons";

const features = [
  {
    icon: <Icons.Stethoscope />,
    name: "Preference-led Matching",
    desc: "Our placement advisors match you to facilities and locations strictly to your preferences in terms of speciality care level, case volume, staff-support and equipment.",
    detail: "Not just random pitches \u2014 locums with guaranteed satisfaction.",
  },
  {
    icon: <Icons.DollarSign />,
    name: "Higher Take-Home Pay",
    desc: "We charge the lowest fee in the industry to facilities, which means that you always keep more. Additionally, facilities engage us faster and more often - leading to wider role availability.",
    detail: "Lowest fees in the industry vs. 40% industry take-rate",
  },
  {
    icon: <Icons.MapPin />,
    name: "Nationwide Coverage",
    desc: "We provide placements at practices across all 50 states while our concierge model takes care of all administrative burdens e.g. licensing, insurance, housing etc. so you can prepare stress-free for your new role.",
    detail: "50 states. One point of contact.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="bg-hb-light py-[120px] px-[6%] max-md:py-[60px]">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="font-body text-[13px] text-hb-accent uppercase tracking-[0.12em] font-semibold mb-4 text-center">
            Our Difference
          </p>
          <h2
            className="font-display text-hb-text leading-[1.15] mb-4 tracking-[-0.02em] text-center"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            Here&apos;s what makes us
            <br />
            <span className="text-hb-accent">
              different from the rest.
            </span>
          </h2>
          <p className="font-body text-[17px] text-hb-muted leading-[1.7] mb-[72px]">
            Hour Bridge Health was founded to fix what&apos;s broken today in locum tenens — starting with who&apos;s running placements. Our advisors understand clinical lifestyle intricacies and preferences, striving to provide concierge level service to all our clients.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="bg-white rounded-[20px] py-10 px-8 border border-hb-border flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(30,58,95,0.08)]">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2A8C7A11] to-[#2A8C7A22] flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="font-display text-[22px] text-hb-text mb-3">
                  {f.name}
                </h3>
                <p className="font-body text-[15px] text-hb-muted leading-[1.65] mb-5 flex-1">
                  {f.desc}
                </p>
                <div className="p-3 px-4 rounded-[10px] bg-hb-light-teal flex items-center gap-2.5">
                  <Icons.CheckCircle />
                  <span className="font-body text-[13px] text-hb-accent font-semibold">
                    {f.detail}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
