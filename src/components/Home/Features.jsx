import { features } from "../../constants";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <Badge
            variant="solidPrimary"
            className="tracking-wide px-4 py-2 uppercase rounded-full mb-4"
          >
            WHAT WE OFFER
          </Badge>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Diverse Learning Opportunities
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our wide range of learning options designed to help you succeed.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center text-center
                           bg-white/90 p-6 rounded-xl shadow-md
                           hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out
                           border border-gray-100
                           relative overflow-hidden
                           rounded-tr-[3rem] rounded-bl-[3rem]"
              >
                {/* Decorative angled element */}
                {/* <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-tr-[3rem] -z-10" /> */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tl from-blue-100 to-transparent rounded-bl-[3rem] -z-10" />

                <div className="w-16 h-16 rounded-full bg-blue-50 text-[#319bcb] flex items-center justify-center mb-6 shadow-inner">
                  {feature.icon && <feature.icon className="w-8 h-8" />}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
