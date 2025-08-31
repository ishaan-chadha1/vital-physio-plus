import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://yourdomain.com'; // Change to your production domain
  const pages = [
    '',
    '/about',
    '/services',
    '/conditions',
    '/contact',
    '/faq',
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

  const urls = pages.map(
    (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
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
