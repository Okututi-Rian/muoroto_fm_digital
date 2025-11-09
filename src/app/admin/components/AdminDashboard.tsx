'use client';

import React, { useState, useEffect } from 'react';
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import DashboardStats from './DashboardStats';
import QuickActions from './QuickActions';
import RecentActivity from './RecentActivity';
import ContentManagement from './ContentManagement';
import AnalyticsDashboard from './AnalyticsDashboard';
import Sidebar from './Sidebar';
import Icon from '../../../components/ui/AppIcon'

const AdminDashboard = () => {
  const { user, isLoaded } = useUser();
  const [activeView, setActiveView] = useState('overview');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Check if user has admin role
  const userRole = user?.publicMetadata?.role as string;
  
  if (isLoaded && userRole !== 'ADMIN' && userRole !== 'EDITOR') {
    redirect("/");
  }

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded-xl w-64 mb-4"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-32 bg-muted rounded-2xl"></div>
            <div className="h-32 bg-muted rounded-2xl"></div>
            <div className="h-32 bg-muted rounded-2xl"></div>
          </div>
        </div>
      </div>
    );
  }

  const views = [
    { id: 'overview', name: 'Overview', icon: 'HomeIcon' },
    { id: 'content', name: 'Content', icon: 'DocumentTextIcon' },
    { id: 'analytics', name: 'Analytics', icon: 'ChartBarIcon' },
    { id: 'users', name: 'Users', icon: 'UserGroupIcon' },
    { id: 'settings', name: 'Settings', icon: 'Cog6ToothIcon' }
  ];

  const renderActiveView = () => {
    switch (activeView) {
      case 'overview':
        return (
          <div className="space-y-8">
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <QuickActions />
              <RecentActivity />
            </div>
          </div>
        );
      case 'content':
        return <ContentManagement />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'users':
        return <div className="text-center py-12"><h2 className="text-2xl font-bold">User Management</h2><p className="text-muted-foreground">Coming soon...</p></div>;
      case 'settings':
        return <div className="text-center py-12"><h2 className="text-2xl font-bold">Settings</h2><p className="text-muted-foreground">Coming soon...</p></div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        views={views}
        user={user}
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="font-headline text-3xl text-foreground mb-2">
                  Admin Dashboard
                </h1>
                <p className="font-body text-muted-foreground">
                  Manage your radio station's digital presence and content
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-4 py-2 glassmorphic rounded-xl">
                  <div className="w-2 h-2 bg-success rounded-full pulse-community"></div>
                  <span className="font-body text-sm text-foreground">
                    System Online
                  </span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 glassmorphic rounded-xl">
                  <span className="font-body text-sm text-muted-foreground">
                    Last sync: {new Date().toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-1 bg-muted/50 rounded-xl p-1 overflow-x-auto">
              {views.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-body-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    activeView === view.id
                      ? 'bg-primary text-primary-foreground shadow-glassmorphic'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }`}
                >
                  <Icon name={view.icon as any} size={18} />
                  <span>{view.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="spring-animation">
            {renderActiveView()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;