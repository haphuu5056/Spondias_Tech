import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { Badge } from "../ui/badge";
import { testimonials } from "../../constants";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 text-blue-500">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold mb-6">Hear From Our Graduates</h2>
          <p className="text-gray-600">
            Discover how Spondias Tech has transformed careers and empowered
            professionals. See the impact through the voices of our alumni.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${currentIndex * 33.33}%` }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-none w-full md:w-[calc(33.33%-16px)] p-6 bg-blue-50/30"
              >
                <p className="text-gray-600 mb-6 min-h-[80px]">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-gray-200 hover:bg-blue-500 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            onClick={nextSlide}
            className="rounded-full bg-blue-500 hover:bg-sky-700"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
