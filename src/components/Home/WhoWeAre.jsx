import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import {  ArrowRight } from "lucide-react";
import team from "../../assets/images/who.svg";
export function WhoWeAre() {
  return (
    <section className="py-16 bg-white font-body">
      <div className="container ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center">
            <img src={team} alt="Spondias Team" className="rounded-lg  " />
            <div className="absolute -bottom-6 left-14 w-48 h-48 bg-blue-400 rounded-full opacity-10 "></div>
          </div>
          <div className="flex flex-col justify-center items-center lg:flex-none lg:items-start">
            <Badge
              variant="outlinePrimary"
              className=" px-4 py-2 mb-2 uppercase rounded-full "
            >
              ABOUT SPONDIAS
            </Badge>
            <h2 className="text-5xl leading-11 tracking-tight lg:leading-10.5 xl:leading-11 font-bold mb-6 text-center lg:text-left ">
              Shaping the <span className="text-primary">Innovators </span>{" "}
              <br /> of Tomorrow
            </h2>
            <p className="text-gray-600 mb-6 font-body max-w-xl  text-center lg:text-left">
              At Spondias, we believe world-class education should be accessible
              to all. Our mission is to bridge the gap between traditional
              learning and modern industry needs — empowering learners with the
              skills to thrive in today’s tech-driven world.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#319bcb] hover:bg-[#268cb7] text-white mt-4 rounded-full px-6 py-2 font-semibold "
            >
              Learn About Our Mission
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
