import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Inter } from "next/font/google"; // Changed font to Inter (Google recognized)
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "@/app/globals.css";
import Image from "next/image";

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
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="w-full flex justify-center bg-white border-b border-gray-200 h-16">
            <div className="w-full max-w-5xl flex justify-between items-center px-5 text-sm">
              {/* Left: Title */}
              <div className="flex gap-5 items-center font-semibold">
                <Link href="/">Welcome to Vital Physio +</Link>
              </div>

              {/* Right: Logo + Auth */}
              <div className="flex items-center gap-4">
                {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}

                <div className="shrink-2">
                  <Image
                    src="/logo.png" // Relative to /public
                    alt="Vital Physio Plus Logo"
                    width={70} // ✅ Adjusted size
                    height={70}
                    className="object-contain" // Optional: rounded avatar style
                    priority
                  />
                </div>
              </div>
            </div>
          </nav>
          {/* 👇 REMOVE THIS WRAPPER with fixed white bg */}
          {/* Instead of forcing all pages into white, let each page choose */}
          {children}
          {/* OPTIONAL: move footer into pages that need it */}
        </ThemeProvider>
      </body>
    </html>
  );
}
