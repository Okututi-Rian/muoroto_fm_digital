import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface RelatedArticle {
  id: number;
  title: string;
  image: string;
  alt: string;
  category: string;
  publishedAt: string;
  readTime: number;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <div className="glassmorphic rounded-2xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="BookmarkIcon" size={20} className="text-primary" />
        <h3 className="font-headline-medium text-xl text-foreground">
          Related Articles
        </h3>
      </div>
      
      <div className="space-y-4">
        {articles.map((article) => (
          <article key={article.id} className="flex space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group cursor-pointer">
            <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
              <AppImage
                src={article.image}
                alt={article.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs font-cta">
                  {article.category}
                </span>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Icon name="ClockIcon" size={12} />
                  <span className="text-xs font-body">{article.readTime}m</span>
                </div>
              </div>
              
              <h4 className="font-body-medium text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300 mb-2">
                {article.title}
              </h4>
              
              <p className="font-body text-xs text-muted-foreground">
                {article.publishedAt}
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Icon 
                name="ArrowRightIcon" 
                size={16} 
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles; 
