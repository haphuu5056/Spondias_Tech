import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventCard } from "./EventCard";
import { events } from "../../constants";

export const EventsList = () => (
  <Tabs defaultValue="all" className="mb-12">
    <TabsList className="flex justify-center space-x-2 mb-8">
      <TabsTrigger value="all">All Events</TabsTrigger>
      <TabsTrigger value="workshop">Workshops</TabsTrigger>
      <TabsTrigger value="seminar">Seminars</TabsTrigger>
      <TabsTrigger value="other">Other Events</TabsTrigger>
    </TabsList>
    {["all", "workshop", "seminar", "other"].map((tab) => (
      <TabsContent key={tab} value={tab}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events
            .filter((event) => tab === "all" || event.type === tab)
            .map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
        </div>
      </TabsContent>
    ))}
  </Tabs>
);
