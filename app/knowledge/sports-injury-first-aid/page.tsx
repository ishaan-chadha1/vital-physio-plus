"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function SportsInjuryFirstAid() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sports Injury First Aid: What To Do Before Seeing a Physiotherapist
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Whether you play cricket in Cubbon Park, run marathons, or enjoy weekend football, sports injuries are common in Bengaluru’s active community. Quick, evidence-based first aid is crucial for faster recovery and better long-term outcomes. Here is what to do in the first minutes and hours—before you consult a physiotherapist.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">The 5-Step Sports Injury First Aid Plan</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li><strong>Stop and Rest:</strong> Halt all activity immediately—even if pain “seems mild.”</li>
            <li><strong>RICE:</strong> Rest, Ice, Compression, Elevation to reduce swelling and pain.</li>
            <li><strong>Assess Severity:</strong> Look for major swelling, deformity, or inability to move.</li>
            <li><strong>Protect and Immobilize:</strong> Use a splint or bandage if a serious injury is suspected.</li>
            <li><strong>Pain Relief:</strong> Take paracetamol if needed, but avoid heat or massage in the first 48 hours.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Don’t guess—Rapid, expert treatment makes the biggest difference.</strong> Book a sports injury assessment with VitalPhysio⁺ in Bengaluru for science-backed care and a personalized plan to get you safely back in the game.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}