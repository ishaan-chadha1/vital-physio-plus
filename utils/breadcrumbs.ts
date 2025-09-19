import { BreadcrumbItem } from '../components/breadcrumb';

/**
 * Utility function to generate breadcrumb items for knowledge hub articles
 * @param articleSlug - The URL slug of the current article
 * @param articleTitle - The title of the current article
 * @returns Array of breadcrumb items
 */
export function generateKnowledgeBreadcrumbs(
  articleSlug: string, 
  articleTitle: string
): BreadcrumbItem[] {
  return [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Knowledge Hub',
      href: '/knowledge'
    },
    {
      label: articleTitle,
      href: `/knowledge/${articleSlug}`,
      isCurrentPage: true
    }
  ];
}

/**
 * Utility function to generate breadcrumb items for service pages
 * @param serviceSlug - The URL slug of the current service
 * @param serviceTitle - The title of the current service
 * @returns Array of breadcrumb items
 */
export function generateServiceBreadcrumbs(
  serviceSlug: string, 
  serviceTitle: string
): BreadcrumbItem[] {
  return [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Services',
      href: '/services'
    },
    {
      label: serviceTitle,
      href: `/services/${serviceSlug}`,
      isCurrentPage: true
    }
  ];
}

/**
 * Article titles mapped to their slugs for consistent breadcrumb generation
 */
export const KNOWLEDGE_ARTICLE_TITLES: Record<string, string> = {
  'desk-neck-pain': 'Desk Neck Pain',
  'electrotherapy-modalities': 'Electrotherapy Modalities',
  'ergonomics-work-from-home': 'Ergonomics Work From Home',
  'fibromyalgia-guide': 'Fibromyalgia Guide',
  'future-of-physiotherapy': 'The Future of Physiotherapy',
  'knee-pain-exercises': 'Knee Pain Exercises',
  'low-back-pain': 'Low Back Pain Relief',
  'pediatric-physiotherapy': 'Pediatric Physiotherapy',
  'physiotherapy-for-seniors': 'Physiotherapy for Seniors',
  'post-surgical-rehabilitation': 'Post-Surgical Rehabilitation',
  'runners-knee-frozen-shoulder': "Runner's Knee and Frozen Shoulder",
  'sports-injury-first-aid': 'Sports Injury First Aid',
  'swimmer-shoulder': "Swimmer's Shoulder",
  'ui-chair-breakthrough': 'The UI Chair Breakthrough'
};

/**
 * Extract article slug from pathname
 * @param pathname - The current pathname
 * @returns The article slug or null if not a knowledge article
 */
export function extractArticleSlug(pathname: string): string | null {
  const match = pathname.match(/^\/knowledge\/([^\/]+)$/);
  return match ? match[1] : null;
}