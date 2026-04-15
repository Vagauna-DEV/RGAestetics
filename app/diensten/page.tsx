'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/home/CTASection';

const services = [
  {
    title: 'Laser Ontharing',
    description:
      'Zeg voorgoed vaarwel tegen ongewenst lichaamshaar. Onze geavanceerde lasertechnologie zorgt voor blijvende resultaten op een veilige en effectieve manier.',
    features: ['Permanent resultaat', 'Geschikt voor alle huidtypen', 'Pijnminimaliserende technologie', 'Korte behandeltijd'],
    href: '/diensten/laser-ontharing',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=700&q=80',
    from: '€ 45',
  },
  {
    title: 'Gel Nagels',
    description:
      'Perfecte nagels die weken lang mooi blijven. Van subtiele nude tinten tot creatieve nail art — onze specialisten maken uw droomnagels werkelijkheid.',
    features: ['Langdurig resultaat (3–4 weken)', 'Versterkt de nagelstructuur', 'Breed kleurenpalet', 'Nail art op aanvraag'],
    href: '/diensten/gelnagels',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80',
    from: '€ 35',
  },
  {
    title: 'Gezichtsbehandelingen',
    description:
      'Herdek uw huid met onze op maat gemaakte gezichtsbehandelingen. Van intensieve hydratatie tot anti-aging — elke behandeling is afgestemd op uw specifieke huidbehoeften.',
    features: ['Persoonlijk huidadvies', 'Premium huidverzorgingsproducten', 'Anti-aging opties', 'Zichtbaar resultaat na één behandeling'],
    href: '/diensten/gezichtsbehandelingen',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80',
    from: '€ 55',
  },
];

const faqs = [
  {
    category: 'Laser Ontharing',
    questions: [
      {
        q: 'Hoeveel sessies heb ik nodig voor laser ontharing?',
        a: 'Gemiddeld zijn 6 tot 8 sessies nodig voor een optimaal resultaat. Dit verschilt per persoon en haartype. Tijdens de gratis intake bespreken we een persoonlijk behandelplan.',
      },
      {
        q: 'Is laser ontharing pijnlijk?',
        a: 'De behandeling kan een licht tintelend gevoel geven, maar is over het algemeen goed te verdragen. Onze apparatuur is uitgerust met een koelingssysteem om het comfort te maximaliseren.',
      },
      {
        q: 'Voor welke lichaamsdelen is laser ontharing geschikt?',
        a: 'Laser ontharing is geschikt voor vrijwel alle lichaamsdelen: benen, oksels, bikinilijn, bovenlip, rug, buik en meer. Tijdens de intake bespreken we de specifieke zones.',
      },
    ],
  },
  {
    category: 'Gel Nagels',
    questions: [
      {
        q: 'Hoe lang blijven gel nagels zitten?',
        a: 'Gel nagels blijven gemiddeld 3 tot 4 weken mooi. Dit is afhankelijk van uw nagelgroei en dagelijkse activiteiten.',
      },
      {
        q: 'Zijn gel nagels schadelijk voor mijn natuurlijke nagels?',
        a: 'Bij correct aanbrengen en verwijderen zijn gel nagels niet schadelijk. Wij gebruiken hoogwaardige producten en volgen de juiste procedures om uw natuurlijke nagels te beschermen.',
      },
    ],
  },
  {
    category: 'Gezichtsbehandelingen',
    questions: [
      {
        q: 'Welke gezichtsbehandeling is het beste voor mijn huidtype?',
        a: 'Dit bespreken we tijdens een gratis huidanalyse. Op basis van uw huidtype en wensen stellen we het meest geschikte behandelplan samen.',
      },
      {
        q: 'Hoe vaak moet ik een gezichtsbehandeling laten doen?',
        a: 'Voor optimale resultaten adviseren wij elke 4 tot 6 weken een behandeling. Dit kan variëren afhankelijk van uw huidtype en het gewenste resultaat.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E5DDD5' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span className="text-sm font-medium" style={{ color: '#2C2A26' }}>{q}</span>
        <span
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', color: '#C4A882' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function DienstenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.95))' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>
            Onze Specialiteiten
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}
          >
            Onze Diensten
          </h1>
          <div className="mt-4 w-12 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            Premium schoonheidsbehandelingen afgestemd op uw unieke wensen en huidtype
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom space-y-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', borderRadius: '2px' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>
                  Vanaf {service.from}
                </span>
                <h2
                  className="mt-2 text-3xl sm:text-4xl mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
                >
                  {service.title}
                </h2>
                <div className="w-10 h-px mb-5" style={{ backgroundColor: '#C4A882' }} />
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#7D7168' }}>
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: '#2C2A26' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300"
                  style={{ backgroundColor: '#C4A882', color: '#FAFAF8', borderRadius: '2px' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#A8865C'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C4A882'; }}
                >
                  Meer informatie
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process section */}
      <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Hoe Het Werkt</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
            >
              Onze Aanpak
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Gratis Intake', desc: 'We bespreken uw wensen en voeren een huidanalyse uit.' },
              { step: '02', title: 'Persoonlijk Plan', desc: 'We stellen een behandelplan op dat perfect past bij uw behoeften.' },
              { step: '03', title: 'De Behandeling', desc: 'Ontspan en geniet terwijl onze specialisten aan het werk zijn.' },
              { step: '04', title: 'Nazorg Advies', desc: 'We geven u persoonlijke tips voor thuis om resultaten te behouden.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-6 bg-white" style={{ borderRadius: '2px', boxShadow: '0 1px 12px rgba(44,42,38,0.05)' }}>
                <div
                  className="text-4xl font-light mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#C4A882', opacity: 0.6 }}
                >
                  {item.step}
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#2C2A26' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Veel Gestelde Vragen</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
            >
              FAQ
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>

          <div className="max-w-3xl mx-auto space-y-10">
            {faqs.map((section) => (
              <div key={section.category}>
                <h3
                  className="text-lg mb-4 pb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#2C2A26',
                    fontWeight: 400,
                    borderBottom: '1px solid #C4A882',
                  }}
                >
                  {section.category}
                </h3>
                {section.questions.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
