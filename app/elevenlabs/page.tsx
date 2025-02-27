"use client";

import { useState, useEffect } from "react";
import { Conversation } from "@/components/conversation";
import { X } from "lucide-react";

export default function ElevenLabsPage() {
  const [showWidget, setShowWidget] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevent scrolling
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling on unmount
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blue-500">
      {/* Full-screen AI Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <Conversation />
      </div>

      {/* Close Button */}
      {/* <button
        className="absolute top-5 right-5 text-white text-3xl"
        onClick={() => setShowWidget(false)}
      >
        <X />
      </button> */}
    </div>
  );
}
