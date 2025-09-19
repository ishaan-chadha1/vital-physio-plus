import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Generate JSON-LD structured data for BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://vitalphysio.plus${item.href}` })
    }))
  };

  return (
    <>
      {/* JSON-LD Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav 
        className={`flex items-center space-x-1 text-sm text-gray-600 mb-6 ${className}`}
        aria-label="Breadcrumb navigation"
      >
        <ol className="flex items-center space-x-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {/* Home icon for first item */}
              {index === 0 && (
                <HomeIcon className="w-4 h-4 mr-1" aria-hidden="true" />
              )}
              
              {/* Breadcrumb item */}
              {item.href && !item.isCurrentPage ? (
                <Link 
                  href={item.href}
                  className="hover:text-[rgb(0,79,140)] transition-colors duration-200 font-medium"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span 
                  className={`${
                    item.isCurrentPage 
                      ? 'text-[rgb(0,79,140)] font-semibold' 
                      : 'text-gray-800 font-medium'
                  }`}
                  aria-current={item.isCurrentPage ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              
              {/* Separator */}
              {index < items.length - 1 && (
                <ChevronRightIcon 
                  className="w-4 h-4 mx-2 text-gray-400" 
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}