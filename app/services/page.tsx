"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Waves, Sun, Wind, Atom, Bone, HeartPulse, BrainCircuit, ShieldCheck, Dumbbell, Sparkles, ChevronLeft, ChevronRight, X } from "lucide-react";
import LandingNavbar from "@/components/landing-navbar"; // Assuming navbar is in this path
import React, { useState, useRef, useEffect, useCallback } from 'react';

// Main Services Page Component
export default function ServicesPage() {
  const [modalData, setModalData] = useState<any>(null);

  return (
    <>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
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
          {modalData && <ServiceModal data={modalData} onClose={() => setModalData(null)} />}
        </AnimatePresence>
      </div>
    </>
  );
}

// Modal Component for displaying service details
const ServiceModal = ({ data, onClose }: { data: any, onClose: () => void }) => {
  return (
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
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`p-8 border-t-8 ${data.borderColor}`}>
          <div className="flex items-start sm:items-center gap-4 mb-4 flex-col sm:flex-row">
            <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center bg-blue-50`}>
                <data.icon className="w-10 h-10 text-blue-800" />
            </div>
            <h2 className="text-3xl font-bold text-blue-900">{data.title}</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">{data.description}</p>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
          <X size={24} />
        </button>
      </motion.div>
    </motion.div>
  );
};

// Generic Carousel Component with Infinite Loop
const Carousel = ({ items, onCardClick }: { items: any[], onCardClick: (item: any) => void }) => {
    const bufferSize = 5; // Number of items to clone on each side
    const [displayItems] = useState([...items.slice(-bufferSize), ...items, ...items.slice(0, bufferSize)]);
    const [currentIndex, setCurrentIndex] = useState(bufferSize);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollToCard = useCallback((index: number, behavior: 'smooth' | 'auto' = 'smooth') => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const card = container.children[index] as HTMLElement;
        if (card) {
            const scrollLeft = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2);
            container.scrollTo({ left: scrollLeft, behavior });
        }
    }, []);

    useEffect(() => {
        // Initial instant scroll
        scrollToCard(currentIndex, 'auto');
    }, []);

    useEffect(() => {
        if (isTransitioning) return;
        scrollToCard(currentIndex);
    }, [currentIndex, isTransitioning, scrollToCard]);

    const handleNext = () => {
        if (isTransitioning) return;
        setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setCurrentIndex(prev => prev - 1);
    };

    useEffect(() => {
        const checkLoop = () => {
            if (currentIndex >= items.length + bufferSize) {
                setIsTransitioning(true);
                setCurrentIndex(bufferSize);
            } else if (currentIndex < bufferSize) {
                setIsTransitioning(true);
                setCurrentIndex(items.length + bufferSize - 1);
            }
        };

        const timer = setTimeout(() => {
            checkLoop();
        }, 500); // Wait for scroll animation to finish

        return () => clearTimeout(timer);
    }, [currentIndex, items.length]);
    
    useEffect(() => {
        if (isTransitioning) {
            setTimeout(() => {
                scrollToCard(currentIndex, 'auto');
                setTimeout(() => setIsTransitioning(false), 50);
            }, 0);
        }
    }, [isTransitioning, currentIndex, scrollToCard]);

    const [centerIndexInView, setCenterIndexInView] = useState(bufferSize);
    const handleScroll = useCallback(() => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const containerCenter = scrollLeft + container.offsetWidth / 2;
        
        let closestIndex = 0;
        let smallestDistance = Infinity;

        Array.from(container.children).forEach((node, index) => {
            const child = node as HTMLElement;
            const childCenter = child.offsetLeft + child.offsetWidth / 2;
            const distance = Math.abs(containerCenter - childCenter);
            if (distance < smallestDistance) {
                smallestDistance = distance;
                closestIndex = index;
            }
        });
        setCenterIndexInView(closestIndex);
    }, []);

    return (
        <div className="relative">
            <div ref={scrollContainerRef} onScroll={handleScroll} className="flex gap-8 overflow-x-auto pb-8 px-[50vw] no-scrollbar snap-x snap-mandatory">
                {displayItems.map((item, index) => (
                    <motion.div
                        key={`${item.title}-${index}`}
                        animate={{ scale: centerIndexInView === index ? 1.05 : 0.95, zIndex: centerIndexInView === index ? 10 : 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={() => onCardClick(item)}
                        className={`group flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-2 cursor-pointer snap-center ${item.borderColor}`}
                    >
                        <div className="p-6 text-center">
                            <h3 className="text-lg font-semibold text-blue-900 h-14 flex items-center justify-center">{item.title}</h3>
                        </div>
                        <div className="bg-gray-50 h-48 flex items-center justify-center">
                            <item.icon className="w-16 h-16 text-gray-400 group-hover:text-gray-500 transition-colors" />
                        </div>
                    </motion.div>
                ))}
            </div>
            <button onClick={handlePrev} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-gray-100 transition-all z-20 hidden md:block" aria-label="Previous">
                <ChevronLeft className="text-gray-700" />
            </button>
            <button onClick={handleNext} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-gray-100 transition-all z-20 hidden md:block" aria-label="Next">
                <ChevronRight className="text-gray-700" />
            </button>
        </div>
    );
};

// Data for Therapeutic Techniques
const techniques = [
    { title: "Exercise Therapy", icon: Dumbbell, borderColor: "border-gray-300", description: "Tailored exercise programs to restore function, improve strength, and increase mobility. Essential for recovery and long-term health." },
    { title: "Manual Therapy", icon: HeartPulse, borderColor: "border-gray-300", description: "Hands-on techniques including joint mobilization and soft tissue massage to reduce pain, decrease restriction, and improve range of motion." },
    { title: "Electrotherapy", icon: Zap, borderColor: "border-gray-300", description: "Using electrical energy to stimulate nerves and muscles, helping to relieve pain, reduce swelling, and promote healing." },
    { title: "Heat & Cold Therapy", icon: Sun, borderColor: "border-teal-400", description: "Application of heat or cold packs to manage pain, control inflammation, reduce muscle spasms, and improve circulation." },
    { title: "Ultrasound Therapy", icon: Waves, borderColor: "border-blue-400", description: "Utilizing sound waves to treat musculoskeletal injuries, reduce inflammation, and accelerate tissue healing deep within the body." },
    { title: "Shockwave Therapy", icon: Wind, borderColor: "border-teal-400", description: "A non-invasive treatment that uses acoustic waves to treat chronic pain and promote the regeneration of damaged tissues." },
    { title: "rPMS", icon: Atom, borderColor: "border-orange-400", description: "Repetitive Peripheral Magnetic Stimulation (rPMS) is an advanced modality for pain management and muscle re-education." },
];

// Data for Specialized Programs
const programs = [
    { title: "Musculoskeletal Rehabilitation", icon: Bone, borderColor: "border-blue-500", description: "Comprehensive care for conditions affecting muscles, bones, and joints, from back pain to arthritis." },
    { title: "Sports Health", icon: Dumbbell, borderColor: "border-teal-500", description: "Specialized programs for athletes of all levels to prevent injuries, enhance performance, and ensure a safe return to sport." },
    { title: "Post-Operative Care", icon: ShieldCheck, borderColor: "border-orange-500", description: "Structured rehabilitation following surgery to restore mobility, strength, and function, ensuring a smooth recovery." },
    { title: "Pain Management", icon: HeartPulse, borderColor: "border-pink-500", description: "A multi-faceted approach to managing chronic pain, improving quality of life, and reducing reliance on medication." },
    { title: "Neurological Rehabilitation", icon: BrainCircuit, borderColor: "border-indigo-500", description: "Therapy for individuals with neurological conditions like stroke or Parkinson's to improve balance, coordination, and independence." },
];

// Components rendering the carousels
const TechniquesCarousel = ({ onCardClick }: { onCardClick: (item: any) => void }) => (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto">
            <div className="text-center mb-16 px-6"><h2 className="text-3xl md:text-4xl font-bold text-blue-900">Detailed Overview of Therapeutic Techniques</h2></div>
            <Carousel items={techniques} onCardClick={onCardClick} />
        </div>
    </section>
);

const SpecializedProgramsCarousel = ({ onCardClick }: { onCardClick: (item: any) => void }) => (
    <section className="bg-blue-50/70 py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto">
            <div className="text-center mb-16 px-6"><h2 className="text-3xl md:text-4xl font-bold text-blue-900">Specialized Programs</h2></div>
            <Carousel items={programs} onCardClick={onCardClick} />
        </div>
    </section>
);

// Hero, CTA, and Footer components (unchanged)
const ServicesHero = () => (
  <section className="bg-blue-50/70 pt-28 pb-16 md:pt-36 md:pb-20 px-6">
    <div className="container mx-auto text-center">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-4xl md:text-5xl font-extrabold text-blue-900">Our Comprehensive Physiotherapy Services</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="mt-4 text-lg md:text-xl text-gray-600">Empowering Your Recovery, Enhancing Your Life</motion.p>
    </div>
  </section>
);

const TeamCTA = () => (
  <section className="bg-white py-20 md:py-28 px-6">
    <div className="container mx-auto text-center max-w-3xl">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.5 }} className="text-3xl md:text-4xl font-bold text-blue-900">Meet Our Expert Team</motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true, amount: 0.5 }} className="mt-4 text-lg text-gray-600 leading-relaxed">Our team of dedicated physiotherapists brings collective expertise, a compassionate approach, and diverse specializations to ensure you receive the highest standard of care.</motion.p>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="mt-10">
        <Link href="/team" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">Meet the Team <ArrowRight size={20} /></Link>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-gray-400 py-12 px-6">
    <div className="container mx-auto text-center">
      <p className="mb-4">&copy; {new Date().getFullYear()} VitalPhysio⁺. All rights reserved. Bengaluru, Karnataka, India.</p>
      <div className="flex justify-center space-x-6">
        <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
        <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
        <a href="#blog" className="hover:text-white transition-colors duration-300">Blog & Resources</a>
      </div>
    </div>
  </footer>
);
