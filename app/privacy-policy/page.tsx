"use client";

import React from "react";
import Head from "next/head";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | VitalPhysio⁺</title>
        <meta
          name="description"
          content="Read the privacy policy of VitalPhysio⁺ to understand how we collect, use, and protect your personal data."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <LandingNavbar />

      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-sm text-center mb-4">
            <strong>Effective Date:</strong> September 09, 2025
          </p>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p>
              VitalPhysio⁺ ("we," "our," or "us") is committed to respecting and
              protecting the privacy of every individual who interacts with our
              clinic, website, and online services. This Privacy Policy
              explains how we collect, use, share, and safeguard your personal
              information in accordance with Indian law and global privacy
              standards.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">1. Who We Are</h2>
            <p>
              VitalPhysio⁺ is an advanced physiotherapy and rehabilitation
              clinic based in Bengaluru, Karnataka, India. This policy applies
              to our website, digital portals, and all services offered by
              VitalPhysio⁺.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              2. What Data Do We Collect?
            </h2>
            <p>We may collect and process the following personal information:</p>
            <ul className="list-disc pl-6">
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

            {/* Add the rest of the sections here, following the same structure */}
            {/* For brevity, the rest of the content is omitted in this example */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}