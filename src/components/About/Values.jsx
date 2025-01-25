import { motion } from "framer-motion";
import { Target, Users, BarChart } from "lucide-react";
export const Values = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-500">Mission</span> & Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guided by our commitment to excellence and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Target className="w-6 h-6" />,
              title: "Mission",
              description:
                "To empower individuals with cutting-edge tech skills for successful careers in the digital age.",
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Vision",
              description:
                "To be the leading force in transforming tech education and creating the next generation of innovators.",
            },
            {
              icon: <BarChart className="w-6 h-6" />,
              title: "Impact",
              description:
                "Making quality tech education accessible and creating positive change in the technology industry.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto shadow-sm">
                <div className="text-blue-500">{item.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
