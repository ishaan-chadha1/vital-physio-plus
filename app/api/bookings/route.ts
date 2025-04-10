import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");

  if (!email) return NextResponse.json([], { status: 400 });

  const res = await fetch(`https://api.cal.com/v2/bookings?attendeeEmail=${encodeURIComponent(email)}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CAL_API_KEY}`,
      "cal-api-version": "2024-08-13",
    },
  });

  if (!res.ok) {
    console.error("❌ Cal.com API failed");
    return NextResponse.json([], { status: 500 });
  }

  const json = await res.json();
  return NextResponse.json(json.data || []);
}
