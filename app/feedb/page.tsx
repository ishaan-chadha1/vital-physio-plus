"use client";
import Head from "next/head";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, MessageSquare } from "lucide-react";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function FeedbackPage() {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const templateParams = {
      user_name: formData.get("name"),
      user_email: formData.get("email"),
      user_phone: formData.get("phone"),
      message: formData.get("message"),
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
        <title>Feedback | VitalPhysio⁺</title>
        <meta
          name="description"
          content="Share your feedback with VitalPhysio⁺. Your opinion helps us improve our physiotherapy services in Bengaluru."
        />
      </Head>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700;900&display=swap");
        :root {
          --vp-blue: #004f8c; /* R-0 G-79  B-140 */
          --vp-teal: #008094; /* R-0 G-128 B-148 */
          --vp-orange: #ec691f; /* R-236 G-105 B-31  */
        }
        .feedback-banner {
          background: linear-gradient(
            94deg,
            var(--vp-blue) 0%,
            var(--vp-teal) 100%
          );
        }
        .feedback-card {
          background: rgba(255, 255, 255, 0.98);
          border-radius: 2rem;
          box-shadow: 0 8px 44px 0 rgba(28, 150, 202, 0.18);
        }
        .primary-btn {
          background: linear-gradient(89deg, #12d2c5 0%, #3b82f6 100%);
        }
        .primary-btn:hover {
          filter: brightness(1.07) saturate(1.09);
          box-shadow: 0 8px 32px 0 rgba(28, 180, 182, 0.13);
          transform: scale(1.02);
        }
        .feedback-form input,
        .feedback-form textarea {
          background: #f6fafb;
          border: 1.5px solid #d7eef7;
          border-radius: 0.7rem;
          outline: none;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .feedback-form input:focus,
        .feedback-form textarea:focus {
          border-color: #36dde9;
          box-shadow: 0 0 0 3px #aefdff44;
        }
        .feedback-form label {
          font-weight: 600;
          color: #146b97;
        }
        .feedback-gradient-card {
          background: linear-gradient(98deg, #f3fcfe 77%, #e3f0fa 100%);
        }
        .lato-font {
          font-family: "Lato", sans-serif;
        }
      `}</style>

      <LandingNavbar />

      <section className="bg-gradient-to-r from-[var(--vp-blue)] to-[var(--vp-teal)] py-12 md:py-16 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-4">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Share Your Feedback
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Your feedback is invaluable to us. Help us improve our services by
              sharing your experience, suggestions, or any concerns you may have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Feedback Section */}
      <section className="py-14 lg:pt-20 lg:pb-24 bg-white px-2 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="feedback-card px-7 py-8"
          >
            <h2 className="text-2xl font-bold text-sky-900 mb-2">
              We'd Love to Hear From You
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you've visited our clinic, used our services, or have
              suggestions for improvement, we appreciate your input. Your
              feedback helps us provide better care to all our patients.
            </p>
            <form
              className="feedback-form flex flex-col gap-4"
              autoComplete="off"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Your Name*</label>
                <input
                  required
                  id="name"
                  type="text"
                  name="name"
                  minLength={2}
                  className="py-2 px-4 w-full"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email Address*</label>
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  className="py-2 px-4 w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="py-2 px-4 w-full"
                  placeholder="+91 XXXXX XXXXX (optional)"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message">Your Feedback*</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={6}
                  className="py-2 px-4 resize-none"
                  placeholder="Please share your thoughts, experiences, suggestions, or any concerns you may have..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.035,
                  boxShadow: "0 8px 36px 0 rgba(30,176,220,0.12)",
                  background: "linear-gradient(90deg,#3ee3b8 0%, #33b9ff 100%)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 270, damping: 19 }}
                className="primary-btn mt-2 flex items-center gap-2 justify-center py-3 px-8 rounded-xl text-white text-lg font-bold shadow-lg transition-all"
                tabIndex={0}
              >
                {sent ? "Feedback Sent!" : "Submit Feedback"}
                {!sent && <ChevronRight className="ml-1 w-5 h-5" />}
              </motion.button>
              <motion.div
                initial={false}
                animate={{ opacity: sent ? 1 : 0, y: sent ? 0 : 10 }}
                className="text-green-600 font-semibold pt-2 h-6"
              >
                {sent && "Thank you for your feedback! We appreciate you taking the time to share your thoughts with us."}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-8 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="feedback-gradient-card rounded-2xl shadow px-7 py-7">
            <h3 className="text-xl font-semibold text-sky-900 mb-4 text-center">
              What Happens Next?
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mt-0.5">
                  1
                </div>
                <p>
                  <strong className="text-sky-900">We Receive Your Feedback:</strong> Your
                  message is sent directly to our team and will be reviewed within
                  24-48 hours.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mt-0.5">
                  2
                </div>
                <p>
                  <strong className="text-sky-900">We Review & Respond:</strong> Our team
                  carefully reviews all feedback and will respond if you've provided
                  contact information.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mt-0.5">
                  3
                </div>
                <p>
                  <strong className="text-sky-900">We Take Action:</strong> Your feedback
                  helps us identify areas for improvement and enhance our services
                  for all patients.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Additional Links Section */}
      <section className="py-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="rounded-2xl shadow px-7 py-7">
            <h3 className="text-xl font-semibold text-sky-900 mb-4 text-center">
              Other Ways to Reach Us
            </h3>
            <div className="flex flex-col gap-3 text-center">
              <p>
                Need immediate assistance?{" "}
                <Link href="/contact" className="text-blue-600 underline">
                  Contact us directly
                </Link>{" "}
                for urgent matters.
              </p>
              <p>
                Have questions? Visit our{" "}
                <Link href="/faq" className="text-blue-600 underline">
                  FAQ page
                </Link>{" "}
                for common answers.
              </p>
              <p>
                Want to book an appointment?{" "}
                <Link href="/" className="text-blue-600 underline">
                  Book online
                </Link>{" "}
                or call us at <strong>+91 80473 59900</strong>.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

