import { Metadata } from "next";
import LowBackPainContent from "./content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Physiotherapy for Chronic Low Back Pain in Bengaluru | VitalPhysio⁺",
    description: "Evidence-based physiotherapy solutions for chronic low back pain at VitalPhysio⁺ Bengaluru. Learn proven recovery pathways, debunk myths, and discover effective treatment options for lasting relief.",
    keywords: "low back pain physiotherapy Bengaluru, chronic back pain treatment, VitalPhysio⁺, posture correction, core strengthening, manual therapy Bengaluru",
    openGraph: {
      title: "Physiotherapy for Chronic Low Back Pain in Bengaluru | VitalPhysio⁺",
      description: "Evidence-based physiotherapy solutions for chronic low back pain at VitalPhysio⁺ Bengaluru. Learn proven recovery pathways and effective treatment options.",
      url: "https://vitalphysio.plus/knowledge/low-back-pain",
      type: "article",
      siteName: "VitalPhysio⁺"
    },
    twitter: {
      card: "summary_large_image",
      title: "Physiotherapy for Chronic Low Back Pain in Bengaluru | VitalPhysio⁺",
      description: "Evidence-based physiotherapy solutions for chronic low back pain at VitalPhysio⁺ Bengaluru."
    }
  };
}

export default function LowBackPainPage() {
  return <LowBackPainContent />;
}