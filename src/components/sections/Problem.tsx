import { FadeIn } from "../ui/FadeIn";

const painPoints = [
  {
    n: "01",
    t: "You get pitched assignments with imperfect infrastructure.",
    d: "Your recruiter matches you to a facility without the right imaging suite or instrumentation, obsolete EMR systems and undertrained specialty staff - hence, you spend the first week troubleshooting equipment gaps and learning new softwares instead of seeing patients.",
  },
  {
    n: "02",
    t: "You\u2019re losing income to bloated agency fees.",
    d: "Traditional agencies charge up-to 40%+ markup to facilities for placements. That margin doesn\u2019t come from the facility\u2019s budget \u2014 it\u2019s subtracted from what could be your earning.",
  },
  {
    n: "03",
    t: "You\u2019re left alone to deal with logistical and administrative nightmares.",
    d: "Credentialing, multi-state licensing, housing and logistics, assignment changes/extension, post-placement advocacy - you name it. Your dedicated placement advisor will be in lock-step with you from the first touchpoint till you finish your role.",
  },
];

export function Problem() {
  return (
    <section className="bg-white py-[120px] px-[6%] max-md:py-[60px]">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="font-body text-[13px] text-hb-accent uppercase tracking-[0.12em] font-semibold mb-4 text-center">
            The Problem
          </p>
          <h2
            className="font-display text-hb-text leading-[1.15] mb-5 tracking-[-0.02em] text-center"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            Generic staffing agencies
            <br />
            are costing you more than money.
          </h2>
          <p className="font-body text-[17px] text-hb-muted leading-[1.7] mb-16">
            You didn&apos;t spend a decade in training to be treated like a commodity in an assembly line.
            Yet, that&apos;s exactly what happens when recruiters - with no exposure to clinical lifestyle or training - run your career.
          </p>
        </FadeIn>

        {painPoints.map((p, i) => (
          <FadeIn key={i} delay={i * 0.12}>
            <div className="flex gap-8 py-10 border-t border-hb-border items-start max-md:flex-col max-md:gap-4">
              <span className="font-display text-5xl text-hb-border leading-none min-w-[64px]">
                {p.n}
              </span>
              <div>
                <h3 className="font-display text-[22px] text-hb-text leading-[1.35] mb-3">
                  {p.t}
                </h3>
                <p className="font-body text-[15px] text-hb-muted leading-[1.7]">
                  {p.d}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={0.4}>
          <div className="mt-16 py-8 px-10 rounded-2xl bg-gradient-to-br from-hb-light-teal to-hb-light border border-hb-border max-md:px-6">
            <p className="font-display text-[22px] text-hb-text leading-[1.4] text-center">
              What if your placement advisor actually understood your speciality and preferences
              <br className="max-md:hidden" />
              — because they were trained by{" "}
              <span className="text-hb-accent">
                physicians who were once in your shoes?
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
