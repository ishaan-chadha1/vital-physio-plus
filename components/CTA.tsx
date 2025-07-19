import { motion } from "framer-motion";

const CTA = () => (
  // UPDATED: Replaced gradient with a solid teal background color
  <section 
    id="book" 
    className="bg-[#0F766E] text-white py-20 md:py-28 px-6 scroll-mt-20"
  >
    <div className="container mx-auto text-center max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4 text-white"
      >
        Ready to Start Your Journey to Better Health?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        // UPDATED: Adjusted text color for better contrast on the new background
        className="text-lg text-white/90 leading-relaxed mb-10"
      >
        VitalPhysio⁺ is ready to help you achieve your health and mobility goals. Contact us today to schedule your personalized consultation.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* UPDATED: Button style now matches the image (white with dark text) */}
        <a
          href="#consultation"
          className="inline-block bg-white hover:bg-gray-200 text-[#0F766E] text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Book Your Consultation Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTA;