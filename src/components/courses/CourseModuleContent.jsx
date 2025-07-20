import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Globe, BookOpen, CheckCircle, Lock } from "lucide-react";
export const CourseModuleContent = ({ selectedModule, curriculum, course }) => {
  return (
    <div className="lg:col-span-2 bg-gray-100 rounded-xl p-8 shadow">
      {selectedModule === 0 && (
        <div className="space-y-8">
          <h3 className="text-3xl font-extrabold text-gray-900 pb-4 border-b-2 border-[#319bcb] inline-block mb-4">
            Course Overview
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {curriculum.courseOverview.fullDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <Clock className="w-7 h-7 text-[#319bcb] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">
                  Duration
                </h4>
                <p className="text-gray-700">{course.duration}</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <Globe className="w-7 h-7 text-[#319bcb] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">
                  Format
                </h4>
                <p className="text-gray-700">
                  {curriculum.courseOverview.courseFormat}
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <BookOpen className="w-7 h-7 text-[#319bcb] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">
                  Time Commitment
                </h4>
                <p className="text-gray-700">
                  {curriculum.courseOverview.timeCommitment}
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <CheckCircle className="w-7 h-7 text-[#319bcb] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">
                  Prerequisites
                </h4>
                <p className="text-gray-700">
                  {curriculum.courseOverview.prerequisites}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedModule === 1 && (
        <div className="space-y-6">
          <h3 className="text-3xl font-extrabold text-gray-900 pb-4 border-b-2 border-[#319bcb] inline-block mb-4">
            Course Structure
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {curriculum.courseStructure.modules.map((module, index) => (
              <AccordionItem
                key={index}
                value={`module-${index}`}
                className={`bg-white rounded-xl border shadow-sm ${index > 1 ? "opacity-50 pointer-events-none" : ""}`}
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-black hover:text-[#319bcb] hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#319bcb] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    {module.title}
                   
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 text-lg mb-4">
                    {module.description}
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {module.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-[#319bcb]" />
                        <span className="text-gray-900 text-lg">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex items-center justify-center gap-3 mt-6 bg-[#e6f7fd] text-[#319bcb] rounded-xl px-4 py-3">
  <Lock className="w-5 h-5 font-body" />
  <span className="text-sm font-medium tracking-wide">enroll the course to unlock this content</span>
  <div className="flex gap-1">
    <span className="w-1.5 h-1.5 bg-[#319bcb] rounded-full opacity-30 animate-pulse" />
    <span className="w-1.5 h-1.5 bg-[#319bcb] rounded-full opacity-30 animate-pulse delay-200" />
    <span className="w-1.5 h-1.5 bg-[#319bcb] rounded-full opacity-30 animate-pulse delay-400" />
  </div>
</div>
        </div>
      )}
      {selectedModule === 2 && (
        <div className="space-y-6">
          <h3 className="text-3xl font-extrabold text-gray-900 pb-4 border-b-2 border-[#319bcb] inline-block mb-4">
            Learning Outcomes
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {curriculum.learningOutcomes.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.learningOutcomes.outcomes.map(
              (outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-8 h-8 bg-[#319bcb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {outcome}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
