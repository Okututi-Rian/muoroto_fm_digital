import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  albumAlt: string;
  playedAt: string;
  duration: string;
  genre: string;
}

interface RecentlyPlayedProps {
  tracks: Track[];
}

const RecentlyPlayed = ({ tracks }: RecentlyPlayedProps) => {
  return (
    <div className="glassmorphic rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline-medium text-xl text-foreground">
          Recently Played
        </h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 font-body text-sm">
          <Icon name="MusicalNoteIcon" size={16} />
          <span>View All</span>
        </button>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-muted/50 transition-all duration-300 group"
          >
            <div className="flex-shrink-0 relative">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <AppImage
                  src={track.albumArt}
                  alt={track.albumAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <Icon name="PlayIcon" size={16} className="text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-body-medium text-sm text-foreground truncate">
                {track.title}
              </h4>
              <p className="font-body text-xs text-muted-foreground truncate">
                {track.artist}
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="font-body text-xs text-muted-foreground">
                  {track.playedAt}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="px-2 py-0.5 bg-secondary/20 text-secondary rounded-full font-body text-xs">
                  {track.genre}
                </span>
              </div>
            </div>

            <div className="flex-shrink-0 flex items-center space-x-2">
              <span className="font-body text-xs text-muted-foreground">
                {track.duration}
              </span>
              <button className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Icon name="HeartIcon" size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
