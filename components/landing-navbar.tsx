"use client";

import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "Conditions We Treat", href: "/conditions" },
  { name: "Cutting-Edge Technology", href: "/technology" },
  { name: "About Us", href: "/about" },
  // { name: "Our Team", href: "/team" },
  { name: "Knowledge Hub", href: "/knowledge" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

export default function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    lastScrollY.current = currentScrollY;

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    const threshold = scrolled ? 80 : 120;
    const shouldBeScrolled = currentScrollY > threshold;

    if (shouldBeScrolled !== scrolled) {
      scrollTimeoutRef.current = window.setTimeout(() => {
        setScrolled(shouldBeScrolled);
      }, 100);
    }
  }, [scrolled]);

  useEffect(() => {
    let ticking = false;
    const throttled = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", throttled, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttled);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [handleScroll]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "consultation" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (scrolled) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setHovered(true);
    }
  }, [scrolled]);

  const handleMouseLeave = useCallback(() => {
    if (scrolled) {
      hoverTimeoutRef.current = window.setTimeout(() => {
        setHovered(false);
      }, 150);
    }
  }, [scrolled]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Main Header Section (desktop initial) */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 will-change-transform transition-all duration-500 ease-in-out ${
          scrolled
            ? "transform -translate-y-full opacity-0 pointer-events-none"
            : "transform translate-y-0 opacity-100"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between py-4">
            <div className="flex-1 hidden lg:block" />
            <div className="flex-1 flex justify-center">
              <Image
                src="/logo.png"
                alt="Vital Physio+ Logo"
                width={800}
                height={160}
                priority
                className="object-contain h-50 w-auto"
              />
            </div>
            <div className="flex-1 flex items-center justify-end space-x-6">
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  type="button"
                  data-cal-namespace="consultation"
                  data-cal-link="vital-physio-plus/consultation"
                  data-cal-config='{"layout":"month_view"}'
                  className="bg-blue-900 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-200 text-base transform hover:-translate-y-0.5"
                >
                  Book Now
                </button>
                <Link
                  href="/portal"
                  className="bg-teal-600 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transition-all duration-200 text-sm transform hover:-translate-y-0.5"
                >
                  Patient Portal
                </Link>
              </div>
              <button
                className="lg:hidden p-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar (desktop persistent) - Only shows when scrolled */}
      {scrolled && (
        <nav
          className={`fixed left-0 w-full z-40 border-b border-gray-200 will-change-transform transition-all duration-500 ease-in-out top-0 ${
            hovered
              ? "bg-white/98 backdrop-blur-lg shadow-xl py-2"
              : "bg-white/30 backdrop-blur-sm shadow-md py-1"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex items-center justify-between">
              {/* Left spacer to balance right menu button on mobile */}
              <div className="lg:hidden w-12" />

              <div className="hidden lg:flex items-center justify-center w-full">
                <div className="flex items-center justify-center w-full max-w-7xl">
                  <Link
                    href="/"
                    className="relative px-4 py-1 group whitespace-nowrap mr-8 flex items-center"
                  >
                    <div className="relative w-72 h-36 overflow-hidden">
                      <Image
                        src="/logo.png"
                        alt="VitalPhysio⁺ Logo"
                        width={720}
                        height={360}
                        className={`absolute inset-0 object-contain w-full h-full transition-all duration-500 ease-in-out ${
                          hovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
                        }`}
                      />
                      <Image
                        src="/logo1.png"
                        alt="VitalPhysio⁺ Logo Hover"
                        width={720}
                        height={360}
                        className={`absolute inset-0 object-contain w-full h-full transition-all duration-500 ease-in-out ${
                          hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
                        }`}
                      />
                    </div>
                    <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </Link>
                  <div className="flex items-center space-x-1">
                    {navLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`relative text-gray-700 hover:text-teal-600 font-medium px-3 py-1 group transition-all duration-200 whitespace-nowrap ${
                          hovered ? "text-sm" : "text-xs"
                        }`}
                      >
                        {item.name}
                        <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Menu button moved to right side on mobile */}
              <div className="lg:hidden flex items-center">
                <button
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu size={20} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Full-Screen Popup Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[70]">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-0 bg-white flex flex-col p-8 pt-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/logo.png"
                alt="Vital Physio+ Logo"
                width={220}
                height={66}
                className="h-14 w-auto object-contain"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-3 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={30} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 mb-10">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-left px-6 py-4 rounded-lg font-medium text-gray-700 bg-gray-50 hover:bg-teal-50 hover:text-teal-700 transition-colors text-lg"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <button
                type="button"
                data-cal-namespace="consultation"
                data-cal-link="vital-physio-plus/consultation"
                data-cal-config='{"layout":"month_view"}'
                className="bg-blue-900 text-white font-semibold py-4 px-6 rounded-lg shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-200 text-base transform hover:-translate-y-0.5"
              >
                Book Now
              </button>
              <Link
                href="/portal"
                onClick={() => setMenuOpen(false)}
                className="w-full bg-teal-600 text-white font-semibold py-4 rounded-lg text-center hover:bg-teal-700 transition-colors text-base"
              >
                Patient Portal
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer (retain existing layout offset) */}
      <div
        className="w-full transition-all duration-500 ease-in-out"
        style={{ height: scrolled ? "144px" : "230px" }}
      />
    </>
  );
}
