import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BackgroundShapes from "../BackgroundShapes";
import { CustomButton } from "../common/CustomButton";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center py-16 overflow-hidden bg-white">
      <BackgroundShapes />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" mb-10"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-sm mb-4">
                <span className="inline-block px-2 py-0.5 bg-primary text-white rounded-full text-xs font-semibold">
                  New
                </span>
                <span className="text-sm font-medium text-gray-600">
                  Spring 2025 Courses Available
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-8">
                Transform Your Career with{" "}
                <span className="text-primary">Cutting-Edge</span> Tech Skills
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
                Master in-demand technologies and accelerate your professional
                growth with our industry-aligned tech courses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <CustomButton rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Courses
              </CustomButton>
              <CustomButton variant="outline">Training Programs</CustomButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-20 flex items-center justify-center gap-8 text-sm text-gray-600"
            >
              <p className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-600" />
                5000+ Students Trained
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-600" />
                95% Success Rate
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-600" />
                20+ Courses Available 
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
