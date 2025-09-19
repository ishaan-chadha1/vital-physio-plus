import { Metadata } from 'next';
import DeskNeckPainContent from './content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Fix 'Tech Neck': 5 Physiotherapy Exercises for Desk-Related Neck Pain | VitalPhysio⁺",
    description: "Expert physiotherapy guide to fix tech neck for office workers in Bengaluru. Learn 5 proven exercises, ergonomic tips, and professional treatment options to relieve desk-related neck pain.",
    keywords: [
      "tech neck",
      "desk neck pain",
      "physiotherapy Bengaluru",
      "office ergonomics",
      "neck pain exercises",
      "computer neck pain",
      "forward head posture",
      "VitalPhysio Plus"
    ].join(", "),
    openGraph: {
      title: "Fix 'Tech Neck': 5 Physiotherapy Exercises for Desk-Related Neck Pain | VitalPhysio⁺",
      description: "Expert physiotherapy guide to fix tech neck for office workers in Bengaluru. Learn 5 proven exercises, ergonomic tips, and professional treatment options to relieve desk-related neck pain.",
      url: "https://vitalphysio.plus/knowledge/desk-neck-pain",
      siteName: "VitalPhysio⁺",
      images: [
        {
          url: "https://vitalphysio.plus/logo.png",
          width: 800,
          height: 600,
          alt: "VitalPhysio⁺ - Fix Tech Neck"
        }
      ],
      locale: "en_IN",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "Fix 'Tech Neck': 5 Physiotherapy Exercises for Desk-Related Neck Pain | VitalPhysio⁺",
      description: "Expert physiotherapy guide to fix tech neck for office workers in Bengaluru. Learn 5 proven exercises, ergonomic tips, and professional treatment options to relieve desk-related neck pain.",
      images: ["https://vitalphysio.plus/logo.png"]
    },
    alternates: {
      canonical: "https://vitalphysio.plus/knowledge/desk-neck-pain"
    }
  };
}

export default function DeskNeckPainPage() {
  return <DeskNeckPainContent />;
}
