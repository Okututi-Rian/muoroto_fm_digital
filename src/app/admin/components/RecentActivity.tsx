import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ActivityItem {
  id: number;
  type: 'show' | 'podcast' | 'news' | 'sponsor' | 'user';
  title: string;
  description: string;
  timestamp: string;
  user: {
    name: string;
    avatar: string;
    alt: string;
  };
  status: 'completed' | 'pending' | 'failed';
}

interface RecentActivityProps {
  className?: string;
}

const RecentActivity = ({ className = '' }: RecentActivityProps) => {
  const activities: ActivityItem[] = [
  {
    id: 1,
    type: 'show',
    title: 'Morning Glory Show Updated',
    description: 'Schedule changed to 6:00 AM - 9:00 AM weekdays',
    timestamp: '2 hours ago',
    user: {
      name: 'Sarah Wanjiku',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9cfaa2b-1762274321982.png",
      alt: 'Professional headshot of African woman with short natural hair in blue blazer'
    },
    status: 'completed'
  },
  {
    id: 2,
    type: 'podcast',
    title: 'New Podcast Episode Published',
    description: 'Kikuyu Wisdom Tales - Episode 15: The Wise Elder',
    timestamp: '4 hours ago',
    user: {
      name: 'James Mwangi',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12d3ec86a-1762273889208.png",
      alt: 'Professional headshot of African man with beard in white shirt'
    },
    status: 'completed'
  },
  {
    id: 3,
    type: 'news',
    title: 'Breaking News Article Created',
    description: 'Community Development Project Launched in Kiambu',
    timestamp: '6 hours ago',
    user: {
      name: 'Grace Njeri',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_102fc7764-1762273558816.png",
      alt: 'Professional headshot of African woman with glasses in green blouse'
    },
    status: 'pending'
  },
  {
    id: 4,
    type: 'sponsor',
    title: 'New Sponsor Partnership',
    description: 'Safaricom Kenya partnership agreement signed',
    timestamp: '8 hours ago',
    user: {
      name: 'Peter Kamau',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19cdf5b65-1762273548498.png",
      alt: 'Professional headshot of African man in dark suit with tie'
    },
    status: 'completed'
  },
  {
    id: 5,
    type: 'user',
    title: 'User Role Updated',
    description: 'Mary Wambui promoted to Content Editor',
    timestamp: '1 day ago',
    user: {
      name: 'Admin System',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15ca91fa1-1762274196351.png",
      alt: 'Professional headshot of African man with short hair in navy blazer'
    },
    status: 'completed'
  }];


  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'show':
        return 'RadioIcon';
      case 'podcast':
        return 'MicrophoneIcon';
      case 'news':
        return 'NewspaperIcon';
      case 'sponsor':
        return 'BuildingOfficeIcon';
      case 'user':
        return 'UserIcon';
      default:
        return 'BellIcon';
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'show':
        return 'bg-primary';
      case 'podcast':
        return 'bg-accent';
      case 'news':
        return 'bg-secondary';
      case 'sponsor':
        return 'bg-warning';
      case 'user':
        return 'bg-deep-forest';
      default:
        return 'bg-muted';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success';
      case 'pending':
        return 'bg-warning';
      case 'failed':
        return 'bg-error';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className={`glassmorphic rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-xl text-foreground">Recent Activity</h2>
        <button className="flex items-center space-x-2 px-3 py-1.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg font-body-medium text-sm transition-all duration-300">
          <span>View All</span>
          <Icon name="ArrowRightIcon" size={16} />
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) =>
        <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-muted/50 rounded-xl transition-colors duration-300">
            <div className="flex-shrink-0">
              <div className="relative">
                <AppImage
                src={activity.user.avatar}
                alt={activity.user.alt}
                className="w-10 h-10 rounded-full object-cover" />

                <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${getActivityColor(activity.type)} rounded-full flex items-center justify-center`}>
                  <Icon name={getActivityIcon(activity.type) as any} size={12} className="text-white" />
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-body-medium text-sm text-foreground mb-1">
                    {activity.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground mb-2">
                    {activity.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="font-body text-xs text-muted-foreground">
                      by {activity.user.name}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-body text-xs text-muted-foreground">
                      {activity.timestamp}
                    </span>
                  </div>
                </div>
                <div className={`w-2 h-2 ${getStatusColor(activity.status)} rounded-full flex-shrink-0 mt-1`}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
          <Icon name="ClockIcon" size={16} />
          <span className="font-body text-sm">Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>);

};

export default RecentActivity; 
