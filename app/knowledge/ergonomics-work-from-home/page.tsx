"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function ErgonomicsWorkFromHome() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ergonomics for Work-from-Home: Simple Physio Tips for IT Professionals in Bengaluru
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Are you an IT professional working remotely in Bengaluru? Neck pain, back discomfort, eye strain, and persistent fatigue have become the “new normal” for thousands due to poor home office setups. Modern physiotherapy can help you transform your home workstation for comfort, productivity, and long-term health—whether you work from the kitchen table, a sofa, or a “proper” desk.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Physiotherapy-Certified Ergonomic Home Setup: Proven Tips</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Use a chair with back support. Place a rolled-up towel or cushion in the lower back for extra lumbar support.</li>
            <li>Raise your monitor or laptop so the top is at eye level—stack books or use a laptop stand if needed.</li>
            <li>Set a timer to get up and move/stretch every 30–45 minutes (“movement snacks”).</li>
            <li>Never work for long periods from the bed or sofa.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Don’t let remote work ruin your posture or productivity.</strong> Book a personalized ergonomic and physiotherapy assessment at VitalPhysio⁺, Bengaluru—you don’t need fancy equipment or an office to feel better.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}