'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface BreakingNews {
  id: number;
  title: string;
  timestamp: string;
  priority: 'high' | 'medium' | 'low';
}

interface BreakingNewsTickerProps {
  breakingNews: BreakingNews[];
}

const BreakingNewsTicker = ({ breakingNews }: BreakingNewsTickerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || breakingNews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [breakingNews.length, isHydrated]);

  if (!isHydrated || breakingNews.length === 0) {
    return (
      <div className="glassmorphic rounded-2xl p-4 mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-error rounded-full"></div>
            <span className="font-cta text-error text-sm">BREAKING</span>
          </div>
          <div className="h-4 bg-muted rounded animate-pulse flex-1"></div>
        </div>
      </div>
    );
  }

  const currentNews = breakingNews[currentIndex];

  return (
    <div className="glassmorphic rounded-2xl p-4 mb-8 overflow-hidden">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-3 h-3 bg-error rounded-full pulse-community"></div>
          <span className="font-cta text-error text-sm">BREAKING</span>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="font-body-medium text-foreground">
              {currentNews.title}
            </span>
            <span className="mx-8 text-muted-foreground">•</span>
            <span className="font-body text-muted-foreground text-sm">
              {currentNews.timestamp}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 flex-shrink-0">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + breakingNews.length) % breakingNews.length)}
            className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
          >
            <Icon name="ChevronLeftIcon" size={16} />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % breakingNews.length)}
            className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
          >
            <Icon name="ChevronRightIcon" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
