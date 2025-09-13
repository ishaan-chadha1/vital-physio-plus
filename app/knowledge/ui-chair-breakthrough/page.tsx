"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function UIChairBreakthrough() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Understanding the UI Chair: A Breakthrough in Pelvic Health
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            At VitalPhysio⁺, we introduce an innovative solution to transform pelvic health care safely and efficiently.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Pelvic floor dysfunction—including urinary incontinence, pelvic organ prolapse, and reduced core stability—affects millions of women, impacting quality of life and self-confidence. At VitalPhysio⁺, we introduce an innovative solution: the UI Chair, powered by HIFEM technology, to transform pelvic health care safely and efficiently.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is the UI Chair and How Does It Work?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Non-Invasive Treatment: Simply sit, fully clothed, while targeted electromagnetic energy causes deep, rapid pelvic floor muscle contractions.</li>
            <li>Multiple Muscle Engagement: A single session triggers thousands of maximal contractions—far more than possible through conventional Kegel exercises.</li>
            <li>Safe and Painless: The procedure is comfortable, requires no preparation or recovery time, and is suitable for a wide range of women, including postpartum mothers and seniors.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Major Benefits for Women’s Pelvic Health
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Dramatic Improvement in Pelvic Floor Strength</li>
            <li>Effective Management of Incontinence</li>
            <li>Enhanced Core Stability and Quality of Life</li>
            <li>Support for Postpartum and Menopausal Health</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Ready to take control of your pelvic health?</strong> Book a confidential consultation at VitalPhysio⁺ and discover how the UI Chair can help you regain strength, confidence, and freedom from incontinence.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}