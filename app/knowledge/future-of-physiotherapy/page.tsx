"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function FutureOfPhysiotherapy() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Future of Physiotherapy—Tech Innovations Reshaping Care in India
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            From virtual consults and smart wearables to AI-powered diagnosis and robotic rehab, physiotherapy in India is rapidly evolving—right here in Bengaluru.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Innovations Transforming Physiotherapy</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li><strong>Telehealth & Virtual Physiotherapy:</strong> Video consultations and remote exercise monitoring make expert care accessible from home.</li>
            <li><strong>Wearables & Mobile Health:</strong> Fitness trackers and AI-driven sensors track posture, steps, and muscle activation.</li>
            <li><strong>Artificial Intelligence (AI):</strong> AI analyzes rehab data to optimize plans and predict outcomes.</li>
            <li><strong>Robotics in Rehabilitation:</strong> Robotic exoskeletons and smart treadmills help patients recover strength and function safely.</li>
            <li><strong>3D Printing:</strong> Custom orthotics, braces, and prosthetics improve comfort and function.</li>
            <li><strong>Virtual Reality (VR):</strong> Gamified rehab turns repetitive exercises into engaging games, boosting adherence and outcomes.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>At VitalPhysio⁺, Bengaluru</strong>, we believe in embracing the best of tech with the personal touch of experienced physiotherapists—giving you smarter, evidence-backed, and accessible care every step of your recovery.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}