import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Vital Physio +",
  description: "Welcome to Vital Physio +, an AI-powered physiotherapy clinic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The body now only applies the font and renders the page content */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
