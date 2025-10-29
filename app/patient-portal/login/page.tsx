'use client';

// Force dynamic rendering to prevent build-time errors with Firebase
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { auth, db } from '@/lib/firebase';
import Image from 'next/image';

export default function PatientLogin() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' or 'otp'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null);
  const router = useRouter();

  const setupRecaptcha = () => {
    if (!auth) {
      throw new Error('Firebase auth is not initialized. Please check your Firebase configuration.');
    }
    if (!recaptchaVerifier) {
      const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
        'expired-callback': () => {
          setError('reCAPTCHA expired. Please try again.');
        }
      });
      setRecaptchaVerifier(verifier);
      return verifier;
    }
    return recaptchaVerifier;
  };

  const sendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!auth) {
      setError('Firebase auth is not initialized. Please check your Firebase configuration.');
      setLoading(false);
      return;
    }

    try {
      const verifier = setupRecaptcha();
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`;
      
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, verifier);
      setVerificationId(confirmationResult.verificationId);
      setStep('otp');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!auth) {
      setError('Firebase auth is not initialized. Please check your Firebase configuration.');
      setLoading(false);
      return;
    }

    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      const userCredential = await signInWithCredential(auth, credential);
      const user = userCredential.user;

      // Check if patient exists in Firestore
      if (!db) {
        setError('Firebase Firestore is not initialized.');
        setLoading(false);
        return;
      }
      const patientDoc = await getDoc(doc(db, 'patients', user.uid));
      
      if (!patientDoc.exists()) {
        // Create new patient document
        await setDoc(doc(db, 'patients', user.uid), {
          phone: phoneNumber,
          createdAt: new Date(),
          updatedAt: new Date(),
          treatmentPhase: 'Phase 1',
          currentCondition: '',
          scheduledSessions: [],
          dailyVitals: {},
          emergencyContact: {},
          medicalHistory: {}
        });
      }

      router.push('/patient-portal');
    } catch (error: any) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="VitalPhysio⁺ Logo"
              width={200}
              height={60}
              className="h-16 w-auto object-contain"
            />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {step === 'phone' ? 'Sign in to your account' : 'Verify your phone number'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {step === 'phone' ? 'Enter your mobile number to receive OTP' : 'Enter the 6-digit OTP sent to your phone'}
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-xl rounded-lg">
          {step === 'phone' ? (
            <form className="space-y-6" onSubmit={sendOTP}>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">+91</span>
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="appearance-none relative block w-full pl-12 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your 10-digit mobile number"
                    maxLength={10}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  We'll send you a 6-digit verification code
                </p>
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center">
                  {error}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={loading || phoneNumber.length !== 10}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending OTP...
                    </div>
                  ) : (
                    'Send OTP'
                  )}
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={verifyOTP}>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Verification Code
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm text-center text-2xl tracking-widest"
                  placeholder="000000"
                  maxLength={6}
                />
                <p className="mt-1 text-xs text-gray-500">
                  Enter the 6-digit code sent to +91{phoneNumber}
                </p>
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center">
                  {error}
                </div>
              )}

              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={loading || otp.length !== 6}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Verifying...
                    </div>
                  ) : (
                    'Verify OTP'
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    setStep('phone');
                    setOtp('');
                    setError('');
                  }}
                  className="w-full text-sm text-blue-600 hover:text-blue-500"
                >
                  ← Change phone number
                </button>
              </div>
            </form>
          )}
          
          {/* reCAPTCHA container */}
          <div id="recaptcha-container"></div>
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push('/')}
            className="text-sm text-gray-600 hover:text-gray-500"
          >
            ← Back to main website
          </button>
        </div>
      </motion.div>
    </div>
  );
}
