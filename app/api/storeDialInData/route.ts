import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// 🔹 Handle GET request (Retrieve all appointments or a specific one)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const appointmentId = searchParams.get("id"); // Optional: Fetch single appointment

    let query = supabase.from("dial_in_appointments").select("*");

    if (appointmentId) {
      query = query.eq("id", appointmentId);
    }

    const { data, error } = await query;

    if (error) {
      console.error("❌ Error fetching appointment data:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });

  } catch (err) {
    console.error("❌ Unexpected error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// 🔹 Handle POST request (Create a new appointment)
export async function POST(req: Request) {
  try {
    const {
      patientName,
      patientContact,
      appointmentDate,
      appointmentType,
      doctorAssigned,
      chatHistory,
      backupBookingDetails,
    } = await req.json();

    // Insert data into Supabase
    const { error } = await supabase.from("dial_in_appointments").insert([
      {
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        patient_name: patientName,
        patient_contact: patientContact,
        appointment_date: appointmentDate,
        appointment_type: appointmentType,
        doctor_assigned: doctorAssigned,
        chat_history: chatHistory, // JSON format
        backup_booking_details: backupBookingDetails,
      },
    ]);

    if (error) {
      console.error("❌ Error saving appointment data:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log("✅ Appointment data saved successfully!");
    return NextResponse.json({ success: true, message: "Appointment stored successfully!" });

  } catch (err) {
    console.error("❌ Unexpected error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// 🔹 Handle PUT request (Update appointment details)
export async function PUT(req: Request) {
  try {
    const { id, patientName, patientContact, appointmentDate, appointmentType, doctorAssigned, chatHistory, backupBookingDetails } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, error: "Appointment ID is required." }, { status: 400 });
    }

    // Update appointment in Supabase
    const { error } = await supabase.from("dial_in_appointments").update({
      patient_name: patientName,
      patient_contact: patientContact,
      appointment_date: appointmentDate,
      appointment_type: appointmentType,
      doctor_assigned: doctorAssigned,
      chat_history: chatHistory,
      backup_booking_details: backupBookingDetails,
    }).eq("id", id);

    if (error) {
      console.error("❌ Error updating appointment:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log("✅ Appointment updated successfully!");
    return NextResponse.json({ success: true, message: "Appointment updated successfully!" });

  } catch (err) {
    console.error("❌ Unexpected error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// 🔹 Handle DELETE request (Delete an appointment)
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const appointmentId = searchParams.get("id");

    if (!appointmentId) {
      return NextResponse.json({ success: false, error: "Appointment ID is required." }, { status: 400 });
    }

    // Delete appointment from Supabase
    const { error } = await supabase.from("dial_in_appointments").delete().eq("id", appointmentId);

    if (error) {
      console.error("❌ Error deleting appointment:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log("✅ Appointment deleted successfully!");
    return NextResponse.json({ success: true, message: "Appointment deleted successfully!" });

  } catch (err) {
    console.error("❌ Unexpected error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
