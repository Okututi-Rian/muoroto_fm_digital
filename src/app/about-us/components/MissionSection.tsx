import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MissionValue {
  icon: string;
  title: string;
  description: string;
  metric?: string;
}

interface MissionSectionProps {
  className?: string;
}

const MissionSection = ({ className = '' }: MissionSectionProps) => {
  const missionValues: MissionValue[] = [
    {
      icon: 'HeartIcon',
      title: 'Community First',
      description: 'Every decision we make prioritizes our community\'s needs, values, and cultural preservation.',
      metric: '15+ Communities Served'
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Authentic Truth',
      description: 'We deliver honest, unbiased information that our listeners can trust in an era of misinformation.',
      metric: '99.8% Accuracy Rating'
    },
    {
      icon: 'SparklesIcon',
      title: 'Cultural Pride',
      description: 'Celebrating and preserving Kikuyu heritage while embracing modern innovation and progress.',
      metric: '200+ Cultural Programs'
    },
    {
      icon: 'GlobeAltIcon',
      title: 'Digital Innovation',
      description: 'Bridging traditional broadcasting with cutting-edge technology for enhanced listener experience.',
      metric: '24/7 Digital Streaming'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-muted ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-glassmorphic">
              <Icon name="StarIcon" size={24} className="text-primary-foreground" />
            </div>
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl text-foreground mb-6">
            Our Mission & Values
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Guided by the principle of "Mugambo Wa Ma" - The Truthful Voice - we create a trusted space 
            where truth, entertainment, and spiritual nourishment converge in perfect harmony.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glassmorphic rounded-3xl p-8 lg:p-12 mb-16 text-center">
          <h3 className="font-headline-medium text-2xl lg:text-3xl text-primary mb-6">
            "Your truthful voice in a noisy world"
          </h3>
          <p className="font-body text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
            At Muoroto FM, we believe that authentic storytelling has the power to unite communities, 
            preserve culture, and inspire positive change. Our mission is to be the beacon of truth 
            that bridges traditional wisdom with contemporary digital innovation, creating meaningful 
            connections that strengthen our community bonds.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionValues.map((value, index) => (
            <div
              key={index}
              className="glassmorphic rounded-2xl p-6 text-center hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glassmorphic">
                <Icon name={value.icon as any} size={28} className="text-white" />
              </div>
              
              <h4 className="font-headline-medium text-xl text-foreground mb-3">
                {value.title}
              </h4>
              
              <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                {value.description}
              </p>
              
              {value.metric && (
                <div className="inline-flex items-center px-3 py-1 bg-secondary/20 rounded-full">
                  <span className="font-body-medium text-sm text-secondary">
                    {value.metric}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Messages */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Where tradition meets innovation",
            "Community first, always authentic", 
            "Truth, entertainment & spiritual nourishment"
          ].map((message, index) => (
            <div
              key={index}
              className="glassmorphic rounded-xl p-6 text-center"
            >
              <p className="font-accent-italic text-lg text-primary">
                "{message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 
