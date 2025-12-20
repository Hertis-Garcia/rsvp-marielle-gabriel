import React from 'react';

export interface WeddingDetails {
  groom: string;
  bride: string;
  date: string;
  time: string;
  venueName: string;
  venueAddress: string;
  rsvpLink: string;
}

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}