'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FeaturedContent {
  id: number;
  type: 'show' | 'news' | 'event';
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  badge?: string;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const featuredContent: FeaturedContent[] = [
  {
    id: 1,
    type: 'show',
    title: 'Mugambo Wa Ma - Morning Edition',
    description: 'Start your day with authentic Kikuyu wisdom and contemporary insights. Join our community for truth, culture, and inspiration.',
    image: "https://images.unsplash.com/photo-1581369728823-aad7d255cc20",
    alt: 'Professional African radio host with headphones speaking into microphone in modern studio',
    link: '/shows-and-schedule',
    badge: 'Live Now'
  },
  {
    id: 2,
    type: 'news',
    title: 'Community Development Initiative Launched',
    description: 'Muoroto FM partners with local organizations to bring digital literacy programs to rural communities across Central Kenya.',
    image: "https://images.unsplash.com/photo-1678680237978-10a89f8036f9",
    alt: 'Group of diverse Kenyan community members gathered around laptop learning digital skills',
    link: '/news-and-updates',
    badge: 'Breaking'
  },
  {
    id: 3,
    type: 'event',
    title: 'Cultural Heritage Festival 2024',
    description: 'Join us for a celebration of Kikuyu traditions, music, and storytelling. Live broadcasts from Nyeri Cultural Center.',
    image: "https://images.unsplash.com/photo-1573488327764-e9c1cbdcdf72",
    alt: 'Traditional Kikuyu dancers in colorful attire performing at outdoor cultural festival',
    link: '/shows-and-schedule',
    badge: 'Dec 15'
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, featuredContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  if (!isHydrated) {
    return (
      <section className="relative h-[600px] lg:h-[700px] bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 glassmorphic animate-pulse">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="w-full max-w-4xl">
              <div className="h-8 bg-white/20 rounded-xl mb-4 w-3/4"></div>
              <div className="h-6 bg-white/20 rounded-lg mb-6 w-1/2"></div>
              <div className="h-12 bg-white/20 rounded-xl w-48"></div>
            </div>
          </div>
        </div>
      </section>);

  }

  const currentContent = featuredContent[currentSlide];

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <AppImage
          src={currentContent.image}
          alt={currentContent.alt}
          className="w-full h-full object-cover"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-deep-forest/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          {/* Badge */}
          {currentContent.badge &&
          <div className="inline-flex items-center space-x-2 px-4 py-2 glassmorphic rounded-full mb-6 spring-animation">
              <div className="w-2 h-2 bg-secondary rounded-full pulse-community"></div>
              <span className="font-cta text-sm text-white">{currentContent.badge}</span>
            </div>
          }

          {/* Title */}
          <h1 className="font-headline text-4xl lg:text-6xl text-white mb-6 leading-tight">
            {currentContent.title}
          </h1>

          {/* Description */}
          <p className="font-body text-lg lg:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            {currentContent.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/live-radio"
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-cta text-lg shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105">

              <Icon name="PlayIcon" size={24} />
              <span>Listen Live</span>
            </Link>
            <Link
              href={currentContent.link}
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 glassmorphic text-white hover:bg-white/20 rounded-xl font-cta text-lg transition-all duration-300 spring-animation hover:scale-105">

              <span>Learn More</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        <button
          onClick={prevSlide}
          className="w-12 h-12 glassmorphic rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cultural-glow"
          aria-label="Previous slide">

          <Icon name="ChevronLeftIcon" size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {featuredContent.map((_, index) =>
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide ? 'bg-secondary' : 'bg-white/40'}`
            }
            aria-label={`Go to slide ${index + 1}`} />

          )}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 glassmorphic rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cultural-glow"
          aria-label="Next slide">

          <Icon name="ChevronRightIcon" size={20} />
        </button>
      </div>
    </section>);

};

export default HeroSection; 
