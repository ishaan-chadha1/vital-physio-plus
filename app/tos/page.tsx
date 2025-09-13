"use client";

import React from "react";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";

export default function TermsOfService() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <LandingNavbar />

        <main className="flex-grow">
          <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl ring-1 ring-gray-100 p-6 sm:p-10 lg:p-12">
                <header className="text-center">
                  <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Terms of Service
                  </h1>
                  <p className="mt-3">
                    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      <strong className="mr-1">Effective Date:</strong> October 02, 2025
                    </span>
                  </p>
                </header>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                <article
                  aria-label="Terms of Service content"
                  className="prose prose-gray prose-headings:scroll-mt-28 max-w-none text-gray-800"
                >
                  <p className="text-base sm:text-lg leading-relaxed">
                    By accessing and using the VitalPhysio⁺ website and services, you (“user,” “patient,” “you,” or “your”) agree to these Terms of Service. Please read them carefully. If you have any concerns, please contact our clinic manager to discuss them.
                  </p>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t1" className="scroll-mt-28">
                    <h2 id="t1" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      1. About VitalPhysio⁺
                    </h2>
                    <p className="mt-3">
                      VitalPhysio⁺ is an advanced physiotherapy and rehabilitation clinic based in Bengaluru, Karnataka, India. Our clinic provides physiotherapy services both in-clinic and online via our website and associated digital platforms.
                    </p>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t2" className="scroll-mt-28">
                    <h2 id="t2" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      2. Use of Website
                    </h2>
                    <ul className="mt-4 list-disc pl-6 space-y-2">
                      <li>The website is provided for informational, educational, and service-facilitation purposes only.</li>
                      <li>Use of this site does not create a clinician-patient relationship unless you register as a patient and receive formal clinical confirmation.</li>
                      <li>All health content, advice, and resources are for general guidance; they do not substitute professional medical advice, diagnosis, or treatment.</li>
                    </ul>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t3" className="scroll-mt-28">
                    <h2 id="t3" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      3. User Responsibilities
                    </h2>
                    <p className="mt-3">You agree that you:</p>
                    <ul className="mt-2 list-disc pl-6 space-y-2">
                      <li>Are at least 18 years old or accessing the site under parental/legal guardian supervision.</li>
                      <li>Will furnish accurate, current, and complete registration and medical information.</li>
                      <li>Will not use the website for unlawful, unauthorized, fraudulent, harassing, or harmful purposes.</li>
                      <li>Will keep any account credentials, passwords, and access permissions confidential and secure.</li>
                    </ul>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t4" className="scroll-mt-28">
                    <h2 id="t4" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      4. Bookings, Appointments, and Services
                    </h2>
                    <ul className="mt-4 list-disc pl-6 space-y-3">
                      <li>
                        <strong>Appointment Availability:</strong> Subject to availability and confirmation from clinic staff. Appointments may be conveniently scheduled by an AI agent that streamlines booking.
                      </li>
                      <li>
                        <strong>Service Delivery:</strong> All assessments, diagnoses, and treatment plans are conducted by qualified clinicians who lead your care journey. Our clinicians use advanced tools—including AI-powered analysis—to support our clinicians make better clinical judgment and personalize your therapy safely and effectively.
                      </li>
                      <li>
                        <strong>Schedule Changes:</strong> You agree to promptly notify the clinic of any cancellations or rescheduling requests.
                      </li>
                      <li className="border-l-4 border-red-300 bg-red-50/60 p-3 rounded">
                        <strong>Emergency Situations:</strong> For any emergency situation, seek immediate hospital care; our services are not a substitute for emergency treatment.
                      </li>
                    </ul>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t5" className="scroll-mt-28">
                    <h2 id="t5" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      5. Clinical Decision Support Technology
                    </h2>
                    <p className="mt-3">
                      At VitalPhysio⁺, our dedicated clinicians are always at the forefront of your care. We integrate state-of-the-art AI-driven tools to support our clinicians make better clinical judgment in the following ways:
                    </p>
                    <ul className="mt-4 list-disc pl-6 space-y-2">
                      <li><strong>Enhanced Medical History Intake:</strong> AI-assisted data organization helps clinicians quickly review your background and focus on your needs.</li>
                      <li><strong>Diagnostic Decision Support:</strong> Clinicians may use AI analytics to consider additional data patterns, but final diagnoses are always made by the clinician.</li>
                      <li><strong>Adaptive Treatment Protocols:</strong> Your therapist may use AI-informed suggestions to adapt exercises and modalities. Any modifications to your protocol are approved and overseen by your clinician.</li>
                    </ul>
                    <p className="mt-4">
                      All AI support works behind the scenes to ensure our clinicians have the most accurate, evidence-based insights. You remain under the direct care and oversight of our experienced clinicians at every step.
                    </p>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t6" className="scroll-mt-28">
                    <h2 id="t6" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      6. Pricing and Cancellation Policy
                    </h2>
                    <p className="mt-3">
                      VitalPhysio⁺ is committed to transparent, fair, and legally compliant billing. This section incorporates the Patient Rights Charter and applies to all patients and users.
                    </p>

                    <h3 id="t6-1" className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">6.1 Scope</h3>
                    <p className="mt-2">Applies to all services, including:</p>
                    <ul className="mt-2 list-disc pl-6 space-y-2">
                      <li>Consultation Services</li>
                      <li>Treatment Services (in-clinic and online)</li>
                      <li>Telehealth Consultations</li>
                      <li>Equipment-based Therapies</li>
                    </ul>

                    <h3 id="t6-2" className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">6.2 Consultation Fees</h3>
                    <ul className="mt-2 list-disc pl-6 space-y-2">
                      <li><strong>Advance Payment:</strong> ₹1,250 per patient per condition, payable in full prior to consultation.</li>
                      <li><strong>No Refunds or Cancellations:</strong> Once paid and the consultation is rendered, no refunds, discounts, or cancellations are permitted.</li>
                      <li><strong>Coverage:</strong> Each fee covers one specific condition; follow-up within 7 days for the same condition is complimentary.</li>
                    </ul>

                    <h3 id="t6-3" className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">6.3 Treatment Payment Structure</h3>

                    <h4 id="t6-3-a" className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">Treatment Classification</h4>
                    <ul className="mt-2 list-disc pl-6 space-y-2">
                      <li><strong>Short-Term (≤ 30 days):</strong> Full payment required before commencement; no discounts or staggered options.</li>
                      <li><strong>Extended ({'>'} 30 days):</strong> Options below.</li>
                    </ul>

                    <h4 id="t6-3-b" className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">Payment Options for Extended Treatment</h4>
                    <ul className="mt-2 list-disc pl-6 space-y-2">
                      <li><strong>Full Advance Payment:</strong> 5% discount when total cost is paid before starting treatment.</li>
                      <li>
                        <strong>Staggered Schedule:</strong>
                        <ul className="mt-2 list-disc pl-6 space-y-1">
                          <li>50% due prior to commencement</li>
                          <li>25% due by Day 7</li>
                          <li>25% due by Day 14</li>
                        </ul>
                      </li>
                    </ul>

                    <h4 id="t6-3-c" className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">Accepted Methods</h4>
                    <p className="mt-2">UPI, net banking, credit/debit cards, digital wallets, cash (receipt provided), NEFT/RTGS, and third-party EMI.</p>

                    <h3 id="t6-4" className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">6.4 Refunds &amp; Cancellations</h3>
                    <ul className="mt-2 list-disc pl-6 space-y-2">
                      <li><strong>No Refunds After Start:</strong> Once any payment is made and treatment begins, no refunds or retroactive discounts.</li>
                      <li><strong>Patient-Initiated Discontinuation:</strong> No refunds; outstanding payments become immediately due.</li>
                      <li><strong>Medical Emergencies:</strong> Case-by-case clinical panel review; refunds only in exceptional circumstances.</li>
                      <li>
                        <strong>Force Majeure:</strong> Natural disasters, lockdowns, equipment failure (&gt; 72 hrs), pandemic closures, etc.
                        <ul className="mt-2 list-disc pl-6 space-y-1">
                          <li>Options: Reschedule, telehealth alternative, partial refund (undelivered services), or credit note.</li>
                        </ul>
                      </li>
                    </ul>

                    <h3 id="t6-5" className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">6.5 Non-Payment Consequences</h3>
                    <ul className="mt-2 list-disc pl-6 space-y-2">
                      <li><strong>Suspension:</strong> VitalPhysio⁺ may suspend services for missed or dishonored payments.</li>
                      <li><strong>Acknowledgment:</strong> Patients accept no liability claims against VitalPhysio⁺ for treatment discontinuation due to non-payment.</li>
                    </ul>

                    <h3 id="t6-6" className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">6.6 Insurance &amp; Third-Party Payments</h3>
                    <ul className="mt-2 list-disc pl-6 space-y-2">
                      <li>Patients remain liable for full payment regardless of insurance status; reimbursements are handled separately between patient and insurer.</li>
                      <li>Corporate billing requires prior approval and signed agreements; unpaid corporate charges revert to the patient.</li>
                    </ul>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t7" className="scroll-mt-28">
                    <h2 id="t7" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      7. User-Generated Content
                    </h2>
                    <p className="mt-3">
                      You may submit feedback or testimonials that are non-defamatory and lawful. VitalPhysio⁺ may use anonymized content for educational or promotional purposes.
                    </p>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t8" className="scroll-mt-28">
                    <h2 id="t8" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      8. Intellectual Property
                    </h2>
                    <p className="mt-3">
                      All site content—text, graphics, images, logos, software—is the property of VitalPhysio⁺ or its licensors. Reproduction or distribution without written consent is prohibited.
                    </p>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t9" className="scroll-mt-28">
                    <h2 id="t9" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      9. Privacy &amp; Data Protection
                    </h2>
                    <p className="mt-3">
                      Your data is handled per our Privacy Policy and the Patient Rights Charter. You consent to the collection and processing of personal and health data necessary for service delivery and legal compliance.
                    </p>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t10" className="scroll-mt-28">
                    <h2 id="t10" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      10. Limitation of Liability
                    </h2>
                    <p className="mt-3">
                      While we strive for accuracy and quality, VitalPhysio⁺ makes no warranties of uninterrupted service. We are not liable for losses or damages arising from website use or service provision, except as required by law. Third-party links are for convenience only.
                    </p>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t11" className="scroll-mt-28">
                    <h2 id="t11" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      11. Dispute Resolution &amp; Governing Law
                    </h2>
                    <ul className="mt-4 list-disc pl-6 space-y-3">
                      <li>
                        <strong>Grievance Process:</strong>
                        <ol className="mt-2 list-decimal pl-6 space-y-1">
                          <li>Discuss with your physiotherapist or clinic manager</li>
                          <li>Submit a written complaint within 7 days</li>
                          <li>Clinical panel review within 14 days</li>
                          <li>External mediation if agreed</li>
                        </ol>
                      </li>
                      <li><strong>Applicable Law:</strong> Indian law; disputes subject to Bengaluru courts.</li>
                    </ul>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t12" className="scroll-mt-28">
                    <h2 id="t12" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      12. Special Circumstances
                    </h2>
                    <ul className="mt-4 list-disc pl-6 space-y-2">
                      <li><strong>Pediatric Patients:</strong> Parental/guardian consent and tailored payment terms.</li>
                      <li><strong>Senior Citizens:</strong> Extended timelines in exceptional cases.</li>
                      <li><strong>Disability Accommodations:</strong> Adjusted service delivery within policy framework.</li>
                      <li><strong>Clinical Trials:</strong> Separate consent and compensation overseen by an ethics committee.</li>
                    </ul>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t13" className="scroll-mt-28">
                    <h2 id="t13" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      13. Modifications &amp; Updates
                    </h2>
                    <p className="mt-3">
                      VitalPhysio⁺ reserves the right to modify these Terms, including technology and AI-related provisions, at any time in the best interest of our patients and organization. Updates will be posted here 30 days in advance. Continued use constitutes acceptance.
                    </p>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <section aria-labelledby="t14" className="scroll-mt-28">
                    <h2 id="t14" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      14. Contact Information
                    </h2>
                    <p className="mt-4"><strong>VitalPhysio⁺</strong></p>
                    <p>Bengaluru, Karnataka, India</p>
                    <p><strong>Email:</strong> <a href="mailto:Contact@VitalPhysio.Plus">Contact@VitalPhysio.Plus</a></p>
                    <p><strong>Phone:</strong> +91 80473 59090</p>
                  </section>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <p className="italic bg-gray-50 border border-gray-200 rounded-lg p-4">
                    By using our website and services, you acknowledge that you have read, understood, and agree to these Terms of Service, including AI support under clinician supervision and the Pricing and Cancellation Policy. These Terms supersede all prior versions.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}