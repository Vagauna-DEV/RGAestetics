import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Lumière Studio',
  description: 'Lees de algemene voorwaarden van Lumière Studio.',
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <section className="pt-32 pb-20 section-padding" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="container-custom max-w-2xl">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>
          Juridisch
        </span>
        <h1
          className="mt-3 text-3xl sm:text-4xl mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
        >
          Algemene Voorwaarden
        </h1>
        <div className="w-10 h-px mb-8" style={{ backgroundColor: '#C4A882' }} />
        <p className="text-sm leading-relaxed mb-6" style={{ color: '#7D7168' }}>
          Onze algemene voorwaarden zijn momenteel in opmaak. Neem voor vragen contact met ons op via{' '}
          <a href="mailto:info@lumierestudio.nl" style={{ color: '#C4A882' }}>
            info@lumierestudio.nl
          </a>
          .
        </p>
        <Link href="/" className="link-gold-bright text-sm font-medium">
          ← Terug naar home
        </Link>
      </div>
    </section>
  );
}
