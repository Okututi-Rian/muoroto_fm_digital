'use client';

import React, { useState } from 'react';
import HeroAdminTab from './homepage/HeroAdminTab';
import CommunityHighlightAdminTab from './homepage/CommunityHighlightAdminTab';
import TrendingNewsAdminTab from './homepage/TrendingNewsAdminTab';
import UpcomingEventAdminTab from './homepage/UpcomingEventAdminTab';

const tabs = [
  { id: 'hero', name: 'Hero Section' },
  { id: 'community', name: 'Community Highlights' },
  { id: 'news', name: 'Trending News' },
  { id: 'events', name: 'Upcoming Events' },
];

const HomepageAdmin = () => {
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <div className="glassmorphic rounded-2xl p-6">
      <h2 className="font-headline text-2xl text-foreground mb-6">Homepage Content Management</h2>
      <div className="flex space-x-2 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-body-medium text-sm transition-all duration-300 ${activeTab === tab.id ? 'bg-primary text-primary-foreground shadow-glassmorphic' : 'text-muted-foreground hover:text-foreground hover:bg-background/50'}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div>
        {activeTab === 'hero' && <HeroAdminTab />}
        {activeTab === 'community' && <CommunityHighlightAdminTab />}
        {activeTab === 'news' && <TrendingNewsAdminTab />}
        {activeTab === 'events' && <UpcomingEventAdminTab />}
      </div>
    </div>
  );
};

export default HomepageAdmin;
