"use client";

import { motion } from "framer-motion";

export default function VitalIntro() {
  return (
    <section className="bg-blue-50 py-20 px-6 text-blue-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          A Leading Centre for Modern Physiotherapy in Bengaluru
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed mb-8"
        >
          A leading physiotherapy and rehabilitation centre in Bellandur, Bengaluru, VitalPhysio⁺ combines
          evidence‑based protocols with state‑of‑the‑art equipment to deliver patient‑centric care.
        </motion.p>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="list-disc list-inside text-left md:text-center text-lg space-y-4 max-w-3xl mx-auto"
        >
          {[
            "Our 3,600 sq ft. facility offers targeted treatment for musculoskeletal, neurological, pediatric, and geriatric conditions.",
            "Patients begin their journey by booking an appointment — either through our dedicated number or online and completing a unique pre‑visit medical history form, enabling a comprehensive, highly personalized assessment.",
            "With specialized programmes— VitalPhysio⁺ ensures accelerated recovery, optimal function, and improved quality of life.",
          ].map((item, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
