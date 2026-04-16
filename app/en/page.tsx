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
  title: 'Premium Beauty Salon in Amsterdam',
  description:
    'Lumière Studio offers premium beauty treatments in Amsterdam, including laser hair removal, gel nails, and tailored facials.',
  openGraph: {
    title: 'Lumière Studio | Premium Beauty Salon Amsterdam',
    description:
      'Discover exclusive beauty treatments in the heart of Amsterdam and book your appointment today.',
    url: 'https://lumierestudio.nl/en',
  },
};

export default function EnglishHomePage() {
  return (
    <>
      <HeroSection locale="en" />
      <IntroSection locale="en" />
      <ServicesSection locale="en" />
      <WhyChooseUs locale="en" />
      <GalleryPreview locale="en" />
      <TestimonialsSection locale="en" />
      <CTASection locale="en" />
      <ContactSection locale="en" />
    </>
  );
}
