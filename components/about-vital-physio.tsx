"use client";

import { motion } from "framer-motion";

export default function AboutVitalPhysio() {
  return (
    <section
      id="about"
      className="bg-white py-20 px-6 text-blue-900 scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            About VitalPhysio⁺
          </h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Our 3,600 sq ft. centre in Bellandur, Bengaluru, is strategically
            located near major IT hubs and healthcare landmarks, offering
            convenient access and ample space for advanced rehabilitation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Mission & Values",
              text: "Built on honesty, integrity, and transparency.",
            },
            {
              title: "The Team",
              text: "Experienced physiotherapists, needling specialists, and support staff, guided by decades of clinical and strategic expertise.",
            },
            {
              title: "Facility Tour",
              text: "Modern treatment suites, aquatic therapy area, and dedicated exercise zones, ensuring comfort and privacy.",
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                {section.title}
              </h3>
              <p className="text-base leading-relaxed">{section.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="/about"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Learn More About Us
          </motion.a>
        </div>
      </div>
    </section>
  );
}
