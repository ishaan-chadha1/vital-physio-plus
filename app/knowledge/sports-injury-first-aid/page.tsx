"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import { getCalApi } from "@calcom/embed-react";

export default function SportsInjuryFirstAid() {
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
            <title>Sports Injury First Aid | VitalPhysio⁺ Bengaluru</title>
            <meta
              name="description"
              content="Learn the 5-step sports injury first aid plan at VitalPhysio⁺ Bengaluru. Discover when to see a physiotherapist and why early care matters."
            />
            <meta
              name="keywords"
              content="sports injury first aid, physiotherapy, Bengaluru, VitalPhysio⁺, RICE method, injury recovery, sports rehab"
            />
          </head>

          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            Sports Injury First Aid: What To Do Before Seeing a Physiotherapist
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Whether you play cricket in Cubbon Park, run marathons, or enjoy weekend football, sports injuries are common in Bengaluru’s active community. Quick, evidence-based first aid is crucial for faster recovery and better long-term outcomes. Here is what to do in the first minutes and hours—before you consult a physiotherapist.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">The 5-Step Sports Injury First Aid Plan</h2>
          <h3 className="text-xl font-bold text-gray-900 mb-2">1. Stop and Rest</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Halt all activity immediately—even if pain “seems mild.”</li>
            <li>Do not “walk it off” or try to finish a match or workout.</li>
            <li>Rest prevents further tissue damage and makes assessment easier later.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-2">2. RICE: Rest, Ice, Compression, Elevation</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Rest:</strong> Stay off the injured area as much as possible.
            </li>
            <li>
              <strong>Ice:</strong> Apply ice/cold packs (wrapped in a cloth) for 15–20 minutes, every 2–3 hours for the first 24–48 hours.
            </li>
            <li>
              <strong>Compression:</strong> Use an elastic bandage or compression sleeve to reduce swelling—ensure it’s snug, but not cutting off circulation.
            </li>
            <li>
              <strong>Elevation:</strong> Raise the limb above the level of your heart to minimize swelling, especially in ankles, knees, and wrists.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-2">3. Assess Severity</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Look for: major swelling, visible deformity, pain with movement, inability to bear weight, or “locking/clicking” joints.</li>
            <li>If any of these occur, seek immediate medical attention.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-2">4. Protect and Immobilize</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Immobilize with a splint, bandage, or support if serious bone/joint injury is suspected.</li>
            <li>Avoid “testing” the injury (jumping, squatting, or rotating to “see if it’s better”).</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-2">5. Pain Relief & Don’ts</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Take paracetamol or prescribed painkillers as needed (avoid NSAIDs early if the risk of bleeding/bruising is high).</li>
            <li>Do not apply heat for the first 48 hours (increases swelling).</li>
            <li>Do not massage a fresh injury—can worsen internal bleeding or swelling.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">When Should You See a Physiotherapist?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>If pain/swelling persists beyond a few days.</li>
            <li>You have difficulty moving, weight bearing, or doing normal activities.</li>
            <li>There’s numbness, tingling, or color changes in the limb.</li>
            <li>For professional injury assessment, diagnosis, and a personalized recovery plan.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Why Early Physiotherapy Matters</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Faster healing:</strong> Early intervention reduces long-term complications and stiffness.
            </li>
            <li>
              <strong>Prevent reinjury:</strong> Rehab identifies weakness, movement imbalances, or poor technique before a return to sport.
            </li>
            <li>
              <strong>Customized plan:</strong> Modern physios use the latest protocols to guide you stepwise through recovery, return to sport, and injury prevention.
            </li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Don’t guess—Rapid, expert treatment makes the biggest difference.</strong> Book a sports injury assessment with VitalPhysio⁺ in Bengaluru for science-backed care and a personalized plan to get you safely back in the game.
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