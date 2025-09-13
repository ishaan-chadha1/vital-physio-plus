"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function PediatricPhysiotherapy() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pediatric Physiotherapy—Child-Friendly Approaches Parents Should Know
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Every child in Bengaluru deserves a bright, active start. Pediatric physiotherapy empowers babies, children, and teens to overcome movement challenges—whether due to delayed milestones, neurological/orthopedic conditions, or injuries. Here’s what every parent should know, based on the latest evidence and approaches from Bengaluru’s paediatric physiotherapists.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Pediatric Physiotherapy?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Helps address developmental delays, frequent falls, muscle weakness, difficulty walking, cerebral palsy, genetic conditions, and post-injury care.</li>
            <li>Treatment blends science with creativity—using games, play-based exercises, and hands-on therapy for fun, engaging rehabilitation.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Worried about your child’s movement, posture, play, or recovery?</strong> Book a child-friendly consultation with a pediatric physiotherapist at VitalPhysio⁺, Bengaluru—parents and kids both leave smiling!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}