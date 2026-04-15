import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Over Ons',
  description:
    'Leer meer over Lumière Studio — opgericht in 2018 in Amsterdam. Ontdek ons verhaal, ons team van gecertificeerde specialisten en onze missie om premium schoonheidsbehandelingen te bieden.',
  openGraph: {
    title: 'Over Ons | Lumière Studio',
    description:
      'Het verhaal achter Lumière Studio, ons team en onze kernwaarden.',
    url: 'https://lumierestudio.nl/over-ons',
  },
};

const team = [
  {
    name: 'Amélie van der Berg',
    role: 'Oprichtster & Laser Specialist',
    bio: 'Amélie richtte Lumière Studio op in 2018 na 8 jaar ervaring in de schoonheidsindustrie. Ze is gecertificeerd in laserbehandelingen en gezichtsverzorging.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=400&q=80',
  },
  {
    name: 'Sophie Janssen',
    role: 'Nail Artist & Gel Specialist',
    bio: 'Sophie heeft meer dan 5 jaar ervaring als nagelspecialist en staat bekend om haar oog voor detail en perfecte gel nagels.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    name: 'Nora de Wit',
    role: 'Huidtherapeut & Gezichtsspecialist',
    bio: 'Nora is gecertificeerd huidtherapeut met specialisaties in anti-aging en hydraterende behandelingen voor alle huidtypen.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
  },
];

const values = [
  {
    title: 'Uitmuntendheid',
    description:
      'Wij streven naar de hoogste standaard in elk aspect van onze service — van de kwaliteit van behandelingen tot de gastvrije sfeer in onze salon.',
    icon: '✦',
  },
  {
    title: 'Authenticiteit',
    description:
      'Wij geloven in eerlijkheid en transparantie. U krijgt altijd een eerlijk advies dat past bij uw unieke huid en wensen.',
    icon: '✦',
  },
  {
    title: 'Zorg',
    description:
      'Uw welzijn staat altijd centraal. We nemen de tijd om u echt te leren kennen en behandelingen te bieden die aansluiten bij uw leven.',
    icon: '✦',
  },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#2C2A26' }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.95))' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>
            Ons Verhaal
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}
          >
            Over Lumière Studio
          </h1>
          <div className="mt-4 w-12 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            Een plek waar schoonheid, rust en vakmanschap samenkomen
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                  alt="Lumière Studio verhaal"
                  fill
                  unoptimized
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div
                className="absolute -bottom-5 -right-5 w-20 h-20 -z-10"
                style={{ border: '2px solid #C4A882', borderRadius: '2px' }}
              />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>
                Opgericht in 2018
              </span>
              <h2
                className="mt-3 text-3xl sm:text-4xl leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
              >
                Ons Verhaal
              </h2>
              <div className="w-10 h-px mb-6" style={{ backgroundColor: '#C4A882' }} />
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#7D7168' }}>
                <p>
                  Lumière Studio werd in 2018 opgericht door Amélie van der Berg met één duidelijke missie: een salon creëren waar elke klant zich uitzonderlijk behandeld voelt. Na jaren van ervaring in topestablissementen in Amsterdam en Parijs, besloot Amélie haar eigen visie op luxe schoonheidszorg te verwezenlijken.
                </p>
                <p>
                  De naam &apos;Lumière&apos; — Frans voor licht — weerspiegelt onze filosofie: we willen het beste in iedere klant naar boven brengen en het innerlijke licht laten stralen. Onze salon op de Keizersgracht biedt een rustige, elegante omgeving waar u even kunt ontsnappen aan de drukte van het dagelijks leven.
                </p>
                <p>
                  Vandaag de dag is Lumière Studio uitgegroeid tot een gewaardeerde bestemming voor vrouwen die waarde hechten aan kwaliteit, vakmanschap en een persoonlijke benadering. Met een team van drie gepassioneerde specialisten bedienen we dagelijks tientallen tevreden klanten.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn-gold px-7 py-3 text-sm"
                >
                  Maak een afspraak
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Ons Team</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
            >
              De mensen achter de salon
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className="relative mx-auto mb-5 overflow-hidden"
                  style={{ width: '180px', height: '180px', borderRadius: '50%', border: '3px solid #F2E8DF', boxShadow: '0 0 0 4px #C4A882' }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    unoptimized
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                <h3
                  className="text-xl"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
                >
                  {member.name}
                </h3>
                <p className="text-sm mt-1 font-medium" style={{ color: '#C4A882' }}>{member.role}</p>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: '#7D7168' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>Waar We Voor Staan</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
            >
              Onze Kernwaarden
            </h2>
            <div className="mt-4 w-10 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-white"
                style={{ borderRadius: '2px', boxShadow: '0 2px 20px rgba(44,42,38,0.06)' }}
              >
                <div
                  className="text-2xl mb-4"
                  style={{ color: '#C4A882', fontFamily: "'Playfair Display', serif" }}
                >
                  {value.icon}
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7D7168' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
