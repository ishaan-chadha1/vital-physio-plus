"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function PhysiotherapyForSeniors() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Physiotherapy for Seniors—Keeping Bangalore’s Elderly Active & Independent
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Staying independent, managing pain, and reducing fall risk are top priorities for Bengaluru’s seniors and their families. Geriatric physiotherapy offers proven, gentle, and personalized solutions for the unique needs of older adults—delivering health, confidence, and quality of life.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why is Physiotherapy Essential for the Elderly?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Mobility Decline: Ageing leads to loss of muscle strength, joint flexibility, and balance.</li>
            <li>Pain & Stiffness: Arthritis, osteoporosis, and surgery recovery can cause long-term pain and movement limitations.</li>
            <li>Falls: 1 in 3 adults over 65 will fall at least once every year, and injuries from falls are a leading reason for hospital admission among seniors.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Looking to help yourself or a loved one stay mobile, confident, and independent?</strong> Book a geriatric physiotherapy consultation at VitalPhysio⁺, Bengaluru—let us empower you to age actively and gracefully.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}