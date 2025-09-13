"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function DeskNeckPain() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Desk Job and Neck Pain? How Bengaluru’s Professionals Can Find Relief
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Do you spend hours at a desk, glued to your laptop or phone? Bengaluru’s thriving tech workforce faces a modern health epidemic: “tech neck”—persistent neck pain and stiffness caused by long hours of sitting, screen time, and poor posture. Here’s what the science says, and how physiotherapy offers lasting solutions for Bengaluru office professionals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Is Neck Pain So Common Among Desk Workers?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Forward head posture places excess strain on neck muscles—just a few degrees increases the stress by nearly 400%!</li>
            <li>Hours without moving reduce blood flow, causing muscle knots, trigger points, and nerve symptoms (such as tingling or headaches).</li>
            <li>Desk setups with low monitors, unsupportive chairs, and laptop-only workstations make matters worse.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Ready to break the pain cycle and reclaim comfort at work?</strong> VitalPhysio⁺ in Bengaluru offers personalized physiotherapy assessments for tech professionals, remote workers, and anyone facing modern desk-related neck pain.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}