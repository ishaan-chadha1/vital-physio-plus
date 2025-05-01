// components/why-choose-vital.tsx

export default function WhyChooseVital() {
  return (
    <section id="why-us" className="bg-white py-20 px-6 text-blue-900">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Why Choose VitalPhysio⁺?
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong>State‑of‑the‑Art Facility:</strong> Our spacious 3,600 sq
            ft. centre in Bellandur is equipped with a water treadmill, advanced
            electrotherapy suites, shockwave and laser therapy rooms, and
            dedicated exercise zones—designed for optimal comfort and results.
          </p>
          <p>
            <strong>Patient‑Centric Pre‑Visit Planning:</strong> Unique to
            VitalPhysio+, you complete a detailed medical history form before
            your first session, ensuring your therapist tailors every
            recommendation from day one.
          </p>
          <p>
            <strong>Specialized Programs:</strong> From back pain relief and
            sports injury recovery to pediatric developmental support and
            geriatric balance training, we cover the full spectrum of
            physiotherapy needs under one roof.
          </p>
          <p>
            <strong>Expert Team:</strong> Our licensed therapists bring decades
            of combined experience, including specialization in manual therapy,
            needling, and postoperative rehabilitation.
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <a
          href="/why-vital-physio+"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Why VitalPhysio⁺?
        </a>
      </div>
      
    </section>
  );
}
