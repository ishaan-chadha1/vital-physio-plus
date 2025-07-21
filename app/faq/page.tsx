'use client';

import Footer from '@/components/footer';
import LandingNavbar from '@/components/landing-navbar';
import { useState } from 'react';

// You can create a separate file for icons or import them from a library like 'react-icons'
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
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
          isOpen ? 'max-h-96 mt-2' : 'max-h-0'
        }`}
      >
        <div className="pt-2 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <LandingNavbar />
      <main className="container mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Have a question? We've compiled answers to the most common inquiries we receive from our patients in Bengaluru.</p>
        </section>

        {/* FAQs Section */}
        <section className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <FaqItem question="Why choose VitalPhysio?">
              [cite_start]<p>We are Bengaluru's most trusted rehab center because we deliver personalized, evidence-based therapy. [cite: 11] [cite_start]Our experts follow international standards and use the latest technology to ensure safe, effective outcomes for your recovery. [cite: 12]</p>
            </FaqItem>

            <FaqItem question="What does the '+' in VitalPhysio mean?">
              [cite_start]<p>The '+' signifies our commitment to go above and beyond standard care. [cite: 15] [cite_start]It means every treatment plan includes added value like advanced equipment, continuous progress monitoring, and AI-powered concierge support, all at no hidden cost. [cite: 16, 17]</p>
            </FaqItem>

            <FaqItem question="How does the AI Concierge (C³) work?">
              [cite_start]<p>C³ is your integrated AI care coordinator, available 24/7 in our Patient Portal. [cite: 20] [cite_start]It helps you schedule appointments, sends reminders for your home exercises, and answers questions based on your personal rehabilitation plan. [cite: 21]</p>
            </FaqItem>

            <FaqItem question="How do I book an appointment?">
              [cite_start]<p>You can easily book by clicking the "Book Your Consultation" button on our site, which takes you to our contact page, or by calling our clinic directly. [cite: 24] [cite_start]Soon, you'll also be able to ask AI assistants like ChatGPT to schedule for you. [cite: 25]</p>
            </FaqItem>

            <FaqItem question="Do you accept health insurance?">
              [cite_start]<p>We are currently not empanelled by any insurance company. [cite: 28] [cite_start]However, we would be able to help you with all the required documentation that you may require for seeking a reimbursement of your treatment charges after completion of your therapy at VitalPhysio. [cite: 28]</p>
            </FaqItem>

            <FaqItem question="What should I bring to my first session?">
              [cite_start]<p>Please complete our online medical history form via the Patient Portal beforehand. [cite: 30] [cite_start]On the day of your visit, bring any relevant reports (like X-rays or doctor's notes) and wear comfortable, loose-fitting clothing. [cite: 31]</p>
            </FaqItem>

            <FaqItem question="Do you offer home or online therapy?">
              [cite_start]<p>Yes, our Home & Tele-Rehabilitation program provides personalized care in the comfort of your home. [cite: 33] [cite_start]We use virtual sessions and digital exercise plans to ensure you receive expert guidance without needing to travel. [cite: 34]</p>
            </FaqItem>

             <FaqItem question="Can physiotherapy help me avoid surgery?">
              <p>In many cases, yes. [cite_start]For musculoskeletal conditions like back pain or joint injuries, targeted physiotherapy can significantly improve function and reduce pain, often delaying or completely eliminating the need for surgery. [cite: 36] [cite_start]You can <a href="#" className="text-teal-600 underline">see the conditions we treat</a>. [cite: 37]</p>
            </FaqItem>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-3xl mx-auto mt-16 md:mt-24 bg-gray-50 p-8 rounded-lg">
             <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Still Have Questions?</h2>
             <p className="text-center text-gray-600 mb-8">If our C³ Concierge Care Coordinator or the FAQs above couldn't provide the answer you need, please submit your question below. Our expert team will get back to you shortly.</p>

             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
                    </div>
                </div>
                 <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
                </div>
                <div>
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">Your Question</label>
                    <textarea id="question" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition-colors duration-300">Submit to Our Experts</button>
                </div>
             </form>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}