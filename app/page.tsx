"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  X
} from 'lucide-react';
import HowWeAreDifferent from '@/components/how-we-are-different';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import LandingNavbar from '@/components/landing-navbar';
import CTA from '@/components/CTA';


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
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange, false);

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap");
        .font-lato { font-family: "Lato", sans-serif; }
        body {
          background-color: #f0f9ff;
          overflow-x: hidden; /* Prevent horizontal scroll on mobile */
        }
        h1,h2,h3 {
          /* Smooth responsive scaling */
          line-height: 1.15;
        }
        @media (max-width: 640px) {
          h1 { font-size: clamp(1.9rem, 7vw, 2.25rem); }
          h2 { font-size: clamp(1.5rem, 6.2vw, 1.9rem); }
          h3 { font-size: clamp(1.25rem, 5.4vw, 1.5rem); }
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-lato">Visit Our Clinic</h2>
          <p className="text-xl text-gray-600">Bengaluru's Premier Physiotherapy Center</p>
          <p className="text-gray-600 mt-2">Combining evidence-based treatments with highly personalized care to restore your full function.</p>
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
              <h3 className="text-xl font-bold text-blue-900 mb-6">Contact Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Our Address:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      VitalPhysio⁺, 2nd Floor, P V Complex, Opp. Iblur Lake Park, Bellandur, Bengaluru, Karnataka, India - 560103
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Schedule an Appointment:</h4>
                    <p className="text-blue-600 font-semibold">+91 80473 59900</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">General Queries:</h4>
                    <p className="text-blue-600 font-semibold">+91 80473 59090</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-Mail:</h4>
                    <p className="text-blue-600 font-semibold">Contact@VitalPhysio.Plus</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Opening Hours:</h4>
                    <p className="text-gray-600">Every Day: 07:00 AM - 09:00 PM</p>
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
            <div className="w-full h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium">Google Maps</p>
                <p className="text-gray-400 text-sm mt-2">Interactive map will be embedded here</p>
              </div>
            </div>
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
        Welcome to VitalPhysio⁺, your premier center for comprehensive physiotherapy. We are dedicated to restoring your physical function, effectively managing pain, and enhancing your overall well-being. Experience the integration of contemporary scientific advancements with highly personalized care plans, ensuring optimal outcomes for every individual.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <a
          href="#services"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Explore Our World-Class Services
        </a>
      </motion.div>
    </div>
  </section>
);

// Services Grid Component
const ServicesGrid = () => {
  const services = [
    {
      icon: HeartPulse,
      title: 'Recovering from Injury or Surgery',
      description: 'Expert care for back pain, neck pain, joint conditions, post-fracture, and post-surgical recovery. Regain strength, flexibility, and complete range of motion.',
      link: 'Discover More',
      borderColor: 'border-teal-500'
    },
    {
      icon: Dumbbell,
      title: 'Sports Performance & Injury Prevention',
      description: 'Specialized programs for sprains, strains, ACL injuries, and overuse syndromes. Accelerate healing, prevent re-injury, and optimize athletic performance.',
      link: 'Explore Sports Physio',
      borderColor: 'border-teal-500'
    },
    {
      icon: BrainCircuit,
      title: 'Managing Persistent Pain',
      description: 'Comprehensive strategies for persistent back pain, neck pain, headaches, and fibromyalgia. Find lasting relief and improve coping mechanisms.',
      link: 'Learn About Pain Relief',
      borderColor: 'border-orange-500'
    },
    {
      icon: PersonStanding,
      title: "Women's Wellness & Pelvic Health",
      description: 'Discreet and effective specialized care for pelvic floor dysfunction, pre/post-natal recovery, and osteoporosis. Regain confidence and comfort.',
      link: "View Women's Health",
      borderColor: 'border-teal-500'
    },
    {
      icon: HeartHandshake,
      title: 'Intimate Health & Pelvic Floor Support',
      description: 'Discrete and compassionate care for urinary incontinence, faecal incontinence, and sexual health concerns. Regain confidence and improve quality of life.',
      link: 'Explore Intimate Health',
      borderColor: 'border-teal-500'
    },
    {
      icon: Orbit,
      title: 'Restoring Movement & Function',
      description: "Specialized therapy for conditions like stroke, Parkinson's disease, and brain injuries. Improve motor control, balance, and coordination.",
      link: 'Learn About Neuro Physio',
      borderColor: 'border-teal-500'
    },
  ];

   return (
    <section id="services" className="bg-white py-16 md:py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
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
              <div className={`mb-4 text-white rounded-full p-3 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center ${service.borderColor === 'border-orange-500' ? 'bg-orange-500' : 'bg-teal-500'}`}>
                <service.icon size={24} className="md:size-28" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow mb-5 md:mb-6">{service.description}</p>
              <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 self-start group text-sm md:text-base"
              >
                {service.link}
                <ArrowRight className="inline-block ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
// Learn More Section
const LearnMore = () => {
    const links = [
        { name: 'Why VitalPhysio⁺?', href: '#why-us' },
        { name: 'Our Services', href: '#services' },
        { name: 'Our Technology', href: '#technology' },
        { name: 'Conditions We Treat', href: '#conditions' },
    ];
return (
    <section id="about" className="bg-blue-50/50 py-16 md:py-24 px-4 sm:px-6 scroll-mt-20">
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
