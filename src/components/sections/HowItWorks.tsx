import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";
import { Icons } from "../ui/Icons";

const steps = [
  {
    step: "01",
    verb: "Submit your CV and",
    outcome: "preferences in 5 minutes",
    desc: "Upload your detailed background CV and preferences. No lengthy applications or wait times.",
  },
  {
    step: "02",
    verb: "Hop on a call with",
    outcome: "your placement advisor",
    desc: "A trained placement concierge reviews your specialty, preferred geography, schedule, and rate expectations.",
  },
  {
    step: "03",
    verb: "Start your",
    outcome: "next favourite role",
    desc: "We handle credentialing, insurance, contracts, housing and logistics. You show up to a facility that\u2019s ready for you from day one.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-hb-light py-[120px] px-[6%] max-md:py-[60px]">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="font-body text-[13px] text-hb-accent uppercase tracking-[0.12em] font-semibold mb-4 text-center">
            How It Works
          </p>
          <h2
            className="font-display text-hb-text leading-[1.15] mb-[72px] tracking-[-0.02em] text-center"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            Just three simple steps between
            <br />
            <span className="text-hb-accent">your next high-earning placement.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-y-16 lg:gap-y-0">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-12 h-0.5 z-0"
            style={{
              left: "16.67%",
              right: "16.67%",
              background:
                "linear-gradient(90deg, rgba(42,140,122,0.27), #2A8C7A, rgba(42,140,122,0.27))",
            }}
          />

          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="text-center relative z-[1] px-5">
                <div className="w-24 h-24 rounded-full mx-auto mb-7 bg-white border-[3px] border-hb-accent flex items-center justify-center shadow-[0_8px_30px_rgba(42,140,122,0.15)]">
                  <span className="font-display text-[28px] text-hb-accent">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-hb-text mb-1">
                  {s.verb}{" "}
                  <span className="text-hb-accent">{s.outcome}</span>
                </h3>
                <p className="font-body text-[15px] text-hb-muted leading-[1.65] max-w-[280px] mx-auto mt-3">
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="text-center mt-16">
            <Button variant="primary" size="lg" icon={<Icons.Upload />} href="#contact" className="max-md:w-full justify-center">
              Submit Your CV
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
