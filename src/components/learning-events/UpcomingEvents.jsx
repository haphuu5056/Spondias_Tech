import { Calendar, Clock, MapPin } from "lucide-react";

import { upcomingEvents } from "../../constants";
import { Button } from "../ui/button";

export const UpcomingEvents = () => (
  <section className="bg-gray-50 py-10">
    <div className="container mx-auto px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Upcoming Learning Events
      </h2>
      <p className="mt-4 text-center text-gray-600 mb-16">
        Join our workshops and seminars to enhance your skills
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className="min-w-[300px] flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-40">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 right-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                {event.type}
              </span>
            </div>
            <div className="p-4">
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
               <Button className="w-full bg-blue-500 hover:bg-blue-600">
                               Register Now
                             </Button>
            </div>
          </div>
        ))}
    
      </div>
    </div>
  </section>
);
