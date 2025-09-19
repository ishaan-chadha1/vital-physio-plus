import { Metadata } from "next";
import KneePainExercisesContent from "./content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "5 Key Exercises After Knee Surgery | Post-Surgical Rehabilitation Bengaluru | VitalPhysio⁺",
    description: "Expert guide to post-surgical knee rehabilitation with 5 essential exercises at VitalPhysio⁺ Bengaluru. Learn about water treadmill therapy and advanced recovery modalities for optimal knee surgery recovery.",
    keywords: "knee surgery exercises Bengaluru, post-surgical rehabilitation, knee replacement recovery, water treadmill therapy, VitalPhysio⁺, physiotherapy after knee surgery",
    openGraph: {
      title: "5 Key Exercises After Knee Surgery | Post-Surgical Rehabilitation Bengaluru | VitalPhysio⁺",
      description: "Expert guide to post-surgical knee rehabilitation with 5 essential exercises at VitalPhysio⁺ Bengaluru. Learn about water treadmill therapy and advanced recovery modalities.",
      url: "https://vitalphysio.plus/knowledge/knee-pain-exercises",
      siteName: "VitalPhysio⁺",
      images: [
        {
          url: "https://vitalphysio.plus/images/knee-exercise-rehabilitation.jpg",
          width: 800,
          height: 600,
          alt: "Patient performing knee strengthening exercises during post-surgical rehabilitation therapy"
        }
      ],
      locale: "en_IN",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "5 Key Exercises After Knee Surgery | Post-Surgical Rehabilitation Bengaluru | VitalPhysio⁺",
      description: "Expert guide to post-surgical knee rehabilitation with 5 essential exercises at VitalPhysio⁺ Bengaluru."
    }
  };
}

export default function KneePainExercisesPage() {
  return <KneePainExercisesContent />;
}