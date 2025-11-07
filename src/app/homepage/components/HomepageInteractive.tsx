'use client';

import React from 'react';
import HeroSection from './HeroSection';
import LivePlayerWidget from './LivePlayerWidget';
import CommunityHighlights from './CommunityHighlights';

const HomepageInteractive = () => {
  return (
    <>
      <HeroSection />
      
      {/* Live Player Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LivePlayerWidget />
          </div>
        </div>
      </section>

      <CommunityHighlights />
    </>
  );
};

export default HomepageInteractive; 
