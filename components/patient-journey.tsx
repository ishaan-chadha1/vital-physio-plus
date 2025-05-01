"use client";

import { motion } from "framer-motion";

export default function PatientJourney() {
  const steps = [
    {
      title: "1. Book Appointment Online",
      description:
        "Seamless form with preferred date/time selection.",
    },
    {
      title: "2. Complete Pre‑Visit Medical History",
      description:
        "Unique to VitalPhysio⁺, captures comprehensive health data to personalize your first visit.",
    },
    {
      title: "3. Initial Assessment & Personalized Treatment Plan",
      description:
        "Thorough examination, goal setting, and introduction to your dedicated therapist.",
    },
    {
      title: "4. Ongoing Progress Tracking & Follow‑Up",
      description:
        "Regular reassessments, outcome measures, and plan adjustments to ensure optimal recovery.",
    },
  ];

  return (
    <section
      id="journey"
      className="bg-blue-50 py-20 px-6 text-blue-900 font-body"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
          Patient Journey
        </h2>
      </div>

      <div className="relative border-l-4 border-blue-300 pl-6 space-y-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            {/* Dot indicator */}
            <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-600 rounded-full shadow-md z-10" />

            {/* Card content */}
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold font-heading mb-2">{step.title}</h3>
              <p className="text-base">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/journey"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Understand the Full Patient Journey
        </a>
      </div>
    </section>
  );
}
