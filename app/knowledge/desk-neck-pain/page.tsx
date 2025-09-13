"use client";

import React, { useEffect } from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import { getCalApi } from "@calcom/embed-react";

export default function DeskNeckPain() {
  useEffect(() => {
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
            <title>Desk Job and Neck Pain Relief | VitalPhysio⁺ Bengaluru</title>
            <meta
              name="description"
              content="Discover how Bengaluru's professionals can find relief from desk job-related neck pain with expert physiotherapy at VitalPhysio⁺."
            />
            <meta
              name="keywords"
              content="neck pain, desk job, physiotherapy, Bengaluru, tech neck, posture correction, ergonomic tips"
            />
          </head>

          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            Desk Job and Neck Pain? How Bengaluru’s Professionals Can Find Relief
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Do you spend hours at a desk, glued to your laptop or phone? Bengaluru’s thriving tech workforce faces a modern health epidemic: “tech neck”—persistent neck pain and stiffness caused by long hours of sitting, screen time, and poor posture. Here’s what the science says, and how physiotherapy offers lasting solutions for Bengaluru office professionals.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            Why Is Neck Pain So Common Among Desk Workers?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Forward head posture places excess strain on neck muscles—just a few degrees increases the stress by nearly 400%!</li>
            <li>Hours without moving reduce blood flow, causing muscle knots, trigger points, and nerve symptoms (such as tingling or headaches).</li>
            <li>Desk setups with low monitors, unsupportive chairs, and laptop-only workstations make matters worse.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            Common Symptoms and Warning Signs
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Persistent or sharp pain at the base of your skull or across the tops of your shoulders</li>
            <li>Headaches starting at the back of the head, especially in the evening</li>
            <li>Stiffness when turning your head, especially after prolonged sitting</li>
            <li>Tingling, tightness, or radiating discomfort in shoulders or arms</li>
            <li>Clicking, grinding, or popping feelings when turning your neck</li>
            <li>Symptoms that worsen with long meetings, driving, or smartphone use</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            Myths About Desk-Related Neck Pain—And The Facts
          </h2>
          <table className="w-full text-left text-gray-700 mb-6 border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">Myth</th>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">Fact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">“If I ignore it, the pain will go away.”</td>
                <td className="border border-gray-300 px-4 py-2">Untreated neck pain can become chronic and harder to reverse.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">“Just getting a massage will fix it.”</td>
                <td className="border border-gray-300 px-4 py-2">Massage gives short-term relief—lasting improvement needs strength and posture training.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">“Using a collar/support helps healing.”</td>
                <td className="border border-gray-300 px-4 py-2">Prolonged support weakens neck muscles. Active rehab is recommended.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">“It’s all due to my pillow or mattress.”</td>
                <td className="border border-gray-300 px-4 py-2">Sleep setup matters, but work posture and movement patterns are bigger factors.</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            How Does Physiotherapy Help Desk-Related Neck Pain?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Thorough assessment of posture, desk ergonomics, strength, and mobility</li>
            <li>Tailored manual therapy to reduce muscle tightness and restore joint movement (when needed)</li>
            <li>Active exercise program targeting deep neck muscles, shoulders, and upper back</li>
            <li>Ergonomic counselling—ideal workstation height, standing breaks, monitor/laptop adjustments</li>
            <li>Home exercise guidance and “movement snacks” (quick, easy stretches during the workday)</li>
            <li>Education on pain self-management, sleep, and stress factors</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            5 Quick Physiotherapist-Approved Tips for Office Workers in Bengaluru
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Raise your monitor so the top is at eye level—stop looking down!</li>
            <li>Keep feet flat and knees at 90° while sitting (avoid crossing legs).</li>
            <li>Every 30 minutes, do a “neck reset”: tuck chin gently, roll shoulders back, stretch arms overhead.</li>
            <li>Switch to a headset for long calls; never cradle the phone on your shoulder.</li>
            <li>Try daily “desk stretches”: gentle upper trapezius, SCM, and levator scapulae stretches (ask your physio to demonstrate!)</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            When Should You Book a Physiotherapy Assessment?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>If pain lasts more than a week, or recurs often</li>
            <li>You notice any arm numbness, tingling, or weakness</li>
            <li>Work, sleep, or daily life is affected</li>
            <li>Self-care tips and home stretching no longer provide relief</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Ready to break the pain cycle and reclaim comfort at work?</strong> VitalPhysio⁺ in Bengaluru offers personalized physiotherapy assessments for tech professionals, remote workers, and anyone facing modern desk-related neck pain.
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