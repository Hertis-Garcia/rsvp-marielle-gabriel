import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  groom: string;
  bride: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ groom, bride }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center">
      
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12">
        {/* Logo */}
        <div className="font-serif text-3xl text-wedding-charcoal tracking-widest font-bold">
          M <span className="text-wedding-black italic font-normal">&</span> G
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'Details', 'RSVP'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-wedding-charcoal/80 hover:text-wedding-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/rsvp_logo.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-wedding-cream/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 py-12 flex flex-col items-center gap-8 fade-in-up">
        {/* Initials / Title */}
        <div className="mb-4">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-wedding-charcoal/80 mb-4">
            The Wedding of
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-wedding-charcoal leading-none">
            {bride} <span className="text-wedding-gold italic">&</span> {groom}
          </h1>
        </div>

        {/* Video Placeholder */}
        <div className="w-full max-w-2xl bg-white p-2 shadow-2xl rounded-sm rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
          <div className="aspect-video bg-wedding-charcoal/10 relative overflow-hidden group cursor-pointer">
             <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/GTTsVaOA_AY?feature=youtu.be" 
                title="Our Story"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border border-wedding-gold/20"></div>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-lg mt-6">
          <p className="font-serif text-xl md:text-2xl italic text-wedding-charcoal/90 leading-relaxed">
            "We loved with a love that was more than love."
          </p>
          <p className="font-sans text-xs uppercase tracking-widest mt-2 text-wedding-gold">
            — Edgar Allan Poe
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce text-wedding-charcoal/50">
        <a href="#details" aria-label="Scroll down">
          <ArrowDown size={32} strokeWidth={1} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;