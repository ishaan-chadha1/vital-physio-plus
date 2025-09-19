import { Metadata } from 'next';
import PhysiotherapyForSeniorsContent from './content';

export const metadata: Metadata = {
  title: 'Geriatric Physiotherapy: Improving Mobility for Seniors in Bengaluru | VitalPhysio⁺',
  description: 'Expert geriatric physiotherapy services in Bengaluru helping seniors manage age-related conditions, improve balance, and maintain independence. Specialized care for the elderly.',
  keywords: 'geriatric physiotherapy, senior physiotherapy, fall prevention, balance training, elderly care, Bengaluru, arthritis management, osteoporosis treatment, mobility improvement',
  openGraph: {
    title: 'Geriatric Physiotherapy: Improving Mobility for Seniors in Bengaluru | VitalPhysio⁺',
    description: 'Expert geriatric physiotherapy services in Bengaluru helping seniors manage age-related conditions, improve balance, and maintain independence. Specialized care for the elderly.',
    type: 'article',
    publishedTime: '2024-01-25T10:00:00.000Z',
    authors: ['VitalPhysio⁺ Team'],
    section: 'Knowledge Hub',
    tags: ['Geriatric Physiotherapy', 'Senior Care', 'Fall Prevention', 'Balance Training', 'Elderly Mobility'],
    url: 'https://vitalphysio.plus/knowledge/physiotherapy-for-seniors',
    siteName: 'VitalPhysio⁺',
    images: [
      {
        url: '/images/seniors-physiotherapy-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Geriatric physiotherapy services for seniors in Bengaluru'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geriatric Physiotherapy: Improving Mobility for Seniors in Bengaluru | VitalPhysio⁺',
    description: 'Expert geriatric physiotherapy helping seniors manage age-related conditions and maintain independence. Specialized elderly care.',
    images: ['/images/seniors-physiotherapy-twitter.jpg'],
    creator: '@vitalphysioplus',
    site: '@vitalphysioplus',
  },
  alternates: {
    canonical: 'https://vitalphysio.plus/knowledge/physiotherapy-for-seniors',
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

export default function PhysiotherapyForSeniorsPage() {
  return <PhysiotherapyForSeniorsContent />;
}
