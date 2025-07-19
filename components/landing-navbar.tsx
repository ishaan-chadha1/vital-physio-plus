"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to detect scroll and apply styles
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Our Services", href: "/#services" },
    { name: "Cutting-edge Technology", href: "/#technology" },
    { name: "Conditions We Treat", href: "/#conditions" },
    { name: "Our Team", href: "/#team" },
    { name: "Book Appointment", href: "/#book" },
    { name: "Patient Portal", href: "/portal" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <>
      {/* Main Navbar Container */}
      <nav
        className={`fixed top-0 z-50 flex w-full items-center transition-all duration-300 ease-in-out h-20 ${
          scrolled
            ? "bg-white/50 shadow-lg backdrop-blur-xl"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 md:px-10">
          {/* Logo */}
          {/* UPDATED: Added right padding (pr-6) for spacing */}
          <Link href="/" className="flex-shrink-0 pr-6">
            <Image
              src="/logo.png"
              alt="Vital Physio+ Logo"
              width={80}
              height={42}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-x-4 text-sm font-medium text-gray-800">
            {navLinks.map((item, idx) => (
              <div key={item.name} className="flex items-center gap-x-4">
                <Link href={item.href} className="transition-colors hover:text-teal-600">
                  {item.name}
                </Link>
                {idx < navLinks.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </div>
            ))}
          </div>

          {/* Menu Button */}
          <div className="flex flex-1 justify-end lg:flex-none">
            <button
              className="p-2 text-gray-700 transition-all duration-300 border-2 border-gray-600 rounded-full hover:bg-gray-100 hover:text-teal-600"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Side Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-80 flex-col border-l border-gray-200 bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 transition-colors hover:text-red-500"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-5 text-lg font-medium text-gray-800">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-all hover:pl-2 hover:text-teal-600"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
