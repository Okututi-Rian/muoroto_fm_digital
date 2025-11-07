'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import TimelineSection from './TimelineSection';
import TeamSection from './TeamSection';
import AwardsSection from './AwardsSection';
import CommunityImpactSection from './CommunityImpactSection';

interface AboutUsInteractiveProps {
  className?: string;
}

const AboutUsInteractive = ({ className = '' }: AboutUsInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        {/* Loading skeleton */}
        <div className="animate-pulse">
          <div className="h-[70vh] bg-muted rounded-lg mb-8"></div>
          <div className="space-y-8 px-4">
            <div className="h-64 bg-muted rounded-lg"></div>
            <div className="h-96 bg-muted rounded-lg"></div>
            <div className="h-80 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <HeroSection />
      <MissionSection />
      <TimelineSection />
      <TeamSection />
      <AwardsSection />
      <CommunityImpactSection />
    </div>
  );
};

export default AboutUsInteractive; 
