// components/hero.tsx

export default function Hero() {
  const backgroundImageUrl = "/03. 5 COPIES.jpg?height=485&width=940";
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32 px-6 text-center"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      {/* Overlay to darken the image slightly */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to Vital Physio+
        </h1>
        <p className="text-lg md:text-xl mb-8">
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
