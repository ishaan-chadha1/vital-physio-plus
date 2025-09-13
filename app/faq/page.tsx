"use client";
import Head from "next/head";
import { useState, useRef } from "react";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-gray-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-gray-500"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

const FaqItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <span>{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen mt-2" : "max-h-0"
        }`}
      >
        <div className="pt-2 text-gray-600">{children}</div>
      </div>
    </div>
  );
};

export default function App() {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const templateParams = {
      user_name: formData.get("name"),
      user_email: formData.get("email"),
      user_phone: formData.get("phone"),
      message: formData.get("question"),
    };

    emailjs
      .send(
        "service_fsw1kjj", // Your Service ID
        "template_eciw4ca", // Your Template ID
        templateParams,
        "jAlpw06qTazAWPFTh" // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSent(true);
          setTimeout(() => setSent(false), 2900); // Reset the "sent" state after 2.9 seconds
          if (formRef.current) formRef.current.reset(); // Reset the form
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | VitalPhysio⁺</title>
        <meta
          name="description"
          content="Find answers to common questions about our physiotherapy services, booking process, and more at VitalPhysio⁺."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do I book an appointment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can book an appointment by calling us or using our online booking system.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you accept health insurance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide documentation for insurance reimbursement.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What conditions do you treat?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We treat a wide range of conditions, including back pain, sports injuries, neurological disorders, and more.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <style jsx global>{`
        :root {
          --vp-blue: #004f8c;
          --vp-teal: #008094;
        }
        .hero-gradient {
          background-color: var(--vp-blue);
          background-image: linear-gradient(
            110deg,
            var(--vp-blue) 0%,
            var(--vp-teal) 100%
          );
        }
      `}</style>
      <div className="bg-white text-gray-800 font-sans">
        {/* Header */}
        <LandingNavbar />

        <main>
          <section className="bg-gradient-to-r from-[var(--vp-blue)] to-[var(--vp-teal)] py-12 md:py-16 px-6">
            <div className="container mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Frequently Asked Questions
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                  Find answers to common questions about our physiotherapy
                  services, booking process, and more at VitalPhysio⁺.
                </p>
              </motion.div>
            </div>
          </section>

          <div className="container mx-auto px-6 py-12 md:py-20">
            {/* FAQs Section */}
            <section className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <FaqItem question="Why choose VitalPhysio?">
                  <p>
                    We are Bengaluru's most trusted rehab center because we
                    deliver personalized, evidence-based therapy. Our experts
                    follow international standards and use the latest technology
                    to ensure safe, effective outcomes for your recovery.
                  </p>
                </FaqItem>

                <FaqItem question="What does the '+' in VitalPhysio mean?">
                  <p>
                    The '+' signifies our commitment to go above and beyond
                    standard care. It means every treatment plan includes added
                    value like advanced equipment, continuous progress
                    monitoring, and AI-powered concierge support, all at no
                    hidden cost.
                  </p>
                </FaqItem>

                <FaqItem question="How does the AI Concierge (C³) work?">
                  <p>
                    C³ is your integrated AI care coordinator, available 24/7 in
                    our Patient Portal. It helps you schedule appointments,
                    sends reminders for your home exercises, and answers
                    questions based on your personal rehabilitation plan.
                  </p>
                </FaqItem>
              </div>
            </section>

            {/* Contact Form Section */}
            <section className="max-w-3xl mx-auto mt-16 md:mt-24 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
                Still Have Questions?
              </h2>
              <p className="text-center text-gray-600 mb-8">
                If our C³ Concierge Care Coordinator or the FAQs above couldn't
                provide the answer you need, please submit your question below.
                Our expert team will get back to you shortly.
              </p>

              <form
                className="space-y-6"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="question"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Question
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition-colors duration-300"
                  >
                    {sent ? "Message Sent!" : "Submit to Our Experts"}
                  </button>
                  {sent && (
                    <p className="text-green-600 font-semibold pt-2">
                      Thank you! We'll get back to you shortly.
                    </p>
                  )}
                </div>
              </form>
            </section>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}