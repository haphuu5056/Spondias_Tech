import { quickLinks } from "../../constants";
import { useState } from "react";
import { footerLogo } from '../../assets/images/index';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully!", {
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail("");
  };

  return (
    <footer className="bg-gray-950 text-gray-300 py-16 md:py-20 font-body">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Logo & Social */}
        <div className="flex flex-col items-start">
          <img
            src={footerLogo}
            alt="Spondias Tech Logo"
            className="w-52 mb-4 filter brightness-150"
          />
          <p className="text-gray-400 text-base leading-relaxed max-w-xs">
            Empowering careers through expert training and innovative learning.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.facebook.com/spondias1" className="text-gray-400 hover:text-[#319bcb] transition-colors duration-200">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#319bcb] transition-colors duration-200">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/spondias/posts/?feedView=all" className="text-gray-400 hover:text-[#319bcb] transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav>
          <h3 className="text-white font-semibold text-lg mb-5 border-b border-gray-700 pb-2">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="hover:text-[#319bcb] transition-colors text-base text-gray-400"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="flex flex-col items-start w-full">
          <h3 className="text-white font-semibold text-lg mb-5 border-b border-gray-700 pb-2">Stay Updated</h3>
          <p className="text-gray-400 text-base mb-4">
            Subscribe to our newsletter for the latest course updates and tech insights.
          </p>
          <form
            className="flex w-full max-w-xs rounded-lg overflow-hidden border border-gray-700 focus-within:border-[#319bcb] transition-colors"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-gray-800 text-gray-200 px-4 py-2.5 outline-none w-full placeholder-gray-500 text-base"
            />
            <button
              type="submit"
              className="bg-[#319bcb] hover:bg-[#2a8bb3] text-white px-5 py-2.5 font-medium transition-colors duration-300 flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Spondias Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
