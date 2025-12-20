import React from 'react';
import { ExternalLink } from 'lucide-react';
import { WeddingDetails } from '../types';

interface RsvpSectionProps {
  rsvpLink: string;
}

const RsvpSection: React.FC<RsvpSectionProps> = ({ rsvpLink }) => {
  return (
    <section id="rsvp" className="py-24 px-6 bg-wedding-sage/10 relative overflow-hidden">
      {/* Decorative floral elements (CSS circles for abstract representation) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-sage/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-wedding-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-5xl text-wedding-charcoal mb-8">RSVP</h2>
        <p className="font-sans text-wedding-charcoal/80 mb-12 text-lg leading-relaxed max-w-xl mx-auto">
          We would be honored to have you celebrate with us. <br/>
          Please confirm your attendance by scanning the QR code or clicking the link below.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-xl inline-block mb-10 transform hover:-translate-y-1 transition-transform duration-300">
           {/* Placeholder for QR Code */}
           <div className="w-48 h-48 bg-wedding-cream flex items-center justify-center border-2 border-dashed border-wedding-gold/40 rounded-sm">
             <img 
               src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://docs.google.com/forms" 
               alt="RSVP QR Code" 
               className="w-full h-full p-2"
             />
           </div>
           <p className="font-sans text-xs uppercase tracking-widest mt-4 text-wedding-charcoal/50">Scan Me</p>
        </div>

        <div className="flex justify-center">
            <a 
              href={rsvpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-wedding-charcoal text-white font-sans uppercase tracking-widest text-sm hover:bg-wedding-sage transition-colors duration-300 rounded-sm"
            >
                <span>Go to RSVP Form</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
        
        <p className="mt-12 font-serif italic text-wedding-charcoal/60 text-lg">
            Kindly respond by November 1st, 2025
        </p>
      </div>
    </section>
  );
};

export default RsvpSection;