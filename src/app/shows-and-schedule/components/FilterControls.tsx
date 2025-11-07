'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOptions {
  genre: string;
  timeSlot: string;
  host: string;
  searchQuery: string;
}

interface FilterControlsProps {
  filters: FilterOptions;
  onFilterChange: (key: keyof FilterOptions, value: string) => void;
  onClearFilters: () => void;
}

const FilterControls = ({ filters, onFilterChange, onClearFilters }: FilterControlsProps) => {
  const genres = [
    'All Genres',
    'News & Current Affairs',
    'Music & Entertainment',
    'Spiritual & Religious',
    'Talk Shows',
    'Cultural Programs',
    'Sports',
    'Educational'
  ];

  const timeSlots = [
    'All Times',
    'Morning (6AM - 12PM)',
    'Afternoon (12PM - 6PM)',
    'Evening (6PM - 10PM)',
    'Night (10PM - 6AM)'
  ];

  const hosts = [
    'All Hosts',
    'Samuel Mwangi',
    'Grace Wanjiku',
    'Peter Kamau',
    'Mary Njeri',
    'Joseph Kariuki',
    'Faith Wambui'
  ];

  const hasActiveFilters = filters.genre !== 'All Genres' || 
                          filters.timeSlot !== 'All Times' || 
                          filters.host !== 'All Hosts' || 
                          filters.searchQuery !== '';

  return (
    <div className="bg-card rounded-2xl shadow-glassmorphic p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline-medium text-lg text-foreground">Filter Shows</h2>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-body-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon name="XMarkIcon" size={16} />
            <span>Clear All</span>
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="space-y-2">
          <label className="font-body-medium text-sm text-foreground">Search Shows</label>
          <div className="relative">
            <Icon 
              name="MagnifyingGlassIcon" 
              size={18} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
            />
            <input
              type="text"
              placeholder="Search by title..."
              value={filters.searchQuery}
              onChange={(e) => onFilterChange('searchQuery', e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-xl font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        {/* Genre Filter */}
        <div className="space-y-2">
          <label className="font-body-medium text-sm text-foreground">Genre</label>
          <div className="relative">
            <select
              value={filters.genre}
              onChange={(e) => onFilterChange('genre', e.target.value)}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
            <Icon 
              name="ChevronDownIcon" 
              size={18} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" 
            />
          </div>
        </div>
        
        {/* Time Slot Filter */}
        <div className="space-y-2">
          <label className="font-body-medium text-sm text-foreground">Time Slot</label>
          <div className="relative">
            <select
              value={filters.timeSlot}
              onChange={(e) => onFilterChange('timeSlot', e.target.value)}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            <Icon 
              name="ChevronDownIcon" 
              size={18} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" 
            />
          </div>
        </div>
        
        {/* Host Filter */}
        <div className="space-y-2">
          <label className="font-body-medium text-sm text-foreground">Host</label>
          <div className="relative">
            <select
              value={filters.host}
              onChange={(e) => onFilterChange('host', e.target.value)}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              {hosts.map((host) => (
                <option key={host} value={host}>{host}</option>
              ))}
            </select>
            <Icon 
              name="ChevronDownIcon" 
              size={18} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls; 
