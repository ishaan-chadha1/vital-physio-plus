"use client"; // This component runs only on the client

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"; // Get stored theme
    document.documentElement.classList.add(savedTheme); // Apply the theme at the root level
    setTheme(savedTheme as "light" | "dark");
  }, []);

  return <div className={theme}>{children}</div>;
}
