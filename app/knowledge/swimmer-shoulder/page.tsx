"use client";

import React from "react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

export default function SwimmerShoulder() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preventing Common Shoulder Injuries in Swimmers
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            A Physiotherapy Guide from VitalPhysio⁺
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Swimming, while being a low-impact sport, puts the shoulder complex under repetitive stress. Without the right approach, even elite swimmers are at risk of “swimmer’s shoulder”—pain and dysfunction that can sideline your performance. At VitalPhysio⁺, we specialize in sports rehab to keep shoulders resilient, injury-free, and strong in and out of the pool.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Are Shoulder Injuries So Common in Swimmers?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Repetitive Motion: The overhead strokes required in swimming (freestyle, butterfly, backstroke) place tremendous demand on the rotator cuff and shoulder stabilizers.</li>
            <li>Muscle Imbalances: Stronger chest muscles combined with weaker upper-back and rotator cuff muscles can throw off shoulder mechanics.</li>
            <li>Overtraining & Poor Technique: Inadequate rest, improper warm-up, or technical faults in stroke can quickly lead to overuse syndromes, tendinitis, and impingement.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How Physiotherapy Protects Swimmers’ Shoulders
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
            <li>Early Assessment: Identifying technique flaws and muscle imbalances before pain develops.</li>
            <li>Targeted Strengthening: Building resilience in the rotator cuff, scapular stabilizers, and core for optimal shoulder stability and stroke efficiency.</li>
            <li>Flexibility & Mobility: Ensuring a full, pain-free range of motion through structured stretching and myofascial release.</li>
            <li>Injury Prevention Education: Teaching optimal warm-ups, cooldowns, and self-management skills.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Key Strengthening & Stretching Exercises for Shoulder Protection
          </h2>
          <table className="w-full text-left border-collapse border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Exercise</th>
                <th className="border border-gray-300 px-4 py-2">Benefit</th>
                <th className="border border-gray-300 px-4 py-2">How-To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Scapular Retraction</td>
                <td className="border border-gray-300 px-4 py-2">Strengthens upper back (middle traps/rhomboids)</td>
                <td className="border border-gray-300 px-4 py-2">Squeeze shoulder blades together, hold 5 seconds, repeat 10–15 times.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">External Rotation</td>
                <td className="border border-gray-300 px-4 py-2">Activates rotator cuff (infraspinatus/teres min.)</td>
                <td className="border border-gray-300 px-4 py-2">Use elastic band, rotate arm outward, repeat 10–15 reps each arm.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Wall Angels</td>
                <td className="border border-gray-300 px-4 py-2">Improves mobility and posture</td>
                <td className="border border-gray-300 px-4 py-2">Slide arms up/down wall, keep contact throughout, 10 reps.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Sleeper Stretch</td>
                <td className="border border-gray-300 px-4 py-2">Increases posterior shoulder flexibility</td>
                <td className="border border-gray-300 px-4 py-2">Lie on side, press forearm gently toward table, hold 30 sec, repeat.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Serratus Push-Ups</td>
                <td className="border border-gray-300 px-4 py-2">Activates scapular stabilizers</td>
                <td className="border border-gray-300 px-4 py-2">In push-up position, protract/retract shoulder blades, 10–15 reps.</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Bonus Tip:</strong> Always warm up shoulders with dynamic movements (e.g., arm circles, band pull-aparts) and prioritize cool-down stretches after every swim session.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Take your aquatic performance to new heights!</strong> Contact VitalPhysio⁺ today for a comprehensive swimmer’s shoulder assessment and a personalized injury prevention plan.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}