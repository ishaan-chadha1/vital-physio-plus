import { Metadata } from 'next';
import ErgonomicsWorkFromHomeContent from './content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Work-from-Home Ergonomics—Expert Physiotherapy Tips for IT Professionals | VitalPhysio⁺",
    description: "Physiotherapy-certified ergonomic tips for IT professionals working from home in Bengaluru. Expert guidance on proper workstation setup, posture correction, and preventing remote work injuries.",
    keywords: [
      "work from home ergonomics",
      "physiotherapy Bengaluru",
      "IT professionals posture",
      "remote work setup",
      "home office ergonomics",
      "computer workstation setup",
      "neck pain prevention",
      "VitalPhysio Plus"
    ].join(", "),
    openGraph: {
      title: "Work-from-Home Ergonomics—Expert Physiotherapy Tips for IT Professionals | VitalPhysio⁺",
      description: "Physiotherapy-certified ergonomic tips for IT professionals working from home in Bengaluru. Expert guidance on proper workstation setup, posture correction, and preventing remote work injuries.",
      url: "https://vitalphysio.plus/knowledge/ergonomics-work-from-home",
      siteName: "VitalPhysio⁺",
      images: [
        {
          url: "https://vitalphysio.plus/logo.png",
          width: 800,
          height: 600,
          alt: "VitalPhysio⁺ - Work From Home Ergonomics"
        }
      ],
      locale: "en_IN",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "Work-from-Home Ergonomics—Expert Physiotherapy Tips for IT Professionals | VitalPhysio⁺",
      description: "Physiotherapy-certified ergonomic tips for IT professionals working from home in Bengaluru. Expert guidance on proper workstation setup, posture correction, and preventing remote work injuries.",
      images: ["https://vitalphysio.plus/logo.png"]
    },
    alternates: {
      canonical: "https://vitalphysio.plus/knowledge/ergonomics-work-from-home"
    }
  };
}

export default function ErgonomicsWorkFromHomePage() {
  return <ErgonomicsWorkFromHomeContent />;
}
