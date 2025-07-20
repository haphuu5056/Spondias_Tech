/* eslint-disable react/no-unescaped-entities */
import { CheckCircle, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
export const CoursePricing = ({ course, onEnrollClick }) => {
  const price = parseInt(course.discountPrice?.replace(/,/g, "").split(".")[0]);
  const actualPrice = parseInt(course.price?.replace(/,/g, "").split(".")[0]);
  const discount = actualPrice - price;
  const curriculum = course?.curriculum;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-[#319bcb] uppercase tracking-wide mb-3">
          Special Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Your Journey to Tech Success
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Next cohort starts: {curriculum.courseOverview.nextStartDate}
        </p>
        <div className="max-w-5xl mx-auto bg-gray-50 border border-gray-100 rounded-3xl shadow-xl overflow-hidden md:flex  ">
          <div className="p-8 md:p-10 text-left bg-gray-50 md:w-1/2 ">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What Makes This Program Special
            </h3>
            <ul className="space-y-3">
              {course.specialFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-[#319bcb]" />
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 md:p-10 bg-white md:w-1/2 flex flex-col justify-between items-center text-center font-poppins">
            <div className="inline-flex items-center bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Sparkles className="w-4 h-4 mr-2 font-poppins" />
              Early Bird Special
            </div>
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="text-2xl text-red-400 line-through font-medium">
                  ${actualPrice}
                </span>
                <span className="text-4xl md:text-5xl font-semibold text-black ">
                  ${price}
                </span>
              </div>
              <p className="text-gray-600 font-medium ">
                One-time payment • No hidden fees
              </p>
            </div>

            {/* Value Highlights */}
            <div className="bg-sky-50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 text-sky-700 font-semibold mb-2">
                <CheckCircle className="w-5 h-5" />
                <span>You're saving ${discount}!</span>
              </div>
              <p className="text-sm text-gray-600">
                Plus: Free career coaching & lifetime community access
              </p>
            </div>

            <Button
              className="bg-[#319bcb] hover:bg-black text-white text-lg font-semibold py-3 rounded-xl transition-all duration-300 shadow-none"
              onClick={onEnrollClick}
            >
              Start Your Journey
            </Button>

            <p className="text-xs text-gray-500 mt-5">
              💳 Flexible payment plans available • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
