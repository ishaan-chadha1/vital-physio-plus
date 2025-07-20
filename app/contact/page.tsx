"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  // Animate form submit for demonstration (no backend post here)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2900);
    if (formRef.current) formRef.current.reset();
  };

  return (
    <>
      <style jsx global>{`
        .contact-banner {
          background: linear-gradient(90deg,#32b7de 0%, #16577b 100%);
        }
        .contact-card {
          background: rgba(255,255,255,0.98);
          border-radius: 2rem;
          box-shadow: 0 8px 44px 0 rgba(28,150,202,0.18);
        }
        .big-chip {
          background: #ecfeff;
          border-radius: 999px;
          padding: 0.36rem 1.4rem;
          font-weight: 700;
          color: #0bbec8;
          letter-spacing: 0.02em;
          font-size: 1.08rem;
          display: inline-block;
        }
        .primary-btn {
          background: linear-gradient(89deg,#12d2c5 0%, #3b82f6 100%);
        }
        .primary-btn:hover {
          filter: brightness(1.07) saturate(1.09);
          box-shadow: 0 8px 32px 0 rgba(28,180,182,0.13);
          transform: scale(1.02);
        }
        .contact-form input,
        .contact-form textarea {
          background: #f6fafb;
          border: 1.5px solid #d7eef7;
          border-radius: 0.7rem;
          outline: none;
          transition: border .2s, box-shadow .2s;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #36dde9;
          box-shadow: 0 0 0 3px #aefdff44;
        }
        .contact-form label {
          font-weight: 600;
          color: #146b97;
        }
        .contact-gradient-card {
          background: linear-gradient(98deg,#f3fcfe 77%,#e3f0fa 100%);
        }
        .quick-faqs summary {
          font-weight: 600;
          color: #18567c;
          cursor: pointer;
        }
      `}</style>
      <LandingNavbar />

      {/* Hero Banner */}
      <section className="mt-20 contact-banner min-h-[250px] py-14 flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.83, ease: "easeOut" }}
          className="z-10 max-w-2xl mx-auto px-5 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow">
            Contact VitalPhysio⁺
          </h1>
          <div className="mb-2 big-chip">We're Here to Help You on Your Journey to Recovery</div>
          <p className="text-white/90 text-lg mt-3">
            Reach out—our team is ready to guide you, answer your questions, and get you started.
          </p>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section className="py-14 lg:pt-20 lg:pb-24 bg-white px-2">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9">
          {/* Left: Details and FAQs */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.58, delay: 0.16 }}
            className="flex flex-col gap-8"
          >
            <div className="contact-card px-7 py-8">
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Our Details</h2>
              <div className="mb-2">
                <p className="text-base text-gray-700">
                  <span className="font-semibold text-cyan-700">Address:</span><br />
                  2<sup>nd</sup> Floor, P V Complex, Opp. Iblur Lake Park,<br />
                  Bellandur, Bengaluru, Karnataka, India – 560103
                </p>
              </div>
              <div className="mb-2">
                <p className="text-base text-gray-700">
                  <span className="font-semibold text-cyan-700">Schedule an Appointment:</span> +91 80473 59900<br />
                  <span className="font-semibold text-cyan-700">General Queries:</span> +91 80473 59090<br />
                  <span className="font-semibold text-cyan-700">Email:</span> <a href="mailto:Contact@VitalPhysio.Plus" className="text-blue-600 underline">Contact@VitalPhysio.Plus</a>
                </p>
              </div>
              <div className="mt-2 text-base text-gray-700">
                <span className="font-semibold text-cyan-700">Opening Hours:</span><br />
                Every Day: 07:00 AM – 09:00 PM
              </div>
            </div>
            <div className="contact-gradient-card rounded-2xl shadow px-7 py-7">
              <h3 className="text-lg font-semibold text-sky-900 mb-3">Quick Questions</h3>
              <div className="quick-faqs flex flex-col gap-2">
                <details>
                  <summary>How do I book an appointment?</summary>
                  <div className="ml-3 mt-1 text-gray-700">
                    The easiest way is to call us at <b>+91-80473 59900</b> or fill out the contact form. You can also chat with our C³—your personal Concierge Care Coordinator for instant scheduling help.
                  </div>
                </details>
                <details>
                  <summary>What should I bring to my first session?</summary>
                  <div className="ml-3 mt-1 text-gray-700">
                    Bring any relevant medical documents (X-rays, MRI, doctor’s notes) and wear comfortable clothing. You can also fill your medical history in advance via our Patient Portal to save time.
                  </div>
                </details>
                <details>
                  <summary>Do you accept health insurance?</summary>
                  <div className="ml-3 mt-1 text-gray-700">
                    We do not have direct empanelment, but we provide the required documentation for you to seek reimbursement after your therapy depending on your policy.
                  </div>
                </details>
              </div>
            </div>
          </motion.div>

          {/* Right: Form + Map */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.19 }}
            className="flex flex-col gap-7"
          >
            {/* FORM */}
            <div className="contact-card px-7 py-8 flex flex-col">
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Send Us a Message</h2>
              <form
                className="contact-form flex flex-col gap-4"
                autoComplete="off"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Your Name*</label>
                  <input required id="name" type="text" name="name" minLength={2} className="py-2 px-4" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email Address*</label>
                  <input required id="email" type="email" name="email" className="py-2 px-4" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" name="phone" className="py-2 px-4" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message">Your Message*</label>
                  <textarea required id="message" name="message" rows={4} className="py-2 px-4 resize-none"></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.035,
                    boxShadow: "0 8px 36px 0 rgba(30,176,220,0.12)",
                    background: "linear-gradient(90deg,#3ee3b8 0%, #33b9ff 100%)"
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 270, damping: 19 }}
                  className="primary-btn mt-2 flex items-center gap-2 justify-center py-3 px-8 rounded-xl text-white text-lg font-bold shadow-lg transition-all"
                  tabIndex={0}
                >
                  {sent ? "Message Sent!" : "Send Message"}
                  {!sent && <ChevronRight className="ml-1 w-5 h-5" />}
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{ opacity: sent ? 1 : 0, y: sent ? 0 : 10 }}
                  className="text-green-600 font-semibold pt-2 h-6"
                >
                  {sent && "Thank you for reaching out. We'll get back to you shortly."}
                </motion.div>
              </form>
            </div>
            {/* MAP */}
            <div className="contact-card px-0 pb-0 pt-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d243.75583887963515!2d77.66522549165381!3d12.921956110686061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sVitalPhysio%2B%2C%20Iblur%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1752297066897!5m2!1sen!2sin"
                width="100%"
                height="238"
                style={{
                  border: 0,
                  borderRadius: "0 0 2rem 2rem",
                  width: "100%",
                  minHeight: 200,
                  maxHeight: 270
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VitalPhysio⁺ Map - Bengaluru"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with nav links */}
      <Footer />
    </>
  );
}
