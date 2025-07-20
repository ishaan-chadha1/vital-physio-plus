"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";

// --- DATA ---
const clinicalTable = [
  {
    category: "Spine & Joints",
    conditions: "Back pain, Neck pain, Sciatica, Disc issues, Osteoarthritis, Shoulder & Knee pain.",
    benefit:
      "Eases acute and chronic pain, significantly improves joint mobility and flexibility, strengthens core and supporting muscles, restores full range of motion, reduces reliance on medication, and often prevents the need for surgery."
  },
  {
    category: "Sports Injuries",
    conditions: "Sprains, Strains, Ligament tears (e.g., ACL), Overuse injuries, Running injuries.",
    benefit:
      "Accelerates healing and recovery, rebuilds strength and endurance, improves agility and balance, implements injury prevention strategies, and ensures a safe and optimized return to sport."
  },
  {
    category: "Neurological Disorders",
    conditions: "Stroke, Parkinson's, MS, Spinal Cord Injuries, Balance disorders, TBI.",
    benefit:
      "Improves motor control, coordination, and strength, enhances balance and gait, manages spasticity, helps adapt to functional limitations, and significantly boosts independence and quality of life."
  },
  {
    category: "Chronic Pain",
    conditions: "Persistent back/neck pain, Headaches, Fibromyalgia, CRPS.",
    benefit:
      "Provides lasting pain relief through targeted techniques, improves coping mechanisms, increases functional capacity, and enhances overall well-being to regain control over life."
  },
  {
    category: "Women's Health",
    conditions: "Pelvic floor dysfunction (incontinence, pain), Pre/Post-natal care, Osteoporosis.",
    benefit:
      "Strengthens pelvic floor muscles, reduces symptoms of incontinence and pain, aids in comprehensive post-partum recovery, improves bone density, and provides tailored support for various female health stages."
  },
  {
    category: "Post-Operative Care",
    conditions: "Joint replacements, Spinal surgeries, Ligament repairs, Cancer recovery.",
    benefit:
      "Ensures optimal and accelerated recovery, restores range of motion and strength, reduces pain and swelling, prevents complications, and guides a safe return to daily activities and exercise."
  },
  {
    category: "Cardio-Respiratory",
    conditions: "COPD, Asthma, Post-heart attack rehab, Bronchitis.",
    benefit:
      "Improves lung function through breathing exercises, enhances endurance and exercise capacity, strengthens respiratory muscles, and improves overall functional independence for daily living."
  },
];

const sections = [
  {
    title: "Lower Extremity Conditions",
    points: [
      "Hip: Fractures, Labral Tears, FAI, GTPS",
      "Knee: ACL Injuries, PCL, MCL, LCL Tears, Meniscus Tears, Patellofemoral Pain Syndrome, Chondromalacia Patellae",
      "Foot/Ankle: Plantar Fasciitis, Achilles Tendinopathy, Ankle Sprains, Fractures, Shin Splints, Metatarsalgia"
    ]
  },
  {
    title: "Sports Injuries & Performance Enhancement",
    spacing: "pb-2",
    intro: "Our specialized sports physiotherapy program helps athletes of all levels recover rapidly from injuries, prevent recurrence, and optimize their physical performance through targeted rehabilitation and conditioning.",
    points: [
      "Acute Sports Injuries (e.g., ankle sprains, muscle tears)",
      "Overuse Syndromes (e.g., Achilles tendinopathy, patellar tendinopathy)",
      "Ligamentous Injuries (e.g., ACL, MCL tears)",
      "Stress Fractures",
      "Post-surgical Sports Rehabilitation",
      "Return-to-Sport Programs",
      "Performance Optimization (flexibility, strength, agility training)"
    ]
  },
  {
    title: "Neurological Conditions",
    intro: "We provide expert neurological rehabilitation to improve function, mobility, and independence for individuals affected by conditions of the brain, spinal cord, and nerves.",
    points: [
      "Stroke Rehabilitation (Hemiplegia, weakness, balance issues)",
      "Parkinson's Disease (mobility, balance, gait training)",
      "Multiple Sclerosis (MS) (fatigue management, spasticity, balance)",
      "Spinal Cord Injuries (SCI)",
      "Traumatic Brain Injuries (TBI)",
      "Bell's Palsy",
      "Peripheral Neuropathy",
      "Balance Disorders & Vertigo (BPPV)",
      "Developmental Delays in Children (Pediatric Neurological conditions)"
    ]
  },
  {
    title: "Chronic Pain & Complex Conditions",
    intro: "Our holistic approach addresses the multifaceted nature of chronic pain, providing targeted therapies and empowering strategies for long-term relief and improved quality of life.",
    points: [
      "Various Types of Headaches (Migraine, Tension-Type, Cervicogenic)",
      "Chronic Regional Pain Syndrome (CRPS)",
      "Fibromyalgia",
      "Chronic Fatigue Syndrome",
      "Lymphedema (swelling management)",
      "Muscular Dystrophy",
      "Post-Operative Cancer Care (e.g., scar management, mobility)",
      "Rehabilitation After Burns (scarring, mobility)"
    ]
  },
  {
    title: "Women's Health & Pelvic Floor",
    intro: "Providing sensitive, expert care for conditions unique to women across all stages of life, focusing on restoring function and improving well-being.",
    points: [
      "Pelvic Floor Dysfunction (Urinary Incontinence, Pelvic Pain, Pelvic Organ Prolapse)",
      "Pre-natal & Post-natal Care (Diastasis Recti, back pain, C-section recovery)",
      "Osteoporosis Management (bone density support, fall prevention)",
      "PCOS (Physical activity guidance)"
    ]
  },
  {
    title: "Cardio-Respiratory Health",
    intro: "Specialized rehabilitation programs designed to improve lung function, exercise capacity, and overall cardiovascular health for individuals with heart and lung conditions.",
    points: [
      "Chronic Obstructive Pulmonary Disease (COPD)",
      "Asthma Management",
      "Post-Heart Attack & Cardiac Surgery Rehabilitation",
      "Cystic Fibrosis",
      "Bronchitis & Emphysema",
      "Respiratory Muscle Weakness"
    ]
  },
  {
    title: "General Musculoskeletal Concerns",
    points: [
      "Osteoarthritis & Rheumatoid Arthritis (joint pain and stiffness management)",
      "Bursitis & Tendonitis (inflammation)",
      "Fibromyalgia (widespread chronic pain)",
      "Myofascial Pain Syndrome",
      "General Joint Cracking or Discomfort",
      "Muscle Strains and Sprains",
      "Repetitive Strain Injuries (RSI)"
    ]
  },
  {
    title: "Spine Conditions",
    points: [
      "Acute and Chronic Lower Back Pain (Lumbago)",
      "Neck Pain (Cervicalgia), including stiffness and muscle spasms",
      "Sciatica (nerve pain radiating down the leg)",
      "Disc Prolapse / Herniation (Slipped Disc)",
      "Degenerative Disc Disease",
      "Sacroiliac (SI) Joint Dysfunction / Pain",
      "Spinal Stenosis",
      "Whiplash Injuries",
      "Posture-related Pain"
    ]
  },
  {
    title: "Upper Extremity Conditions",
    points: [
      "Shoulder: Frozen Shoulder (Adhesive Capsulitis), Rotator Cuff Tears and Tendinopathy, Dislocations, Fractures, Impingement Syndrome, AC Joint Separations",
      "Elbow Pain: Tennis Elbow (Lateral Epicondylitis), Golfer's Elbow (Medial Epicondylitis)",
      "Wrist & Hand: Carpal Tunnel Syndrome, De Quervain's Tenosynovitis, Sprains, Fractures, Tendonitis"
    ]
  }
];

// --- PAGE COMPONENT ---
export default function ConditionsPdfPage() {
  return (
    <>
      <style jsx global>{`
        .gradient-banner {
          background: linear-gradient(95deg, #1e649e 0%, #41b7e6 100%);
        }
        .section-card {
          background: #fff;
          border-radius: 1.6rem;
          box-shadow: 0 4px 36px 0 rgba(30, 117, 174, 0.07);
          transition:
            transform 0.22s cubic-bezier(.43,.15,.32,1.43),
            box-shadow 0.22s cubic-bezier(.43,.15,.32,1.43),
            border-color 0.22s;
          will-change: transform, box-shadow;
          border: none;
        }
        .section-card:hover,
        .section-card:focus {
          transform: translateY(-6px) scale(1.022);
          box-shadow: 0 20px 44px 0 rgba(52, 144, 220, 0.18);
          border-left: 8px solid #0ff1c6 !important;
          border-right: 8px solid #0ff1c6 !important;
        }
        .section-card:active {
          transform: scale(0.99);
        }
        .pdf-table-blue {
          background: linear-gradient(97deg,#19bec7 0%,#36dde9 100%);
        }
        .pdf-table-header {
          background: rgba(255,255,255,0.15);
        }
        .pdf-table th, .pdf-table td {
          padding: 1.35rem 1.1rem;
          font-size: 1.05rem;
        }
        .pdf-table th {
          color: #fff;
          font-weight: 700;
        }
        .pdf-table td {
          color: #f9fdff;
          font-weight: 500;
          transition: background 0.32s, color 0.32s;
        }
        .pdf-table tr {
          border-bottom: 1.5px solid #ffffff45;
        }
        .pdf-table tbody tr:hover td {
          background: #fff !important;
          color: #19bec7 !important;
        }
      `}</style>
      <LandingNavbar />

      {/* HERO BANNER (Animated) */}
      <section className="relative w-full gradient-banner min-h-[300px] py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.84, ease: [0.43, 0.15, 0.32, 1.43] }}
          className="max-w-3xl w-full mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="mt-10 text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-xl"
          >
            Conditions We Expertly Treat
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.32 }}
            className="text-white/90 text-lg mb-1"
          >
            Restoring Health &amp; Function for a Better Life in Bengaluru
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.49 }}
            className="mt-2 text-white font-bold text-base tracking-wide"
          >
            Comprehensive Care for a Wide Range of Conditions
          </motion.p>
        </motion.div>
      </section>

      {/* BODY REGION CARDS */}
      <section className="py-12 md:py-16 bg-white flex flex-col gap-10 px-2">
        <div className="max-w-5xl w-full mx-auto flex flex-col gap-8">
          {sections.map((sec, idx) => (
            <motion.div
              key={sec.title}
              className={`section-card px-5 md:px-8 py-8 flex flex-col my-0 transition-all relative
                before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:rounded-[1.6rem]
              `}
              style={{
                borderLeft: idx % 2 === 0 ? "6px solid #10b6b6" : "6px solid #3196e6",
                borderRight: idx % 2 !== 0 ? "6px solid #10b6b6" : "6px solid #3196e6"
              }}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{
                duration: 0.65,
                delay: 0.06 + idx * 0.04,
                ease: [0.43, 0.15, 0.32, 1.43]
              }}
              whileHover={{
                scale: 1.022,
                boxShadow: "0 24px 44px 0 rgba(52, 144, 220, 0.17)",
              }}
              whileTap={{ scale: 0.98 }}
              tabIndex={0}
            >
              <motion.h2
                className="text-2xl font-bold text-sky-800 mb-2"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: 0.09 + idx * 0.05 }}
              >
                {sec.title}
              </motion.h2>
              {sec.intro && (
                <motion.p
                  className="mb-2 text-sky-700 font-medium"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.46, delay: 0.13 + idx * 0.05 }}
                >
                  {sec.intro}
                </motion.p>
              )}
              <ul className="list-disc ml-7 mt-2 text-gray-800 leading-relaxed">
                {sec.points.map(point =>
                  <motion.li
                    key={point}
                    className="py-1 relative"
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.33, delay: 0.09 + idx * 0.07 }}
                    whileHover={{
                      color: "#10b6b6",
                      scale: 1.03
                    }}
                  >
                    {point}
                  </motion.li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TABLE SECTION (Animated, hover-inversion) */}
      <section className="py-10 px-2 flex justify-center bg-transparent">
        <motion.div
          className="pdf-table-blue rounded-3xl shadow-xl max-w-5xl w-full overflow-x-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, delay: 0.21 }}
          viewport={{ once: true, amount: 0.14 }}
        >
          
          <table className="pdf-table w-full min-w-[750px] text-left">
            <thead>
              <tr className="pdf-table-header">
                <th>Condition Category</th>
                <th>Common Conditions Treated</th>
                <th>How VitalPhysio⁺ Helps</th>
              </tr>
            </thead>
            <tbody>
              {clinicalTable.map(row => (
                <tr key={row.category}>
                  <td>{row.category}</td>
                  <td>{row.conditions}</td>
                  <td>{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-cyan-50 flex flex-col items-center justify-center py-12 md:py-16 mt-3">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.61, delay: 0.34 }}
          className="max-w-xl w-full flex flex-col items-center px-4"
          viewport={{ once: true, amount: 0.22 }}
        >
          <div className="text-center mb-6">
            <motion.h4
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.22 }}
              className="text-lg md:text-xl font-semibold text-cyan-900 mb-3"
              viewport={{ once: true }}
            >
              Take charge of your recovery with Bengaluru's most comprehensive physio care.
            </motion.h4>
          </div>
          <motion.a
            href="#book"
            whileHover={{
              background: "linear-gradient(90deg, #02dacd 0%, #4287f5 100%)",
              scale: 1.03,
              boxShadow: "0 10px 34px 0 rgba(19,220,195,0.11)"
            }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-sky-400 hover:from-cyan-700 hover:to-blue-500 text-white font-bold py-3 px-10 rounded-xl shadow-lg text-lg transition duration-300"
          >
            Book Your Assessment Now
            <ChevronRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
