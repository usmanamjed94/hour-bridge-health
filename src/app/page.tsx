import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-md" style={{ background: "linear-gradient(135deg, rgba(250,250,248,0.92) 0%, rgba(240,237,232,0.92) 40%, rgba(232,227,219,0.92) 70%, rgba(224,219,210,0.92) 100%)" }}>
        <Navbar animate />
      </div>
      <Hero />
      <Problem />
      <Solution />
      <SocialProof />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
