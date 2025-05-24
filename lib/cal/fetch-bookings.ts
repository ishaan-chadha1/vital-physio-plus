export async function getUserBookings(email: string) {
    try {
      const res = await fetch(`https://api.cal.com/v2/bookings?attendeeEmail=${encodeURIComponent(email)}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.CAL_API_KEY}`, // ✅ CORRECT FORMAT
          "cal-api-version": "2024-08-13",
        },
        next: { revalidate: 60 },
      });
  
      const json = await res.json();
      // console.log("📡 Raw Cal API response:", json);
  
      if (!res.ok) {
        console.error("❌ Cal.com API failed:", json?.error?.message || res.statusText);
        return [];
      }
  
      return json.data || [];
    } catch (err) {
      console.error("🚨 Error fetching bookings:", err);
      return [];
    }
  }
  