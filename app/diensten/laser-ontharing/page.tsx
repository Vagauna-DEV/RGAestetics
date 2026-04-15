'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  'Permanente haarreductie na voltooide behandelreeks',
  'Geschikt voor alle huidtypen (Fitzpatrick I–VI)',
  'Vrijwel pijnloos dankzij geïntegreerde koeling',
  'Geen ingroeiende haartjes meer',
  'Gladde, zachte huid jaarrond',
  'Tijdbesparend op lange termijn',
  'Gecertificeerde laserspecialisten',
  'Geavanceerde en goedgekeurde apparatuur',
];

const processSteps = [
  {
    number: '01',
    title: 'Gratis Consultatie',
    description:
      'Tijdens een gratis intake analyseren we uw huid- en haartype, bespreken we uw wensen en stellen we een persoonlijk behandelplan op. We beantwoorden al uw vragen over laser ontharing.',
  },
  {
    number: '02',
    title: 'Voorbereiding',
    description:
      'Scheer de te behandelen zone 24–48 uur voor de behandeling. Vermijd zonnebrand en zelfbruiner. Kom zonder parfum of lotion op de behandelzone.',
  },
  {
    number: '03',
    title: 'De Laserbehandeling',
    description:
      'We reinigen de huid en brengen een beschermende gel aan. De laser wordt ingesteld op uw specifieke huid- en haartype. U voelt slechts een licht tintelend gevoel door het koelsysteem.',
  },
  {
    number: '04',
    title: 'Directe Nazorg',
    description:
      'Na de behandeling koelen we de huid en brengen een kalmerende crème aan. We geven u nazorginstructies mee voor de eerste 24 uur.',
  },
  {
    number: '05',
    title: 'Vervolgbehandelingen',
    description:
      'Voor optimaal resultaat zijn 6–8 sessies nodig met een interval van 4–6 weken. Het exacte aantal sessies varieert per persoon en behandelzone.',
  },
];

const pricingZones = [
  { zone: 'Bovenlip', price: '€ 45', sessions: '6–8' },
  { zone: 'Oksels', price: '€ 55', sessions: '6–8' },
  { zone: 'Bikinilijn (standaard)', price: '€ 65', sessions: '6–8' },
  { zone: 'Bikinilijn (diep)', price: '€ 80', sessions: '6–8' },
  { zone: 'Onderbenen', price: '€ 95', sessions: '6–8' },
  { zone: 'Bovenbenen', price: '€ 110', sessions: '6–8' },
  { zone: 'Volledige benen', price: '€ 175', sessions: '6–8' },
  { zone: 'Rug (vrouwen)', price: '€ 85', sessions: '6–8' },
  { zone: 'Buik (lijn)', price: '€ 50', sessions: '6–8' },
  { zone: 'Volledige behandelreeks (6 sessies)', price: 'Vanaf € 250', sessions: '6' },
];

const faqs = [
  {
    q: 'Voor wie is laser ontharing geschikt?',
    a: 'Laser ontharing is geschikt voor vrijwel iedereen, ongeacht huidtype. Onze moderne lasers zijn geschikt voor alle huidtinten (Fitzpatrick I–VI). Tijdens de intake beoordelen we of de behandeling geschikt is voor u.',
  },
  {
    q: 'Hoe lang duurt een behandelingssessie?',
    a: 'Dit is afhankelijk van de te behandelen zone. Een bovenlipregio duurt circa 10 minuten, terwijl een volledige beenbehandeling 60–90 minuten kan duren.',
  },
  {
    q: 'Is laser ontharing permanent?',
    a: 'Na een volledige behandelreeks van 6–8 sessies ervaart meer dan 90% van de klanten permanente haarreductie. Sommige haartjes kunnen terugkomen, waarvoor een enkele opfrisbehandeling volstaat.',
  },
  {
    q: 'Wat zijn de contra-indicaties?',
    a: 'Laser ontharing is niet geschikt tijdens zwangerschap, bij bepaalde huidaandoeningen, bij gebruik van fotosensitiserende medicatie of bij recent zongebruik. Bespreek eventuele medische omstandigheden tijdens de intake.',
  },
  {
    q: 'Hoeveel pijn doet laser ontharing?',
    a: 'Dankzij ons DualCool-systeem is de behandeling voor de meeste klanten goed te verdragen. Het gevoel wordt beschreven als een lichte tinteling of het knappen van een elastiekje. Gevoelige zones kunnen wat meer ongemak geven.',
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

export default function LaserOntharingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#2C2A26' }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.97))' }} />
        <div className="container-custom relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-xs" style={{ color: '#6B6560' }}>
            <Link href="/" style={{ color: '#6B6560' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C4A882'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B6560'; }}>Home</Link>
            <span>/</span>
            <Link href="/diensten" style={{ color: '#6B6560' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C4A882'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B6560'; }}>Diensten</Link>
            <span>/</span>
            <span style={{ color: '#C4A882' }}>Laser Ontharing</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>
              Behandeling
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400 }}
            >
              Laser Ontharing
            </h1>
            <div className="mt-4 w-12 h-px" style={{ backgroundColor: '#C4A882' }} />
            <p className="mt-6 text-base leading-relaxed" style={{ color: '#9E9188' }}>
              Permanente haarreductie met geavanceerde lasertechnologie. Veilig, effectief en afgestemd op uw huidtype.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300"
                style={{ backgroundColor: '#C4A882', color: '#FAFAF8', borderRadius: '2px' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#A8865C'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C4A882'; }}
              >
                Afspraak Maken
              </Link>
              <Link
                href="#prijzen"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300"
                style={{ border: '1px solid rgba(196,168,130,0.5)', color: '#C4A882', borderRadius: '2px' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C4A882'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(196,168,130,0.5)'; }}
              >
                Bekijk Prijzen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Voordelen</span>
              <h2
                className="mt-3 text-3xl sm:text-4xl mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
              >
                Waarom Laser Ontharing?
              </h2>
              <div className="w-10 h-px mb-6" style={{ backgroundColor: '#C4A882' }} />
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#7D7168' }}>
                Laser ontharing is de meest effectieve methode voor blijvende haarverwijdering. Met onze Nd:YAG en Diode lasers behandelen we alle huidtypen veilig en effectief voor langdurige resultaten.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm" style={{ color: '#2C2A26' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=700&q=80"
                  alt="Laser ontharing behandeling"
                  fill
                  unoptimized
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Werkwijze</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
            >
              Het Behandelproces
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((step) => (
              <div key={step.number} className="flex gap-6 p-6 bg-white" style={{ borderRadius: '2px', boxShadow: '0 1px 12px rgba(44,42,38,0.05)' }}>
                <div
                  className="flex-shrink-0 text-2xl font-light"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#C4A882', minWidth: '2.5rem' }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: '#2C2A26' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="prijzen" className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Tarieven</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
            >
              Prijzen Laser Ontharing
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
            <p className="mt-4 text-sm" style={{ color: '#7D7168' }}>Prijzen zijn per sessie, tenzij anders vermeld. Gratis intake inbegrepen.</p>
          </div>

          <div className="max-w-2xl mx-auto overflow-hidden" style={{ borderRadius: '2px', border: '1px solid #E5DDD5' }}>
            <div className="grid grid-cols-3 px-6 py-3 text-xs font-semibold tracking-wide uppercase" style={{ backgroundColor: '#F2E8DF', color: '#7D7168' }}>
              <span>Zone</span>
              <span className="text-center">Prijs/sessie</span>
              <span className="text-right">Sessies</span>
            </div>
            {pricingZones.map((item, i) => (
              <div
                key={item.zone}
                className="grid grid-cols-3 px-6 py-4 items-center"
                style={{
                  backgroundColor: i % 2 === 0 ? '#FAFAF8' : '#FFFFFE',
                  borderTop: '1px solid #F0EAE3',
                }}
              >
                <span className="text-sm font-medium" style={{ color: '#2C2A26' }}>{item.zone}</span>
                <span className="text-center text-sm font-semibold" style={{ color: '#C4A882' }}>{item.price}</span>
                <span className="text-right text-sm" style={{ color: '#7D7168' }}>{item.sessions}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-6" style={{ color: '#7D7168' }}>
            * Combinatiepakketten en koppelkorting beschikbaar. Neem contact op voor een persoonlijke offerte.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Vragen</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
            >
              Veelgestelde Vragen
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#2C2A26' }}>
        <div className="container-custom text-center">
          <h2
            className="text-3xl sm:text-4xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}
          >
            Klaar voor gladde huid?
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            Plan een gratis intake en ontdek wat laser ontharing voor u kan betekenen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
            style={{ backgroundColor: '#C4A882', color: '#FAFAF8', borderRadius: '2px' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#A8865C'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C4A882'; }}
          >
            Gratis Intake Aanvragen
          </Link>
        </div>
      </section>
    </>
  );
}
