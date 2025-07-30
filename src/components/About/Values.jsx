import { motion } from "framer-motion";
import { Target, Users, BarChart } from "lucide-react";
export const Values = () => {
  const visionMission = [
    {
      title: "Vision",
      description:
        "Spondias vision is to deliver effective and efficient solutions to our clients and to achieve an outstanding quality of work which in turn contributes towards the success of their organization.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Mission",
      description:
        "Spondias' mission: Identify client skill gaps, analyze root causes, and recommend solutions. Enhance project productivity, meeting deadlines for overall organizational success.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Values",
      description:
        "Spondias, a multicultural IT and Mobile App development company, delivers cost-effective solutions for diverse business needs, serving customers with versatile products and services.",
      icon: <BarChart className="w-6 h-6" />,
    },
  ];
  return (
    <section className="py-24 bg-white font-body">
      <div className="container  max-w-5xl">
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
          {visionMission.map((item, index) => (
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
};
