import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Check,ArrowRight } from "lucide-react";
import team from "../../assets/images/who.svg";
import { CustomButton } from "../common/CustomButton";
export function WhoWeAre() {
  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-4 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center">
            <img src={team} alt="Spondias Team" className="rounded-lg z-0 " />
            <div className="absolute -bottom-6 left-14 w-48 h-48 bg-blue-400 rounded-full opacity-5 z-50"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-yellow-100 rounded-full opacity-5 z-50"></div>
          </div>
          <div className="">
            <Badge
              variant="secondary"
              className="text-primary mb-4 tracking-wide"
            >
              Who We Are
            </Badge>
            <h2 className="text-5xl leading-[3.5rem] font-bold mb-6 ">
              Shaping the <span className="text-primary">Innovators </span>{" "}
              <br /> of Tomorrow
            </h2>
            <p className="text-gray-600 mb-6 font-body">
              At Spondias, we equip learners with cutting-edge knowledge,
              hands-on experience, and the confidence to excel in the tech
              industry.
            </p>
            <ul className="space-y-2 text-gray-600 mb-8 font-body">
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-blue-500" />
                Customizable learning paths{" "}
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-blue-500" />
                Guidance from industry leaders{" "}
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-blue-500" />
                Comprehensive support
              </li>
            </ul>
            <Link to="/about">
              <CustomButton>
                Learn About Our Mission
                <ArrowRight className="w-4 h-4 ml-2" />
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
