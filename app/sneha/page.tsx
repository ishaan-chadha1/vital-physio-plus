import type { Metadata } from "next";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Sneha Agent Knowledge Base | VitalPhysio⁺",
  description:
    "Reference protocol for urinary incontinence therapy with Salus Talent Pro and the UI Chair.",
};

export default function SnehaKnowledgeBasePage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <LandingNavbar />
      <main className="pb-24">
        <section className="bg-gradient-to-r from-[#004f8c] via-[#005f9f] to-[#008094] text-white py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Urinary Incontinence Protocol – Salus Talent Pro &amp; UI Chair
            </h1>
            <p className="text-base md:text-lg text-white/85">
              The average protocol for treating urinary incontinence with Salus
              Talent Pro and the UI Chair involves 6–8 sessions, each lasting about
              30 minutes, typically scheduled 2–3 times per week for a period of 3–4
              weeks. Each session generates around 12,000 pelvic muscle contractions,
              simulating intensive Kegel exercises, which can effectively strengthen
              the pelvic floor for both men and women.
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-10">
            <article className="space-y-6">
              <header>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Session Duration
                </h2>
              </header>
              <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
                <li>Each session generally lasts 30 minutes.</li>
                <li>
                  The intensity and stimulation mode are tailored for patient
                  comfort, kept below the pain threshold.
                </li>
              </ul>
            </article>

            <article className="space-y-6">
              <header>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Treatment Frequency
                </h2>
              </header>
              <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
                <li>The recommended frequency is 2–3 sessions per week.</li>
                <li>
                  Most patients complete a full course in 3–4 weeks, totaling 6–8
                  sessions.
                </li>
              </ul>
            </article>

            <article className="space-y-6">
              <header>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Treatment Suitability
                </h2>
              </header>
              <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
                <li>
                  Suitable for stress incontinence, urge incontinence, and mixed
                  types, as well as postpartum pelvic floor strengthening.
                </li>
                <li>
                  Therapy is non-invasive and performed while the patient is fully
                  clothed, with no downtime or discomfort reported.
                </li>
              </ul>
            </article>

            <article className="space-y-6">
              <header>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Summary Table
                </h2>
              </header>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Parameter
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Typical Range
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                    <tr>
                      <td className="px-4 py-3">Session Duration</td>
                      <td className="px-4 py-3">30 minutes</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Number of Sessions</td>
                      <td className="px-4 py-3">6–8</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Session Frequency</td>
                      <td className="px-4 py-3">2–3 per week</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Session Length</td>
                      <td className="px-4 py-3">3–4 weeks</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Muscle Contractions</td>
                      <td className="px-4 py-3">~12,000 per session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This protocol provides a convenient and effective solution for
                urinary incontinence, restoring bladder control and supporting pelvic
                organ function with a non-surgical, low-risk approach. As always,
                session timing and protocol should be individualized based on patient
                needs and professional guidance.
              </p>
            </article>

            <article className="space-y-6">
              <header>
                <h2 className="text-2xl font-semibold text-gray-900">Patient FAQs</h2>
              </header>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <section className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    How do I book an appointment?
                  </h3>
                  <p>
                    The easiest way is to call us at +91-80473 59900 or fill out the contact form.
                    You can also chat with our C³—your personal Concierge Care Coordinator for
                    instant scheduling help.
                  </p>
                </section>
                <section className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    What should I bring to my first session?
                  </h3>
                  <p>
                    Bring any relevant medical documents (X-rays, MRI, doctor&apos;s notes) and wear
                    comfortable clothing. You can also fill your medical history in advance via our
                    Patient Portal to save time.
                  </p>
                </section>
                <section className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Do you accept health insurance?
                  </h3>
                  <p>
                    We do not have direct empanelment, but we provide the required documentation for
                    you to seek reimbursement after your therapy depending on your policy.
                  </p>
                </section>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


