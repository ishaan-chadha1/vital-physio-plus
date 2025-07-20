export default function TechnologyTable() {
  return (
    <div className="bg-teal-600 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-4xl font-bold text-center mb-8">Technology at a Glance</h1>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-4 text-left font-semibold text-teal-700 border-r border-gray-300 text-lg">
                  Modality
                </th>
                <th className="px-6 py-4 text-left font-semibold text-teal-700 border-r border-gray-300 text-lg">
                  Common Conditions
                </th>
                <th className="px-6 py-4 text-left font-semibold text-teal-700 text-lg">Key Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-300">
                <td className="px-6 py-4 font-medium border-r border-gray-300">High-Intensity Laser</td>
                <td className="px-6 py-4 border-r border-gray-300">Back/Neck pain, Arthritis, Tendinopathy</td>
                <td className="px-6 py-4">Accelerated healing, rapid pain relief</td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-300">
                <td className="px-6 py-4 font-medium border-r border-gray-300">Shockwave Therapy</td>
                <td className="px-6 py-4 border-r border-gray-300">Chronic tendinopathies (heel, shoulder, elbow)</td>
                <td className="px-6 py-4">Breaks calcifications, boosts circulation</td>
              </tr>
              <tr className="bg-white border-b border-gray-300">
                <td className="px-6 py-4 font-medium border-r border-gray-300">Spinal Decompression</td>
                <td className="px-6 py-4 border-r border-gray-300">Herniated discs, Sciatica</td>
                <td className="px-6 py-4">Reduces nerve compression, eases pain</td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-300">
                <td className="px-6 py-4 font-medium border-r border-gray-300">UI Chair (HIFEM)</td>
                <td className="px-6 py-4 border-r border-gray-300">
                  UI Chair (HIFEM)Urinary Incontinence, Pelvic Pain
                </td>
                <td className="px-6 py-4">Strengthens pelvic floor, non-invasive</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 font-medium border-r border-gray-300">AI Smart Gym</td>
                <td className="px-6 py-4 border-r border-gray-300">Post-op rehab, Strength deficits</td>
                <td className="px-6 py-4">Data-driven progress, precise resistance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
