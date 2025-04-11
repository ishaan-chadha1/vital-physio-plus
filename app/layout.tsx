import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Inter } from "next/font/google"; // Changed font to Inter (Google recognized)
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Vital Physio +",
  description: "Welcome to Vital Physio +, an AI-powered physiotherapy clinic.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* NAVBAR (white) */}
          <nav className="w-full flex justify-center bg-white border-b border-gray-200 h-16">
            <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
              <div className="flex gap-5 items-center font-semibold">
                <Link href="/">Welcome to Vital Physio +</Link>
              </div>
              {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
          </nav>

          {/* CONTENT + FOOTER (blue bg) */}
          <div className="w-full bg-[#38bdf8] flex flex-col items-center">
            <div className="flex flex-col gap-20 max-w-5xl p-5 w-full">
              {children}
            </div>

            <footer className="w-full flex items-center justify-center border-t border-white/20 text-white text-center text-xs gap-8 py-16">
              <ThemeSwitcher />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
