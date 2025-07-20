import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Award, Calendar, Check } from "lucide-react";

export const CourseHero = ({ onEnrollClick, course }) => {
  return (
   <div className="bg-gradient-to-br from-[#319bcb] to-black text-white pt-24">
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-green-400 text-black hover:bg-green-500 font-bold px-4 py-2">
                {course.taglineBadge}
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight">
                  {course.title}{" "}
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
             
                    <Button className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-4 text-lg rounded-xl font-body"
                onClick={onEnrollClick} // This will trigger the check in CourseInfoPage
>
                      Enroll Now
                    </Button>

                <div className="flex items-center gap-2 text-gray-200">
                  <Calendar className="w-5 h-5" />
                  <span>
                    Next start date: <strong>{course.startDate}</strong>
                  </span>
                </div>
              </div>

              {/* Course Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                {course.highlights?.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/10 rounded-xl py-2 px-3"
                  >
                    <highlight.icon className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="font-semibold">{highlight.text}</div>
                      <div className="text-sm text-gray-300">
                        {highlight.subText}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {course.programFeatures && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          {course.programFeatures.title}
                        </h3>
                        <p className="text-gray-300">
                          {course.programFeatures.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {course.programFeatures.points &&
                        course.programFeatures.points.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-400" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>  )
}
