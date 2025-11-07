'use client';

import React, { useState, useEffect } from 'react';
import NewsHero from './NewsHero';
import BreakingNewsTicker from './BreakingNewsTicker';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import NewsGrid from './NewsGrid';
import NewsletterSignup from './NewsletterSignup';
import RelatedArticles from './RelatedArticles';
import SocialShare from './SocialShare';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  category: string;
  publishedAt: string;
  readTime: number;
  author: string;
  priority: 'high' | 'medium' | 'low';
}

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface BreakingNews {
  id: number;
  title: string;
  timestamp: string;
  priority: 'high' | 'medium' | 'low';
}

interface RelatedArticle {
  id: number;
  title: string;
  image: string;
  alt: string;
  category: string;
  publishedAt: string;
  readTime: number;
}

const NewsAndUpdatesInteractive = () => {
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const featuredArticle: NewsArticle = {
    id: 1,
    title: "Muoroto FM Launches New Community Outreach Program in Central Kenya",
    excerpt: "Our latest initiative aims to strengthen community bonds through cultural preservation and digital literacy programs across rural areas.",
    image: "https://images.unsplash.com/photo-1723180580428-8443f7d63b38",
    alt: "Community members gathered around radio equipment in rural Kenyan village with mountains in background",
    category: "Community",
    publishedAt: "November 7, 2024",
    readTime: 5,
    author: "Sarah Wanjiku",
    priority: 'high'
  };

  const breakingNews: BreakingNews[] = [
  {
    id: 1,
    title: "President Ruto announces new infrastructure development plan for Central Kenya region",
    timestamp: "2 hours ago",
    priority: 'high'
  },
  {
    id: 2,
    title: "Muoroto FM wins Best Community Radio Station award at Kenya Broadcasting Awards 2024",
    timestamp: "4 hours ago",
    priority: 'medium'
  },
  {
    id: 3,
    title: "Heavy rains expected across Central Kenya this weekend, residents advised to take precautions",
    timestamp: "6 hours ago",
    priority: 'high'
  }];


  const categories: Category[] = [
  { id: 'community', name: 'Community', icon: 'UserGroupIcon', count: 12 },
  { id: 'politics', name: 'Politics', icon: 'BuildingLibraryIcon', count: 8 },
  { id: 'culture', name: 'Culture', icon: 'MusicalNoteIcon', count: 15 },
  { id: 'business', name: 'Business', icon: 'BanknotesIcon', count: 6 },
  { id: 'sports', name: 'Sports', icon: 'TrophyIcon', count: 9 },
  { id: 'weather', name: 'Weather', icon: 'CloudIcon', count: 4 }];


  const allArticles: NewsArticle[] = [
  {
    id: 2,
    title: "Traditional Kikuyu Music Festival Returns to Nyeri After Three Years",
    excerpt: "The annual celebration of Kikuyu heritage brings together artists from across the region to showcase traditional music and dance.",
    image: "https://images.unsplash.com/photo-1652868734785-054daad8012f",
    alt: "Traditional Kikuyu dancers in colorful attire performing on outdoor stage with crowd watching",
    category: "Culture",
    publishedAt: "November 6, 2024",
    readTime: 4,
    author: "John Kamau",
    priority: 'medium'
  },
  {
    id: 3,
    title: "Local Farmers Embrace Digital Agriculture Technology",
    excerpt: "New mobile app helps Central Kenya farmers access weather data, market prices, and agricultural advice in real-time.",
    image: "https://images.unsplash.com/photo-1542908056-d1a27db301f7",
    alt: "Kenyan farmer using smartphone in green tea plantation with rolling hills in background",
    category: "Business",
    publishedAt: "November 5, 2024",
    readTime: 6,
    author: "Mary Njeri",
    priority: 'low'
  },
  {
    id: 4,
    title: "Muoroto FM Sports Hour Celebrates Local Football Champions",
    excerpt: "Weekly sports program highlights achievements of grassroots football teams across Central Kenya region.",
    image: "https://images.unsplash.com/photo-1731046499139-5aa8b1b9e404",
    alt: "Young Kenyan football players celebrating victory on dusty field with mountains visible in distance",
    category: "Sports",
    publishedAt: "November 4, 2024",
    readTime: 3,
    author: "Peter Mwangi",
    priority: 'medium'
  },
  {
    id: 5,
    title: "Community Health Initiative Reaches 10,000 Households",
    excerpt: "Muoroto FM partners with local health centers to provide health education and awareness programs.",
    image: "https://images.unsplash.com/photo-1680759291617-2923935d803a",
    alt: "Healthcare worker in white coat speaking with elderly Kenyan woman in rural clinic setting",
    category: "Community",
    publishedAt: "November 3, 2024",
    readTime: 5,
    author: "Grace Wambui",
    priority: 'high'
  },
  {
    id: 6,
    title: "Political Leaders Discuss Development Projects in Central Kenya",
    excerpt: "Regional representatives outline infrastructure improvements and economic development plans for the coming year.",
    image: "https://images.unsplash.com/photo-1719765868011-68a88e7db83d",
    alt: "Government officials in suits seated at conference table during development planning meeting",
    category: "Politics",
    publishedAt: "November 2, 2024",
    readTime: 7,
    author: "Samuel Kariuki",
    priority: 'medium'
  }];


  const relatedArticles: RelatedArticle[] = [
  {
    id: 7,
    title: "Muoroto FM Morning Show Celebrates 5 Years of Broadcasting Excellence",
    image: "https://images.unsplash.com/photo-1581369728823-aad7d255cc20",
    alt: "Radio host speaking into microphone in modern broadcasting studio with soundproofing",
    category: "Broadcasting",
    publishedAt: "October 30, 2024",
    readTime: 4
  },
  {
    id: 8,
    title: "Youth Empowerment Program Launches Digital Skills Training",
    image: "https://images.unsplash.com/photo-1558301204-e3226482a77b",
    alt: "Young Kenyan students learning computer skills in classroom with laptops and instructor",
    category: "Education",
    publishedAt: "October 28, 2024",
    readTime: 3
  },
  {
    id: 9,
    title: "Traditional Healers Share Ancient Wisdom on Radio Program",
    image: "https://images.unsplash.com/photo-1509100163828-4827534b20da",
    alt: "Elderly Kikuyu traditional healer in colorful robes holding medicinal herbs in natural setting",
    category: "Culture",
    publishedAt: "October 25, 2024",
    readTime: 6
  }];


  useEffect(() => {
    if (!isHydrated) {
      setFilteredArticles(allArticles);
      return;
    }

    let filtered = allArticles;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter((article) =>
      article.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredArticles(filtered);
  }, [activeCategory, searchQuery, isHydrated]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breaking News Ticker */}
        <BreakingNewsTicker breakingNews={breakingNews} />

        {/* Featured Article Hero */}
        <NewsHero featuredArticle={featuredArticle} />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />

            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              onCategoryChange={handleCategoryChange} />


            {/* News Grid */}
            <NewsGrid articles={filteredArticles} />

            {/* Social Share */}
            <div className="mt-8 flex justify-center">
              <SocialShare
                title="Stay updated with Muoroto FM News"
                url="https://muorotofm.com/news-and-updates" />

            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Newsletter Signup */}
            <NewsletterSignup />

            {/* Related Articles */}
            <RelatedArticles articles={relatedArticles} />
          </div>
        </div>
      </div>
    </div>);

};

export default NewsAndUpdatesInteractive; 
