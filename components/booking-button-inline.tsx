// components/booking-button-inline.tsx
"use client";

export function BookingButtonInline() {
  const handleBookingClick = () => {
    // Redirect to contact form instead
    window.location.href = "/contact";
  };

  return (
    <div className="text-center">
      <button
        onClick={handleBookingClick}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Contact Us to Book
      </button>
      </div>
  );
}
