'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [liveListeners, setLiveListeners] = useState(1247);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveListeners(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { name: 'Live Radio', href: '/live-radio', icon: 'RadioIcon' },
    { name: 'Shows & Schedule', href: '/shows-and-schedule', icon: 'CalendarDaysIcon' },
    { name: 'News & Updates', href: '/news-and-updates', icon: 'NewspaperIcon' },
    { name: 'About Us', href: '/about-us', icon: 'InformationCircleIcon' },
  ];

  const secondaryItems = [
    { name: 'Admin Dashboard', href: '/admin-dashboard', icon: 'CogIcon' },
  ];

  const isActiveRoute = (href: string) => {
    return pathname === href;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphic shadow-glassmorphic' 
          : 'bg-background/80 backdrop-blur-sm'
      } ${className}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/homepage" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-cultural-gradient rounded-xl flex items-center justify-center shadow-glassmorphic group-hover:shadow-cultural-glow transition-all duration-300">
                  <Icon name="RadioIcon" size={24} className="text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full pulse-community"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-headline text-headline-md text-deep-forest">
                  Muoroto FM
                </h1>
                <p className="font-accent text-xs text-muted-foreground -mt-1">
                  Digital
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-body-medium text-sm transition-all duration-300 cultural-glow ${
                  isActiveRoute(item.href)
                    ? 'bg-primary text-primary-foreground shadow-glassmorphic'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Live Listeners Counter */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-2 glassmorphic rounded-xl">
              <div className="w-2 h-2 bg-error rounded-full pulse-community"></div>
              <span className="font-body text-sm text-foreground">
                {liveListeners.toLocaleString()} listening
              </span>
            </div>

            {/* CTA Button */}
            <Link
              href="/live-radio"
              className="hidden sm:flex items-center space-x-2 px-6 py-2.5 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-cta text-cta-md shadow-glassmorphic hover:shadow-cultural-glow transition-all duration-300 spring-animation hover:scale-105"
            >
              <Icon name="PlayIcon" size={18} />
              <span>Listen Live</span>
            </Link>

            {/* More Menu */}
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 cultural-glow lg:hidden"
                aria-label="Toggle menu"
              >
                <Icon name={isMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={20} />
              </button>

              {/* Desktop More Menu */}
              <div className="hidden lg:block">
                <button
                  onClick={toggleMenu}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 cultural-glow"
                  aria-label="More options"
                >
                  <Icon name="EllipsisVerticalIcon" size={20} />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 top-12 w-64 glassmorphic rounded-2xl shadow-glassmorphic-lg py-2 z-50">
                  {/* Mobile Navigation */}
                  <div className="lg:hidden">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 mx-2 rounded-xl font-body-medium text-sm transition-all duration-300 ${
                          isActiveRoute(item.href)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-muted hover:text-primary'
                        }`}
                      >
                        <Icon name={item.icon as any} size={18} />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                    <div className="border-t border-border my-2 mx-4"></div>
                  </div>

                  {/* Secondary Items */}
                  {secondaryItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 mx-2 rounded-xl font-body-medium text-sm transition-all duration-300 ${
                        isActiveRoute(item.href)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                      }`}
                    >
                      <Icon name={item.icon as any} size={18} />
                      <span>{item.name}</span>
                    </Link>
                  ))}

                  {/* Mobile CTA */}
                  <div className="lg:hidden border-t border-border mt-2 pt-2 mx-2">
                    <Link
                      href="/live-radio"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-cta text-cta-md transition-all duration-300"
                    >
                      <Icon name="PlayIcon" size={18} />
                      <span>Listen Live</span>
                    </Link>
                  </div>

                  {/* Live Listeners - Mobile */}
                  <div className="md:hidden border-t border-border mt-2 pt-2 mx-2">
                    <div className="flex items-center justify-center space-x-2 px-4 py-2">
                      <div className="w-2 h-2 bg-error rounded-full pulse-community"></div>
                      <span className="font-body text-sm text-muted-foreground">
                        {liveListeners.toLocaleString()} listening live
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
