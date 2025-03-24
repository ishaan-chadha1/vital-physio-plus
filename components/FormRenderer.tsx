"use client";

import React, { useState } from "react";

type QuestionType = {
  type: "input";
  fieldType: "text" | "number" | "select" | "date";
  label: string;
  options?: string[];
};

type Props = {
  question: QuestionType;
  onSubmit: (answer: string) => void;
};

export default function FormRenderer({ question, onSubmit }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSubmit(value);
    setValue(""); // Clear field after submission
  };

  const renderField = () => {
    switch (question.fieldType) {
      case "text":
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={question.label}
            className="w-full p-3 rounded-xl border border-gray-300 shadow-sm"
          />
        );
      case "number":
        return (
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={question.label}
            className="w-full p-3 rounded-xl border border-gray-300 shadow-sm"
          />
        );
      case "date":
        return (
          <input
            type="date"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 shadow-sm"
          />
        );
      case "select":
        return (
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 shadow-sm"
          >
            <option value="">-- Select --</option>
            {question.options?.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white p-4 rounded-xl shadow-lg space-y-4"
    >
      <label className="block font-semibold text-gray-700">
        {question.label}
      </label>
      {renderField()}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
