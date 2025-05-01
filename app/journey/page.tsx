"use client";

import LandingNavbar from "@/components/landing-navbar";

export default function PatientJourneyPage() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6 text-blue-900 animate-fade-in-up">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Patient Journey
          </h1>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
            From the moment you decide to seek care, VitalPhysio⁺ ensures a seamless, patient focused
            experience that begins online and continues through personalized follow up. By integrating
            convenience with clinical rigor—starting with a dedicated booking line and online digital
            booking and pre visit history capture through ongoing outcome tracking—we deliver faster, safer,
            and more effective physiotherapy and rehabilitation.
          </p>

          <div className="grid gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-l-8 border-blue-600 hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
              >
                <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
                {step.details.map((point, i) => (
                  <p key={i} className="text-lg leading-relaxed mb-2">{point}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-medium leading-relaxed">
              This streamlined journey—from online booking to data driven follow up—is crafted to deliver
              exceptional outcomes, superior convenience, and unwavering support at every step of your therapy
              and rehabilitation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const steps = [
  {
    title: "Step 1: Book Appointment Online",
    details: [
      "Patients enjoy 24/7 access to our scheduling system, eliminating phone hold times and fitting therapy seamlessly into busy lives. Just call our dedicated Appointment Scheduling line: +91 80456 82666.",
      "Online booking reduces administrative workload and no shows, enabling our staff to focus on patient care rather than paperwork.",
      "Instant confirmations and automated reminders help patients prepare for their visit, improving adherence and satisfaction."
    ]
  },
  {
    title: "Step 2: Complete Pre Visit Medical History",
    details: [
      "Unique to VitalPhysio⁺, you complete a comprehensive medical history form before your first appointment, so your therapist arrives fully informed.",
      "Early history collection enhances diagnostic accuracy, guides evidence based treatment planning, and identifies contraindications—improving safety and efficiency.",
      "Patients report greater confidence and engagement when they see their concerns documented and addressed from day one."
    ]
  },
  {
    title: "Step 3: Initial Assessment & Personalized Treatment Plan",
    details: [
      "Your first session includes a detailed evaluation—posture analysis, mobility testing, strength measurements, and standardized outcome measures—aligned with best practice protocols.",
      "Using frameworks such as IDEAL Physio, we integrate clinical innovation with proven methods, ensuring your plan is both cutting edge and evidence based.",
      "A clear, goal oriented treatment plan is co created, outlining frequency, modalities, and home exercise programmes tailored to your lifestyle."
    ]
  },
  {
    title: "Step 4: Ongoing Progress Tracking & Follow Up",
    details: [
      "We employ robust outcomes tracking—collecting objective data on pain levels, functional scores, and range of motion—to monitor your improvement.",
      "Regular reassessments allow therapists to adjust intensity, introduce new exercises, or modify modalities, ensuring steady progress and preventing plateaus.",
      "Scheduled follow up sessions and digital check ins foster accountability, empower self management, and maintain momentum toward your goals.",
      "Studies show that structured follow up significantly enhances long term outcomes, reducing recurrence and sustaining functional gains."
    ]
  }
];
