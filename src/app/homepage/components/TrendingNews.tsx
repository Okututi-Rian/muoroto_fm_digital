import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  category: string;
  publishedAt: string;
  readTime: number;
  author: string;
}

const TrendingNews = () => {
  const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Digital Literacy Program Reaches 500 Rural Families',
    excerpt: 'Muoroto FM\'s partnership with local NGOs brings technology education to underserved communities across Central Kenya, empowering families with essential digital skills.',
    image: "https://images.unsplash.com/photo-1629359652978-a5d383151c4c",
    alt: 'African family learning to use laptop computer together in rural community center',
    category: 'Community',
    publishedAt: '2 hours ago',
    readTime: 3,
    author: 'Grace Wanjiku'
  },
  {
    id: 2,
    title: 'Traditional Kikuyu Music Festival Set for December',
    excerpt: 'Annual celebration of cultural heritage featuring traditional musicians, storytellers, and artisans from across the region. Live broadcasts planned.',
    image: "https://images.unsplash.com/photo-1645462199116-7bae9d59947d",
    alt: 'Traditional Kikuyu musicians playing drums and singing at outdoor cultural festival',
    category: 'Culture',
    publishedAt: '4 hours ago',
    readTime: 2,
    author: 'Peter Kamau'
  },
  {
    id: 3,
    title: 'Local Farmers Adopt Climate-Smart Agriculture',
    excerpt: 'Success stories from Nyeri County as farmers implement sustainable practices, increasing yields while protecting the environment for future generations.',
    image: "https://images.unsplash.com/photo-1626160838662-4a0a58b9e406",
    alt: 'Kenyan farmer examining healthy crops in terraced agricultural field with mountains in background',
    category: 'Agriculture',
    publishedAt: '6 hours ago',
    readTime: 4,
    author: 'Samuel Mwangi'
  }];


  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-headline text-3xl lg:text-4xl text-foreground mb-2">
              Trending News
            </h2>
            <p className="font-body text-muted-foreground">
              Stay updated with the latest from our community
            </p>
          </div>
          <Link
            href="/news-and-updates"
            className="hidden sm:flex items-center space-x-2 px-6 py-3 glassmorphic rounded-xl font-cta text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cultural-glow">

            <span>View All News</span>
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Link
              href="/news-and-updates"
              className="group block glassmorphic rounded-2xl overflow-hidden shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-[1.02]">

              <div className="relative h-64 lg:h-80 overflow-hidden">
                <AppImage
                  src={newsItems[0].image}
                  alt={newsItems[0].alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-cta rounded-full">
                  {newsItems[0].category}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-headline-medium text-xl lg:text-2xl mb-3 group-hover:text-secondary transition-colors duration-300">
                    {newsItems[0].title}
                  </h3>
                  <p className="font-body text-sm opacity-90 mb-4 line-clamp-2">
                    {newsItems[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs opacity-80">
                    <div className="flex items-center space-x-4">
                      <span>By {newsItems[0].author}</span>
                      <span>{newsItems[0].publishedAt}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="ClockIcon" size={14} />
                      <span>{newsItems[0].readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            {newsItems.slice(1).map((item) =>
            <Link
              key={item.id}
              href="/news-and-updates"
              className="group block glassmorphic rounded-xl p-4 shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-[1.02]">

                <div className="flex space-x-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <AppImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-cta rounded">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.publishedAt}
                      </span>
                    </div>
                    <h4 className="font-headline-medium text-sm text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>By {item.author}</span>
                      <div className="flex items-center space-x-1">
                        <Icon name="ClockIcon" size={12} />
                        <span>{item.readTime} min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* View All Button - Mobile */}
            <Link
              href="/news-and-updates"
              className="sm:hidden flex items-center justify-center space-x-2 w-full px-4 py-3 glassmorphic rounded-xl font-cta text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cultural-glow">

              <span>View All News</span>
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>);

};

export default TrendingNews; 
