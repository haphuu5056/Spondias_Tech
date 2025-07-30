// import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#319BCB]/5 via-transparent to-[#319BCB]/5 rounded-3xl"></div>
          <div className="relative bg-white/60 backdrop-blur-sm border border-gray-100 rounded-3xl p-12 shadow-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
              Join thousands of students who have transformed their careers with
              our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#319BCB] hover:bg-[#2a87b5] text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to="/courses">
                  Browse Courses
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="px-8 py-4 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
