import { AboutHero } from "../components/about/AboutHero";
import { AboutJourney } from "../components/about/AboutJourney";
import { TeamSection } from "../components/about/TeamSection";
import { Values } from "../components/about/Values";
import CTA from "../components/common/CTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <AboutJourney /> 
      {/* <Stats /> */}
      <Values />
      <TeamSection />
      <CTA />
    </div>
  );
}
