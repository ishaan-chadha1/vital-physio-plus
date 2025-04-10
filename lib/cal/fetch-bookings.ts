// lib/cal/fetch-bookings.ts

export async function getUserBookings(email: string) {
    const calApiKey = process.env.CAL_API_KEY; // securely read from env
    const endpoint = `https://api.cal.com/v2/bookings?attendeeEmail=${encodeURIComponent(email)}`;
  
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${calApiKey}`,
        "cal-api-version": "2024-08-13",
      },
      cache: "no-store", // always fetch fresh
    });
  
    if (!res.ok) {
      console.error("❌ Failed to fetch bookings:", res.statusText);
      return [];
    }
  
    const json = await res.json();
    return json.bookings || [];
  }
  