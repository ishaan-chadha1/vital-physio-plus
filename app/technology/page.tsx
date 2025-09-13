"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Wind,
  Atom,
  Dumbbell,
  ShieldCheck,
  Bone,
  ChevronRight,
  X,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import TechnologyTable from "@/components/technology-table";

// --- DATA ---
const tableData = [
  {
    modality: "High-Intensity Laser",
    conditions: "Back/Neck pain, Arthritis, Tendinopathy",
    benefit: "Accelerated healing, rapid pain relief",
  },
  {
    modality: "Shockwave Therapy",
    conditions: "Chronic tendinopathies (heel, shoulder, elbow)",
    benefit: "Breaks calcifications, boosts circulation",
  },
  {
    modality: "Spinal Decompression",
    conditions: "Herniated discs, Sciatica",
    benefit: "Reduces nerve compression, eases pain",
  },
  {
    modality: "UI Chair (HIFEM)",
    conditions: "Urinary Incontinence, Pelvic Pain",
    benefit: "Strengthens pelvic floor, non-invasive",
  },
  {
    modality: "AI Smart Gym",
    conditions: "Post-op rehab, Strength deficits",
    benefit: "Data-driven progress, precise resistance",
  },
];

const modalitiesData = [
  {
    id: 1,
    title: "High-Intensity Laser",
    image: "/Laser.png",
    placeholderImage:
      "https://via.placeholder.com/600x400/ffa500/ffffff?text=High-Intensity+Laser",
    borderColor: "border-orange-400",
    shadowColor: "shadow-orange-200",
    accentColor: "from-orange-400 to-yellow-400",
    description:
      "This advanced laser penetrates deep into tissues to stimulate cellular repair at the source. It's a powerful, non-invasive tool for rapid pain relief and reduced inflammation.",
    treats:
      "Chronic back/neck pain, arthritis, plantar fasciitis, post-surgical pain.",
    benefit:
      "Accelerates healing and provides immediate pain relief without medication.",
  },
  {
    id: 2,
    title: "rPMS (Repetitive Magnetic Stimulation)",
    image: "/rPMS.jpg",
    placeholderImage:
      "https://via.placeholder.com/600x400/ff69b4/ffffff?text=rPMS+Device",
    borderColor: "border-pink-400",
    shadowColor: "shadow-pink-200",
    accentColor: "from-pink-400 to-rose-400",
    description:
      "With deep magnetic pulses that penetrate up to 10cm, rPMS targets nerves and muscles directly. It's excellent for managing chronic pain, reducing spasticity, and promoting neural regeneration.",
    treats: "Chronic pain, spasticity, nerve damage.",
    benefit:
      "Deep, non-invasive stimulation for pain relief and muscle re-education.",
  },
  {
    id: 3,
    title: "AI-Powered Smart Gym (Aeroleap Pro)",
    image: "/AroleapPro.png",
    placeholderImage:
      "https://via.placeholder.com/600x400/9370db/ffffff?text=Smart+Gym",
    borderColor: "border-purple-400",
    shadowColor: "shadow-purple-200",
    accentColor: "from-purple-400 to-blue-400",
    description:
      "Our smart gym uses AI-controlled resistance for precise strength training. With over 150 exercises and real-time feedback, it's ideal for post-op rehab and athletic conditioning, ensuring every movement is perfect.",
    treats: "Post-op weakness, athletic conditioning needs.",
    benefit: "Precise, data-driven strength training with real-time feedback.",
  },
  {
    id: 4,
    title: "Shockwave Therapy",
    image: "/HIL.png",
    placeholderImage:
      "https://via.placeholder.com/600x400/90ee90/ffffff?text=Shockwave+Therapy",
    borderColor: "border-green-400",
    shadowColor: "shadow-green-200",
    accentColor: "from-green-400 to-emerald-400",
    description:
      "Used for chronic tendon issues, this therapy delivers high-energy acoustic waves to break down calcifications, stimulate blood flow, and regenerate damaged tissue.",
    treats: "Plantar fasciitis, tennis elbow, shoulder tendinopathies.",
    benefit:
      "Breaks down scar tissue and boosts circulation for natural healing.",
  },
  {
    id: 5,
    title: "UI Chair (HIFEM Technology)",
    image: "/ui-chair.jpg",
    placeholderImage:
      "https://via.placeholder.com/600x400/6495ed/ffffff?text=UI+Chair",
    borderColor: "border-indigo-400",
    shadowColor: "shadow-indigo-200",
    accentColor: "from-indigo-400 to-purple-400",
    description:
      "A revolutionary, non-invasive pelvic floor trainer. A single session induces over 12,000 deep contractions, effectively restoring bladder control, improving sexual function, and strengthening core musculature—all while you remain fully clothed.",
    treats: "Urinary incontinence, pelvic pain, post-natal weakness.",
    benefit: "Strengthens the entire pelvic floor effortlessly and discreetly.",
    link: {
      text: "Learn about Women's Health Services →",
      href: "#",
    },
  },
  {
    id: 6,
    title: "Spinal Decompression",
    image: "/Spinal-Decompression.jpg",
    placeholderImage:
      "https://via.placeholder.com/400x400/4169e1/ffffff?text=VitalPhysio",
    borderColor: "border-blue-400",
    shadowColor: "shadow-blue-200",
    accentColor: "from-blue-400 to-sky-400",
    description:
      "Gentle, non-surgical therapy to relieve back and neck pain by reducing pressure on the spinal discs and nerves.",
    treats: "Herniated discs, Sciatica.",
    benefit: "Reduces nerve compression, eases pain.",
  },
];

// --- COMPONENT ---

export default function TechnologyPage() {
  const [modalData, setModalData] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (modalityId) => {
    setImageErrors((prev) => ({ ...prev, [modalityId]: true }));
  };

  return (
    <>
      <Head>
        <title>Advanced Technology | VitalPhysio⁺</title>
        <meta
          name="description"
          content="Discover the cutting-edge technology used at VitalPhysio⁺ to provide advanced physiotherapy and rehabilitation services in Bengaluru."
        />
        <meta
          name="keywords"
          content="physiotherapy technology, advanced rehabilitation, cutting-edge physiotherapy, Bengaluru physiotherapy technology"
        />
        <meta name="author" content="VitalPhysio⁺" />
        <meta name="robots" content="index, follow" />
      </Head>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap");
        .font-lato {
          font-family: "Lato", sans-serif;
        }
        body {
          background-color: #f0f9ff;
        }
        .gradient-pdf {
          background: linear-gradient(
            94deg,
            var(--vp-blue) 0%,
            var(--vp-teal) 100%
          );
        }
        :root {
          --vp-blue: #004f8c;
          --vp-teal: #008094;
          --vp-orange: #ec691f;
        }

        .floating-shadow {
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15));
        }

        .teal-table-card {
          background-color: #0f766e;
          box-shadow:
            0 10px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .teal-table-head {
          padding: 1.25rem 1.5rem;
          background: none;
        }
        .teal-table-title {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .teal-table th {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.875rem;
          padding: 1rem 1.5rem;
          letter-spacing: 0.025em;
        }
        .teal-table td {
          color: #ffffff;
          font-weight: 400;
          padding: 1rem 1.5rem;
          transition:
            color 0.2s,
            background 0.2s;
        }
        .teal-table tr {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: background 0.2s;
        }
        .teal-table tbody tr:last-child {
          border-bottom: none;
        }
        .teal-table tbody tr:hover td {
          background: #ffffff !important;
          color: #134e4a !important;
        }
        .teal-table tbody tr:hover {
          background: #ffffff !important;
        }
      `}</style>

      <LandingNavbar />

      {/* HERO BANNER */}
      <section className="bg-gradient-to-r from-[var(--vp-blue)] to-[var(--vp-teal)] py-12 md:py-16 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Cutting-Edge Technology
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Explore the innovative tools and techniques we use to accelerate
              healing and enhance outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CARD: INVESTED IN YOUR SUPERIOR CARE */}
      <section className="flex justify-center items-center py-10 md:py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100 relative overflow-hidden px-6 md:px-10 py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-5">
              Invested in Your Superior Care
            </h2>
            <p className="text-base md:text-lg text-gray-800 mb-2">
              At{" "}
              <span className="font-semibold text-blue-600">VitalPhysio⁺</span>,
              we are committed to providing you with the most effective and
              efficient path to recovery. Our clinic is equipped with a curated
              selection of high-end, state-of-the-art physiotherapy devices that
              represent the pinnacle of therapeutic technology.
            </p>
            <p className="text-base md:text-lg text-gray-800 mb-2">
              These advanced tools, combined with our expert physiotherapists,
              enable us to deliver precise, targeted treatments that accelerate
              healing, reduce pain, and restore function more effectively than
              traditional methods.
            </p>
            <p className="font-semibold text-blue-900 mt-4">
              Explore how our cutting-edge equipment can benefit your journey to
              vitality.
            </p>
          </div>
        </div>
      </section>

      {/* MODALITIES SECTION */}
      <section className="bg-white py-8 md:py-14">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20 px-4">
          {modalitiesData.map((modality, idx) => (
            <motion.div
              key={modality.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } md:gap-12 gap-8`}
            >
              {/* Image - No background, just the image with shadow */}
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  onClick={() => setModalData(modality)}
                  className="relative cursor-pointer group"
                >
                  {/* Gradient accent behind image on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${modality.accentColor} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 scale-110`}
                  />

                  {/* Main image with floating shadow */}
                  <img
                    src={
                      imageErrors[modality.id]
                        ? modality.placeholderImage
                        : modality.image
                    }
                    alt={modality.title}
                    className={`relative z-10 w-auto max-w-full h-auto max-h-[280px] md:max-h-[350px] object-contain floating-shadow rounded-lg transition-transform duration-300`}
                    onError={() => handleImageError(modality.id)}
                  />

                  {/* Subtle glow effect on hover */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center w-full md:w-1/2">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      {modality.title}
                    </h3>
                    <div
                      className={`w-20 h-1 bg-gradient-to-r ${modality.accentColor} rounded-full`}
                    />
                  </div>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {modality.description}
                  </p>

                  <div className="space-y-4 pt-2">
                    <motion.div
                      className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="font-bold text-gray-900 text-sm uppercase tracking-wider block mb-2">
                        Treats
                      </span>
                      <span className="text-gray-700 text-base">
                        {modality.treats}
                      </span>
                    </motion.div>

                    <motion.div
                      className={`bg-gradient-to-r ${modality.accentColor} bg-opacity-10 rounded-xl p-4 border ${modality.borderColor}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="font-bold text-gray-900 text-sm uppercase tracking-wider block mb-2">
                        Key Benefit
                      </span>
                      <span className="text-gray-700 text-base">
                        {modality.benefit}
                      </span>
                    </motion.div>

                    {modality.link && (
                      <motion.a
                        href={modality.link.href}
                        className="inline-flex items-center mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
                        whileHover={{ x: 6 }}
                      >
                        {modality.link.text}
                        <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TABLE CARD */}
      <TechnologyTable />

      {/* CTA SECTION */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-sky-50 flex flex-col items-center justify-center py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl w-full flex flex-col items-center px-4 text-center"
        >
          <div className="mb-8">
            <h4 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">
              Ready to benefit from our advanced technology and expert care?
            </h4>
          </div>
          <motion.a
            href="#book"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-8 md:px-12 rounded-full shadow-xl text-base md:text-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule your personalized consultation
            <ChevronRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* MODAL */}
      <AnimatePresence>
        {modalData && (
          <ModalityModal
            data={modalData}
            onClose={() => setModalData(null)}
            imageErrors={imageErrors}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// --- MODAL COMPONENT ---
function ModalityModal({ data, onClose, imageErrors }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all duration-200"
          >
            <X size={20} />
          </button>

          {/* Modal Header with Image */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={imageErrors?.[data.id] ? data.placeholderImage : data.image}
              alt={data.title}
              className="w-auto max-w-full h-auto max-h-48 object-contain mb-4 floating-shadow"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
              {data.title}
            </h2>
            <div
              className={`w-20 h-1 bg-gradient-to-r ${data.accentColor} rounded-full mt-3`}
            />
          </div>
        </div>

        <div className="px-8 pb-8 space-y-4">
          <p className="text-gray-700 leading-relaxed text-center">
            {data.description}
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
            <span className="font-bold text-blue-900 block mb-1">Treats:</span>
            <span className="text-gray-700">{data.treats}</span>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
            <span className="font-bold text-green-900 block mb-1">
              Key Benefit:
            </span>
            <span className="text-gray-700">{data.benefit}</span>
          </div>

          {data.link && (
            <motion.a
              href={data.link.href}
              className="inline-flex items-center mt-4 text-blue-600 font-semibold hover:text-blue-800 group"
              whileHover={{ x: 4 }}
            >
              {data.link.text}
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
