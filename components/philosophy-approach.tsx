// components/philosophy-approach.tsx

export default function PhilosophyApproach() {
  return (
    <section className="bg-blue-50 py-20 px-6 text-blue-900">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Our Philosophy & Approach
        </h2>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Evidence‑Based, Internationally Accepted Protocols
          </h3>
          <p className="text-lg leading-relaxed">
            We follow ICD‑aligned diagnostic criteria and guidelines from
            leading rehabilitation authorities to deliver consistent,
            high‑quality care.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Patient‑Centric Care with Pre‑Visit History Collection
          </h3>
          <p className="text-lg leading-relaxed">
            Unique to VitalPhysio+, patients complete a detailed medical history
            form prior to their first visit—enhancing communication, reducing
            missed details, and streamlining the initial.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Cutting‑Edge Technologies
          </h3>
          <p className="text-lg leading-relaxed">
            We leverage proprietary AI‑driven enhancements to refine treatment
            plans and monitor progress—maintaining intrigue around our advanced
            decision‑support tools without disclosing specifics.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">
            Why the Plus in Our Name?
          </h3>
          <p className="text-lg leading-relaxed">
            The superscript “+” in our name and logo, VitalPhysio⁺, embodies our
            commitment to transcending conventional physiotherapy by integrating
            human expertise with intelligent technologies and specialized
            equipment—within an internationally acclaimed, evidence‑based
            framework. This strategic enhancement ensures accurate personalized
            diagnosis, real-time treatment adaptations, and accelerated
            recovery, clearly distinguishing VitalPhysio⁺.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            This fusion of innovation and compassion positions VitalPhysio⁺ as
            Bengaluru’s premier destination for physiotherapy and
            rehabilitation—where every patient is empowered to move freely, live
            fully.
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <a
          href="/philosophy"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Learn More About Our Philosophy
        </a>
      </div>
    </section>
  );
}
