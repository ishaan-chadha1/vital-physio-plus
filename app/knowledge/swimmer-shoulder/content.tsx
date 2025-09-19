"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import { getCalApi } from "@calcom/embed-react";

export default function SwimmerShoulderContent() {
  React.useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "consultation" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <>
      {/* JSON-LD Structured Data for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Swimmer's Shoulder: Causes, Symptoms, and Physio Treatment",
            "description": "Comprehensive guide to swimmer's shoulder treatment and prevention. Learn how physiotherapy can get you back in the pool pain-free with expert care in Bengaluru.",
            "image": [
              "https://vitalphysio.plus/images/swimmer-shoulder-treatment.jpg",
              "https://vitalphysio.plus/images/swimming-injury-prevention.jpg"
            ],
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
            "datePublished": "2024-01-18T09:00:00+05:30",
            "dateModified": "2024-01-18T09:00:00+05:30",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://vitalphysio.plus/knowledge/swimmer-shoulder"
            },
            "articleSection": "Aquatic Sports Medicine",
            "keywords": ["swimmer's shoulder", "swimming injuries", "shoulder impingement", "rotator cuff injury", "aquatic sports physiotherapy", "Bengaluru", "swimming rehabilitation"],
            "about": [
              {
                "@type": "MedicalCondition",
                "name": "Swimmer's Shoulder",
                "alternateName": "Shoulder Impingement Syndrome"
              },
              {
                "@type": "MedicalCondition", 
                "name": "Rotator Cuff Injury"
              },
              {
                "@type": "MedicalCondition",
                "name": "Shoulder Tendinitis"
              },
              {
                "@type": "MedicalCondition",
                "name": "Subacromial Impingement"
              }
            ],
            "mentions": [
              {
                "@type": "MedicalSpecialty",
                "name": "Aquatic Sports Physiotherapy"
              },
              {
                "@type": "Place",
                "name": "Bengaluru",
                "alternateName": "Bangalore"
              },
              {
                "@type": "SportsTeam",
                "name": "Swimming"
              },
              {
                "@type": "MedicalTherapy",
                "name": "Rotator Cuff Strengthening"
              }
            ]
          }),
        }}
      />

      {/* JSON-LD Structured Data for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best way to prevent swimmer's shoulder?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best prevention for swimmer's shoulder includes proper warm-up and cool-down routines, strengthening rotator cuff and scapular stabilizer muscles, maintaining proper swimming technique, adequate rest between training sessions, and addressing muscle imbalances early. Regular physiotherapy assessments can identify risk factors before injury occurs."
                }
              },
              {
                "@type": "Question", 
                "name": "How long does it take to recover from swimmer's shoulder?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Recovery from swimmer's shoulder typically takes 4-12 weeks depending on severity and compliance with treatment. Mild cases may resolve in 4-6 weeks with proper physiotherapy, while more severe impingement or rotator cuff injuries may require 8-12 weeks. Early intervention and consistent rehabilitation exercises are key to faster recovery."
                }
              },
              {
                "@type": "Question",
                "name": "What are the main symptoms of swimmer's shoulder?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Main symptoms of swimmer's shoulder include pain during or after swimming, especially with overhead movements, shoulder stiffness, weakness in the affected arm, clicking or catching sensations, and difficulty sleeping on the affected side. Pain typically worsens with continued swimming activity and improves with rest."
                }
              },
              {
                "@type": "Question",
                "name": "Can I continue swimming with swimmer's shoulder?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You should not continue swimming with swimmer's shoulder pain as this can worsen the injury and delay healing. Complete rest from swimming is often necessary initially, followed by a gradual return-to-sport program under physiotherapy guidance. Alternative training methods like pool walking or kick-only sets may be possible during recovery."
                }
              },
              {
                "@type": "Question",
                "name": "What exercises help treat swimmer's shoulder?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Effective exercises for swimmer's shoulder include rotator cuff strengthening (external rotation), scapular stabilization exercises (wall angels, scapular retractions), posterior shoulder stretches (sleeper stretch), and core strengthening. Specific exercises should be prescribed by a physiotherapist based on individual assessment and injury severity."
                }
              }
            ]
          }),
        }}
      />

      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Article Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
            Preventing Common Shoulder Injuries in Swimmers
          </h1>
          <p className="text-[rgb(236,105,31)] text-sm mb-4">
            A Physiotherapy Guide from VitalPhysio⁺
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Swimming, while being a low-impact sport, puts the shoulder complex under repetitive stress. Without the right approach, even elite swimmers are at risk of "swimmer's shoulder"—pain and dysfunction that can sideline your performance. At VitalPhysio⁺, we specialize in sports rehab to keep shoulders resilient, injury-free, and strong in and out of the pool.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            Why Are Shoulder Injuries So Common in Swimmers?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Repetitive Motion:</strong> The overhead strokes required in swimming (freestyle, butterfly, backstroke) place tremendous demand on the rotator cuff and shoulder stabilizers.
            </li>
            <li>
              <strong>Muscle Imbalances:</strong> Stronger chest muscles combined with weaker upper-back and rotator cuff muscles can throw off shoulder mechanics.
            </li>
            <li>
              <strong>Overtraining & Poor Technique:</strong> Inadequate rest, improper warm-up, or technical faults in stroke can quickly lead to overuse syndromes, tendinitis, and impingement.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            How Physiotherapy Protects Swimmers' Shoulders
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Early Assessment:</strong> Identifying technique flaws and muscle imbalances before pain develops.
            </li>
            <li>
              <strong>Targeted Strengthening:</strong> Building resilience in the rotator cuff, scapular stabilizers, and core for optimal shoulder stability and stroke efficiency.
            </li>
            <li>
              <strong>Flexibility & Mobility:</strong> Ensuring a full, pain-free range of motion through structured stretching and myofascial release.
            </li>
            <li>
              <strong>Injury Prevention Education:</strong> Teaching optimal warm-ups, cooldowns, and self-management skills.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">
            Key Strengthening & Stretching Exercises for Shoulder Protection
          </h2>
          <table className="w-full text-left border-collapse border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">Exercise</th>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">Benefit</th>
                <th className="border border-gray-300 px-4 py-2 bg-[rgb(236,105,31)] text-white">How-To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Scapular Retraction</td>
                <td className="border border-gray-300 px-4 py-2">Strengthens upper back (middle traps/rhomboids)</td>
                <td className="border border-gray-300 px-4 py-2">Squeeze shoulder blades together, hold 5 seconds, repeat 10–15 times.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">External Rotation</td>
                <td className="border border-gray-300 px-4 py-2">Activates rotator cuff (infraspinatus/teres min.)</td>
                <td className="border border-gray-300 px-4 py-2">Use elastic band, rotate arm outward, repeat 10–15 reps each arm.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Wall Angels</td>
                <td className="border border-gray-300 px-4 py-2">Improves mobility and posture</td>
                <td className="border border-gray-300 px-4 py-2">Slide arms up/down wall, keep contact throughout, 10 reps.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Sleeper Stretch</td>
                <td className="border border-gray-300 px-4 py-2">Increases posterior shoulder flexibility</td>
                <td className="border border-gray-300 px-4 py-2">Lie on side, press forearm gently toward table, hold 30 sec, repeat.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Serratus Push-Ups</td>
                <td className="border border-gray-300 px-4 py-2">Activates scapular stabilizers</td>
                <td className="border border-gray-300 px-4 py-2">In push-up position, protract/retract shoulder blades, 10–15 reps.</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Bonus Tip:</strong> Always warm up shoulders with dynamic movements (e.g., arm circles, band pull-aparts) and prioritize cool-down stretches after every swim session.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>When to Seek Professional Help:</strong> Persistent shoulder pain, clicking, or loss of strength should never be ignored! Early intervention by a qualified physiotherapist ensures a rapid, safe return to optimal swimming performance and helps prevent long-term issues.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Take your aquatic performance to new heights!</strong> Contact VitalPhysio⁺ today for a comprehensive swimmer's shoulder assessment and a personalized injury prevention plan.
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