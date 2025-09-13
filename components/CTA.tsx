
import { motion } from "framer-motion";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const CTA = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "consultation" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
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
          <button
            type="button"
            data-cal-namespace="consultation"
            data-cal-link="vital-physio-plus/consultation"
            data-cal-config='{"layout":"month_view"}'
             className="inline-block bg-white hover:bg-gray-200 text-[#0F766E] text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Book Your Consultation Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;