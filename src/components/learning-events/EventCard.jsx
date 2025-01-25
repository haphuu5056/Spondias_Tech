import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, Clock, MapPin, Users, Presentation } from "lucide-react";

export const EventCard = ({ event }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-48">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <Badge className="absolute top-2 right-2 bg-blue-600 text-white">
        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
      </Badge>
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {event.title}
      </h3>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <div className="space-y-2 text-sm text-gray-500">
        <EventDetail
          icon={<Calendar className="w-4 h-4" />}
          text={event.date}
        />
        <EventDetail icon={<Clock className="w-4 h-4" />} text={event.time} />
        <EventDetail
          icon={<MapPin className="w-4 h-4" />}
          text={event.location}
        />
      </div>
    </CardContent>
    <CardFooter className="bg-gray-50 border-t p-4">
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Register Now
      </Button>
    </CardFooter>
  </Card>
);

const EventDetail = ({ icon, text }) => (
  <div className="flex items-center">
    <span className="mr-2">{icon}</span>
    <span>{text}</span>
  </div>
);
