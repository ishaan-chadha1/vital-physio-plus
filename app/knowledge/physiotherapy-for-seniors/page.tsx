"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import { getCalApi } from "@calcom/embed-react";

export default function PhysiotherapyForSeniors() {
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
          {/* SEO Meta Tags */}
          <head>
            <title>Physiotherapy for Seniors | VitalPhysio⁺ Bengaluru</title>
            <meta
              name="description"
              content="Discover how geriatric physiotherapy at VitalPhysio⁺ Bengaluru helps seniors stay active, independent, and pain-free with personalized care."
            />
            <meta
              name="keywords"
              content="geriatric physiotherapy, senior physiotherapy, fall prevention, Bengaluru, VitalPhysio⁺, arthritis, balance training"
            />
          </head>

          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            Physiotherapy for Seniors—Keeping Bangalore’s Elderly Active & Independent
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Staying independent, managing pain, and reducing fall risk are top priorities for Bengaluru’s seniors and their families. Geriatric physiotherapy offers proven, gentle, and personalized solutions for the unique needs of older adults—delivering health, confidence, and quality of life.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Why is Physiotherapy Essential for the Elderly?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Mobility Decline:</strong> Ageing leads to loss of muscle strength, joint flexibility, and balance—making everyday activities harder.
            </li>
            <li>
              <strong>Pain & Stiffness:</strong> Arthritis, osteoporosis, and surgery recovery can cause long-term pain and movement limitations.
            </li>
            <li>
              <strong>Falls:</strong> 1 in 3 adults over 65 will fall at least once every year, and injuries from falls are a leading reason for hospital admission among seniors.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">How Does Physiotherapy Help Seniors Thrive?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Functional Exercise:</strong> Tailored routines to restore strength, flexibility, coordination, and endurance—often using simple movements, resistance bands, or even chairs.
            </li>
            <li>
              <strong>Balance & Fall Prevention:</strong> Targeted balance, core, and gait training. Standing on one leg, heel-toe walking, side leg raises, and supervised sessions like Tai Chi or yoga can significantly reduce falls.
            </li>
            <li>
              <strong>Pain Relief:</strong> Manual therapy, hydrotherapy, and posture realignment soothe aching joints and reduce stiffness.
            </li>
            <li>
              <strong>Rehabilitation:</strong> Accelerates healing after injuries, surgeries (e.g., hip/knee replacement), or stroke—restores function and confidence.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            Independence, Dignity, and Safety—Practical Tips for Elderly in Bengaluru
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Move Daily: Even a 15–30-minute slow walk at home, with support, maintains muscle and balance.</li>
            <li>Environment Check: Remove loose rugs, install handrails, and ensure good lighting to prevent falls.</li>
            <li>Stay Social: Group physio or exercise sessions improve mood and fight loneliness.</li>
            <li>
              Use Assistive Devices: Canes, walkers, or bathroom safety bars boost confidence—your physio can advise on the best type and fit.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">When to Start Physiotherapy?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>New or worsening pain, stiffness, or limited movement.</li>
            <li>Fear of falling or recent stumbles.</li>
            <li>After hospitalization, surgery, or new medical diagnosis (e.g., Parkinson’s, arthritis).</li>
            <li>To maintain independence in everyday tasks (bathing, walking, cooking).</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Key Takeaways</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              Physical exercise for seniors—focusing on strength, balance, and flexibility—lowers the rate of falls and complications.
            </li>
            <li>
              Personalized geriatric physiotherapy helps seniors recover faster, stay independent, and enjoy a better quality of life.
            </li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Looking to help yourself or a loved one stay mobile, confident, and independent?</strong> Book a geriatric physiotherapy consultation at VitalPhysio⁺, Bengaluru—let us empower you to age actively and gracefully.
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