"use client";

import Link from "next/link";

export default function LandingNavbar() {
  return (
    <nav className="w-full flex justify-center bg-white border-b border-gray-200 h-16 fixed top-0 z-50">
      <div className="w-full max-w-5xl flex justify-between items-center px-5 text-sm">
        {/* Left: Logo */}
        <div className="flex gap-5 items-center font-semibold">
          <Link href="/">Vital Physio +</Link>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex gap-4 items-center">
          {/* Scroll to sections */}
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#why-choose-us" className="hover:underline">Why Us</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>

          {/* Main navigation actions */}
          <Link href="/sign-in" className="hover:underline">Sign In</Link>
          <Link href="/sign-up" className="hover:underline">Sign Up</Link>
          <Link href="/book-appointment" className="hover:underline font-semibold text-blue-600">
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
