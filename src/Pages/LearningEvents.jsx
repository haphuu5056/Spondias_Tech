import { EventsHero } from "../components/learning-events/EventsHero";
import { EventsList } from "../components/learning-events/EventsList";
import { FAQ } from "../components/learning-events/FAQ";
import { Newsletter } from "../components/learning-events/Newsletter";
import { UpcomingEvents } from "../components/learning-events/UpcomingEvents";

const LearningEvents = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4">
        <EventsHero />
        <EventsList />
        <UpcomingEvents />
        <FAQ />
        <Newsletter />
      </main>
    </div>
  );
};

export default LearningEvents;
