# Hour Bridge Health — Audit

## Fixed

| # | File(s) | Fix |
|---|---------|-----|
| 1 | `FAQ.tsx` | Accordion max-height is now dynamic — reads `scrollHeight` from a refs array instead of a hardcoded `300px` cap |
| 2 | `FadeIn.tsx` | Respects `prefers-reduced-motion` — skips the IntersectionObserver and shows content immediately if the OS setting is on |
| 3 | `FadeIn.tsx` | `dirs` transform map moved to module scope — was recreated on every render |
| 4 | `Hero.tsx` | `setTimeout(..., 100)` replaced with `requestAnimationFrame` + cleanup |
| 5 | `Hero.tsx` | Decorative overlay inline gradient strings moved to `.hero-overlay-grid`, `.hero-overlay-tr`, `.hero-overlay-bl` classes in `globals.css` |
| 6 | `Hero.tsx` | Added `id="hero"` to the section element |
| 7 | `Navbar.tsx` | Logo `href` changed from `#` to `#hero` |
| 8 | `Navbar.tsx` | Added `aria-expanded={menuOpen}` to the hamburger button |
| 9 | `FAQ.tsx` | Added `aria-expanded={isOpen}` to each accordion button |
| 10 | `Button.tsx` | Added `type="button"` to the `<button>` element — previously defaulted to `type="submit"` |
| 11 | `Footer.tsx` | Added `max-sm:flex-col max-sm:gap-6` — columns now stack cleanly at 320px |
| 12 | `Footer.tsx` | Replaced all `style={{ color: "rgba(255,255,255,X)" }}` with Tailwind opacity modifiers (`text-white/35`, `/50`, `/20`, `border-white/[0.06]`); `bg-hb-dark` replaces inline hex background |
| 13 | `Footer.tsx` | "Submit Your CV" dead link corrected from `#` to `#contact` |
| 14 | `SocialProof.tsx` | Star rating group now has `role="img" aria-label="5 out of 5 stars"` |
| 15 | `SocialProof.tsx`, `Solution.tsx` | `text-hb-primary-light` replaced with `text-hb-accent` |
| 16 | `Icons.tsx` | `aria-hidden="true"` added to every icon |
| 17 | `Icons.tsx` | Branded/feature icons (Stethoscope, DollarSign, MapPin, CheckCircle) standardised to `strokeWidth="1.5"`; ChevronDown corrected from size 20 → 18 to match other UI icons |
| 18 | `Solution.tsx` | `p-[40px_32px]` replaced with `py-10 px-8` |
| 19 | `globals.css` | Removed duplicate/unused tokens: `hb-primary-light`, `hb-secondary`, `hb-primary-mid` (all were duplicates of `hb-accent` or never used) |
| 20 | `globals.css` | Verified: `--breakpoint-950: 950px` in `@theme` is valid Tailwind v4 — `950:` prefix resolves correctly, no change needed |

---

## Remaining

| # | File(s) | Issue |
|---|---------|-------|
| 1 | `Hero.tsx` | `+XX%` is a placeholder stat — needs a real value before launch |
| 2 | `Hero.tsx` | Trust bar logos all link to `href="#"` — either point to real pages or remove the anchor |
| 3 | `Footer.tsx` | "Our Team", "Contact Us", "Privacy Policy", "Terms and Conditions" all link to `#` — need real destinations or placeholder pages |
| 4 | `FinalCTA.tsx` | Both CTA buttons link to `#contact` which is the same section — circular navigation |
| 5 | `Hero.tsx` | Marquee has no pause-on-hover — continuously moving content is a WCAG 2.1 SC 2.2.2 failure |
| 6 | `FinalCTA.tsx` | Strikethrough "Before" items have no screen-reader annotation — a `sr-only` label would clarify they represent old pain points |
| 7 | `FinalCTA.tsx` | Fine print sits at 45% opacity on a dark background — likely fails WCAG AA contrast |
| 8 | `Footer.tsx` | `text-white/35` on `#1E2D3D` is likely below the 4.5:1 WCAG AA ratio for small text — needs a contrast check |
| 9 | `page.tsx` | Navbar/hero seam still unresolved — 92% opacity navbar over 100% opaque hero creates a faint visible line at the join |
