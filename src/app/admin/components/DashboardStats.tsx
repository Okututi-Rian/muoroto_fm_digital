import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: string;
  color: string;
}

interface DashboardStatsProps {
  className?: string;
}

const StatCard = ({ title, value, change, changeType, icon, color }: StatCardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'increase':
        return 'text-success';
      case 'decrease':
        return 'text-error';
      default:
        return 'text-muted-foreground';
    }
  };

  const getChangeIcon = () => {
    switch (changeType) {
      case 'increase':
        return 'ArrowUpIcon';
      case 'decrease':
        return 'ArrowDownIcon';
      default:
        return 'MinusIcon';
    }
  };

  return (
    <div className="glassmorphic rounded-2xl p-6 spring-animation hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
          <Icon name={icon as any} size={24} className="text-white" />
        </div>
        <div className={`flex items-center space-x-1 ${getChangeColor()}`}>
          <Icon name={getChangeIcon() as any} size={16} />
          <span className="font-body-medium text-sm">{change}</span>
        </div>
      </div>
      <div>
        <h3 className="font-headline-medium text-2xl text-foreground mb-1">
          {value}
        </h3>
        <p className="font-body text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  );
};

const DashboardStats = ({ className = '' }: DashboardStatsProps) => {
  const stats = [
    {
      title: 'Active Shows',
      value: 24,
      change: '+3 this month',
      changeType: 'increase' as const,
      icon: 'RadioIcon',
      color: 'bg-primary'
    },
    {
      title: 'Total Podcasts',
      value: 156,
      change: '+12 this week',
      changeType: 'increase' as const,
      icon: 'MicrophoneIcon',
      color: 'bg-accent'
    },
    {
      title: 'News Articles',
      value: 89,
      change: '+5 today',
      changeType: 'increase' as const,
      icon: 'NewspaperIcon',
      color: 'bg-secondary'
    },
    {
      title: 'Live Listeners',
      value: '1,247',
      change: '+8% today',
      changeType: 'increase' as const,
      icon: 'UsersIcon',
      color: 'bg-success'
    },
    {
      title: 'Active Sponsors',
      value: 18,
      change: '+2 this month',
      changeType: 'increase' as const,
      icon: 'BuildingOfficeIcon',
      color: 'bg-warning'
    },
    {
      title: 'Monthly Revenue',
      value: 'KES 2.4M',
      change: '+15% vs last month',
      changeType: 'increase' as const,
      icon: 'CurrencyDollarIcon',
      color: 'bg-deep-forest'
    }
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats; 
