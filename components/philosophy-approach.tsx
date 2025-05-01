"use client";

import { motion } from "framer-motion";

export default function PhilosophyApproach() {
  return (
    <section
      id="philosophy"
      className="bg-blue-50 py-20 px-6 text-blue-900 scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto space-y-14">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Philosophy & Approach
        </motion.h2>

        {[
          {
            title: "Evidence‑Based, Internationally Accepted Protocols",
            text: `We follow ICD‑aligned diagnostic criteria and guidelines from leading rehabilitation authorities to deliver consistent, high‑quality care.`,
          },
          {
            title: "Patient‑Centric Care with Pre‑Visit History Collection",
            text: `Unique to VitalPhysio+, patients complete a detailed medical history form prior to their first visit—enhancing communication, reducing missed details, and streamlining the initial.`,
          },
          {
            title: "Cutting‑Edge Technologies",
            text: `We leverage proprietary AI‑driven enhancements to refine treatment plans and monitor progress—maintaining intrigue around our advanced decision‑support tools without disclosing specifics.`,
          },
          {
            title: "Why the Plus in Our Name?",
            text: `The superscript “+” in our name and logo, VitalPhysio⁺, embodies our commitment to transcending conventional physiotherapy by integrating human expertise with intelligent technologies and specialized equipment—within an internationally acclaimed, evidence‑based framework. This strategic enhancement ensures accurate personalized diagnosis, real-time treatment adaptations, and accelerated recovery, clearly distinguishing VitalPhysio⁺.`,
            additional: `This fusion of innovation and compassion positions VitalPhysio⁺ as Bengaluru’s premier destination for physiotherapy and rehabilitation—where every patient is empowered to move freely, live fully.`,
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-lg leading-relaxed">{item.text}</p>
            {item.additional && (
              <p className="text-lg leading-relaxed mt-4">{item.additional}</p>
            )}
          </motion.div>
        ))}

        <div className="text-center pt-6">
          <motion.a
            href="/philosophy"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Learn More About Our Philosophy
          </motion.a>
        </div>
      </div>
    </section>
  );
}
