import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineItemProps {
  event: TimelineEvent;
  isActive: boolean;
  onClick: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  event,
  isActive,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-center min-w-[280px] md:min-w-[320px] transition-all">
      {/* Year + Circle */}
      <div className="flex flex-col items-center mb-4">
        <p className="text-white mb-2 font-bold">{event.year}</p>

        <button
          onClick={onClick}
          className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${
            isActive
              ? 'bg-blue-500 border-blue-500 scale-110'
              : 'bg-white border-white hover:scale-105'
          }`}
        />
      </div>

      {/* Card */}
      <Card
        className={`w-full bg-white text-gray-800 transition-all duration-300 rounded-xl ${
          isActive ? 'shadow-2xl scale-105' : 'shadow-md'
        }`}
      >
        <CardContent className="p-6 min-h-[180px]">
          <h3 className="mb-3 text-red-400 font-semibold text-xl">
            {event.title}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {event.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export const HistorySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = React.useRef<HTMLDivElement>(null);

  const timelineEvents: TimelineEvent[] = [
    { year: '2004', title: 'Genesis as Thermax Franchise', description: 'Inception year marking the beginning...' },
    { year: '2007', title: 'Venturing into HVAC', description: 'Diversified into the HVAC sector...' },
    { year: '2010', title: 'Launch of Project Endeavors', description: 'Initiated project-based activities...' },
    { year: '2013', title: 'Industrial Cooling Expansion', description: 'Expanded solutions to industrial cooling...' },
    { year: '2017', title: 'ISO Certification', description: 'Achieved prestigious ISO certifications...' },
    { year: '2021', title: 'Digital Transformation', description: 'Implemented ERP and digital systems...' },
    { year: '2024', title: 'Leadership & Innovation', description: 'Recognized as a leading provider...' },
  ];

  /* Scroll left */
  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  /* Scroll right */
  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="history" className="relative py-20 overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1605434896752-b7566eb11bb8?auto=format&fit=crop&w=1200&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-white mb-4 text-3xl md:text-4xl font-bold">Our History</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            A journey of innovation, progress, and excellence spanning decades.
          </p>
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white text-2xl"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white text-2xl"
        >
          ›
        </button>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute top-[52px] left-0 right-0 h-1 bg-white/30 hidden md:block mx-auto"
            style={{ width: 'calc(100% - 8rem)' }}
          />

          {/* Scroll container NO SCROLLBAR */}
          <div
            ref={timelineRef}
            className="overflow-x-auto pb-8 px-4 no-scrollbar"
          >
            <style>
              {`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              `}
            </style>

            <div className="flex gap-6 md:gap-8 justify-start md:justify-center min-w-min px-4">
              {timelineEvents.map((event, index) => (
                <TimelineItem
                  key={index}
                  event={event}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
