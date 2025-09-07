"use client";

import React from "react";
import { User, Mail, Phone } from "lucide-react";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";

export default function TermsOfService() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <LandingNavbar />

        <main className="flex-grow">
          <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">
                Terms of Service
              </h1>
              <p className="text-gray-500 text-sm text-center mb-10">
                <strong>Effective Date:</strong> September 09, 2025
              </p>

              <div className="space-y-10 text-gray-700 leading-relaxed prose prose-lg max-w-none">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">1. About VitalPhysio⁺</h2>
                  <p>
                    VitalPhysio⁺ is an advanced physiotherapy and rehabilitation clinic based in Bengaluru, Karnataka, India. Our clinic provides physiotherapy services both in-clinic and online via our website and associated digital platforms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">2. Use of Website</h2>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>The website is provided for informational, educational, and service-facilitation purposes only.</li>
                    <li>Use of this site does not create a clinician-patient relationship unless you register as a patient and receive formal clinical confirmation.</li>
                    <li>All health content, advice, and resources are for general guidance; they do not substitute professional medical advice, diagnosis, or treatment.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">3. User Responsibilities</h2>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>You are at least 18 years old or accessing the site under parental/legal guardian supervision.</li>
                    <li>You will furnish accurate, current, and complete registration and medical information.</li>
                    <li>You will not use the website for unlawful, unauthorized, fraudulent, harassing, or harmful purposes.</li>
                    <li>You will keep any account credentials, passwords, and access permissions confidential and secure.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">4. Bookings, Appointments, and Services</h2>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>
                      <strong>Appointment Availability:</strong> Subject to availability and confirmation from clinic staff. Appointments may be conveniently scheduled by an AI agent that streamlines booking.
                    </li>
                    <li>
                      <strong>Service Delivery:</strong> All assessments, diagnoses, and treatment plans are conducted by qualified clinicians who lead your care journey. Our clinicians use advanced tools—including AI-powered analysis—to support clinical judgment and personalize your therapy safely and effectively.
                    </li>
                    <li>
                      <strong>Schedule Changes:</strong> You agree to promptly notify the clinic of any cancellations or rescheduling requests.
                    </li>
                    <li>
                      <strong>Emergency Situations:</strong> For any emergency situation, seek immediate hospital care; our services are not a substitute for emergency treatment.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">5. Clinical Decision Support Technology</h2>
                  <p>
                    At VitalPhysio⁺, our dedicated clinicians are always at the forefront of your care. We integrate state-of-the-art AI-driven tools to support clinical judgment in the following ways:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>
                      <strong>Enhanced Medical History Intake:</strong> AI-assisted data organization helps clinicians quickly review your background and focus on your needs.
                    </li>
                    <li>
                      <strong>Diagnostic Decision Support:</strong> Clinicians may use AI analytics to consider additional data patterns, but final diagnoses are always made by the clinician.
                    </li>
                    <li>
                      <strong>Adaptive Treatment Protocols:</strong> Your therapist may use AI-informed suggestions to adapt exercises and modalities. Any modifications to your protocol are approved and overseen by your clinician.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">6. Pricing and Cancellation Policy</h2>
                  <p>VitalPhysio⁺ is committed to transparent, fair, and legally compliant billing. This section incorporates the Patient Rights Charter and applies to all patients and users.</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>
                      <strong>Consultation Fees:</strong> ₹1,250 per patient per condition, payable in full prior to consultation. No refunds or cancellations once the consultation is rendered.
                    </li>
                    <li>
                      <strong>Treatment Payment Structure:</strong> Full payment required for short-term treatments. Extended treatments offer staggered payment options.
                    </li>
                    <li>
                      <strong>Refunds & Cancellations:</strong> No refunds after treatment begins. Exceptions may apply for medical emergencies or force majeure events.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">7. User-Generated Content</h2>
                  <p>
                    You may submit feedback or testimonials that are non-defamatory and lawful. VitalPhysio⁺ may use anonymized content for educational or promotional purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">8. Intellectual Property</h2>
                  <p>
                    All site content—text, graphics, images, logos, software—is the property of VitalPhysio⁺ or its licensors. Reproduction or distribution without written consent is prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">9. Privacy & Data Protection</h2>
                  <p>
                    Your data is handled per our Privacy Policy and the Patient Rights Charter. You consent to the collection and processing of personal and health data necessary for service delivery and legal compliance.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">10. Limitation of Liability</h2>
                  <p>
                    While we strive for accuracy and quality, VitalPhysio⁺ makes no warranties of uninterrupted service. We are not liable for losses or damages arising from website use or service provision, except as required by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">11. Dispute Resolution & Governing Law</h2>
                  <p>
                    Disputes are subject to Indian law and Bengaluru courts. Grievances may be resolved through a clinical panel review or external mediation.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">12. Contact Us</h2>
                  <div className="mt-4 bg-gray-100 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <User className="w-6 h-6 text-cyan-600 mr-4" />
                      <span className="font-bold text-gray-800">Clinic Manager</span>
                    </div>
                    <p className="font-semibold text-gray-800">VitalPhysio⁺</p>
                    <p className="text-gray-600">Bengaluru, Karnataka, India</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-cyan-600 mr-3" />
                        <a href="mailto:Contact@VitalPhysio.Plus" className="text-cyan-700 hover:underline">
                          Contact@VitalPhysio.Plus
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-cyan-600 mr-3" />
                        <a href="tel:+918047359090" className="text-cyan-700 hover:underline">
                          +91 80473 59090
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}