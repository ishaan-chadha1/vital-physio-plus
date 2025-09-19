"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import { getCalApi } from "@calcom/embed-react";

export default function PediatricPhysiotherapyContent() {
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
            "headline": "Pediatric Physiotherapy in Bengaluru: Helping Your Child Thrive",
            "description": "Expert pediatric physiotherapy services in Bengaluru for developmental delays, childhood injuries, and neurological conditions. Child-friendly approaches for better outcomes.",
            "image": [
              "https://vitalphysio.plus/images/pediatric-physiotherapy.jpg",
              "https://vitalphysio.plus/images/child-physiotherapy-bengaluru.jpg"
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
            "datePublished": "2024-01-10T09:00:00+05:30",
            "dateModified": "2024-01-10T09:00:00+05:30",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://vitalphysio.plus/knowledge/pediatric-physiotherapy"
            },
            "articleSection": "Healthcare",
            "keywords": ["pediatric physiotherapy", "child physiotherapy", "developmental delays", "Bengaluru", "childhood injuries", "cerebral palsy", "motor development"],
            "about": [
              {
                "@type": "MedicalCondition",
                "name": "Developmental Delays"
              },
              {
                "@type": "MedicalCondition", 
                "name": "Cerebral Palsy"
              },
              {
                "@type": "MedicalCondition",
                "name": "Childhood Injuries"
              }
            ],
            "mentions": [
              {
                "@type": "MedicalSpecialty",
                "name": "Pediatric Physiotherapy"
              },
              {
                "@type": "Place",
                "name": "Bengaluru",
                "alternateName": "Bangalore"
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
                "name": "What conditions does a pediatric physiotherapist treat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pediatric physiotherapists treat developmental delays, cerebral palsy, genetic conditions like Down syndrome, neurological disorders, post-injury recovery, feeding difficulties, balance issues, muscle weakness, and coordination problems in children from birth through adolescence."
                }
              },
              {
                "@type": "Question", 
                "name": "At what age should my child see a physiotherapist?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Children can benefit from physiotherapy from birth onwards. Early intervention is key - if you notice delays in milestones like holding head up, rolling, crawling, or walking, unusual movement patterns, frequent falls, or difficulty with daily activities, consult a pediatric physiotherapist as soon as possible."
                }
              },
              {
                "@type": "Question",
                "name": "Is pediatric physiotherapy painful for children?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, pediatric physiotherapy is designed to be gentle, fun, and supportive. Sessions use play-based exercises, games, and interactive activities that children enjoy. The approach is always child-friendly and focuses on making therapy engaging rather than painful or scary."
                }
              },
              {
                "@type": "Question",
                "name": "How long does pediatric physiotherapy treatment take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Treatment duration varies depending on the child's condition and goals. Some children show improvement within weeks, while others may need ongoing support. Early intervention typically leads to better and faster results. Your physiotherapist will create an individualized plan based on your child's specific needs."
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
            Pediatric Physiotherapy—Child-Friendly Approaches Parents Should Know
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Every child in Bengaluru deserves a bright, active start. Pediatric physiotherapy empowers babies, children, and teens to overcome movement challenges—whether due to delayed milestones, neurological/orthopedic conditions, or injuries. Here's what every parent should know, based on the latest evidence and approaches from Bengaluru's pediatric physiotherapists.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">What is Pediatric Physiotherapy?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              Pediatric physiotherapy is a specialized branch focused on evaluating, diagnosing, and addressing movement, strength, and functional issues in children from birth through adolescence.
            </li>
            <li>
              It helps address developmental delays, frequent falls, muscle weakness, difficulty walking, cerebral palsy, genetic conditions (Down syndrome), and post-injury or post-surgery care.
            </li>
            <li>
              Treatment blends science with creativity—using games, play-based exercises, and hands-on therapy for fun, engaging rehabilitation.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">When Should Parents Seek Pediatric Physiotherapy?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Persistent delays reaching milestones (not holding head up, rolling, crawling, or walking on time).</li>
            <li>Unusual walking patterns (toe-walking, frequent falls, poor posture, one foot turning in/out).</li>
            <li>Diagnosed neurological, neuromuscular, or genetic conditions.</li>
            <li>Recovery needs post-injury, fracture, or after surgery.</li>
            <li>Difficulty feeding due to oro-motor issues, trouble latching, or head preference to one side.</li>
            <li>Difficulty participating in play, sports, or daily activities.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Family-Centered, Holistic Approach</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Assessment:</strong> Detailed review of child's development, family history, and physical abilities.
            </li>
            <li>
              <strong>Individualized Plan:</strong> Every program is tailored to your child's age, personality, family goals, and home resources.
            </li>
            <li>
              <strong>Play-Based Therapy:</strong> Exercises are converted into age-appropriate games, obstacle courses, and interactive sessions—making kids love therapy!
            </li>
            <li>
              <strong>Parent Empowerment:</strong> Parent/caregiver education and home programs are prioritized to ensure progress continues beyond the clinic.
            </li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Early intervention (before problems "grow out") leads to better results and improved self-reliance long-term.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Common Approaches in Evidence-Based Pediatric Physiotherapy</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Neurodevelopmental techniques—Bobath, Rood, Kabat-Knott-Voss (for cerebral palsy, developmental issues).</li>
            <li>Motor learning and sensory integration (for autism, ADHD, coordination disorders).</li>
            <li>Strength, endurance, and balance training.</li>
            <li>Assistive device prescription (walkers, orthotics as needed).</li>
            <li>Parent/adult education for ongoing support at home.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Frequently Asked Questions</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Will my child be in pain?</strong> Sessions are gentle, always designed to be fun and supportive—not painful or scary.
            </li>
            <li>
              <strong>How long does therapy last?</strong> Some children improve within weeks; others need ongoing support. The earlier you start, the greater the results.
            </li>
            <li>
              <strong>Can therapy be preventive?</strong> Absolutely. Starting therapy for at-risk kids (premature birth, family history) enhances child development and prevents complications down the line.
            </li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Worried about your child's movement, posture, play, or recovery?</strong> Book a child-friendly consultation with a pediatric physiotherapist at VitalPhysio⁺, Bengaluru—parents and kids both leave smiling!
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