"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Waves,
  Sun,
  Wind,
  Atom,
  Bone,
  HeartPulse,
  BrainCircuit,
  ShieldCheck,
  Dumbbell,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Users,
  Activity,
  Heart,
  Baby,
  Stethoscope,
  Home,
  Video,
  UserCheck,
  Play,
  Pause,
} from "lucide-react";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";
import React, { useState, useRef, useEffect, useCallback } from "react";
import CTA from "@/components/CTA";

// --- DATA ---

const coreServicesData = [
  {
    id: 1,
    title: "Musculoskeletal Rehabilitation",
    icon: Bone,
    borderColor: "border-blue-500",
    iconColor: "text-blue-600",
    accentColor: "bg-blue-600",
    description:
      "Tailored rehab for joint injuries, chronic pain, and muscle strains. We aim to reduce pain and restore function using techniques like manual therapy and targeted exercise.",
    conditions: [
      "Joint injuries",
      "Chronic pain",
      "Muscle strains",
      "Arthritis",
      "Back pain",
    ],
    image: "🦴",
  },
  {
    id: 2,
    title: "Sports Physiotherapy",
    icon: Dumbbell,
    borderColor: "border-green-500",
    iconColor: "text-green-600",
    accentColor: "bg-green-600",
    description:
      "Injury prevention, strength training, and fast-track rehab for athletes. We help you return to your sport stronger and more resilient than before.",
    conditions: [
      "Sports injuries",
      "Performance enhancement",
      "Injury prevention",
      "Return to sport",
      "Athletic conditioning",
    ],
    image: "🏃‍♂️",
  },
  {
    id: 3,
    title: "Post-Operative Rehab",
    icon: HeartPulse,
    borderColor: "border-red-500",
    iconColor: "text-red-600",
    accentColor: "bg-red-600",
    description:
      "Optimal recovery programs after surgeries like joint replacements or ACL repair, guided by your surgeon's protocols and our expertise.",
    conditions: [
      "Joint replacement recovery",
      "ACL repair",
      "Post-surgical rehabilitation",
      "Wound healing",
      "Mobility restoration",
    ],
    image: "🏥",
  },
  {
    id: 4,
    title: "Neurological Rehabilitation",
    icon: BrainCircuit,
    borderColor: "border-purple-500",
    iconColor: "text-purple-600",
    accentColor: "bg-purple-600",
    description:
      "Dedicated care for stroke, Parkinson's, MS, and brain injuries to improve motor control, balance, and independence.",
    conditions: [
      "Stroke recovery",
      "Parkinson's disease",
      "Multiple sclerosis",
      "Brain injuries",
      "Spinal cord injuries",
    ],
    image: "🧠",
  },
  {
    id: 5,
    title: "Cardio-Respiratory Physio",
    icon: Heart,
    borderColor: "border-pink-500",
    iconColor: "text-pink-600",
    accentColor: "bg-pink-600",
    description:
      "Rehabilitation for conditions like COPD and post-heart-attack recovery to boost endurance and improve breathing efficiency.",
    conditions: [
      "COPD",
      "Post-heart attack",
      "Breathing difficulties",
      "Chest conditions",
      "Cardiac rehabilitation",
    ],
    image: "❤️",
  },
  {
    id: 6,
    title: "Women's Health Physio",
    icon: Baby,
    borderColor: "border-rose-500",
    iconColor: "text-rose-600",
    accentColor: "bg-rose-600",
    description:
      "Specialized care including pelvic floor rehab (incontinence, prolapse) with our UI Chair, pre/post-natal recovery, and osteoporosis management.",
    conditions: [
      "Pelvic floor dysfunction",
      "Pregnancy-related pain",
      "Post-natal recovery",
      "Incontinence",
      "Osteoporosis",
    ],
    image: "🤱",
  },
  {
    id: 7,
    title: "Geriatric Therapy",
    icon: Users,
    borderColor: "border-orange-500",
    iconColor: "text-orange-600",
    accentColor: "bg-orange-600",
    description:
      "A focus on improving balance, mobility, and strength to prevent falls and maintain an active lifestyle in older adults.",
    conditions: [
      "Fall prevention",
      "Balance training",
      "Mobility issues",
      "Age-related conditions",
      "Strength maintenance",
    ],
    image: "👴",
  },
  {
    id: 8,
    title: "Intimate Health Rehab",
    icon: ShieldCheck,
    borderColor: "border-indigo-500",
    iconColor: "text-indigo-600",
    accentColor: "bg-indigo-600",
    description:
      "Discreet and effective therapy for urinary/faecal incontinence and sexual health, using advanced tools like the UI-Chair.",
    conditions: [
      "Urinary incontinence",
      "Faecal incontinence",
      "Sexual health",
      "Pelvic pain",
      "Intimate wellness",
    ],
    image: "🔒",
  },
  {
    id: 9,
    title: "Home & Tele-Rehabilitation",
    icon: Home,
    borderColor: "border-teal-500",
    iconColor: "text-teal-600",
    accentColor: "bg-teal-600",
    description:
      "Access our expert care from the comfort of your home through secure video sessions and our Patient Portal for ongoing support.",
    conditions: [
      "Remote consultation",
      "Home exercises",
      "Follow-up care",
      "Accessibility needs",
      "Ongoing support",
    ],
    image: "🏠",
  },
];

const advancedTechniquesData = [
  {
    id: 10,
    title: "Shockwave Therapy",
    icon: Wind,
    borderColor: "border-blue-400",
    iconColor: "text-blue-600",
    description:
      "A non-invasive treatment that uses acoustic waves to treat chronic pain and promote the regeneration of damaged tissues.",
    techPage: "/technology#shockwave",
  },
  {
    id: 11,
    title: "Spinal Decompression",
    icon: Bone,
    borderColor: "border-green-400",
    iconColor: "text-green-600",
    description:
      "Gentle, non-surgical therapy to relieve back and neck pain by reducing pressure on the spinal discs and nerves.",
    techPage: "/technology#spinal-decompression",
  },
  {
    id: 12,
    title: "Aeroleap Pro",
    icon: Activity,
    borderColor: "border-purple-400",
    iconColor: "text-purple-600",
    description:
      "State-of-the-art equipment for advanced rehabilitation and performance enhancement exercises.",
    techPage: "/technology#aeroleap-pro",
  },
  {
    id: 13,
    title: "rPMS",
    icon: Atom,
    borderColor: "border-orange-400",
    iconColor: "text-orange-600",
    description:
      "Repetitive Peripheral Magnetic Stimulation (rPMS) is an advanced modality for pain management and muscle re-education.",
    techPage: "/technology#rpms",
  },
  {
    id: 14,
    title: "UI Chair",
    icon: UserCheck,
    borderColor: "border-pink-400",
    iconColor: "text-pink-600",
    description:
      "Specialized therapeutic chair designed for pelvic floor rehabilitation and strengthening.",
    techPage: "/technology#ui-chair",
  },
  {
    id: 15,
    title: "High-Intensity Laser",
    icon: Zap,
    borderColor: "border-red-400",
    iconColor: "text-red-600",
    description:
      "Advanced laser therapy to penetrate deep into tissue, accelerating cellular reproduction and growth for faster healing.",
    techPage: "/technology#high-intensity-laser",
  },
];

// --- MAIN PAGE COMPONENT ---

export default function ServicesPage() {
  const [modalData, setModalData] = useState<any>(null);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700;900&display=swap");

        :root {
          --vp-blue: #004f8c;
          --vp-teal: #008094;
          --vp-orange: #ec691f;
        }

        .font-lato {
          font-family: "Lato", sans-serif;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Carousel specific styles */
        .carousel-container {
          padding: 40px 0;
        }
        .carousel-card-shadow {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }
        .carousel-card-shadow:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }
      `}</style>
      <div className="bg-white font-lato">
        <LandingNavbar />
        <main>
          <ServicesHero />
          <AutoCarouselSection onCardClick={setModalData} />
          <AdvancedTechniquesSection />
          <CTA />
        </main>
        <Footer />
        <AnimatePresence>
          {modalData && (
            <ServiceModal data={modalData} onClose={() => setModalData(null)} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// --- AUTO CAROUSEL COMPONENT ---

const AutoCarousel = ({
  items,
  onCardClick,
}: {
  items: any[];
  onCardClick: (item: any) => void;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % items.length);
      }, 4000); // 4 seconds per slide
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isPaused, items.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto carousel-container">
      {/* Main Carousel Container */}
      <div
        className="relative overflow-hidden rounded-3xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {items.map((service, index) => (
            <div key={service.id} className="w-full flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0.8,
                  scale: index === currentSlide ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                onClick={() => onCardClick(service)}
                className="cursor-pointer mx-2 md:mx-4"
              >
                <div
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-500 border-4 ${service.borderColor} hover:shadow-lg h-[500px] flex flex-col`}
                >
                  {/* Card Header */}
                  <div className="relative p-6 md:p-8 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white border-3 ${service.borderColor} flex items-center justify-center`}
                        >
                          <service.icon
                            className={`w-12 h-12 md:w-14 md:h-14 ${service.iconColor}`}
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <div
                            className={`w-16 h-1 ${service.accentColor} rounded-full`}
                          ></div>
                        </div>
                      </div>
                      <div className="text-6xl md:text-8xl opacity-10">
                        {service.image}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="px-6 md:px-8 pb-6 md:pb-8 bg-white flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      {/* Conditions Preview */}{" "}
                    </div>
                    <div className="mb-6">
                      <h4 className="text-base font-semibold text-gray-800 mb-3">
                        Conditions We Treat:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.conditions
                          .slice(0, 3)
                          .map((condition: string, idx: number) => (
                            <span
                              key={idx}
                              className={`px-4 py-2 ${service.accentColor} text-white text-sm font-medium rounded-full`}
                            >
                              {condition}
                            </span>
                          ))}
                        {service.conditions.length > 3 && (
                          <span className="px-4 py-2 bg-gray-200 text-gray-600 text-sm font-medium rounded-full">
                            +{service.conditions.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between mt-4">
                      <button
                        className={`flex items-center gap-2 ${service.accentColor} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-md transition-all duration-300 group`}
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <div className="text-sm text-gray-500">
                        {index + 1} of {items.length}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8">
        {/* Previous/Next Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[var(--vp-blue)] transition-colors" />
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[var(--vp-blue)] transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-3 bg-[var(--vp-blue)]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={toggleAutoPlay}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
            isAutoPlaying
              ? "bg-[var(--vp-blue)] text-white hover:bg-[var(--vp-teal)]"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {isAutoPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
          {isAutoPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

// --- AUTO CAROUSEL SECTION ---

const AutoCarouselSection = ({
  onCardClick,
}: {
  onCardClick: (item: any) => void;
}) => (
  <section className="bg-white py-20 md:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-600 max-w-4xl mx-auto leading-relaxed"
        >
          We offer a complete suite of physiotherapy services, delivered by
          specialists and enhanced by state-of-the-art technology to maximize
          your recovery.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AutoCarousel items={coreServicesData} onCardClick={onCardClick} />
      </motion.div>
    </div>
  </section>
);

// --- ADVANCED TECHNIQUES SECTION ---

const AdvancedTechniquesSection = () => (
  <section className="bg-gradient-to-br from-[var(--vp-teal)] to-[var(--vp-blue)] py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Advanced Therapeutic Techniques
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-blue-100 max-w-3xl mx-auto"
        >
          We complement core therapies with state-of-the-art modalities to
          accelerate healing and improve outcomes.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advancedTechniquesData.map((technique, index) => (
          <motion.div
            key={technique.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group"
          >
            <Link
              href={technique.techPage}
              className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200 min-h-[320px] flex flex-col"
            >
              <div
                className={`p-6 bg-white border-b-4 ${technique.borderColor}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gray-50 border ${technique.borderColor} flex items-center justify-center`}
                  >
                    <technique.icon
                      className={`w-8 h-8 ${technique.iconColor}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--vp-blue)] transition-colors line-clamp-2">
                    {technique.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 bg-white flex-1 flex flex-col">
                <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                  {technique.description}
                </p>
                <div className="flex items-center text-[var(--vp-blue)] font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                  Learn More About Technology
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- SERVICE MODAL ---

const ServiceModal = ({
  data,
  onClose,
}: {
  data: any;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto no-scrollbar border-4 border-gray-200"
      onClick={(e) => e.stopPropagation()}
    >
      <div className={`p-8 bg-white border-b-4 ${data.borderColor}`}>
        <div className="flex items-center gap-6 mb-6">
          <div
            className={`w-20 h-20 rounded-xl bg-gray-50 border-2 ${data.borderColor} flex items-center justify-center shadow-sm`}
          >
            <data.icon className={`w-12 h-12 ${data.iconColor}`} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {data.title}
            </h2>
            <div className={`w-20 h-1 ${data.accentColor} rounded-full`}></div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8 bg-white">
        <div>
          <h3 className="font-bold text-2xl mb-4 text-gray-800">Overview</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {data.description}
          </p>
        </div>

        {data.conditions && (
          <div>
            <h3 className="font-bold text-2xl mb-4 text-gray-800">
              Conditions We Treat
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.conditions.map((condition: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div
                    className={`w-3 h-3 ${data.accentColor} rounded-full flex-shrink-0`}
                  ></div>
                  <span className="text-gray-700 font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/contact"
            className={`flex items-center justify-center gap-2 ${data.accentColor} text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 flex-1`}
          >
            Book Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/team"
            className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-semibold py-4 px-8 rounded-lg hover:bg-gray-200 transition-colors flex-1 border border-gray-300"
          >
            Meet Our Team
            <Users className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors bg-white rounded-full p-3 shadow-lg border border-gray-200"
      >
        <X size={24} />
      </button>
    </motion.div>
  </motion.div>
);

// --- HERO SECTION ---

const ServicesHero = () => (
  <section className="bg-gradient-to-r from-[var(--vp-blue)] to-[var(--vp-teal)] py-12 md:py-16 px-6">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Our Comprehensive Physiotherapy Services
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          Empowering your Recovery, Enhancing your Life
        </p>
      </motion.div>
    </div>
  </section>
);
