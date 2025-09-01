import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "VitalPhysio⁺ | Advanced Physiotherapy & Rehabilitation",
  description: "VitalPhysio⁺ offers advanced physiotherapy, rehabilitation, and wellness services. Book your appointment today!",
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: "VitalPhysio⁺ | Advanced Physiotherapy & Rehabilitation",
    description: "VitalPhysio⁺ offers advanced physiotherapy, rehabilitation, and wellness services. Book your appointment today!",
    url: "https://yourdomain.com/",
    siteName: "VitalPhysio⁺",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "VitalPhysio⁺ Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitalPhysio⁺ | Advanced Physiotherapy & Rehabilitation",
    description: "VitalPhysio⁺ offers advanced physiotherapy, rehabilitation, and wellness services. Book your appointment today!",
    images: ["/logo.png"],
    creator: "@yourtwitterhandle"
  },
  alternates: {
    canonical: "https://yourdomain.com/"
  },
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
