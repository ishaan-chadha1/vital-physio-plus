import { Metadata } from 'next';
import SwimmerShoulderContent from './content';

export const metadata: Metadata = {
  title: "Swimmer's Shoulder: Causes, Symptoms, and Physio Treatment | VitalPhysio⁺",
  description: "Comprehensive guide to swimmer's shoulder treatment and prevention. Learn how physiotherapy can get you back in the pool pain-free with expert care in Bengaluru.",
  keywords: "swimmer's shoulder, swimming injuries, shoulder impingement, rotator cuff injury, aquatic sports physiotherapy, Bengaluru, swimming rehabilitation, shoulder tendinitis",
  openGraph: {
    title: "Swimmer's Shoulder: Causes, Symptoms, and Physio Treatment | VitalPhysio⁺",
    description: "Comprehensive guide to swimmer's shoulder treatment and prevention. Learn how physiotherapy can get you back in the pool pain-free with expert care in Bengaluru.",
    type: 'article',
    publishedTime: '2024-02-05T10:00:00.000Z',
    authors: ['VitalPhysio⁺ Team'],
    section: 'Knowledge Hub',
    tags: ["Swimmer's Shoulder", 'Swimming Injuries', 'Shoulder Rehabilitation', 'Aquatic Sports', 'Sports Medicine'],
    url: 'https://vitalphysio.plus/knowledge/swimmer-shoulder',
    siteName: 'VitalPhysio⁺',
    images: [
      {
        url: '/images/swimmer-shoulder-og.jpg',
        width: 1200,
        height: 630,
        alt: "Swimmer's shoulder treatment and prevention guide"
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Swimmer's Shoulder: Causes, Symptoms, and Physio Treatment | VitalPhysio⁺",
    description: "Comprehensive swimmer's shoulder treatment guide. Get back in the pool pain-free with expert physiotherapy care in Bengaluru.",
    images: ['/images/swimmer-shoulder-twitter.jpg'],
    creator: '@vitalphysioplus',
    site: '@vitalphysioplus',
  },
  alternates: {
    canonical: 'https://vitalphysio.plus/knowledge/swimmer-shoulder',
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

export default function SwimmerShoulderPage() {
  return <SwimmerShoulderContent />;
}
