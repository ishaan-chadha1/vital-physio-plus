export async function getUserBookings(email: string) {
    const calApiKey = process.env.CAL_API_KEY;
    const endpoint = `https://api.cal.com/v2/bookings?attendeeEmail=${encodeURIComponent(email)}`;
  
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${calApiKey}`,
        "cal-api-version": "2024-08-13",
      },
      cache: "no-store",
    });
  
    const json = await res.json();
    console.log("📡 Raw Cal API response:", json); // ✅ <— add this here
  
    if (!res.ok) {
      console.error("❌ Cal.com API failed:", res.statusText);
      return [];
    }
  
    return json.data || [];
  }
  