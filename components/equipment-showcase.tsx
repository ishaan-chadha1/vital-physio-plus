// components/equipment-showcase.tsx

export default function EquipmentShowcase() {
  return (
    <section className="bg-blue-100 py-20 px-6 text-blue-900">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Our Advanced Equipment & Modalities
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong>Aquatic Therapy (Water Treadmill):</strong> Reduces joint
            load while enhancing gait training and aerobic conditioning.
          </p>
          <p>
            <strong>Electrotherapies (Ultrasound, IFT, TENS):</strong> Pain
            modulation, tissue healing, and muscle re‑education for acute and
            chronic conditions.
          </p>
          <p>
            <strong>Shockwave Therapy:</strong> Stimulates cell activity and
            biomolecule synthesis to accelerate tendon and fascia healing.
          </p>
          <p>
            <strong>Laser Therapy:</strong> Promotes fibroblast proliferation,
            collagen synthesis, and anti‑inflammatory effects in musculoskeletal
            injuries.
          </p>
          <p>
            <strong>Spinal Decompression Therapy:</strong> Relieves cervical,
            thoracic, lumbar disc problems.
          </p>
          <p>
            <strong>Rehabilitative Tools:</strong> Swiss balls, resistance
            bands, free weights etc.—customized exercise prescriptions targeting
            strength, flexibility, and proprioception.
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <a
          href="/equipment"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          See All Equipment & Modalities
        </a>
      </div>
    </section>
  );
}
