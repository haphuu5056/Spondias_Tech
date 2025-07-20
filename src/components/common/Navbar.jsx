import { useState } from "react";
import { logo } from "../../assets/images";
import { Button } from "../ui/button";
import { navItems } from "../../constants";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm font-body">
      <div className="container py-4 flex h-20 items-center justify-between gap-4">
        <a href="/" className="flex items-center space-x-2 flex-shrink-0">
          <img src={logo} alt="Spondias Logo" width={200} className="h-auto" />
        </a>
        <nav className="hidden md:flex md:items-center md:space-x-4 md:flex-grow md:justify-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-md text-lg font-medium transition-colors hover:bg-blue-50 hover:text-primary ${
                pathname === item.href
                  ? "text-primary bg-blue-50"
                  : "text-zinc-800"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center flex-shrink-0">
          <CustomButton variant="solidPrimary" className="shadow-none">
            Enroll Now
          </CustomButton>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
            <CiMenuFries size={32} />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 px-6 h-screen
            bg-white transition-all duration-500 ease-in-out
            animate-fade-in"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-2xl text-zinc-700 hover:text-black transition-colors duration-300"
          >
            <IoClose size={32} />
            <span className="sr-only">Close menu</span>
          </button>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xl font-semibold transition-colors duration-300 hover:text-blue-600 ${
                pathname === item.href ? "text-primary" : "text-zinc-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <Link to="/courses" className="w-full sm:w-auto">
            <CustomButton variant="solidPrimary" className="w-full sm:w-auto">
              Start Learning Now
            </CustomButton>
          </Link>
        </div>
      )}
    </header>
  );
}
