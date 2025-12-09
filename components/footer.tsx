"use client";

import { useState, useEffect } from 'react';

const Footer = () => {
  // UPDATED: Changed to a lighter, more vibrant shade of blue
  const footerBackgroundColor = "#004a8a"; // Lighter blue for better contrast
  const [currentYear, setCurrentYear] = useState<number>(2024);

  // Set year on client side to prevent hydration mismatch
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="text-white"
      style={{ backgroundColor: footerBackgroundColor }}
    >
      <div className="container mx-auto px-6 py-8 text-center">
        {/* Copyright Information - UPDATED to be fully white */}
        <p className="mb-2 text-sm text-white">
          &copy; {currentYear} VitalPhysio⁺. All rights reserved. Bengaluru, Karnataka, India.
        </p>
        
        {/* Navigation Links */}
        <div className="flex items-center justify-center space-x-3 text-sm">
          {/* UPDATED: Links are now fully white with a subtle hover effect */}
          <a href="/privacy-policy" className="transition-colors duration-300 text-white">
            Privacy Policy
          </a>
          {/* UPDATED: Separator is slightly more visible */}
          <span className="text-white/60">|</span>
          <a href="/tos" className="transition-colors duration-300 text-white">
            Terms of Service
          </a>
          <span className="text-white/60">|</span>
          <a href="/knowledge" className="transition-colors duration-300 text-white">
            Blog & Resources
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
