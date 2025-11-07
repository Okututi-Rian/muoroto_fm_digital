'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

interface AnalyticsDashboardProps {
  className?: string;
}

const AnalyticsDashboard = ({ className = '' }: AnalyticsDashboardProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const periods = [
    { id: '24h', name: '24 Hours' },
    { id: '7d', name: '7 Days' },
    { id: '30d', name: '30 Days' },
    { id: '90d', name: '90 Days' }
  ];

  const listenerData = [
    { name: 'Mon', listeners: 1200, engagement: 85 },
    { name: 'Tue', listeners: 1350, engagement: 78 },
    { name: 'Wed', listeners: 1180, engagement: 92 },
    { name: 'Thu', listeners: 1420, engagement: 88 },
    { name: 'Fri', listeners: 1650, engagement: 95 },
    { name: 'Sat', listeners: 1890, engagement: 82 },
    { name: 'Sun', listeners: 1720, engagement: 90 }
  ];

  const contentPerformance = [
    { name: 'Shows', value: 45, color: '#2E7D32' },
    { name: 'Podcasts', value: 30, color: '#009688' },
    { name: 'News', value: 15, color: '#FFC107' },
    { name: 'Music', value: 10, color: '#FF9800' }
  ];

  const topShows = [
    { name: 'Morning Glory Show', listeners: 2450, growth: '+12%' },
    { name: 'Kikuyu Wisdom Hour', listeners: 1890, growth: '+8%' },
    { name: 'Youth Connect', listeners: 1650, growth: '+15%' },
    { name: 'Evening Reflections', listeners: 1420, growth: '+5%' },
    { name: 'Community Stories', listeners: 1280, growth: '+18%' }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-headline text-2xl text-foreground">Analytics Dashboard</h2>
        <div className="flex items-center space-x-2">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-4 py-2 rounded-xl font-body-medium text-sm transition-all duration-300 ${
                selectedPeriod === period.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-primary/20 text-muted-foreground hover:text-foreground'
              }`}
            >
              {period.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Listener Trends */}
        <div className="glassmorphic rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline-medium text-lg text-foreground">Listener Trends</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="font-body text-sm text-muted-foreground">Daily Listeners</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={listenerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="listeners" 
                  stroke="#2E7D32" 
                  strokeWidth={3}
                  dot={{ fill: '#2E7D32', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#2E7D32', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Content Performance */}
        <div className="glassmorphic rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline-medium text-lg text-foreground">Content Performance</h3>
            <button className="flex items-center space-x-2 px-3 py-1.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg font-body-medium text-sm transition-all duration-300">
              <Icon name="ArrowPathIcon" size={14} />
              <span>Refresh</span>
            </button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={contentPerformance}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {contentPerformance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {contentPerformance.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="font-body text-sm text-muted-foreground">{item.name}</span>
                <span className="font-body-medium text-sm text-foreground">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement Metrics */}
      <div className="glassmorphic rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-headline-medium text-lg text-foreground">Engagement Metrics</h3>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span className="font-body text-sm text-muted-foreground">Engagement Rate</span>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={listenerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Bar 
                dataKey="engagement" 
                fill="#009688" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performing Shows */}
      <div className="glassmorphic rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-headline-medium text-lg text-foreground">Top Performing Shows</h3>
          <button className="flex items-center space-x-2 px-3 py-1.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg font-body-medium text-sm transition-all duration-300">
            <span>View All</span>
            <Icon name="ArrowRightIcon" size={14} />
          </button>
        </div>
        <div className="space-y-4">
          {topShows.map((show, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-xl transition-colors duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="font-headline-medium text-sm text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-body-medium text-sm text-foreground">{show.name}</h4>
                  <p className="font-body text-xs text-muted-foreground">
                    {show.listeners.toLocaleString()} listeners
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-body-medium text-sm text-success">{show.growth}</span>
                <Icon name="ArrowUpIcon" size={16} className="text-success" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard; 
