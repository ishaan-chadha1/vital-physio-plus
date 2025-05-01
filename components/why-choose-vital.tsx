"use client";

import { CheckCircleIcon, BuildingOffice2Icon, ClipboardDocumentCheckIcon, UsersIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    title: "State‑of‑the‑Art Facility",
    description:
      "Our spacious 3,600 sq ft. centre in Bellandur is equipped with a water treadmill, electrotherapy suites, shockwave and laser therapy rooms—designed for optimal comfort and results.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Patient‑Centric Pre‑Visit Planning",
    description:
      "Complete your medical history form before your first session, so your therapist tailors recommendations from day one.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Specialized Programs",
    description:
      "We cover everything from sports recovery and pediatric support to geriatric balance training—under one roof.",
    icon: Squares2X2Icon,
  },
  {
    title: "Expert Team",
    description:
      "Our licensed therapists bring decades of experience, with specialization in manual therapy, needling, and rehab.",
    icon: UsersIcon,
  },
];

export default function WhyChooseVital() {
  return (
    <section
      id="why-us"
      className="bg-white py-20 px-6 text-blue-900 font-body"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
          Why Choose VitalPhysio⁺?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 px-4">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex items-start gap-4"
          >
            <item.icon className="h-10 w-10 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold font-heading mb-1">{item.title}</h3>
              <p className="text-base text-blue-900">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/why-vital-physio+"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Why VitalPhysio⁺?
        </a>
      </div>
    </section>
  );
}
