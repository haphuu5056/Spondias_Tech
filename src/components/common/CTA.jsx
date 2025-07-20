import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-white font-body">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#319bcb] to-black rounded-3xl p-12 text-white">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of successful professionals and start your
            transformation today. Whether you&apos;re looking to upskill, change
            careers, or enhance your knowledge, we have the right resources for
            you.
          </p>
            <Button
            size="lg"
             className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-xl">
                  Browse Courses
                </Button>
        </motion.div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
