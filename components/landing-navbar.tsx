"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 fixed top-0 z-50 h-28 flex items-center">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Vital Physio+ Logo"
              width={150}
              height={70}
              className="object-contain max-h-[64px]"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex-1 flex items-center justify-center text-blue-800 text-base font-semibold space-x-6">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/#about" },
              { name: "Conditions", href: "/#conditions" },
              { name: "Services", href: "/#services" },
              { name: "Why VitalPhysio+", href: "/#why-us" },
              { name: "FAQs", href: "/faq" },
              { name: "Resources", href: "/#resources" },
              { name: "Contact", href: "/#contact" },
            ].map((item, idx, arr) => (
              <div key={item.name} className="flex items-center space-x-6">
                <Link href={item.href} className="hover:underline">
                  {item.name}
                </Link>
                {idx < arr.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </div>
            ))}
          </div>

          {/* Always-visible Menu Button */}
          <div className="ml-4">
            <button
              className="text-blue-800 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Side Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-50 border-l border-gray-200 flex flex-col p-6 transition-all duration-300 ease-in-out">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-blue-800 hover:text-red-500 transition"
            >
              <X size={26} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-4 text-blue-800 font-semibold text-base">
            <Link
              href="/"
              className="hover:text-blue-600 hover:pl-2 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-600 hover:pl-2 transition"
            >
              About Us
            </Link>
            <Link
              href="/conditions"
              className="hover:text-blue-600 hover:pl-2 transition"
            >
              Conditions
            </Link>
            <Link
              href="/rehabilitation"
              className="hover:text-blue-600 hover:pl-2 transition"
            >
              Rehabilitation
            </Link>
            <Link
              href="/rehabilitation"
              className="hover:text-blue-600 hover:pl-2 transition"
            >
              Services
            </Link>
            <Link
              href="/why-vital-physio+"
              className="hover:text-blue-600 hover:pl-2 transition"
            >
              Why VitalPhysio+
            </Link>
            <Link
              href="/faq"
              className="hover:text-blue-600 hover:pl-2 transition"
            >
              FAQs
            </Link>
            <Link
              href="/resources"
              className="hover:text-blue-600 hover:pl-2 transition"
            >
              Resources
            </Link>
            <Link
              href="/form"
              className="hover:text-blue-600 hover:pl-2 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
