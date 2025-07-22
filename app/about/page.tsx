"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import {
  Award,
  Target,
  Gem,
  HeartHandshake,
  BrainCircuit,
  Sparkles,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import LandingNavbar from "@/components/landing-navbar"; // Assuming navbar is in this path

// Main About Page Component
export default function AboutPage() {
  return (
    <div className="bg-white">
      <LandingNavbar />
      <main>
        <AboutHero />
        <MissionVisionValues />
        <WhyChooseUs />
        <TeamCTA />
      </main>
      <Footer />
    </div>
  );
}

// Hero Section for the About Page - Updated with reduced padding
// Hero Section for the About Page - UPDATED
const AboutHero = () => (
  // Use the brand's primary blue color from the global style variable.
  // Reduced vertical padding (py-12 md:py-16) to make the banner thinner.
  // Added top padding (pt-24) to ensure content isn't hidden by the navbar.
  <section className="bg-[var(--vp-blue)] pt-24 pb-12 md:pt-28 md:pb-16 px-6">
    <div className="container mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // Changed text color to white for contrast against the dark blue background.
        className="text-4xl md:text-5xl font-extrabold text-white"
      >
        About VitalPhysio⁺
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        // Changed subheading text color for readability.
        className="mt-4 text-lg md:text-xl text-blue-200"
      >
        Our Commitment to Your Well-being
      </motion.p>
    </div>
  </section>
);

// Mission, Vision, and Values Section
// Mission, Vision, and Values Section - Updated with unique card styling
const MissionVisionValues = () => {
  const coreValues = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To empower individuals to achieve optimal physical function and a life free from limitations through compassionate, evidence-based physiotherapy.",
      borderColor: "border-blue-500",
      iconBgColor: "bg-blue-100",
      iconTextColor: "text-blue-600",
      hoverBgColor: "hover:bg-blue-500",
    },
    {
      icon: Award,
      title: "Vision",
      description:
        "To be the recognized leader in holistic rehabilitation, setting the standard for patient care and innovative therapeutic outcomes.",
      borderColor: "border-teal-500",
      iconBgColor: "bg-teal-100",
      iconTextColor: "text-teal-600",
      hoverBgColor: "hover:bg-teal-500",
    },
    {
      icon: Gem,
      title: "Values",
      description:
        "Our practice is built on Excellence, Compassion, Integrity, Innovation, and Empowerment, ensuring patient-centric care at every step.",
      borderColor: "border-orange-500",
      iconBgColor: "bg-orange-100",
      iconTextColor: "text-orange-600",
      hoverBgColor: "hover:bg-orange-500",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Mission, Vision, and Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`group p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 ${value.borderColor} ${value.hoverBgColor}`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full ${value.iconBgColor} ${value.iconTextColor} group-hover:bg-white group-hover:${value.iconTextColor} transition-colors duration-300`}
              >
                <value.icon size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3 group-hover:text-white transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
// Why Choose Us Section
const WhyChooseUs = () => {
  const features = [
    {
      icon: Stethoscope,
      title: "Expertise You Can Trust",
      description:
        "Our team comprises highly qualified physiotherapists with advanced certifications, committed to evidence-based practice for effective care.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Care, Tailored for You",
      description:
        "We provide one-to-one treatment sessions and individualized plans tailored to your specific needs, addressing root causes for holistic healing.",
    },
    {
      icon: Sparkles,
      title: "Advanced Techniques & Technology",
      description:
        "Utilizing cutting-edge equipment and innovative therapies like laser and advanced manual techniques to ensure forward-thinking care.",
    },
    {
      icon: BrainCircuit,
      title: "A Holistic Approach to Well-being",
      description:
        "We focus on your overall well-being, aiming to improve long-term health and empower you with the knowledge to maintain your vitality.",
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700;900&display=swap");

        /* ---------- VitalPhysio brand palette ---------- */
        :root {
          --vp-blue: #004f8c; /* R-0 G-79  B-140 */
          --vp-teal: #008094; /* R-0 G-128 B-148 */
          --vp-orange: #ec691f; /* R-236 G-105 B-31  */
        }

        .font-lato {
          font-family: "Lato", sans-serif;
        }
      `}</style>
      <section className="bg-blue-50/70 py-20 md:py-28 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-blue-900 mb-8"
              >
                Why Choose VitalPhysio⁺?
              </motion.h2>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="group flex items-start gap-5 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 w-12 h-12 mt-1 rounded-full bg-white shadow-md flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-full h-80 md:h-full min-h-[400px] rounded-2xl shadow-2xl overflow-hidden"
            >
              <img
                src="https://placehold.co/600x700/003366/FFFFFF?text=VitalPhysio%2B+Clinic"
                alt="Modern and welcoming interior of VitalPhysio+ clinic"
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/600x700/e0e0e0/000000?text=Image+Not+Found";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

// Meet the Team CTA Section
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
          Meet the Team
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </div>
  </section>
);

// Footer Component
// const Footer = () => (
//   <footer className="bg-gray-800 text-gray-400 py-12 px-6">
//     <div className="container mx-auto text-center">
//       <p className="mb-4">&copy; {new Date().getFullYear()} VitalPhysio⁺. All rights reserved. Bengaluru, Karnataka, India.</p>
//       <div className="flex justify-center space-x-6">
//         <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
//         <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
//         <a href="#blog" className="hover:text-white transition-colors duration-300">Blog & Resources</a>
//       </div>
//     </div>
//   </footer>

// );
