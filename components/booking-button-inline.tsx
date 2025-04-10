"use client";

import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

export function BookingButtonInline() {
  const [hasBooked, setHasBooked] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });

      cal("ui", {
        layout: "month_view",
        hideEventTypeDetails: false,
      });

      // ✅ Attach listener separately
      cal("on", {
        eventType: "cal.event_scheduled",
        callback: () => {
          setHasBooked(true);
          console.log("✅ Appointment booked!");
        },
      });
    })();
  }, []);

  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-semibold mb-4">Ready to book?</h2>

      <button
        data-cal-namespace="30min"
        data-cal-link="vital-physio/30min"
        data-cal-config='{"layout":"month_view"}'
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition"
      >
        Book Your Appointment Now
      </button>

      {hasBooked && (
        <p className="text-green-700 mt-4">
          ✅ Booking confirmed! We’ll see you soon.
        </p>
      )}
    </div>
  );
}
