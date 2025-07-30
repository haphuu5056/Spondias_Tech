import { useState } from "react";
import { logo } from "../../assets/images";
import { Button } from "../ui/button";
import { navItems } from "../../constants";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { CustomButton } from "./CustomButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClass =
    "p-2 relative text-gray-900 font-medium transition-colors hover:text-[#319BCB] hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#319BCB]";
  const activeClass =
    "text-primary underline underline-offset-4 decoration-2 decoration-[#319BCB]";
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm font-body">
      <div className="container py-4 flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <img src={logo} alt="Spondias Logo" width={200} className="h-auto" />
        </Link>
        <nav className="hidden md:flex md:items-center md:space-x-4 md:flex-grow md:justify-center">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center flex-shrink-0">
          <CustomButton as child variant="solidPrimary" className="shadow-none">
            <Link to="/courses">
            Enroll Now
            </Link>
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
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : ""}`
              }
            >
              {item.title}
            </NavLink>
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
