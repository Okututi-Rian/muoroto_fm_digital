'use client';

import React, { useState, useEffect } from 'react';
import LivePlayer from './LivePlayer';
import CurrentDJProfile from './CurrentDJProfile';
import ProgramSchedule from './ProgramSchedule';
import RecentlyPlayed from './RecentlyPlayed';
import ListenerEngagement from './ListenerEngagement';

interface DJProfile {
  id: number;
  name: string;
  image: string;
  alt: string;
  bio: string;
  specialties: string[];
  experience: string;
  socialMedia: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  host: string;
  hostImage: string;
  hostAlt: string;
  duration: string;
  isLive: boolean;
  category: string;
}

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  albumAlt: string;
  playedAt: string;
  duration: string;
  genre: string;
}

const LiveRadioInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [audioQuality, setAudioQuality] = useState('medium');
  const [listenerCount, setListenerCount] = useState(1247);

  useEffect(() => {
    setIsHydrated(true);

    // Simulate listener count updates
    const interval = setInterval(() => {
      setListenerCount((prev) => prev + Math.floor(Math.random() * 5) - 2);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const currentDJ: DJProfile = {
    id: 1,
    name: "Grace Wanjiku",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14386a457-1762275137679.png",
    alt: "Professional headshot of Grace Wanjiku, a Kenyan radio host with warm smile wearing blue blazer",
    bio: "Award-winning radio personality with over 8 years of experience in broadcasting. Known for her engaging interviews and deep connection with the Kikuyu community.",
    specialties: ["Talk Shows", "Community Issues", "Cultural Programs", "Music"],
    experience: "8+ years",
    socialMedia: {
      twitter: "https://twitter.com/gracewanjiku",
      instagram: "https://instagram.com/gracewanjiku",
      facebook: "https://facebook.com/gracewanjiku"
    }
  };

  const scheduleItems: ScheduleItem[] = [
  {
    id: 1,
    time: "6:00 AM",
    title: "Morning Glory",
    host: "Grace Wanjiku",
    hostImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5746a0d-1762273807933.png",
    hostAlt: "Grace Wanjiku radio host headshot",
    duration: "3 hours",
    isLive: true,
    category: "Talk Show"
  },
  {
    id: 2,
    time: "9:00 AM",
    title: "Kikuyu Classics",
    host: "Samuel Mwangi",
    hostImage: "https://img.rocket.new/generatedImages/rocket_gen_img_19607f18d-1762274661706.png",
    hostAlt: "Samuel Mwangi radio host professional photo",
    duration: "2 hours",
    isLive: false,
    category: "Music"
  },
  {
    id: 3,
    time: "11:00 AM",
    title: "Community Voices",
    host: "Mary Njeri",
    hostImage: "https://images.unsplash.com/photo-1690165367688-e0921ca6fafe",
    hostAlt: "Mary Njeri radio presenter smiling in studio",
    duration: "1 hour",
    isLive: false,
    category: "Community"
  },
  {
    id: 4,
    time: "12:00 PM",
    title: "Lunch Break Beats",
    host: "Peter Kamau",
    hostImage: "https://images.unsplash.com/photo-1582315855288-8fd4b25d1919",
    hostAlt: "Peter Kamau DJ wearing headphones in radio studio",
    duration: "2 hours",
    isLive: false,
    category: "Music"
  },
  {
    id: 5,
    time: "2:00 PM",
    title: "Afternoon Drive",
    host: "Jane Wambui",
    hostImage: "https://images.unsplash.com/flagged/photo-1578877284323-599e93f0a1c7",
    hostAlt: "Jane Wambui radio host with microphone in broadcasting booth",
    duration: "3 hours",
    isLive: false,
    category: "Entertainment"
  }];


  const recentTracks: Track[] = [
  {
    id: 1,
    title: "Mugithi wa Gikuyu",
    artist: "Samidoh",
    album: "Mugithi Classics",
    albumArt: "https://images.unsplash.com/photo-1668751141465-a4377c6b29c1",
    albumAlt: "Samidoh album cover featuring traditional Kikuyu musical instruments",
    playedAt: "2 min ago",
    duration: "4:32",
    genre: "Mugithi"
  },
  {
    id: 2,
    title: "Wendo wa Murata",
    artist: "Muigai wa Njoroge",
    album: "Love Songs",
    albumArt: "https://images.unsplash.com/photo-1714146999596-32cbc401d3c5",
    albumAlt: "Muigai wa Njoroge romantic album cover with heart design",
    playedAt: "8 min ago",
    duration: "3:45",
    genre: "Benga"
  },
  {
    id: 3,
    title: "Githeri na Maharagwe",
    artist: "Kikuyu Benga Stars",
    album: "Cultural Hits",
    albumArt: "https://images.unsplash.com/photo-1544083017-ae8e8e9531b9",
    albumAlt: "Kikuyu Benga Stars album featuring traditional food imagery",
    playedAt: "15 min ago",
    duration: "5:12",
    genre: "Benga"
  },
  {
    id: 4,
    title: "Nyimbo cia Ngai",
    artist: "Grace Wanjiru",
    album: "Spiritual Songs",
    albumArt: "https://images.unsplash.com/photo-1682514822865-b1f5618f8bec",
    albumAlt: "Grace Wanjiru gospel album with church and cross imagery",
    playedAt: "22 min ago",
    duration: "4:18",
    genre: "Gospel"
  },
  {
    id: 5,
    title: "Muthuri wa Ngai",
    artist: "John Ndichu",
    album: "Praise Collection",
    albumArt: "https://images.unsplash.com/photo-1539660259690-8907aac897ea",
    albumAlt: "John Ndichu gospel album with golden light and praying hands",
    playedAt: "28 min ago",
    duration: "3:56",
    genre: "Gospel"
  }];


  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="w-64 h-8 bg-muted rounded mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="w-full h-48 bg-muted rounded-2xl"></div>
                <div className="w-full h-32 bg-muted rounded-2xl"></div>
              </div>
              <div className="space-y-8">
                <div className="w-full h-96 bg-muted rounded-2xl"></div>
                <div className="w-full h-80 bg-muted rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleQualityChange = (quality: string) => {
    setAudioQuality(quality);
  };

  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message);
  };

  const handleShare = (platform: string) => {
    console.log('Sharing on:', platform);
  };

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-headline text-4xl lg:text-5xl text-foreground mb-4">
            Live Radio
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">
            Experience Muoroto FM's live broadcasting with real-time streaming, interactive features, and community engagement. Join thousands of listeners tuning in right now.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Player */}
            <LivePlayer
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              volume={volume}
              onVolumeChange={handleVolumeChange}
              currentShow="Morning Glory"
              currentDJ="Grace Wanjiku"
              audioQuality={audioQuality}
              onQualityChange={handleQualityChange} />


            {/* Current DJ Profile */}
            <CurrentDJProfile dj={currentDJ} />

            {/* Recently Played - Mobile */}
            <div className="lg:hidden">
              <RecentlyPlayed tracks={recentTracks} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Program Schedule */}
            <ProgramSchedule scheduleItems={scheduleItems} />

            {/* Recently Played - Desktop */}
            <div className="hidden lg:block">
              <RecentlyPlayed tracks={recentTracks} />
            </div>

            {/* Listener Engagement */}
            <ListenerEngagement
              listenerCount={listenerCount}
              onSendMessage={handleSendMessage}
              onShare={handleShare} />

          </div>
        </div>
      </div>
    </div>);

};

export default LiveRadioInteractive; 
