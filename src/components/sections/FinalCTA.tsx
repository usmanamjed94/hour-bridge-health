import { FadeIn } from "../ui/FadeIn";
import { Button } from "../ui/Button";
import { Icons } from "../ui/Icons";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-[120px] px-[6%] relative max-md:py-[60px]"
      style={{
        background:
          "linear-gradient(135deg, #1E2D3D 0%, #2C3E50 40%, #2A8C7A 80%, #5A7D6F 100%)",
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          top: "-30%",
          left: "-10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(42,140,122,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          bottom: "-30%",
          right: "-10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(90,125,111,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[800px] mx-auto text-center relative z-[1]">
        <FadeIn>
          <h2
            className="font-display text-white leading-[1.12] mb-6 tracking-[-0.02em]"
            style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
          >
            Stop settling for placements
            <br />
            that don&apos;t fit your preferences.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            className="grid grid-cols-[1fr_auto_1fr] gap-8 items-start my-16 p-10 rounded-2xl max-md:grid-cols-1 max-md:gap-6 max-md:p-8"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div>
              <p
                className="font-body text-[15px] font-bold uppercase tracking-[0.1em] mb-3"
                style={{ color: "rgba(255,255,255,1)" }}
              >
                Before
              </p>
              {[
                "Imperfect infrastructure and staff",
                "Exorbitant (40%+) agency fees",
                "Geographically constrained roles",
                "Low administrative and logistical support",
                "Commoditized placement process",
              ].map((item, i) => (
                <p
                  key={i}
                  className="font-body text-[15px] mb-4 leading-[1.5] line-through"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    textDecorationColor: "rgba(42,140,122,1)",
                  }}
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hb-accent to-[#3AA08E] flex items-center justify-center max-md:mx-auto text-white self-center">
              <Icons.ArrowRight />
            </div>

            <div>
              <p className="font-body text-[15px] font-bold text-hb-accent uppercase tracking-[0.1em] mb-3">
                After
              </p>
              {[
                "Infrastructure preference match",
                "Lowest fees in the industry",
                "Nationwide role coverage",
                "Concierge level administrative support",
                "Personalized placement process",
              ].map((item, i) => (
                <p
                  key={i}
                  className="font-body text-[15px] mb-4 leading-[1.5] font-medium"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            <Button variant="primary" size="lg" icon={<Icons.Upload />} href="#contact" className="max-md:w-full justify-center">
              Submit Your CV
            </Button>
            <Button variant="white" size="lg" icon={<Icons.Phone />} href="#contact" className="max-md:w-full justify-center">
              Talk to an Advisor
            </Button>
          </div>
          <p
            className="font-body text-sm leading-[1.6]"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            No fees to you. No contracts. No exclusivity.
            <br />
            If your placement isn&apos;t right, we&apos;ll find you a better match — guaranteed.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
