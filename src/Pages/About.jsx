import { AboutHero } from "../components/About/AboutHero";
import { AboutJourney } from "../components/About/AboutJourney";
import Stats from "../components/About/Stats";
import { TeamSection } from "../components/About/TeamSection";
import { Values } from "../components/About/Values";
import CTA from "../components/Home/CTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutJourney /> <Stats />
      <Values />
      <TeamSection />
      <CTA />
    </div>
  );
}
