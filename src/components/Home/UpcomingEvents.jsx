import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Clock, MapPin } from "lucide-react";
import { upcomingEvents } from "../../constants";



const UpcomingEvents = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
              Explore Our Upcoming  Events
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover cutting-edge knowledge and connect with industry leaders.
              Expand your skills and network with professionals who inspire
              innovation.
            </p>
          </div>
          <Button
            variant="ghost"
            className="hidden md:flex items-center gap-2 bg-primary  text-white border-blue-200 hover:border-blue-300 mt-4 md:mt-0
            transition-colors duration-500"
          >
            View all events
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <Button className="w-full bg-primary">Register Now</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
