# Breadcrumb Navigation System

## Overview

This documentation covers the breadcrumb navigation system implemented for the VitalPhysio⁺ website. The system provides both visual navigation and SEO benefits through structured data.

## Components

### 1. Breadcrumb Component (`components/breadcrumb.tsx`)

A reusable React component that generates:
- Visual breadcrumb navigation with Home icon
- BreadcrumbList JSON-LD structured data for SEO
- Accessibility features (aria-labels, proper semantic markup)

#### Features:
- 🏠 Home icon for the first breadcrumb item
- 🔗 Clickable navigation links with hover effects
- 📱 Mobile-responsive design
- ♿ Full accessibility support
- 🔍 SEO-optimized with structured data
- 🎨 Styled with VitalPhysio⁺ brand colors

#### Usage:
```tsx
import Breadcrumb from "@/components/breadcrumb";

<Breadcrumb 
  items={[
    { label: 'Home', href: '/' },
    { label: 'Knowledge Hub', href: '/knowledge' },
    { label: 'Article Title', href: '/knowledge/article-slug', isCurrentPage: true }
  ]}
/>
```

### 2. Breadcrumb Utilities (`utils/breadcrumbs.ts`)

Helper functions and data for generating consistent breadcrumb navigation:

#### Functions:
- `generateKnowledgeBreadcrumbs(slug, title)` - Creates breadcrumbs for knowledge articles
- `generateServiceBreadcrumbs(slug, title)` - Creates breadcrumbs for service pages
- `extractArticleSlug(pathname)` - Extracts article slug from URL

#### Constants:
- `KNOWLEDGE_ARTICLE_TITLES` - Mapping of article slugs to display titles

## Implementation Status

### ✅ Knowledge Articles with Breadcrumbs:
1. desk-neck-pain
2. electrotherapy-modalities
3. ergonomics-work-from-home
4. fibromyalgia-guide
5. future-of-physiotherapy
6. knee-pain-exercises
7. low-back-pain
8. pediatric-physiotherapy
9. physiotherapy-for-seniors
10. post-surgical-rehabilitation
11. runners-knee-frozen-shoulder
12. sports-injury-first-aid
13. swimmer-shoulder
14. ui-chair-breakthrough

## SEO Benefits

### BreadcrumbList Structured Data
Each breadcrumb automatically generates JSON-LD structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://vitalphysio.plus/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Knowledge Hub",
      "item": "https://vitalphysio.plus/knowledge"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Article Title"
    }
  ]
}
```

### Search Engine Benefits:
- 🎯 Enhanced search result snippets with breadcrumb trails
- 📍 Clear site hierarchy communication to search engines
- 🔗 Improved internal linking structure
- 📊 Better crawlability and indexing

## Visual Design

### Styling Features:
- **Colors**: VitalPhysio⁺ brand colors (`rgb(0,79,140)` for active items)
- **Icons**: Home icon and chevron separators
- **Typography**: Consistent font weights and sizing
- **Hover Effects**: Smooth color transitions
- **Spacing**: Proper margin bottom (`mb-6`) for content separation

### Responsive Behavior:
- Mobile-friendly layout
- Touch-friendly link targets
- Proper text wrapping for long titles

## Usage Guidelines

### For Knowledge Articles:
```tsx
import Breadcrumb from "@/components/breadcrumb";
import { generateKnowledgeBreadcrumbs } from "@/utils/breadcrumbs";

// In your content component:
<Breadcrumb 
  items={generateKnowledgeBreadcrumbs('article-slug', 'Article Display Title')}
/>
```

### For Service Pages:
```tsx
import Breadcrumb from "@/components/breadcrumb";
import { generateServiceBreadcrumbs } from "@/utils/breadcrumbs";

// In your service component:
<Breadcrumb 
  items={generateServiceBreadcrumbs('service-slug', 'Service Display Title')}
/>
```

### Custom Breadcrumbs:
```tsx
import Breadcrumb from "@/components/breadcrumb";

const customItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/about/team', isCurrentPage: true }
];

<Breadcrumb items={customItems} />
```

## Maintenance

### Adding New Articles:
1. Add the article slug and title to `KNOWLEDGE_ARTICLE_TITLES` in `utils/breadcrumbs.ts`
2. Import and use the breadcrumb component in the article's content component
3. Place the breadcrumb after the container opening tag

### Updating Article Titles:
Update the corresponding entry in `KNOWLEDGE_ARTICLE_TITLES` to maintain consistency.

## Performance Considerations

- **Server-side rendering**: Components are optimized for SSR
- **Lightweight**: Minimal impact on bundle size
- **Accessible**: Proper semantic markup reduces screen reader processing time
- **SEO-friendly**: Structured data is inline and processed efficiently

## Testing

### Development Server:
```bash
npm run dev
```

### Verification Checklist:
- [ ] Breadcrumbs appear on all knowledge articles
- [ ] Links navigate correctly
- [ ] Home icon displays properly
- [ ] Hover effects work
- [ ] Mobile responsiveness
- [ ] Structured data validates (use Google's Rich Results Test)

## Future Enhancements

### Potential Additions:
- Dynamic breadcrumb generation from route segments
- Integration with sitemap generation
- Analytics tracking for breadcrumb clicks
- A/B testing for different breadcrumb styles
- Multi-language support

---

**Note**: This breadcrumb system is designed specifically for the VitalPhysio⁺ website architecture and integrates seamlessly with the existing Next.js 15 App Router setup.