"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import Breadcrumb from "@/components/breadcrumb";
import { generateKnowledgeBreadcrumbs } from "@/utils/breadcrumbs";
import { getCalApi } from "@calcom/embed-react";

export default function ElectrotherapyModalitiesContent() {
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
          {/* Breadcrumb Navigation */}
          <Breadcrumb 
            items={generateKnowledgeBreadcrumbs('electrotherapy-modalities', 'Electrotherapy Modalities')}
          />

          {/* Article Schema JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "What is Electrotherapy? TENS, IFT & Ultrasound Explained",
                "description": "Comprehensive guide to electrotherapy modalities at VitalPhysio⁺ Bengaluru. Learn how TENS, ultrasound, laser therapy, and shockwave treatments accelerate healing and provide pain relief.",
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
                  "@id": "https://vitalphysio.plus/knowledge/electrotherapy-modalities"
                },
                "articleSection": "Electrotherapy and Modern Physiotherapy",
                "keywords": "electrotherapy, TENS therapy, ultrasound therapy, laser therapy, physiotherapy Bengaluru, pain relief modalities",
                "about": {
                  "@type": "Thing",
                  "name": "Electrotherapy Modalities"
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
                    "name": "Does electrotherapy hurt?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No, electrotherapy should not hurt when properly applied. TENS therapy feels like a gentle tingling sensation, ultrasound therapy is typically painless, and treatments are adjusted to your comfort level. Any discomfort should be reported to your physiotherapist immediately."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does TENS therapy work for pain relief?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "TENS (Transcutaneous Electrical Nerve Stimulation) works by sending gentle electrical pulses through the skin to nerve fibers, which blocks pain signals from reaching the brain according to the 'gate control theory.' It's effective for chronic pain, nerve pain, and post-surgery recovery."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What conditions benefit most from electrotherapy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Electrotherapy is most effective for pain control, acute injuries requiring swelling reduction, muscle re-activation after injury or surgery, and stubborn tendinopathies. It works best when combined with active rehabilitation and exercise, not as a standalone treatment."
                    }
                  }
                ]
              })
            }}
          />

          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            What is Electrotherapy? TENS, IFT & Ultrasound Explained
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Heard about "ultrasound," "TENS," "laser therapy," or "shockwave" in physiotherapy? Bengaluru patients want results—not just machines. Here's a science-backed guide to what works, when it helps, and the role of physical modalities in your healing journey.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">What is Electrotherapy?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>TENS:</strong> Reduces pain by blocking signals from nerves—used for chronic pain, nerve pain, and post-surgery.
            </li>
            <li>
              <strong>Ultrasound Therapy:</strong> Boosts blood flow, reduces inflammation, and breaks down scar tissue.
            </li>
            <li>
              <strong>Laser Therapy:</strong> Accelerates healing, decreases pain, and promotes tissue repair.
            </li>
            <li>
              <strong>Shockwave Therapy:</strong> Useful for chronic tendinopathies and slow-to-heal injuries.
            </li>
            <li>
              <strong>NMES/EMS:</strong> Induces muscle contraction for muscle re-education after severe weakness or nerve injury.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">What Does the Latest Evidence Say?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Effective for Pain Relief:</strong> TENS and ultrasound have strong evidence for short-term pain relief and improving mobility (e.g., chronic back, neck, or joint pain).
            </li>
            <li>
              <strong>Useful for Acute Injuries:</strong> ICE, compression plus TENS, and ultrasound speed up recovery after sprains/strains.
            </li>
            <li>
              <strong>Active Rehab Still Key:</strong> Passive modalities give best results when combined with supervised exercise and patient education—not as a standalone "quick fix." Long-term improvement always depends on active participation and rehab.
            </li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            A 2025 comparative study: TENS + ultrasound plus exercise &gt; high-intensity laser plus exercise for chronic lumbar radiculopathy—highlighting the importance of multi-modal, individualized care.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Myths & Realities</h2>
          <table className="w-full text-left text-gray-700 mb-6 border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">Myth</th>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">Reality</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">"Machines cure everything—no need to exercise"</td>
                <td className="border border-gray-300 px-4 py-2">
                  Modalities support recovery but do not replace the role of targeted movement, hands-on therapy, and rehab.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">"More intensity/stronger current is better"</td>
                <td className="border border-gray-300 px-4 py-2">
                  Stronger is not always better—treatments are based on medical need and individual tolerance.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">"One-size-fits-all"</td>
                <td className="border border-gray-300 px-4 py-2">
                  Modern protocols adjust modalities to your diagnosis, phase of recovery, and personal comfort.
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">When Might You Need These Modalities?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Pain control is a barrier to rehab or daily life</li>
            <li>Rapid swelling reduction is required (sports injuries, post-op)</li>
            <li>Muscle re-activation after injury, stroke, or surgery when voluntary contraction is difficult</li>
            <li>Accessory to exercise for stubborn tendinopathies or nerve healing</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>VitalPhysio⁺ in Bengaluru</strong> uses the latest globally-proven modalities—always as part of a holistic, active recovery plan adapted for each patient. Unsure what you need? Ask for a full assessment before requesting (or refusing) any specific machine-based treatment!
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