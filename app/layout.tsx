import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from 'next';
import Script from 'next/script';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VitalPhysio⁺ | Advanced Physiotherapy Clinic in Bellandur, Bengaluru",
  description: "Leading physiotherapy and rehabilitation clinic in Bengaluru. We specialize in sports injury, neurological, and post-surgical rehab using cutting-edge technology. Book your consultation today.",

  // --- 3. ADD THIS ICONS OBJECT ---
  // This points to your file in public/logo1.png
  icons: {
    icon: '/logo1.png', // Main favicon
    shortcut: '/logo1.png', // For older browsers
    apple: '/logo1.png', // For Apple 'add to home screen'
  },
  // ---------------------------------

  keywords: "physiotherapy Bengaluru, advanced physiotherapy clinic, sports injury rehabilitation, neurological rehabilitation, post-surgical rehab, VitalPhysio⁺, Bellandur physiotherapy, physiotherapy clinic near me",
  metadataBase: new URL('https://vitalphysio.plus'),
  openGraph: {
    title: "VitalPhysio⁺ | Advanced Physiotherapy Clinic in Bellandur, Bengaluru",
    description: "Leading physiotherapy and rehabilitation clinic in Bengaluru. We specialize in sports injury, neurological, and post-surgical rehab using cutting-edge technology.",
    url: "https://vitalphysio.plus/",
    siteName: "VitalPhysio⁺",
    images: [
      {
        url: "/VitalPhysio+.png",
        width: 1200,
        height: 630,
        alt: "VitalPhysio⁺ Advanced Physiotherapy Clinic in Bengaluru",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitalPhysio⁺ | Advanced Physiotherapy Clinic in Bellandur, Bengaluru",
    description: "Leading physiotherapy and rehabilitation clinic in Bengaluru. We specialize in sports injury, neurological, and post-surgical rehab using cutting-edge technology.",
    images: ["/VitalPhysio+.png"],
  },
  alternates: {
    canonical: "https://vitalphysio.plus/"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add JSON-LD structured data */}
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "VitalPhysio⁺",
              "description": "Advanced physiotherapy and rehabilitation services in Bengaluru.",
              "url": "https://vitalphysio.plus/",
              "logo": "https://vitalphysio.plus/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2nd Floor, P V Complex, Opp. Iblur Lake Park",
                "addressLocality": "Bellandur",
                "addressRegion": "Karnataka",
                "postalCode": "560103",
                "addressCountry": "IN"
              },
              "telephone": "+91 80473 59900",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.921956",
                "longitude": "77.665225"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "sameAs": [
                "https://www.facebook.com/vitalphysio",
                "https://www.instagram.com/vitalphysio"
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ChatWidget />
        {children}
      </body>
    </html>
  );
}
