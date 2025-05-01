// components/equipment-showcase.tsx

export default function EquipmentShowcase() {
  const equipmentList = [
    {
      title: "Aquatic Therapy",
      description:
        "Reduces joint load while enhancing gait training and aerobic conditioning.",
    },
    {
      title: "Electrotherapies (Ultrasound, IFT, TENS)",
      description:
        "Pain modulation, tissue healing, and muscle re‑education for acute and chronic conditions.",
    },
    {
      title: "Shockwave Therapy",
      description:
        "Stimulates cell activity and biomolecule synthesis to accelerate tendon and fascia healing.",
    },
    {
      title: "Laser Therapy",
      description:
        "Promotes fibroblast proliferation, collagen synthesis, and anti‑inflammatory effects in musculoskeletal injuries.",
    },
    {
      title: "Spinal Decompression Therapy",
      description:
        "Relieves cervical, thoracic, lumbar disc problems.",
    },
    {
      title: "Rehabilitative Tools",
      description:
        "Swiss balls, resistance bands, free weights etc.—customized exercise prescriptions targeting strength, flexibility, and proprioception.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-blue-100 py-20 px-6 text-blue-900 font-body"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
          Our Advanced Equipment & Modalities
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3 px-2">
        {equipmentList.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-blue-600 rounded-xl p-6 transition-all duration-300 group hover:bg-blue-700 hover:text-white hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2 font-heading">
              {item.title}
            </h3>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
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
