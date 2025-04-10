// components/hero.tsx

export default function Hero() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to Vital Physio+
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Expert Physiotherapy Care to Help You Move Pain-Free and Live Better.
        </p>
        <a
          href="#contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium py-3 px-6 rounded-md transition"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  );
}
