"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function LowBackPain() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Physiotherapy for Chronic Low Back Pain: Myths, Facts & Recovery Pathways
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Are you struggling with persistent lower back pain in Bengaluru? You aren’t alone—chronic low back pain is now the world’s leading cause of disability and affects people of all ages, especially those working desk jobs, driving long commutes, or leading sedentary lifestyles. But how effective is physiotherapy for chronic low back pain, and what truly works? Let’s bust the myths and show you evidence-backed recovery options.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            8 Common Myths and Facts About Chronic Low Back Pain
          </h2>
          <table className="w-full text-left border-collapse border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Myth</th>
                <th className="border border-gray-300 px-4 py-2">Fact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Rest is the best treatment for back pain</td>
                <td className="border border-gray-300 px-4 py-2">Prolonged rest can actually worsen pain. Staying active and guided movement promote faster recovery.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Exercise makes back pain worse</td>
                <td className="border border-gray-300 px-4 py-2">Moderate, targeted exercise is crucial—it strengthens core and back muscles.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Painkillers are a long-term solution</td>
                <td className="border border-gray-300 px-4 py-2">Medication only manages symptoms short-term. Physiotherapy treats the root causes and helps prevent recurrence.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Most back pain needs surgery</td>
                <td className="border border-gray-300 px-4 py-2">Surgery is rarely needed. Over 95% of cases improve with conservative, non-invasive physiotherapy.</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Actually Works? Physiotherapy’s Proven Pathways to Relief
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Individualized Exercise Therapy: Trunk/core muscle activation, flexibility, functional movement retraining, and posture correction.</li>
            <li>Manual Therapy: Mobilization or gentle manipulation of the spine and soft tissues by hand—reducing stiffness and promoting blood flow.</li>
            <li>Patient Education: Guidance on safe activity, lifting, desk ergonomics, sleep postures, and long-term prevention.</li>
            <li>Supportive Modalities: Short-term use of heat, cold, TENS/IFT, or ultrasound may help pain but should never be the sole therapy.</li>
            <li>Self-Management: Home exercise programs and graded activity are vital for sustained success.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Ready to take the first step towards a pain-free back?</strong> Book a personalized assessment with VitalPhysio⁺ in Bengaluru now and start your science-backed recovery journey.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}