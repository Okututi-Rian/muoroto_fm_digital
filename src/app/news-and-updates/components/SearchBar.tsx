'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search news articles..." }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;
    onSearch(searchQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (isHydrated) {
      onSearch(value);
    }
  };

  if (!isHydrated) {
    return (
      <div className="glassmorphic rounded-2xl p-4 mb-8">
        <div className="h-12 bg-muted rounded-xl animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="glassmorphic rounded-2xl p-4 mb-8">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Icon 
            name="MagnifyingGlassIcon" 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full pl-12 pr-12 py-3 bg-input border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onSearch('');
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Icon name="XMarkIcon" size={20} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar; 
