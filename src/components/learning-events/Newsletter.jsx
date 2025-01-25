import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Newsletter = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-center mt-16 py-16"
  >
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Can't Find What You're Looking For?
    </h2>
    <p className="text-xl text-gray-600 mb-8">
      We're constantly adding new events. Sign up for our newsletter to stay
      updated!
    </p>
    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
      Subscribe to Newsletter
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  </motion.div>
);
