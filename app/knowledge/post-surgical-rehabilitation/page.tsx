"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function PostSurgicalRehabilitation() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Post-Surgical Rehabilitation—Optimizing Recovery after Orthopedic Surgery
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Knee replacement, fracture repair, ligament reconstruction, or spine surgery—major orthopedic surgeries are life-changing events. The journey to full recovery begins after your operation, and evidence shows physiotherapy is key to getting you back to strength, function, and pain-free living in Bengaluru.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Is Physiotherapy Essential After Orthopedic Surgery?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Restores Movement: Guided range-of-motion and stretching techniques restore lost flexibility.</li>
            <li>Rebuilds Strength & Balance: Exercises progress from gentle activation to resistance training.</li>
            <li>Pain and Swelling Control: Ice, compression, and manual therapy help manage early post-op symptoms.</li>
            <li>Prevents Complications: Early mobilization reduces risks of blood clots, pneumonia, and joint stiffness.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Ready to start getting back to the life—and movement—you love?</strong> Book your personalized post-surgery rehabilitation with VitalPhysio⁺, Bengaluru for globally-aligned care and compassionate support every step of the way.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}