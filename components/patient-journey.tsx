// components/patient-journey.tsx

export default function PatientJourney() {
  return (
    <section className="bg-blue-50 py-20 px-6 text-blue-900">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Patient Journey
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong>1. Book Appointment Online:</strong> Seamless form with
            preferred date/time selection.
          </p>
          <p>
            <strong>2. Complete Pre‑Visit Medical History:</strong> Unique to
            VitalPhysio⁺, captures comprehensive health data to personalize your
            first visit.
          </p>
          <p>
            <strong>
              3. Initial Assessment & Personalized Treatment Plan:
            </strong>{" "}
            Thorough examination, goal setting, and introduction to your
            dedicated therapist.
          </p>
          <p>
            <strong>4. Ongoing Progress Tracking & Follow‑Up:</strong> Regular
            reassessments, outcome measures, and plan adjustments to ensure
            optimal recovery.
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <a
          href="/journey"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Understand the Full Patient Journey
        </a>
      </div>
    </section>
  );
}
