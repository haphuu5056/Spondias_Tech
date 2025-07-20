import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

export function AboutJourney() {
  return (
    <section className="relative py-20 overflow-hidden font-body">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />

      <div className="container ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <motion.Badge
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Badge
                variant="solidPrimary"
                className=" tracking-wide px-4 py-2  uppercase rounded-full "
              >
                Our Journey
              </Badge>{" "}
            </motion.Badge>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:leading-[3rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Empowering Future Leaders in{" "}
              <span className="text-primary">Technology & Innovation</span>
            </motion.h2>

            <div className="space-y-6">
              <motion.p
                className="text-lg text-gray-600 leading-relaxed font-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Founded with a vision to bridge the gap between traditional
                education and industry demands, Spondias has evolved into a
                leading technology education hub. Our commitment to excellence
                and practical learning has helped numerous students transform
                their careers and become industry leaders across various tech
                domains.
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed font-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Since our inception, we&apos;ve been dedicated to providing
                cutting-edge technology education that goes beyond traditional
                learning methods. Our approach combines theoretical knowledge
                with hands-on experience, ensuring our students are
                well-prepared for the dynamic tech industry.
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed font-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Through partnerships with industry leaders and a curriculum
                designed by experts, we&apos;ve created an ecosystem where
                innovation thrives and future tech leaders are shaped. Our
                success is measured by the achievements of our graduates who now
                contribute to leading technology companies across Somalia and
                beyond.
              </motion.p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 blur-2xl" />
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-50 rounded-full opacity-50 blur-2xl" />
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>

            {/* Decorative Shapes */}
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-50 rounded-full -z-10" />
            <div className="absolute -left-4 -top-4 w-32 h-32 border-8 border-blue-50 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
