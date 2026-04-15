import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import GalleryPreview from '@/components/home/GalleryPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import ContactSection from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: 'Premium Schoonheidssalon in Amsterdam',
  description:
    'Lumière Studio biedt premium schoonheidsbehandelingen in Amsterdam. Laser ontharing, gel nagels en gezichtsbehandelingen door gecertificeerde specialisten op de Keizersgracht.',
  openGraph: {
    title: 'Lumière Studio | Premium Schoonheidssalon Amsterdam',
    description:
      'Ontdek exclusieve schoonheidsbehandelingen in het hart van Amsterdam. Maak vandaag nog uw afspraak.',
    url: 'https://lumierestudio.nl',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <WhyChooseUs />
      <GalleryPreview />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
