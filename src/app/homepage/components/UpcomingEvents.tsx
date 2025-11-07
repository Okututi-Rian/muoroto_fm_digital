import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  alt: string;
  category: string;
  isLive: boolean;
}

const UpcomingEvents = () => {
  const events: Event[] = [
  {
    id: 1,
    title: 'Cultural Heritage Festival 2024',
    description: 'Join us for a celebration of Kikuyu traditions, music, and storytelling with live performances and cultural exhibitions.',
    date: 'Dec 15, 2024',
    time: '10:00 AM',
    location: 'Nyeri Cultural Center',
    image: "https://images.unsplash.com/photo-1652868734785-054daad8012f",
    alt: 'Colorful traditional Kikuyu dancers performing at outdoor cultural festival with crowd watching',
    category: 'Cultural',
    isLive: true
  },
  {
    id: 2,
    title: 'Community Health Workshop',
    description: 'Free health screening and wellness education program in partnership with local healthcare providers.',
    date: 'Dec 20, 2024',
    time: '9:00 AM',
    location: 'Murang\'a Community Hall',
    image: "https://images.unsplash.com/photo-1659718282962-452648b6eba6",
    alt: 'African healthcare worker conducting health screening for community members in rural clinic',
    category: 'Health',
    isLive: false
  },
  {
    id: 3,
    title: 'New Year Special Broadcast',
    description: '24-hour special programming featuring listener dedications, cultural music, and community messages.',
    date: 'Jan 1, 2025',
    time: '12:00 AM',
    location: 'Muoroto FM Studios',
    image: "https://images.unsplash.com/photo-1725365176341-ff853382ddc1",
    alt: 'Professional radio studio setup with multiple microphones and broadcasting equipment for special event',
    category: 'Broadcasting',
    isLive: true
  }];


  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our community gatherings and special broadcasts
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) =>
          <div
            key={event.id}
            className="group glassmorphic rounded-2xl overflow-hidden shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-[1.02]">

              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={event.image}
                alt={event.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/60 via-transparent to-transparent"></div>
                
                {/* Category & Live Badge */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-cta rounded-full">
                    {event.category}
                  </span>
                  {event.isLive &&
                <span className="px-3 py-1 bg-error text-white text-xs font-cta rounded-full pulse-community">
                      Live Broadcast
                    </span>
                }
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 right-4 glassmorphic rounded-lg p-3 text-white text-center">
                  <div className="font-headline-medium text-lg">
                    {event.date.split(' ')[1].replace(',', '')}
                  </div>
                  <div className="font-body text-xs opacity-80">
                    {event.date.split(' ')[0]}
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="font-headline-medium text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Icon name="ClockIcon" size={16} className="text-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Icon name="MapPinIcon" size={16} className="text-accent" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <Link
                  href="/shows-and-schedule"
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-cta text-sm transition-all duration-300 spring-animation hover:scale-105">

                    <Icon name="CalendarPlusIcon" size={16} />
                    <span>Add to Calendar</span>
                  </Link>
                  <button className="w-10 h-10 glassmorphic rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 cultural-glow">
                    <Icon name="ShareIcon" size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View All Events */}
        <div className="text-center mt-12">
          <Link
            href="/shows-and-schedule"
            className="inline-flex items-center space-x-3 px-8 py-4 glassmorphic rounded-xl font-cta text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 spring-animation hover:scale-105 cultural-glow">

            <span>View All Events</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>);

};

export default UpcomingEvents; 
