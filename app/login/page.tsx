"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingNavbar from "@/components/landing-navbar";
import Footer from "@/components/footer";

export default function PatientPortalLogin() {
  const [step, setStep] = useState("login");
  const [form, setForm] = useState({ name: "", phone: "" });
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60);
  const otpInput = useRef(null);

  const mobileMask = form.phone
    ? `${form.phone.substring(0, 2)}******${form.phone.slice(-2)}`
    : "...3210";

  React.useEffect(() => {
    let interval = null;
    if (step === "verify" && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (step === "login") handleLogin(e);
      if (step === "verify") handleVerify(e);
    }
  }

  function handleLogin(e) {
    if (e) e.preventDefault();
    setError("");
    if (form.name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!/^\d{10,}$/.test(form.phone.trim())) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setOtp("");
    setStep("verify");
    setTimer(60);
    setTimeout(() => otpInput.current?.focus(), 250);
  }

  function handleVerify(e) {
    if (e) e.preventDefault();
    setError("");
    if (otp.trim().length < 4) {
      setError("Enter the 4-digit OTP sent to your mobile.");
      return;
    }
    alert("OTP Verified: Redirecting to Patient Portal...");
  }

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <style jsx global>{`
        .portal-bg {
          background: linear-gradient(98deg, #31cbe3 0%, #1572b5 110%);
        }
        .login-card {
          background: #fff;
          border-radius: 2rem;
          box-shadow: 0 10px 52px 0 rgba(28, 150, 202, 0.14);
          min-width: 312px;
        }
        .input-block {
          background: #f8fafb;
          border: 1.6px solid #cbe9f4;
          border-radius: 0.72rem;
          font-size: 1.09rem;
          line-height: 1.46;
          padding: 0.98rem 1.1rem;
          width: 100%;
          margin-bottom: 0.14rem;
          transition: border 0.17s, box-shadow 0.17s;
        }
        .input-block:focus {
          border-color: #14dbe1;
          box-shadow: 0 0 0 3px #b7fafd60;
        }
        .label-row {
          font-weight: 600;
          color: #1572b5;
          margin-bottom: 0.21rem;
          font-size: 1.08rem;
        }
        .main-btn {
          background: linear-gradient(90deg, #14ddd0 0%, #288bff 100%);
          color: #fff;
          font-weight: 700;
          border-radius: 0.7rem;
          padding: 1.01rem 0;
          font-size: 1.18rem;
          width: 100%;
          box-shadow: 0 4px 24px 0 rgba(30, 176, 220, 0.12);
          letter-spacing: 0.01em;
          margin-top: 0.41rem;
          transition: all 0.16s;
        }
        .main-btn:active {
          transform: scale(0.98);
        }
        .main-btn:hover,
        .main-btn:focus {
          filter: brightness(1.07);
          box-shadow: 0 10px 26px 0 rgba(25, 200, 220, 0.16);
        }
        .otp-timer {
          font-weight: 700;
          color: #0ac7b8;
        }
        .portal-card-logo {
          font-size: 1.09rem;
          font-weight: 700;
          color: #188ea6;
          letter-spacing: 0.07em;
          text-align: center;
          margin-bottom: 1.6rem;
        }
        .vp-tag {
          font-size: 1.17rem;
          letter-spacing: 0.04em;
          font-weight: 800;
          color: #089ba8 !important;
        }
        .form-helper {
          color: #6ebbe5;
          font-size: 0.97rem;
          margin-top: 0.11rem;
          margin-bottom: 0.22rem;
        }
        .privacy-foot {
          color: #99b6c9;
        }
        @media (max-width: 560px) {
          .login-card {
            padding-left: 0.7rem !important;
            padding-right: 0.7rem !important;
          }
        }
        /* Fix: Footer always at bottom, no extra white strip */
        #vp-footer {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 50;
        }
        body, html, #__next {
          height: 100%;
          min-height: 100%;
          background: #fff;
        }
      `}</style>
      <LandingNavbar />

      {/* Header Banner */}
      <section className="mt-20 portal-bg w-full py-10 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight drop-shadow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.07 }}
          >
            {step === "login"
              ? "Secure Patient Portal"
              : "Verify Your Identity"}
          </motion.h1>
          <motion.p
            className="text-white/96 mt-1 font-medium text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.71, delay: 0.15 }}
          >
            {step === "login" ? (
              <>Please enter your details to receive a login OTP.</>
            ) : (
              <>
                An OTP has been sent to your registered mobile number ending in <span className="font-bold">{mobileMask}</span>.
              </>
            )}
          </motion.p>
        </div>
      </section>

      {/* Main Card Section (min-h-[430px] ensures content above footer on all screens) */}
      <section className="flex-1 flex flex-col items-center py-10 bg-white" style={{ minHeight: "340px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.99, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.43, 0.15, 0.32, 1.43] }}
          className="login-card w-full max-w-md px-9 py-11 mx-auto flex flex-col items-center"
        >
          <div className="w-full">
            <AnimatePresence mode="wait">
              {step === "login" && (
                <motion.form
                  key="login"
                  className="flex flex-col gap-5"
                  autoComplete="off"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  onSubmit={handleLogin}
                  onKeyDown={handleKeyDown}
                >
                  <div className="flex flex-col gap-1">
                    <label className="label-row" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      className="input-block"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      minLength={2}
                      autoComplete="name"
                      required
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="label-row" htmlFor="phone">
                      Registered Mobile Number
                      <span className="font-normal ml-1 text-gray-500">
                        (as registered with VitalPhysio)
                      </span>
                    </label>
                    <input
                      className="input-block"
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="eg: 9876543210"
                      minLength={10}
                      maxLength={14}
                      pattern="\d*"
                      value={form.phone}
                      autoComplete="tel"
                      required
                      onChange={e =>
                        setForm(f => ({ ...f, phone: e.target.value.replace(/[^\d]/g, "") }))
                      }
                      autoFocus
                    />
                  </div>
                  <div className="min-h-6">
                    {error && <div className="pt-1 text-red-600 font-semibold text-sm">{error}</div>}
                  </div>
                  <button className="main-btn" type="submit">
                    SEND OTP
                  </button>
                </motion.form>
              )}
              {step === "verify" && (
                <motion.form
                  key="verify"
                  className="flex flex-col gap-5"
                  autoComplete="off"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onSubmit={handleVerify}
                  onKeyDown={handleKeyDown}
                >
                  <div className="flex flex-col gap-2 mb-1">
                    <label className="label-row" htmlFor="otp">
                      Enter OTP
                      <span className="ml-1 text-gray-500 font-normal">(4 digit, sent to mobile)</span>
                    </label>
                    <input
                      id="otp"
                      name="otp"
                      className="input-block text-2xl tracking-widest text-center font-mono"
                      type="text"
                      minLength={4}
                      maxLength={4}
                      ref={otpInput}
                      autoFocus
                      pattern="\d*"
                      inputMode="numeric"
                      value={otp}
                      onChange={e => setOtp(e.target.value.replace(/[^\d]/g, "").slice(0, 4))}
                      placeholder="••••"
                    />
                  </div>
                  <div className="flex items-center justify-between text-[1.08rem] mt-0.5">
                    <span className="otp-timer">
                      Time Remaining {String(timer).padStart(2, "0")}:00
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setOtp("");
                        setTimer(60);
                      }}
                      className="text-blue-600 underline hover:text-sky-800 font-medium ml-2 text-sm"
                      tabIndex={0}
                    >
                      Resend OTP
                    </button>
                  </div>
                  <div className="min-h-6">
                    {error && <div className="pt-1 text-red-600 font-semibold text-sm">{error}</div>}
                  </div>
                  <button className="main-btn" type="submit">
                    Verify &amp; Log In
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        <div className="privacy-foot text-xs mt-8 px-2 text-center max-w-xs">
          For your security, your information is encrypted and never shared in accordance with our Privacy Policy.
        </div>
      </section>

      {/* Footer fixed at the bottom, always full width */}
      <div id="vp-footer">
        <Footer />
      </div>
    </div>
  );
}
