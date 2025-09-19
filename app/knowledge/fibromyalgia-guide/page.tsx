import { Metadata } from 'next';
import FibromyalgiaGuideContent from './content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "A Physiotherapist's Guide to Managing Fibromyalgia Pain | VitalPhysio⁺",
    description: "Comprehensive physiotherapy guide for fibromyalgia management at VitalPhysio⁺ Bengaluru. Learn how structured exercise, pain relief modalities, and self-management strategies can improve quality of life for those with fibromyalgia.",
    keywords: [
      "fibromyalgia",
      "physiotherapy Bengaluru",
      "chronic pain management",
      "fibromyalgia exercises",
      "pain relief",
      "fibromyalgia treatment",
      "chronic fatigue management",
      "VitalPhysio Plus"
    ].join(", "),
    openGraph: {
      title: "A Physiotherapist's Guide to Managing Fibromyalgia Pain | VitalPhysio⁺",
      description: "Comprehensive physiotherapy guide for fibromyalgia management at VitalPhysio⁺ Bengaluru. Learn how structured exercise, pain relief modalities, and self-management strategies can improve quality of life for those with fibromyalgia.",
      url: "https://vitalphysio.plus/knowledge/fibromyalgia-guide",
      siteName: "VitalPhysio⁺",
      images: [
        {
          url: "https://vitalphysio.plus/logo.png",
          width: 800,
          height: 600,
          alt: "Fibromyalgia pain management and physiotherapy treatment strategies guide"
        }
      ],
      locale: "en_IN",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "A Physiotherapist's Guide to Managing Fibromyalgia Pain | VitalPhysio⁺",
      description: "Comprehensive physiotherapy guide for fibromyalgia management at VitalPhysio⁺ Bengaluru. Learn how structured exercise, pain relief modalities, and self-management strategies can improve quality of life for those with fibromyalgia.",
      images: ["https://vitalphysio.plus/logo.png"]
    },
    alternates: {
      canonical: "https://vitalphysio.plus/knowledge/fibromyalgia-guide"
    }
  };
}

export default function FibromyalgiaGuidePage() {
  return <FibromyalgiaGuideContent />;
}
