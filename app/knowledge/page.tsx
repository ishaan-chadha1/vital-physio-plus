"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronRight,
  ArrowRight,
  Calendar,
  User,
  Tag,
} from "lucide-react";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landing-navbar";

// --- DATA ---
const categories = [
  "Women's Health",
  "Sports Rehab", 
  "Neurological Care",
  "Wellness Tips",
  "Pain Management"
];

const featuredArticle = {
  title: "5 Key Exercises to Perform After Knee Surgery",
  subtitle: "Regaining strength and mobility after knee surgery is crucial. Our lead physiotherapists team, outlines five essential, safe exercises to get you back on your feet.",
  category: "Knee Exercises",
  tag: "Post-Operative Rehab",
  image: "/knee-surgery-exercises.jpg", // placeholder
};

const recentArticles = [
  {
    title: "A Physiotherapist's Guide to Managing Fibromyalgia Pain",
    description: "Learn how a structured physiotherapy program can help manage the chronic pain and fatigue associated with fibromyalgia.",
    category: "Pain Management",
    subcategory: "Chronic Pain",
    image: "/fibromyalgia-guide.jpg",
    link: "/knowledge/fibromyalgia-guide",
  },
  {
    title: "Preventing Common Shoulder Injuries in Swimmers",
    description: "Discover key strengthening and stretching exercises to protect your shoulders and improve your performance in the pool.",
    category: "Sports Rehab",
    subcategory: "Sports Injury",
    image: "/swimmer-shoulder.jpg",
    link: "/knowledge/swimmer-shoulder",
  },
  {
    title: "Understanding the UI Chair: A Breakthrough in Pelvic Health",
    description: "Explore how non-invasive HIFEM technology can dramatically improve pelvic floor strength and address issues like incontinence.",
    category: "Women's Health",
    subcategory: "Women's Health Physio",
    image: "/ui-chair-breakthrough.jpg",
    link: "/knowledge/ui-chair-breakthrough",
  },
  {
    title: "5 Key Exercises to Perform After Knee Surgery",
    description: "Regaining strength and mobility after knee surgery is crucial. Our lead physiotherapists outline five essential, safe exercises to get you back on your feet.",
    category: "Knee Exercises",
    subcategory: "Post-Operative Rehab",
    image: "/knee-surgery-exercises.jpg",
    link: "/knowledge/knee-pain-exercises",
  },
  {
    title: "Physiotherapy for Chronic Low Back Pain",
    description: "Discover evidence-based recovery options for chronic low back pain, busting myths and providing sustainable solutions.",
    category: "Pain Management",
    subcategory: "Wellness Tips",
    image: "/low-back-pain.jpg",
    link: "/knowledge/low-back-pain",
  },
  {
    title: "Desk Job and Neck Pain? How Bengaluru’s Professionals Can Find Relief",
    description: "Learn how physiotherapy can help tech professionals and desk workers overcome persistent neck pain and stiffness.",
    category: "Pain Management",
    subcategory: "Wellness Tips",
    image: "/desk-neck-pain.jpg",
    link: "/knowledge/desk-neck-pain",
  },
  {
    title: "Runner’s Knee and Frozen Shoulder",
    description: "Learn how physiotherapy can help prevent and recover from common issues like runner’s knee and frozen shoulder.",
    category: "Sports Rehab",
    subcategory: "Pain Management",
    image: "/runners-knee-frozen-shoulder.jpg",
    link: "/knowledge/runners-knee-frozen-shoulder",
  },
  {
    title: "Ergonomics for Work-from-Home",
    description: "Simple physiotherapy tips for IT professionals in Bengaluru to improve posture and reduce pain while working remotely.",
    category: "Wellness Tips",
    subcategory: "Pain Management",
    image: "/ergonomics-work-from-home.jpg",
    link: "/knowledge/ergonomics-work-from-home",
  },
  {
    title: "Sports Injury First Aid",
    description: "Learn the 5-step first aid plan for sports injuries to ensure faster recovery and better outcomes.",
    category: "Wellness Tips",
    subcategory: "Pain Management",
    image: "/sports-injury-first-aid.jpg",
    link: "/knowledge/sports-injury-first-aid",
  },
  {
    title: "Physiotherapy for Seniors",
    description: "Discover how geriatric physiotherapy helps seniors stay active, independent, and pain-free.",
    category: "Wellness Tips",
    subcategory: "Pain Management",
    image: "/physiotherapy-for-seniors.jpg",
    link: "/knowledge/physiotherapy-for-seniors",
  },
  {
    title: "Pediatric Physiotherapy",
    description: "Learn how pediatric physiotherapy empowers children to overcome movement challenges with fun, engaging therapy.",
    category: "Neurological Care",
    subcategory: "Wellness Tips",
    image: "/pediatric-physiotherapy.jpg",
    link: "/knowledge/pediatric-physiotherapy",
  },
  {
    title: "Post-Surgical Rehabilitation",
    description: "Optimize your recovery after orthopedic surgery with evidence-based physiotherapy techniques.",
    category: "Pain Management",
    subcategory: "Wellness Tips",
    image: "/post-surgical-rehabilitation.jpg",
    link: "/knowledge/post-surgical-rehabilitation",
  },
  {
    title: "Understanding Electrotherapy & Modern Physio Modalities",
    description: "Learn about TENS, ultrasound, laser therapy, and other modalities used in physiotherapy for pain relief and recovery.",
    category: "Wellness Tips",
    subcategory: "Pain Management",
    image: "/electrotherapy-modalities.jpg",
    link: "/knowledge/electrotherapy-modalities",
  },
  {
    title: "The Future of Physiotherapy—Tech Innovations Reshaping Care in India",
    description: "Explore how AI, robotics, and virtual physiotherapy are transforming care in Bengaluru and beyond.",
    category: "Wellness Tips",
    subcategory: "Tech Innovations",
    image: "/future-of-physiotherapy.jpg",
    link: "/knowledge/future-of-physiotherapy",
  },
];
export default function KnowledgeHubPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700;900&display=swap");
        .font-lato {
          font-family: "Lato", sans-serif;
        }
        body {
          background-color: #ffffff;
        }
        .gradient-knowledge {
          background: linear-gradient(94deg, #163774 0%, #47a5d6 100%);
        }
        .search-input {
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 16px 20px 16px 50px;
          font-size: 16px;
          width: 100%;
          max-width: 500px;
          transition: all 0.3s ease;
        }
        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .category-pill {
          background-color: #f8fafc;
          color: #475569;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        .category-pill:hover {
          background-color: #3b82f6;
          color: white;
          transform: translateY(-1px);
        }
        .featured-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        .article-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          overflow: hidden;
          border: 1px solid #f1f5f9;
        }
        .article-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .tag-badge {
          background-color: #dbeafe;
          color: #1e40af;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: inline-block;
        }
      `}</style>

      <LandingNavbar />

      {/* HERO SECTION */}
      <section className="gradient-knowledge relative w-full py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "url('/physio_banner_overlay.svg') repeat, linear-gradient(94deg, #163774 0%, #47a5d6 100%)",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-white font-extrabold text-4xl md:text-6xl drop-shadow-lg tracking-tight font-lato mb-4">
              Patient Knowledge Hub
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-light">
              Your one-stop library of expert-curated resources for your care journey.
            </p>
            <p className="text-white/80 text-lg md:text-xl font-light mt-2">
              Find articles, guides, and answers to your questions.
            </p>
          </motion.div>

          {/* SEARCH BAR */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full max-w-2xl"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles (eg. 'back pain')"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input bg-white text-gray-900 placeholder-gray-500"
            />
          </motion.div>

          {/* CATEGORY PILLS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <p className="text-white/90 text-sm font-medium mb-4">Browse by Category</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, idx) => (
                <button key={idx} className="category-pill hover:scale-105">
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* FEATURED ARTICLE */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="featured-card p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="mb-4">
                    <span className="tag-badge">{featuredArticle.category}</span>
                    <span className="ml-3 text-white/80 text-sm font-medium">
                      Featured Article
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    {featuredArticle.subtitle}
                  </p>
                  <div className="mb-6">
                    <span className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <Tag className="w-4 h-4 mr-2" />
                      {featuredArticle.tag}
                    </span>
                  </div>
                  <button className="inline-flex items-center bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                    Read Full Article
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                    <p className="text-white/60 text-sm mb-2">[Placeholder: Plan a video or an image as appropriate.]</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RECENT ARTICLES */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Recent Articles</h3>
              <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                View All
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {recentArticles.map((article, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="article-card group cursor-pointer"
    >
      <a href={article.link} className="block">
        <div className="p-6">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-semibold text-blue-600">
                {article.category}
              </span>
            </div>
            <span className="text-sm text-gray-500 font-medium">
              {article.subcategory}
            </span>
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
            {article.title}
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {article.description}
          </p>
          <button className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
            Read More
            <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </a>
    </motion.div>
  ))}
</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
