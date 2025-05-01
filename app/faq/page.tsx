"use client";

import { useState } from "react";
import LandingNavbar from "@/components/landing-navbar";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <LandingNavbar />
      <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-blue-800">
        <h1 className="text-4xl font-bold text-center mb-12 border-b-2 border-blue-200 pb-4">
          Frequently Asked Questions (FAQs)
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left text-lg font-semibold text-blue-900 hover:bg-blue-50 transition"
              >
                <span>{index + 1}. {faq.question}</span>
                <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-base text-blue-800 animate-fade-in-up">
                  <p className="leading-relaxed whitespace-pre-wrap">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-lg mt-16 text-blue-900">
          If you have further questions or need additional information, please don't
          hesitate to contact us. We're here to support your journey to better health and mobility.
        </p>
      </div>
    </>
  );
}

const faqs = [
  {
    question: "What is physiotherapy, and how can it help me?",
    answer:
      "Physiotherapy is a healthcare profession focused on restoring and maintaining functional movement, reducing pain, and preventing injury. At VitalPhysio⁺, we employ evidence-based techniques, including manual therapy, therapeutic exercises, and advanced modalities, to address a variety of conditions such as musculoskeletal injuries, sports injuries, neurological disorders, and post-surgical rehabilitation.",
  },
  {
    question: "Do I need a doctor's referral to start physiotherapy?",
    answer:
      "No, a doctor's referral is not required to begin physiotherapy at VitalPhysio⁺. However, some insurance providers may require a referral for reimbursement purposes. We recommend checking with your insurance company to confirm their specific requirements.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your initial appointment will involve a comprehensive assessment, including a discussion of your medical history, a physical examination, and the development of a personalized treatment plan. This session typically lasts 45 to 60 minutes.",
  },
  {
    question: "How long does each physiotherapy session last?",
    answer:
      "Follow-up sessions generally last between 30 to 60 minutes, depending on the complexity of your condition and the treatment plan established by your physiotherapist.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions required varies based on individual needs, the severity of the condition, and your response to treatment. Your physiotherapist will discuss an estimated treatment timeline during your initial assessment.",
  },
  {
    question: "What should I wear to my physiotherapy sessions?",
    answer:
      "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. For example, shorts for lower limb issues or a tank top for shoulder treatments.",
  },
  {
    question: "Is physiotherapy painful?",
    answer:
      "Some treatments may cause mild discomfort, especially when addressing areas of pain or stiffness. However, our physiotherapists strive to ensure your comfort and will adjust techniques as needed to minimize discomfort.",
  },
  {
    question: "Can physiotherapy help with chronic conditions like arthritis?",
    answer:
      "Yes, physiotherapy can be highly beneficial for managing chronic conditions such as arthritis. Through targeted exercises, manual therapy, and education, we aim to reduce pain, improve joint mobility, and enhance overall function.",
  },
  {
    question: "Do you offer specialized treatments or equipment?",
    answer:
      "Absolutely. VitalPhysio⁺ is equipped with advanced technologies, including the BTL Spinal Decompression Unit, Chattanooga Laser unit, Shockwave unit and rPMS (Salus Talent Pro), to provide specialized care tailored to your specific needs.",
  },
  {
    question: "Is my physiotherapy treatment covered by insurance?",
    answer:
      "Many insurance plans cover physiotherapy services. We recommend contacting your insurance provider to understand your coverage details. We will assist with any necessary documentation for claims.",
  },
  {
    question: "Do you offer home visits or virtual consultations?",
    answer:
      "No, however, we provide a robust pickup and drop facility to accommodate patients with mobility challenges. Home visits will be provided for the first fews days for patients who have undergone a joint replacement or spine surgery, within a 5 KM radius from VitalPhysio⁺.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can book an appointment by calling our clinic’s dedicated Application Scheduling number + 91 80456 82666, visiting our website and using our online booking system. Our team is here to assist you in finding a convenient time for your visit.",
  },
];
