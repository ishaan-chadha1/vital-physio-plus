import { motion } from "framer-motion";

const Hero = () => {
  const backgroundImageUrl = "/underwater-treadmill.jpg";

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex flex-col"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-950/60 to-teal-900/50"></div>

      {/* Main content area - centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        {/* Blue band positioned behind the main text content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-blue-400/25 backdrop-blur-sm w-full h-32 md:h-36 border-y border-blue-300/30 shadow-xl"></div>
        </div>

        {/* Text content - positioned above the band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center text-white max-w-4xl"
        >
          {/* Main Headline - Added font-lato class */}
          <h1
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight font-lato"
            style={{ textShadow: "2px 2px 12px rgba(0,0,0,0.8)" }}
          >
            Restore Movement, Reclaim Life.
          </h1>

          {/* Subheading - Also added font-lato class */}
          <p
            className="text-base md:text-lg text-white/95 mb-6 max-w-3xl mx-auto font-light leading-relaxed font-lato"
            style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.7)" }}
          >
            Evidence-based physiotherapy that empowers you to{" "}
            <span className="italic font-medium text-cyan-200">move freely</span> and{" "}
            <span className="italic font-medium text-cyan-200">live fully</span>.
          </p>
        </motion.div>
      </div>

      {/* Bottom section with tagline and buttons */}
      <div className="relative z-10 pb-8 px-6">
        {/* CTA Buttons - At bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto"
        >
          <a
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-base shadow-2xl transition-all duration-300 transform hover:scale-105"
            href="/book-appointment"
          >
            Book Your Consultation Now
          </a>
          <a
            className="w-full sm:w-auto border-2 border-cyan-400/80 bg-cyan-500/20 hover:bg-cyan-500/30 text-white font-medium py-3 px-8 rounded-lg text-base shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            href="#services"
          >
            Chat With C³ - Your Personal Concierge Care Coordinator
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
