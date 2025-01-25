import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "../ui/carousel";
import { CourseCard } from "./PopularCoursesCard";

// Using the provided courses data
import { courses } from "../../constants";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function PopularCourses() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <Badge
            variant="secondary"
            className="text-primary mb-4 tracking-wide"
          >
            Featured Courses
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Discover Our Most Popular Learning Paths
          </h2>
          <p className="text-gray-500  mb-8 leading-relaxed">
            Join thousands of students who have transformed their careers
            through our expertly crafted courses. Learn from industry
            professionals and gain practical skills that employers value.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-3">
            {courses.map((course, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-3 sm:basis-1/2 lg:basis-1/3"
              >
                <CourseCard {...course} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="-left-12 md:-left-16" /> */}
          <CarouselNext className="-right-12 md:-right-16" />
        </Carousel>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            size="lg"
            className="bg-blue-500 hover:bg-blue-50 text-white border-blue-200 hover:border-blue-300"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
