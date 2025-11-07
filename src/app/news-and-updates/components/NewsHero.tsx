import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface NewsHeroProps {
  featuredArticle: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    alt: string;
    category: string;
    publishedAt: string;
    readTime: number;
    author: string;
  };
}

const NewsHero = ({ featuredArticle }: NewsHeroProps) => {
  return (
    <section className="relative overflow-hidden rounded-3xl glassmorphic shadow-glassmorphic-lg">
      <div className="relative h-96 lg:h-[500px]">
        <AppImage
          src={featuredArticle.image}
          alt={featuredArticle.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-cta text-sm">
              {featuredArticle.category}
            </span>
            <div className="flex items-center space-x-2 text-white/80">
              <Icon name="ClockIcon" size={16} />
              <span className="font-body text-sm">{featuredArticle.readTime} min read</span>
            </div>
          </div>
          
          <h1 className="font-headline text-2xl lg:text-4xl text-white mb-3 leading-tight">
            {featuredArticle.title}
          </h1>
          
          <p className="font-body text-white/90 text-lg mb-4 line-clamp-2">
            {featuredArticle.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="font-body-medium text-white/80">By {featuredArticle.author}</span>
              <span className="text-white/60">•</span>
              <span className="font-body text-white/80">{featuredArticle.publishedAt}</span>
            </div>
            
            <button className="flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-cta transition-all duration-300 spring-animation hover:scale-105">
              <span>Read Full Story</span>
              <Icon name="ArrowRightIcon" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero; 
