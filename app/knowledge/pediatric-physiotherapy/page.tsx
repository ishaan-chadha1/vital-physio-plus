import { Metadata } from 'next';
import PediatricPhysiotherapyContent from './content';

export const metadata: Metadata = {
  title: 'Pediatric Physiotherapy in Bengaluru: Helping Your Child Thrive | VitalPhysio⁺',
  description: 'Expert pediatric physiotherapy services in Bengaluru for developmental delays, childhood injuries, and neurological conditions. Child-friendly approaches for better outcomes.',
  keywords: 'pediatric physiotherapy, child physiotherapy, developmental delays, Bengaluru, childhood injuries, cerebral palsy, motor development, early intervention, play-based therapy',
  openGraph: {
    title: 'Pediatric Physiotherapy in Bengaluru: Helping Your Child Thrive | VitalPhysio⁺',
    description: 'Expert pediatric physiotherapy services in Bengaluru for developmental delays, childhood injuries, and neurological conditions. Child-friendly approaches for better outcomes.',
    type: 'article',
    publishedTime: '2024-01-20T10:00:00.000Z',
    authors: ['VitalPhysio⁺ Team'],
    section: 'Knowledge Hub',
    tags: ['Pediatric Physiotherapy', 'Child Development', 'Developmental Delays', 'Bengaluru Healthcare', 'Early Intervention'],
    url: 'https://vitalphysio.plus/knowledge/pediatric-physiotherapy',
    siteName: 'VitalPhysio⁺',
    images: [
      {
        url: '/images/pediatric-physiotherapy-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Pediatric physiotherapy treatment for children in Bengaluru'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pediatric Physiotherapy in Bengaluru: Helping Your Child Thrive | VitalPhysio⁺',
    description: 'Expert pediatric physiotherapy for developmental delays, injuries, and neurological conditions. Child-friendly care in Bengaluru.',
    images: ['/images/pediatric-physiotherapy-twitter.jpg'],
    creator: '@vitalphysioplus',
    site: '@vitalphysioplus',
  },
  alternates: {
    canonical: 'https://vitalphysio.plus/knowledge/pediatric-physiotherapy',
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

export default function PediatricPhysiotherapyPage() {
  return <PediatricPhysiotherapyContent />;
}
