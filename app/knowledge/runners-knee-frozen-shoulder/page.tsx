"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function RunnersKneeFrozenShoulder() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            “Runner’s Knee”, “Frozen Shoulder” & Bangalore Lifestyles: Prevention & Cure
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Staying active in Bengaluru’s parks, gyms, and on city roads is a healthy choice. But modern urban life, marathon training, and hours of computer use mean many face common problems: knee pain (“runner’s knee”) and frozen shoulder. Here’s how physiotherapy provides proven pathways to sustained recovery.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Runner’s Knee?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Pain around (or behind) the kneecap, worse with running, stairs, or prolonged sitting</li>
            <li>Clicking, grinding, or “giving way” of the knee</li>
            <li>Pulling/aching feeling when standing from a chair or squatting</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Frozen Shoulder?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Gradual shoulder pain and progressive stiffness</li>
            <li>Severe restriction in raising, rotating, or reaching the arm</li>
            <li>Pain even at rest or night, often waking you up</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Facing knee pain or shoulder stiffness?</strong> Book your assessment with a physiotherapist at VitalPhysio⁺, Bengaluru and receive a plan tailored for your sport, work, or lifestyle needs.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}