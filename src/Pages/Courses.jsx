import { courses } from "../constants";
import CoursesCard from "../components/home/CoursesCard";
export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 pt-44  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-32">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Discover Your
            <span className="text-primary">  Perfect Course</span>
          </h1>
          <p className=" sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-body">
            Unlock your potential with industry-aligned programs in Data
            Analytics, AI, Full Stack Development, and more. Find the perfect
            path to elevate your career.
          </p>
        </div>

        <hr className="my-12 border-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-body">
          {courses.map((course) => (
            <CoursesCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
