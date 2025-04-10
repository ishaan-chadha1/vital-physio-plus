"use client";

import { useEffect, useState } from "react";

export default function BookingsList({ userEmail }: { userEmail: string }) {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchBookings() {
    try {
      const res = await fetch(`/api/bookings?email=${encodeURIComponent(userEmail)}`);
      const json = await res.json();
      setBookings(json);
    } catch (error) {
      console.error("❌ Failed to fetch bookings:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBookings();
    const interval = setInterval(fetchBookings, 10000); // Poll every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const upcoming = bookings.filter(b => b.status === "accepted" && new Date(b.start) > new Date());

  return (
    <section className="max-w-4xl mx-auto px-6 mt-12">
      <h2 className="text-2xl font-bold mb-4">Your Upcoming Appointments</h2>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : upcoming.length > 0 ? (
        <ul className="space-y-4">
          {upcoming.map((booking: any) => (
            <li key={booking.uid} className="border p-4 rounded shadow-sm">
              <p className="font-semibold text-blue-700">{booking.title}</p>
              <p className="text-gray-600 text-sm">
                {new Date(booking.start).toLocaleString()} →{" "}
                {new Date(booking.end).toLocaleTimeString()}
              </p>
              <a
                href={booking.meetingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 underline mt-2 inline-block"
              >
                Join Meeting
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">You have no upcoming appointments.</p>
      )}
    </section>
  );
}
