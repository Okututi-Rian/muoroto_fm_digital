import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

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

interface ProgramScheduleProps {
  scheduleItems: ScheduleItem[];
}

const ProgramSchedule = ({ scheduleItems }: ProgramScheduleProps) => {
  return (
    <div className="glassmorphic rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline-medium text-xl text-foreground">
          Today's Schedule
        </h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 font-body text-sm">
          <Icon name="CalendarDaysIcon" size={16} />
          <span>Full Schedule</span>
        </button>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {scheduleItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
              item.isLive
                ? 'bg-primary/10 border border-primary/20' :'hover:bg-muted/50'
            }`}
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl overflow-hidden">
                <AppImage
                  src={item.hostImage}
                  alt={item.hostAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-body-medium text-sm text-foreground truncate">
                  {item.title}
                </h4>
                {item.isLive && (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-error rounded-full pulse-community"></div>
                    <span className="font-body text-xs text-error">LIVE</span>
                  </div>
                )}
              </div>
              <p className="font-body text-xs text-muted-foreground mb-1">
                with {item.host}
              </p>
              <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                <span>{item.time}</span>
                <span>•</span>
                <span>{item.duration}</span>
                <span>•</span>
                <span className="px-2 py-0.5 bg-accent/20 text-accent rounded-full">
                  {item.category}
                </span>
              </div>
            </div>

            <div className="flex-shrink-0">
              {item.isLive ? (
                <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <Icon name="PlayIcon" size={16} />
                </div>
              ) : (
                <button className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center">
                  <Icon name="ClockIcon" size={16} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramSchedule; 
