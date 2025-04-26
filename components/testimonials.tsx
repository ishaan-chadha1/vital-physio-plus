"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Vital Physio+ helped me recover after knee surgery — I couldn’t have asked for better care. They really know their stuff!",
  },
  {
    name: "James T.",
    text: "As a runner, I’ve dealt with recurring injuries. The team here gave me the tools and support to get back on track safely.",
  },
  {
    name: "Priya K.",
    text: "The therapists made me feel heard and taken care of. I finally feel like my back pain is under control!",
  },
  {
    name: "Marcus D.",
    text: "Modern, professional, and super friendly. Booking is easy and the results speak for themselves.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#38bdf8] text-white"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          What Our Patients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#3cc4fc] p-6 rounded-xl text-left shadow-md hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out"
            >
              <p className="text-md italic mb-4">“{t.text}”</p>
              <p className="font-semibold text-sm">— {t.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <a
            href="/testimonials"
            className="inline-block bg-white text-blue-500 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition"
          >
            See More Testimonials
          </a>
        </div>
      </div>
    </section>
  );
}
