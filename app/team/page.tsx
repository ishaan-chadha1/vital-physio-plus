"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  GraduationCap, 
  Users, 
  Heart, 
  Star,
  ChevronRight,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Linkedin,
  X
} from "lucide-react";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Chief Physiotherapist & Founder",
      specialty: "Orthopedic Rehabilitation",
      category: "leadership",
      image: "/api/placeholder/300/400",
      experience: "15+ Years",
      qualifications: ["BPT", "MPT (Orthopedics)", "PhD in Sports Medicine"],
      bio: "Dr. Priya founded VitalPhysio+ with a vision to revolutionize rehabilitation care in India. Her expertise in advanced orthopedic techniques has helped thousands of patients regain their mobility and confidence.",
      achievements: [
        "Certified Manual Therapy Specialist",
        "Former Head Physiotherapist at AIIMS",
        "Published researcher in International Journal of Physical Therapy"
      ],
      specialties: ["Post-surgical rehabilitation", "Sports injury recovery", "Chronic pain management"],
      languages: ["English", "Hindi", "Kannada"],
      availability: "Mon-Sat, 9 AM - 6 PM"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Senior Sports Physiotherapist",
      specialty: "Sports Medicine",
      category: "therapist",
      image: "/api/placeholder/300/400",
      experience: "12+ Years",
      qualifications: ["BPT", "MPT (Sports)", "Certified Strength & Conditioning Specialist"],
      bio: "Rajesh specializes in athletic performance optimization and injury prevention. He has worked with professional cricket teams and Olympic athletes.",
      achievements: [
        "Team Physiotherapist for Karnataka Ranji Team",
        "Certified Dry Needling Practitioner",
        "Advanced Kinesio Taping Certification"
      ],
      specialties: ["Athletic performance", "Injury prevention", "Return-to-sport protocols"],
      languages: ["English", "Hindi", "Tamil"],
      availability: "Tue-Sun, 8 AM - 7 PM"
    },
    {
      id: 3,
      name: "Dr. Anjali Nair",
      role: "Neurological Rehabilitation Specialist",
      specialty: "Neurophysiotherapy",
      category: "therapist",
      image: "/api/placeholder/300/400",
      experience: "10+ Years",
      qualifications: ["BPT", "MPT (Neurology)", "NDT Certification"],
      bio: "Dr. Anjali brings hope to patients with neurological conditions through evidence-based rehabilitation techniques and compassionate care.",
      achievements: [
        "Bobath Concept Certified Therapist",
        "Specialized in Stroke Rehabilitation",
        "PNF (Proprioceptive Neuromuscular Facilitation) Expert"
      ],
      specialties: ["Stroke recovery", "Parkinson's management", "Spinal cord injury rehab"],
      languages: ["English", "Malayalam", "Hindi"],
      availability: "Mon-Fri, 10 AM - 5 PM"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Pediatric Physiotherapist",
      specialty: "Pediatric Care",
      category: "therapist",
      image: "/api/placeholder/300/400",
      experience: "8+ Years",
      qualifications: ["BPT", "MPT (Pediatrics)", "Early Intervention Certified"],
      bio: "Vikram creates a fun, engaging environment where children can achieve their developmental milestones through play-based therapy approaches.",
      achievements: [
        "Certified in Sensory Integration Therapy",
        "Specialized in Cerebral Palsy Management",
        "Child Development Specialist"
      ],
      specialties: ["Developmental delays", "Cerebral palsy", "Autism spectrum support"],
      languages: ["English", "Hindi", "Punjabi"],
      availability: "Mon-Sat, 9 AM - 4 PM"
    },
    {
      id: 5,
      name: "Meera Reddy",
      role: "Women's Health Physiotherapist",
      specialty: "Women's Health",
      category: "therapist",
      image: "/api/placeholder/300/400",
      experience: "9+ Years",
      qualifications: ["BPT", "MPT (Women's Health)", "Pelvic Floor Specialist"],
      bio: "Meera provides specialized care for women's unique health needs with sensitivity, expertise, and a deep understanding of women's wellness.",
      achievements: [
        "Certified Pelvic Floor Therapist",
        "Pre & Post-natal Exercise Specialist",
        "Women's Health Research Contributor"
      ],
      specialties: ["Pregnancy-related pain", "Post-partum recovery", "Pelvic floor dysfunction"],
      languages: ["English", "Telugu", "Hindi"],
      availability: "Mon-Fri, 10 AM - 6 PM"
    },
    {
      id: 6,
      name: "Arjun Gupta",
      role: "Practice Manager & Care Coordinator",
      specialty: "Operations",
      category: "support",
      image: "/api/placeholder/300/400",
      experience: "6+ Years",
      qualifications: ["MBA (Healthcare Management)", "Patient Experience Certified"],
      bio: "Arjun ensures every patient receives seamless, coordinated care from their first call to their final session. He's your go-to person for all administrative needs.",
      achievements: [
        "Healthcare Operations Excellence Award",
        "Patient Satisfaction Score: 98%",
        "Lean Healthcare Certified"
      ],
      specialties: ["Patient coordination", "Insurance assistance", "Treatment planning"],
      languages: ["English", "Hindi", "Gujarati"],
      availability: "Mon-Sat, 8 AM - 8 PM"
    }
  ];

  const filterCategories = [
    { key: "all", label: "All Team Members", icon: Users },
    { key: "leadership", label: "Leadership", icon: Award },
    { key: "therapist", label: "Therapists", icon: Heart },
    { key: "support", label: "Support Staff", icon: Users }
  ];

  const filteredMembers = activeFilter === "all" 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700;900&display=swap');
        
        :root {
          --vp-blue: #004F8C;
          --vp-teal: #008094;
          --vp-orange: #EC691F;
        }

        .team-banner {
          background: linear-gradient(135deg, var(--vp-blue) 0%, var(--vp-teal) 100%);
        }

        .team-card {
          background: rgba(255,255,255,0.98);
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px 0 rgba(0,79,140,0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px 0 rgba(0,79,140,0.25);
        }

        .filter-btn {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          padding: 0.75rem 1.5rem;
          color: white;
          transition: all 0.3s ease;
        }

        .filter-btn.active {
          background: var(--vp-orange);
          border-color: var(--vp-orange);
          box-shadow: 0 4px 20px 0 rgba(236,105,31,0.4);
        }

        .filter-btn:hover {
          background: rgba(255,255,255,0.2);
          transform: scale(1.05);
        }

        .modal-overlay {
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
        }

        .modal-content {
          background: white;
          border-radius: 2rem;
          box-shadow: 0 25px 80px 0 rgba(0,0,0,0.3);
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .specialty-tag {
          background: linear-gradient(45deg, var(--vp-teal), var(--vp-blue));
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .achievement-item {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border-left: 4px solid var(--vp-teal);
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .lato-font {
          font-family: 'Lato', sans-serif !important;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--vp-blue), var(--vp-teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stats-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 1.5rem;
          padding: 2rem;
        }

        @media (max-width: 768px) {
          .modal-content {
            margin: 1rem;
            max-height: 85vh;
          }
        }
      `}</style>
      
      <LandingNavbar />

      {/* Hero Banner */}
      <section className="team-banner min-h-[400px] py-20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <Users className="w-16 h-16 text-white/80 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 lato-font">
            Meet Our Expert Team
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Passionate professionals dedicated to your recovery journey. Each member brings unique expertise, 
            compassionate care, and unwavering commitment to your wellness.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: "50+", label: "Years Combined Experience", icon: Award },
              { number: "5000+", label: "Patients Treated", icon: Heart },
              { number: "98%", label: "Patient Satisfaction", icon: Star },
              { number: "24/7", label: "Care Support", icon: Phone }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="stats-card text-center"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-black gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-700">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filterCategories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`filter-btn flex items-center gap-2 ${
                  activeFilter === category.key ? 'active' : ''
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="team-card p-6 cursor-pointer group"
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="text-sm font-semibold">Click to learn more</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 lato-font">{member.name}</h3>
                      <p className="text-blue-600 font-semibold">{member.role}</p>
                    </div>

                    <div className="specialty-tag inline-block">
                      {member.specialty}
                    </div>

                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <GraduationCap className="w-4 h-4" />
                        {member.experience}
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="modal-content w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-black text-gray-900 lato-font mb-2">
                        {selectedMember.name}
                      </h2>
                      <p className="text-xl text-blue-600 font-bold mb-3">{selectedMember.role}</p>
                      <div className="specialty-tag inline-block mb-4">
                        {selectedMember.specialty}
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">{selectedMember.bio}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-blue-600" />
                          <span className="font-semibold text-gray-900">Experience</span>
                        </div>
                        <p className="text-gray-600">{selectedMember.experience}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <span className="font-semibold text-gray-900">Availability</span>
                        </div>
                        <p className="text-gray-600 text-sm">{selectedMember.availability}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                      Qualifications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.qualifications.map((qual, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Star className="w-6 h-6 text-blue-600" />
                      Key Achievements
                    </h3>
                    <div className="space-y-2">
                      {selectedMember.achievements.map((achievement, index) => (
                        <div key={index} className="achievement-item">
                          <p className="text-gray-700 font-medium">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Heart className="w-6 h-6 text-blue-600" />
                      Specialties
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedMember.specialties.map((specialty, index) => (
                        <div
                          key={index}
                          className="bg-teal-50 border border-teal-200 p-3 rounded-lg"
                        >
                          <p className="text-teal-800 font-semibold">{specialty}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                      <p className="text-gray-600">{selectedMember.languages.join(", ")}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                      onClick={() => {
                        setSelectedMember(null);
                        // Add booking logic here
                      }}
                    >
                      <Phone className="w-5 h-5" />
                      Book Appointment
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
