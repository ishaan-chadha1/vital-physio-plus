"use client";

import { motion } from "framer-motion";

export default function ConditionsSummary() {
  return (
    <section
      id="conditions"
      className="bg-white py-20 px-6 text-blue-900 scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto space-y-14">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Conditions We Treat
        </motion.h2>

        {[
          {
            title: "Musculoskeletal",
            description:
              "Back pain, neck pain, sports injuries, osteoarthritis—utilizing manual therapy, exercise prescription, and electrotherapies to restore strength and mobility.",
          },
          {
            title: "Neuro‑Physiotherapy",
            description:
              "Stroke recovery, Parkinson's disease, multiple sclerosis—combining task‑oriented training and balance strategies to optimize neural plasticity.",
          },
          {
            title: "Pediatric",
            description:
              "Developmental delays, cerebral palsy, juvenile arthritis—gentle, play‑based interventions to support motor milestones and functional gains.",
          },
          {
            title: "Geriatric",
            description:
              "Arthritis, balance disorders, post‑fracture rehabilitation—focusing on fall prevention, strength maintenance, and independence.",
          },
        ].map((condition, index) => (
          <motion.div
            key={condition.title}
            className="space-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-800">
              {condition.title}
            </h3>
            <p className="text-lg leading-relaxed text-blue-900">
              {condition.description}
            </p>
          </motion.div>
        ))}

        <motion.div
          className="text-center pt-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="/conditions"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Explore All Conditions We Treat
          </a>
        </motion.div>
      </div>
    </section>
  );
}
