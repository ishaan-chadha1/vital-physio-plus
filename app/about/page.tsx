"use client";

import LandingNavbar from "@/components/landing-navbar"; // Adjust path as needed
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <LandingNavbar />

      <div className="pt-40 pb-20 px-6 max-w-6xl mx-auto text-blue-800">
        {/* Centered Header */}
        <h1 className="text-4xl font-bold text-center mb-12 border-b-2 border-blue-200 pb-4">
          About VitalPhysio⁺
        </h1>

        {/* Intro */}
        <p className="text-lg mb-6 leading-relaxed">
          VitalPhysio⁺ is a premier 3,600 sq ft. physiotherapy and
          rehabilitation centre strategically located in Bellandur, Bengaluru—
          one of the city’s fastest growing IT corridors, bounded by HSR Layout,
          Sarjapur Road, and Bellandur Lake, with proximity to Whitefield and
          Electronic City hubs.
        </p>

        <p className="text-lg mb-10 leading-relaxed">
          Our centre combines internationally accepted, evidence-based protocols
          with state-of-the-art equipment to deliver comprehensive,
          patient-centric care across musculoskeletal, neurological, pediatric,
          and geriatric specialties.
        </p>

        {/* Section Cards */}
        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <div
              key={i}
              className="w-full bg-blue-50 hover:bg-white transition-all duration-500 ease-in-out p-8 rounded-xl shadow-md hover:shadow-2xl border border-blue-100 transform hover:scale-[1.01] animate-fade-in-up"
            >
              <h2 className="text-2xl font-semibold mb-6 text-blue-900">
                {section.title}
              </h2>
              <ul className="space-y-4 text-blue-800 text-lg leading-relaxed">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 group transition-transform duration-300 hover:translate-x-2"
                  >
                    <span className="text-blue-700 font-bold">•</span>
                    <span>
                      <span className="font-semibold">{item.bold}</span>{" "}
                      {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 🔽 Formatted section data
const sections = [
  {
    title: "Mission & Values",
    items: [
      {
        bold: "Honesty, Integrity, Transparency:",
        rest: "Our mission anchors on fostering trust and open communication, ensuring every patient feels heard, respected, and informed.",
      },
      {
        bold: "Patient First Philosophy:",
        rest: "We believe that high quality care delivered with compassion naturally leads to enhanced outcomes and long term well-being.",
      },
      {
        bold: "Commitment to Excellence:",
        rest: "Guided by internationally recognized diagnostic criteria (ICD aligned) and best practices in rehabilitation, we strive to exceed clinical standards at every encounter.",
      },
    ],
  },
  {
    title: "The Team",
    items: [
      {
        bold: "Experienced Therapists:",
        rest: "Our licensed physiotherapists bring decades of combined expertise in manual therapy, needling, postoperative rehabilitation, and chronic condition management.",
      },
      {
        bold: "Specialist Certifications:",
        rest: "Team members hold advanced credentials in shockwave and laser therapy, with dedicated training in pediatric and neuro physiotherapy modalities.",
      },
      {
        bold: "Collaborative Care:",
        rest: "We emphasize a multidisciplinary approach—our therapists work closely with referring physicians, nutritionists, and orthopedic specialists to ensure holistic treatment plans.",
      },
      {
        bold: "Support & Intern Staff:",
        rest: "Under the guidance of senior clinicians, our support team and interns manage patient logistics and technology integration, enhancing both clinical efficiency and patient experience.",
      },
    ],
  },
  {
    title: "Facility Tour",
    items: [
      {
        bold: "Spacious, Patient Friendly Design:",
        rest: "Wide corridors, private consultation rooms, and open exercise zones—optimized for safety, privacy, and ease of navigation.",
      },
      {
        bold: "Dedicated Treatment Suites:",
        rest: "Separate areas for aquatic therapy (water treadmill), electrotherapy (ultrasound, IFT, TENS), and more.",
      },
      {
        bold: "Modern Rehabilitation Gym:",
        rest: "Equipped with Swiss balls, resistance bands, free weights, and ambulation aids, our gym supports tailored strength and balance programmes.",
      },
      {
        bold: "Comfort & Accessibility:",
        rest: "Ample natural light, ergonomic furnishings, and clear signage enhance patient comfort and streamline visits.",
      },
    ],
  },
];
