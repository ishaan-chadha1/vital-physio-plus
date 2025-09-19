import { Metadata } from 'next';
import SportsInjuryFirstAidContent from './content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sports Injury First Aid—Expert 5-Step Emergency Plan | VitalPhysio⁺",
    description: "Expert sports injury first aid guide from VitalPhysio⁺ Bengaluru. Learn the 5-step plan, RICE method, and when to seek physiotherapy for optimal recovery and return to sport.",
    keywords: [
      "sports injury first aid",
      "RICE method",
      "physiotherapy Bengaluru",
      "sports rehab",
      "injury recovery",
      "sports medicine",
      "emergency sports treatment",
      "VitalPhysio Plus"
    ].join(", "),
    openGraph: {
      title: "Sports Injury First Aid—Expert 5-Step Emergency Plan | VitalPhysio⁺",
      description: "Expert sports injury first aid guide from VitalPhysio⁺ Bengaluru. Learn the 5-step plan, RICE method, and when to seek physiotherapy for optimal recovery and return to sport.",
      url: "https://vitalphysio.plus/knowledge/sports-injury-first-aid",
      siteName: "VitalPhysio⁺",
      images: [
        {
          url: "https://vitalphysio.plus/logo.png",
          width: 800,
          height: 600,
          alt: "VitalPhysio⁺ - Sports Injury First Aid"
        }
      ],
      locale: "en_IN",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "Sports Injury First Aid—Expert 5-Step Emergency Plan | VitalPhysio⁺",
      description: "Expert sports injury first aid guide from VitalPhysio⁺ Bengaluru. Learn the 5-step plan, RICE method, and when to seek physiotherapy for optimal recovery and return to sport.",
      images: ["https://vitalphysio.plus/logo.png"]
    },
    alternates: {
      canonical: "https://vitalphysio.plus/knowledge/sports-injury-first-aid"
    }
  };
}

export default function SportsInjuryFirstAidPage() {
  return <SportsInjuryFirstAidContent />;
}
