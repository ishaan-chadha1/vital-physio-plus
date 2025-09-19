"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";
import Breadcrumb from "@/components/breadcrumb";
import { generateKnowledgeBreadcrumbs } from "@/utils/breadcrumbs";
import { getCalApi } from "@calcom/embed-react";

export default function RunnersKneeFrozenShoulderContent() {
    React.useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "consultation" });
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        })();
    }, []);

    return (
        <>
            {/* JSON-LD Structured Data for Article */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Runner's Knee and Frozen Shoulder Treatment in Bengaluru",
                        "description": "Expert physiotherapy treatment for runner's knee and frozen shoulder in Bengaluru. Get accurate diagnosis and effective treatment plans for complete recovery.",
                        "image": [
                            "https://vitalphysio.plus/images/runners-knee-treatment.jpg",
                            "https://vitalphysio.plus/images/frozen-shoulder-therapy.jpg"
                        ],
                        "author": {
                            "@type": "Organization",
                            "name": "VitalPhysio⁺",
                            "url": "https://vitalphysio.plus"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "VitalPhysio⁺",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://vitalphysio.plus/logo.png"
                            }
                        },
                        "datePublished": "2024-01-15T11:00:00+05:30",
                        "dateModified": "2024-01-15T11:00:00+05:30",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://vitalphysio.plus/knowledge/runners-knee-frozen-shoulder"
                        },
                        "articleSection": "Sports Medicine",
                        "keywords": ["runner's knee", "frozen shoulder", "patellofemoral pain syndrome", "adhesive capsulitis", "Bengaluru", "sports physiotherapy", "knee pain treatment"],
                        "about": [
                            {
                                "@type": "MedicalCondition",
                                "name": "Runner's Knee",
                                "alternateName": "Patellofemoral Pain Syndrome"
                            },
                            {
                                "@type": "MedicalCondition",
                                "name": "Frozen Shoulder",
                                "alternateName": "Adhesive Capsulitis"
                            },
                            {
                                "@type": "MedicalCondition",
                                "name": "Knee Pain"
                            },
                            {
                                "@type": "MedicalCondition",
                                "name": "Shoulder Stiffness"
                            }
                        ],
                        "mentions": [
                            {
                                "@type": "MedicalSpecialty",
                                "name": "Sports Physiotherapy"
                            },
                            {
                                "@type": "Place",
                                "name": "Bengaluru",
                                "alternateName": "Bangalore"
                            },
                            {
                                "@type": "MedicalTherapy",
                                "name": "Manual Therapy"
                            },
                            {
                                "@type": "MedicalTherapy",
                                "name": "Exercise Therapy"
                            }
                        ]
                    }),
                }}
            />

            {/* JSON-LD Structured Data for FAQPage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What are the best physio treatments for runner's knee?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The best physiotherapy treatments for runner's knee include strengthening exercises for quadriceps, hips, and glutes, gait retraining, manual therapy, taping techniques, and activity modification. Treatment focuses on correcting biomechanical issues and gradually returning to running with proper form."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What are the stages of a frozen shoulder?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Frozen shoulder has three stages: 1) Freezing stage (2-9 months) with increasing pain and stiffness, 2) Frozen stage (4-12 months) with severe stiffness but less pain, and 3) Thawing stage (5-24 months) with gradual improvement in range of motion. Each stage requires different physiotherapy approaches."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does it take to recover from runner's knee?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Recovery from runner's knee typically takes 6-12 weeks with proper physiotherapy treatment. The timeline depends on severity, compliance with exercises, addressing underlying causes like muscle weakness or poor biomechanics, and gradual return to activity. Early intervention leads to faster recovery."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can frozen shoulder be prevented?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "While frozen shoulder cannot always be prevented, risk can be reduced by maintaining shoulder mobility after any injury or surgery, regular stretching and strengthening exercises, managing diabetes and thyroid conditions effectively, and seeking early physiotherapy for shoulder pain or stiffness."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What exercises should I avoid with runner's knee?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "With runner's knee, avoid high-impact activities like running on hard surfaces, deep squats, lunges, jumping, and activities that cause knee pain. Instead, focus on low-impact exercises like swimming, cycling, and specific strengthening exercises prescribed by your physiotherapist until symptoms improve."
                                }
                            }
                        ]
                    }),
                }}
            />

            <LandingNavbar />
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Breadcrumb Navigation */}
                    <Breadcrumb
                        items={generateKnowledgeBreadcrumbs('runners-knee-frozen-shoulder', "Runner's Knee and Frozen Shoulder")}
                    />

                    {/* Article Content */}
                    <h1 className="text-4xl md:text-5xl font-bold text-[rgb(0,79,140)] mb-6">
                        "Runner's Knee", "Frozen Shoulder" & Bangalore Lifestyles: Prevention & Cure
                    </h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Staying active in Bengaluru's parks, gyms, and on city roads is a healthy choice. But modern urban life, marathon training, and hours of computer use mean many face common problems: knee pain ("runner's knee") and frozen shoulder. Here's how physiotherapy provides proven pathways to sustained recovery.
                </p>

                <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">What Is Runner's Knee?</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Runner's knee—patellofemoral pain syndrome (PFPS)—is one of the most frequent causes of knee pain among Bengaluru's joggers, fitness fans, and sports enthusiasts.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Symptoms</h3>
                <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
                    <li>Pain around (or behind) the kneecap, worse with running, stairs, or prolonged sitting.</li>
                    <li>Clicking, grinding, or "giving way" of the knee.</li>
                    <li>Pulling/aching feeling when standing from a chair or squatting.</li>
                </ul>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Causes & Risk Factors</h3>
                <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
                    <li>Overuse or sudden increase in activity levels (common in marathon training or gym routines).</li>
                    <li>Weak quadriceps, hips, or gluteal muscles.</li>
                    <li>Poor foot mechanics (flat feet, worn-out running shoes).</li>
                    <li>Bad running form, inadequate warm-up or stretching.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[rgb(0,128,148)] mb-4">Best Practices – Prevention & Recovery</h2>
                <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
                    <li>Gradual activity progression—avoid "too much, too soon."</li>
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
                    <li>Early movement after any shoulder injury/surgery to avoid "freezing up."</li>
                    <li>Don't wait for pain to go away—early physiotherapy speeds recovery and can prevent chronic stiffness.</li>
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
                    <li>Don't ignore "little" pain—early action prevents big downtime.</li>
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
        </section >
            <Footer />
    </>
  );
}