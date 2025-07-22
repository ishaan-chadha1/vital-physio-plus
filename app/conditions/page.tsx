"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Heart,
  Brain,
  Activity,
  Users,
  Stethoscope,
  Dumbbell,
  ChevronLeft,
} from "lucide-react";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";
import CTA from "@/components/CTA";

// Clinical Table Data
const clinicalTable = [
  {
    category: "Spine & Joints",
    conditions:
      "Back pain, Neck pain, Sciatica, Disc issues, Osteoarthritis, Shoulder & Knee pain.",
    benefit:
      "Eases acute and chronic pain, significantly improves joint mobility and flexibility, strengthens core and supporting muscles, restores full range of motion, reduces reliance on medication, and often prevents the need for surgery.",
  },
  {
    category: "Sports Injuries",
    conditions:
      "Sprains, Strains, Ligament tears (e.g., ACL), Overuse injuries, Running injuries.",
    benefit:
      "Accelerates healing and recovery, rebuilds strength and endurance, improves agility and balance, implements injury prevention strategies, and ensures a safe and optimized return to sport.",
  },
  {
    category: "Neurological Disorders",
    conditions:
      "Stroke, Parkinson's, MS, Spinal Cord Injuries, Balance disorders, TBI.",
    benefit:
      "Improves motor control, coordination, and strength, enhances balance and gait, manages spasticity, helps adapt to functional limitations, and significantly boosts independence and quality of life.",
  },
  {
    category: "Chronic Pain",
    conditions: "Persistent back/neck pain, Headaches, Fibromyalgia, CRPS.",
    benefit:
      "Provides lasting pain relief through targeted techniques, improves coping mechanisms, increases functional capacity, and enhances overall well-being to regain control over life.",
  },
  {
    category: "Women's Health",
    conditions:
      "Pelvic floor dysfunction (incontinence, pain), Pre/Post-natal care, Osteoporosis.",
    benefit:
      "Strengthens pelvic floor muscles, reduces symptoms of incontinence and pain, aids in comprehensive post-partum recovery, improves bone density, and provides tailored support for various female health stages.",
  },
  {
    category: "Post-Operative Care",
    conditions:
      "Joint replacements, Spinal surgeries, Ligament repairs, Cancer recovery.",
    benefit:
      "Ensures optimal and accelerated recovery, restores range of motion and strength, reduces pain and swelling, prevents complications, and guides a safe return to daily activities and exercise.",
  },
  {
    category: "Cardio-Respiratory",
    conditions: "COPD, Asthma, Post-heart attack rehab, Bronchitis.",
    benefit:
      "Improves lung function through breathing exercises, enhances endurance and exercise capacity, strengthens respiratory muscles, and improves overall functional independence for daily living.",
  },
];

// Main Condition Categories
const conditionCategories = [
  {
    title: "Orthopedic & Musculoskeletal Conditions",
    icon: Activity,
    color: "from-blue-500 to-blue-600",
    sections: [
      {
        title: "Spine Conditions",
        items: [
          "Acute and Chronic Lower Back Pain (Lumbago)",
          "Neck Pain (Cervicalgia), including stiffness and muscle spasms",
          "Sciatica (nerve pain radiating down the leg)",
          "Disc Prolapse / Herniation (Slipped Disc)",
          "Degenerative Disc Disease",
          "Sacroiliac (SI) Joint Dysfunction / Pain",
          "Spinal Stenosis",
          "Whiplash Injuries",
          "Posture-related Pain",
        ],
      },
      {
        title: "Upper Extremity Conditions",
        items: [
          "Shoulder Conditions: Frozen Shoulder (Adhesive Capsulitis), Rotator Cuff Tears and Tendinopathy, Dislocations, Fractures, Impingement Syndrome, AC Joint Separations",
          "Elbow Pain: Tennis Elbow (Lateral Epicondylitis), Golfer's Elbow (Medial Epicondylitis)",
          "Wrist & Hand Conditions: Carpal Tunnel Syndrome, De Quervain's Tenosynovitis, Sprains, Fractures, Tendonitis",
        ],
      },
      {
        title: "Lower Extremity Conditions",
        items: [
          "Hip Conditions: Hip Fractures, Labral Tears, Femoroacetabular Impingement (FAI), Greater Trochanteric Pain Syndrome",
          "Knee Conditions: ACL Injuries, PCL, MCL, LCL Ligament Tears, Meniscus Tears, Patellofemoral Pain Syndrome (Runner's Knee), Chondromalacia Patellae",
          "Foot and Ankle Injuries: Plantar Fasciitis, Achilles Tendinopathy, Ankle Sprains, Fractures, Shin Splints, Metatarsalgia",
        ],
      },
      {
        title: "General Musculoskeletal Concerns",
        items: [
          "Osteoarthritis & Rheumatoid Arthritis (joint pain and stiffness management)",
          "Bursitis & Tendonitis (inflammation)",
          "Fibromyalgia (widespread chronic pain)",
          "Myofascial Pain Syndrome",
          "General Joint Cracking or Discomfort",
          "Muscle Strains and Sprains",
          "Repetitive Strain Injuries (RSI)",
        ],
      },
    ],
  },
  {
    title: "Sports Injuries & Performance Enhancement",
    icon: Dumbbell,
    color: "from-green-500 to-green-600",
    intro:
      "Our specialized sports physiotherapy program helps athletes of all levels recover rapidly from injuries, prevent recurrence, and optimize their physical performance through targeted rehabilitation and conditioning.",
    sections: [
      {
        title: "Sports Rehabilitation",
        items: [
          "Acute Sports Injuries (e.g., ankle sprains, muscle tears)",
          "Overuse Syndromes (e.g., Achilles tendinopathy, patellar tendinopathy)",
          "Ligamentous Injuries (e.g., ACL, MCL tears)",
          "Stress Fractures",
          "Post-surgical Sports Rehabilitation",
          "Return-to-Sport Programs",
          "Performance Optimization (flexibility, strength, agility training)",
        ],
      },
    ],
  },
  {
    title: "Neurological Conditions",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
    intro:
      "We provide expert neurological rehabilitation to improve function, mobility, and independence for individuals affected by conditions of the brain, spinal cord, and nerves.",
    sections: [
      {
        title: "Neurological Rehabilitation",
        items: [
          "Stroke Rehabilitation (Hemiplegia, weakness, balance issues)",
          "Parkinson's Disease (mobility, balance, gait training)",
          "Multiple Sclerosis (MS) (fatigue management, spasticity, balance)",
          "Spinal Cord Injuries (SCI)",
          "Traumatic Brain Injuries (TBI)",
          "Bell's Palsy",
          "Peripheral Neuropathy",
          "Balance Disorders & Vertigo (BPPV)",
          "Developmental Delays in Children (Pediatric Neurological conditions)",
        ],
      },
    ],
  },
  {
    title: "Chronic Pain & Complex Conditions",
    icon: Activity,
    color: "from-red-500 to-red-600",
    intro:
      "Our holistic approach addresses the multifaceted nature of chronic pain, providing targeted therapies and empowering strategies for long-term relief and improved quality of life.",
    sections: [
      {
        title: "Pain Management",
        items: [
          "Various Types of Headaches (Migraine, Tension-Type, Cervicogenic)",
          "Chronic Regional Pain Syndrome (CRPS)",
          "Fibromyalgia",
          "Chronic Fatigue Syndrome",
          "Lymphedema (swelling management)",
          "Muscular Dystrophy",
          "Post-Operative Cancer Care (e.g., scar management, mobility)",
          "Rehabilitation After Burns (scarring, mobility)",
        ],
      },
    ],
  },
  {
    title: "Women's Health & Pelvic Floor",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    intro:
      "Providing sensitive, expert care for conditions unique to women across all stages of life, focusing on restoring function and improving well-being.",
    sections: [
      {
        title: "Women's Health",
        items: [
          "Pelvic Floor Dysfunction (Urinary Incontinence, Pelvic Pain, Pelvic Organ Prolapse)",
          "Pre-natal & Post-natal Care (Diastasis Recti, back pain, C-section recovery)",
          "Osteoporosis Management (bone density support, fall prevention)",
          "PCOS (Physical activity guidance)",
        ],
      },
    ],
    note: "Our Women's Health program uses advanced technology like the UI Chair for effective, non-invasive treatment.",
  },
  {
    title: "Cardio-Respiratory Health",
    icon: Stethoscope,
    color: "from-cyan-500 to-cyan-600",
    intro:
      "Specialized rehabilitation programs designed to improve lung function, exercise capacity, and overall cardiovascular health for individuals with heart and lung conditions.",
    sections: [
      {
        title: "Respiratory Rehabilitation",
        items: [
          "Chronic Obstructive Pulmonary Disease (COPD)",
          "Asthma Management",
          "Post-Heart Attack & Cardiac Surgery Rehabilitation",
          "Cystic Fibrosis",
          "Bronchitis & Emphysema",
          "Respiratory Muscle Weakness",
        ],
      },
    ],
  },
];

// FAQ Data
const faqs = [
  {
    question: "Can physiotherapy help me avoid back surgery?",
    answer:
      "Often, yes. For many musculoskeletal conditions like disc herniation or sciatica, targeted physiotherapy can significantly improve function and reduce pain, potentially delaying or even eliminating the need for surgery. Learn more on our blog.",
  },
  {
    question: "How does physiotherapy help in stroke recovery?",
    answer:
      "By retraining movement and strength, reducing spasticity, and improving mobility. Our stroke rehab program focuses on tailored exercises and neuroplasticity to help the brain regain function. Read about stroke recovery.",
  },
];

export default function ConditionsPdfPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const orthopedicSections = conditionCategories[0].sections;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % orthopedicSections.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + orthopedicSections.length) % orthopedicSections.length
    );
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % orthopedicSections.length);
    }, 20000); // 20 seconds

    return () => clearInterval(timer);
  }, [orthopedicSections.length]);
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700;900&display=swap");
        .font-lato {
          font-family: "Lato", sans-serif;
        }
        body {
          background-color: #ffffff;
        }
        .gradient-conditions {
          background: linear-gradient(94deg, #163774 0%, #47a5d6 100%);
        }
        .condition-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .condition-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .section-card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.05)
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <LandingNavbar />

      {/* HERO BANNER */}
      {/* THIN BLUE HERO BANNER */}
      <section className="gradient-conditions relative w-full py-8 md:py-12 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "url('/physio_banner_overlay.svg') repeat, linear-gradient(94deg, #163774 0%, #47a5d6 100%)",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white font-extrabold text-4xl md:text-5xl drop-shadow-2xl tracking-tight font-lato mb-4"
          >
            Conditions We Expertly Treat
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl font-medium"
          >
            Restoring Health & Function for a Better Life in Bengaluru
          </motion.p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-bold text-xl md:text-xl text-gray-700 leading-relaxed mb-8 ">
              At{" "}
              <span className="font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-lg">
                VitalPhysio⁺
              </span>
              , our highly skilled team is proficient in treating an extensive
              array of physical conditions. We focus on diagnosing the root
              cause of your discomfort and providing evidence-based,
              personalized treatment plans to ensure effective recovery and
              lasting relief.
            </p>
          </motion.div>
        </div>
      </section>
      {/* MAIN CONDITION CATEGORIES */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {conditionCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="condition-card bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
              >
                {/* Category Header */}
                <div
                  className={`flex items-center mb-8 ${categoryIndex > 0 ? "justify-center" : ""}`}
                >
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg mr-6`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={categoryIndex > 0 ? "text-center" : ""}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-lato mb-2">
                      {category.title}
                    </h2>
                    {category.intro && (
                      <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                        {category.intro}
                      </p>
                    )}
                  </div>
                </div>

                {/* Special carousel for Orthopedic & Musculoskeletal Conditions */}
                {/* Special carousel for Orthopedic & Musculoskeletal Conditions */}
                {categoryIndex === 0 ? (
                  <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Carousel Container */}
                    <div className="relative">
                      {/* Desktop Carousel View */}
                      <div className="hidden md:block">
                        <div className="overflow-hidden rounded-2xl">
                          <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                              transform: `translateX(-${currentSlide * 100}%)`,
                            }}
                          >
                            {category.sections.map((section, sectionIndex) => (
                              <div
                                key={section.title}
                                className="w-full flex-shrink-0"
                              >
                                <div className="section-card p-8 rounded-2xl mx-4">
                                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-lato text-center">
                                    {section.title}
                                  </h3>
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {section.items.map((item, itemIndex) => (
                                      <div
                                        key={itemIndex}
                                        className="text-gray-700 text-sm leading-relaxed flex items-start group"
                                      >
                                        <span className="text-blue-500 mr-3 mt-1.5 transform group-hover:scale-125 transition-transform flex-shrink-0">
                                          •
                                        </span>
                                        <span className="group-hover:text-gray-900 transition-colors">
                                          {item}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Mobile Horizontal Scroll View */}
                      <div className="md:hidden">
                        <div
                          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
                          style={{ scrollbarWidth: "thin" }}
                        >
                          {category.sections.map((section, sectionIndex) => (
                            <div
                              key={section.title}
                              className="flex-shrink-0 w-80 snap-center"
                            >
                              <div className="section-card p-6 rounded-2xl h-full">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-lato text-center">
                                  {section.title}
                                </h3>
                                <div className="space-y-3">
                                  {section.items.map((item, itemIndex) => (
                                    <div
                                      key={itemIndex}
                                      className="text-gray-700 text-sm leading-relaxed flex items-start group"
                                    >
                                      <span className="text-blue-500 mr-3 mt-1.5 transform group-hover:scale-125 transition-transform flex-shrink-0">
                                        •
                                      </span>
                                      <span className="group-hover:text-gray-900 transition-colors">
                                        {item}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Desktop Carousel Controls - Removed slide counter */}
                    <div className="hidden md:flex justify-center mt-6">
                      {/* Indicators */}
                      <div className="flex space-x-2">
                        {category.sections.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentSlide
                                ? "bg-blue-500 scale-125"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="hidden md:block w-full bg-gray-200 rounded-full h-1 mt-4">
                      <div
                        className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                        style={{
                          width: `${((currentSlide + 1) / category.sections.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  /* Centered content for other categories */
                  <div className="flex justify-center">
                    <div className="max-w-4xl w-full">
                      {category.sections.map((section, sectionIndex) => (
                        <motion.div
                          key={section.title}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: sectionIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="section-card p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center mb-6"
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-6 font-lato">
                            {section.title}
                          </h3>
                          <div className="space-y-3 max-w-2xl mx-auto">
                            {section.items.map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: itemIndex * 0.05,
                                }}
                                viewport={{ once: true }}
                                className="text-gray-700 text-sm leading-relaxed flex items-start group justify-start"
                              >
                                <span className="text-blue-500 mr-3 mt-1.5 transform group-hover:scale-125 transition-transform">
                                  •
                                </span>
                                <span className="group-hover:text-gray-900 transition-colors text-left">
                                  {item}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Special Note */}
                {category.note && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`mt-8 p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl border-l-4 border-blue-500 ${categoryIndex > 0 ? "text-center" : ""}`}
                  >
                    <p className="text-blue-800 font-medium text-lg">
                      <strong>Special Note:</strong> {category.note}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 font-lato"
          >
            People Also Ask:
          </motion.h2>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="font-bold text-blue-900 text-xl mb-4">
                  Q: {faq.question}
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  A: {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL TABLE SECTION */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-center">
              <h3 className="text-white text-3xl md:text-4xl font-bold font-lato">
                How VitalPhysio⁺ Helps Different Conditions
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-100 to-blue-50">
                    <th className="px-8 py-6 text-left font-bold text-blue-700 border-r border-gray-300 text-lg">
                      Condition Category
                    </th>
                    <th className="px-8 py-6 text-left font-bold text-blue-700 border-r border-gray-300 text-lg">
                      Common Conditions Treated
                    </th>
                    <th className="px-8 py-6 text-left font-bold text-blue-700 text-lg">
                      How VitalPhysio⁺ Helps
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {clinicalTable.map((row, index) => (
                    <motion.tr
                      key={row.category}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } border-b border-gray-200 hover:bg-blue-50 transition-all duration-300 group`}
                    >
                      <td className="px-8 py-6 font-bold text-gray-900 border-r border-gray-300 group-hover:text-blue-800">
                        {row.category}
                      </td>
                      <td className="px-8 py-6 text-gray-700 border-r border-gray-300 leading-relaxed">
                        {row.conditions}
                      </td>
                      <td className="px-8 py-6 text-gray-700 leading-relaxed">
                        {row.benefit}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
