import Hero from "../components/Home/Hero";
import { WhoWeAre } from "../components/Home/WhoWeAre";
import { WhyChooseUs } from "../components/Home/WhyChooseUs";
import {PopularCourses} from "../components/Home/PopularCourses";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import Testimonials from "../components/Home/Testimonials";
import CTA from "../components/Home/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <WhyChooseUs />
      <PopularCourses />
      <Testimonials />
      <UpcomingEvents />
      <CTA />
    </div>
  );
};

export default Home;
