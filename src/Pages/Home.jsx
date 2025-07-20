import Hero from "../components/home/Hero";
import { WhoWeAre } from "../components/home/WhoWeAre";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { PopularCourses } from "../components/home/PopularCourses";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/common/CTA";
import Features from "../components/home/Features";
import FaqSection from "../components/home/FaqSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Features />
      <PopularCourses />
      <WhyChooseUs />

      <Testimonials />
      <FaqSection />
      <CTA />
    </div>
  );
};

export default Home;
