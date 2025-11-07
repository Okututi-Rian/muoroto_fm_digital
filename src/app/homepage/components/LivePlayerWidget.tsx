'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CurrentShow {
  id: number;
  title: string;
  host: string;
  description: string;
  image: string;
  alt: string;
  startTime: string;
  endTime: string;
  category: string;
}

const LivePlayerWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [currentListeners, setCurrentListeners] = useState(1247);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const currentShow: CurrentShow = {
    id: 1,
    title: 'Mugambo Wa Ma - Morning Edition',
    host: 'Samuel Mwangi',
    description: 'Your daily dose of truth, wisdom, and community connection',
    image: "https://images.unsplash.com/photo-1581369728823-aad7d255cc20",
    alt: 'Professional African male radio host with headphones in modern broadcasting studio',
    startTime: '06:00',
    endTime: '10:00',
    category: 'Talk Show'
  };

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentListeners((prev) => prev + Math.floor(Math.random() * 5) - 2);
    }, 30000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
  };

  if (!isHydrated) {
    return (
      <div className="glassmorphic rounded-2xl p-6 animate-pulse">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-xl"></div>
          <div className="flex-1">
            <div className="h-4 bg-white/20 rounded mb-2 w-3/4"></div>
            <div className="h-3 bg-white/20 rounded w-1/2"></div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="glassmorphic rounded-2xl p-6 shadow-glassmorphic">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-error rounded-full pulse-community"></div>
          <span className="font-cta text-sm text-foreground">Live Now</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="UserGroupIcon" size={16} />
          <span>{currentListeners.toLocaleString()} listening</span>
        </div>
      </div>

      {/* Current Show Info */}
      <div className="flex items-start space-x-4 mb-6">
        <div className="relative">
          <AppImage
            src={currentShow.image}
            alt={currentShow.alt}
            className="w-16 h-16 rounded-xl object-cover" />

          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
            <Icon name="MicrophoneIcon" size={12} className="text-white" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-headline-medium text-lg text-foreground mb-1 truncate">
            {currentShow.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-1">
            with {currentShow.host}
          </p>
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <span>{currentShow.startTime} - {currentShow.endTime}</span>
            <span className="px-2 py-1 bg-primary/20 text-primary rounded-md">
              {currentShow.category}
            </span>
          </div>
        </div>
      </div>

      {/* Waveform Visualization */}
      <div className="flex items-center justify-center space-x-1 mb-6 h-12">
        {[...Array(20)].map((_, i) =>
        <div
          key={i}
          className={`w-1 bg-gradient-to-t from-primary to-accent rounded-full waveform-bar ${
          isPlaying ? 'animate-pulse' : ''}`
          }
          style={{
            height: `${Math.random() * 40 + 10}px`,
            animationDelay: `${i * 0.1}s`
          }} />

        )}
      </div>

      {/* Player Controls */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={togglePlay}
          className="w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center text-white shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105"
          aria-label={isPlaying ? 'Pause' : 'Play'}>

          <Icon name={isPlaying ? 'PauseIcon' : 'PlayIcon'} size={24} />
        </button>

        {/* Volume Control */}
        <div className="flex items-center space-x-3 flex-1 mx-6">
          <Icon name="SpeakerWaveIcon" size={20} className="text-muted-foreground" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer slider" />

          <span className="text-sm text-muted-foreground w-8">{volume}</span>
        </div>

        <Link
          href="/live-radio"
          className="w-10 h-10 glassmorphic rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cultural-glow"
          aria-label="Open full player">

          <Icon name="ArrowTopRightOnSquareIcon" size={18} />
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Link
          href="/shows-and-schedule"
          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">

          <Icon name="CalendarDaysIcon" size={16} />
          <span>Schedule</span>
        </Link>
        <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
          <Icon name="HeartIcon" size={16} />
          <span>Favorite</span>
        </button>
        <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
          <Icon name="ShareIcon" size={16} />
          <span>Share</span>
        </button>
      </div>
    </div>);

};

export default LivePlayerWidget; 
