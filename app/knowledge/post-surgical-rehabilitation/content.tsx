"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import Breadcrumb from "@/components/breadcrumb";
import { generateKnowledgeBreadcrumbs } from "@/utils/breadcrumbs";
import { getCalApi } from "@calcom/embed-react";

export default function PostSurgicalRehabilitationContent() {
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
            items={generateKnowledgeBreadcrumbs('post-surgical-rehabilitation', 'Post-Surgical Rehabilitation')}
          />

          {/* Article Schema JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Post-Surgical Rehabilitation—Optimizing Recovery after Orthopedic Surgery",
                "description": "Comprehensive guide to post-surgical rehabilitation at VitalPhysio⁺ Bengaluru. Learn about modern physiotherapy approaches for optimal recovery after orthopedic surgery including knee replacement, fracture repair, and spine surgery.",
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
                  "@id": "https://vitalphysio.plus/knowledge/post-surgical-rehabilitation"
                },
                "articleSection": "Post-Surgical Rehabilitation",
                "keywords": "post-surgical rehabilitation, orthopedic surgery recovery, physiotherapy Bengaluru, knee replacement recovery, fracture repair rehabilitation",
                "about": {
                  "@type": "Thing",
                  "name": "Post-Surgical Rehabilitation"
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
                    "name": "How soon after surgery should I start physiotherapy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Post-surgical physiotherapy typically begins within 24-48 hours after surgery with gentle breathing exercises and range-of-motion activities. Early movement is crucial for faster, safer recovery and preventing complications like blood clots and joint stiffness."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the goals of post-surgical rehabilitation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The main goals include restoring movement and flexibility, rebuilding strength and balance, controlling pain and swelling, preventing complications, and safely returning to daily activities and recreational pursuits through a customized program."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens if I delay physiotherapy after surgery?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Delaying physiotherapy increases the risk of complications including joint stiffness, scar tissue formation, muscle atrophy, and permanent mobility limitations. Early, progressive rehabilitation leads to better long-term outcomes."
                    }
                  }
                ]
              })
            }}
          />

          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            Post-Surgical Rehabilitation—Optimizing Recovery after Orthopedic Surgery
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Knee replacement, fracture repair, ligament reconstruction, or spine surgery—major orthopedic surgeries are life-changing events. The journey to full recovery begins after your operation, and evidence shows physiotherapy is key to getting you back to strength, function, and pain-free living in Bengaluru.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Why Is Physiotherapy Essential After Orthopedic Surgery?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Restores Movement:</strong> Surgery often leaves joints stiff and muscles weak. Physiotherapists use guided range-of-motion and stretching techniques to restore lost flexibility.
            </li>
            <li>
              <strong>Rebuilds Strength & Balance:</strong> Exercises progress from gentle activation to resistance training, rebuilding muscle and coordination so you regain confidence in walking, stairs, and daily activities.
            </li>
            <li>
              <strong>Pain and Swelling Control:</strong> Ice, compression, elevation, manual therapy, and (when appropriate) modalities like ultrasound or TENS help manage early post-op symptoms.
            </li>
            <li>
              <strong>Prevents Complications:</strong> Early mobilization and breathing exercises reduce risks of blood clots, pneumonia, and joint stiffness.
            </li>
            <li>
              <strong>Customized Program:</strong> Every post-surgical rehab plan is tailored to the type of procedure, your goals, and any unique needs (age, pre-surgery activity, other health issues).
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">What Does Modern Post-Operative Physiotherapy Include?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Early Phase (Hospital or Home):</strong> Breathing and circulatory exercises (to reduce blood clot risk), gentle range-of-motion, controlled movements, supported walking with an aid if needed, scar management, and post-op wound care guidance.
            </li>
            <li>
              <strong>Intermediate Phase:</strong> Weight-bearing progression, balancing on both sides, muscle strengthening for the operated joint (e.g., quadriceps after knee replacement), and functional training like bed mobility, transfers, and climbing stairs.
            </li>
            <li>
              <strong>Return to Function:</strong> Advanced strengthening (bodyweight, resistance bands, eventually machines), gait/running retraining, higher-level balance skills, and return to sport or recreational activities as indicated.
            </li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Early Movement Means Faster, Safer Recovery!</strong> Research from leading orthopedic and rehabilitation centers in India shows:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              Early, high-intensity progressive exercise leads to better long-term outcomes and less lingering weakness than "wait and see" or very passive rehab.
            </li>
            <li>
              Delaying physiotherapy increases risk of complications, scarring, and permanent mobility limitations.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Recovery Tips for Patients in Bengaluru</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Always follow your surgeon's and physio's timetable for increasing activities.</li>
            <li>Communicate openly about pain or barriers—good pain control is essential for effective rehab.</li>
            <li>Continue your home exercise program after supervised therapy for long-lasting results.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Ready to start getting back to the life—and movement—you love?</strong> Book your personalized post-surgery rehabilitation with VitalPhysio⁺, Bengaluru for globally-aligned care and compassionate support every step of the way.
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