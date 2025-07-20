import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BackgroundShapes from "../BackgroundShapes";
import { CustomButton } from "../common/CustomButton";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center py-10 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-28 sm:pt-36 md:pt-40 ">
      <BackgroundShapes />
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-flex font-body items-center gap-2 bg-[#E6F2FF] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold">
                <Badge className=" bg-[#1992FF] text-white rounded-full uppercase tracking-tighter ">
                  New
                </Badge>
                <span className="text-xs sm:text-sm font-medium text-primary">
                  Spring 2025 Courses Available
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl  lg:text-7xl font-extrabold tracking-tight text-gray-900  lg:leading-12 mt-4 sm:mt-6 mb-4 sm:mb-6">
                Transform Your Career with{" "}
                <span className="text-primary inline-block">
                  Cutting-Edge Tech Skills
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl sm:max-w-2xl mx-auto font-normal leading-relaxed text-center font-body">
                Master in-demand technologies and accelerate your professional
                growth with our industry-aligned tech courses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 mb-10 sm:mb-16"
            >
              <Link to='/courses' className="w-full sm:w-auto">
                <CustomButton
                  variant="solidPrimary"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Browse Our Courses
                </CustomButton>
              </Link>
              <Link to='/about' className="w-full sm:w-auto">
                <CustomButton variant="outlinePrimary" className="w-full sm:w-auto">
                  Learn More
                </CustomButton>
              </Link>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
