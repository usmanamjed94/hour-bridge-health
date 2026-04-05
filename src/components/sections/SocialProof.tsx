import { FadeIn } from "../ui/FadeIn";
import { Icons } from "../ui/Icons";

const testimonials = [
  {
    quote:
      "Hour Bridge matched me to a cardiac cath lab that actually had the hemodynamic support I need for complex PCI. First agency that got it right on the first try.",
    name: "Dr. Michael Torres",
    role: "Interventional Cardiologist",
    metric: "Started within 18 days of first call",
  },
  {
    quote:
      "I was skeptical of another staffing agency, but talking to an advisor who understood spine instrumentation changed everything. My rate jumped 30% from my previous agency.",
    name: "Dr. Sarah Lindgren",
    role: "Orthopedic Spine Surgeon",
    metric: "30% increase in per-diem rate",
  },
  {
    quote:
      "As a GI specialist, I kept getting placed at facilities without the right endoscopy suites. Hour Bridge understood scope volume, EUS access, and ERCP capability before I even asked.",
    name: "Dr. Raj Patel",
    role: "Gastroenterologist",
    metric: "3 back-to-back placements, zero equipment issues",
  },
];

const stats = [
  { value: "500+", label: "Physicians Placed" },
  { value: "30%", label: "Avg. Rate Increase" },
  { value: "28", label: "Avg. Days to Placement" },
];

export function SocialProof() {
  return (
    <section id="testimonials" className="bg-white py-[120px] px-[6%] max-md:py-[60px]">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="font-body text-[13px] text-hb-accent uppercase tracking-[0.12em] font-semibold mb-4 text-center">
            Physician Testimonials
          </p>
          <h2
            className="font-display text-hb-text leading-[1.15] mb-16 tracking-[-0.02em] text-center"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            Trusted by specialists who
            <br />
            demand more from their agency.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="bg-hb-light rounded-2xl p-[36px_30px] flex flex-col h-full relative">
                <div className="absolute top-6 right-6">
                  <Icons.Quote />
                </div>
                <div className="flex gap-0.5 mb-5" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Icons.Star key={j} />
                  ))}
                </div>
                <p className="font-body text-[15px] text-hb-text leading-[1.7] mb-6 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-hb-border pt-5">
                  <p className="font-body text-[15px] text-hb-text font-bold mb-0.5">
                    {t.name}
                  </p>
                  <p className="font-body text-[13px] text-hb-muted mb-2.5">
                    {t.role}
                  </p>
                  <span className="inline-flex items-center gap-1.5 bg-[rgba(42,140,122,0.07)] rounded-md px-3 py-1.5">
                    <Icons.CheckCircle />
                    <span className="font-body text-xs text-hb-accent font-semibold">
                      {t.metric}
                    </span>
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div
            className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #2C3E50, #2A8C7A)",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                // MOBILE DIVIDERS: added `border-b border-white/[0.55] md:border-b-0` for mobile horizontal lines — revert by removing the template literal and restoring plain className="p-10 text-center"
                className={`p-10 text-center${i < 2 ? " border-b border-white/[0.55] md:border-b-0" : ""}`}
                style={{
                  borderRight:
                    i < 2 ? "1px solid rgba(255,255,255,0.55)" : "none",
                }}
              >
                <div className="font-display text-[42px] text-white mb-2">
                  {s.value}
                </div>
                <div
                  className="font-body text-sm uppercase tracking-[0.08em]"
                  style={{ color: "rgba(255,255,255,0.80)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
