import { motion } from "framer-motion";

const Hero = () => {
  const backgroundImageUrl = "/underwater-treadmill.jpg"; // Replace with actual underwater image path

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-blue-950/40"></div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center text-white"
        >
          <h1
            className="text-4xl font-extrabold sm:text-5xl text-white"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
          >
            Restore Movement, Reclaim Life.
          </h1>

          <p
            className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-white"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
          >
            Evidence-based physiotherapy that empowers you to move freely and
            live fully.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <a
              className="block w-full max-w-xs rounded-md bg-orange-500 px-12 py-3 text-lg font-medium text-white shadow-xl transition hover:bg-orange-600 focus:outline-none focus:ring"
              href="/book-appointment"
            >
              Book Appointment
            </a>
            <a
              className="block w-full max-w-xs rounded-md border border-white/50 bg-[#0B2A4C] px-12 py-3 text-lg font-medium text-white shadow-xl transition hover:bg-white/10 focus:outline-none focus:ring"
              href="#why-us"
            >
              Learn Why We're Different
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
