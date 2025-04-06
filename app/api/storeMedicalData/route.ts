import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// 🔹 Handle GET request (Retrieve all records or a specific one)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id"); // Optional: Fetch single record

    let query = supabase.from("eleven_data").select("*");

    if (sessionId) {
      query = query.eq("session_id", sessionId);
    }

    const { data, error } = await query;

    if (error) {
      console.error("❌ Error fetching data from Supabase:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });

  } catch (err) {
    console.error("❌ Unexpected error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// 🔹 Handle POST request (Create a new entry)

export async function POST(req: Request) {
}



// 🔹 Handle PUT request (Update an entry)
export async function PUT(req: Request) {
  try {
    const { session_id, name, email, phone, chatHistory, extractedJson } = await req.json();

    if (!session_id) {
      return NextResponse.json({ success: false, error: "Session ID is required." }, { status: 400 });
    }

    // Update entry in Supabase
    const { error } = await supabase.from("eleven_data").update({
      patient_name: name,
      patient_email: email,
      patient_phone: phone,
      chat_history: chatHistory,
      extracted_json: extractedJson,
    }).eq("session_id", session_id);

    if (error) {
      console.error("❌ Error updating entry:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log("✅ Entry updated successfully!");
    return NextResponse.json({ success: true, message: "Data updated successfully!" });

  } catch (err) {
    console.error("❌ Unexpected error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// 🔹 Handle DELETE request (Delete an entry)
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json({ success: false, error: "Session ID is required." }, { status: 400 });
    }

    // Delete entry from Supabase
    const { error } = await supabase.from("eleven_data").delete().eq("session_id", sessionId);

    if (error) {
      console.error("❌ Error deleting entry:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log("✅ Entry deleted successfully!");
    return NextResponse.json({ success: true, message: "Data deleted successfully!" });

  } catch (err) {
    console.error("❌ Unexpected error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}