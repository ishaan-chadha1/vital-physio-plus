import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const { name, email, phone, chatHistory, extractedJson } = await req.json();

    // Insert data into Supabase
    const { error } = await supabase.from("eleven_data").insert([
      {
        session_id: crypto.randomUUID(), // Unique session ID
        timestamp: new Date().toISOString(),
        patient_name: name,
        patient_email: email,
        patient_phone: phone,
        chat_history: chatHistory, // Stores full chat history
        extracted_json: extractedJson, // Stores structured JSON
      },
    ]);

    if (error) {
        console.error("❌ Error saving data to Supabase:", error.message);
  
        // Handle unique email constraint violation
        if (error.code === "23505") {
          return NextResponse.json(
            { success: false, error: "Email already exists in the database." },
            { status: 400 }
          );
        }
  
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }
  
      console.log("✅ Data successfully saved to Supabase!");
      return NextResponse.json({ success: true, message: "Data stored successfully!" });
  
    } catch (err) {
      console.error("❌ Unexpected error:", err);
      return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
