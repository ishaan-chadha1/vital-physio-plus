import { Metadata } from 'next';
import ElectrotherapyModalitiesContent from './content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "What is Electrotherapy? TENS, IFT & Ultrasound Explained | VitalPhysio⁺",
    description: "Comprehensive guide to electrotherapy modalities at VitalPhysio⁺ Bengaluru. Learn how TENS, ultrasound, laser therapy, and shockwave treatments accelerate healing and provide pain relief.",
    keywords: [
      "electrotherapy",
      "TENS therapy",
      "ultrasound therapy",
      "laser therapy",
      "physiotherapy Bengaluru",
      "pain relief modalities",
      "shockwave therapy",
      "VitalPhysio Plus"
    ].join(", "),
    openGraph: {
      title: "What is Electrotherapy? TENS, IFT & Ultrasound Explained | VitalPhysio⁺",
      description: "Comprehensive guide to electrotherapy modalities at VitalPhysio⁺ Bengaluru. Learn how TENS, ultrasound, laser therapy, and shockwave treatments accelerate healing and provide pain relief.",
      url: "https://vitalphysio.plus/knowledge/electrotherapy-modalities",
      siteName: "VitalPhysio⁺",
      images: [
        {
          url: "https://vitalphysio.plus/logo.png",
          width: 800,
          height: 600,
          alt: "Electrotherapy modalities and TENS therapy equipment for physiotherapy treatment"
        }
      ],
      locale: "en_IN",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "What is Electrotherapy? TENS, IFT & Ultrasound Explained | VitalPhysio⁺",
      description: "Comprehensive guide to electrotherapy modalities at VitalPhysio⁺ Bengaluru. Learn how TENS, ultrasound, laser therapy, and shockwave treatments accelerate healing and provide pain relief.",
      images: ["https://vitalphysio.plus/logo.png"]
    },
    alternates: {
      canonical: "https://vitalphysio.plus/knowledge/electrotherapy-modalities"
    }
  };
}

export default function ElectrotherapyModalitiesPage() {
  return <ElectrotherapyModalitiesContent />;
}
