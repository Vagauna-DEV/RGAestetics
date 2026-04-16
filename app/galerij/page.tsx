import type { Metadata } from 'next';
import GalerijContent from './GalerijContent';

export const metadata: Metadata = {
  title: 'Galerij | Lumière Studio',
  description:
    'Bekijk de galerij van Lumière Studio. Foto\'s van onze salon, behandelingen en resultaten voor laser ontharing, gel nagels en gezichtsbehandelingen.',
  openGraph: {
    title: 'Galerij | Lumière Studio',
    description: 'Een blik achter de schermen en op de resultaten van onze behandelingen.',
    url: 'https://lumierestudio.nl/galerij',
  },
};

export default function GalerijPage() {
  return <GalerijContent />;
}
