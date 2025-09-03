import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "VitalPhysio⁺ | Advanced Physiotherapy & Rehabilitation",
  description: "VitalPhysio⁺ offers advanced physiotherapy, rehabilitation, and wellness services. Book your appointment today!",
  metadataBase: new URL('https://vitalphysio.plus'),
  openGraph: {
    title: "VitalPhysio⁺ | Advanced Physiotherapy & Rehabilitation",
    description: "VitalPhysio⁺ offers advanced physiotherapy, rehabilitation, and wellness services. Book your appointment today!",
    url: "https://vitalphysio.plus/",
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
        {children}
      </body>
    </html>
  );
}
