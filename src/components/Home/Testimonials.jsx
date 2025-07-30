/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/prop-types

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { testimonials } from "../../constants";
import { motion } from "framer-motion";
import { CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="text-center  mb-16">
          <Badge
            variant="solidPrimary"
            className=" tracking-wide px-4 py-2 mb-4  rounded-full uppercase"
          >
            Student Sucess Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            What Our Students Say About{" "}
            <span className="text-[#319bcb]">Spondias</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers
            with our expert-led programs.
          </p>
        </div>
        <div className="">
          <motion.div
            className="      grid grid-cols-1 md:grid-cols-2 gap-8"
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow hover:shadow-md transition-shadow duration-300 bg-white relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl text-[#319bcb] opacity-10 font-serif">
                  "
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <Avatar className="w-12 h-12 object-cover">
                        <AvatarImage
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-[#319bcb] text-white font-semibold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-black">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
