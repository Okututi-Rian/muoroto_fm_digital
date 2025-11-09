import React from 'react';
import { useUser, SignOutButton } from "@clerk/nextjs";
import Icon from '@/components/ui/AppIcon';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  views: Array<{ id: string; name: string; icon: string }>;
  user: any;
}

const Sidebar = ({ activeView, setActiveView, views, user }: SidebarProps) => {
  const userRole = user?.publicMetadata?.role as string;
  const userName = user?.firstName || user?.username || 'User';

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border z-40 hidden lg:block">
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cultural-gradient rounded-xl flex items-center justify-center">
              <Icon name="RadioIcon" size={24} className="text-white" />
            </div>
            <div>
              <h2 className="font-headline-medium text-lg text-foreground">Muoroto FM</h2>
              <p className="font-body text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={user?.imageUrl || '/api/placeholder/48/48'}
                alt={userName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-body-medium text-sm text-foreground truncate">
                {userName}
              </p>
              <p className="font-body text-xs text-muted-foreground capitalize">
                {userRole?.toLowerCase() || 'User'}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-6">
          <nav className="space-y-2 px-4">
            {views.map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-body-medium text-sm transition-all duration-300 ${
                  activeView === view.id
                    ? 'bg-primary text-primary-foreground shadow-glassmorphic'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={view.icon as any} size={20} />
                <span>{view.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-border space-y-3">
          <SignOutButton>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-body-medium text-sm text-foreground hover:bg-muted hover:text-error transition-all duration-300">
              <Icon name="ArrowRightOnRectangleIcon" size={20} />
              <span>Sign Out</span>
            </button>
          </SignOutButton>
          
          <div className="text-center">
            <p className="font-body text-xs text-muted-foreground">
              Muoroto FM Admin v1.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;