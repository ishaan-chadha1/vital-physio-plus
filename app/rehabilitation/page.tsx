"use client";

import LandingNavbar from "@/components/landing-navbar";

export default function JointRehabPage() {
  return (
    <>
      <LandingNavbar />
      <section className="bg-white py-20 px-6 text-blue-900 animate-fade-in-up">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Knee & Hip Replacement Rehabilitation
          </h1>

          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Our specialized rehabilitation pathway for knee and hip arthroplasty at VitalPhysio⁺ integrates
            pre operative conditioning, early mobilization, targeted strength and range of motion protocols,
            and progressive functional training to facilitate a swift and sustainable recovery.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Evidence supports that comprehensive preoperative physiotherapy reduces postoperative pain and
              enhances functional performance. By initiating early mobilization and structured exercises,
              patients experience decreased hospital stays and a reduced risk of complications.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Pre Operative Conditioning</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Pre operative exercises center on ankle pumps, straight leg raises, and quadriceps sets performed twice daily to increase lower limb strength.</li>
                <li>Incorporating low impact aerobic activities such as stationary cycling enhances cardiovascular endurance and joint mobility while minimizing strain.</li>
                <li>Educational counselling on smoking cessation, weight management, and nutritional optimization prepares patients holistically for surgery.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Early Post Op Mobilization</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>On the first postoperative day, therapists guide patients through bed mobility exercises, gentle limb movements, and transfer training to promote circulation and prevent venous thromboembolism.</li>
                <li>Accelerated mobilisation protocols have demonstrated shortened length of stay without added risk of adverse events or readmissions.</li>
                <li>Under therapist supervision, patients progress from walker assisted gait to independence typically within two to four weeks.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Strength & Range of Motion Protocols</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Range of motion exercises begin immediately, targeting knee flexion goals of 90–100° by two weeks and 105–110° by six weeks post surgery.</li>
                <li>Quadriceps and hamstring strengthening commence at four to six weeks with 1–2 lb resistance progressing as tolerated.</li>
                <li>Continuous passive motion (CPM) devices may be used selectively to maintain joint mobility and reduce stiffness during the early postoperative period.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Progressive Functional & Gait Training</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>After initial strength gains, patients engage in advanced balance drills, stair negotiation, and proprioceptive activities to restore functional independence.</li>
                <li>Gait retraining on the water treadmill under controlled load conditions accelerates neuromuscular patterning and improves confidence.</li>
                <li>By 12 weeks post surgery, most patients achieve pain free ambulation, return to daily activities, and, where appropriate, resume occupational or recreational pursuits.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
