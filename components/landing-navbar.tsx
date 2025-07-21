"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

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
  const scrollTimeoutRef = useRef(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    lastScrollY.current = currentScrollY;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const threshold = scrolled ? 60 : 100;
    const shouldBeScrolled = currentScrollY > threshold;

    if (shouldBeScrolled !== scrolled) {
      scrollTimeoutRef.current = setTimeout(() => {
        setScrolled(shouldBeScrolled);
      }, 50);
    }
  }, [scrolled]);

  useEffect(() => {
    let ticking = false;

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <>
      {/* Main Header Section */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 will-change-transform transition-all duration-700 ease-in-out ${
          scrolled
            ? "transform -translate-y-full opacity-0 pointer-events-none"
            : "transform translate-y-0 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex-1 hidden lg:block" />

            <div className="flex-1 flex justify-center">
              <Image
                src="/logo.png"
                alt="Vital Physio+ Logo"
                width={400}
                height={80}
                priority
                className="object-contain h-18 w-auto"
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
      </header>

      {/* Navigation Section - Moves to Top When Header Slides Away */}
      <nav
        className={`fixed left-0 w-full z-40 border-b border-gray-200 will-change-transform transition-all duration-700 ease-in-out ${
          scrolled
            ? `top-0 ${
                hovered
                  ? "bg-white/95 backdrop-blur-lg shadow-xl"
                  : "bg-white/20 backdrop-blur-sm shadow-md"
              }`
            : "top-20 bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
        onMouseEnter={() => scrolled && setHovered(true)}
        onMouseLeave={() => scrolled && setHovered(false)}
      >
        <div className="max-w-full mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="lg:hidden flex items-center">
              {scrolled && (
                <button
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu size={20} />
                </button>
              )}
            </div>

            <div className="h-4 hidden lg:flex items-center justify-center w-full">
              <div className="flex items-center justify-center w-full max-w-6xl">
                <Link
                  href="/"
                  className="relative px-4 py-2 group whitespace-nowrap mr-8 flex items-center"
                >
                  <Image
                    src="/VitalPhysio+.png"
                    alt="VitalPhysio+ Logo"
                    width={100}
                    height={100}
                    className="object-contain h-4 w-auto transition-opacity duration-200 group-hover:opacity-90"
                  />
                  <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>

                <div className="flex items-center space-x-1">
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative text-gray-700 hover:text-teal-600 font-medium text-sm px-3 py-2 group transition-colors duration-200 whitespace-nowrap"
                    >
                      {item.name}
                      <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:hidden w-10" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-60 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
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
                className="text-gray-700 hover:text-teal-600 font-medium py-3 px-2 border-b border-gray-100 transition-colors duration-200 hover:bg-gray-50 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="space-y-3 pt-4 border-t border-gray-200">
            <Link
              href="/#book"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-blue-900 text-white font-semibold py-3 rounded-lg text-center hover:bg-blue-800 transition-colors duration-200"
            >
              Book Now
            </Link>
            <Link
              href="/portal"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-teal-600 text-white font-semibold py-3 rounded-lg text-center hover:bg-teal-700 transition-colors duration-200"
            >
              Patient Portal
            </Link>
          </div>
        </div>
      </aside>

      {/* Content Spacer */}
      <div
        className="w-full transition-all duration-700 ease-in-out"
        style={{
          height: scrolled ? "64px" : "144px",
        }}
      />
    </>
  );
}
