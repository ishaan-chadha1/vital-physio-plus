"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function UIChairBreakthrough() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* SEO Meta Tags */}
          <head>
            <title>Understanding the UI Chair | VitalPhysio⁺ Bengaluru</title>
            <meta
              name="description"
              content="Discover the UI Chair at VitalPhysio⁺ Bengaluru, a breakthrough in pelvic health care using HIFEM technology for non-invasive treatment."
            />
            <meta
              name="keywords"
              content="UI Chair, pelvic health, urinary incontinence, HIFEM technology, VitalPhysio⁺, Bengaluru, women’s health physiotherapy"
            />
          </head>

          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            Understanding the UI Chair: A Breakthrough in Pelvic Health
          </h1>
          <p className="text-[rgb(236,105,31)] text-sm mb-4">
            A Revolutionary Solution from VitalPhysio⁺
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Pelvic floor dysfunction—including urinary incontinence, pelvic organ prolapse, and reduced core stability—affects millions of women, impacting quality of life and self-confidence. At VitalPhysio⁺, we introduce an innovative solution: the UI Chair, powered by HIFEM technology, to transform pelvic health care safely and efficiently.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            What Is the UI Chair and How Does It Work?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Non-Invasive Treatment:</strong> Simply sit, fully clothed, while targeted electromagnetic energy causes deep, rapid pelvic floor muscle contractions.
            </li>
            <li>
              <strong>Multiple Muscle Engagement:</strong> A single session triggers thousands of maximal contractions—far more than possible through conventional Kegel exercises.
            </li>
            <li>
              <strong>Safe and Painless:</strong> The procedure is comfortable, requires no preparation or recovery time, and is suitable for a wide range of women, including postpartum mothers and seniors.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            Major Benefits for Women’s Pelvic Health
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Dramatic Improvement in Pelvic Floor Strength:</strong> Consistent use of the UI Chair builds muscle tone and endurance, essential for pelvic organ support and bladder control.
            </li>
            <li>
              <strong>Effective Management of Incontinence:</strong> Women with stress, urge, or mixed urinary incontinence notice significant reductions in leakage episodes, urgency, and night-time urination after just a few sessions.
            </li>
            <li>
              <strong>Enhanced Core Stability and Quality of Life:</strong> A strong pelvic floor not only benefits continence but also supports the lower back, hips, and posture—resulting in better mobility and overall confidence.
            </li>
            <li>
              <strong>Support for Postpartum and Menopausal Health:</strong> The UI Chair is ideal for women recovering after childbirth, coping with hormonal changes, or seeking preventive care as they age.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            What to Expect at VitalPhysio⁺
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Comprehensive Women’s Health Assessment:</strong> Every treatment plan starts with a thorough, confidential pelvic health evaluation by our women’s health physiotherapists.
            </li>
            <li>
              <strong>Personalized UI Chair Protocols:</strong> Sessions last 20–30 minutes and are tailored to your unique needs and comfort.
            </li>
            <li>
              <strong>Integrated Pelvic Health Program:</strong> Combine HIFEM therapy with guided exercises, bladder training, and lifestyle advice for lasting results.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            Why Choose VitalPhysio⁺ for Pelvic Health Solutions?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At VitalPhysio⁺, we combine compassionate care, evidence-based physiotherapy, and the latest advancements in women’s health technology. The UI Chair represents a new era of hope, privacy, and empowerment for women facing pelvic floor challenges.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Ready to take control of your pelvic health?</strong> Book a confidential consultation at VitalPhysio⁺ and discover how the UI Chair can help you regain strength, confidence, and freedom from incontinence.
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