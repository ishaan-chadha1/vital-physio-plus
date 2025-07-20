"use client";

import React, { useState } from "react";
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
} from "lucide-react";
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
    icon: Zap,
    borderColor: "border-red-500",
    bg: "bg-gradient-to-br from-[#fceabb] via-[#f8b500] to-[#f76d1a]",
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
    icon: Atom,
    borderColor: "border-orange-500",
    bg: "bg-gradient-to-br from-[#fee2b8] via-[#faad63] to-[#d16ba5]",
    description:
      "With deep magnetic pulses that penetrate up to 10cm, rPMS targets nerves and muscles directly. It's excellent for managing chronic pain, reducing spasticity, and promoting neural regeneration.",
    treats: "Chronic pain, spasticity, nerve damage.",
    benefit:
      "Deep, non-invasive stimulation for pain relief and muscle re-education.",
  },
  {
    id: 3,
    title: "AI-Powered Smart Gym (Aeroleap Pro)",
    icon: Dumbbell,
    borderColor: "border-purple-500",
    bg: "bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#89f7fe]",
    description:
      "Our smart gym uses AI-controlled resistance for precise strength training. With over 150 exercises and real-time feedback, it's ideal for post-op rehab and athletic conditioning, ensuring every movement is perfect.",
    treats: "Post-op weakness, athletic conditioning needs.",
    benefit: "Precise, data-driven strength training with real-time feedback.",
  },
  {
    id: 4,
    title: "Shockwave Therapy",
    icon: Wind,
    borderColor: "border-green-500",
    bg: "bg-gradient-to-br from-[#d9f99d] via-[#bef264] to-[#34d399]",
    description:
      "Used for chronic tendon issues, this therapy delivers high-energy acoustic waves to break down calcifications, stimulate blood flow, and regenerate damaged tissue.",
    treats: "Plantar fasciitis, tennis elbow, shoulder tendinopathies.",
    benefit:
      "Breaks down scar tissue and boosts circulation for natural healing.",
  },
  {
    id: 5,
    title: "UI Chair (HIFEM Technology)",
    icon: ShieldCheck,
    borderColor: "border-indigo-500",
    bg: "bg-gradient-to-br from-[#dbeafe] via-[#818cf8] to-[#6366f1]",
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
    icon: Bone,
    borderColor: "border-blue-500",
    bg: "bg-gradient-to-br from-[#dbeafe] via-[#60a5fa] to-[#3b82f6]",
    description:
      "Gentle, non-surgical therapy to relieve back and neck pain by reducing pressure on the spinal discs and nerves.",
    treats: "Herniated discs, Sciatica.",
    benefit: "Reduces nerve compression, eases pain.",
  },
];

// --- COMPONENT ---

export default function TechnologyPage() {
  const [modalData, setModalData] = useState(null);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap");
        .font-lato {
          font-family: "Lato", sans-serif;
        }
        body {
          background-color: #f0f9ff; /* This is Tailwind's "sky-50" color */
        }
        /* --- THIS CLASS WAS MISSING --- */
        .gradient-pdf {
          background: linear-gradient(94deg, #163774 0%, #47a5d6 100%);
        }
        /* ----------------------------- */

        .teal-table-card {
          background-color: #0f766e; /* Solid dark teal background */
          box-shadow:
            0 10px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-radius: 0.5rem; /* 8px rounded corners */
          overflow: hidden;
        }
        .teal-table-head {
          padding: 1.25rem 1.5rem;
          background: none;
        }
        .teal-table-title {
          color: #ffffff;
          font-size: 1.5rem; /* 24px */
          font-weight: 700;
        }
        .teal-table th {
          background: rgba(255, 255, 255, 0.1); /* Lighter header background */
          color: #ffffff;
          font-weight: 600;
          font-size: 0.875rem; /* 14px */
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
          border-bottom: none; /* No border on the last row */
        }
        .teal-table tbody tr:hover td {
          background: #ffffff !important;
          color: #134e4a !important; /* Darkest teal for text on hover */
        }
        .teal-table tbody tr:hover {
          background: #ffffff !important;
        }
      `}</style>
      <LandingNavbar />
      {/* HERO BANNER (THINNER BANNER) */}
      <section className="gradient-pdf relative w-full max-h-[150px] py-12 md:py-16 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "url('/physio_banner_overlay.svg') repeat, linear-gradient(94deg, #163774 0%, #47a5d6 100%)",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 text-white font-extrabold text-3xl md:text-5xl drop-shadow-lg tracking-tight font-lato"
          >
            Cutting-Edge Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="text-white/90 mt-4 md:text-lg font-medium md:mt-7"
          >
            At <span className="font-semibold text-blue-100">VitalPhysio⁺</span>
            , we invest in state-of-the-art equipment that accelerates healing
            beyond traditional methods.
            <br />
            Each device is chosen for its proven clinical benefit.
          </motion.p>
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

      {/* MODALITIES SECTION - Alternating layout */}
      <section className="bg-white py-8 md:py-14">
        <div className="max-w-5xl mx-auto flex flex-col gap-14 md:gap-20 px-4">
          {modalitiesData.map((modality, idx) => (
            <div
              key={modality.id}
              className={`flex flex-col md:flex-row items-stretch ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } md:gap-10 gap-6 group`}
            >
              {/* Image Card */}
              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.015,
                  boxShadow: "0 8px 24px #0001",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setModalData(modality)}
                className={`w-full md:w-1/2 rounded-2xl shadow-lg border-2 ${
                  modality.borderColor
                } cursor-pointer bg-white hover:shadow-xl transition group`}
              >
                <div
                  className={`flex flex-col justify-center min-h-[260px] ${modality.bg}`}
                >
                  <div className="flex flex-col items-center justify-center py-9">
                    <modality.icon className="w-14 h-14 text-white drop-shadow-md" />
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex flex-col justify-center w-full md:w-1/2">
                <div className="h-full flex flex-col justify-center gap-4 px-2 py-1">
                  <h3 className="text-2xl font-bold text-blue-900">
                    {modality.title}
                  </h3>
                  <p className="text-gray-800 text-base font-medium">
                    {modality.description}
                  </p>
                  <div className="space-y-1 mt-2">
                    <p>
                      <span className="font-semibold text-blue-700">
                        Treats:{" "}
                      </span>
                      <span className="text-gray-700">{modality.treats}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-blue-700">
                        Benefit:{" "}
                      </span>
                      <span className="text-gray-700">{modality.benefit}</span>
                    </p>
                    {modality.link && (
                      <a
                        href={modality.link.href}
                        className="inline-block mt-3 text-blue-700 font-medium hover:underline transition"
                      >
                        {modality.link.text}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TABLE CARD */}
      <TechnologyTable />
      {/* CTA SECTION */}
      <section className="w-full bg-blue-50 flex flex-col items-center justify-center py-12 md:py-16">
        <div className="max-w-xl w-full flex flex-col items-center px-4 text-center">
          <div className="mb-6">
            <h4 className="text-lg md:text-xl font-semibold text-blue-900 mb-3">
              Ready to benefit from our advanced technology and expert care?
            </h4>
          </div>
          <a
            href="#book"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 px-10 rounded-xl shadow-lg text-lg transition"
          >
            Schedule your personalized consultation at VitalPhysio⁺
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* MODAL for cards */}
      <AnimatePresence>
        {modalData && (
          <ModalityModal data={modalData} onClose={() => setModalData(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

// --- MODAL COMPONENT ---

function ModalityModal({ data, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0.85 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0.85 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`p-7 border-t-8 ${data.borderColor}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-lg">
              <data.icon className="w-8 h-8 text-blue-800" />
            </div>
            <h2 className="text-2xl font-bold text-blue-900">{data.title}</h2>
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-gray-700">{data.description}</p>
            </div>
            <div>
              <span className="font-semibold text-blue-700">Treats: </span>
              <span className="text-gray-700">{data.treats}</span>
            </div>
            <div>
              <span className="font-semibold text-blue-700">Benefit: </span>
              <span className="text-gray-700">{data.benefit}</span>
            </div>
            {data.link && (
              <a
                href={data.link.href}
                className="block mt-4 text-blue-600 font-medium hover:underline"
              >
                {data.link.text}
              </a>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </motion.div>
    </motion.div>
  );
}
