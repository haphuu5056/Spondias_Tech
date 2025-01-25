import { features } from "../../constants";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-500 tracking-wide uppercase mb-2">
            What We Offer
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Diverse Learning Opportunities
          </h3>
          <p className="text-xl text-gray-600">
            Choose from our wide range of learning options designed to help you
            succeed
          </p>
        </motion.div>

        <div className=" max-w-5xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 ">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
               
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center text-center"
              
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
