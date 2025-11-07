'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated || !email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (!isHydrated) {
    return (
      <div className="glassmorphic rounded-2xl p-6 mb-8">
        <div className="h-32 bg-muted rounded-xl animate-pulse"></div>
      </div>
    );
  }

  if (isSubscribed) {
    return (
      <div className="glassmorphic rounded-2xl p-6 mb-8 text-center">
        <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckIcon" size={32} className="text-success-foreground" />
        </div>
        <h3 className="font-headline-medium text-xl text-foreground mb-2">
          Successfully Subscribed!
        </h3>
        <p className="font-body text-muted-foreground">
          Thank you for subscribing to Muoroto FM news updates. You'll receive the latest news directly in your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="glassmorphic rounded-2xl p-6 mb-8">
      <div className="text-center mb-6">
        <h3 className="font-headline-medium text-xl text-foreground mb-2">
          Stay Updated with Muoroto FM
        </h3>
        <p className="font-body text-muted-foreground">
          Get the latest news and updates delivered directly to your inbox
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Icon 
            name="EnvelopeIcon" 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading || !email}
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground rounded-xl font-cta transition-all duration-300 spring-animation hover:scale-105 disabled:hover:scale-100"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
              <span>Subscribing...</span>
            </>
          ) : (
            <>
              <Icon name="PaperAirplaneIcon" size={18} />
              <span>Subscribe to Newsletter</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup; 
