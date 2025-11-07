import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FeaturedShowData {
  id: string;
  title: string;
  description: string;
  host: {
    name: string;
    image: string;
    alt: string;
  };
  image: string;
  alt: string;
  timeSlot: string;
  nextEpisode: string;
  isLive: boolean;
  highlights: string[];
}

interface FeaturedShowProps {
  show: FeaturedShowData;
}

const FeaturedShow = ({ show }: FeaturedShowProps) => {
  return (
    <div className="relative bg-card rounded-3xl overflow-hidden shadow-glassmorphic-lg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <AppImage
          src={show.image}
          alt={show.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 lg:p-12">
        <div className="max-w-2xl">
          {/* Live Badge */}
          {show.isLive && (
            <div className="inline-flex items-center space-x-2 px-4 py-2 glassmorphic rounded-full mb-6">
              <div className="w-3 h-3 bg-error rounded-full pulse-community"></div>
              <span className="font-body-medium text-sm text-white">LIVE NOW</span>
            </div>
          )}
          
          {/* Show Title */}
          <h1 className="font-headline text-4xl lg:text-5xl text-white mb-4 leading-tight">
            {show.title}
          </h1>
          
          {/* Host Info */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
              <AppImage
                src={show.host.image}
                alt={show.host.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-body-medium text-white">Hosted by {show.host.name}</p>
              <p className="font-body text-sm text-white/80">{show.timeSlot}</p>
            </div>
          </div>
          
          {/* Description */}
          <p className="font-body text-lg text-white/90 mb-6 leading-relaxed">
            {show.description}
          </p>
          
          {/* Highlights */}
          <div className="mb-8">
            <h3 className="font-headline-medium text-white mb-4">Show Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {show.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="font-body text-sm text-white/80">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/live-radio"
              className="flex items-center justify-center space-x-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-cta text-lg shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105"
            >
              <Icon name="PlayIcon" size={24} />
              <span>Listen Live</span>
            </Link>
            
            <Link
              href={`/shows-and-schedule/${show.id}`}
              className="flex items-center justify-center space-x-3 px-8 py-4 glassmorphic text-white hover:bg-white/20 rounded-2xl font-cta text-lg transition-all duration-300 spring-animation hover:scale-105"
            >
              <Icon name="InformationCircleIcon" size={24} />
              <span>Show Details</span>
            </Link>
          </div>
          
          {/* Next Episode */}
          <div className="mt-6 p-4 glassmorphic rounded-xl">
            <p className="font-body text-sm text-white/70 mb-1">Next Episode</p>
            <p className="font-body-medium text-white">{show.nextEpisode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedShow; 
