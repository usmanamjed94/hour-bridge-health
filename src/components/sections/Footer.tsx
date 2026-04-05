import { Icons } from "../ui/Icons";

const columns = [
  {
    title: "For Physicians",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Submit Your CV", href: "#contact" },
      { label: "FAQs", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#hero" },
      { label: "Our Team", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms and Conditions", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-hb-dark px-[6%] pt-[60px] pb-8 border-t border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto flex justify-between items-start flex-wrap gap-10 max-sm:flex-col max-sm:gap-6">
        <div>
          <div className="mb-4">
            <span className="font-display text-lg text-white font-bold">
              Hour Bridge Health
            </span>
          </div>
          <p className="font-body text-sm max-w-[280px] leading-[1.6] text-white/35">
            Physician-founded locum tenens agency placing medical specialists at
            facilities that match their clinical and practice standards.
          </p>
        </div>

        {columns.map((col, i) => (
          <div key={i}>
            <p className="font-body text-[13px] uppercase tracking-[0.08em] mb-4 font-semibold text-white/50">
              {col.title}
            </p>
            {col.links.map((link, j) => (
              <a
                key={j}
                href={link.href}
                className="block font-body text-sm mb-2.5 transition-colors duration-200 hover:text-hb-accent text-white/35"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-[1100px] mx-auto mt-12 pt-6 flex justify-between flex-wrap gap-4 border-t border-white/[0.06]">
        <p className="font-body text-[13px] text-white/20">
          &copy; 2026 Hour Bridge Health. All rights reserved.
        </p>
        <p className="font-body text-[13px] text-white/20">
          Physician-founded. Physician-run.
        </p>
      </div>
    </footer>
  );
}
