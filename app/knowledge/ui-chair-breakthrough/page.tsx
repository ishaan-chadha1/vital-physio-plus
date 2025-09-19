import { Metadata } from 'next';
import UIChairBreakthroughContent from './content';

export const metadata: Metadata = {
  title: 'The UI Chair Breakthrough: A Physiotherapy and Ergonomics Review | VitalPhysio⁺',
  description: 'Comprehensive physiotherapy analysis of advanced ergonomic office chairs and how proper workplace ergonomics can prevent back pain, neck strain, and postural problems.',
  keywords: 'ergonomic office chair, workplace ergonomics, back pain prevention, posture correction, neck pain prevention, Bengaluru, occupational physiotherapy, office setup, lumbar support',
  openGraph: {
    title: 'The UI Chair Breakthrough: A Physiotherapy and Ergonomics Review | VitalPhysio⁺',
    description: 'Comprehensive physiotherapy analysis of advanced ergonomic office chairs and how proper workplace ergonomics can prevent back pain, neck strain, and postural problems.',
    type: 'article',
    publishedTime: '2024-02-10T10:00:00.000Z',
    authors: ['VitalPhysio⁺ Team'],
    section: 'Knowledge Hub',
    tags: ['Ergonomic Office Chair', 'Workplace Ergonomics', 'Back Pain Prevention', 'Posture Correction', 'Occupational Health'],
    url: 'https://vitalphysio.plus/knowledge/ui-chair-breakthrough',
    siteName: 'VitalPhysio⁺',
    images: [
      {
        url: '/images/ui-chair-breakthrough-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Ergonomic office chair physiotherapy review and analysis'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The UI Chair Breakthrough: A Physiotherapy and Ergonomics Review | VitalPhysio⁺',
    description: 'Physiotherapy analysis of ergonomic chairs. Learn how proper workplace ergonomics prevents back pain and postural problems.',
    images: ['/images/ui-chair-breakthrough-twitter.jpg'],
    creator: '@vitalphysioplus',
    site: '@vitalphysioplus',
  },
  alternates: {
    canonical: 'https://vitalphysio.plus/knowledge/ui-chair-breakthrough',
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

export default function UIChairBreakthroughPage() {
  return <UIChairBreakthroughContent />;
}
