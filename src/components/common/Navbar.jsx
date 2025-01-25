import { useState } from "react";
import { logo } from "../../assets/images";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { CiMenuFries } from "react-icons/ci";

// Reordered navigation items to put Training after About

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Courses", href: "/courses" },
  { title: "Learning Events", href: "/learning-events" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-2 flex h-16 items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="Spondias Logo" width={200} height={80} />
        </a>

        <nav className="hidden md:flex md:items-center md:space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-2 text-xl font-medium transition-colors hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      pathname === item.href ? "text-primary" : "text-zinc-800"
                    }`}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="bg-primary hover:bg-sky-600">Get Started</Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <CiMenuFries size={24} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium hover:text-blue-600 ${
                    pathname === item.href ? "text-primary" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <Button
                className="w-full bg-setext-primary hover:bg-blue-600 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
