import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ProtectedPage() {
  const supabase = await createClient(); // ✅ Await the Supabase client

  const { data: { user } } = await supabase.auth.getUser(); // ✅ Now this works fine
  

  if (!user) {
    return redirect("/sign-in"); // Redirect if user is not logged in
  }

  const userEmail = user.email; // Extract email
  console.log("🔹 Logged in user email:", userEmail);

  // ✅ Fetch only the logged-in user's data from Supabase
  const { data: geminiData, error } = await supabase
    .from("gemini_data")
    .select("*")
    .eq("patient_email", userEmail); // 🔹 Filter by logged-in user's email

  if (error) {
    console.error("❌ Error fetching user-specific data:", error.message);
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected page that you can only see as an authenticated user.
        </div>
      </div>

      <Link href="/elevenlabs" className="text-blue-500 underline">
        Access ElevenLabs AI
      </Link>
      <Link href="/chat" className="text-blue-500 underline">
        Access Gemini
      </Link>

      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your User Details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>

      <div>
        <h2 className="font-bold text-2xl mb-4">Your Gemini Data</h2>
        {geminiData && geminiData.length > 0 ? (
          <pre className="text-xs font-mono p-3 rounded border max-h-64 overflow-auto">
            {JSON.stringify(geminiData, null, 2)}
          </pre>
        ) : (
          <p>No data found ❌</p>
        )}
      </div>

      <div>
        <h2 className="font-bold text-2xl mb-4">Next Steps</h2>
        <FetchDataSteps />
      </div>
    </div>
  );
}
