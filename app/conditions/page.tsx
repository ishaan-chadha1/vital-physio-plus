"use client";

import LandingNavbar from "@/components/landing-navbar";

export default function ConditionsPage() {
  return (
    <>
      <LandingNavbar />

      <div className="pt-40 pb-20 px-6 max-w-6xl mx-auto text-blue-800">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center mb-12 border-b-2 border-blue-200 pb-4">
          Conditions We Treat
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg mb-10 leading-relaxed">
          At VitalPhysio⁺, we are dedicated to providing evidence-based, personalized
          physiotherapy care for a wide range of conditions. Our experienced team
          utilizes advanced modalities and structured treatment pathways to ensure
          optimal recovery outcomes. Below is an overview of the conditions we
          commonly address:
        </p>

        {/* Section Cards */}
        <div className="flex flex-col gap-10">
          {conditions.map((section, i) => (
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
                    <span className="font-semibold">{item}</span>
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

const conditions = [
  {
    title: "Musculoskeletal Disorders",
    items: [
      "Back and Neck Pain: Including herniated discs, sciatica, and postural dysfunctions.",
      "Arthritis: Management of osteoarthritis and rheumatoid arthritis to reduce pain and improve joint function.",
      "Tendinopathies: Such as tennis elbow, golfer's elbow, and Achilles tendinopathy.",
      "Ligament and Muscle Injuries: Sprains, strains, and tears resulting from trauma or overuse.",
      "Fracture Rehabilitation: Post-cast or post-surgical physiotherapy to restore strength and mobility.",
    ],
  },
  {
    title: "Neurological Conditions",
    items: [
      "Stroke Rehabilitation: Enhancing mobility, balance, and functional independence post-stroke.",
      "Parkinson’s Disease: Improving gait, balance, and overall physical function.",
      "Multiple Sclerosis (MS): Managing symptoms to maintain mobility and quality of life.",
      "Peripheral Neuropathies: Addressing nerve-related issues to reduce pain and improve function.",
    ],
  },
  {
    title: "Pediatric Conditions",
    items: [
      "Developmental Delays: Interventions to support motor skill development in children.",
      "Cerebral Palsy: Customized programs to enhance mobility and functional abilities.",
      "Torticollis and Plagiocephaly: Treatment to correct head positioning and neck muscle tightness.",
    ],
  },
  {
    title: "Geriatric Conditions",
    items: [
      "Balance Disorders: Fall prevention strategies and balance training.",
      "Osteoporosis: Exercise programs to strengthen bones and reduce fracture risk.",
      "Arthritic Conditions: Pain management and mobility enhancement for age-related joint issues.",
    ],
  },
  {
    title: "Women's Health",
    items: [
      "Prenatal and Postnatal Care: Addressing musculoskeletal changes during and after pregnancy.",
      "Pelvic Floor Dysfunction: Treatment for incontinence, pelvic pain, and related conditions.",
    ],
  },
  {
    title: "Cardiopulmonary Conditions",
    items: [
      "Chronic Obstructive Pulmonary Disease (COPD): Breathing exercises and endurance training.",
      "Post-Cardiac Surgery Rehabilitation: Programs to restore cardiovascular fitness and functional capacity.",
    ],
  },
  {
    title: "Sports Injuries",
    items: [
      "Acute Injuries: Management of sprains, strains, and overuse injuries.",
      "Post-Surgical Rehabilitation: Recovery programs following orthopedic surgeries.",
      "Performance Enhancement: Strength and conditioning programs tailored to athletic goals.",
    ],
  },
  {
    title: "Post-Surgical Rehabilitation",
    items: [
      "Joint Replacements: Physiotherapy to regain mobility and strength after hip or knee replacements.",
      "Spinal Surgeries: Rehabilitation to restore function and prevent complications post-surgery.",
    ],
  },
];
