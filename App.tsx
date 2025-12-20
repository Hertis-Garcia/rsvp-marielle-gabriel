import React from 'react';
import HeroSection from './components/HeroSection';
import EventDetails from './components/EventDetails';
import RsvpSection from './components/RsvpSection';
import { WeddingDetails } from './types';
import { Heart } from 'lucide-react';

const weddingData: WeddingDetails = {
  groom: 'Gabriel',
  bride: 'Marielle',
  date: 'December 24, 2025',
  time: '3:00 PM Ceremony | 6:00 PM Reception',
  venueName: 'The Grand Estancia Resort',
  venueAddress: '123 Skyline Boulevard, Tagaytay City, Philippines',
  rsvpLink: 'https://docs.google.com/forms', 
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-wedding-gold selection:text-white">
      <main className="flex-grow">
        <HeroSection groom={weddingData.groom} bride={weddingData.bride} />
        <EventDetails details={weddingData} />
        <RsvpSection rsvpLink={weddingData.rsvpLink} />
      </main>

      <footer className="py-8 bg-wedding-cream text-center border-t border-wedding-gold/20">
        <div className="flex items-center justify-center gap-2 text-wedding-charcoal/60 font-serif italic">
          <span>Marielle</span>
          <Heart size={12} className="text-wedding-gold fill-wedding-gold" />
          <span>Gabriel</span>
        </div>
        <p className="text-xs font-sans uppercase tracking-widest text-wedding-charcoal/40 mt-2">
            #MarielleAndGabriel2025
        </p>
      </footer>
    </div>
  );
};

export default App;