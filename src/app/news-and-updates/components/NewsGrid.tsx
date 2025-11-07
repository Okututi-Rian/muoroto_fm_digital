import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

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

interface NewsGridProps {
  articles: NewsArticle[];
}

const NewsGrid = ({ articles }: NewsGridProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-error text-error-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      default: return 'bg-accent text-accent-foreground';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <article key={article.id} className="glassmorphic rounded-2xl overflow-hidden shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105 group">
          <div className="relative h-48 overflow-hidden">
            <AppImage
              src={article.image}
              alt={article.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full font-cta text-xs ${getPriorityColor(article.priority)}`}>
                {article.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-1 px-2 py-1 glassmorphic rounded-lg">
                <Icon name="ClockIcon" size={12} className="text-white" />
                <span className="font-body text-xs text-white">{article.readTime}m</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="font-headline-medium text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {article.title}
            </h3>
            
            <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-body-medium text-foreground text-sm">{article.author}</span>
                <span className="text-muted-foreground">•</span>
                <span className="font-body text-muted-foreground text-sm">{article.publishedAt}</span>
              </div>
              
              <button className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsGrid; 
