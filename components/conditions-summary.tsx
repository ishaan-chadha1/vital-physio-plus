// components/conditions-summary.tsx

export default function ConditionsSummary() {
  return (
    <section id="conditions" className="bg-white py-20 px-6 text-blue-900">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Conditions We Treat
        </h2>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Musculoskeletal</h3>
          <p className="text-lg leading-relaxed">
            Back pain, neck pain, sports injuries, osteoarthritis—utilizing
            manual therapy, exercise prescription, and electrotherapies to
            restore strength and mobility.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Neuro‑Physiotherapy</h3>
          <p className="text-lg leading-relaxed">
            Stroke recovery, Parkinson's disease, multiple sclerosis—combining
            task‑oriented training and balance strategies to optimize neural
            plasticity.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Pediatric</h3>
          <p className="text-lg leading-relaxed">
            Developmental delays, cerebral palsy, juvenile arthritis—gentle,
            play‑based interventions to support motor milestones and functional
            gains.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Geriatric</h3>
          <p className="text-lg leading-relaxed">
            Arthritis, balance disorders, post‑fracture rehabilitation—focusing
            on fall prevention, strength maintenance, and independence.
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <a
          href="/conditions"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Explore All Conditions We Treat
        </a>
      </div>
    </section>
  );
}
