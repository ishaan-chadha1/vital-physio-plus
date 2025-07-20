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
} from "lucide-react";
import LandingNavbar from "@/components/landing-navbar"; // Assuming navbar is in this path
import Footer from "@/components/footer"; // Assuming footer is in this path
import React, { useState, useRef, useEffect, useCallback } from "react";

// --- DATA ---

const techniquesData = [
  {
    id: 1,
    title: "Exercise Therapy",
    icon: Dumbbell,
    borderColor: "border-blue-400",
    description:
      "Tailored exercise programs to restore function, improve strength, and increase mobility. Essential for recovery and long-term health.",
  },
  {
    id: 2,
    title: "Manual Therapy",
    icon: HeartPulse,
    borderColor: "border-gray-400",
    description:
      "Hands-on techniques including joint mobilization and soft tissue massage to reduce pain, decrease restriction, and improve range of motion.",
  },
  {
    id: 3,
    title: "Electrotherapy",
    icon: Zap,
    borderColor: "border-gray-400",
    description:
      "Using electrical energy to stimulate nerves and muscles, helping to relieve pain, reduce swelling, and promote healing.",
  },
  {
    id: 4,
    title: "Heat & Cold Therapy",
    icon: Sun,
    borderColor: "border-teal-400",
    description:
      "Application of heat or cold packs to manage pain, control inflammation, reduce muscle spasms, and improve circulation.",
  },
  {
    id: 5,
    title: "Ultrasound Therapy",
    icon: Waves,
    borderColor: "border-blue-400",
    description:
      "Utilizing sound waves to treat musculoskeletal injuries, reduce inflammation, and accelerate tissue healing deep within the body.",
  },
  {
    id: 6,
    title: "Shockwave Therapy",
    icon: Wind,
    borderColor: "border-teal-400",
    description:
      "A non-invasive treatment that uses acoustic waves to treat chronic pain and promote the regeneration of damaged tissues.",
  },
  {
    id: 7,
    title: "rPMS",
    icon: Atom,
    borderColor: "border-orange-400",
    description:
      "Repetitive Peripheral Magnetic Stimulation (rPMS) is an advanced modality for pain management and muscle re-education.",
  },
];

const programsData = [
    { id: 8, title: "High-Intensity Laser", icon: Zap, borderColor: "border-red-500", description: "Advanced laser therapy to penetrate deep into tissue, accelerating cellular reproduction and growth for faster healing." },
    { id: 9, title: "Shockwave Therapy", icon: Wind, borderColor: "border-green-500", description: "A non-invasive treatment using acoustic waves to treat chronic pain and promote the regeneration of damaged tissues." },
    { id: 10, title: "Spinal Decompression", icon: Bone, borderColor: "border-blue-500", description: "Gentle, non-surgical therapy to relieve back and neck pain by reducing pressure on the spinal discs and nerves." },
    { id: 11, title: "Aeroleap Pro", icon: Dumbbell, borderColor: "border-purple-500", description: "State-of-the-art equipment for advanced rehabilitation and performance enhancement exercises." },
    { id: 12, title: "rPMS", icon: Atom, borderColor: "border-orange-500", description: "Repetitive Peripheral Magnetic Stimulation (rPMS) is an advanced modality for pain management and muscle re-education." },
    { id: 13, title: "UI Chair", icon: ShieldCheck, borderColor: "border-indigo-500", description: "Specialized therapeutic chair designed for pelvic floor rehabilitation and strengthening." },
];

// --- MAIN PAGE COMPONENT ---

export default function ServicesPage() {
  const [modalData, setModalData] = useState<any>(null);

  return (
    <>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="bg-white">
        <LandingNavbar />
        <main>
          <ServicesHero />
          <TechniquesCarousel onCardClick={setModalData} />
          <SpecializedProgramsCarousel onCardClick={setModalData} />
          <TeamCTA />
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

// --- REUSABLE CAROUSEL & MODAL ---

const Carousel = ({
  items,
  onCardClick,
}: {
  items: any[];
  onCardClick: (item: any) => void;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [centeredIndex, setCenteredIndex] = useState(0);

  // Create a looped array for infinite scroll effect
  const loopedItems = [...items, ...items, ...items];

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const containerCenter = scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    Array.from(container.children).forEach((node, index) => {
      const child = node as HTMLElement;
      if (child.dataset.carouselItem) {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      }
    });
    setCenteredIndex(closestIndex % items.length);
  }, [items.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const initialScroll =
        container.children[items.length].offsetLeft -
        container.offsetWidth / 2 +
        container.children[items.length].clientWidth / 2;
      container.scrollTo({ left: initialScroll, behavior: "auto" });
      container.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [items.length, handleScroll]);

  const scrollByCard = (direction: "prev" | "next") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const currentCard = container.children[
      centeredIndex + items.length
    ] as HTMLElement;
    let targetCard;

    if (direction === "next") {
      targetCard = currentCard.nextElementSibling as HTMLElement;
    } else {
      targetCard = currentCard.previousElementSibling as HTMLElement;
    }

    if (targetCard) {
      const scrollLeft =
        targetCard.offsetLeft -
        container.offsetWidth / 2 +
        targetCard.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  // Infinite scroll jump logic
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleInfiniteScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.children[0].clientWidth + 32; // card width + gap

      if (scrollLeft <= itemWidth * (items.length * 0.5)) {
        container.scrollLeft += items.length * itemWidth;
      } else if (scrollLeft >= itemWidth * (items.length * 2.5)) {
        container.scrollLeft -= items.length * itemWidth;
      }
    };

    const scrollEndTimer = setTimeout(() => {
      container.addEventListener("scroll", handleInfiniteScroll);
    }, 500);

    return () => {
      clearTimeout(scrollEndTimer);
      container.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, [centeredIndex, items.length]);

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto pb-8 px-[calc(50%-144px)] no-scrollbar snap-x snap-mandatory"
      >
        {loopedItems.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            data-carousel-item="true"
            animate={{
              scale: centeredIndex === index % items.length ? 1.05 : 0.95,
              y: centeredIndex === index % items.length ? -10 : 0,
              opacity: centeredIndex === index % items.length ? 1 : 0.6,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            onClick={() => onCardClick(item)}
            className="group flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-2 cursor-pointer snap-center"
          >
            <div className={`p-6 text-center border-b-4 ${item.borderColor}`}>
              <h3 className="text-lg font-semibold text-blue-900 h-14 flex items-center justify-center">
                {item.title}
              </h3>
            </div>
            <div className="bg-gray-50 h-48 flex items-center justify-center">
              <item.icon className="w-16 h-16 text-gray-400 group-hover:text-gray-500 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
      <button
        onClick={() => scrollByCard("prev")}
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-gray-100 transition-all z-20"
        aria-label="Previous"
      >
        <ChevronLeft className="text-gray-700" />
      </button>
      <button
        onClick={() => scrollByCard("next")}
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-gray-100 transition-all z-20"
        aria-label="Next"
      >
        <ChevronRight className="text-gray-700" />
      </button>
    </div>
  );
};

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
      className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar"
      onClick={(e) => e.stopPropagation()}
    >
      <div className={`p-8 border-t-8 ${data.borderColor}`}>
        <div className="flex items-start sm:items-center gap-4 mb-6 flex-col sm:flex-row">
          <div
            className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center bg-blue-50`}
          >
            <data.icon className="w-10 h-10 text-blue-800" />
          </div>
          <h2 className="text-3xl font-bold text-blue-900">{data.title}</h2>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">{data.description}</p>
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
      >
        <X size={24} />
      </button>
    </motion.div>
  </motion.div>
);

// --- SECTION COMPONENTS ---

const TechniquesCarousel = ({
  onCardClick,
}: {
  onCardClick: (item: any) => void;
}) => (
  <section className="bg-white py-20 md:py-28 overflow-x-hidden">
    <div className="container mx-auto">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          We offer a complete suite of physiotherapy services, delivered by
          specialists and enhanced by state-of-the-art technology to maximize
          your recovery.
        </h2>
      </div>
      <Carousel items={techniquesData} onCardClick={onCardClick} />
    </div>
  </section>
);

const SpecializedProgramsCarousel = ({
  onCardClick,
}: {
  onCardClick: (item: any) => void;
}) => (
  <section className="bg-blue-50/70 py-20 md:py-28 overflow-x-hidden">
    <div className="container mx-auto">
      <div className="text-center mb-16 px-6">
        {" "}
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-blue-900"
          >
            Advanced Therapeutic Techniques 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-lg md:text-xl text-gray-600"
          >
            We complement core therapies with state of the art modalities to accelerate healing and improve outcomes.
          </motion.p>
        </div>
      </div>
      <Carousel items={programsData} onCardClick={onCardClick} />
    </div>
  </section>
);

// --- STATIC COMPONENTS (Hero, CTA, Footer) ---

const ServicesHero = () => (
  <section className="bg-blue-50/70 pt-28 pb-16 md:pt-36 md:pb-20 px-6">
    <div className="container mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-blue-900"
      >
        Our Comprehensive Physiotherapy Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-4 text-lg md:text-xl text-gray-600"
      >
        Empowering Your Recovery, Enhancing Your Life
      </motion.p>
    </div>
  </section>
);

const TeamCTA = () => (
  <section className="bg-white py-20 md:py-28 px-6">
    <div className="container mx-auto text-center max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-blue-900"
      >
        Meet Our Expert Team
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-4 text-lg text-gray-600 leading-relaxed"
      >
        Our team of dedicated physiotherapists brings collective expertise, a
        compassionate approach, and diverse specializations to ensure you
        receive the highest standard of care.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <Link
          href="/team"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Meet the Team <ArrowRight size={20} />
        </Link>
      </motion.div>
    </div>
  </section>
);
