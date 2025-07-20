"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/#services" },
  { name: "Conditions We Treat", href: "/#conditions" },
  { name: "Cutting-Edge Technology", href: "/#technology" },
  { name: "About Us", href: "/#about" },
  { name: "Our Team", href: "/#team" },
  { name: "Knowledge Hub", href: "/#knowledge" },
  { name: "FAQs", href: "/#faqs" },
  { name: "Contact Us", href: "/#contact" },
];

export default function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100 transition-all duration-500 ease-in-out ${scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex-1 hidden lg:block"></div>
            
            <div className="flex-1 flex justify-center lg:justify-center">
              <Image
                src="/logo.png"
                alt="Vital Physio+ Logo"
                width={400}
                height={80}
                priority
                className="object-contain h-19 w-auto"
              />
            </div>
            
            <div className="flex-1 flex items-center justify-end space-x-4">
              <div className="hidden lg:flex items-center space-x-3">
                <Link
                  href="/#book"
                  className="bg-blue-900 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-200 text-sm transform hover:-translate-y-0.5"
                >
                  Book Now
                </Link>
                <Link
                  href="/portal"
                  className="bg-teal-600 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transition-all duration-200 text-sm transform hover:-translate-y-0.5"
                >
                  Patient Portal
                </Link>
              </div>

              <button
                className="lg:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`fixed left-0 w-full z-40 border-b border-gray-200 transition-all duration-300 ease-in-out ${scrolled ? `top-0 ${hovered ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/70 backdrop-blur-sm shadow-md'}` : 'top-20 bg-white shadow-sm'}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="max-w-full mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="lg:hidden">
              {scrolled && (
                <button
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu size={20} />
                </button>
              )}
            </div>

            <div className="hidden lg:flex items-center justify-center w-full">
              <div className="flex items-center justify-evenly w-full max-w-6xl px-4">
                <Link
                  href="/"
                  className="relative font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-orange-500 text-transparent bg-clip-text tracking-wide text-base px-4 py-2 group whitespace-nowrap flex-1 text-center"
                >
                  VitalPhysio+
                  <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 via-teal-600 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>

                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-gray-700 hover:text-teal-600 font-medium text-sm px-4 py-2 group transition-colors duration-200 whitespace-nowrap flex-1 text-center"
                  >
                    {item.name}
                    <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:hidden w-10"></div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Vital Physio+ Logo"
              width={200}
              height={60}
              className="object-contain h-12 w-auto"
            />
          </div>

          <nav className="flex flex-col space-y-2 mb-8 flex-1">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-orange-500 text-transparent bg-clip-text text-lg py-2"
            >
              VitalPhysio+
            </Link>
            
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-teal-600 font-medium py-2 border-b border-gray-100 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="space-y-3 pt-4 border-t border-gray-200">
            <Link
              href="/#book"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-blue-900 text-white font-semibold py-3 rounded-lg text-center hover:bg-blue-800 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/portal"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-teal-600 text-white font-semibold py-3 rounded-lg text-center hover:bg-teal-700 transition-colors"
            >
              Patient Portal
            </Link>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 ${scrolled ? 'h-16' : 'h-32'}`} />
    </div>
  );
}
