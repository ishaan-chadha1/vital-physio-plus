import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { InfoIcon } from "lucide-react";
import GeminiIntake from "@/components/gemini-intake";
import { BookingButtonInline } from "@/components/booking-button-inline";
export default async function ProtectedPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const userEmail = user.email;

  const { data: geminiData, error } = await supabase
    .from("gemini_data")
    .select("*")
    .eq("patient_email", userEmail);

  if (error) {
    console.error("❌ Error fetching user-specific data:", error.message);
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-16">
      {/* HERO: Onboarding Flow */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#38bdf8] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Vital Physio +
          </h1>
          <p className="text-lg leading-relaxed">
            Before your visit, we’ll gather some quick medical info to help your
            physiotherapist prepare and personalize your treatment.
            <br />
            <br />
            You can choose from three intake methods below. Once done, you'll be
            directed to book your appointment.
          </p>
        </div>
      </section>

      {/* PATIENT INTAKE OPTIONS */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Choose a Patient Intake Method
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Chat (Gemini)",
              href: "https://vital-physio-plus.vercel.app/chat",
              desc: "Use our interactive chat to answer questions about your condition and history.",
            },
            {
              title: "Intake Form",
              href: "https://vital-physio-plus.vercel.app/form",
              desc: "Fill out a simple, secure medical intake form at your own pace.",
            },
            {
              title: "Voice AI (ElevenLabs)",
              href: "https://vital-physio-plus.vercel.app/elevenlabs",
              desc: "Talk it out naturally using our conversational AI — perfect for hands-free intake.",
            },
          ].map((method, idx) => (
            <Link
              key={idx}
              href={method.href}
              className="block bg-[#38bdf8] text-white p-6 rounded-xl hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-sm">{method.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="text-center py-16">
        <BookingButtonInline />

      </section>

      {/* OPTIONAL: Show user + data */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex gap-3 items-center bg-accent text-sm p-3 px-5 rounded-md text-foreground mb-6">
          <InfoIcon size="16" strokeWidth={2} />
          You’re logged in as <strong>{userEmail}</strong>
        </div>

        <GeminiIntake geminiData={geminiData} />
      </div>
    </div>
  );
}
