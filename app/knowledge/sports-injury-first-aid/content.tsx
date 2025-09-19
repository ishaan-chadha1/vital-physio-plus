"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import { getCalApi } from "@calcom/embed-react";

export default function SportsInjuryFirstAidContent() {
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
                "headline": "Sports Injury First Aid: What To Do Before Seeing a Physiotherapist",
                "description": "Expert sports injury first aid guide from VitalPhysio⁺ Bengaluru. Learn the 5-step plan, RICE method, and when to seek physiotherapy for optimal recovery.",
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
                  "@id": "https://vitalphysio.plus/knowledge/sports-injury-first-aid"
                },
                "articleSection": "Sports Injury First Aid",
                "keywords": "sports injury first aid, RICE method, physiotherapy Bengaluru, sports rehab, injury recovery",
                "about": {
                  "@type": "Thing",
                  "name": "Sports Injury First Aid"
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
                    "name": "What does R.I.C.E. stand for in first aid?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "R.I.C.E. stands for Rest, Ice, Compression, and Elevation. Rest the injured area, apply ice for 15-20 minutes every 2-3 hours, use compression bandages to reduce swelling, and elevate the limb above heart level to minimize swelling."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Should I use ice or heat on a new sports injury?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Use ice on a new sports injury, not heat. Apply ice (wrapped in cloth) for 15-20 minutes every 2-3 hours for the first 24-48 hours. Avoid heat for the first 48 hours as it increases swelling and can worsen the injury."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "When should I see a physiotherapist after a sports injury?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "See a physiotherapist if pain/swelling persists beyond a few days, you have difficulty moving or weight bearing, there's numbness or tingling, or for professional injury assessment and personalized recovery planning. Early intervention leads to faster healing and prevents reinjury."
                    }
                  }
                ]
              })
            }}
          />

          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            Sports Injury First Aid: What To Do Before Seeing a Physiotherapist
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Whether you play cricket in Cubbon Park, run marathons, or enjoy weekend football, sports injuries are common in Bengaluru's active community. Quick, evidence-based first aid is crucial for faster recovery and better long-term outcomes. Here is what to do in the first minutes and hours—before you consult a physiotherapist.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">The 5-Step Sports Injury First Aid Plan</h2>
          <h3 className="text-xl font-bold text-gray-900 mb-2">1. Stop and Rest</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Halt all activity immediately—even if pain "seems mild."</li>
            <li>Do not "walk it off" or try to finish a match or workout.</li>
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
              <strong>Compression:</strong> Use an elastic bandage or compression sleeve to reduce swelling—ensure it's snug, but not cutting off circulation.
            </li>
            <li>
              <strong>Elevation:</strong> Raise the limb above the level of your heart to minimize swelling, especially in ankles, knees, and wrists.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-2">3. Assess Severity</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Look for: major swelling, visible deformity, pain with movement, inability to bear weight, or "locking/clicking" joints.</li>
            <li>If any of these occur, seek immediate medical attention.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-2">4. Protect and Immobilize</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Immobilize with a splint, bandage, or support if serious bone/joint injury is suspected.</li>
            <li>Avoid "testing" the injury (jumping, squatting, or rotating to "see if it's better").</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-2">5. Pain Relief & Don'ts</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Take paracetamol or prescribed painkillers as needed (avoid NSAIDs early if the risk of bleeding/bruising is high).</li>
            <li>Do not apply heat for the first 48 hours (increases swelling).</li>
            <li>Do not massage a fresh injury—can worsen internal bleeding or swelling.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">When Should You See a Physiotherapist?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>If pain/swelling persists beyond a few days.</li>
            <li>You have difficulty moving, weight bearing, or doing normal activities.</li>
            <li>There's numbness, tingling, or color changes in the limb.</li>
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
            <strong>Don't guess—Rapid, expert treatment makes the biggest difference.</strong> Book a sports injury assessment with VitalPhysio⁺ in Bengaluru for science-backed care and a personalized plan to get you safely back in the game.
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