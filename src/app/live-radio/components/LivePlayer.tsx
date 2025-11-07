'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface LivePlayerProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
  currentShow: string;
  currentDJ: string;
  audioQuality: string;
  onQualityChange: (quality: string) => void;
}

const LivePlayer = ({
  isPlaying,
  onPlayPause,
  volume,
  onVolumeChange,
  currentShow,
  currentDJ,
  audioQuality,
  onQualityChange
}: LivePlayerProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showQualityMenu, setShowQualityMenu] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="glassmorphic rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-muted rounded-full animate-pulse"></div>
            <div>
              <div className="w-32 h-4 bg-muted rounded animate-pulse mb-2"></div>
              <div className="w-24 h-3 bg-muted rounded animate-pulse"></div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-muted rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  const qualityOptions = [
    { label: 'High (320kbps)', value: 'high' },
    { label: 'Medium (128kbps)', value: 'medium' },
    { label: 'Low (64kbps)', value: 'low' }
  ];

  return (
    <div className="glassmorphic rounded-2xl p-6 mb-8 spring-animation">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={onPlayPause}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 spring-animation hover:scale-105 ${
                isPlaying 
                  ? 'bg-primary text-primary-foreground pulse-community shadow-glassmorphic' 
                  : 'bg-muted hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              <Icon 
                name={isPlaying ? 'PauseIcon' : 'PlayIcon'} 
                size={24} 
              />
            </button>
            {isPlaying && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-error rounded-full pulse-community"></div>
            )}
          </div>
          
          <div>
            <h3 className="font-headline-medium text-lg text-foreground">
              {currentShow}
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              with {currentDJ}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Volume Control */}
          <div className="relative">
            <button
              onClick={() => setShowVolumeSlider(!showVolumeSlider)}
              className="w-10 h-10 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
            >
              <Icon 
                name={volume === 0 ? 'SpeakerXMarkIcon' : volume < 50 ? 'SpeakerWaveIcon' : 'SpeakerWaveIcon'} 
                size={18} 
              />
            </button>
            
            {showVolumeSlider && (
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 glassmorphic rounded-xl p-3 z-10">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => onVolumeChange(Number(e.target.value))}
                  className="w-20 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Quality Selector */}
          <div className="relative">
            <button
              onClick={() => setShowQualityMenu(!showQualityMenu)}
              className="w-10 h-10 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
            >
              <Icon name="Cog6ToothIcon" size={18} />
            </button>
            
            {showQualityMenu && (
              <div className="absolute bottom-12 right-0 glassmorphic rounded-xl p-2 z-10 min-w-40">
                {qualityOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onQualityChange(option.value);
                      setShowQualityMenu(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg font-body text-sm transition-all duration-300 ${
                      audioQuality === option.value
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Waveform Visualization */}
      <div className="flex items-center justify-center space-x-1 h-12 mb-4">
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className={`w-1 bg-primary rounded-full transition-all duration-300 ${
              isPlaying ? 'waveform-bar' : 'h-2'
            }`}
            style={{
              height: isPlaying ? `${Math.random() * 40 + 8}px` : '8px',
              animationDelay: `${index * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-error rounded-full pulse-community"></div>
          <span className="font-body text-muted-foreground">
            {isPlaying ? 'LIVE ON AIR' : 'OFFLINE'}
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="font-body text-muted-foreground">
            Quality: {qualityOptions.find(q => q.value === audioQuality)?.label.split(' ')[0]}
          </span>
          <span className="font-body text-muted-foreground">
            Volume: {volume}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default LivePlayer; 
