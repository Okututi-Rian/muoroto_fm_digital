'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SocialShareProps {
  title: string;
  url?: string;
}

const SocialShare = ({ title, url }: SocialShareProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setIsHydrated(true);
    if (typeof window !== 'undefined') {
      setCurrentUrl(url || window.location.href);
    }
  }, [url]);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: 'ShareIcon',
      color: 'hover:bg-blue-600 hover:text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'Twitter',
      icon: 'ChatBubbleLeftRightIcon',
      color: 'hover:bg-sky-500 hover:text-white',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'WhatsApp',
      icon: 'DevicePhoneMobileIcon',
      color: 'hover:bg-green-600 hover:text-white',
      url: `https://wa.me/?text=${encodeURIComponent(`${title} ${currentUrl}`)}`
    },
    {
      name: 'Copy Link',
      icon: 'LinkIcon',
      color: 'hover:bg-gray-600 hover:text-white',
      action: 'copy'
    }
  ];

  const handleShare = async (link: any) => {
    if (!isHydrated) return;

    if (link.action === 'copy') {
      try {
        await navigator.clipboard.writeText(currentUrl);
        // You could add a toast notification here
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    } else {
      window.open(link.url, '_blank', 'width=600,height=400');
    }
  };

  if (!isHydrated) {
    return (
      <div className="flex items-center space-x-3">
        <span className="font-body-medium text-sm text-muted-foreground">Share:</span>
        <div className="flex space-x-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-10 h-10 bg-muted rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <span className="font-body-medium text-sm text-muted-foreground">Share:</span>
      <div className="flex space-x-2">
        {shareLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleShare(link)}
            className={`w-10 h-10 rounded-lg bg-muted text-muted-foreground transition-all duration-300 flex items-center justify-center ${link.color} spring-animation hover:scale-110`}
            title={link.name}
          >
            <Icon name={link.icon as any} size={18} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;
