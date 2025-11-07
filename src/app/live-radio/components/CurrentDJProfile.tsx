import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface DJProfile {
  id: number;
  name: string;
  image: string;
  alt: string;
  bio: string;
  specialties: string[];
  experience: string;
  socialMedia: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

interface CurrentDJProfileProps {
  dj: DJProfile;
}

const CurrentDJProfile = ({ dj }: CurrentDJProfileProps) => {
  return (
    <div className="glassmorphic rounded-2xl p-6 mb-8">
      <div className="flex items-start space-x-4">
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 rounded-2xl overflow-hidden">
            <AppImage
              src={dj.image}
              alt={dj.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full pulse-community"></div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-headline-medium text-xl text-foreground">
              {dj.name}
            </h3>
            <div className="flex items-center space-x-2">
              {dj.socialMedia.twitter && (
                <a
                  href={dj.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                >
                  <Icon name="AtSymbolIcon" size={16} />
                </a>
              )}
              {dj.socialMedia.instagram && (
                <a
                  href={dj.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                >
                  <Icon name="CameraIcon" size={16} />
                </a>
              )}
              {dj.socialMedia.facebook && (
                <a
                  href={dj.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                >
                  <Icon name="UserGroupIcon" size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">
            {dj.bio}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {dj.specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent/20 text-accent rounded-full font-body text-xs"
              >
                {specialty}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="ClockIcon" size={14} />
              <span>{dj.experience}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="MicrophoneIcon" size={14} />
              <span>Live Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDJProfile; 
