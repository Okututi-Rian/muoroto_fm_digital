import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1635770699560-4d5cf03811c9"
          alt="Modern radio broadcasting studio with professional microphones and mixing equipment in warm lighting"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-deep-forest/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glassmorphic rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-glassmorphic pulse-community">
              <Icon name="SpeakerWaveIcon" size={32} className="text-secondary-foreground" />
            </div>
          </div>
          
          <h1 className="font-headline text-4xl lg:text-6xl text-white mb-6">
            Mugambo Wa Ma
          </h1>
          
          <p className="font-headline-medium text-xl lg:text-2xl text-secondary mb-8">
            The Truthful Voice
          </p>
          
          <p className="font-body text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Muoroto FM is a National Radio Station based in Nairobi County, Kenya. Our programs are based on the main interests of our audience, ranging from News, Human Interest discussions, Spiritual nourishment, and Entertainment among others. Our slogan is an assurance that our affirmative role in the Kenyan Society is to always produce veracious content through our Super Talented Staff.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <div className="flex items-center space-x-2 glassmorphic px-6 py-3 rounded-xl">
              <Icon name="CalendarDaysIcon" size={20} className="text-secondary" />
              <span className="font-body-medium text-white">Established 2018</span>
            </div>
            <div className="flex items-center space-x-2 glassmorphic px-6 py-3 rounded-xl">
              <Icon name="UserGroupIcon" size={20} className="text-secondary" />
              <span className="font-body-medium text-white">500K+ Listeners</span>
            </div>
            <div className="flex items-center space-x-2 glassmorphic px-6 py-3 rounded-xl">
              <Icon name="MapPinIcon" size={20} className="text-secondary" />
              <span className="font-body-medium text-white">Kenya Wide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;