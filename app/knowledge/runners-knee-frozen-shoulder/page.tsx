import { Metadata } from 'next';
import RunnersKneeFrozenShoulderContent from './content';

export const metadata: Metadata = {
  title: "Runner's Knee and Frozen Shoulder Treatment in Bengaluru | VitalPhysio⁺",
  description: "Expert physiotherapy treatment for runner's knee and frozen shoulder in Bengaluru. Get accurate diagnosis and effective treatment plans for complete recovery.",
  keywords: "runner's knee, frozen shoulder, patellofemoral pain syndrome, adhesive capsulitis, Bengaluru, sports physiotherapy, knee pain treatment, shoulder stiffness, sports injury",
  openGraph: {
    title: "Runner's Knee and Frozen Shoulder Treatment in Bengaluru | VitalPhysio⁺",
    description: "Expert physiotherapy treatment for runner's knee and frozen shoulder in Bengaluru. Get accurate diagnosis and effective treatment plans for complete recovery.",
    type: 'article',
    publishedTime: '2024-01-30T10:00:00.000Z',
    authors: ['VitalPhysio⁺ Team'],
    section: 'Knowledge Hub',
    tags: ["Runner's Knee", 'Frozen Shoulder', 'Sports Physiotherapy', 'Knee Pain Treatment', 'Shoulder Rehabilitation'],
    url: 'https://vitalphysio.plus/knowledge/runners-knee-frozen-shoulder',
    siteName: 'VitalPhysio⁺',
    images: [
      {
        url: '/images/runners-knee-frozen-shoulder-og.jpg',
        width: 1200,
        height: 630,
        alt: "Runner's knee and frozen shoulder treatment in Bengaluru"
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Runner's Knee and Frozen Shoulder Treatment in Bengaluru | VitalPhysio⁺",
    description: "Expert physiotherapy for runner's knee and frozen shoulder. Accurate diagnosis and effective treatment plans in Bengaluru.",
    images: ['/images/runners-knee-frozen-shoulder-twitter.jpg'],
    creator: '@vitalphysioplus',
    site: '@vitalphysioplus',
  },
  alternates: {
    canonical: 'https://vitalphysio.plus/knowledge/runners-knee-frozen-shoulder',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RunnersKneeFrozenShoulderPage() {
  return <RunnersKneeFrozenShoulderContent />;
}
