# Hour Bridge Health — Claude Context

## Project
Next.js 14 App Router + TypeScript + Tailwind CSS v4. Landing page for a physician-founded locum tenens staffing agency.

Dev server runs on port 3000 from `/Users/usmanamjed/Test Hour/hour-bridge-health`.

## Structure
- `src/app/page.tsx` — page root; Navbar lives here (sticky), sections below
- `src/app/globals.css` — Tailwind theme tokens + custom CSS
- `src/components/sections/` — Navbar, Hero, Problem, Solution, SocialProof, HowItWorks, FinalCTA, FAQ, Footer
- `src/components/ui/` — Button, FadeIn, Icons

## Design Tokens (globals.css)
| Token | Hex | Usage |
|---|---|---|
| `hb-text` | `#2C3E50` | Headings, body text |
| `hb-accent` | `#2A8C7A` | Teal — CTAs, highlights |
| `hb-accent-hover` | `#238070` | Hover state |
| `hb-muted` | `#7A8799` | Subtext, nav links |
| `hb-border` | `#E4E0DA` | Dividers (Problem page horizontal rules) |
| `hb-light` | `#FAFAF8` | Light background |
| `hb-light-teal` | `#EBF5F1` | Teal tint backgrounds |
| `hb-dark` | `#1E2D3D` | Dark variant |

Fonts: `font-display` (Inter Tight), `font-body` (Inter). Breakpoint: `950px` for desktop nav.

## Navbar
- Extracted from Hero into `page.tsx` — sticky at top (`sticky top-0 z-50`)
- Background: hero gradient at 92% opacity + `backdrop-blur-md`
- No bottom border currently
- `Navbar.tsx` accepts `animate` and `style` props
- Seam visible between navbar and hero due to 8% opacity difference (unresolved)

## Hero Section
- Background: `linear-gradient(135deg, #FAFAF8 0%, #F0EDE8 40%, #E8E3DB 70%, #E0DBD2 100%)`
- Decorative overlay divs — no `pointer-events: none` (keep in mind for z-index issues)
- Right card heading: "We Know Locums Because We've Lived Them."
- Right card body: physician-trained advisor copy (updated, left-aligned)
- Stats: "50+ STATES COVERED", "25 AVG DAYS TO PLACE", "+XX% MORE EARNINGS"
- Main content div: `py-6`

## Problem Section
- Label + heading: centered (`text-center`), no `max-w` on heading
- Subtext: left-aligned, no `max-w`
- Pain point descriptions: no `max-w` constraint (removed)
- Pain point 01: "You get pitched assignments with imperfect infrastructure."
- Pain point 02: "You're losing income to bloated agency fees."
- Pain point 03: "You're left alone to deal with logistical and administrative nightmares."
- Banner text: "What if your placement advisor actually understood your speciality and preferences — because they were trained by [physicians who were once in your shoes?]" (teal highlight on last phrase)

## Our Difference (Solution) Section
- Label: "Our Difference", heading: "Here's what makes us / different from the rest." (teal)
- Subtext: "Hour Bridge Health was founded to fix what's broken today in locum tenens — starting with who's running placements. Our advisors understand clinical lifestyle intricacies and preferences, striving to provide concierge level service to all our clients."
- Card 1 — "Preference-led Matching": advisors match strictly to preferences (care level, case volume, staff-support, equipment). Pill: "Not just random pitches — locums with guaranteed satisfaction."
- Card 2 — "Higher Take-Home Pay": lowest fee in the industry to facilities. Pill: "Lowest fees in the industry vs. 40% industry take-rate"
- Card 3 — "Nationwide Coverage": placements across all 50 states, concierge model handles admin burdens. Pill: "50 states. One point of contact."

## Social Proof Section
- Label: "Physician Testimonials", heading: "Trusted by specialists who demand more from their agency."
- 3 testimonial cards: Dr. Michael Torres (Interventional Cardiologist), Dr. Sarah Lindgren (Orthopedic Spine Surgeon), Dr. Raj Patel (Gastroenterologist)
- Stats bar: gradient `#2C3E50 → #2A8C7A`, numbers white, labels at 80% opacity, dividers at 55% opacity
- Stats: "500+ Physicians Placed", "30% Avg. Rate Increase", "28 Avg. Days to Placement"
- Mobile: horizontal dividers between stacked stats (border-b border-white/[0.55] md:border-b-0)

## How It Works Section
- Label: "How It Works", heading: "Just three simple steps between / your next high-earning placement." (teal)
- Step 01: "Submit your CV and [preferences in 5 minutes]" — "Upload your detailed background CV and preferences. No lengthy applications or wait times."
- Step 02: "Hop on a call with [your placement advisor]" — "A trained placement concierge reviews your specialty, preferred geography, schedule, and rate expectations."
- Step 03: "Start your [next favourite role]" — "We handle credentialing, insurance, contracts, housing and logistics. You show up to a facility that's ready for you from day one."
- Desktop: teal connecting line between circles. Mobile: gap-y-16 between steps.
- CTA button at bottom: "Submit Your CV" (full width on mobile)

## FAQ Section
- Label: "Common Questions", heading: "Everything you'd ask before trusting a new agency."
- 5 accordion FAQs: subspecialty fit, facility mismatch policy, difference from CompHealth/Weatherby, time to placement (28 days), fees/contracts
- Accordion: expand/collapse with chevron, max-height transition

## Final CTA Section
- Heading: "Stop settling for placements that don't fit your preferences."
- Before/After comparison box (items-start, arrow self-center):
  - Before (white, strikethrough teal): Imperfect infrastructure and staff, Exorbitant (40%+) agency fees, Geographically constrained roles, Low administrative and logistical support, Commoditized placement process
  - After (teal label, white text): Infrastructure preference match, Lowest fees in the industry, Nationwide role coverage, Concierge level administrative support, Personalized placement process
- Two buttons: "Submit Your CV" (primary) and "Talk to an Advisor" (white) — both full width on mobile
- Fine print: "No fees to you. No contracts. No exclusivity. If your placement isn't right, we'll find you a better match — guaranteed."

## Footer Section
- Background: `#1E2D3D`, tagline: "Physician-founded locum tenens agency placing medical specialists at facilities that match their clinical and practice standards."
- For Physicians: How It Works (#how-it-works), Submit Your CV (#), FAQs (#faq)
- Company: About Us (#hero), Our Team (#), Contact Us (#), Privacy Policy (#), Terms and Conditions (#)
- Bottom bar: "© 2026 Hour Bridge Health. All rights reserved." | "Physician-founded. Physician-run."

## Page Order (page.tsx)
Navbar → Hero → Problem → Solution → SocialProof → FAQ → FinalCTA → Footer

## Known Issues
- **Navbar/hero seam** — navbar background is 92% opacity matching hero gradient, but alpha difference creates a faint visible line at the join.
