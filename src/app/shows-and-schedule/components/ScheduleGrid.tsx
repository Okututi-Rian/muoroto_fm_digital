import React from 'react';
import Icon from '@/components/ui/AppIcon';

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

interface ScheduleGridProps {
  weekSchedule: DaySchedule[];
}

const ScheduleGrid = ({ weekSchedule }: ScheduleGridProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'live':
        return 'RadioIcon';
      case 'recorded':
        return 'MicrophoneIcon';
      case 'repeat':
        return 'ArrowPathIcon';
      default:
        return 'PlayIcon';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'live':
        return 'text-error';
      case 'recorded':
        return 'text-primary';
      case 'repeat':
        return 'text-secondary';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-glassmorphic overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <h2 className="font-headline-medium text-xl mb-2">Weekly Schedule</h2>
        <p className="font-body text-sm opacity-90">Complete programming guide for the week</p>
      </div>
      
      {/* Schedule Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          {weekSchedule.map((dayData) => (
            <div key={dayData.day} className="space-y-4">
              {/* Day Header */}
              <div className={`text-center p-3 rounded-xl ${
                dayData.isToday 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <h3 className="font-headline-medium text-sm">{dayData.day}</h3>
                <p className="font-body text-xs opacity-80">{dayData.date}</p>
              </div>
              
              {/* Schedule Items */}
              <div className="space-y-3">
                {dayData.schedule.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-muted/50 rounded-xl hover:bg-muted transition-colors duration-200 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-body-medium text-xs text-primary">{item.time}</span>
                      <Icon 
                        name={getTypeIcon(item.type) as any} 
                        size={14} 
                        className={getTypeColor(item.type)}
                      />
                    </div>
                    
                    <h4 className="font-body-medium text-sm text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-body text-xs text-muted-foreground">{item.host}</span>
                      <span className="font-body text-xs text-muted-foreground">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleGrid; 
