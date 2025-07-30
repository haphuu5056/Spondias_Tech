import { CheckCircle, Phone } from "lucide-react";
import meetingImg from "../../assets/images/meet.png";
export function AboutJourney() {
  return (
  <section className="py-20 bg-gray-50">
        <div className="container ">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">About Us</div>
              <h2 className="text-4xl font-light text-gray-900 mb-8 leading-tight">
                The Best IT Solution With 10 Years of Experience
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Spondias, dedicated to personalized service, excels in Corporate Training & Project Consulting.
                Committed to tailored solutions, we leverage cutting-edge technologies for optimal outcomes. Our core
                portfolio includes Project Consulting, SAP, Gap Analysis, Corporate Training & Recruitment Solutions,
                catering to diverse industries globally.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Award Winning</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Professional Staff</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Fair Prices</span>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-2xl font-body">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Call to ask any question</p>
                    <p className="text-xl font-semibold text-primary">+91 7997711112</p>
                  </div>
                </div>
              </div>
            </div>  

            <div className="relative">
              <img
                src={meetingImg}
                alt="Professional business meeting"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
