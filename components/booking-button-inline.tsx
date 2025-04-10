import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

export function BookingButtonInline() {
  const [hasBooked, setHasBooked] = useState(false);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });

      // UI config (no event handler here!)
      cal("ui", {
        layout: "month_view",
        hideEventTypeDetails: false,
      });

      // ✅ Attach the event listener separately
      cal("on", {
        eventType: "bookingSuccessful",
        callback: () => {
          setHasBooked(true);
          console.log("✅ Booking completed!");
        },
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

      {hasBooked && (
        <p className="mt-4 text-green-600 font-medium">
          ✅ Booking confirmed!
        </p>
      )}
    </div>
  );
}
