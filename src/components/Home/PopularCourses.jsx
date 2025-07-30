import { courses } from "../../constants";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import { CustomButton } from "../common/CustomButton";
import CoursesCard from "./CoursesCard";

export function PopularCourses() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-8 ">
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <Badge
            variant="solidPrimary"
            className=" tracking-wide px-4 py-2  uppercase rounded-full "
          >
            Popular Courses
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Our Most Popular Courses          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-body">
            Discover our most popular courses, designed to help you unlock your tech potential and take your career to the next level.          </p>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {courses.slice(0, 3).map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-8 text-center flex justify-center items-center">
          <Link to="/courses" className="mt-4  ">
            <CustomButton className>View All Courses</CustomButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
