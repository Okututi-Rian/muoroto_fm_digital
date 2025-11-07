import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Show {
  id: string;
  title: string;
  description: string;
  host: {
    name: string;
    image: string;
    alt: string;
  };
  genre: string;
  timeSlot: string;
  frequency: string;
  image: string;
  alt: string;
  isLive: boolean;
  nextEpisode: string;
  rating: number;
  totalEpisodes: number;
}

interface ShowCardProps {
  show: Show;
}

const ShowCard = ({ show }: ShowCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-[1.02]">
      {/* Show Image */}
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={show.image}
          alt={show.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Live Indicator */}
        {show.isLive && (
          <div className="absolute top-4 left-4 flex items-center space-x-2 px-3 py-1.5 glassmorphic rounded-full">
            <div className="w-2 h-2 bg-error rounded-full pulse-community"></div>
            <span className="font-body-medium text-xs text-white">LIVE NOW</span>
          </div>
        )}
        
        {/* Genre Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-secondary/90 backdrop-blur-sm rounded-full">
          <span className="font-body-medium text-xs text-secondary-foreground">{show.genre}</span>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
        
        {/* Show Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
              <AppImage
                src={show.host.image}
                alt={show.host.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-body-medium text-sm text-white">{show.host.name}</span>
          </div>
          
          <h3 className="font-headline-medium text-lg text-white mb-1 line-clamp-2">
            {show.title}
          </h3>
          
          <div className="flex items-center space-x-4 text-white/80">
            <div className="flex items-center space-x-1">
              <Icon name="ClockIcon" size={14} />
              <span className="font-body text-xs">{show.timeSlot}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="RadioIcon" size={14} />
              <span className="font-body text-xs">{show.frequency}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Show Details */}
      <div className="p-6">
        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3">
          {show.description}
        </p>
        
        {/* Show Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="StarIcon" size={16} className="text-secondary" />
              <span className="font-body-medium text-sm text-foreground">{show.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="PlayIcon" size={16} className="text-muted-foreground" />
              <span className="font-body text-sm text-muted-foreground">{show.totalEpisodes} episodes</span>
            </div>
          </div>
        </div>
        
        {/* Next Episode */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-body text-xs text-muted-foreground mb-1">Next Episode</p>
            <p className="font-body-medium text-sm text-foreground">{show.nextEpisode}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 cultural-glow">
              <Icon name="HeartIcon" size={18} />
            </button>
            <Link
              href={`/shows-and-schedule/${show.id}`}
              className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-cta text-sm transition-all duration-300 spring-animation hover:scale-105"
            >
              <Icon name="PlayIcon" size={16} />
              <span>Listen</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard; 
