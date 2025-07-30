import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "sonner"; 
import Airtable from "airtable";
const base = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
}).base(import.meta.env.VITE_AIRTABLE_BASE_ID);

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const validate = ({ name, email, phone, message }) => {
  const errors = {};
  if (!name.trim()) errors.name = "Name is required";
  if (!email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
  if (!phone.trim()) errors.phone = "Phone is required";
  if (!message.trim()) errors.message = "Message is required";
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill in all required fields correctly.", {
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await base("contact-information").create([
        {
          fields: {
            Name: form.name,
            Email: form.email,
            "Phone Number": form.phone,
            message: form.message,
          },
        },
      ]);

      toast.success("Message sent successfully!", {
        description: "We will get back to you shortly.",
        duration: 5000,
      });
      setForm(initialState);
    } catch (error) {
      console.error("Airtable submission error:", error);
      toast.error("Failed to send message.", {
        description: "Something went wrong. Please try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl pt-16 mx-auto px-4 flex flex-col lg:flex-row gap-12 justify-between">
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

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full font-body">
            {/* Mogadishu */}
            <div className=" rounded-lg p-5 flex flex-col items-center shadow">
              <div className="p-3 bg-blue-100 rounded-full mb-2">
                <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                Mogadishu, Somalia
              </h4>
              <p className="text-gray-600 text-base">+252612019721</p>
            </div>
            {/* India */}
            <div className=" rounded-lg p-5 flex flex-col items-center shadow">
              <div className="p-3 bg-blue-100 rounded-full mb-2">
                <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                India Office
              </h4>
              <p className="text-gray-600 text-base">
                Jagannickpur, Kakinada, India
              </p>
              <p className="text-gray-600 text-base">+91 7997711114</p>
            </div>
            {/* London */}
            <div className=" rounded-lg p-5 flex flex-col items-center shadow md:col-span-2">
              <div className="p-3 bg-blue-100 rounded-full mb-2">
                <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                London Office
              </h4>
              <p className="text-gray-600 text-base">
                20-22 Wenlock Road, London, UK
              </p>
              <p className="text-gray-600 text-base">+44 7947 524538</p>
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
          <form
            className="grid grid-cols-1 gap-4"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={`py-2 px-4 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">{errors.name}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className={`py-2 px-4 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold mb-2">
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={`py-2 px-4 rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className={`py-2 px-4 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-invalid={errors.message ? "true" : "false"}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.message}
                </span>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="py-3 px-6 bg-primary text-white rounded-full hover:bg-blue-700 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
