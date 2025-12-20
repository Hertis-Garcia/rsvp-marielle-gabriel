import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { WeddingDetails } from '../types';

interface EventDetailsProps {
  details: WeddingDetails;
}

const CalendarGrid = () => {
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  // December 2025: starts on Monday (index 1). 31 days.
  // Mapping exact days for visual accuracy.
  const days = [
    null, 1, 2, 3, 4, 5, 6, 
    7, 8, 9, 10, 11, 12, 13, 
    14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 
    28, 29, 30, 31, null, null, null
  ];

  return (
    <div className="bg-wedding-cream p-6 md:p-8 rounded-t-[150px] rounded-b-lg border border-wedding-gold/30 shadow-2xl max-w-xs mx-auto transform transition-all hover:scale-105 duration-500">
      <div className="text-center mb-6 pt-4">
        <h3 className="font-serif text-3xl text-wedding-charcoal">December</h3>
        <p className="font-serif italic text-wedding-gold text-lg">2025</p>
      </div>
      
      <div className="grid grid-cols-7 gap-2 md:gap-3 text-center mb-2">
        {weekDays.map((d) => (
          <span key={d} className="font-sans text-[10px] font-bold text-wedding-charcoal/40 uppercase">
            {d}
          </span>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2 md:gap-3 text-center">
        {days.map((day, i) => (
          <div 
            key={i} 
            className={`
              h-8 w-8 flex items-center justify-center text-sm font-serif relative
              ${!day ? 'invisible' : 'text-wedding-charcoal'}
            `}
          >
            {day === 24 ? (
              <>
                 <span className="absolute inset-0 bg-wedding-charcoal rounded-full animate-pulse opacity-10"></span>
                 <span className="relative z-10 w-full h-full flex items-center justify-center bg-wedding-gold text-white rounded-full shadow-lg">
                   {day}
                 </span>
              </>
            ) : (
              day
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const EventDetails: React.FC<EventDetailsProps> = ({ details }) => {
  return (
    <section id="details" className="py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="font-serif text-5xl md:text-6xl text-wedding-charcoal">
            The Celebration
          </h2>
          <div className="w-16 h-px bg-wedding-gold mx-auto"></div>
          <p className="font-sans text-wedding-charcoal/60 uppercase tracking-widest text-xs">
            Save the Date
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-24">
          
          {/* Left Side: Calendar */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end relative">
             <CalendarGrid />
          </div>

          {/* Center: Divider (Desktop) */}
          <div className="hidden lg:block h-auto min-h-[500px] w-px bg-gradient-to-b from-transparent via-wedding-gold/40 to-transparent"></div>

          {/* Right Side: Details */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-12 pt-4">
            
            {/* Time */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
              <div className="p-3 bg-wedding-sage/10 rounded-full text-wedding-sage flex-shrink-0">
                 <Clock size={24} />
              </div>
              <div>
                <h4 className="font-serif text-2xl text-wedding-charcoal mb-1">Wednesday, December 24th</h4>
                <p className="font-sans text-wedding-charcoal/70 leading-relaxed text-sm tracking-wide">
                  {details.time}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 w-full">
              <div className="p-3 bg-wedding-sage/10 rounded-full text-wedding-sage flex-shrink-0">
                 <MapPin size={24} />
              </div>
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <h4 className="font-serif text-2xl text-wedding-charcoal mb-1">{details.venueName}</h4>
                <p className="font-sans text-wedding-charcoal/70 leading-relaxed text-sm">
                  {details.venueAddress}
                </p>
                
                {/* Embedded Map */}
                <div className="mt-6 w-full aspect-video rounded-sm overflow-hidden border border-wedding-gold/20 shadow-md relative bg-wedding-cream">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight={0} 
                        marginWidth={0} 
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(details.venueName + " " + details.venueAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        title="Venue Location Map"
                        className="w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </div>

                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(details.venueName + " " + details.venueAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-xs font-sans font-bold uppercase tracking-widest text-wedding-gold hover:text-wedding-sage transition-colors border-b border-wedding-gold/30 pb-0.5"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default EventDetails;