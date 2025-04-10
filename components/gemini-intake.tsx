"use client";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function GeminiIntake({ geminiData }: { geminiData: any[] }) {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const latest = geminiData?.[0];

  if (!latest) {
    return (
      <section className="w-full">
        <h2 className="font-bold text-2xl mb-4">Your Gemini Intake</h2>
        <p className="text-gray-600">No intake submitted yet.</p>
      </section>
    );
  }

  const { patient_name, patient_phone, patient_email, extracted_json, chat_history } = latest;

  return (
    <section className="w-full">
      <h2 className="font-bold text-2xl mb-6">Your Gemini Intake</h2>

      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col gap-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Name:</strong> {patient_name}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Email:</strong> {patient_email}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Phone:</strong> {patient_phone}
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setIsSummaryOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition"
          >
            View Summary
          </button>
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition"
          >
            View Chat History
          </button>
        </div>
      </div>

      {/* Summary Modal */}
      <Dialog open={isSummaryOpen} onClose={() => setIsSummaryOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-6 overflow-y-auto max-h-[90vh]">
            <Dialog.Title className="text-lg font-bold mb-4">Extracted Summary</Dialog.Title>
            <pre className="text-sm whitespace-pre-wrap text-gray-700">
              {formatSummary(extracted_json)}
            </pre>
            <div className="text-right mt-4">
              <button
                onClick={() => setIsSummaryOpen(false)}
                className="text-blue-600 hover:underline text-sm"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Chat History Modal */}
      <Dialog open={isChatOpen} onClose={() => setIsChatOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-6 overflow-y-auto max-h-[90vh]">
            <Dialog.Title className="text-lg font-bold mb-4">Chat History</Dialog.Title>
            <div className="flex flex-col gap-3 text-sm">
              {chat_history?.map((msg: any, i: number) => (
                <div key={msg.id} className="p-3 rounded bg-gray-100">
                  <p className="text-xs text-gray-500 mb-1">
                    {msg.sender === "ai" ? "AI" : "You"} — {new Date(msg.timestamp).toLocaleString()}
                  </p>
                  <p className="whitespace-pre-wrap text-gray-800">{msg.content}</p>
                </div>
              ))}
            </div>
            <div className="text-right mt-6">
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-blue-600 hover:underline text-sm"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}

// Optional utility to cleanly format the extracted JSON as readable summary
function formatSummary(data: any): string {
  if (!data) return "No summary available.";

  const lines: string[] = [];

  if (data.demographics) {
    lines.push("👤 Demographics:");
    for (const [key, value] of Object.entries(data.demographics)) {
      lines.push(`• ${key}: ${value}`);
    }
    lines.push("");
  }

  if (data.chiefComplaint) {
    lines.push("🩺 Chief Complaint:");
    for (const [key, value] of Object.entries(data.chiefComplaint)) {
      lines.push(`• ${key}: ${value}`);
    }
    lines.push("");
  }

  if (data.historyOfPresentIllness) {
    lines.push("🕒 History of Present Illness:");
    for (const [key, value] of Object.entries(data.historyOfPresentIllness)) {
      lines.push(`• ${key}: ${value}`);
    }
    lines.push("");
  }

  if (data.diagnosticImpressions?.length > 0) {
    lines.push("🧠 Diagnostic Impressions:");
    data.diagnosticImpressions.forEach((diag, idx) => {
      lines.push(`• ${diag["skos:prefLabel"]}`);
    });
    lines.push("");
  }

  if (data.socialHistory) {
    lines.push("🏡 Social History:");
    for (const [key, value] of Object.entries(data.socialHistory)) {
      lines.push(`• ${key}: ${value}`);
    }
  }

  return lines.join("\n");
}
