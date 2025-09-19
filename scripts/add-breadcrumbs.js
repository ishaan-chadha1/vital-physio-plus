#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define the knowledge articles and their display titles (only existing articles)
const KNOWLEDGE_ARTICLES = {
  'desk-neck-pain': 'Desk Neck Pain',
  'electrotherapy-modalities': 'Electrotherapy Modalities',
  'ergonomics-work-from-home': 'Ergonomics Work From Home',
  'fibromyalgia-guide': 'Fibromyalgia Guide',
  'future-of-physiotherapy': 'The Future of Physiotherapy',
  'knee-pain-exercises': 'Knee Pain Exercises',
  'physiotherapy-for-seniors': 'Physiotherapy for Seniors',
  'post-surgical-rehabilitation': 'Post-Surgical Rehabilitation',
  'runners-knee-frozen-shoulder': "Runner's Knee and Frozen Shoulder",
  'sports-injury-first-aid': 'Sports Injury First Aid',
  'swimmer-shoulder': "Swimmer's Shoulder",
  'ui-chair-breakthrough': 'The UI Chair Breakthrough'
};

const knowledgeDir = path.join(__dirname, '..', 'app', 'knowledge');

// Skip articles already processed
const skipArticles = ['low-back-pain', 'pediatric-physiotherapy'];

function addBreadcrumbsToArticle(articleSlug, articleTitle) {
  if (skipArticles.includes(articleSlug)) {
    console.log(`Skipping ${articleSlug} (already processed)`);
    return;
  }

  const contentFilePath = path.join(knowledgeDir, articleSlug, 'content.tsx');
  
  if (!fs.existsSync(contentFilePath)) {
    console.log(`Content file not found for ${articleSlug}`);
    return;
  }

  let content = fs.readFileSync(contentFilePath, 'utf8');

  // Check if breadcrumbs are already added
  if (content.includes('import Breadcrumb from "@/components/breadcrumb"')) {
    console.log(`Breadcrumbs already added to ${articleSlug}`);
    return;
  }

  // Add imports
  const oldImports = '"use client";\n\nimport React from "react";\nimport Footer from "@/components/footer";\nimport LandingNavbar from "@/components/landing-navbar";\nimport { getCalApi } from "@calcom/embed-react";';
  
  const newImports = '"use client";\n\nimport React from "react";\nimport Footer from "@/components/footer";\nimport LandingNavbar from "@/components/landing-navbar";\nimport Breadcrumb from "@/components/breadcrumb";\nimport { generateKnowledgeBreadcrumbs } from "@/utils/breadcrumbs";\nimport { getCalApi } from "@calcom/embed-react";';

  content = content.replace(oldImports, newImports);

  // Add breadcrumb component after the navbar
  const sectionStart = '<section className="bg-gray-50 py-16 md:py-20">\n        <div className="max-w-4xl mx-auto px-6">';
  const sectionWithBreadcrumb = `<section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb Navigation */}
          <Breadcrumb 
            items={generateKnowledgeBreadcrumbs('${articleSlug}', '${articleTitle}')}
          />
`;

  content = content.replace(sectionStart, sectionWithBreadcrumb);

  // Write the updated content back
  fs.writeFileSync(contentFilePath, content);
  console.log(`✅ Added breadcrumbs to ${articleSlug}`);
}

// Process all articles
Object.entries(KNOWLEDGE_ARTICLES).forEach(([slug, title]) => {
  addBreadcrumbsToArticle(slug, title);
});

console.log('\n🎉 Breadcrumb addition complete!');