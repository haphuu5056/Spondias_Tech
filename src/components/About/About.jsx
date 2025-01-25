import { TeamSection } from "./TeamSection";
import PartnersSection from "./Partners";
import { AboutHero } from "./AboutHero";
import CTA from "../Home/CTA";
import Stats from "./Stats";
import { Values } from "./Values";

const JourneySection = () => (

);

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <JourneySection />
      <PartnersSection />
      <Values />
      <Stats />
      <TeamSection />
      <CTA />
    </div>
  );
}
