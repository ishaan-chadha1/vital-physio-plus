"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import { getCalApi } from "@calcom/embed-react";

export default function FutureOfPhysiotherapy() {
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
            <title>The Future of Physiotherapy | VitalPhysio⁺ Bengaluru</title>
            <meta
              name="description"
              content="Explore how telehealth, AI, robotics, and other innovations are reshaping physiotherapy care in Bengaluru at VitalPhysio⁺."
            />
            <meta
              name="keywords"
              content="physiotherapy, future of physiotherapy, telehealth, AI, robotics, Bengaluru, VitalPhysio⁺, digital rehab, VR physiotherapy"
            />
          </head>

          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            The Future of Physiotherapy—Tech Innovations Reshaping Care in India
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            From virtual consults and smart wearables to AI-powered diagnosis and robotic rehab, physiotherapy in India is rapidly evolving—right here in Bengaluru.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Top Innovations Transforming Physiotherapy</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Telehealth & Virtual Physiotherapy:</strong> Video consultations, remote exercise monitoring, and tele-rehab apps make expert care accessible even from home.
            </li>
            <li>
              <strong>Wearables & Mobile Health (mHealth):</strong> Fitness trackers, smart insoles, and AI-driven sensors track posture, steps, muscle activation, heart rate, and sleep.
            </li>
            <li>
              <strong>Artificial Intelligence (AI) & Machine Learning:</strong> AI analyzes rehab data to identify patterns, predict outcomes, and help therapists optimize plans.
            </li>
            <li>
              <strong>Robotics in Rehabilitation:</strong> Robotic exoskeletons, smart treadmills, and arm/hand robots help patients recover strength and function safely and efficiently.
            </li>
            <li>
              <strong>3D Printing & Customization:</strong> Custom orthotics, braces, splints, and even prosthetic limbs can now be 3D-printed for the perfect fit—improving comfort, function, and confidence.
            </li>
            <li>
              <strong>Virtual Reality (VR) & Gamified Rehab:</strong> VR headsets and gamified apps turn repetitive exercises into engaging, motivating games—proven to boost adherence and outcomes.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">How Do These Innovations Benefit Bengaluru Patients?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Accessibility:</strong> Telehealth reaches patients in busy metros and remote areas alike.
            </li>
            <li>
              <strong>Personalization:</strong> AI and wearables help create hyper-individualized treatment, even for complex conditions.
            </li>
            <li>
              <strong>Better Outcomes:</strong> Digital tracking, VR, and robotics encourage patients to work harder and longer with immediate feedback—translating into faster, more lasting recovery.
            </li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            India’s first AI-AR physio platforms have already demonstrated up to 75% cost savings and a threefold increase in patient treatment capacity compared to “passive” traditional models.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">The Future Is Bright—But Human Expertise Remains Key</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            While technology revolutionizes how care is delivered, skilled physiotherapists remain central—choosing, blending, and supervising tools for safe, effective, patient-centric rehab.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>At VitalPhysio⁺, Bengaluru</strong>, we believe in embracing the best of tech with the personal touch of experienced physiotherapists—giving you smarter, evidence-backed, and accessible care every step of your recovery.
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
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}