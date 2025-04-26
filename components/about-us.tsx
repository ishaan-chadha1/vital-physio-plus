// components/about-us.tsx

export default function AboutUs() {
  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#38bdf8]"
      id="about"
    >
      <div className="max-w-5xl mx-auto py-24 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          About Our Clinic
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          At <span className="font-semibold">Vital Physio +</span>, we are
          dedicated to providing evidence-based physiotherapy to help you
          recover from injuries, manage pain, and improve mobility.
          <br />
          <br />
          Our licensed therapists combine modern techniques with personalized
          care, ensuring each patient receives the highest quality treatment in
          a welcoming environment.
        </p>

        {/* Button */}
        <div className="mt-8">
          <a
            href="/about"
            className="inline-block bg-white text-blue-500 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
