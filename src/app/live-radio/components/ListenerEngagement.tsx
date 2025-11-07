'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ListenerEngagementProps {
  listenerCount: number;
  onSendMessage: (message: string) => void;
  onShare: (platform: string) => void;
}

const ListenerEngagement = ({ 
  listenerCount, 
  onSendMessage, 
  onShare 
}: ListenerEngagementProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [message, setMessage] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [recentMessages, setRecentMessages] = useState([
    {
      id: 1,
      user: 'Sarah K.',
      message: 'Great music selection today! 🎵',
      time: '2 min ago'
    },
    {
      id: 2,
      user: 'John M.',
      message: 'Can you play some Benga music?',
      time: '5 min ago'
    },
    {
      id: 3,
      user: 'Grace W.',
      message: 'Love this show! Greetings from Nakuru',
      time: '8 min ago'
    }
  ]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="glassmorphic rounded-2xl p-6">
        <div className="animate-pulse">
          <div className="w-32 h-6 bg-muted rounded mb-4"></div>
          <div className="space-y-3">
            <div className="w-full h-10 bg-muted rounded"></div>
            <div className="flex space-x-2">
              <div className="w-16 h-8 bg-muted rounded"></div>
              <div className="w-16 h-8 bg-muted rounded"></div>
              <div className="w-16 h-8 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const socialPlatforms = [
    { name: 'WhatsApp', icon: 'ChatBubbleLeftRightIcon', color: 'bg-green-500' },
    { name: 'Twitter', icon: 'AtSymbolIcon', color: 'bg-blue-500' },
    { name: 'Facebook', icon: 'UserGroupIcon', color: 'bg-blue-600' },
    { name: 'Instagram', icon: 'CameraIcon', color: 'bg-pink-500' }
  ];

  return (
    <div className="glassmorphic rounded-2xl p-6">
      {/* Listener Count */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-error rounded-full pulse-community"></div>
          <div>
            <h3 className="font-headline-medium text-lg text-foreground">
              {listenerCount.toLocaleString()} Listeners
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Tuned in right now
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setShowChat(!showChat)}
          className="flex items-center space-x-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl transition-all duration-300 font-body text-sm"
        >
          <Icon name="ChatBubbleLeftRightIcon" size={16} />
          <span>Chat</span>
        </button>
      </div>

      {/* Chat Section */}
      {showChat && (
        <div className="mb-6 p-4 bg-muted/30 rounded-xl">
          <div className="space-y-3 mb-4 max-h-32 overflow-y-auto">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-body text-xs text-primary-foreground">
                    {msg.user.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="font-body-medium text-xs text-foreground">
                      {msg.user}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      {msg.time}
                    </span>
                  </div>
                  <p className="font-body text-sm text-foreground">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Send a message..."
              className="flex-1 px-3 py-2 bg-background border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="px-4 py-2 bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Icon name="PaperAirplaneIcon" size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Social Sharing */}
      <div>
        <h4 className="font-body-medium text-sm text-foreground mb-3">
          Share this stream
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {socialPlatforms.map((platform) => (
            <button
              key={platform.name}
              onClick={() => onShare(platform.name)}
              className={`flex items-center space-x-2 px-3 py-2 ${platform.color} hover:opacity-90 text-white rounded-lg transition-all duration-300 font-body text-sm`}
            >
              <Icon name={platform.icon as any} size={16} />
              <span>{platform.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sleep Timer */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-body-medium text-sm text-foreground">
              Sleep Timer
            </h4>
            <p className="font-body text-xs text-muted-foreground">
              Auto-stop playback
            </p>
          </div>
          <select className="px-3 py-2 bg-background border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Off</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="120">2 hours</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ListenerEngagement; 
