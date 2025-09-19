import { Metadata } from 'next';"use client";

import RunnersKneeFrozenShoulderContent from './content';

import React from "react";

export const metadata: Metadata = {import Footer from "@/components/footer";

  title: "Runner's Knee and Frozen Shoulder Treatment in Bengaluru | VitalPhysio⁺",import LandingNavbar from "@/components/landing-navbar";

  description: "Expert physiotherapy treatment for runner's knee and frozen shoulder in Bengaluru. Get accurate diagnosis and effective treatment plans for complete recovery.",import { getCalApi } from "@calcom/embed-react";

  keywords: "runner's knee, frozen shoulder, patellofemoral pain syndrome, adhesive capsulitis, Bengaluru, sports physiotherapy, knee pain treatment, shoulder stiffness, sports injury",

  openGraph: {export default function RunnersKneeFrozenShoulder() {

    title: "Runner's Knee and Frozen Shoulder Treatment in Bengaluru | VitalPhysio⁺",  React.useEffect(() => {

    description: "Expert physiotherapy treatment for runner's knee and frozen shoulder in Bengaluru. Get accurate diagnosis and effective treatment plans for complete recovery.",    (async function () {

    type: 'article',      const cal = await getCalApi({ namespace: "consultation" });

    publishedTime: '2024-01-15T11:00:00.000Z',      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });

    authors: ['VitalPhysio⁺ Team'],    })();

    section: 'Sports Medicine',  }, []);

    tags: ["Runner's Knee", "Frozen Shoulder", "Sports Physiotherapy", "Knee Pain", "Shoulder Treatment"],

    url: 'https://vitalphysio.plus/knowledge/runners-knee-frozen-shoulder',  return (

    siteName: 'VitalPhysio⁺',    <>

    images: [      <LandingNavbar />

      {      <section className="bg-gray-50 py-16 md:py-20">

        url: '/images/runners-knee-frozen-shoulder-og.jpg',        <div className="max-w-4xl mx-auto px-6">

        width: 1200,          {/* SEO Meta Tags */}

        height: 630,          <head>

        alt: "Runner's knee and frozen shoulder treatment in Bengaluru"            <title>Runner’s Knee & Frozen Shoulder | VitalPhysio⁺ Bengaluru</title>

      }            <meta

    ],              name="description"

  },              content="Discover physiotherapy solutions for runner’s knee and frozen shoulder at VitalPhysio⁺ Bengaluru. Learn prevention and recovery tips tailored to your lifestyle."

  twitter: {            />

    card: 'summary_large_image',            <meta

    title: "Runner's Knee and Frozen Shoulder Treatment in Bengaluru | VitalPhysio⁺",              name="keywords"

    description: "Expert physiotherapy for runner's knee & frozen shoulder. Accurate diagnosis & effective treatment in Bengaluru.",              content="runner’s knee, frozen shoulder, physiotherapy, Bengaluru, VitalPhysio⁺, knee pain, shoulder stiffness, sports recovery"

    images: ['/images/runners-knee-frozen-shoulder-twitter.jpg'],            />

    creator: '@vitalphysioplus',          </head>

    site: '@vitalphysioplus',

  },          {/* Article Content */}

  alternates: {          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">

    canonical: 'https://vitalphysio.plus/knowledge/runners-knee-frozen-shoulder',            “Runner’s Knee”, “Frozen Shoulder” & Bangalore Lifestyles: Prevention & Cure

  },          </h1>

  robots: {          <p className="text-gray-700 text-lg leading-relaxed mb-6">

    index: true,            Staying active in Bengaluru’s parks, gyms, and on city roads is a healthy choice. But modern urban life, marathon training, and hours of computer use mean many face common problems: knee pain (“runner’s knee”) and frozen shoulder. Here’s how physiotherapy provides proven pathways to sustained recovery.

    follow: true,          </p>

    googleBot: {

      index: true,          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">What Is Runner’s Knee?</h2>

      follow: true,          <p className="text-gray-700 text-lg leading-relaxed mb-4">

      'max-video-preview': -1,            Runner’s knee—patellofemoral pain syndrome (PFPS)—is one of the most frequent causes of knee pain among Bengaluru’s joggers, fitness fans, and sports enthusiasts.

      'max-image-preview': 'large',          </p>

      'max-snippet': -1,          <h3 className="text-xl font-bold text-gray-900 mb-2">Symptoms</h3>

    },          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">

  },            <li>Pain around (or behind) the kneecap, worse with running, stairs, or prolonged sitting.</li>

};            <li>Clicking, grinding, or “giving way” of the knee.</li>

            <li>Pulling/aching feeling when standing from a chair or squatting.</li>

export default function RunnersKneeFrozenShoulderPage() {          </ul>

  return <RunnersKneeFrozenShoulderContent />;          <h3 className="text-xl font-bold text-gray-900 mb-2">Causes & Risk Factors</h3>

}          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Overuse or sudden increase in activity levels (common in marathon training or gym routines).</li>
            <li>Weak quadriceps, hips, or gluteal muscles.</li>
            <li>Poor foot mechanics (flat feet, worn-out running shoes).</li>
            <li>Bad running form, inadequate warm-up or stretching.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Best Practices – Prevention & Recovery</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Gradual activity progression—avoid “too much, too soon.”</li>
            <li>Strength and balance training for hips, core, and quads.</li>
            <li>Dynamic warm-ups (leg swings, ankle mobility) and cool-downs.</li>
            <li>Quality footwear: Replace old shoes, seek physio advice if you have foot/arch issues.</li>
            <li>
              Pain with running? Reduce or switch to low-impact options (walking, cycling, swimming) until symptoms settle.
            </li>
            <li>
              Individualized physiotherapy: Your physio will provide assessment, tailored exercises, gait retraining, taping, and education—avoiding recurrence is as important as recovery.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">What Is Frozen Shoulder?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Frozen shoulder—adhesive capsulitis—causes severe pain and loss of shoulder movement, eventually affecting daily life: combing hair, wearing clothes, or cooking become difficult.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Symptoms</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Gradual shoulder pain and progressive stiffness.</li>
            <li>Severe restriction in raising, rotating, or reaching the arm.</li>
            <li>Pain even at rest or night, often waking you up.</li>
          </ul>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Typical Causes</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Diabetes, thyroid conditions, age 40+.</li>
            <li>Periods of shoulder immobility (post-injury, surgery, or even minor trauma).</li>
            <li>Sedentary lifestyles—urban professionals and homemakers are equally at risk.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Best Practices – Prevention & Recovery</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Early movement after any shoulder injury/surgery to avoid “freezing up.”</li>
            <li>Don’t wait for pain to go away—early physiotherapy speeds recovery and can prevent chronic stiffness.</li>
            <li>
              <strong>Physiotherapy stages:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Pain relief: Gentle joint mobilizations, modalities, and medications (where needed).</li>
                <li>Mobility restoration: Graded, pain-free range of motion exercises, gentle stretching.</li>
                <li>
                  Strengthening and function: When mobility returns, dynamic exercises for rotator cuff, scapular muscles, posture.
                </li>
              </ul>
            </li>
            <li>Home exercises and education—Your physio gives you a customized plan and checks for underlying risk factors.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Did you know?</strong> With physiotherapy, most people regain full shoulder function in 6–18 months—even when pain is severe at first.
          </p>

          <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Quick Bengaluru Lifestyle Tips</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Regular stretching and strength work—not just cardio—will prevent most running and office shoulder issues.</li>
            <li>Stay hydrated and fuel your body; nutrition is key for tissue repair.</li>
            <li>Don’t ignore “little” pain—early action prevents big downtime.</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Facing knee pain or shoulder stiffness?</strong> Book your assessment with a physiotherapist at VitalPhysio⁺, Bengaluru and receive a plan tailored for your sport, work, or lifestyle needs.
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