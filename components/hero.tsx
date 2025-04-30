  export default function Hero() {
    const backgroundImageUrl = "/underwater-treadmill.jpg"; // Replace with actual underwater image path

    return (
      <section
        className="relative bg-cover bg-center bg-no-repeat py-40 px-6 text-center"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Regain Mobility - in half the time
          </h1>
          <p className="text-lg md:text-2xl mb-8">Move Freely, Live Fully</p>

          <a
            href="/book-appointment"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-3 px-6 rounded transition"
          >
            Book Appointment
          </a>

          <div className="mt-4">
            <a
              href="#why-us"
              className="inline-block bg-white/90 text-blue-900 font-semibold px-4 py-2 rounded hover:bg-white"
            >
              Learn Why We're Different
            </a>
          </div>
        </div>
      </section>
    );
  }
