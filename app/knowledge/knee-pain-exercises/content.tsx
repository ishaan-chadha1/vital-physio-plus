"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import { getCalApi } from "@calcom/embed-react";

export default function KneePainExercisesContent() {
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
                "headline": "5 Key Exercises to Perform After Knee Surgery",
                "description": "Expert guide to post-surgical knee rehabilitation with 5 essential exercises at VitalPhysio⁺ Bengaluru. Learn about water treadmill therapy and advanced recovery modalities for optimal knee surgery recovery.",
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
                "datePublished": "2024-01-10",
                "dateModified": "2024-12-01",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://vitalphysio.plus/knowledge/knee-pain-exercises"
                },
                "articleSection": "Post-Surgical Rehabilitation",
                "keywords": "knee surgery exercises, post-surgical rehabilitation, water treadmill therapy, VitalPhysio⁺ Bengaluru, knee replacement recovery",
                "about": {
                  "@type": "Thing",
                  "name": "Post-Surgical Knee Rehabilitation"
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
                    "name": "What exercises should I do immediately after knee surgery?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Start with gentle exercises like ankle pumps to prevent blood clots, heel slides for mobility, and quad sets for muscle strength. Always consult your physiotherapist before beginning any exercise routine post-surgery."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does water treadmill therapy help knee surgery recovery?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Water treadmill therapy reduces load on healing joints through buoyancy, allows early mobilization, enhances muscle strength through water resistance, and reduces pain and swelling while promoting faster functional recovery."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "When can I start exercising after knee replacement surgery?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can typically start gentle exercises within 24-48 hours post-surgery with physiotherapist guidance. The exact timing depends on your surgery type, healing progress, and surgeon's recommendations. Professional supervision ensures safety and optimal results."
                    }
                  }
                ]
              })
            }}
          />

          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            5 Key Exercises to Perform After Knee Surgery
          </h1>
          <p className="text-[rgb(236,105,31)] text-sm mb-4">
            The Importance of Post-Surgical Rehabilitation at VitalPhysio⁺: Empowering Recovery with Water Treadmill Therapy and Advanced Modalities
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Recovering after surgery—especially joint surgeries like knee replacement—is about far more than wound healing. At VitalPhysio⁺ in Bengaluru, post-surgical rehabilitation is the foundation for restoring full mobility, preventing complications, and regaining independence. Our clinic combines the latest evidence-based physiotherapy with cutting-edge modalities such as the water treadmill to provide a comprehensive, individualized recovery pathway.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            Why Is Post-Surgical Rehabilitation So Critical?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Accelerated Healing:</strong> Guided rehabilitation reduces pain, builds strength, and speeds up healing, helping you return to daily activities and an active lifestyle faster.
            </li>
            <li>
              <strong>Prevention of Complications:</strong> Regular physiotherapy prevents serious issues such as joint stiffness, scar tissue formation, muscle atrophy, and loss of mobility.
            </li>
            <li>
              <strong>Restoration of Mobility and Confidence:</strong> Targeted exercises restore muscle power and joint motion while reducing swelling.
            </li>
            <li>
              <strong>Education for Life:</strong> Our therapists guide you through proper movement strategies and coordinate a safe transition from clinic-based therapy to independent exercise routines at home.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            How the Water Treadmill Enhances Your Recovery
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Low-Impact, High-Gain:</strong> Water's natural buoyancy reduces load on healing joints, making walking and exercise safe even soon after surgery.
            </li>
            <li>
              <strong>Enhanced Muscle Strength and Mobility:</strong> Resistance from water helps rebuild muscle without weights, while the supportive environment allows gentle restoration of movement.
            </li>
            <li>
              <strong>Reduced Pain and Swelling:</strong> Aquatic exercise promotes blood flow, reduces inflammation, and soothes post-surgical pain.
            </li>
            <li>
              <strong>Faster Functional Recovery:</strong> Patients can start sooner, regain mobility quickly, and confidently progress through harder tasks as strength returns.
            </li>
            <li>
              <strong>Enjoyable Therapy Experience:</strong> Many patients report that aquatic therapy lifts their spirits and fosters a positive mindset throughout recovery.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            5 Key Exercises to Perform After Knee Surgery
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Always consult your physiotherapist before starting any exercise routine. Begin gently, listen to your body, and follow supervision to ensure safety and best results.
          </p>
          <table className="w-full text-left border-collapse border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">Exercise Name</th>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">Purpose</th>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">How-To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Ankle Pumps</td>
                <td className="border border-gray-300 px-4 py-2">Prevents blood clots, reduces swelling</td>
                <td className="border border-gray-300 px-4 py-2">Lie or sit, flex and point your ankles repeatedly. Repeat for 2–3 minutes every hour.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Heel Slides</td>
                <td className="border border-gray-300 px-4 py-2">Improves knee mobility, reduces stiffness</td>
                <td className="border border-gray-300 px-4 py-2">Lie on your back, slowly slide heel toward the buttocks and back. Repeat 10–20 times per leg, 2–3 sets daily.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Quad Sets</td>
                <td className="border border-gray-300 px-4 py-2">Strengthens front thigh (quadriceps) muscles</td>
                <td className="border border-gray-300 px-4 py-2">Lie or sit, press the back of your knee downward by tightening thigh muscles. Hold for 5 seconds. Repeat 10–20x.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Straight Leg Raises</td>
                <td className="border border-gray-300 px-4 py-2">Builds thigh and hip strength</td>
                <td className="border border-gray-300 px-4 py-2">Lie on your back, keep operated leg straight, lift it to hip level, hold for 3–5 seconds, lower gently. Repeat.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Knee Extension (Seated)</td>
                <td className="border border-gray-300 px-4 py-2">Restores full knee straightening</td>
                <td className="border border-gray-300 px-4 py-2">Sit with heel on another chair, gently try to straighten the knee and hold for 10 seconds. Repeat 10x, 3–5/day.</td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Pro Tip:</strong> Water-based versions of these exercises can be performed in the water treadmill under therapist guidance, reducing pain and ensuring correct technique as you progress.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            Why Choose VitalPhysio⁺ for Your Post-Surgical Care?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At VitalPhysio⁺, your recovery journey is mapped by experts using state-of-the-art technology, one-on-one coaching, and compassionate support. From the first day after surgery until you regain complete function, we are with you at every step. Our water treadmill and advanced modalities transform rehabilitation into an empowering, results-driven experience.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Ready to take the first step toward full recovery?</strong> Book your initial assessment at VitalPhysio⁺ and experience Bengaluru's best post-surgical rehabilitation today!
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