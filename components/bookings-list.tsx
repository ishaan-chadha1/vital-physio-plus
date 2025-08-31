"use client";

export default function BookingsList({ userEmail }: { userEmail: string }) {
  return (
    <section className="max-w-4xl mx-auto px-6 mt-12">
      <h2 className="text-2xl font-bold mb-6">Booking Information</h2>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-lg mb-2">Contact Us to Schedule</h3>
        <p className="text-gray-700 mb-4">
          To book an appointment, please contact us directly:
        </p>
        <div className="space-y-2">
          <p><strong>Phone:</strong> [Your Phone Number]</p>
          <p><strong>Email:</strong> [Your Email]</p>
          <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </section>
  );
}
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
