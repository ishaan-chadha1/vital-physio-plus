import { Metadata } from 'next';"use client";

import PediatricPhysiotherapyContent from './content';

import React from "react";

export const metadata: Metadata = {import Footer from "@/components/footer";

  title: 'Pediatric Physiotherapy in Bengaluru: Helping Your Child Thrive | VitalPhysio⁺',import LandingNavbar from "@/components/landing-navbar";

  description: 'Expert pediatric physiotherapy services in Bengaluru for developmental delays, childhood injuries, and neurological conditions. Child-friendly approaches for better outcomes.',import { getCalApi } from "@calcom/embed-react";

  keywords: 'pediatric physiotherapy, child physiotherapy, developmental delays, Bengaluru, childhood injuries, cerebral palsy, motor development, early intervention, play-based therapy',

  openGraph: {export default function PediatricPhysiotherapy() {

    title: 'Pediatric Physiotherapy in Bengaluru: Helping Your Child Thrive | VitalPhysio⁺',  React.useEffect(() => {

    description: 'Expert pediatric physiotherapy services in Bengaluru for developmental delays, childhood injuries, and neurological conditions. Child-friendly approaches for better outcomes.',    (async function () {

    type: 'article',      const cal = await getCalApi({ namespace: "consultation" });

    publishedTime: '2024-01-10T09:00:00.000Z',      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });

    authors: ['VitalPhysio⁺ Team'],    })();

    section: 'Pediatric Services',  }, []);

    tags: ['Pediatric Physiotherapy', 'Child Development', 'Developmental Delays', 'Cerebral Palsy', 'Early Intervention'],

    url: 'https://vitalphysio.plus/knowledge/pediatric-physiotherapy',  return (

    siteName: 'VitalPhysio⁺',    <>

    images: [      <LandingNavbar />

      {      <section className="bg-gray-50 py-16 md:py-20">

        url: '/images/pediatric-physiotherapy-og.jpg',        <div className="max-w-4xl mx-auto px-6">

        width: 1200,          {/* SEO Meta Tags */}

        height: 630,          <head>

        alt: 'Pediatric physiotherapy helping children thrive in Bengaluru'            <title>Pediatric Physiotherapy | VitalPhysio⁺ Bengaluru</title>

      }            <meta

    ],              name="description"

  },              content="Discover child-friendly physiotherapy approaches at VitalPhysio⁺ Bengaluru. Help your child overcome movement challenges with expert care."

  twitter: {            />

    card: 'summary_large_image',            <meta

    title: 'Pediatric Physiotherapy in Bengaluru: Helping Your Child Thrive | VitalPhysio⁺',              name="keywords"

    description: 'Expert pediatric physiotherapy for developmental delays & childhood injuries. Child-friendly care in Bengaluru.',              content="pediatric physiotherapy, child physiotherapy, developmental delays, Bengaluru, VitalPhysio⁺, cerebral palsy, movement therapy"

    images: ['/images/pediatric-physiotherapy-twitter.jpg'],            />

    creator: '@vitalphysioplus',          </head>

    site: '@vitalphysioplus',

  },          {/* Article Content */}

  alternates: {          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">

    canonical: 'https://vitalphysio.plus/knowledge/pediatric-physiotherapy',            Pediatric Physiotherapy—Child-Friendly Approaches Parents Should Know

  },          </h1>

  robots: {          <p className="text-gray-700 text-lg leading-relaxed mb-6">

    index: true,            Every child in Bengaluru deserves a bright, active start. Pediatric physiotherapy empowers babies, children, and teens to overcome movement challenges—whether due to delayed milestones, neurological/orthopedic conditions, or injuries. Here’s what every parent should know, based on the latest evidence and approaches from Bengaluru’s pediatric physiotherapists.

    follow: true,          </p>

    googleBot: {

      index: true,          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">What is Pediatric Physiotherapy?</h2>

      follow: true,          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">

      'max-video-preview': -1,            <li>

      'max-image-preview': 'large',              Pediatric physiotherapy is a specialized branch focused on evaluating, diagnosing, and addressing movement, strength, and functional issues in children from birth through adolescence.

      'max-snippet': -1,            </li>

    },            <li>

  },              It helps address developmental delays, frequent falls, muscle weakness, difficulty walking, cerebral palsy, genetic conditions (Down syndrome), and post-injury or post-surgery care.

};            </li>

            <li>

export default function PediatricPhysiotherapyPage() {              Treatment blends science with creativity—using games, play-based exercises, and hands-on therapy for fun, engaging rehabilitation.

  return <PediatricPhysiotherapyContent />;            </li>

}          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">When Should Parents Seek Pediatric Physiotherapy?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Persistent delays reaching milestones (not holding head up, rolling, crawling, or walking on time).</li>
            <li>Unusual walking patterns (toe-walking, frequent falls, poor posture, one foot turning in/out).</li>
            <li>Diagnosed neurological, neuromuscular, or genetic conditions.</li>
            <li>Recovery needs post-injury, fracture, or after surgery.</li>
            <li>Difficulty feeding due to oro-motor issues, trouble latching, or head preference to one side.</li>
            <li>Difficulty participating in play, sports, or daily activities.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Family-Centered, Holistic Approach</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Assessment:</strong> Detailed review of child’s development, family history, and physical abilities.
            </li>
            <li>
              <strong>Individualized Plan:</strong> Every program is tailored to your child’s age, personality, family goals, and home resources.
            </li>
            <li>
              <strong>Play-Based Therapy:</strong> Exercises are converted into age-appropriate games, obstacle courses, and interactive sessions—making kids love therapy!
            </li>
            <li>
              <strong>Parent Empowerment:</strong> Parent/caregiver education and home programs are prioritized to ensure progress continues beyond the clinic.
            </li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Early intervention (before problems “grow out”) leads to better results and improved self-reliance long-term.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Common Approaches in Evidence-Based Pediatric Physiotherapy</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Neurodevelopmental techniques—Bobath, Rood, Kabat-Knott-Voss (for cerebral palsy, developmental issues).</li>
            <li>Motor learning and sensory integration (for autism, ADHD, coordination disorders).</li>
            <li>Strength, endurance, and balance training.</li>
            <li>Assistive device prescription (walkers, orthotics as needed).</li>
            <li>Parent/adult education for ongoing support at home.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Frequently Asked Questions</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>
              <strong>Will my child be in pain?</strong> Sessions are gentle, always designed to be fun and supportive—not painful or scary.
            </li>
            <li>
              <strong>How long does therapy last?</strong> Some children improve within weeks; others need ongoing support. The earlier you start, the greater the results.
            </li>
            <li>
              <strong>Can therapy be preventive?</strong> Absolutely. Starting therapy for at-risk kids (premature birth, family history) enhances child development and prevents complications down the line.
            </li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Worried about your child’s movement, posture, play, or recovery?</strong> Book a child-friendly consultation with a pediatric physiotherapist at VitalPhysio⁺, Bengaluru—parents and kids both leave smiling!
          </p>

          {/* Book Now Button */}
          <div className="text-center mt-8">
            <button
              type="button"
              data-cal-namespace="consultation"
              data-cal-link="vital-physio-plus/consultation"
              data-cal-config='{"layout":"month_view"}'
              className="bg-[rgb(0,79,140)] text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:bg-[rgb(0,128,148)] hover:shadow-lg transition-all duration-200 text-sm transform hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}