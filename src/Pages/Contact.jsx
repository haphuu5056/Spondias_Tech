import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-6 justify-between">
        {/* Contact Details */}
        <motion.div
          className="lg:w-1/2 flex flex-col items-center lg:items-start mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            Get in Touch
          </h2>
          <p className="text-base text-gray-600 mb-8 text-center lg:text-left">
            We’re here to help and answer any questions you might have. <br />
            Reach out to us and we’ll respond as soon as we can.
          </p>

          {/* Email */}
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-start mb-8">
            <div className="p-3 bg-blue-100 rounded-full mb-1">
              <FaEnvelope className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-xl lg:text-lg font-semibold text-gray-800">
                Email Us
              </h4>
              <p className="text-base text-gray-600 mt-1">
                <a
                  href="mailto:contact@spondias.tech"
                  className="text-blue-600 hover:underline"
                >
                  contact@spondias.tech
                </a>
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-start mb-8">
            <div className="p-3 bg-blue-100 rounded-full mb-1">
              <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-xl lg:text-lg  font-semibold text-gray-800">
                Our Location
              </h4>
              <p className="text-lg  lg:text-base text-gray-600 mt-1 text-wrap">
                Adani Tower2 Shaqalaha street <br /> Mogadishu, Somali
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-start mb-8">
            <div className="p-3 bg-blue-100 rounded-full mb-1">
              <FaPhoneAlt className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-xl lg:text-lg  font-semibold text-gray-800">
                Call Us
              </h4>
              <p className="text-lg text-gray-600 mt-1">+252 61 123 4567</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-blue-100 p-6 rounded-lg shadow-lg lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="py-3 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
