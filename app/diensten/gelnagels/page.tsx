'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  'Tot 4 weken lang perfect uitziende nagels',
  'Versterkt en beschermt de natuurlijke nagel',
  'Glanzende, krasvaste afwerking',
  'Geen wachttijd — direct droog na de lamp',
  'Breed assortiment kleuren en designs',
  'Nail art en decoraties op aanvraag',
  'Schadeloos verwijderingsproces',
  'Hygiënische single-use vijlen en tools',
];

const menuItems = [
  { name: 'Gel Manicure Naturel', description: 'Nagels vijlen, cuticula verzorgen en gel topcoat', price: '€ 35', duration: '45 min' },
  { name: 'Gel Kleur Manicure', description: 'Complete manicure met gel kleur naar keuze', price: '€ 45', duration: '60 min' },
  { name: 'Gel Extensions', description: 'Nagelverlenging met gel voor lengte en vorm', price: '€ 65', duration: '90 min' },
  { name: 'Nail Art (per nagel)', description: 'Handbeschilderd design naar uw wens', price: 'Vanaf € 3', duration: '–' },
  { name: 'Gel Pedicure', description: 'Complete voetverzorging met gel kleur', price: '€ 55', duration: '75 min' },
  { name: 'Refill Gel', description: 'Bijwerken van bestaande gel nagels (2–3 weken na eerste sessie)', price: '€ 40', duration: '60 min' },
  { name: 'Verwijderen Gel', description: 'Veilig en schadeloos verwijderen van gel', price: '€ 15', duration: '30 min' },
  { name: 'Bridal Package', description: 'Uitgebreide manicure + pedicure voor de mooiste dag', price: '€ 120', duration: '2,5 uur' },
];

const processSteps = [
  { number: '01', title: 'Wensen Bespreken', description: 'We bespreken uw gewenste vorm, lengte en kleur. U kiest uit ons uitgebreide staalboek of brengt inspiratiefoto\'s mee.' },
  { number: '02', title: 'Nagelvoorbereiding', description: 'We vijlen de nagels op maat, verzorgen de cuticula en prepareren het nageloppervlak voor optimale hechting van de gel.' },
  { number: '03', title: 'Gel Aanbrengen', description: 'We brengen de basis, kleurlaag(en) en topcoat aan. Na elke laag wordt de nagel uitgehard onder de UV/LED lamp.' },
  { number: '04', title: 'Finishing Touch', description: 'We reinigen de nagels, brengen nagelriemolie aan en controleren het eindresultaat op elk detail.' },
];

const faqs = [
  { q: 'Hoe lang duurt een gel manicure bij Lumière Studio?', a: 'Een volledige gel manicure duurt gemiddeld 60 minuten. Met nail art of extensions kan de behandeling 90–120 minuten duren.' },
  { q: 'Zijn gel nagels schadelijk voor mijn nagels?', a: 'Bij correcte toepassing en verwijdering zijn gel nagels niet schadelijk. We gebruiken professionele producten en de juiste technieken om uw natuurlijke nagels te beschermen.' },
  { q: 'Hoe verwijder ik gel nagels thuis?', a: 'We raden af om gel nagels thuis te verwijderen door er aan te trekken of te bijten. Maak een afspraak voor veilige professionele verwijdering, of volg onze instructies voor verwijdering met acetone.' },
  { q: 'Kan ik nail art laten doen op gel nagels?', a: 'Ja! Onze nail artists maken handgeschilderde designs, gradiënten, stempels en decoraties. Breng gerust inspiratiefoto\'s mee.' },
  { q: 'Hoe lang moet ik wachten voor een refill?', a: 'Een refill is ideaal na 2–3 weken, wanneer er zichtbare nagelgroei is maar de gel nog goed gehecht zit. Wacht niet langer dan 4 weken voor een refill.' },
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

export default function GelNagelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.97))' }} />
        <div className="container-custom relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-xs" style={{ color: '#6B6560' }}>
            <Link href="/" style={{ color: '#6B6560' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C4A882'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B6560'; }}>Home</Link>
            <span>/</span>
            <Link href="/diensten" style={{ color: '#6B6560' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#C4A882'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B6560'; }}>Diensten</Link>
            <span>/</span>
            <span style={{ color: '#C4A882' }}>Gel Nagels</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>Behandeling</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400 }}>
              Gel Nagels
            </h1>
            <div className="mt-4 w-12 h-px" style={{ backgroundColor: '#C4A882' }} />
            <p className="mt-6 text-base leading-relaxed" style={{ color: '#9E9188' }}>
              Perfecte, duurzame nagels die weken mooi blijven. Van klassiek naturel tot creatieve nail art — vakmanschap in elk detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300" style={{ backgroundColor: '#C4A882', color: '#FAFAF8', borderRadius: '2px' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#A8865C'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C4A882'; }}>
                Afspraak Maken
              </Link>
              <Link href="#prijzen" className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300" style={{ border: '1px solid rgba(196,168,130,0.5)', color: '#C4A882', borderRadius: '2px' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C4A882'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(196,168,130,0.5)'; }}>
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
            <div className="relative">
              <div className="overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
                <Image src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80" alt="Gel nagels" fill unoptimized style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Voordelen</span>
              <h2 className="mt-3 text-3xl sm:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
                Waarom Gel Nagels?
              </h2>
              <div className="w-10 h-px mb-6" style={{ backgroundColor: '#C4A882' }} />
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#7D7168' }}>
                Gel nagels bieden het perfecte evenwicht tussen schoonheid en duurzaamheid. In tegenstelling tot gewone nagellak blijven gel nagels weken lang glanzend en onbeschadigd — ideaal voor de actieve vrouw die altijd perfect verzorgd wil zijn.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm" style={{ color: '#2C2A26' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12" /></svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Werkwijze</span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              De Behandeling Stap voor Stap
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <div key={step.number} className="p-6 bg-white text-center" style={{ borderRadius: '2px', boxShadow: '0 1px 12px rgba(44,42,38,0.05)' }}>
                <div className="text-3xl font-light mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#C4A882', opacity: 0.7 }}>{step.number}</div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: '#2C2A26' }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#7D7168' }}>{step.description}</p>
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
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Prijzen Gel Nagels
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>
          <div className="max-w-2xl mx-auto overflow-hidden" style={{ borderRadius: '2px', border: '1px solid #E5DDD5' }}>
            <div className="grid grid-cols-3 px-6 py-3 text-xs font-semibold tracking-wide uppercase" style={{ backgroundColor: '#F2E8DF', color: '#7D7168' }}>
              <span>Behandeling</span>
              <span className="text-center">Prijs</span>
              <span className="text-right">Duur</span>
            </div>
            {menuItems.map((item, i) => (
              <div key={item.name} className="px-6 py-4" style={{ backgroundColor: i % 2 === 0 ? '#FAFAF8' : '#FFFFFE', borderTop: '1px solid #F0EAE3' }}>
                <div className="grid grid-cols-3 items-start">
                  <div className="col-span-1">
                    <p className="text-sm font-medium" style={{ color: '#2C2A26' }}>{item.name}</p>
                    <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#7D7168' }}>{item.description}</p>
                  </div>
                  <p className="text-center text-sm font-semibold" style={{ color: '#C4A882' }}>{item.price}</p>
                  <p className="text-right text-sm" style={{ color: '#7D7168' }}>{item.duration}</p>
                </div>
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
            Boek uw nagelbehandeling
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            Maak vandaag nog een afspraak en verlaat onze salon met prachtige nagels.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300" style={{ backgroundColor: '#C4A882', color: '#FAFAF8', borderRadius: '2px' }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#A8865C'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C4A882'; }}>
            Afspraak Maken
          </Link>
        </div>
      </section>
    </>
  );
}
