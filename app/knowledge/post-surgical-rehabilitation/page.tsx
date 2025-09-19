import { Metadata } from 'next';
import PostSurgicalRehabilitationContent from './content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Post-Surgical Rehabilitation—Expert Recovery after Orthopedic Surgery | VitalPhysio⁺",
    description: "Evidence-based post-surgical rehabilitation in Bengaluru. Expert physiotherapy for optimal recovery after knee replacement, fracture repair, ligament reconstruction, and spine surgery.",
    keywords: [
      "post-surgical rehabilitation",
      "orthopedic surgery recovery",
      "physiotherapy Bengaluru",
      "knee replacement recovery",
      "fracture repair rehabilitation",
      "post-operative physiotherapy",
      "surgical recovery Bellandur",
      "VitalPhysio Plus"
    ].join(", "),
    openGraph: {
      title: "Post-Surgical Rehabilitation—Expert Recovery after Orthopedic Surgery | VitalPhysio⁺",
      description: "Evidence-based post-surgical rehabilitation in Bengaluru. Expert physiotherapy for optimal recovery after knee replacement, fracture repair, ligament reconstruction, and spine surgery.",
      url: "https://vitalphysio.plus/knowledge/post-surgical-rehabilitation",
      siteName: "VitalPhysio⁺",
      images: [
        {
          url: "https://vitalphysio.plus/logo.png",
          width: 800,
          height: 600,
          alt: "VitalPhysio⁺ - Post-Surgical Rehabilitation"
        }
      ],
      locale: "en_IN",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "Post-Surgical Rehabilitation—Expert Recovery after Orthopedic Surgery | VitalPhysio⁺",
      description: "Evidence-based post-surgical rehabilitation in Bengaluru. Expert physiotherapy for optimal recovery after knee replacement, fracture repair, ligament reconstruction, and spine surgery.",
      images: ["https://vitalphysio.plus/logo.png"]
    },
    alternates: {
      canonical: "https://vitalphysio.plus/knowledge/post-surgical-rehabilitation"
    }
  };
}

export default function PostSurgicalRehabilitationPage() {
  return <PostSurgicalRehabilitationContent />;
}
