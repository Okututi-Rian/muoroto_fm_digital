'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ActionButtonProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  onClick: () => void;
}

interface QuickActionsProps {
  className?: string;
}

const ActionButton = ({ title, description, icon, color, onClick }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full glassmorphic rounded-2xl p-6 text-left spring-animation hover:scale-105 cultural-glow group"
    >
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon name={icon as any} size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-headline-medium text-lg text-foreground mb-1">
            {title}
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <Icon name="ChevronRightIcon" size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      </div>
    </button>
  );
};

const QuickActions = ({ className = '' }: QuickActionsProps) => {
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const actions = [
    {
      title: 'Add New Show',
      description: 'Create a new radio program with schedule and host details',
      icon: 'PlusCircleIcon',
      color: 'bg-primary',
      onClick: () => showNotification('New Show creation form would open here')
    },
    {
      title: 'Upload Podcast',
      description: 'Add new podcast episode with metadata and descriptions',
      icon: 'CloudArrowUpIcon',
      color: 'bg-accent',
      onClick: () => showNotification('Podcast upload interface would open here')
    },
    {
      title: 'Publish News',
      description: 'Create and publish breaking news or updates',
      icon: 'DocumentPlusIcon',
      color: 'bg-secondary',
      onClick: () => showNotification('News article editor would open here')
    },
    {
      title: 'Manage Sponsors',
      description: 'Add or update sponsor information and advertisements',
      icon: 'BuildingOffice2Icon',
      color: 'bg-warning',
      onClick: () => showNotification('Sponsor management panel would open here')
    },
    {
      title: 'Live Updates',
      description: 'Send real-time notifications and emergency broadcasts',
      icon: 'SpeakerWaveIcon',
      color: 'bg-error',
      onClick: () => showNotification('Live update broadcast panel would open here')
    },
    {
      title: 'User Management',
      description: 'Manage user roles, permissions, and access controls',
      icon: 'UserGroupIcon',
      color: 'bg-deep-forest',
      onClick: () => showNotification('User management interface would open here')
    }
  ];

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-2xl text-foreground">Quick Actions</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl font-body-medium text-sm transition-all duration-300">
          <Icon name="Cog6ToothIcon" size={18} />
          <span>Settings</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <ActionButton key={index} {...action} />
        ))}
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-24 right-6 glassmorphic rounded-xl p-4 shadow-glassmorphic-lg z-50 spring-animation">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
              <Icon name="CheckIcon" size={16} className="text-white" />
            </div>
            <p className="font-body text-sm text-foreground">{notification}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickActions; 
