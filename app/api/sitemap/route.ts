import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  const baseUrl = 'https://vitalphysio.plus';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/conditions',
    '/contact',
    '/faq',
    '/feedb',
    '/form',
    '/journey',
    '/knowledge',
    '/notes',
    '/privacy-policy',
    '/rehabilitation',
    '/team',
    '/technology',
    '/why-vital-physio+',
  ];

  // Dynamically get knowledge articles
  let knowledgePages: string[] = [];
  try {
    const knowledgePath = join(process.cwd(), 'app', 'knowledge');
    const files = await readdir(knowledgePath, { withFileTypes: true });
    
    knowledgePages = files
      .filter(dirent => dirent.isDirectory())
      .map(dirent => `/knowledge/${dirent.name}`);
  } catch (error) {
    console.error('Error reading knowledge directory:', error);
  }

  // Combine all pages
  const allPages = [...staticPages, ...knowledgePages];

  const urls = allPages.map(
    (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${page.startsWith('/knowledge/') ? 'monthly' : 'weekly'}</changefreq>
        <priority>${page === '' ? '1.0' : page.startsWith('/knowledge/') ? '0.7' : '0.8'}</priority>
      </url>`
  ).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
