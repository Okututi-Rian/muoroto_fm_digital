'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, onCategoryChange }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    if (!isHydrated) return;
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };

  if (!isHydrated) {
    return (
      <div className="flex flex-wrap gap-3 mb-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-10 w-24 bg-muted rounded-xl animate-pulse"></div>
        ))}
      </div>
    );
  }

  const allCategories = [
    { id: 'all', name: 'All News', icon: 'NewspaperIcon', count: categories.reduce((sum, cat) => sum + cat.count, 0) },
    ...categories
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {allCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-body-medium text-sm transition-all duration-300 cultural-glow ${
            activeCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-glassmorphic'
              : 'glassmorphic text-foreground hover:bg-muted hover:text-primary'
          }`}
        >
          <Icon name={category.icon as any} size={16} />
          <span>{category.name}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            activeCategory === category.id
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-muted text-muted-foreground'
          }`}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter; 
