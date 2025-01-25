
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="inline-block"
            >
              <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm text-gray-600">About Spondias</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900"
            >
              Empowering Future{" "}
              <span className="text-blue-500">Tech Leaders</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              We transform passionate learners into skilled programmers through
              expert-led training and hands-on experience.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Link to="/courses">
                <Button
                  size="lg"
                  className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-full text-lg"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
