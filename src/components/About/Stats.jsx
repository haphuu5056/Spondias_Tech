import { motion } from "framer-motion";
const Stats = () => {
  const stats = [
    { number: "5K+", label: "Students Enrolled" },
    { number: "7+", label: "Years of Excellence" },
    { number: "500+", label: "Training Modules" },
    { number: "20+", label: "Global Reach" },
  ]
  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50/50 font-body">
      <div className="container ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming lives through education and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl font-bold text-primary">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-gray-700">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-sm max-w-[250px] mx-auto">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
