import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BackgroundShapes from "../BackgroundShapes";
import { CustomButton } from "../common/CustomButton";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center py-10 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-28 sm:pt-36 md:pt-44 ">
      <BackgroundShapes />
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 font-exo2">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 sm:mb-8"
            >
              <Badge className="bg-[#319BCB]/10 text-[#319BCB] border border-[#319BCB]/20 px-4 py-2 rounded-full font-medium  transition-shadow duration-200 hover:bg-bg-[#319BCB]/10 ">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 animate-pulse"></span>
                New Spring 2026 Courses Open
              </Badge>
              <h1 className="text-5xl sm:text-6xl  lg:text-7xl font-bold tracking-tight text-gray-900 leading-11 lg:leading-11.5 mt-4 sm:mt-6 mb-6 sm:mb-8">
                Master {""}
                {/* <br /> */}
                <span className="text-primary ">In-Demand </span> Tech Skills
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-xl sm:max-w-2xl mx-auto font- leading-relaxed text-center font-body">
                Elevate your career with expert-led courses in today’s most
                sought-after technologies. 
                
                Learn at your own pace, build
                real-world projects, and connect with a vibrant community of
                innovators shaping the future.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 mb-10 sm:mb-16"
            >
                <CustomButton as child
                  variant="solidPrimary"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  <Link to="/courses">
                  Explore Courses
                  </Link>
                </CustomButton>
              <Link to="/about" className="w-full sm:w-auto">
                <CustomButton
                  variant="outlinePrimary"
                  className="w-full sm:w-auto hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  Learn More
                </CustomButton>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4 text-sm sm:text-base text-gray-700 font-medium"
            >
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-semibold text-gray-800">5,000+</span>
                Students Trained
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse delay-75" />
                <span className="font-semibold text-gray-800">95%</span> Success
                Rate
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse delay-150" />
                <span className="font-semibold text-gray-800">20+</span> Courses
                Available
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
