import { TeamSection } from "./TeamSection";
import PartnersSection from "./Partners";
import { AboutHero } from "./AboutHero";
import CTA from "../common/CTA";
import Stats from "./Stats";
import { Values } from "./Values";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <PartnersSection />
      <Values />
      <Stats />
      <TeamSection />
      <CTA />
    </div>
  );
}
