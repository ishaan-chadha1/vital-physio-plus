// components/joint-rehab-summary.tsx

export default function JointRehabSummary() {
  const rehabSteps = [
    {
      title: "Pre‑Operative Conditioning",
      description:
        "Strengthening quadriceps and hamstrings reduces postoperative pain and improves functional outcomes.",
    },
    {
      title: "Early Post‑Op Mobilization",
      description:
        "Guided by established protocols, patients begin assisted walking with crutches, progressing to independent ambulation by 6 weeks post‑surgery.",
    },
    {
      title: "Strength & Range‑of‑Motion Protocols",
      description:
        "Daily exercises—ankle pumps, straight‑leg raises, seated knee bends—performed three times a day to achieve 100–105° knee flexion by 6 weeks.",
    },
    {
      title: "Progressive Functional & Gait Training",
      description:
        "Advanced balance, stair climbing, and proprioceptive drills facilitate return to work and recreational activities, typically by 12 weeks post‑op.",
    },
  ];

  return (
    <section
      id="rehabilitation"
      className="bg-white py-20 px-6 text-blue-900 font-body"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
          Knee & Hip Replacement Rehabilitation
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {rehabSteps.map((step, idx) => (
          <div
            key={idx}
            className="bg-blue-50 border border-blue-300 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2 font-heading">{step.title}</h3>
            <p className="text-base leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/rehabilitation"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Learn About Our Rehab Protocol
        </a>
      </div>
    </section>
  );
}
