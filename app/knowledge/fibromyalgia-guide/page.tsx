"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function FibromyalgiaGuide() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Physiotherapist’s Guide to Managing Fibromyalgia Pain
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            Empowering Relief with Structured Physiotherapy at VitalPhysio⁺
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Living with fibromyalgia means enduring persistent pain, widespread tenderness, and unrelenting fatigue that can disrupt daily life. At VitalPhysio⁺, our expert physiotherapists offer a comprehensive, science-backed program designed to help you reclaim control, reduce discomfort, and renew your energy—without reliance on medication alone.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is Fibromyalgia, and Why Is Physiotherapy Essential?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Widespread musculoskeletal pain</li>
            <li>Persistent fatigue</li>
            <li>Sleep disturbances</li>
            <li>Memory and mood difficulties</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            While the exact cause is unknown, research shows that a structured physiotherapy plan—focused on graded movement, muscle strengthening, posture, and relaxation—can significantly reduce symptoms and improve overall well-being.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Physiotherapy at VitalPhysio⁺ Helps You Manage Fibromyalgia
          </h2>
          <ol className="list-decimal list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Individualized Assessment and Goal Setting:</strong> Every program at VitalPhysio⁺ starts with a detailed evaluation to identify your pain triggers, activity limitations, and lifestyle needs.
            </li>
            <li>
              <strong>Gentle Aerobic Exercise:</strong> Low-impact activities such as walking, water-based therapy (aquatic treadmill), or cycling are carefully introduced to boost stamina, circulation, and energy—while avoiding flare-ups.
            </li>
            <li>
              <strong>Flexibility and Stretching Routines:</strong> Guided stretching helps alleviate muscle stiffness, improve joint mobility, and relieve tension without overexerting sensitive tissues.
            </li>
            <li>
              <strong>Strengthening and Postural Re-education:</strong> Our therapists coach you through controlled strengthening exercises targeting the core, back, and limbs, helping stabilize joints and reduce fatigue. Postural correction minimizes stress on the body and prevents pain recurrence.
            </li>
            <li>
              <strong>Pain Relief Modalities:</strong> Techniques such as electrotherapy, gentle manual therapy, and laser therapy calm overactive nerve signals and reduce pain intensity.
            </li>
            <li>
              <strong>Education and Self-Management Strategies:</strong> We empower you to identify personal triggers, pace activities, and use relaxation methods—like breathing exercises and mindfulness—to cope with flare-ups and minimize stress.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Commitment to Physiotherapy Matters
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Consistent, supervised sessions lead to meaningful improvements in pain, mobility, and quality of life.</li>
            <li>Regular reviews ensure your program evolves with your progress, adapting to both good days and challenging ones.</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Pro Tip:</strong> Participation in group exercise or aquatic therapy can support motivation, community, and accountability.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Ready to take the next step in your fibromyalgia journey?</strong> Schedule a consultation at VitalPhysio⁺ to experience a tailored approach to fibromyalgia management. Let our experts design a pathway to pain relief, renewed vitality, and restored confidence.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}