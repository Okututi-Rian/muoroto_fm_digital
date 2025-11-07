'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContentTab {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface ContentItem {
  id: number;
  title: string;
  status: 'published' | 'draft' | 'scheduled';
  author: string;
  lastModified: string;
  type: string;
}

interface ContentManagementProps {
  className?: string;
}

const ContentManagement = ({ className = '' }: ContentManagementProps) => {
  const [activeTab, setActiveTab] = useState('shows');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const tabs: ContentTab[] = [
    { id: 'shows', name: 'Shows', icon: 'RadioIcon', count: 24 },
    { id: 'podcasts', name: 'Podcasts', icon: 'MicrophoneIcon', count: 156 },
    { id: 'news', name: 'News', icon: 'NewspaperIcon', count: 89 },
    { id: 'sponsors', name: 'Sponsors', icon: 'BuildingOfficeIcon', count: 18 }
  ];

  const getContentData = (tabId: string): ContentItem[] => {
    switch (tabId) {
      case 'shows':
        return [
          { id: 1, title: 'Morning Glory Show', status: 'published', author: 'Sarah Wanjiku', lastModified: '2 hours ago', type: 'Daily Show' },
          { id: 2, title: 'Kikuyu Wisdom Hour', status: 'published', author: 'James Mwangi', lastModified: '4 hours ago', type: 'Weekly Show' },
          { id: 3, title: 'Youth Connect', status: 'draft', author: 'Grace Njeri', lastModified: '1 day ago', type: 'Weekly Show' },
          { id: 4, title: 'Evening Reflections', status: 'scheduled', author: 'Peter Kamau', lastModified: '2 days ago', type: 'Daily Show' }
        ];
      case 'podcasts':
        return [
          { id: 1, title: 'Kikuyu Wisdom Tales - Episode 15', status: 'published', author: 'James Mwangi', lastModified: '1 hour ago', type: 'Podcast' },
          { id: 2, title: 'Community Stories - Episode 8', status: 'published', author: 'Mary Wambui', lastModified: '3 hours ago', type: 'Podcast' },
          { id: 3, title: 'Faith & Life - Episode 22', status: 'draft', author: 'John Kariuki', lastModified: '5 hours ago', type: 'Podcast' },
          { id: 4, title: 'Cultural Heritage - Episode 12', status: 'scheduled', author: 'Grace Njeri', lastModified: '1 day ago', type: 'Podcast' }
        ];
      case 'news':
        return [
          { id: 1, title: 'Community Development Project Launched', status: 'published', author: 'Grace Njeri', lastModified: '30 minutes ago', type: 'Breaking News' },
          { id: 2, title: 'Local School Receives New Equipment', status: 'published', author: 'Peter Kamau', lastModified: '2 hours ago', type: 'Community News' },
          { id: 3, title: 'Cultural Festival Planning Update', status: 'draft', author: 'Sarah Wanjiku', lastModified: '4 hours ago', type: 'Event News' },
          { id: 4, title: 'Weather Alert for Central Kenya', status: 'scheduled', author: 'James Mwangi', lastModified: '6 hours ago', type: 'Weather News' }
        ];
      case 'sponsors':
        return [
          { id: 1, title: 'Safaricom Kenya Partnership', status: 'published', author: 'Admin', lastModified: '1 day ago', type: 'Platinum Sponsor' },
          { id: 2, title: 'Kenya Commercial Bank', status: 'published', author: 'Admin', lastModified: '2 days ago', type: 'Gold Sponsor' },
          { id: 3, title: 'Equity Bank Partnership', status: 'draft', author: 'Admin', lastModified: '3 days ago', type: 'Silver Sponsor' },
          { id: 4, title: 'Tusker Brand Collaboration', status: 'scheduled', author: 'Admin', lastModified: '1 week ago', type: 'Bronze Sponsor' }
        ];
      default:
        return [];
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-success text-success-foreground';
      case 'draft':
        return 'bg-warning text-warning-foreground';
      case 'scheduled':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const handleSelectItem = (itemId: number) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    const currentData = getContentData(activeTab);
    if (selectedItems.length === currentData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(currentData.map(item => item.id));
    }
  };

  const currentData = getContentData(activeTab);

  return (
    <div className={`glassmorphic rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-xl text-foreground">Content Management</h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-body-medium text-sm transition-all duration-300">
            <Icon name="PlusIcon" size={16} />
            <span>Add New</span>
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300">
            <Icon name="FunnelIcon" size={18} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-muted/50 rounded-xl p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setSelectedItems([]);
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body-medium text-sm transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground shadow-glassmorphic'
                : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
            }`}
          >
            <Icon name={tab.icon as any} size={16} />
            <span>{tab.name}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              activeTab === tab.id ? 'bg-primary-foreground/20' : 'bg-muted'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Bulk Actions */}
      {selectedItems.length > 0 && (
        <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/20 rounded-xl mb-4">
          <span className="font-body-medium text-sm text-foreground">
            {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
          </span>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-3 py-1.5 bg-success hover:bg-success/90 text-success-foreground rounded-lg font-body-medium text-sm transition-all duration-300">
              <Icon name="CheckIcon" size={14} />
              <span>Publish</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1.5 bg-warning hover:bg-warning/90 text-warning-foreground rounded-lg font-body-medium text-sm transition-all duration-300">
              <Icon name="PencilIcon" size={14} />
              <span>Edit</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1.5 bg-error hover:bg-error/90 text-error-foreground rounded-lg font-body-medium text-sm transition-all duration-300">
              <Icon name="TrashIcon" size={14} />
              <span>Delete</span>
            </button>
          </div>
        </div>
      )}

      {/* Content Table */}
      <div className="overflow-hidden rounded-xl border border-border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === currentData.length && currentData.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                  />
                </th>
                <th className="text-left p-4 font-body-medium text-sm text-foreground">Title</th>
                <th className="text-left p-4 font-body-medium text-sm text-foreground">Status</th>
                <th className="text-left p-4 font-body-medium text-sm text-foreground">Author</th>
                <th className="text-left p-4 font-body-medium text-sm text-foreground">Type</th>
                <th className="text-left p-4 font-body-medium text-sm text-foreground">Last Modified</th>
                <th className="text-left p-4 font-body-medium text-sm text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-background">
              {currentData.map((item) => (
                <tr key={item.id} className="border-t border-border hover:bg-muted/30 transition-colors duration-300">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                    />
                  </td>
                  <td className="p-4">
                    <div className="font-body-medium text-sm text-foreground">{item.title}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-body-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="font-body text-sm text-muted-foreground">{item.author}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-body text-sm text-muted-foreground">{item.type}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-body text-sm text-muted-foreground">{item.lastModified}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center justify-center w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
                        <Icon name="PencilIcon" size={14} />
                      </button>
                      <button className="flex items-center justify-center w-8 h-8 bg-muted hover:bg-error hover:text-error-foreground rounded-lg transition-all duration-300">
                        <Icon name="TrashIcon" size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="font-body text-sm text-muted-foreground">
          Showing 1-{currentData.length} of {currentData.length} items
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center justify-center w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
            <Icon name="ChevronLeftIcon" size={16} />
          </button>
          <button className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-lg">
            1
          </button>
          <button className="flex items-center justify-center w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
            <Icon name="ChevronRightIcon" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentManagement; 
