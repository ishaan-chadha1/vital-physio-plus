"use client"

import { motion, Variants } from "framer-motion"
import { Award, Plus } from "lucide-react"

export default function c() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.58, 1], // easeOut cubic-bezier equivalent
      },
    },
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-8">
          {/* Main Title */}
          <motion.div variants={titleVariants} className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent mb-3">
              How We Are Different
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Cards Container - Added equal heights */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Card - Blue Theme with Filled Border */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-4 border-blue-500 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md"
                  >
                    <Award className="w-4 h-4 text-white" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">
                    Why choose VitalPhysio<span className="text-indigo-500">⁺</span>?
                  </h3>
                </div>
                <motion.p
                  className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300 flex-grow"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  Our care is evidence-based and personalized. We follow international, ICD-aligned protocols for safe,
                  effective recovery.
                </motion.p>
              </div>
            </motion.div>

            {/* Right Card - Teal Theme with Filled Border */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-4 border-teal-500 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg shadow-md"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold text-teal-700 group-hover:text-teal-800 transition-colors duration-300">
                    What does the "<span className="text-teal-500">⁺</span>" in VitalPhysio
                    <span className="text-teal-500"></span> mean?
                  </h3>
                </div>
                <motion.p
                  className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300 flex-grow"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  It signifies our commitment to go above-and-beyond standard physiotherapy, adding value through
                  advanced tech and extra support.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Bottom decorative element */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                />
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  )
}
