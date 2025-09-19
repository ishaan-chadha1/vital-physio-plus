"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import { getCalApi } from "@calcom/embed-react";

export default function ErgonomicsWorkFromHomeContent() {
  React.useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "consultation" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Article Schema JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Ergonomics for Work-from-Home: Simple Physio Tips for IT Professionals in Bengaluru",
                "description": "Physiotherapy-certified ergonomic tips for IT professionals working from home in Bengaluru. Expert guidance on proper workstation setup, posture correction, and preventing remote work injuries.",
                "image": "https://vitalphysio.plus/logo.png",
                "author": {
                  "@type": "Organization",
                  "name": "VitalPhysio⁺",
                  "url": "https://vitalphysio.plus"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "VitalPhysio⁺",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://vitalphysio.plus/logo.png"
                  }
                },
                "datePublished": "2024-01-08",
                "dateModified": "2024-12-01",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://vitalphysio.plus/knowledge/ergonomics-work-from-home"
                },
                "articleSection": "Ergonomics and Remote Work",
                "keywords": "ergonomics, work from home, physiotherapy Bengaluru, IT professionals, posture correction, remote work setup",
                "about": {
                  "@type": "Thing",
                  "name": "Work From Home Ergonomics"
                }
              })
            }}
          />

          {/* FAQPage Schema JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the best chair setup for working from home?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Use a chair with back support and place a rolled-up towel or cushion in the lower back for lumbar support. Both feet should be flat on the floor. If not, use a footrest, box, or books to achieve proper height."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I prevent neck pain at my computer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Raise your monitor or laptop so the top is at eye level using books or a laptop stand. Keep the screen about an arm's length away. Ensure shoulders are relaxed and take movement breaks every 30-45 minutes."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How often should I take breaks when working from home?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Set a timer to get up and move or stretch every 30-45 minutes. These 'movement snacks' include desk stretches like neck rotations, shoulder rolls, and back extensions to counteract static posture."
                    }
                  }
                ]
              })
            }}
          />

          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            Ergonomics for Work-from-Home: Simple Physio Tips for IT Professionals in Bengaluru
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Are you an IT professional working remotely in Bengaluru? Neck pain, back discomfort, eye strain, and persistent fatigue have become the "new normal" for thousands due to poor home office setups. Modern physiotherapy can help you transform your home workstation for comfort, productivity, and long-term health—whether you work from the kitchen table, a sofa, or a "proper" desk.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Why Do IT Professionals in Bengaluru Suffer from Poor Ergonomics?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Remote work blurs physical & mental boundaries; homes rarely have true ergonomic furniture.</li>
            <li>Most Indian homes weren't designed for long work hours—chairs and tables are often the wrong height, and dining chairs or beds are commonly used.</li>
            <li>Long hours with little movement, poor posture, and lack of ergonomic awareness lead to cumulative injuries over time.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Physiotherapy-Certified Ergonomic Home Setup: Proven Tips</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Chair:</strong> Use a chair with back support. Place a rolled-up towel or cushion in the lower back for extra lumbar support. Both feet should be flat on the floor. If not, use a box, footrest, or even thick books.
            </li>
            <li>
              <strong>Desk/Monitor:</strong> Raise your monitor or laptop so the top is at eye level—stack books or use a laptop stand if needed. Keep the screen about an arm's length away. Shoulders should be relaxed, forearms supported either by armrests or the desk, wrists straight.
            </li>
            <li>
              <strong>Keyboard & Mouse:</strong> Keep wrists "neutral"—not bent up/down or sideways. Use an external mouse and keyboard if you're working long hours on a laptop.
            </li>
            <li>
              <strong>Movement Habits:</strong> Set a timer to get up and move/stretch every 30–45 minutes ("movement snacks"). Try "desk stretches" (neck rotations, shoulder rolls, back extensions) to counteract static posture.
            </li>
            <li>
              <strong>Lighting & Screen:</strong> Avoid glare on screens—side lighting is best. Adjust display settings for comfortable brightness and larger text size.
            </li>
            <li>
              <strong>Workspace Variety:</strong> Have more than one work location in your house: alternate sitting/standing (a kitchen counter can work as a standing desk). Never work for long periods from the bed or sofa.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">What Role Does Physiotherapy Play?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Personalized ergonomic assessments via video consult or in-clinic visits.</li>
            <li>Posture correction exercises to undo the "digital slouch."</li>
            <li>Advice on pain prevention, stretches, and adapting equipment to available home resources.</li>
            <li>Ongoing support for persistent pain or injury due to remote work habits.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            IT pros working in Bengaluru's tech parks and at home report up to 60% reduction in pain with proper ergonomic changes and supervised physiotherapy.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Red Flags—When to Seek an Assessment</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Persistent back, neck, or wrist pain despite home adjustments.</li>
            <li>Tingling or numbness in hands/fingers (possible nerve involvement).</li>
            <li>Severe headaches, eye pain, or vision changes.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Don't let remote work ruin your posture or productivity.</strong> Book a personalized ergonomic and physiotherapy assessment at VitalPhysio⁺, Bengaluru—you don't need fancy equipment or an office to feel better.
          </p>

          {/* Book Now Button */}
          <div className="text-center mt-8">
            <button
              type="button"
              data-cal-namespace="consultation"
              data-cal-link="vital-physio-plus/consultation"
              data-cal-config='{"layout":"month_view"}'
              className="bg-[rgb(0,79,140)] text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:bg-[rgb(0,128,148)] hover:shadow-lg transition-all duration-200 text-sm transform hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}