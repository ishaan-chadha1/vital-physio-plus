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
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">Vital Physio +</span>, we are
            dedicated to providing evidence-based physiotherapy to help you
            recover from injuries, manage pain, and improve mobility.
            <br />
            <br />
            Our licensed therapists combine modern techniques with personalized
            care, ensuring each patient receives the highest quality treatment in
            a welcoming environment.
          </p>
        </div>
      </section>
    );
  }
  