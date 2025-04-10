// components/booking-button-inline.tsx
"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function BookingButtonInline() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });

      cal("ui", {
        layout: "month_view",
        hideEventTypeDetails: false,
        // ✅ No event handlers here
      });
    })();
  }, []);

  return (
    <div className="text-center">
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        data-cal-namespace="30min"
        data-cal-link="vital-physio/30min"
        data-cal-config='{"layout":"month_view"}'
      >
        Book Your Appointment
      </button>
    </div>
  );
}
