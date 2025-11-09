'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon'



const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('shows');

  const tabs = [
    { id: 'shows', name: 'Shows', icon: 'RadioIcon', count: 24 },
    { id: 'news', name: 'News Articles', icon: 'NewspaperIcon', count: 89 },
    { id: 'podcasts', name: 'Podcasts', icon: 'MicrophoneIcon', count: 156 },
    { id: 'media', name: 'Media Library', icon: 'PhotoIcon', count: 342 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'shows':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-medium text-xl text-foreground">Manage Shows</h3>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-cta text-sm transition-all duration-300">
                <Icon name="PlusIcon" size={16} />
                <span>Add New Show</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="glassmorphic rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Icon name="RadioIcon" size={24} className="text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300">
                        <Icon name="PencilIcon" size={16} />
                      </button>
                      <button className="w-8 h-8 bg-muted hover:bg-error hover:text-error-foreground rounded-lg flex items-center justify-center transition-all duration-300">
                        <Icon name="TrashIcon" size={16} />
                      </button>
                    </div>
                  </div>
                  <h4 className="font-headline-medium text-lg text-foreground mb-2">Show Title {i + 1}</h4>
                  <p className="font-body text-sm text-muted-foreground mb-4">Host: John Doe</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-secondary/20 text-secondary rounded-full font-body text-xs">Active</span>
                    <span className="font-body text-xs text-muted-foreground">6:00 AM - 9:00 AM</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'news':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-medium text-xl text-foreground">News Articles</h3>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-cta text-sm transition-all duration-300">
                <Icon name="PlusIcon" size={16} />
                <span>Write Article</span>
              </button>
            </div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="glassmorphic rounded-xl p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-body-medium text-foreground mb-1">Breaking News: Community Event {i + 1}</h4>
                    <p className="font-body text-sm text-muted-foreground">Published 2 hours ago • By Admin</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded-full font-body text-xs">Published</span>
                    <button className="w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300">
                      <Icon name="PencilIcon" size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'podcasts':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-medium text-xl text-foreground">Podcast Episodes</h3>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-cta text-sm transition-all duration-300">
                <Icon name="PlusIcon" size={16} />
                <span>Upload Episode</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="glassmorphic rounded-xl p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                      <Icon name="PlayIcon" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-body-medium text-foreground mb-1">Episode {i + 1}: Community Stories</h4>
                      <p className="font-body text-sm text-muted-foreground">Duration: 45:32 • Published</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="px-2 py-1 bg-secondary/20 text-secondary rounded-full font-body text-xs">Published</span>
                    <div className="flex items-center space-x-2">
                      <button className="w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300">
                        <Icon name="PencilIcon" size={16} />
                      </button>
                      <button className="w-8 h-8 bg-muted hover:bg-error hover:text-error-foreground rounded-lg flex items-center justify-center transition-all duration-300">
                        <Icon name="TrashIcon" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'media':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-medium text-xl text-foreground">Media Library</h3>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-cta text-sm transition-all duration-300">
                <Icon name="ArrowUpTrayIcon" size={16} />
                <span>Upload Media</span>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="glassmorphic rounded-xl p-3">
                  <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <Icon name="PhotoIcon" size={32} className="text-muted-foreground" />
                  </div>
                  <p className="font-body text-xs text-foreground truncate mb-2">image_{i + 1}.jpg</p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-muted-foreground">2.4 MB</span>
                    <button className="w-6 h-6 bg-muted hover:bg-error hover:text-error-foreground rounded flex items-center justify-center transition-all duration-300">
                      <Icon name="TrashIcon" size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
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