/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../../constants";
import { toast } from "sonner";
import { CourseHero } from "./CourseHero";
import { CurriculumSidebar } from "./CurriculumSidebar";
import { CourseModuleContent } from "./CourseModuleContent";
import { CoursePricing } from "./CoursePricing";
import CourseFAQ from "./CourseFAQ";
import EnrollmentModal from "./EnrollmentModal";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";

const CourseInfoPage = () => {
  const [selectedModule, setSelectedModule] = useState(0);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [hasEnrolled, setHasEnrolled] = useState(false);

  const { slug } = useParams();
  const navigate = useNavigate();

  const course = courses.find((course) => course.slug === slug);
  const curriculum = course?.curriculum;

  useEffect(() => {
    if (!course) {
      navigate("/courses");
      return;
    }
    const enrollmentKey = `enrolled_course_${course.slug}`;
    if (localStorage.getItem(enrollmentKey) === "true") {
      setHasEnrolled(true);
    } else {
      setHasEnrolled(false);
    }
  }, [course, navigate, slug]);

  if (!course) {
    return <div>Course not found. Redirecting...</div>;
  }

  const handleFormSubmitSuccess = () => {
    const enrollmentKey = `enrolled_course_${course.slug}`;
    localStorage.setItem(enrollmentKey, "true");
    setHasEnrolled(true);
    setIsEnrollmentOpen(false);
    toast.success("Application Submitted", {
      description:
        "Thank you for your interest! We'll contact you within 24 hours to complete your enrollment.",
      duration: 5000,
    });
  };

  const handleEnrollClick = () => {
    if (hasEnrolled) {
      toast.info("Enrollment Failed", {
        description:
          "You have already enrolled in this course. Please check your email for further instructions.",
        duration: 5000,
        closeButton: true,
      });
    } else {
      setIsEnrollmentOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHero
        course={course}
        onEnrollClick={handleEnrollClick}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge
            variant="solidPrimary"
            className="tracking-wide px-4 py-2 mb-2 uppercase rounded-full "
          >
            CURRICULUM
          </Badge>
          <h2 className="text-4xl font-bold text-black mb-4">
            {curriculum.courseStructure.headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {curriculum.courseStructure.subDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-body">
          <CurriculumSidebar
            selectedModule={selectedModule}
            setSelectedModule={setSelectedModule}
          />

          <CourseModuleContent
            selectedModule={selectedModule}
            curriculum={course.curriculum}
            course={course}
          />
        </div>
      </div>
      <CoursePricing
        course={course}
        onEnrollClick={handleEnrollClick}
      />

      <CourseFAQ course={course} curriculum={curriculum} />

      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onOpenChange={setIsEnrollmentOpen}
        course={course}
        onFormSubmitSuccess={handleFormSubmitSuccess}
        triggerElement={
          <DialogTrigger asChild>
            <Button className="hidden">Open Enrollment Form</Button>
          </DialogTrigger>
        }
      />
    </div>
  );
};

export default CourseInfoPage;
