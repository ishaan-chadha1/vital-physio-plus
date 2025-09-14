"use client";

import React from "react";
import { ShieldCheck, User, Mail, Phone } from 'lucide-react';
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";


export default function PrivacyPolicy() {
  return (
    <>
      {/* The Head component from next/head has been removed to resolve the compilation error. */}
      {/* You can manage the document head using your project's specific setup. */}

      <div className="min-h-screen flex flex-col bg-gray-50">
        <LandingNavbar />

        <main className="flex-grow">
          <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
               <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-gray-500 text-sm text-center mb-10">
                <strong>Effective Date:</strong> October 02, 2025
              </p>
              
              <div className="space-y-10 text-gray-700 leading-relaxed prose prose-lg max-w-none">
                <p className="text-lg">
                  VitalPhysio⁺ ("we," "our," or "us") is committed to respecting and
                  protecting the privacy of every individual who interacts with our
                  clinic, website, and online services. This Privacy Policy
                  explains how we collect, use, share, and safeguard your personal
                  information in accordance with Indian law and global privacy
                  standards.
                </p>

                <div className="pt-4">
                  <h2 className="text-2xl font-bold text-gray-900">1. Who We Are</h2>
                  <p>
                    VitalPhysio⁺ is an advanced physiotherapy and rehabilitation
                    clinic based in Bengaluru, Karnataka, India. This policy applies
                    to our website, digital portals, and all services offered by
                    VitalPhysio⁺.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    2. What Data Do We Collect?
                  </h2>
                  <p>We may collect and process the following personal information:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>
                      <strong>Identity Data:</strong> Name, date of birth, gender,
                      medical registration or patient ID
                    </li>
                    <li>
                      <strong>Contact Data:</strong> Phone number, email address,
                      postal address
                    </li>
                    <li>
                      <strong>Health Data:</strong> Medical history, diagnosis,
                      treatment details, health records, physical and functional
                      assessments
                    </li>
                    <li>
                      <strong>Technical Data:</strong> IP address, browser type,
                      device information, usage data, cookies, and similar tracking
                      technologies
                    </li>
                    <li>
                      <strong>Payment Data:</strong> Transaction records (processed
                      securely via payment gateways; we do not store payment details)
                    </li>
                    <li>
                      <strong>Appointment/Portal Data:</strong> Information you
                      provide via our booking forms, patient portal, or contact
                      requests
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">3. How Do We Collect Your Data?</h2>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li><strong>Directly from you</strong> (e.g., when you register, fill out forms, book appointments, or interact with our clinic/team)</li>
                    <li><strong>Automatically</strong> (e.g., website analytics via cookies and technical logs)</li>
                    <li><strong>From third-party sources</strong> as authorized by you (e.g., referring providers, integrated health apps, device manufacturers)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">4. Why Do We Collect and Use Your Data?</h2>
                   <p>We use your data to:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Provide high-quality physiotherapy care and health management</li>
                    <li>Schedule appointments and manage clinic operations</li>
                    <li>Communicate with you (reminders, follow-ups, clinical updates)</li>
                    <li>Maintain accurate health records as required by law</li>
                    <li>Improve our website, patient experience, and clinical services</li>
                    <li>Send newsletters or notifications (only with your explicit consent)</li>
                    <li>Meet our legal and regulatory obligations</li>
                  </ul>
                </div>

                 <div>
                  <h2 className="text-2xl font-bold text-gray-900">5. Legal Basis for Processing</h2>
                   <p>We process your information based on the following:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li><strong>Consent:</strong> When you explicitly authorize use (e.g., contact form, newsletter opt-in)</li>
                    <li><strong>Contractual Necessity:</strong> To deliver requested physiotherapy or telehealth services</li>
                    <li><strong>Legal Obligation:</strong> Compliance with Indian medical and data protection laws</li>
                    <li><strong>Legitimate Interest:</strong> To improve clinic operations and ensure safety</li>
                  </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">6. Data Sharing and Disclosure</h2>
                    <p>Your information is strictly confidential. We do not sell your data. We may disclose it only:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>To authorized clinic staff and treating physiotherapists, bound by confidentiality</li>
                        <li>To legal/regulatory authorities as mandated by law (e.g., compliance, court order)</li>
                        <li>To third-party service providers (e.g., cloud hosts, analytic platforms), strictly for operating our services and always under data protection agreements</li>
                        <li>With your written consent, to other healthcare providers for referral/continuity of care</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">7. Security Measures</h2>
                    <p>We implement robust security protections:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>Encryption of health records and sensitive data in storage and transmission</li>
                        <li>Role-based access and regular audit logs</li>
                        <li>Strong authentication for patient portal access</li>
                        <li>Staff training in data privacy and confidentiality</li>
                        <li>Secure cloud infrastructure compliant with healthcare standards</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">8. International Users</h2>
                    <p>If you are accessing our website from outside India, your data may be processed and stored in India. We adhere to applicable cross-border data transfer laws and ensure reasonable safeguards in line with GDPR principles for EU/EEA residents.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">9. Retention Period</h2>
                    <p>We retain your data only as long as necessary:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>For the purposes described above</li>
                        <li>As required by Indian law and medical regulations (minimum prescribed periods)</li>
                        <li>After which data is securely deleted or anonymized</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">10. Your Rights</h2>
                    <p>Subject to Indian law, you have rights to:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>Access the personal data we hold about you</li>
                        <li>Request correction of inaccurate/obsolete information</li>
                        <li>Withdraw your consent (where processing is based on consent)</li>
                        <li>Request erasure or restriction where legally applicable</li>
                        <li>Raise complaints with the Data Protection Board of India or the relevant authority</li>
                    </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">11. Children's Privacy</h2>
                  <p>We do not knowingly collect data from children under 18 without parental/legal guardian consent.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">12. Cookies & Tracking</h2>
                  <p>Our website uses cookies for technical purposes and to enhance your browsing experience. You can control cookies via your browser settings.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">13. Changes to This Policy</h2>
                  <p>We may update this Privacy Policy to reflect changes in the law or our practices. The latest version will always be posted on this page with an updated effective date.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">14. Contact Us</h2>
                  <p>For any privacy concerns, data requests, or questions, please contact:</p>
                  <div className="mt-4 bg-gray-100 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                        <User className="w-6 h-6 text-cyan-600 mr-4" />
                        <span className="font-bold text-gray-800">Privacy Officer</span>
                    </div>
                     <p className="font-semibold text-gray-800">VitalPhysio⁺</p>
                    <p className="text-gray-600">Bengaluru, Karnataka, India</p>
                    <div className="mt-4 space-y-2">
                        <div className="flex items-center">
                            <Mail className="w-5 h-5 text-cyan-600 mr-3"/>
                            <a href="mailto:Contact@VitalPhysio.Plus" className="text-cyan-700 hover:underline">Contact@VitalPhysio.Plus</a>
                        </div>
                        <div className="flex items-center">
                            <Phone className="w-5 h-5 text-cyan-600 mr-3"/>
                            <a href="tel:+918047359090" className="text-cyan-700 hover:underline">+91 80473 59090</a>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                    <p className="italic text-gray-600">
                        By using our website or services, you acknowledge and consent to this Privacy Policy as of the effective date. Please read it carefully and retain a copy for your records.
                    </p>
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


