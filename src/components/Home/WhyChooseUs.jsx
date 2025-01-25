import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { whyChoose } from "../../constants";
import { CustomButton } from "../common/CustomButton";

export function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 opacity-30"></div>
        <svg
          className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 opacity-20"
          width="400"
          height="400"
        >
          <circle cx="200" cy="200" r="150" fill="rgba(0, 0, 0, 0.05)" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 opacity-20"
          width="400"
          height="400"
        >
          <circle cx="200" cy="200" r="150" fill="rgba(0, 0, 0, 0.05)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="font-medium text-primary tracking-wider mb-3 ml-2">
              Why Spondias?
            </h2>
            <h2 className="text-5xl tracking-tight font-bold text-primary-body mb-6 leading-[3.2rem]">
              The Spondias
              <br />
              <span className="text-primary">Difference</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              For over a decade, we&apos;ve been empowering students with
              quality education and technical training, setting a benchmark for
              excellence in Somalia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <CustomButton>Contact Us</CustomButton>
              </Link>
              <Link to="/courses">
                <CustomButton variant="outline">Browse Courses</CustomButton>
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-10"
          >
            {whyChoose.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="group"
              >
                <div className="flex gap-6">
                  <div className="relative">
                    <div
                      className="rounded-full p-3  bg-blue-100 flex items-center justify-center
                               "
                    >
                      <feature.icon className="w-6 h-6 text-gray-600 font-light" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-body">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
