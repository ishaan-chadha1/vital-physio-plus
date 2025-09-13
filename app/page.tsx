"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Dumbbell,
  BrainCircuit,
  PersonStanding,
  HeartHandshake,
  Orbit,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import HowWeAreDifferent from "@/components/how-we-are-different";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import CTA from "@/components/CTA";

// Main App Component - This combines all sections into a single, cohesive page.
export default function App() {
  // Effect for smooth scrolling to hash links, similar to your original code
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange, false);

    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap");
        .font-lato {
          font-family: "Lato", sans-serif;
        }
        body {
          background-color: #f0f9ff;
          overflow-x: hidden; /* Prevent horizontal scroll on mobile */
        }
        h1,
        h2,
        h3 {
          /* Smooth responsive scaling */
          line-height: 1.15;
        }
        @media (max-width: 640px) {
          h1 {
            font-size: clamp(1.9rem, 7vw, 2.25rem);
          }
          h2 {
            font-size: clamp(1.5rem, 6.2vw, 1.9rem);
          }
          h3 {
            font-size: clamp(1.25rem, 5.4vw, 1.5rem);
          }
        }
      `}</style>
      <div className="bg-white font-sans">
        <LandingNavbar />
        <main>
          <Hero />
          <HowWeAreDifferent />
          <JourneySection />
          <ServicesGrid />
          <LearnMore />
          <CTA />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

// Header Component

// Hero Section Component - Updated to match the provided image

const ContactSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-lato">
            Visit Our Clinic
          </h2>
          <p className="text-xl text-gray-600">
            Bengaluru's Premier Physiotherapy Center
          </p>
          <p className="text-gray-600 mt-2">
            Combining evidence-based treatments with highly personalized care to
            restore your full function.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-blue-900 mb-6">
                Contact Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Our Address:
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      VitalPhysio⁺, 2nd Floor, P V Complex, Opp. Iblur Lake
                      Park, Bellandur, Bengaluru, Karnataka, India - 560103
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Schedule an Appointment:
                    </h4>
                    <p className="text-blue-600 font-semibold">
                      +91 80473 59900
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      General Queries:
                    </h4>
                    <p className="text-blue-600 font-semibold">
                      +91 80473 59090
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      E-Mail:
                    </h4>
                    <p className="text-blue-600 font-semibold">
                      Contact@VitalPhysio.Plus
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Opening Hours:
                    </h4>
                    <p className="text-gray-600">
                      Every Day: 07:00 AM - 09:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.1943809465693!2d77.66542842290029!3d12.92201575241767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b33756fb95%3A0xaae9a01bf274f3f1!2sVitalPhysio%2B!5e0!3m2!1sen!2sin!4v1756645280286!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VitalPhysio⁺ Clinic Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
// Journey Section Component
const JourneySection = () => (
  <section className="bg-blue-50/50 py-16 md:py-24 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-5 md:mb-6"
      >
        Your Journey to Vitality Starts Here
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 md:mb-10"
      >
        Welcome to VitalPhysio⁺, your premier center for comprehensive
        physiotherapy. We are dedicated to restoring your physical function,
        effectively managing pain, and enhancing your overall well-being.
        Experience the integration of contemporary scientific advancements with
        highly personalized care plans, ensuring optimal outcomes for every
        individual.
      </motion.p>
    </div>
  </section>
);
const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-4 md:mx-0 p-8 overflow-y-auto max-h-[85vh] custom-scrollbar border-t-4 border-teal-500"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">{children}</div>
      </motion.div>

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
};
// Services Grid Component
const ServicesGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const services = [
      {
      icon: HeartPulse,
      title: "Recovering from Injury or Surgery",
      description:
        "Expert care for back pain, neck pain, joint conditions, post-fracture, and post-surgical recovery. Regain strength, flexibility, and complete range of motion.",
      link: "Discover More",
      borderColor: "border-teal-500",
      onClick: () => {
        setModalContent(
          <>
            <h2 className="text-3xl font-semibold text-blue-900 tracking-tight mb-6">
              Comprehensive Physiotherapy for Injury and Surgery Recovery
            </h2>
            <ul className="list-none space-y-4 text-gray-700 leading-relaxed">
              <li>
                <strong className="text-blue-900">
                  Expert, Individualized Assessment:
                </strong>{" "}
                Our specialized physiotherapists begin with a detailed
                evaluation of your specific condition—whether it's back pain,
                neck pain, joint problems, post-fracture immobilization, or
                recovery after surgery. We design evidence-based personalized
                treatment plans focused on your needs and goals.
              </li>
              <li>
                <strong className="text-teal-500">
                  Pain Management and Early Mobilization:
                </strong>{" "}
                We apply advanced pain-relief modalities (manual therapy,
                electrotherapy, ultrasound, etc.) and facilitate safe, gradual
                mobilization. Early movement helps minimize complications like
                joint stiffness, muscle atrophy, and loss of mobility.
              </li>
              <li>
                <strong className="text-orange-500">
                  Restoring Strength, Flexibility, and Range of Motion:
                </strong>{" "}
                Systematic progression of strengthening, flexibility, and range
                of motion exercises targets weakened muscles and restricted
                joints. Our methods rebuild strength around affected areas,
                restore full mobility, and help you regain functional
                independence.
              </li>
              <li>
                <strong className="text-blue-900">
                  Progressive Functional Rehabilitation:
                </strong>{" "}
                Rehab is more than simple exercise routines. We introduce
                functional movements that simulate day-to-day tasks, ensuring
                you return confidently to daily life, work, or sports. For
                athletes, customized sport-specific drills help you perform at
                your best and reduce the risk of re-injury.
              </li>
            </ul>
          </>
        );
        setIsModalOpen(true);
      },
    },
    {
      icon: Dumbbell,
      title: "Sports Performance & Injury Prevention",
      description:
        "Specialized programs for sprains, strains, ACL injuries, and overuse syndromes. Accelerate healing, prevent re-injury, and optimize athletic performance.",
      link: "Explore Sports Physio",
      borderColor: "border-teal-500",
      onClick: () => {
        setModalContent(
          <>
            <h2 className="text-3xl font-semibold text-blue-900 tracking-tight mb-6">
              Sports Physiotherapy: Injury Prevention and Peak Performance
            </h2>
            <p className="text-gray-700 mb-4">
              Unlock the best in evidence-based sports physiotherapy designed to
              prevent injury, accelerate healing, and boost your athletic
              performance.
            </p>
            <ul className="list-none space-y-4 text-gray-700 leading-relaxed">
              <li>
                <strong className="text-blue-900">
                  Comprehensive Sports Injury Assessment:
                </strong>{" "}
                Our expert physiotherapists conduct detailed functional
                screenings to identify current injuries, underlying
                biomechanical issues, and potential risk factors for future
                injuries. We specialize in managing acute and chronic sports
                injuries, including ligament sprains, muscle strains, ACL tears,
                and repetitive overuse syndromes.
              </li>
              <li>
                <strong className="text-teal-500">
                  Personalized Rehabilitation Protocols:
                </strong>{" "}
                Each athlete receives a tailored plan based on their sport,
                injury profile, and recovery goals. Progressive treatment phases
                include pain management, controlled mobilization, and advanced
                strength and proprioceptive training to regain function and
                prevent re-injury.
              </li>
              <li>
                <strong className="text-orange-500">
                  ACL Injury Recovery and Return-to-Play:
                </strong>{" "}
                Evidence-based ACL rehabilitation incorporates phased
                milestones:
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <strong>Phase 1:</strong> Pain/swelling management,
                    restoring joint mobility, and normal gait retraining.
                  </li>
                  <li>
                    <strong>Phase 2:</strong> Muscle activation, strength
                    building, neuromuscular re-education, and proprioception.
                  </li>
                  <li>
                    <strong>Phases 3–5:</strong> Advanced resistance exercise,
                    agility, plyometrics, and gradual return to high-level
                    sports using sport-specific drills and re-injury risk
                    assessment.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-blue-900">
                  Advanced Performance Optimization:
                </strong>{" "}
                State-of-the-art physiotherapy facilities for evidence-based
                sports performance enhancement include:
                <ul className="list-disc list-inside mt-2">
                  <li>Strength and conditioning coaching</li>
                  <li>Speed, agility, and balance training</li>
                  <li>High-tech tools for functional performance testing</li>
                </ul>
              </li>
            </ul>
          </>
        );
        setIsModalOpen(true);
      },
    },
    {
  icon: BrainCircuit,
  title: "Managing Persistent Pain",
  description:
    "Comprehensive strategies for persistent back pain, neck pain, headaches, and fibromyalgia. Find lasting relief and improve coping mechanisms.",
  link: "Learn About Pain Relief",
  borderColor: "border-orange-500",
  onClick: () => {
    setModalContent(
      <>
        <h2 className="text-3xl font-semibold text-blue-900 tracking-tight mb-6">
          Lasting Relief for Persistent Pain: Expert Physiotherapy for Chronic Back Pain, Neck Pain, Headaches, and Fibromyalgia
        </h2>
        <p className="text-gray-700 mb-4">
          Are you searching for effective solutions for chronic pain? Our physiotherapists are experts in managing persistent pain conditions using evidence-based, multidisciplinary approaches that address both the body and mind.
        </p>
        <ul className="list-none space-y-4 text-gray-700 leading-relaxed">
          <li>
            <strong className="text-blue-900">Thorough Pain Assessment:</strong>{" "}
            Every patient receives an in-depth evaluation to pinpoint causes—whether for chronic back pain, ongoing neck discomfort, tension headaches, or fibromyalgia.
          </li>
          <li>
            <strong className="text-teal-500">Manual Therapy and Myofascial Release:</strong>{" "}
            Hands-on techniques such as massage, joint mobilization, and myofascial release help reduce pain intensity, improve range of motion, and target trigger points for lasting comfort.
          </li>
          <li>
            <strong className="text-orange-500">Guided Exercise Therapy:</strong>{" "}
            Individualized exercise programs promote healing, restore strength and flexibility, and correct faulty movement patterns. Proven regimens include core stabilization, postural correction, stretching, and endurance-building to support the spine and joints, and reduce flare-ups.
          </li>
          <li>
            <strong className="text-blue-900">Patient Education and Self-Care Techniques:</strong>{" "}
            We teach evidence-based pain coping strategies, ergonomic modifications, and home exercises so you stay in control of your pain between visits.
          </li>
          <li>
            <strong className="text-teal-500">Multimodal Therapies for Difficult Conditions:</strong>{" "}
            For fibromyalgia and persistent headaches, we integrate modalities such as hydrotherapy or aquatic physiotherapy, gentle aerobic activity, mindfulness-based stress reduction, and relaxation techniques to address both physical and emotional aspects of pain.
          </li>
          <li>
            <strong className="text-orange-500">Lasting Results with a Compassionate Approach:</strong>{" "}
            Our programs focus on sustainable improvement—not just temporary relief. We empower you to manage pain, improve daily functioning, and reclaim a more active, joyful life.
          </li>
        </ul>
        <p className="text-gray-700 mt-6">
          <strong className="text-blue-900">We specialize in:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>Persistent lower back and neck pain</li>
          <li>Chronic tension or migraine headaches</li>
          <li>Fibromyalgia management</li>
          <li>Postural pain syndromes</li>
          <li>Chronic pain after injury or surgery</li>
        </ul>
        <p className="text-gray-700 mt-6">
          Get answers to your pain. Discover evidence-based physiotherapy, ongoing support, and a commitment to your comfort and recovery.
        </p>
      </>
    );
    setIsModalOpen(true);
  },
},
   {
  icon: PersonStanding,
  title: "Women's Wellness & Pelvic Health",
  description:
    "Discreet and effective specialized care for pelvic floor dysfunction, pre/post-natal recovery, and osteoporosis. Regain confidence and comfort.",
  link: "View Women's Health",
  borderColor: "border-teal-500",
  onClick: () => {
    setModalContent(
      <>
        <h2 className="text-3xl font-semibold text-blue-900 tracking-tight mb-6">
          Women's Health Physiotherapy: Pelvic Floor, Pre/Post-Natal, and Osteoporosis Care
        </h2>
        <p className="text-gray-700 mb-4">
          Take control of your wellness with discreet, expert physiotherapy for women—solving pelvic floor dysfunction, supporting healthy pre- and post-natal recovery, and empowering osteoporosis prevention and management.
        </p>
        <ul className="list-none space-y-4 text-gray-700 leading-relaxed">
          <li>
            <strong className="text-blue-900">Pelvic Floor Dysfunction Solutions:</strong>{" "}
            Address urinary incontinence, pelvic pain, prolapse, and sexual dysfunction with targeted pelvic floor muscle training, manual therapy, biofeedback, and lifestyle coaching. Physiotherapy is a first-line, evidence-based approach to improving pelvic floor strength, bladder control, and intimate wellbeing. Benefits include freedom from discomfort, restored confidence, and lasting symptom relief.
          </li>
          <li>
            <strong className="text-teal-500">Pre- and Post-Natal Recovery:</strong>{" "}
            Gentle, guided exercise programs help restore core and pelvic stability after childbirth, reduce back and pelvic pain, and promote a safe return to physical activity. Pre-natal care prepares your body for birth; post-natal therapy accelerates abdominal healing, posture recovery, and functional strength for daily activities and motherhood.
          </li>
          <li>
            <strong className="text-orange-500">Osteoporosis Prevention and Management:</strong>{" "}
            Weight-bearing exercise, balance retraining, posture correction, and strength training are proven to support bone density and reduce fracture risk. Our tailored osteoporosis physiotherapy programs are designed for safety, confidence, and improved quality of life at any age.
          </li>
          <li>
            <strong className="text-blue-900">Empowering Education and Support:</strong>{" "}
            We provide compassionate education about pelvic health, pain management strategies, sexual health after pregnancy or menopause, and safe exercise options for each phase of a woman’s life.
          </li>
          <li>
            <strong className="text-teal-500">Discreet, Confidential Care in Comfortable Settings:</strong>{" "}
            Every session is private and personalized, with clinical expertise and sensitive support that respects your needs and promotes confidence, comfort, and long-term well-being.
          </li>
        </ul>
        <p className="text-gray-700 mt-6">
          <strong className="text-blue-900">Conditions We Treat:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>Pelvic floor dysfunction (incontinence, prolapse, pain)</li>
          <li>Pre- and post-natal care for pregnancy recovery</li>
          <li>Osteoporosis risk and bone health</li>
          <li>Chronic pelvic pain and sexual dysfunction</li>
        </ul>
        <p className="text-gray-700 mt-6">
          Get back to your best self. Discover trusted women’s health physiotherapy for pelvic strength, mobility, and everyday comfort.
        </p>
      </>
    );
    setIsModalOpen(true);
  },
},
 {
  icon: HeartHandshake,
  title: "Intimate Health & Pelvic Floor Support",
  description:
    "Discrete and compassionate care for urinary incontinence, faecal incontinence, and sexual health concerns. Regain confidence and improve quality of life.",
  link: "Explore Intimate Health",
  borderColor: "border-teal-500",
  onClick: () => {
    setModalContent(
      <>
        <h2 className="text-3xl font-semibold text-blue-900 tracking-tight mb-6">
          Intimate Health & Pelvic Floor Support: Discreet, Compassionate Physiotherapy for Incontinence and Sexual Wellness
        </h2>
        <p className="text-gray-700 mb-4">
          Experience judgment-free, expert physiotherapy designed to restore pelvic function, manage incontinence, and address sensitive sexual health concerns—empowering you to regain confidence and a better quality of life.
        </p>
        <ul className="list-none space-y-4 text-gray-700 leading-relaxed">
          <li>
            <strong className="text-blue-900">Urinary Incontinence:</strong>{" "}
            Strengthen and retrain pelvic floor muscles with guided exercises, biofeedback, and electrostimulation—the gold standards for conservative management of urinary leakage, urgency, and frequency. These physiotherapy techniques significantly improve bladder control and reduce everyday disruptions.
          </li>
          <li>
            <strong className="text-teal-500">Faecal Incontinence:</strong>{" "}
            Advanced muscle re-education and targeted training for anal sphincter and pelvic muscles can dramatically enhance continence, confidence, and independence. Biofeedback, pelvic floor muscle training, and electrical stimulation are clinically recommended to alleviate symptoms and improve quality of life.
          </li>
          <li>
            <strong className="text-orange-500">Sexual Health Concerns:</strong>{" "}
            Physiotherapy for sexual dysfunction addresses pain during intercourse, arousal or orgasm difficulties, and male/female erectile or pelvic pain. Treatment combines muscle relaxation, strength training, biofeedback, and holistic emotional support, leading to improved sexual function and personal well-being.
          </li>
        </ul>
        <p className="text-gray-700 mt-6">
          <strong className="text-blue-900">How Pelvic Floor Therapy Enhances Intimate Health:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>Restores muscle tone, endurance, and coordination for better bladder, bowel, and sexual function</li>
          <li>Reduces pelvic pain and discomfort with hands-on therapy and specialized exercises</li>
          <li>Improves blood flow, relaxation, and body awareness—vital for healthy intimacy and relationships</li>
          <li>Gives you control, confidence, and a supportive, discreet space to discuss sensitive health issues</li>
          <li>Suitable for women, men, and people of any gender experiencing pelvic health challenges</li>
        </ul>
        <p className="text-gray-700 mt-6">
          Recover confidence, dignity, and comfort. Explore evidence-based pelvic floor therapy and take the first step to restoring control and quality of life.
        </p>
      </>
    );
    setIsModalOpen(true);
  },
},
{
  icon: Orbit,
  title: "Restoring Movement & Function",
  description:
    "Specialized therapy for conditions like stroke, Parkinson's disease, and brain injuries. Improve motor control, balance, and coordination.",
  link: "Learn About Neuro Physio",
  borderColor: "border-teal-500",
  onClick: () => {
    setModalContent(
      <>
        <h2 className="text-3xl font-semibold text-blue-900 tracking-tight mb-6">
          Neurological Physiotherapy: Regain Movement & Independence After Stroke, Parkinson’s, and Brain Injury
        </h2>
        <p className="text-gray-700 mb-4">
          Unlock your potential for recovery with evidence-based neuro physiotherapy—specialized for restoring movement, balance, and function in neurological conditions like stroke, Parkinson’s disease, and brain injuries.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>What Is Neuro Physiotherapy?</strong> Neurological physiotherapy targets the nervous system to help individuals regain control of their body after injury or disease. Our programs offer hope for improved mobility, motor control, coordination, and functional independence.
        </p>
        <p className="text-gray-700 mt-6">
          <strong className="text-blue-900">Expert Neurorehabilitation for:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>Stroke recovery (acute, subacute, and chronic)</li>
          <li>Parkinson’s disease and other movement disorders</li>
          <li>Traumatic or acquired brain injuries</li>
          <li>Balance and gait difficulties</li>
        </ul>
        <p className="text-gray-700 mt-6">
          <strong className="text-blue-900">Comprehensive Neuro Physio Strategies:</strong>
        </p>
        <ul className="list-none space-y-4 text-gray-700 leading-relaxed">
          <li>
            <strong className="text-blue-900">Personalized Assessment and Goal Setting:</strong>{" "}
            Every patient receives a detailed evaluation using best-practice clinical scales (balance, gait, independence, and cognition). We set clear, attainable goals for improved quality of life.
          </li>
          <li>
            <strong className="text-teal-500">Motor Control and Functional Re-Education:</strong>{" "}
            Cutting-edge interventions help retrain the brain and body to restore lost movements. Techniques include neuromuscular facilitation (such as PNF), functional electrical stimulation, mirror therapy, and graded motor imagery to improve strength, coordination, and control.
          </li>
          <li>
            <strong className="text-orange-500">Balance, Coordination & Gait Training:</strong>{" "}
            Our therapists use a range of balance exercises—from simple weight shifts to advanced unstable surface training—to reduce fall risk and improve confidence. Gait retraining may involve treadmill, bodyweight-supported walking, and targeted dynamic drills.
          </li>
          <li>
            <strong className="text-blue-900">Management of Spasticity and Stiffness:</strong>{" "}
            Individualized stretching, manual therapy, and the use of splints/braces help minimize spasticity and maintain joint flexibility.
          </li>
          <li>
            <strong className="text-teal-500">Functional Independence and Community Integration:</strong>{" "}
            We emphasize activities of daily living, posture, and transfers using real-world tasks, helping patients regain independence at home and in the community. Caregiver training and home exercise recommendations support ongoing recovery.
          </li>
          <li>
            <strong className="text-orange-500">Long-Term Support for Progressive Neurological Conditions:</strong>{" "}
            Regular reviews and progressive adjustment of therapy plans for conditions such as Parkinson’s ensure sustained improvement and adaptation to evolving needs.
          </li>
        </ul>
        <p className="text-gray-700 mt-6">
          <strong className="text-blue-900">Why Choose Our Neuro Physiotherapy Programs?</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>Advanced, patient-centered rehabilitation techniques</li>
          <li>Focus on functional outcomes: walking, balance, hand use, speech, and more</li>
          <li>Empathetic, multidisciplinary approach involving family and caregivers</li>
          <li>Latest technology and research-based interventions</li>
        </ul>
        <p className="text-gray-700 mt-6">
          Take the next step in your neuro-recovery journey. Experience compassionate care, real progress, and a clear roadmap to maximizing your abilities.
        </p>
      </>
    );
    setIsModalOpen(true);
  },
},
  ];

  return (
    <section
      id="services"
      className="bg-white py-16 md:py-24 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
          Explore Our World-Class Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className={`bg-gray-50/70 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col border-t-4 ${service.borderColor}`}
            >
              <div
                className={`mb-4 text-white rounded-full p-3 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center ${
                  service.borderColor === "border-orange-500"
                    ? "bg-orange-500"
                    : "bg-teal-500"
                }`}
              >
                <service.icon size={24} className="md:size-28" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow mb-5 md:mb-6">
                {service.description}
              </p>
              <button
                onClick={service.onClick}
                className="font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 self-start group text-sm md:text-base flex items-center space-x-2"
              >
                <span>{service.link}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
    </section>
  );
};
// Learn More Section
const LearnMore = () => {
  const links = [
    { name: "Why VitalPhysio⁺?", href: "#why-us" },
    { name: "Our Services", href: "#services" },
    { name: "Our Technology", href: "#technology" },
    { name: "Conditions We Treat", href: "#conditions" },
  ];
  return (
    <section
      id="about"
      className="bg-blue-50/50 py-16 md:py-24 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="container mx-auto text-center max-w-5xl">
        <motion.h2
          // ...existing code...
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-8 md:mb-10"
        >
          Learn More About Us
        </motion.h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              // ...existing code...
              className="w-full sm:w-auto bg-white text-blue-700 font-semibold py-3 px-6 md:px-8 rounded-lg shadow-md hover:bg-blue-600 hover:text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
// const CTA = () => (
//   <section id="book" className="bg-gradient-to-br from-blue-900 to-teal-600 text-white py-20 md:py-28 px-6 scroll-mt-20">
//     <div className="container mx-auto text-center max-w-3xl">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-3xl md:text-4xl font-bold mb-4 text-white"
//       >
//         Ready to Start Your Journey to Better Health?
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-lg text-blue-100 leading-relaxed mb-10"
//       >
//         VitalPhysio⁺ is ready to help you achieve your health and mobility goals. Contact us today to schedule your personalized consultation.
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.4, duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <a
//           href="#consultation"
//           className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-4 px-10 rounded-lg transition-transform transform hover:scale-105 shadow-xl"
//         >
//           Book Your Consultation Now
//         </a>
//       </motion.div>
//     </div>
//   </section>
// );

// Footer Component
// const Footer = () => (
//    <footer
//       className="text-white"
//       style={{ backgroundColor: footerBackgroundColor }}
//     >
//       <div className="container mx-auto px-6 py-8 text-center">
//         {/* Copyright Information */}
//         <p className="mb-2 text-sm text-white/80">
//           &copy; {new Date().getFullYear()} VitalPhysio⁺. All rights reserved. Bengaluru, Karnataka, India.
//         </p>

//         {/* Navigation Links */}
//         <div className="flex items-center justify-center space-x-3 text-sm">
//           <a href="#privacy" className="transition-colors duration-300 hover:text-white/70">
//             Privacy Policy
//           </a>
//           <span className="text-white/50">|</span>
//           <a href="#terms" className="transition-colors duration-300 hover:text-white/70">
//             Terms of Service
//           </a>
//           <span className="text-white/50">|</span>
//           <a href="#blog" className="transition-colors duration-300 hover:text-white/70">
//             Blog & Resources
//           </a>
//         </div>
//       </div>
//     </footer>
// );
