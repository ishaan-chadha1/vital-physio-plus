"use client";

import LandingNavbar from "@/components/landing-navbar";

export default function WhyVitalPhysioPage() {
  return (
    <>
      <LandingNavbar />

      <div className="pt-40 pb-20 px-6 max-w-6xl mx-auto text-blue-800">
        <h1 className="text-4xl font-bold text-center mb-12 border-b-2 border-blue-200 pb-4">
          Why VitalPhysio⁺?
        </h1>

        <p className="text-lg text-center mb-12 leading-relaxed">
          The Future of Physiotherapy, Rooted in Integrity and Results.<br />
          Choosing a physiotherapy provider is a decision that directly affects your health, comfort, and quality of life.
        </p>

        <p className="text-lg mb-10 leading-relaxed">
          At VitalPhysio⁺, we are proud to be redefining standards in Bengaluru by aligning every aspect of care with internationally accepted protocols and follow the IDEAL-Physiotherapy Framework—ensuring that your recovery is safe, structured, transparent, and truly effective.
        </p>

        <div className="flex flex-col gap-10">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01] animate-fade-in-up"
            >
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">{item.title}</h2>
              {item.points.map((point, i) => (
                <p key={i} className="text-lg mb-2 leading-relaxed">{point}</p>
              ))}
              {item.checks && (
                <ul className="mt-4 space-y-1">
                  {item.checks.map((check, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-green-600 font-semibold"
                    >
                      <span className="text-xl">✔</span>
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">VitalPhysio⁺ vs. Other Clinics</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-blue-200 rounded-lg">
              <thead className="bg-blue-100 text-blue-900">
                <tr>
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left">VitalPhysio⁺</th>
                  <th className="p-3 text-left">Typical Clinics</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-t border-blue-100">
                    <td className="p-3 font-medium text-blue-800">{row.feature}</td>
                    <td className="p-3 text-green-700">{row.vital}</td>
                    <td className="p-3 text-red-600">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 text-center text-blue-900">
          <h2 className="text-3xl font-bold mb-4">Choose with Confidence</h2>
          <p className="text-lg leading-relaxed mb-4">
            Whether you're recovering from surgery, managing chronic pain, or seeking expert guidance for your child or elderly parent,
            VitalPhysio⁺ offers care you can trust—modern, ethical, effective, and wholly patient centered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md transition">
              ✔ Book your appointment today
            </button>
            <button className="border border-blue-700 text-blue-700 hover:bg-blue-100 font-semibold py-3 px-6 rounded-md transition">
              ✔ Experience physiotherapy the way it should be
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const highlights = [
  {
    title: "1. Evidence Based Treatment, Not Trial and Error",
    points: [
      "Unlike clinics that rely heavily on intuition or outdated practices, we follow globally recognized, ICD-aligned diagnostic and treatment protocols. Each patient receives care that is:",
      "• Backed by the latest clinical evidence",
      "• Tailored to individual functional goals",
      "• Updated regularly, based on measurable progress",
    ],
    checks: [
      "Reduces unnecessary sessions",
      "Improves long term outcomes",
      "Avoids over treatment or under treatment",
    ],
  },
  {
    title: "2. Total Transparency in Costing",
    points: [
      "At VitalPhysio⁺, patients are fully informed—before therapy begins. Every plan includes:",
      "• Number of sessions",
      "• Techniques & equipment used",
      "• Estimated time to recovery",
      "• Clear, itemized costing",
      "There are no vague “packages,” and no hidden charges. We believe you deserve both clarity and value.",
    ],
  },
  {
    title: "3. Pre Visit Medical History for Personalized Care",
    points: [
      "We are among the first physiotherapy centers in India to request a comprehensive medical history form before your first consultation.",
      "This unique approach:",
      "• Allows therapists to prepare thoroughly",
      "• Reduces risk of missing out on vital details and overlooking contraindications",
      "• Enables a deeper, more effective first session",
    ],
    checks: [
      "Saves valuable time",
      "Builds patient–therapist trust from the start",
    ],
  },
  {
    title: "4. Advanced Equipment, Used Ethically",
    points: [
      "We use some of the most sophisticated physiotherapy equipment available—only when it adds real clinical value:",
      "• BTL Spinal Decompression Unit – Non invasive care for disc issues and chronic spinal conditions",
      "• rPMS (Salus Talent Pro) – Deep neuromuscular stimulation for pain relief and muscle activation",
      "• Shockwave & Laser Therapy – For tendon healing, pain modulation, and recovery acceleration",
      "• Water Treadmill – Controlled gait training in reduced weight bearing conditions",
      "Unlike many centers that promote equipment as marketing tools, our use is therapist led, condition specific, and based strictly on evidence.",
    ],
  },
  {
    title: "5. Structured Treatment Pathways (IDEAL Physiotherapy Framework)",
    points: [
      "At VitalPhysio+, we follow the IDEAL-Physiotherapy Framework—one of the most progressive global standards for physiotherapy delivery. It emphasizes:",
      "• Informed decision making",
      "• Defined objectives & documentation",
      "• Ethical application of therapy",
      "• Active patient involvement",
      "• Long term outcome orientation",
    ],
    checks: [
      "Every plan is goal driven",
      "Every outcome is measured",
      "Every session has purpose",
    ],
  },
  {
    title: "6. Modern, Safe, and Thoughtfully Designed Facility",
    points: [
      "Our 3,600 sq ft. centre in Bellandur, Bengaluru, is one of the most spacious and well equipped physiotherapy clinics in the city.",
      "• Zoning ensures patient safety and comfort",
      "• Electrotherapy, aquatic therapy, and rehab gym areas are purpose designed",
      "• Cleanliness, accessibility, and ergonomic design meet global rehab standards",
    ],
    checks: [
      "Ideal for patients of all ages and mobility levels",
    ],
  },
  {
    title: "7. Ethics, Honesty, and Accountability",
    points: [
      "Our clinical culture is one of honesty without compromise. From accurate diagnoses to realistic treatment timelines, we believe patients should always be fully informed, never oversold.",
      "We don’t overpromise. We deliver results—professionally, respectfully, and transparently.",
    ],
  },
];

const comparison = [
  {
    feature: "Evidence-Based Protocols",
    vital: "✔ Strict adherence to ICD-aligned, evidence-based treatment plans",
    other: "❌ Often rely on generalized or outdated methods",
  },
  {
    feature: "Transparent Pricing",
    vital: "✔ Upfront, itemized cost disclosures with no hidden charges",
    other: "❌ Ambiguous packages with potential hidden fees",
  },
  {
    feature: "Advanced Equipment Utilization",
    vital: "✔ Use of cutting-edge technology like BTL Decompression and rPMS, applied ethically",
    other: "❌ Limited or non-specific use of advanced modalities",
  },
  {
    feature: "Pre-Visit Medical History Capture",
    vital: "✔ Comprehensive history taken before the first visit for personalized care",
    other: "❌ History often collected during or after initial consultation",
  },
  {
    feature: "Structured Patient Journey",
    vital: "✔ Follows the IDEAL-Physio Framework ensuring consistent and measurable outcomes",
    other: "❌ Lack of standardized treatment pathways",
  },
  {
    feature: "Facility Design",
    vital: "✔ Purpose-built, 3,600 sq. ft. center with dedicated zones for various therapies",
    other: "❌ Generic spaces not tailored for specialized treatments",
  },
  {
    feature: "Therapist Qualifications",
    vital: "✔ Highly trained professionals with continuous education",
    other: "❌ Varying levels of expertise and ongoing training",
  },
  {
    feature: "Patient Involvement",
    vital: "✔ Active patient participation encouraged throughout the treatment process",
    other: "❌ Limited patient engagement in decision-making",
  },
];
