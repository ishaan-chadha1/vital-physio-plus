import { Metadata } from 'next';
import FutureOfPhysiotherapyContent from './content';

export const metadata: Metadata = {
  title: 'The Future of Physiotherapy: AI, Wearables, and Tele-Rehab | VitalPhysio⁺',
  description: 'Explore how AI, wearable technology, and tele-rehabilitation are revolutionizing physiotherapy treatment. Learn about cutting-edge innovations shaping the future of healthcare.',
  keywords: 'future of physiotherapy, AI in healthcare, wearable technology, tele-rehabilitation, digital health, healthcare innovation, virtual physiotherapy, smart health devices',
  openGraph: {
    title: 'The Future of Physiotherapy: AI, Wearables, and Tele-Rehab | VitalPhysio⁺',
    description: 'Explore how AI, wearable technology, and tele-rehabilitation are revolutionizing physiotherapy treatment. Learn about cutting-edge innovations shaping the future of healthcare.',
    type: 'article',
    publishedTime: '2024-01-15T10:00:00.000Z',
    authors: ['VitalPhysio⁺ Team'],
    section: 'Knowledge Hub',
    tags: ['Future of Physiotherapy', 'AI in Healthcare', 'Wearable Technology', 'Tele-Rehabilitation', 'Digital Health'],
    url: 'https://vitalphysio.plus/knowledge/future-of-physiotherapy',
    siteName: 'VitalPhysio⁺',
    images: [
      {
        url: '/images/future-physiotherapy-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Future of physiotherapy with AI and technology'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Future of Physiotherapy: AI, Wearables, and Tele-Rehab | VitalPhysio⁺',
    description: 'Discover how AI, wearables, and tele-rehab are transforming physiotherapy. Expert insights on healthcare innovation.',
    images: ['/images/future-physiotherapy-twitter.jpg'],
    creator: '@vitalphysioplus',
    site: '@vitalphysioplus',
  },
  alternates: {
    canonical: 'https://vitalphysio.plus/knowledge/future-of-physiotherapy',
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

export default function FutureOfPhysiotherapyPage() {
  return <FutureOfPhysiotherapyContent />;
}
