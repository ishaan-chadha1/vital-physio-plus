"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import { getCalApi } from "@calcom/embed-react";

export default function LowBackPainContent() {
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
                "headline": "Physiotherapy for Chronic Low Back Pain: Myths, Facts & Recovery Pathways",
                "description": "Evidence-based physiotherapy solutions for chronic low back pain at VitalPhysio⁺ Bengaluru. Learn proven recovery pathways, debunk myths, and discover effective treatment options for lasting relief.",
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
                "datePublished": "2024-01-15",
                "dateModified": "2024-12-01",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://vitalphysio.plus/knowledge/low-back-pain"
                },
                "articleSection": "Health & Wellness",
                "keywords": "low back pain, physiotherapy, chronic pain, Bengaluru, rehabilitation, core strengthening",
                "about": {
                  "@type": "Thing",
                  "name": "Chronic Low Back Pain Treatment"
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
                    "name": "Is physiotherapy effective for chronic low back pain?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, physiotherapy is highly effective for chronic low back pain. Over 95% of cases improve with conservative, non-invasive physiotherapy treatments including exercise therapy, manual therapy, and patient education."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What exercises help with low back pain?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Effective exercises for low back pain include core strengthening, trunk muscle activation, flexibility exercises, and functional movement retraining. A qualified physiotherapist should design a personalized program based on your specific condition."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "When should I see a physiotherapist for back pain?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You should see a physiotherapist immediately if you experience severe pain with weakness, numbness, or bowel/bladder changes, pain lasting more than 3 weeks despite rest, or difficulty performing daily activities."
                    }
                  }
                ]
              })
            }}
          />

          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            Physiotherapy for Chronic Low Back Pain: Myths, Facts & Recovery Pathways
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Are you struggling with persistent lower back pain in Bengaluru? You aren't alone—chronic low back pain is now the world's leading cause of disability and affects people of all ages, especially those working desk jobs, driving long commutes, or leading sedentary lifestyles. But how effective is physiotherapy for chronic low back pain, and what truly works? Let's bust the myths and show you evidence-backed recovery options.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            8 Common Myths and Facts About Chronic Low Back Pain
          </h2>
          <table className="w-full text-left border-collapse border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">Myth</th>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">Fact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Rest is the best treatment for back pain</td>
                <td className="border border-gray-300 px-4 py-2">Prolonged rest can actually worsen pain. Staying active and guided movement promote faster recovery.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Exercise makes back pain worse</td>
                <td className="border border-gray-300 px-4 py-2">Moderate, targeted exercise is crucial—it strengthens core and back muscles.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Painkillers are a long-term solution</td>
                <td className="border border-gray-300 px-4 py-2">Medication only manages symptoms short-term. Physiotherapy treats the root causes and helps prevent recurrence.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Most back pain needs surgery</td>
                <td className="border border-gray-300 px-4 py-2">Surgery is rarely needed. Over 95% of cases improve with conservative, non-invasive physiotherapy.</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            What Actually Works? Physiotherapy's Proven Pathways to Relief
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Individualized Exercise Therapy: Trunk/core muscle activation, flexibility, functional movement retraining, and posture correction.</li>
            <li>Manual Therapy: Mobilization or gentle manipulation of the spine and soft tissues by hand—reducing stiffness and promoting blood flow.</li>
            <li>Patient Education: Guidance on safe activity, lifting, desk ergonomics, sleep postures, and long-term prevention.</li>
            <li>Supportive Modalities: Short-term use of heat, cold, TENS/IFT, or ultrasound may help pain but should never be the sole therapy.</li>
            <li>Self-Management: Home exercise programs and graded activity are vital for sustained success.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            Recovery Tips for People in Bengaluru
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Avoid long hours of uninterrupted sitting (especially IT professionals and drivers).</li>
            <li>Practice daily stretching and core strengthening—ask your physiotherapist for a program tailored to your needs.</li>
            <li>Set up your desk/workspace to promote neutral posture and reduce strain.</li>
            <li>Stay active—walk, cycle, or try water aerobics if pain is severe.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            When to See a Physiotherapist Immediately
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Severe pain with weakness, numbness, or bowel/bladder changes.</li>
            <li>Pain lasting more than 3 weeks despite rest/home strategies.</li>
            <li>Difficulty performing daily activities, work, or sleep.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Ready to take the first step towards a pain-free back?</strong> Book a personalized assessment with VitalPhysio⁺ in Bengaluru now and start your science-backed recovery journey.
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