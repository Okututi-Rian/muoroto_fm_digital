'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  category: 'milestone' | 'award' | 'expansion' | 'innovation';
}

interface TimelineSectionProps {
  className?: string;
}

const TimelineSection = ({ className = '' }: TimelineSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2018',
      title: 'Muoroto FM Launch',
      description: 'Started broadcasting with a mission to preserve Kikuyu culture while embracing modern technology.',
      icon: 'RocketLaunchIcon',
      category: 'milestone'
    },
    {
      year: '2019',
      title: 'Digital Streaming Platform',
      description: 'Launched 24/7 online streaming, reaching diaspora communities worldwide.',
      icon: 'GlobeAltIcon',
      category: 'innovation'
    },
    {
      year: '2020',
      title: 'Community Impact Award',
      description: 'Recognized by Kenya Broadcasting Corporation for outstanding community service during pandemic.',
      icon: 'TrophyIcon',
      category: 'award'
    },
    {
      year: '2021',
      title: 'Coverage Expansion',
      description: 'Extended broadcast coverage to reach 15+ counties across Central and Eastern Kenya.',
      icon: 'MapIcon',
      category: 'expansion'
    },
    {
      year: '2022',
      title: 'Cultural Preservation Excellence',
      description: 'Awarded by National Museums of Kenya for promoting indigenous language and traditions.',
      icon: 'AcademicCapIcon',
      category: 'award'
    },
    {
      year: '2023',
      title: 'Mobile App Launch',
      description: 'Introduced progressive web app with offline capabilities and push notifications.',
      icon: 'DevicePhoneMobileIcon',
      category: 'innovation'
    },
    {
      year: '2024',
      title: '500K Listeners Milestone',
      description: 'Reached half a million regular listeners across digital and traditional platforms.',
      icon: 'UserGroupIcon',
      category: 'milestone'
    },
    {
      year: '2025',
      title: 'Broadcasting Excellence Award',
      description: 'Recognized as Kenya\'s Most Innovative Digital Radio Station by Media Council.',
      icon: 'StarIcon',
      category: 'award'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Events', icon: 'Squares2X2Icon' },
    { key: 'milestone', label: 'Milestones', icon: 'FlagIcon' },
    { key: 'award', label: 'Awards', icon: 'TrophyIcon' },
    { key: 'expansion', label: 'Growth', icon: 'ArrowTrendingUpIcon' },
    { key: 'innovation', label: 'Innovation', icon: 'LightBulbIcon' }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'milestone': return 'bg-primary';
      case 'award': return 'bg-secondary';
      case 'expansion': return 'bg-accent';
      case 'innovation': return 'bg-vibrant-orange';
      default: return 'bg-primary';
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-glassmorphic">
              <Icon name="ClockIcon" size={24} className="text-accent-foreground" />
            </div>
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl text-foreground mb-6">
            Our Journey Through Time
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to becoming Kenya's most innovative digital radio station, 
            explore the milestones that shaped our story.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-body-medium text-sm transition-all duration-300 spring-animation hover:scale-105 ${
                selectedCategory === category.key
                  ? 'bg-primary text-primary-foreground shadow-glassmorphic'
                  : 'glassmorphic text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category.icon as any} size={16} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-secondary h-full rounded-full opacity-30"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {filteredEvents.map((event, index) => (
              <div
                key={`${event.year}-${index}`}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-8`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-md">
                  <div className="glassmorphic rounded-2xl p-6 hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 ${getCategoryColor(event.category)} rounded-xl flex items-center justify-center shadow-glassmorphic`}>
                        <Icon name={event.icon as any} size={20} className="text-white" />
                      </div>
                      <span className="font-headline-medium text-2xl text-primary">
                        {event.year}
                      </span>
                    </div>
                    
                    <h3 className="font-headline-medium text-xl text-foreground mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className={`w-6 h-6 ${getCategoryColor(event.category)} rounded-full shadow-glassmorphic pulse-community`}></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-md"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Years Broadcasting', value: '7+', icon: 'CalendarDaysIcon' },
            { label: 'Awards Won', value: '12', icon: 'TrophyIcon' },
            { label: 'Counties Covered', value: '15+', icon: 'MapIcon' },
            { label: 'Community Programs', value: '200+', icon: 'HeartIcon' }
          ].map((stat, index) => (
            <div
              key={index}
              className="glassmorphic rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                <Icon name={stat.icon as any} size={16} className="text-primary-foreground" />
              </div>
              <div className="font-headline text-2xl text-primary mb-1">
                {stat.value}
              </div>
              <div className="font-body text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
