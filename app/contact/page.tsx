import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact & Afspraken | Lumière Studio',
  description:
    'Maak een afspraak bij Lumière Studio in Amsterdam. Contacteer ons voor laser ontharing, gel nagels of gezichtsbehandelingen. Reactie binnen 24 uur.',
  openGraph: {
    title: 'Contact & Afspraken | Lumière Studio',
    description: 'Maak een afspraak of stel uw vraag — wij reageren binnen 24 uur.',
    url: 'https://lumierestudio.nl/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
