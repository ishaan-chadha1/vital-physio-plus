"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [geminiData, setGeminiData] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("gemini_data").select("*");

      if (error) {
        console.error("❌ Error fetching data:", error.message);
        return;
      }

      setGeminiData(data);
      console.log("📜 Queried Data from Supabase:", data);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Gemini Data from Supabase</h1>
      <pre>{JSON.stringify(geminiData, null, 2)}</pre>
    </div>
  );
}
