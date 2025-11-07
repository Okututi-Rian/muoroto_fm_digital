'use client';

import React, { useState, useEffect } from 'react';
import ShowCard from './ShowCard';
import HostCard from './HostCard';
import ScheduleGrid from './ScheduleGrid';
import FilterControls from './FilterControls';
import FeaturedShow from './FeaturedShow';
import Icon from '@/components/ui/AppIcon';

interface Show {
  id: string;
  title: string;
  description: string;
  host: {
    name: string;
    image: string;
    alt: string;
  };
  genre: string;
  timeSlot: string;
  frequency: string;
  image: string;
  alt: string;
  isLive: boolean;
  nextEpisode: string;
  rating: number;
  totalEpisodes: number;
}

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

interface FilterOptions {
  genre: string;
  timeSlot: string;
  host: string;
  searchQuery: string;
}

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  host: string;
  type: 'live' | 'recorded' | 'repeat';
  duration: string;
}

interface DaySchedule {
  day: string;
  date: string;
  isToday: boolean;
  schedule: ScheduleItem[];
}

const ShowsAndScheduleInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState('shows');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<FilterOptions>({
    genre: 'All Genres',
    timeSlot: 'All Times',
    host: 'All Hosts',
    searchQuery: ''
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockShows: Show[] = [
  {
    id: '1',
    title: 'Mugambo wa Ma (The Truthful Voice)',
    description: 'Our flagship morning show bringing you authentic news, cultural insights, and community stories that matter. Join us for honest discussions about current affairs, traditional wisdom, and modern challenges facing our community.',
    host: {
      name: 'Samuel Mwangi',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_14386a457-1762275137679.png",
      alt: 'Professional headshot of middle-aged Kenyan man with warm smile wearing navy blazer'
    },
    genre: 'News & Current Affairs',
    timeSlot: '6:00 AM - 10:00 AM',
    frequency: '95.5 FM',
    image: "https://images.unsplash.com/photo-1635770699560-4d5cf03811c9",
    alt: 'Modern radio studio with microphones and broadcasting equipment in warm lighting',
    isLive: true,
    nextEpisode: 'Tomorrow at 6:00 AM',
    rating: 4.8,
    totalEpisodes: 1247
  },
  {
    id: '2',
    title: 'Nyimbo za Kihii (Songs of Heritage)',
    description: 'Celebrating the rich musical heritage of our people with traditional songs, contemporary Kikuyu music, and artist interviews. Discover both classic melodies and modern interpretations of our cultural sounds.',
    host: {
      name: 'Grace Wanjiku',
      image: "https://images.unsplash.com/photo-1723922969507-5285cff3d8a9",
      alt: 'Smiling young Kenyan woman with natural hair wearing colorful traditional headwrap'
    },
    genre: 'Music & Entertainment',
    timeSlot: '2:00 PM - 4:00 PM',
    frequency: '95.5 FM',
    image: "https://images.unsplash.com/photo-1534327418137-eae9a42bc0f3",
    alt: 'Silhouettes of people enjoying live music performance with colorful stage lights',
    isLive: false,
    nextEpisode: 'Today at 2:00 PM',
    rating: 4.6,
    totalEpisodes: 892
  },
  {
    id: '3',
    title: 'Maombi na Matumaini (Prayers & Hope)',
    description: 'A spiritual journey through faith, hope, and community prayer. Join us for inspirational messages, gospel music, and testimonies that strengthen our spiritual foundation and bring communities together.',
    host: {
      name: 'Peter Kamau',
      image: "https://images.unsplash.com/photo-1571984710729-8afe1a086f67",
      alt: 'Elderly Kenyan pastor with gray beard wearing white collar shirt in church setting'
    },
    genre: 'Spiritual & Religious',
    timeSlot: '7:00 PM - 8:00 PM',
    frequency: '95.5 FM',
    image: "https://images.unsplash.com/photo-1646024112457-339d99af3992",
    alt: 'Peaceful church interior with wooden pews and stained glass windows casting colorful light',
    isLive: false,
    nextEpisode: 'Tonight at 7:00 PM',
    rating: 4.9,
    totalEpisodes: 654
  },
  {
    id: '4',
    title: 'Mazungumzo ya Kijiji (Village Conversations)',
    description: 'Interactive talk show addressing community issues, development projects, and local governance. Listeners call in to share experiences, ask questions, and participate in meaningful discussions about our shared future.',
    host: {
      name: 'Mary Njeri',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba378fa2-1762273795500.png",
      alt: 'Confident middle-aged Kenyan woman with short hair wearing professional blue blouse'
    },
    genre: 'Talk Shows',
    timeSlot: '10:00 AM - 12:00 PM',
    frequency: '95.5 FM',
    image: "https://images.unsplash.com/photo-1555069600-cf55562cbd9a",
    alt: 'Group of diverse people sitting in circle having animated discussion outdoors',
    isLive: false,
    nextEpisode: 'Tomorrow at 10:00 AM',
    rating: 4.7,
    totalEpisodes: 423
  },
  {
    id: '5',
    title: 'Utamaduni Wetu (Our Heritage)',
    description: 'Preserving and celebrating Kikuyu culture through storytelling, language lessons, and cultural education. Learn about traditional practices, customs, and values that define our identity as a people.',
    host: {
      name: 'Joseph Kariuki',
      image: "https://images.unsplash.com/photo-1667184361831-ab2e55282d50",
      alt: 'Distinguished elderly Kenyan man with traditional cap sharing stories with animated gestures'
    },
    genre: 'Cultural Programs',
    timeSlot: '4:00 PM - 6:00 PM',
    frequency: '95.5 FM',
    image: "https://images.unsplash.com/photo-1710635842678-20cd404b7761",
    alt: 'Traditional African drums and cultural artifacts displayed on woven mat',
    isLive: false,
    nextEpisode: 'Today at 4:00 PM',
    rating: 4.8,
    totalEpisodes: 567
  },
  {
    id: '6',
    title: 'Michezo na Burudani (Sports & Entertainment)',
    description: 'Complete sports coverage from local football leagues to international competitions, plus entertainment news and celebrity interviews. Stay updated with the latest in sports and entertainment world.',
    host: {
      name: 'Faith Wambui',
      image: "https://images.unsplash.com/photo-1628595557489-88b4f50492ff",
      alt: 'Energetic young Kenyan woman sports journalist with microphone at football stadium'
    },
    genre: 'Sports',
    timeSlot: '8:00 PM - 10:00 PM',
    frequency: '95.5 FM',
    image: "https://images.unsplash.com/photo-1635210047938-178f6a1e49a7",
    alt: 'Football players celebrating goal with crowd cheering in packed stadium',
    isLive: false,
    nextEpisode: 'Tonight at 8:00 PM',
    rating: 4.5,
    totalEpisodes: 789
  }];


  const mockHosts: Host[] = [
  {
    id: '1',
    name: 'Samuel Mwangi',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14386a457-1762275137679.png",
    alt: 'Professional headshot of middle-aged Kenyan man with warm smile wearing navy blazer',
    bio: 'A veteran broadcaster with over 15 years of experience in radio journalism. Samuel brings authentic storytelling and deep community knowledge to every show, making complex issues accessible to all listeners.',
    specialties: ['News Analysis', 'Community Issues', 'Political Commentary', 'Cultural Preservation'],
    experience: '15+ years in broadcasting',
    shows: ['Mugambo wa Ma (The Truthful Voice)', 'Weekend Community Forum'],
    socialMedia: {
      twitter: 'https://twitter.com/samuelmwangi',
      facebook: 'https://facebook.com/samuel.mwangi.radio'
    }
  },
  {
    id: '2',
    name: 'Grace Wanjiku',
    image: "https://images.unsplash.com/photo-1723922969507-5285cff3d8a9",
    alt: 'Smiling young Kenyan woman with natural hair wearing colorful traditional headwrap',
    bio: 'Music enthusiast and cultural ambassador who discovered her passion for radio while studying communications. Grace connects traditional and contemporary music, introducing new artists while honoring musical heritage.',
    specialties: ['Music Curation', 'Artist Interviews', 'Cultural Music', 'Youth Engagement'],
    experience: '8 years in music broadcasting',
    shows: ['Nyimbo za Kihii (Songs of Heritage)', 'Friday Night Music Mix'],
    socialMedia: {
      instagram: 'https://instagram.com/gracewanjiku_radio',
      twitter: 'https://twitter.com/gracewanjiku'
    }
  },
  {
    id: '3',
    name: 'Peter Kamau',
    image: "https://images.unsplash.com/photo-1571984710729-8afe1a086f67",
    alt: 'Elderly Kenyan pastor with gray beard wearing white collar shirt in church setting',
    bio: 'Ordained minister and spiritual counselor who brings decades of pastoral experience to radio ministry. Pastor Peter provides comfort, guidance, and hope to listeners facing life\'s challenges.',
    specialties: ['Spiritual Counseling', 'Biblical Teaching', 'Community Prayer', 'Faith Guidance'],
    experience: '25+ years in ministry',
    shows: ['Maombi na Matumaini (Prayers & Hope)', 'Sunday Morning Devotion'],
    socialMedia: {
      facebook: 'https://facebook.com/pastor.peter.kamau'
    }
  },
  {
    id: '4',
    name: 'Mary Njeri',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba378fa2-1762273795500.png",
    alt: 'Confident middle-aged Kenyan woman with short hair wearing professional blue blouse',
    bio: 'Former local government official turned radio host, Mary brings insider knowledge of community development and governance. She facilitates meaningful dialogue between citizens and leaders.',
    specialties: ['Community Development', 'Local Governance', 'Public Policy', 'Civic Education'],
    experience: '12 years in public service & broadcasting',
    shows: ['Mazungumzo ya Kijiji (Village Conversations)', 'Monthly Leaders Forum'],
    socialMedia: {
      twitter: 'https://twitter.com/marynjeri_radio',
      facebook: 'https://facebook.com/mary.njeri.community'
    }
  }];


  const mockWeekSchedule: DaySchedule[] = [
  {
    day: 'Monday',
    date: 'Nov 11',
    isToday: true,
    schedule: [
    { id: '1', time: '6:00 AM', title: 'Mugambo wa Ma', host: 'Samuel Mwangi', type: 'live', duration: '4h' },
    { id: '2', time: '10:00 AM', title: 'Mazungumzo ya Kijiji', host: 'Mary Njeri', type: 'live', duration: '2h' },
    { id: '3', time: '2:00 PM', title: 'Nyimbo za Kihii', host: 'Grace Wanjiku', type: 'recorded', duration: '2h' },
    { id: '4', time: '7:00 PM', title: 'Maombi na Matumaini', host: 'Peter Kamau', type: 'live', duration: '1h' }]

  },
  {
    day: 'Tuesday',
    date: 'Nov 12',
    isToday: false,
    schedule: [
    { id: '5', time: '6:00 AM', title: 'Morning News', host: 'Samuel Mwangi', type: 'live', duration: '2h' },
    { id: '6', time: '10:00 AM', title: 'Community Talk', host: 'Mary Njeri', type: 'live', duration: '2h' },
    { id: '7', time: '4:00 PM', title: 'Utamaduni Wetu', host: 'Joseph Kariuki', type: 'recorded', duration: '2h' },
    { id: '8', time: '8:00 PM', title: 'Sports Tonight', host: 'Faith Wambui', type: 'live', duration: '2h' }]

  },
  {
    day: 'Wednesday',
    date: 'Nov 13',
    isToday: false,
    schedule: [
    { id: '9', time: '6:00 AM', title: 'Mugambo wa Ma', host: 'Samuel Mwangi', type: 'live', duration: '4h' },
    { id: '10', time: '12:00 PM', title: 'Lunch Hour Music', host: 'Grace Wanjiku', type: 'recorded', duration: '2h' },
    { id: '11', time: '4:00 PM', title: 'Cultural Hour', host: 'Joseph Kariuki', type: 'live', duration: '2h' },
    { id: '12', time: '7:00 PM', title: 'Evening Prayer', host: 'Peter Kamau', type: 'live', duration: '1h' }]

  },
  {
    day: 'Thursday',
    date: 'Nov 14',
    isToday: false,
    schedule: [
    { id: '13', time: '6:00 AM', title: 'Morning Show', host: 'Samuel Mwangi', type: 'live', duration: '4h' },
    { id: '14', time: '10:00 AM', title: 'Talk Show', host: 'Mary Njeri', type: 'live', duration: '2h' },
    { id: '15', time: '2:00 PM', title: 'Music Mix', host: 'Grace Wanjiku', type: 'recorded', duration: '2h' },
    { id: '16', time: '8:00 PM', title: 'Sports Update', host: 'Faith Wambui', type: 'live', duration: '2h' }]

  },
  {
    day: 'Friday',
    date: 'Nov 15',
    isToday: false,
    schedule: [
    { id: '17', time: '6:00 AM', title: 'Friday Morning', host: 'Samuel Mwangi', type: 'live', duration: '4h' },
    { id: '18', time: '12:00 PM', title: 'Weekend Preview', host: 'Mary Njeri', type: 'live', duration: '2h' },
    { id: '19', time: '6:00 PM', title: 'Friday Night Mix', host: 'Grace Wanjiku', type: 'live', duration: '4h' },
    { id: '20', time: '10:00 PM', title: 'Late Night Talk', host: 'Joseph Kariuki', type: 'recorded', duration: '2h' }]

  },
  {
    day: 'Saturday',
    date: 'Nov 16',
    isToday: false,
    schedule: [
    { id: '21', time: '8:00 AM', title: 'Weekend Morning', host: 'Grace Wanjiku', type: 'live', duration: '3h' },
    { id: '22', time: '1:00 PM', title: 'Sports Saturday', host: 'Faith Wambui', type: 'live', duration: '3h' },
    { id: '23', time: '6:00 PM', title: 'Cultural Stories', host: 'Joseph Kariuki', type: 'recorded', duration: '2h' },
    { id: '24', time: '8:00 PM', title: 'Saturday Night', host: 'Samuel Mwangi', type: 'live', duration: '2h' }]

  },
  {
    day: 'Sunday',
    date: 'Nov 17',
    isToday: false,
    schedule: [
    { id: '25', time: '7:00 AM', title: 'Sunday Service', host: 'Peter Kamau', type: 'live', duration: '2h' },
    { id: '26', time: '11:00 AM', title: 'Gospel Hour', host: 'Grace Wanjiku', type: 'recorded', duration: '2h' },
    { id: '27', time: '3:00 PM', title: 'Family Time', host: 'Mary Njeri', type: 'live', duration: '2h' },
    { id: '28', time: '7:00 PM', title: 'Sunday Reflection', host: 'Peter Kamau', type: 'live', duration: '1h' }]

  }];


  const featuredShow = {
    id: '1',
    title: 'Mugambo wa Ma',
    description: 'Experience authentic Kenyan storytelling with our flagship morning show. Join Samuel Mwangi for honest discussions about current affairs, traditional wisdom, and the stories that shape our community. Every morning brings fresh perspectives on the issues that matter most to you.',
    host: {
      name: 'Samuel Mwangi',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_14386a457-1762275137679.png",
      alt: 'Professional headshot of middle-aged Kenyan man with warm smile wearing navy blazer'
    },
    image: "https://images.unsplash.com/photo-1635770699560-4d5cf03811c9",
    alt: 'Modern radio studio with microphones and broadcasting equipment in warm lighting',
    timeSlot: 'Monday - Friday, 6:00 AM - 10:00 AM',
    nextEpisode: 'Tomorrow at 6:00 AM - Special Election Coverage',
    isLive: true,
    highlights: [
    'Breaking news and analysis',
    'Community leader interviews',
    'Cultural preservation discussions',
    'Listener call-ins and feedback']

  };

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      genre: 'All Genres',
      timeSlot: 'All Times',
      host: 'All Hosts',
      searchQuery: ''
    });
  };

  const filteredShows = mockShows.filter((show) => {
    const matchesGenre = filters.genre === 'All Genres' || show.genre === filters.genre;
    const matchesTimeSlot = filters.timeSlot === 'All Times' ||
    filters.timeSlot === 'Morning (6AM - 12PM)' && show.timeSlot.includes('AM') ||
    filters.timeSlot === 'Afternoon (12PM - 6PM)' && show.timeSlot.includes('PM') && !show.timeSlot.includes('7:') && !show.timeSlot.includes('8:') && !show.timeSlot.includes('9:') ||
    filters.timeSlot === 'Evening (6PM - 10PM)' && (show.timeSlot.includes('7:') || show.timeSlot.includes('8:') || show.timeSlot.includes('9:')) ||
    filters.timeSlot === 'Night (10PM - 6AM)' && show.timeSlot.includes('10:');
    const matchesHost = filters.host === 'All Hosts' || show.host.name === filters.host;
    const matchesSearch = filters.searchQuery === '' ||
    show.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
    show.description.toLowerCase().includes(filters.searchQuery.toLowerCase());

    return matchesGenre && matchesTimeSlot && matchesHost && matchesSearch;
  });

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse space-y-8 p-6">
          <div className="h-96 bg-muted rounded-3xl"></div>
          <div className="h-32 bg-muted rounded-2xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) =>
            <div key={i} className="h-96 bg-muted rounded-2xl"></div>
            )}
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {/* Featured Show Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <FeaturedShow show={featuredShow} />
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-1 bg-card rounded-2xl p-2 shadow-glassmorphic">
              {[
              { id: 'shows', label: 'All Shows', icon: 'RadioIcon' },
              { id: 'hosts', label: 'Our Hosts', icon: 'UserGroupIcon' },
              { id: 'schedule', label: 'Schedule', icon: 'CalendarDaysIcon' }].
              map((tab) =>
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-body-medium text-sm transition-all duration-300 ${
                activeTab === tab.id ?
                'bg-primary text-primary-foreground shadow-glassmorphic' :
                'text-muted-foreground hover:text-foreground hover:bg-muted'}`
                }>

                  <Icon name={tab.icon as any} size={18} />
                  <span>{tab.label}</span>
                </button>
              )}
            </div>

            {activeTab === 'shows' &&
            <div className="flex items-center space-x-2">
                <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-all duration-300 ${
                viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`
                }>

                  <Icon name="Squares2X2Icon" size={20} />
                </button>
                <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl transition-all duration-300 ${
                viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`
                }>

                  <Icon name="ListBulletIcon" size={20} />
                </button>
              </div>
            }
          </div>

          {/* Filter Controls for Shows */}
          {activeTab === 'shows' &&
          <div className="mb-8">
              <FilterControls
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters} />

            </div>
          }

          {/* Content Based on Active Tab */}
          {activeTab === 'shows' &&
          <div className={`grid gap-6 ${
          viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`
          }>
              {filteredShows.map((show) =>
            <ShowCard key={show.id} show={show} />
            )}
            </div>
          }

          {activeTab === 'hosts' &&
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockHosts.map((host) =>
            <HostCard key={host.id} host={host} />
            )}
            </div>
          }

          {activeTab === 'schedule' &&
          <ScheduleGrid weekSchedule={mockWeekSchedule} />
          }

          {/* No Results Message */}
          {activeTab === 'shows' && filteredShows.length === 0 &&
          <div className="text-center py-16">
              <Icon name="MagnifyingGlassIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="font-headline-medium text-xl text-foreground mb-2">No shows found</h3>
              <p className="font-body text-muted-foreground mb-6">
                Try adjusting your filters or search terms to find more shows.
              </p>
              <button
              onClick={handleClearFilters}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-cta hover:bg-primary/90 transition-colors">

                Clear All Filters
              </button>
            </div>
          }
        </div>
      </section>
    </div>);

};

export default ShowsAndScheduleInteractive;
