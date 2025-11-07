import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
  category: 'broadcasting' | 'community' | 'innovation' | 'cultural';
  image: string;
  alt: string;
}

interface AwardsSectionProps {
  className?: string;
}

const AwardsSection = ({ className = '' }: AwardsSectionProps) => {
  const awards: Award[] = [
  {
    title: 'Best Digital Radio Innovation',
    organization: 'Kenya Broadcasting Awards',
    year: '2025',
    description: 'Recognized for pioneering digital streaming technology and mobile app development in Kenyan radio broadcasting.',
    category: 'innovation',
    image: "https://images.unsplash.com/photo-1650089603011-a1d7a512430a",
    alt: 'Golden trophy award with digital innovation theme on elegant podium with spotlights'
  },
  {
    title: 'Community Impact Excellence',
    organization: 'Media Council of Kenya',
    year: '2024',
    description: 'Honored for outstanding contribution to community development and cultural preservation through authentic programming.',
    category: 'community',
    image: "https://images.unsplash.com/photo-1614769670146-dc1aa2aa2f14",
    alt: 'Silver community service award with hands reaching together design on marble base'
  },
  {
    title: 'Cultural Preservation Champion',
    organization: 'National Museums of Kenya',
    year: '2023',
    description: 'Awarded for exceptional efforts in promoting and preserving Kikuyu language, traditions, and cultural heritage.',
    category: 'cultural',
    image: "https://images.unsplash.com/photo-1431367068252-d4bc51d05572",
    alt: 'Bronze cultural heritage award with traditional African patterns and modern design elements'
  },
  {
    title: 'Broadcasting Excellence Award',
    organization: 'East Africa Media Summit',
    year: '2022',
    description: 'Recognized for maintaining highest standards in radio broadcasting quality, content, and listener engagement.',
    category: 'broadcasting',
    image: "https://images.unsplash.com/photo-1608264959380-0ae9ee6beca3",
    alt: 'Crystal broadcasting excellence award with radio wave patterns etched in glass'
  }];


  const certifications = [
  {
    title: 'ISO 9001:2015 Quality Management',
    issuer: 'Kenya Bureau of Standards',
    icon: 'ShieldCheckIcon'
  },
  {
    title: 'Digital Broadcasting License',
    issuer: 'Communications Authority of Kenya',
    icon: 'RadioIcon'
  },
  {
    title: 'Community Radio Certification',
    issuer: 'Kenya Community Media Network',
    icon: 'UserGroupIcon'
  },
  {
    title: 'Cultural Heritage Partner',
    issuer: 'Ministry of Sports, Culture & Heritage',
    icon: 'BuildingLibraryIcon'
  }];


  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'broadcasting':return 'bg-primary';
      case 'community':return 'bg-accent';
      case 'innovation':return 'bg-vibrant-orange';
      case 'cultural':return 'bg-secondary';
      default:return 'bg-primary';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'broadcasting':return 'RadioIcon';
      case 'community':return 'HeartIcon';
      case 'innovation':return 'LightBulbIcon';
      case 'cultural':return 'AcademicCapIcon';
      default:return 'TrophyIcon';
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-glassmorphic">
              <Icon name="TrophyIcon" size={24} className="text-secondary-foreground" />
            </div>
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl text-foreground mb-6">
            Awards & Recognition
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by leading organizations 
            across Kenya and East Africa.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {awards.map((award, index) =>
          <div
            key={index}
            className="glassmorphic rounded-2xl p-6 hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105">

              <div className="flex items-start space-x-4">
                {/* Award Image */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-glassmorphic">
                    <AppImage
                    src={award.image}
                    alt={award.alt}
                    className="w-full h-full object-cover" />

                  </div>
                </div>

                {/* Award Details */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-6 h-6 ${getCategoryColor(award.category)} rounded-lg flex items-center justify-center`}>
                      <Icon name={getCategoryIcon(award.category) as any} size={14} className="text-white" />
                    </div>
                    <span className="font-body-medium text-sm text-primary">
                      {award.year}
                    </span>
                  </div>

                  <h3 className="font-headline-medium text-xl text-foreground mb-2">
                    {award.title}
                  </h3>

                  <p className="font-body-medium text-sm text-accent mb-3">
                    {award.organization}
                  </p>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Certifications */}
        <div className="glassmorphic rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-headline-medium text-2xl text-foreground mb-4">
              Certifications & Licenses
            </h3>
            <p className="font-body text-muted-foreground">
              Official certifications ensuring quality, compliance, and professional standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) =>
            <div
              key={index}
              className="text-center p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-all duration-300">

                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3 shadow-glassmorphic">
                  <Icon name={cert.icon as any} size={20} className="text-primary-foreground" />
                </div>
                
                <h4 className="font-body-medium text-sm text-foreground mb-2">
                  {cert.title}
                </h4>
                
                <p className="font-body text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Recognition Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
          { label: 'Awards Won', value: '25+', icon: 'TrophyIcon' },
          { label: 'Certifications', value: '8', icon: 'ShieldCheckIcon' },
          { label: 'Years Recognized', value: '7', icon: 'CalendarDaysIcon' },
          { label: 'Industry Partners', value: '15+', icon: 'HandshakeIcon' }].
          map((stat, index) =>
          <div
            key={index}
            className="glassmorphic rounded-xl p-4 text-center">

              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
                <Icon name={stat.icon as any} size={16} className="text-secondary-foreground" />
              </div>
              <div className="font-headline text-2xl text-secondary mb-1">
                {stat.value}
              </div>
              <div className="font-body text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AwardsSection; 
