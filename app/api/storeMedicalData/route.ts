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
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      chatHistory,
      extractedJson = {}
    } = body;

    // 🔍 Validate base chatHistory
    if (!chatHistory || typeof chatHistory !== "object") {
      return NextResponse.json({ success: false, error: "Missing or invalid chatHistory" }, { status: 400 });
    }

    // 🛠️ Fix chatHistory.messages if it's a single object or string
    if (!Array.isArray(chatHistory.messages)) {
      if (typeof chatHistory.messages === "object" && chatHistory.messages !== null) {
        chatHistory.messages = [chatHistory.messages];
      } else {
        return NextResponse.json({ success: false, error: "chatHistory.messages must be an array or valid object" }, { status: 400 });
      }
    }

    // ✅ Ensure each message has required structure
    const isValidMessageArray = chatHistory.messages.every(
      (msg: any) =>
        msg &&
        typeof msg === "object" &&
        msg.id &&
        msg.sender &&
        msg.content &&
        msg.timestamp
    );

    if (!isValidMessageArray) {
      return NextResponse.json({ success: false, error: "Invalid message structure in chatHistory.messages" }, { status: 400 });
    }

    const { sessionId, timestamp } = chatHistory;

    // ✅ Basic Required Field Check
    if (!name || !email || !phone || !sessionId || !timestamp) {
      return NextResponse.json({ success: false, error: "Missing required patient fields" }, { status: 400 });
    }

    // 🧼 Serialize clean JSON to avoid nested serialization issues
    const cleanChatHistory = JSON.parse(JSON.stringify(chatHistory));
    const cleanExtractedJson = JSON.parse(JSON.stringify(extractedJson));

    // 🧾 Log Final Payload
    console.log("🚀 Final Supabase Insert Payload:", {
      sessionId,
      timestamp,
      name,
      email,
      phone,
      chatHistory: cleanChatHistory,
      extractedJson: cleanExtractedJson
    });

    // 📦 Store in Supabase
    const { error } = await supabase.from("eleven_data").insert([
      {
        session_id: sessionId,
        timestamp: timestamp,
        patient_name: name,
        patient_email: email,
        patient_phone: phone,
        chat_history: cleanChatHistory,
        extracted_json: cleanExtractedJson,
      }
    ]);

    if (error) {
      console.error("❌ Supabase insert error:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log("✅ Data stored successfully for session:", sessionId);
    return NextResponse.json({ success: true, message: "Data stored successfully!" });

  } catch (err: any) {
    console.error("❌ Unexpected error:", err.message);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
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