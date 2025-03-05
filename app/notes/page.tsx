"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [geminiData, setGeminiData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      setLoading(true); // Show loading state

      const { data, error } = await supabase.from("gemini_data").select("*");

      if (error) {
        console.error("❌ Error fetching data:", error.message);
      } else {
        setGeminiData(data);
        console.log("📜 Queried Data from Supabase:", data);
      }

      setLoading(false); // Hide loading state after fetching data
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Gemini Data from Supabase</h1>
      {loading ? (
        <p>Loading data... ⏳</p>
      ) : geminiData?.length ? (
        <pre>{JSON.stringify(geminiData, null, 2)}</pre>
      ) : (
        <p>No data available ❌</p>
      )}
    </div>
  );
}
