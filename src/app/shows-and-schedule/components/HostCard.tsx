import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Host {
  id: string;
  name: string;
  image: string;
  alt: string;
  bio: string;
  specialties: string[];
  experience: string;
  shows: string[];
  socialMedia: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

interface HostCardProps {
  host: Host;
}

const HostCard = ({ host }: HostCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-[1.02] group">
      {/* Host Image */}
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={host.image}
          alt={host.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
        
        {/* Social Media Links */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          {host.socialMedia.twitter && (
            <a
              href={host.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 glassmorphic rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Icon name="AtSymbolIcon" size={16} />
            </a>
          )}
          {host.socialMedia.instagram && (
            <a
              href={host.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 glassmorphic rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Icon name="CameraIcon" size={16} />
            </a>
          )}
          {host.socialMedia.facebook && (
            <a
              href={host.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 glassmorphic rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Icon name="UserGroupIcon" size={16} />
            </a>
          )}
        </div>
        
        {/* Host Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-headline-medium text-xl text-white mb-1">{host.name}</h3>
          <p className="font-body text-sm text-white/80">{host.experience}</p>
        </div>
      </div>
      
      {/* Host Details */}
      <div className="p-6">
        {/* Bio */}
        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3">
          {host.bio}
        </p>
        
        {/* Specialties */}
        <div className="mb-4">
          <h4 className="font-body-medium text-sm text-foreground mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {host.specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted rounded-full font-body text-xs text-muted-foreground"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        {/* Shows */}
        <div>
          <h4 className="font-body-medium text-sm text-foreground mb-2">Current Shows</h4>
          <div className="space-y-2">
            {host.shows.map((show, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name="RadioIcon" size={14} className="text-primary" />
                <span className="font-body text-sm text-foreground">{show}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostCard; 
