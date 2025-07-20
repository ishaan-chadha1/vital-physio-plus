"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

// Navigation links (with "VitalPhysio+" included)
const navLinks = [
  { name: "VitalPhysio+", href: "/" },
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

  // Update scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar background opacity
  const navBgClass = scrolled
    ? hovered
      ? "bg-white backdrop-blur-xl"
      : "bg-white/10 backdrop-blur-xl"
    : "bg-white";

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 border-b border-gray-200 transition-all duration-300
          ${navBgClass}
          ${scrolled ? "shadow-md" : ""}
        `}
        style={{ transition: "background 0.3s, box-shadow 0.2s" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 flex flex-col items-center pt-4 pb-2">
          {/* TOP: Logo and CTA buttons */}
          <div className="w-full flex flex-row justify-center items-center">
            <div className="flex-1 hidden lg:block" />
            {/* Centered LOGO (no extra branding text below) */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Vital Physio+ Logo"
                width={300}
                height={300}
                priority
                className="object-contain"
              />
            </div>
            {/* CTA BUTTONS and HAMBURGER */}
            <div className="flex-1 flex flex-row justify-end items-center">
              <div className="hidden lg:flex flex-row space-x-3">
                <Link
                  href="/#book"
                  className="bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-800 transition-colors duration-200 text-base transform hover:-translate-y-1 active:scale-95 active:shadow"
                >
                  Book Now
                </Link>
                <Link
                  href="/portal"
                  className="bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-200 text-base transform hover:-translate-y-1 active:scale-95 active:shadow"
                >
                  Patient Portal
                </Link>
              </div>
              <div className="flex lg:hidden ml-4">
                <button
                  className="p-2 border-2 border-gray-600 rounded-full hover:bg-gray-100 transition"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu size={28} />
                </button>
              </div>
            </div>
          </div>
          {/* NAVIGATION LINKS */}
          <div className="w-full mt-6 flex justify-center">
            <div className="hidden lg:flex items-center justify-center gap-0">
              {navLinks.map((item, idx) => (
                <div key={item.name} className="flex items-center">
                  <Link
                    href={item.href}
                    tabIndex={0}
                    className={`
                      relative text-base font-medium transition-colors duration-150 px-5 py-2 group
                      ${item.name === 'VitalPhysio+' 
                        ? "font-extrabold bg-gradient-to-r from-blue-600 via-teal-600 to-orange-500 text-transparent bg-clip-text tracking-wider"
                        : "text-gray-800"}
                      hover:text-teal-600 focus:outline-none
                    `}
                  >
                    {item.name}
                    <span
                      className={`
                        absolute left-2 right-2 -bottom-0.5 h-[2px] rounded
                        bg-gradient-to-r from-blue-700 via-teal-400 to-orange-400
                        scale-x-0 group-hover:scale-x-100 
                        transition-transform duration-300 origin-left
                      `}
                    />
                  </Link>
                  {idx < navLinks.length - 1 && (
                    <span className="text-gray-300 select-none text-base">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 bg-white shadow-2xl border-l border-gray-200 h-full w-72 md:w-80 p-6 transition-transform duration-300 flex flex-col
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-3 flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 transition hover:text-red-500"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        {/* Mobile Logo */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo.png"
            alt="Vital Physio+ Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
        </div>
        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-4 text-base font-medium text-gray-800">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={0}
              className={`
                relative group py-1 transition-colors duration-150
                ${item.name === "VitalPhysio+"
                  ? "font-extrabold bg-gradient-to-r from-blue-600 via-teal-600 to-orange-500 text-transparent bg-clip-text tracking-wider"
                  : "text-gray-800"}
                hover:text-teal-600
              `}
            >
              {item.name}
              <span
                className={`
                  absolute left-1.5 right-1.5 -bottom-0.5 h-[2px] rounded
                  bg-gradient-to-r from-blue-700 via-teal-400 to-orange-400
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300
                  origin-left
                `}
              />
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/#book"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-900 text-white font-semibold py-2 rounded-lg text-center shadow hover:bg-blue-800 transition-colors duration-200 transform hover:-translate-y-1 active:scale-95 active:shadow"
          >
            Book Now
          </Link>
          <Link
            href="/portal"
            onClick={() => setMenuOpen(false)}
            className="bg-teal-600 text-white font-semibold py-2 rounded-lg text-center hover:bg-teal-700 transition-colors duration-200 transform hover:-translate-y-1 active:scale-95 active:shadow"
          >
            Patient Portal
          </Link>
        </div>
      </div>

      {/* Spacer below navbar */}
      <div className="h-[50px] lg:h-[50px]" />
    </>
  );
}
