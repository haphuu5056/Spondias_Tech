import { Card, CardContent } from "../ui/card";
export const CurriculumSidebar = ({ selectedModule, setSelectedModule }) => {
  return (
         <div className="lg:col-span-1">
            <Card className="sticky top-8 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedModule(0)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      selectedModule === 0
                        ? "bg-[#319bcb] text-white shadow"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <div className="font-semibold">Overview</div>
                  </button>

                  <button
                    onClick={() => setSelectedModule(1)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      selectedModule === 1
                        ? "bg-[#319bcb] text-white shadow"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <div className="font-semibold">Course Structure</div>
                  </button>

                  <button
                    onClick={() => setSelectedModule(2)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      selectedModule === 2
                        ? "bg-[#319bcb] text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <div className="font-semibold">Learning Outcomes</div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>  )
}
