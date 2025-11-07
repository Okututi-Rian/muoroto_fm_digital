import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface QuickAccessTile {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  link: string;
  color: string;
  badge?: string;
}

const QuickAccessTiles = () => {
  const tiles: QuickAccessTile[] = [
  {
    id: 1,
    title: 'Live Radio',
    description: 'Listen to our live broadcast with real-time interaction',
    icon: 'RadioIcon',
    image: "https://images.unsplash.com/photo-1573742287119-4ab4c04887f5",
    alt: 'Modern radio broadcasting equipment with microphone and mixing console',
    link: '/live-radio',
    color: 'from-accent to-accent/80',
    badge: 'Live'
  },
  {
    id: 2,
    title: 'Shows & Schedule',
    description: 'Explore our diverse programming and upcoming shows',
    icon: 'CalendarDaysIcon',
    image: "https://images.unsplash.com/photo-1714974528756-d3c2a651f530",
    alt: 'Professional radio hosts discussing program schedule in modern studio',
    link: '/shows-and-schedule',
    color: 'from-primary to-deep-forest'
  },
  {
    id: 3,
    title: 'News & Updates',
    description: 'Stay informed with the latest community and national news',
    icon: 'NewspaperIcon',
    image: "https://images.unsplash.com/photo-1543994252-85b5a4d91787",
    alt: 'Kenyan journalist reading news bulletin in professional newsroom setting',
    link: '/news-and-updates',
    color: 'from-secondary to-vibrant-orange'
  },
  {
    id: 4,
    title: 'About Muoroto FM',
    description: 'Discover our mission, values, and community impact',
    icon: 'InformationCircleIcon',
    image: "https://images.unsplash.com/photo-1666558893179-fe3ebf7c6e5c",
    alt: 'Diverse team of African radio professionals gathered in modern broadcasting facility',
    link: '/about-us',
    color: 'from-earth-brown to-charcoal'
  }];


  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl text-foreground mb-4">
            Explore Muoroto FM
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Your gateway to authentic Kikuyu culture, community news, and spiritual nourishment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile) =>
          <Link
            key={tile.id}
            href={tile.link}
            className="group relative overflow-hidden rounded-2xl shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105">

              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={tile.image}
                alt={tile.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className={`absolute inset-0 bg-gradient-to-br ${tile.color} opacity-80`}></div>
              </div>

              {/* Content */}
              <div className="relative p-6 bg-card">
                {/* Badge */}
                {tile.badge &&
              <div className="absolute -top-3 right-4 px-3 py-1 bg-error text-white text-xs font-cta rounded-full pulse-community">
                    {tile.badge}
                  </div>
              }

                {/* Icon */}
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon name={tile.icon as any} size={24} />
                </div>

                {/* Title */}
                <h3 className="font-headline-medium text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {tile.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {tile.description}
                </p>

                {/* Arrow Icon */}
                <div className="flex justify-end mt-4">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon name="ArrowRightIcon" size={16} />
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

};

export default QuickAccessTiles; 
