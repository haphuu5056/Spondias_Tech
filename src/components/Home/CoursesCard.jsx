import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Clock, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
const CoursesCard = ({ course }) => {
  return (
    <Card className=" relative overflow-hidden border-0 shadow-lg rounded-bl-[4rem]  transition-all duration-300 transform  bg-white">
      {/* Badge */}
      {course.badge && (
        <div className="absolute top-4 left-4 z-10">
          <Badge
            className={`font-bold text-xs px-3 py-1 ${
              course.badge.type === "new"
                ? "bg-yellow-400 text-black hover:bg-yellow-500"
                : "bg-[#319bcb] text-white hover:bg-[#2a8bb3]"
            }`}
          >
            ★ {course.badge.text}
          </Badge>
        </div>
      )}

      <CardHeader className="pb-4">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl ${course.iconBg} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <course.icon className="w-8 h-8 text-white" />
        </div>

        <CardTitle className="text-xl font-bold text-black group-hover:text-[#319bcb] transition-colors duration-300">
          {course.title}
        </CardTitle>
      </CardHeader>

      <CardContent className=" font-body">
        <CardDescription className="text-gray-600 text-sm leading-relaxed mb-4">
          {course.description}
        </CardDescription>

        <div className="flex items-center justify-between text-sm font-medium text-gray-700 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>

        <div className="text-sm mb-4">
          <span className="font-semibold text-gray-700">Level: </span>
          <span className="text-gray-600">{course.level}</span>
        </div>

        {course.financing && (
          <div className="text-sm text-[#319bcb] font-semibold mb-4">
            {course.financing}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {course.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs border-[#319bcb] text-[#319bcb] bg-blue-50 hover:bg-[#319bcb] hover:text-white transition-colors duration-200 px-3 py-1 rounded-full"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex justify-end ">
          <Button
            asChild
            className="bg-black hover:bg-[#319bcb] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:bg-[#319bcb] inline-flex items-center justify-center gap-2 w-fit"
          >
            <Link to={`/courses/${course.slug}`}>
              Enroll Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoursesCard;
