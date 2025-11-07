'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ImpactStory {
  title: string;
  description: string;
  image: string;
  alt: string;
  category: 'education' | 'health' | 'culture' | 'economic';
  metrics: {
    label: string;
    value: string;
  }[];
}

interface Partnership {
  name: string;
  type: string;
  description: string;
  logo: string;
  alt: string;
}

interface CommunityImpactSectionProps {
  className?: string;
}

const CommunityImpactSection = ({ className = '' }: CommunityImpactSectionProps) => {
  const [activeTab, setActiveTab] = useState<string>('stories');

  const impactStories: ImpactStory[] = [
  {
    title: 'Educational Scholarship Program',
    description: 'Supporting bright students from underprivileged families to access quality education through our annual scholarship initiative.',
    image: "https://images.unsplash.com/photo-1567057420215-0afa9aa9253a",
    alt: 'Young African students in school uniforms smiling while studying together in bright classroom',
    category: 'education',
    metrics: [
    { label: 'Students Supported', value: '150+' },
    { label: 'Schools Partnered', value: '25' }]

  },
  {
    title: 'Health Awareness Campaigns',
    description: 'Promoting community health through regular health talks, vaccination drives, and wellness programs in partnership with local hospitals.',
    image: "https://images.unsplash.com/photo-1623854767236-0f929b2f8047",
    alt: 'Healthcare worker in white coat providing health education to community members outdoors',
    category: 'health',
    metrics: [
    { label: 'People Reached', value: '50K+' },
    { label: 'Health Camps', value: '40' }]

  },
  {
    title: 'Cultural Festival Organization',
    description: 'Organizing annual cultural festivals that celebrate Kikuyu traditions, bringing communities together to preserve our rich heritage.',
    image: "https://images.unsplash.com/photo-1677026121547-80e9fbea87db",
    alt: 'Colorful traditional African cultural festival with dancers in vibrant costumes performing for community',
    category: 'culture',
    metrics: [
    { label: 'Festivals Organized', value: '15' },
    { label: 'Participants', value: '25K+' }]

  },
  {
    title: 'Small Business Support',
    description: 'Empowering local entrepreneurs through business mentorship programs, market linkages, and promotional opportunities on our platform.',
    image: "https://images.unsplash.com/photo-1732287277552-6be1436f7113",
    alt: 'African woman entrepreneur proudly standing in front of her small business shop with colorful products',
    category: 'economic',
    metrics: [
    { label: 'Businesses Supported', value: '200+' },
    { label: 'Jobs Created', value: '500+' }]

  }];


  const partnerships: Partnership[] = [
  {
    name: 'Kenya Red Cross Society',
    type: 'Humanitarian Partner',
    description: 'Collaborating on disaster relief and community health initiatives across Central Kenya.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1351fa77f-1762536321610.png",
    alt: 'Red Cross logo with medical cross symbol on white background representing humanitarian aid'
  },
  {
    name: 'Ministry of Education',
    type: 'Government Partner',
    description: 'Supporting educational programs and literacy campaigns in rural communities.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1dcb731f7-1762536322153.png",
    alt: 'Government education ministry emblem with book and torch symbols representing knowledge'
  },
  {
    name: 'Kikuyu Cultural Association',
    type: 'Cultural Partner',
    description: 'Preserving and promoting Kikuyu language, traditions, and cultural practices.',
    logo: "https://images.unsplash.com/photo-1717913490532-ba58f9923efc",
    alt: 'Traditional African cultural symbol with geometric patterns representing heritage preservation'
  },
  {
    name: 'Local Farmers Cooperative',
    type: 'Economic Partner',
    description: 'Promoting agricultural development and market access for smallholder farmers.',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13150a14c-1762536320655.png",
    alt: 'Agricultural cooperative logo with wheat stalks and farming tools representing rural development'
  }];


  const impactMetrics = [
  { label: 'Lives Touched', value: '100K+', icon: 'HeartIcon', color: 'bg-error' },
  { label: 'Communities Served', value: '50+', icon: 'HomeModernIcon', color: 'bg-primary' },
  { label: 'Programs Launched', value: '75', icon: 'RocketLaunchIcon', color: 'bg-accent' },
  { label: 'Partners Engaged', value: '30+', icon: 'HandshakeIcon', color: 'bg-secondary' }];


  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education':return 'bg-primary';
      case 'health':return 'bg-error';
      case 'culture':return 'bg-secondary';
      case 'economic':return 'bg-accent';
      default:return 'bg-primary';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education':return 'AcademicCapIcon';
      case 'health':return 'HeartIcon';
      case 'culture':return 'MusicalNoteIcon';
      case 'economic':return 'CurrencyDollarIcon';
      default:return 'SparklesIcon';
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-error rounded-xl flex items-center justify-center shadow-glassmorphic pulse-community">
              <Icon name="HeartIcon" size={24} className="text-white" />
            </div>
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl text-foreground mb-6">
            Community Impact
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond broadcasting, we are deeply committed to uplifting our community through 
            meaningful programs and partnerships that create lasting positive change.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) =>
          <div
            key={index}
            className="glassmorphic rounded-2xl p-6 text-center hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105">

              <div className={`w-12 h-12 ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glassmorphic`}>
                <Icon name={metric.icon as any} size={24} className="text-white" />
              </div>
              <div className="font-headline text-3xl text-foreground mb-2">
                {metric.value}
              </div>
              <div className="font-body text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glassmorphic rounded-xl p-2 flex space-x-2">
            {[
            { key: 'stories', label: 'Impact Stories', icon: 'BookOpenIcon' },
            { key: 'partnerships', label: 'Partnerships', icon: 'HandshakeIcon' }].
            map((tab) =>
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-body-medium text-sm transition-all duration-300 spring-animation hover:scale-105 ${
              activeTab === tab.key ?
              'bg-primary text-primary-foreground shadow-glassmorphic' :
              'text-foreground hover:bg-muted'}`
              }>

                <Icon name={tab.icon as any} size={16} />
                <span>{tab.label}</span>
              </button>
            )}
          </div>
        </div>

        {/* Impact Stories Tab */}
        {activeTab === 'stories' &&
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactStories.map((story, index) =>
          <div
            key={index}
            className="glassmorphic rounded-2xl overflow-hidden hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105">

                {/* Story Image */}
                <div className="h-48 overflow-hidden">
                  <AppImage
                src={story.image}
                alt={story.alt}
                className="w-full h-full object-cover" />

                </div>

                {/* Story Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className={`w-8 h-8 ${getCategoryColor(story.category)} rounded-lg flex items-center justify-center`}>
                      <Icon name={getCategoryIcon(story.category) as any} size={16} className="text-white" />
                    </div>
                    <span className="font-body-medium text-sm text-primary capitalize">
                      {story.category}
                    </span>
                  </div>

                  <h3 className="font-headline-medium text-xl text-foreground mb-3">
                    {story.title}
                  </h3>

                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    {story.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex space-x-4">
                    {story.metrics.map((metric, metricIndex) =>
                <div key={metricIndex} className="text-center">
                        <div className="font-headline-medium text-lg text-primary">
                          {metric.value}
                        </div>
                        <div className="font-body text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                )}
                  </div>
                </div>
              </div>
          )}
          </div>
        }

        {/* Partnerships Tab */}
        {activeTab === 'partnerships' &&
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) =>
          <div
            key={index}
            className="glassmorphic rounded-2xl p-6 hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105">

                <div className="flex items-start space-x-4">
                  {/* Partner Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-glassmorphic bg-white">
                      <AppImage
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-full h-full object-contain p-2" />

                    </div>
                  </div>

                  {/* Partner Details */}
                  <div className="flex-1">
                    <h3 className="font-headline-medium text-lg text-foreground mb-2">
                      {partner.name}
                    </h3>

                    <p className="font-body-medium text-sm text-primary mb-3">
                      {partner.type}
                    </p>

                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
          )}
          </div>
        }

        {/* Call to Action */}
        <div className="mt-16 glassmorphic rounded-2xl p-8 text-center">
          <h3 className="font-headline-medium text-2xl text-foreground mb-4">
            Join Our Community Impact Initiative
          </h3>
          <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of our mission to create positive change in our community. 
            Whether through volunteering, partnerships, or support, every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-cta transition-all duration-300 spring-animation hover:scale-105">
              <Icon name="HeartIcon" size={18} />
              <span>Get Involved</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 glassmorphic hover:bg-muted text-foreground rounded-xl font-cta transition-all duration-300 spring-animation hover:scale-105">
              <Icon name="EnvelopeIcon" size={18} />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default CommunityImpactSection; 
