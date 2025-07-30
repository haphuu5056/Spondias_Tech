/* eslint-disable react/no-unescaped-entities */
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

export function AboutHero() {


  return (
    <section className=" relative overflow-hidden py-32 bg-gradient-to-br from-blue-50 to-indigo-50 ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-100/30 blur-3xl" />
      </div>
     <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed">
              Delivering innovative IT solutions with a decade of expertise and commitment to excellence
            </p>
          </div>
    </section>
  );
}
