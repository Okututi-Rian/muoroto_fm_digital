'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import ShowsManagement from './content/ShowsManagement';
import NewsManagement from './content/NewsManagement';
import MediaManagement from './content/MediaManagement';

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('shows');

  const tabs = [
    { id: 'shows', name: 'Shows', icon: 'RadioIcon' },
    { id: 'news', name: 'News Articles', icon: 'NewspaperIcon' },
    { id: 'media', name: 'Media Library', icon: 'PhotoIcon' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'shows':
        return <ShowsManagement />;
      case 'news':
        return <NewsManagement />;
      case 'media':
        return <MediaManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="glassmorphic rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-2xl text-foreground">Content Management</h2>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-muted/50 rounded-xl p-1 mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-body-medium text-sm transition-all duration-300 whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground shadow-glassmorphic'
                : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
            }`}
          >
            <Icon name={tab.icon as any} size={18} />
            <span>{tab.name}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              activeTab === tab.id
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="spring-animation">
        {renderContent()}
      </div>
    </div>
  );
};

export default ContentManagement;