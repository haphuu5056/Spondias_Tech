import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { whyChoose } from "../../constants";
import { CustomButton } from "../common/CustomButton";
import { Badge } from "../ui/badge";

export function WhyChooseUs() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-blue-100 opacity-50"></div>
        <svg
          className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3 opacity-15"
          width="600"
          height="600"
          viewBox="0 0 600 600"
        >
          <circle
            cx="300"
            cy="300"
            r="250"
            fill="currentColor"
            className="text-blue-200"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 opacity-15"
          width="600"
          height="600"
          viewBox="0 0 600 600"
        >
          <circle
            cx="300"
            cy="300"
            r="250"
            fill="currentColor"
            className="text-blue-200"
          />
        </svg>
        <div className="absolute top-0 left-1/2 w-px h-full bg-blue-200 transform -skew-y-12 opacity-20 hidden lg:block"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-full bg-blue-200 transform skew-y-12 opacity-20 hidden lg:block"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-start "
        >
          <motion.div className="max-w-xl lg:pr-12 ">
            <Badge
              variant="solidPrimary"
              className=" tracking-wide px-4 py-2 mb-2 uppercase rounded-full "
            >
              Why Choose spondias?
            </Badge>
            <h2 className="text-4xl sm:text-5xl tracking-tight font-extrabold text-gray-900 mb-6 lg:leading-11">
              Your Success is Our
              <br />
              <span className="text-primary"> Priority</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed ">
              Discover what makes Spondias the preferred choice for
              professionals looking to advance their careers in technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <CustomButton variant="solidPrimary" className="">
                  Contact Us
                </CustomButton>
              </Link>
              <Link to="/courses">
                <CustomButton variant="outlinePrimary">
                  Browse Courses
                </CustomButton>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {whyChoose.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform font-body"
              >
                {/* Decorative gradient blob */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-tr from-blue-200 via-blue-100 to-white rounded-full blur-2xl opacity-40 pointer-events-none"></div>
                {/* Decorative lines */}
                <div className="absolute bottom-0 left-0 w-2/3 h-1 bg-gradient-to-r from-blue-200 to-transparent rounded-full opacity-30"></div>
                <div className="flex flex-col items-start gap-4 relative z-10">
                  <div className="relative">
                    <div
                      className="rounded-xl p-4 bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300"
                    >
                      <feature.icon className="w-8 h-8 text-primary transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1 mt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
