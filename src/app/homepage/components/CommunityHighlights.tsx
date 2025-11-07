'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
  image: string;
  alt: string;
  rating: number;
  showTitle: string;
}

const CommunityHighlights = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mary Wanjiku',
    location: 'Nyeri County',
    message: 'Muoroto FM has become the voice of our community. Every morning, I start my day with Mugambo Wa Ma, and it fills my heart with hope and connection to our beautiful culture.',
    image: "https://images.unsplash.com/photo-1655215081879-0ac1f535b575",
    alt: 'Smiling middle-aged African woman in colorful traditional headwrap standing in rural village setting',
    rating: 5,
    showTitle: 'Mugambo Wa Ma - Morning Edition'
  },
  {
    id: 2,
    name: 'James Kamau',
    location: 'Murang\'a County',
    message: 'As a farmer, the agricultural programs on Muoroto FM have transformed how I approach my work. The blend of traditional wisdom and modern techniques is exactly what we need.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d3ec86a-1762273889208.png",
    alt: 'Professional African man in casual shirt smiling confidently in agricultural field with crops',
    rating: 5,
    showTitle: 'Shamba Talk'
  },
  {
    id: 3,
    name: 'Grace Njeri',
    location: 'Kiambu County',
    message: 'The spiritual programs have strengthened my faith journey. Muoroto FM doesn\'t just broadcast; they nurture souls and build community bonds that last generations.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a625d449-1762273462423.png",
    alt: 'Elegant African woman in professional attire with warm smile in church or community center',
    rating: 5,
    showTitle: 'Faith & Fellowship'
  }];


  const stats = [
  { label: 'Active Listeners', value: '50K+', icon: 'UserGroupIcon' },
  { label: 'Community Events', value: '120+', icon: 'CalendarDaysIcon' },
  { label: 'Counties Reached', value: '15', icon: 'MapPinIcon' },
  { label: 'Years Broadcasting', value: '8', icon: 'RadioIcon' }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  if (!isHydrated) {
    return (
      <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="glassmorphic rounded-2xl p-8 animate-pulse">
            <div className="h-8 bg-white/20 rounded mb-4 w-1/2 mx-auto"></div>
            <div className="h-4 bg-white/20 rounded mb-8 w-3/4 mx-auto"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) =>
              <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
                  <div className="h-6 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 bg-white/20 rounded"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>);

  }

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl text-foreground mb-4">
            Community Voices
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our listeners about how Muoroto FM impacts their daily lives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Carousel */}
          <div className="glassmorphic rounded-2xl p-8 shadow-glassmorphic">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <AppImage
                  src={currentTest.image}
                  alt={currentTest.alt}
                  className="w-16 h-16 rounded-full object-cover" />

                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="CheckIcon" size={12} className="text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-headline-medium text-lg text-foreground">
                  {currentTest.name}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {currentTest.location}
                </p>
                <div className="flex items-center space-x-1 mt-1">
                  {[...Array(currentTest.rating)].map((_, i) =>
                  <Icon key={i} name="StarIcon" size={14} className="text-secondary" variant="solid" />
                  )}
                </div>
              </div>
            </div>

            <blockquote className="font-body text-foreground mb-6 leading-relaxed">
              "{currentTest.message}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="RadioIcon" size={16} className="text-accent" />
                <span>Listens to: {currentTest.showTitle}</span>
              </div>

              {/* Navigation Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`
                  }
                  aria-label={`Go to testimonial ${index + 1}`} />

                )}
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) =>
            <div
              key={index}
              className="glassmorphic rounded-xl p-6 text-center shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105">

                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} size={24} className="text-white" />
                </div>
                <div className="font-headline text-2xl lg:text-3xl text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social Proof Banner */}
        <div className="mt-12 glassmorphic rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center space-x-8 flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success rounded-full pulse-community"></div>
              <span className="font-cta text-sm text-foreground">
                1,247 listeners online now
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="HeartIcon" size={16} className="text-error" variant="solid" />
              <span className="font-cta text-sm text-foreground">
                98% listener satisfaction
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="TrophyIcon" size={16} className="text-secondary" variant="solid" />
              <span className="font-cta text-sm text-foreground">
                Best Community Radio 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CommunityHighlights; 
