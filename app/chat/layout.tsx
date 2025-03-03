import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider"; // Import the fixed ThemeProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Chat Interface",
  description: "A modern AI chat interface built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider> {/* Apply the theme globally */}
          <div className="flex flex-col gap-20 max-w-5xl p-5">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
