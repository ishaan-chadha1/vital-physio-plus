"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function ElectrotherapyModalities() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Understanding Electrotherapy & Modern Physio Modalities—What Actually Works?
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Heard about “ultrasound,” “TENS,” “laser therapy,” or “shockwave” in physiotherapy? Bengaluru patients want results—not just machines. Here’s a science-backed guide to what works, when it helps, and the role of physical modalities in your healing journey.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Electrotherapy?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li><strong>TENS:</strong> Reduces pain by blocking signals from nerves—used for chronic pain, nerve pain, and post-surgery.</li>
            <li><strong>Ultrasound Therapy:</strong> Boosts blood flow, reduces inflammation, and breaks down scar tissue.</li>
            <li><strong>Laser Therapy:</strong> Accelerates healing, decreases pain, and promotes tissue repair.</li>
            <li><strong>Shockwave Therapy:</strong> Useful for chronic tendinopathies and slow-to-heal injuries.</li>
            <li><strong>NMES/EMS:</strong> Induces muscle contraction for muscle re-education after severe weakness or nerve injury.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>VitalPhysio⁺ in Bengaluru</strong> uses the latest globally-proven modalities—always as part of a holistic, active recovery plan adapted for each patient. Unsure what you need? Ask for a full assessment before requesting (or refusing) any specific machine-based treatment!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}