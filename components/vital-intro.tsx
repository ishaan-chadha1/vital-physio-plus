// components/vital-intro.tsx

export default function VitalIntro() {
    return (
      <section className="bg-blue-50 py-20 px-6 text-blue-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            A Leading Centre for Modern Physiotherapy in Bengaluru
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            A leading physiotherapy and rehabilitation centre in Bellandur, Bengaluru, VitalPhysio+ combines
            evidence‑based protocols with state‑of‑the‑art equipment to deliver patient‑centric care.
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>
              Our 3,600 sq ft. facility offers targeted treatment for musculoskeletal, neurological, pediatric,
              and geriatric conditions.
            </li>
            <li>
              Patients begin their journey by booking an appointment — either through our dedicated number or
              online and completing a unique pre‑visit medical history form, enabling a comprehensive, highly
              personalized assessment.
            </li>
            <li>
              With specialized programmes— VitalPhysio+ ensures accelerated recovery, optimal function, and
              improved quality of life.
            </li>
          </ul>
        </div>
      </section>
    );
  }
  