export async function getUserBookings(email: string) {
    try {
      const res = await fetch(
        `https://api.cal.com/v2/bookings?attendeeEmail=${encodeURIComponent(email)}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.CAL_API_KEY}`, // ✅ MUST use Bearer
            "cal-api-version": "2024-08-13",
          },
          next: { revalidate: 10 }, // Optional revalidation
        }
      );
  
      const json = await res.json();
  
      if (!res.ok) {
        console.error("❌ Cal.com API failed:", json);
        return [];
      }
  
      console.log("📡 Raw Cal API response:", json);
  
      return json.data || [];
    } catch (err) {
      console.error("❌ Error fetching bookings:", err);
      return [];
    }
  }
  