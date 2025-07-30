import { courses } from "../constants";
import CoursesCard from "../components/home/CoursesCard";
// import { Badge } from "../components/ui/badge";
// import { Filter, Search } from "lucide-react";
// import { Button } from "../components/ui/button";
export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-blue-50 to-white pt-20  px-4 sm:px-6 lg:px-8">
     <section className="relative overflow-hidden py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* <Badge className="bg-[#319BCB]/10 text-[#319BCB] border border-[#319BCB]/20 px-4 py-2 rounded-full font-medium mb-8">
              Course Catalog
            </Badge> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Choose Your {""}
              </span>
              {/* <br /> */}
              <span className="bg-gradient-to-r from-[#319BCB] to-[#2a87b5] bg-clip-text text-transparent inline-block drop-shadow-md py-2">
                Learning Path
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto ">
              Explore our comprehensive collection of industry-leading courses designed to accelerate your tech career.
            </p>

            {/* Search and Filter */}
            {/* <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#319BCB]/20 focus:border-[#319BCB]"
                />
              </div>
              <Button
                variant="outline"
                className="px-6 py-3 rounded-full border-gray-200 hover:border-[#319BCB] hover:text-[#319BCB] transition-colors bg-transparent"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div> */}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#319BCB]/20 to-[#319BCB]/10 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#319BCB]/15 to-[#319BCB]/5 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>

      <section className="py-20 font-body">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CoursesCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
