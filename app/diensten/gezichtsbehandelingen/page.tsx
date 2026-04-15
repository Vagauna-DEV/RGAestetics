'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const facialTypes = [
  {
    name: 'Hydraterende Facial',
    description: 'Intensieve vochtinbrenging voor een stralende, zachte huid. Perfect voor droge of gecombineerde huid of als seizoensbeurt.',
    duration: '60 min',
    price: '€ 75',
    suitable: 'Droge, gecombineerde huid',
  },
  {
    name: 'Anti-Aging Facial',
    description: 'Gericht op het verminderen van fijne lijntjes en het versteviging van de huid met hoogwaardige peptiden en retinol.',
    duration: '75 min',
    price: '€ 95',
    suitable: 'Rijpere huid, zichtbare veroudering',
  },
  {
    name: 'Diep Reinigende Facial',
    description: 'Grondig reinigen van poriën, verwijderen van mee-eters en reguleren van talgproductie voor een heldere huid.',
    duration: '60 min',
    price: '€ 80',
    suitable: 'Vette, acnegevoelige huid',
  },
  {
    name: 'Gevoelige Huid Facial',
    description: 'Kalmerende behandeling met hypoallergene producten speciaal voor rosacea, eczeem of overgevoelige huid.',
    duration: '60 min',
    price: '€ 80',
    suitable: 'Gevoelige, reactieve huid',
  },
  {
    name: 'Brightening Facial',
    description: 'Egaliseren van huidtint, verminderen van donkere vlekken en pigmentatie voor een stralend, egaal teint.',
    duration: '75 min',
    price: '€ 90',
    suitable: 'Dof teint, pigmentatie',
  },
  {
    name: 'Luxe Signature Facial',
    description: 'Onze uitgebreide premium facial: combinatie van reinigen, peeling, massage, masker en serumbehandeling op maat.',
    duration: '90 min',
    price: '€ 120',
    suitable: 'Alle huidtypen — het ultieme verwenmoment',
  },
];

const processSteps = [
  { number: '01', title: 'Huidanalyse', description: 'We analyseren uw huid grondig onder verlichting en bespreken uw concerns en doelen.' },
  { number: '02', title: 'Reiniging', description: 'Doublecleanse om make-up, SPF en onzuiverheden te verwijderen.' },
  { number: '03', title: 'Peeling', description: 'Enzympeeling of zuurpeeling op maat voor een gladde, stralende huid.' },
  { number: '04', title: 'Extractie', description: 'Voorzichtig verwijderen van mee-eters en verstopte poriën (indien gewenst).' },
  { number: '05', title: 'Massage', description: 'Ontspannende gezichts- en décolletémassage voor stimulatie van de doorbloeding.' },
  { number: '06', title: 'Masker & Serum', description: 'Intensief werkend masker en serum afgestemd op uw huidtype en doelen.' },
];

const faqs = [
  { q: 'Hoe weet ik welke gezichtsbehandeling bij mij past?', a: 'Tijdens een gratis huidanalyse beoordelen we uw huidtype en bespreken we uw wensen. Op basis hiervan adviseren we de meest geschikte behandeling.' },
  { q: 'Kan ik een gezichtsbehandeling combineren met andere diensten?', a: 'Ja, veel klanten combineren een gezichtsbehandeling met een gel manicure of pedicure. We adviseren u graag over een persoonlijk behandelplan.' },
  { q: 'Hoe lang duurt het voor ik resultaat zie?', a: 'Veel klanten zien al direct na de eerste behandeling verschil in huidglans en textuur. Voor langdurige resultaten adviseren we een serie van 4–6 behandelingen.' },
  { q: 'Moet ik iets voorbereiden voor een gezichtsbehandeling?', a: 'Kom met een schoon gezicht (zonder make-up) of arriveer iets eerder zodat we u kunnen demakelnen. Vermijd retinol en exfolianten 48 uur voor de behandeling.' },
  { q: 'Is een gezichtsbehandeling geschikt tijdens de zwangerschap?', a: 'Ja, de hydraterende facial en de gevoelige huid facial zijn veilig tijdens de zwangerschap. We vermijden bepaalde ingrediënten en technieken. Informeer ons altijd over uw zwangerschap.' },
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
        <span className="flex-shrink-0 transition-transform duration-300" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', color: '#C4A882' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && <div className="pb-5"><p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>{a}</p></div>}
    </div>
  );
}

export default function GezichtsbehandelingenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.97))' }} />
        <div className="container-custom relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-xs" style={{ color: '#6B6560' }}>
            <Link href="/" style={{ color: '#6B6560' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C4A882'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B6560'; }}>Home</Link>
            <span>/</span>
            <Link href="/diensten" style={{ color: '#6B6560' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C4A882'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B6560'; }}>Diensten</Link>
            <span>/</span>
            <span style={{ color: '#C4A882' }}>Gezichtsbehandelingen</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>Behandeling</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400 }}>
              Gezichtsbehandelingen
            </h1>
            <div className="mt-4 w-12 h-px" style={{ backgroundColor: '#C4A882' }} />
            <p className="mt-6 text-base leading-relaxed" style={{ color: '#9E9188' }}>
              Op maat gemaakte huidbehandelingen voor een stralende, gezonde huid. Elke facial begint met een grondige huidanalyse.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300" style={{ backgroundColor: '#C4A882', color: '#FAFAF8', borderRadius: '2px' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#A8865C'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C4A882'; }}>
                Afspraak Maken
              </Link>
              <Link href="#behandelingen" className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300" style={{ border: '1px solid rgba(196,168,130,0.5)', color: '#C4A882', borderRadius: '2px' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C4A882'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(196,168,130,0.5)'; }}>
                Bekijk Behandelingen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro with image */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Onze Aanpak</span>
              <h2 className="mt-3 text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
                Huid die straalt van binnenuit
              </h2>
              <div className="w-10 h-px mb-6" style={{ backgroundColor: '#C4A882' }} />
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#7D7168' }}>
                <p>Elke huid is uniek en verdient een behandeling die perfect aansluit bij haar specifieke behoeften. Bij Lumière Studio beginnen we altijd met een grondige huidanalyse om uw huidtype, concerns en doelen in kaart te brengen.</p>
                <p>We werken met premium huidverzorgingslijnen van gerenommeerde merken zoals Dermalogica, Elemis en La Mer — producten die bewezen resultaten leveren en uw huid nourish in plaats van beschadigen.</p>
                <p>Of u nu last heeft van droogte, acne, pigmentatie of zichtbare veroudering — onze gecertificeerde huidtherapeuten stellen een behandelplan op dat uw huid transformeert.</p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
                <Image src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80" alt="Gezichtsbehandeling" fill unoptimized style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facial Types */}
      <section id="behandelingen" className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Ons Aanbod</span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Onze Gezichtsbehandelingen
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facialTypes.map((facial) => (
              <div key={facial.name} className="p-6 bg-white" style={{ borderRadius: '2px', boxShadow: '0 2px 16px rgba(44,42,38,0.06)' }}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>{facial.name}</h3>
                  <span className="text-sm font-semibold ml-3 flex-shrink-0" style={{ color: '#C4A882' }}>{facial.price}</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#7D7168' }}>{facial.description}</p>
                <div className="flex items-center justify-between text-xs" style={{ color: '#7D7168', borderTop: '1px solid #F0EAE3', paddingTop: '12px' }}>
                  <span>{facial.duration}</span>
                  <span className="text-right" style={{ color: '#A8865C' }}>{facial.suitable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Werkwijze</span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Een Typische Facial Sessie
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center p-4">
                <div className="text-2xl font-light mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#C4A882', opacity: 0.7 }}>{step.number}</div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: '#2C2A26' }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#7D7168' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Vragen</span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Veelgestelde Vragen
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#2C2A26' }}>
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}>
            Ontdek uw ideale facial
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            Plan een gratis huidanalyse en laat ons het perfecte behandelplan voor u samenstellen.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300" style={{ backgroundColor: '#C4A882', color: '#FAFAF8', borderRadius: '2px' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#A8865C'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C4A882'; }}>
            Gratis Huidanalyse Aanvragen
          </Link>
        </div>
      </section>
    </>
  );
}
