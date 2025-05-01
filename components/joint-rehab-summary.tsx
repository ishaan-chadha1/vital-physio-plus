// components/joint-rehab-summary.tsx

export default function JointRehabSummary() {
    return (
      <section className="bg-white py-20 px-6 text-blue-900">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Knee & Hip Replacement Rehabilitation
          </h2>
  
          <div className="space-y-6 text-lg leading-relaxed">
            <p><strong>Pre‑Operative Conditioning:</strong> Strengthening quadriceps and hamstrings reduces postoperative pain and improves functional outcomes.</p>
            <p><strong>Early Post‑Op Mobilization:</strong> Guided by established protocols, patients begin assisted walking with crutches, progressing to independent ambulation by 6 weeks post‑surgery.</p>
            <p><strong>Strength & Range‑of‑Motion Protocols:</strong> Daily exercises—ankle pumps, straight‑leg raises, seated knee bends—performed three times a day to achieve 100–105° knee flexion by 6 weeks.</p>
            <p><strong>Progressive Functional & Gait Training:</strong> Advanced balance, stair climbing, and proprioceptive drills facilitate return to work and recreational activities, typically by 12 weeks post‑op.</p>
          </div>
        </div>
      </section>
    );
  }
  