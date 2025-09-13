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
import Head from "next/head";

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
      {
        name: "Joint Injuries",
        modalContent: {
          title: "Personalized Rehabilitation for Optimal Recovery",
          subtitle: "Expert Management of Joint Injuries at VitalPhysio⁺",
          description: `
            Joint injuries are among the most common musculoskeletal conditions, affecting the knee, shoulder, ankle, hip, wrist, and elbow. At VitalPhysio⁺, our advanced rehabilitation protocols support rapid, evidence-based recovery for acute and chronic injuries—including ligament sprains, cartilage tears (such as ACL/MCL injuries and meniscal tears), dislocations, and overuse syndromes.
          `,
          highlights: [
            "Comprehensive Assessment: Every patient receives a thorough biomechanical evaluation using the latest assessment tools—identifying structural and functional deficits for a truly personalized plan.",
            "Precision Treatment Protocols: We combine manual therapy, targeted exercise prescription, and progressive loading to restore joint stability, mobility, and strength.",
            "Advanced Modalities: Where indicated, we integrate regenerative medicine approaches, shockwave therapy, high-intensity laser, and rPMS (Repetitive Peripheral Magnetic Stimulation) for enhanced tissue healing and pain relief.",
            "Cutting-Edge Technology: Our use of wearable sensors, AI-driven movement analysis, and state-of-the-art equipment ensures real-time progress tracking and highly individualized rehabilitation.",
            "Education & Self-Management: Patients and caregivers receive guidance on activity modification, safe return-to-sport, bracing/support options, and injury prevention—promoting long-term joint health.",
          ],
          conditions: [
            "Knee injuries: ACL/MCL sprain, meniscus tear, patellar instability, osteoarthritis",
            "Shoulder injuries: Rotator cuff tear, labral injury, dislocation, frozen shoulder",
            "Ankle injuries: Sprains, ligament tears, chronic instability",
            "Hip injuries: Labral tears, impingement syndromes, overuse injuries",
            "Wrist & elbow: Ligament injuries, overuse/tendon problems, instability",
          ],
          approach: [
            "Flexible, criterion-based progression: Rehabilitation is guided by objective function, not just time, supporting safe and confident return to work, athletics, or daily life.",
            "Combined expertise: Our team uses global best practices—Aspetar, OPTIKNEE, and OARSI guidelines—while individualizing every program for your unique injury, lifestyle, and goals.",
          ],
          importance: `
            Prompt, expert-guided rehab after joint injury dramatically reduces pain, restores function, and decreases long-term risk of arthritis or reinjury. Our physiotherapists collaborate with orthopedic surgeons as needed for seamless post-operative transitions.
          `,
          cta: "Book a consultation and take the first step toward pain-free movement and lasting joint health.",
        },
      },
      {
  name: "Chronic Pain",
  modalContent: {
    title: "Personalized Relief, Restored Life",
    subtitle: "Advanced Chronic Pain Rehabilitation at VitalPhysio⁺",
    description: `
      Chronic pain is defined as persistent pain lasting longer than three months, often impacting the back, neck, joints, or muscles and affecting every aspect of daily life. At VitalPhysio⁺, our multidisciplinary team delivers evidence-based, patient-centered chronic pain solutions—transforming lives through holistic assessment, compassionate care, and advanced technology for lasting results.
    `,
    highlights: [
      "Comprehensive Evaluation: We use detailed pain assessment tools, functional movement analysis, and biopsychosocial profiling to create a deeply personalized plan—addressing physical, psychological, and lifestyle contributors to ongoing pain.",
      "Multimodal Treatment Approach: Interventions include clinically proven manual therapy, therapeutic exercise, posture correction, and movement retraining, all shown to improve function and reduce pain severity.",
      "Mind-Body Therapies: Our programs integrate mindfulness, stress management, and education in pacing and flare-up strategies—empowering patients to control pain and improve mood.",
      "Advanced Modalities: When appropriate, we offer evidence-supported treatments such as high-intensity laser therapy, TENS, electromyography biofeedback, hydrotherapy, and movement-based reality experiences.",
      "Team-Based, Coordinated Care: For complex or persistent pain, our physiotherapists coordinate closely with pain specialists, psychologists, and physicians for truly integrated rehabilitation, in line with global best practice guidelines.",
    ],
    conditions: [
      "Chronic low back pain, neck pain, and pelvic pain",
      "Osteoarthritis, rheumatoid arthritis, and fibromyalgia",
      "Complex pain syndromes (CRPS, post-surgical pain)",
      "Recurrent migraines and tension headaches",
      "Persistent joint/muscle pain after injury",
    ],
    whatSetsUsApart: [
      "Goal-Oriented, Functional Progression: Every session is milestone-driven, focusing on restoring quality of life, mobility, and independence—not just reducing symptoms.",
      "Long-Term Self-Management: We empower every patient with self-care tools, home exercise routines, and relapse-prevention strategies for sustained improvement.",
      "Patient Education Hub: Easy-access resources on chronic pain science, debunking myths, and guiding patients to better understanding and advocacy.",
    ],
    importance: `
      Timely, specialist-led physiotherapy for chronic pain has been proven to reduce disability, minimize medication dependence, and optimize patient outcomes. Evidence strongly supports non-pharmacological, active management as first-line chronic pain care—validated by WHO guidelines.
    `,
    cta: "Take the next step—regain control, reduce pain, and restore your best life with VitalPhysio⁺. Book your chronic pain assessment today.",
  },
},
      {
        name: "Muscle Strains",
        modalContent: {
          title: "Rapid, Evidence-Based Recovery for Active Living",
          subtitle: "Expert Muscle Strain Rehabilitation at VitalPhysio⁺",
          description: `
            Muscle strains—often known as “pulled muscles”—are injuries caused by overstretching or tearing of muscle fibers. These injuries are common in athletes, fitness enthusiasts, and anyone engaged in high-demand activities, but can also occur in daily life. The most frequently affected areas include the hamstrings, quadriceps, calf, back, and shoulder.
          `,
          highlights: [
            "State-of-the-Art Diagnostic Assessment: Every patient undergoes detailed examination with functional movement screening to precisely determine the location, severity, and grade of muscle strain—ensuring a customized rehabilitation plan for optimal outcomes.",
            "Comprehensive Treatment Approach: Our protocols follow the latest scientific guidelines, combining:",
            "Acute care (RICE protocol): Rest, Ice, Compression, and Elevation in the early phase to reduce pain and swelling.",
            "Progressive stretching: To restore mobility and prevent re-injury by gradually increasing flexibility and range of motion.",
            "Strengthening exercises: Phase-wise strengthening to rebuild muscle power, restore function, and decrease recurrence risk.",
            "Hands-on therapy: Targeted massage and soft tissue mobilization to accelerate tissue repair and improve circulation.",
            "Regenerative modalities: When indicated, advanced treatments such as platelet-rich plasma (PRP), high-intensity laser, and shockwave therapy for enhanced healing—backed by latest evidence.",
          ],
          functionalRehabilitation: `
            Return-to-activity is structured, with clear milestone-based progression, sport-specific retraining, and real-time movement feedback to ensure a safe and confident return to work, sports, or daily living.
          `,
          education: `
            We empower you with practical strategies for safe stretching, warm-up/cool-down routines, nutrition, hydration, and overuse prevention—essential for maintaining muscle health.
          `,
          conditions: [
            "Hamstring strain, quadriceps/psoas strain, calf (gastrocnemius/soleus) strain",
            "Back muscle strains, oblique/abdominal strains",
            "Rotator cuff and shoulder muscle strains",
          ],
          whyChooseUs: [
            "Personalized care by rehabilitation experts: Our specialists use global best-practice guidelines for both sports and non-sports populations.",
            "Accelerated recovery: Evidence-supported therapies for rapid healing, pain relief, and injury prevention.",
            "Local expertise, global standards: Patient-centered programs using Bangalore’s most advanced physiotherapy technology and protocols.",
          ],
          cta: "Book your assessment—experience tailored care, faster recovery, and lasting results.",
        },
      },
      {
  name: "Arthritis",
  modalContent: {
    title: "Evidence-Based Physiotherapy for Relief, Mobility, and Independence",
    subtitle: "Comprehensive Arthritis Rehabilitation at VitalPhysio⁺",
    description: `
      Arthritis—encompassing osteoarthritis, rheumatoid arthritis, and related joint disorders—causes pain, swelling, and restricted mobility, affecting daily activities and quality of life. At VitalPhysio⁺, we deliver cutting-edge, multidisciplinary arthritis management using global guidelines, advanced technologies, and a deeply personalized approach for optimum results.
    `,
    highlights: [
      "Specialized Assessment: Every patient receives a full musculoskeletal, functional, and lifestyle evaluation—identifying the type, stage, and impact of arthritis to tailor the ideal, patient-specific program.",
      "Multimodal Physiotherapy: We implement evidence-based interventions such as:",
      "Targeted therapeutic exercise: Strengthening, flexibility, aerobic, and neuromuscular training shown to improve joint mobility, reduce pain, and slow progression.",
      "Manual therapy & joint mobilization: Gentle hands-on techniques restore range of motion and function.",
      "Aquatic therapy & Pilates: Low-impact modalities proven especially helpful for arthritis.",
      "Pain management modalities: Thermal therapy (heat/cold packs), TENS, and laser therapy for immediate symptom relief.",
      "Bracing, taping, and orthotic support: Protects affected joints and aids daily function.",
      "Assistive device guidance: From canes to custom aids, we match equipment to patient needs for safety and autonomy.",
    ],
    integratedTeamApproach: `
      Our physiotherapists collaborate with rheumatologists and orthopedic specialists, as needed, to deliver fully coordinated care.
    `,
    education: `
      Patients learn joint protection, pacing, weight management strategies (including diet recommendations like the Mediterranean and anti-inflammatory diet), and energy conservation techniques—empowering sustainable, long-term self-care.
    `,
    conditions: [
      "Osteoarthritis (knee, hip, hand, spine)",
      "Rheumatoid arthritis and other inflammatory arthropathies",
      "Juvenile idiopathic arthritis",
      "Spondyloarthritis and psoriatic arthritis",
    ],
    programHighlights: [
      "Personalized, goal-oriented progress: Every step and milestone is tailored for your needs—whether resuming hobbies, increasing everyday activity, or reducing stiffness and pain.",
      "Global best-practice guidelines: Care based on American College of Rheumatology (ACR), OARSI, and Indian national recommendations.",
    ],
    cta: "Take control of your arthritis with a holistic program proven to improve mobility, reduce pain, and enhance life quality. Book your evaluation at VitalPhysio⁺ today!",
  },
},
      {
  name: "Back Pain",
  modalContent: {
    title: "Comprehensive Relief—Personalized, Non-Surgical Rehabilitation",
    subtitle: "Best-in-Class Back Pain Physiotherapy at VitalPhysio⁺",
    description: `
      Back pain—especially lower back pain—is a leading cause of disability worldwide, affecting people of all ages and lifestyles. At VitalPhysio⁺, we specialize in advanced, individualized treatment programs that go beyond symptom relief to address the true source of pain and restore lasting function.
    `,
    highlights: [
      "Targeted Assessment: Every case begins with a thorough clinical, functional, and postural evaluation—including assessment for disc issues, nerve involvement, and lifestyle factors. This ensures a precise, patient-centered diagnosis and the right treatment pathway.",
      "Evidence-Based Physiotherapy Techniques: Our protocols are guided by global best practices:",
      "Therapeutic Exercise: Core stabilization, functional movement retraining, stretching, and strengthening individualized for acute, subacute, or chronic back pain.",
      "Manual Therapy: Joint mobilization, soft tissue release, and myofascial techniques to rapidly reduce pain and restore range of motion.",
      "Pain Management Modalities: Advanced options such as TENS, high-intensity laser, shockwave therapy, and, where indicated, platelet-rich plasma (PRP) for persistent pain.",
      "Education and Self-Management: Patients are empowered with ergonomics, activity modification, and back care training to maintain results and prevent recurrence.",
    ],
    activeRecovery: `
      Most cases of spine and back pain do not require surgery. Our proven approach promotes movement, safe activity, and gradual return to daily life—reducing reliance on medication and delivering long-term results.
    `,
    conditions: [
      "Acute and chronic low back pain",
      "Herniated disc, degenerative disc disease, sciatica",
      "Lumbar muscle strain, facet joint syndrome",
      "Postural pain, mechanical back pain, axial spondyloarthritis",
    ],
    whyChooseUs: [
      "Global best-practice adherence: Protocols based on current evidence and leading clinical guidelines.",
      "Personalized care with latest technology: Real-time movement feedback, wearable sensors, and digital exercise prescription.",
      "Goal-driven rehabilitation: Every patient follows a criterion-based progression for a safe, confident return to work, fitness, and everyday living.",
    ],
    cta: "Book your back pain assessment for a return to pain-free movement, improved posture, and renewed quality of life.",
  },
},
    ],
    image: "🦴",
  },
  // ...other services
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
      <Head>
        <title>Our Services | VitalPhysio⁺</title>
        <meta
          name="description"
          content="Explore the wide range of physiotherapy and rehabilitation services offered at VitalPhysio⁺ in Bengaluru."
        />
      </Head>
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
                      {/* Conditions Preview */}
                      <div className="mb-6">
                        <h4 className="text-base font-semibold text-gray-800 mb-3">
                          Conditions We Treat:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.conditions.slice(0, 3).map((condition, idx) => (
                            <span
                              key={idx}
                              className={`px-4 py-2 ${
                                service.accentColor
                              } text-white text-sm font-medium rounded-full`}
                            >
                              {typeof condition === "string"
                                ? condition
                                : condition.name}
                            </span>
                          ))}
                          {service.conditions.length > 3 && (
                            <span className="px-4 py-2 bg-gray-200 text-gray-600 text-sm font-medium rounded-full">
                              +{service.conditions.length - 3} more
                            </span>
                          )}
                        </div>
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200 min-h-[320px] flex flex-col"
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
}) => {
  const [nestedModalData, setNestedModalData] = useState<any>(null);

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
        className={`relative bg-white rounded-2xl shadow-2xl w-full ${
          nestedModalData ? "max-w-md" : "max-w-3xl"
        } max-h-[90vh] overflow-y-auto no-scrollbar border-4 border-gray-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Modal Content */}
        <div className={`p-8 bg-white border-b-4 ${data.borderColor}`}>
          <div className="flex items-center gap-6 mb-6">
            {data.icon && (
              <div
                className={`w-20 h-20 rounded-xl bg-gray-50 border-2 ${data.borderColor} flex items-center justify-center shadow-sm`}
              >
                <data.icon className={`w-12 h-12 ${data.iconColor}`} />
              </div>
            )}
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
                {data.conditions.map((condition: any, index: number) => (
                  <button
                    key={index}
                    onClick={() =>
                      typeof condition === "object" &&
                      condition.modalContent &&
                      setNestedModalData(condition.modalContent)
                    }
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                  >
                    <div
                      className={`w-3 h-3 ${data.accentColor} rounded-full flex-shrink-0`}
                    ></div>
                    <span className="text-gray-700 font-medium">
                      {typeof condition === "string"
                        ? condition
                        : condition.name}
                    </span>
                  </button>
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

      {/* Child Modal Content */}
      {nestedModalData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-y-auto no-scrollbar border-4 border-gray-200"
          >
            <div className="p-6 bg-white border-b-4 border-gray-200">
              <h2 className="text-2xl font-bold text-[var(--vp-blue)] mb-4">
                {nestedModalData.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {nestedModalData.description}
              </p>
            </div>
            <div className="p-6">
              {nestedModalData.highlights && (
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  {nestedModalData.highlights.map(
                    (highlight: string, index: number) => (
                      <li key={index} className="text-[var(--vp-teal)]">
                        {highlight}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
            <div className="p-6">
              {nestedModalData.conditions && (
                <div>
                  <h3 className="font-bold text-xl text-[var(--vp-orange)] mb-4">
                    Conditions We Treat:
                  </h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    {nestedModalData.conditions.map(
                      (condition: string, index: number) => (
                        <li key={index}>{condition}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className="p-6">
              {nestedModalData.approach && (
                <div>
                  <h3 className="font-bold text-xl text-[var(--vp-blue)] mb-4">
                    What Sets Our Approach Apart?
                  </h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    {nestedModalData.approach.map(
                      (approach: string, index: number) => (
                        <li key={index}>{approach}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className="p-6">
              {nestedModalData.importance && (
                <div>
                  <h3 className="font-bold text-xl text-[var(--vp-teal)] mb-4">
                    Why Early & Specialist-led Rehab Matters:
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {nestedModalData.importance}
                  </p>
                </div>
              )}
            </div>
                <div className="p-6 bg-[var(--vp-blue)] text-white rounded-b-2xl flex items-center justify-center">
  <Link
    href="/contact"
    className="inline-block bg-[var(--vp-orange)] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-center"
  >
    Book your chronic pain assessment today
  </Link>
</div>

            <button
              onClick={() => setNestedModalData(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors bg-white rounded-full p-3 shadow-lg border border-gray-200"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};
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

// Add responsive utilities to service cards
<section className="bg-white py-16 md:py-24 px-4 sm:px-6 scroll-mt-20">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {coreServicesData.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          viewport={{ once: true, amount: 0.25 }}
          className="p-6 bg-white rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold">{service.title}</h3>
        </motion.div>
      ))}
    </div>
  </div>
</section>;
