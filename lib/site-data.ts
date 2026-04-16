// Single source of truth for business data.
// ⚠ PLACEHOLDERS: replace phone and verify address before going live.

export const business = {
  name: 'Lumière Studio',
  phone: '+31 20 123 4567', // PLACEHOLDER — fill in real number
  phoneHref: 'tel:+31201234567',
  email: 'info@lumierestudio.nl',
  emailHref: 'mailto:georgevagauna@gmail.com',
  address: ['Keizersgracht 312', '1016 EX Amsterdam'], // verify address
  mapUrl: 'https://maps.google.com/?q=Keizersgracht+312+Amsterdam',
  hours: [
    { label: 'Ma–Vr', value: '9:00–19:00' },
    { label: 'Za',    value: '9:00–18:00' },
    { label: 'Zo',    value: 'Gesloten' },
  ],
};

export const testimonialStats = {
  rating: '4.9',
  count: 127,
  recommend: '98%',
};

export const testimonials = [
  {
    name: 'Sophie van den Berg',
    treatment: 'Laser Ontharing',
    rating: 5,
    date: 'Maart 2026',
    quote:
      'Na jarenlang scheren was de laser ontharing bij Lumière Studio een openbaring. Perfect resultaat en een warm welkom elke keer. Het team neemt alle tijd om vragen te beantwoorden en je op je gemak te stellen. Ik raad iedereen dit aan!',
  },
  {
    name: 'Isabelle de Vries',
    treatment: 'Gel Nagels',
    rating: 5,
    date: 'Februari 2026',
    quote:
      'De gel nagels houden weken perfect, en het resultaat is altijd zo verfijnd. Ik kom nergens anders meer! Sophie is een absolute professional en heeft echt oog voor detail. Mijn nagels zien er elke keer fantastisch uit.',
  },
  {
    name: 'Emma Bakker',
    treatment: 'Gezichtsbehandelingen',
    rating: 5,
    date: 'Januari 2026',
    quote:
      'Mijn huid is echt getransformeerd na de gezichtsbehandelingen. Het team is professioneel en de sfeer is heerlijk. Na 4 behandelingen zie ik mijn huid er stralender en gezonder uitzien. Een absolute aanrader!',
  },
  {
    name: 'Lisa Smeets',
    treatment: 'Laser Ontharing',
    rating: 5,
    date: 'December 2025',
    quote:
      'Ik was eerst wat nerveus voor laser ontharing, maar het team van Lumière Studio heeft me volledig op mijn gemak gesteld. De behandeling ging vlot en het resultaat is geweldig. Al na 3 sessies enorm verschil!',
  },
  {
    name: 'Nathalie Hendriksen',
    treatment: 'Luxe Signature Facial',
    rating: 5,
    date: 'November 2025',
    quote:
      'De Signature Facial is pure verwennerij. 90 minuten lang werd ik helemaal in de watten gelegd. Mijn huid voelde daarna zo zacht en straalde. Dit wordt een vaste maandelijkse afspraak voor mij.',
  },
  {
    name: 'Charlotte van Dijk',
    treatment: 'Gel Nagels + Pedicure',
    rating: 5,
    date: 'Oktober 2025',
    quote:
      'Heerlijke ervaring! Ik heb zowel een gel manicure als pedicure laten doen. Beide behandelingen waren perfect uitgevoerd. De salon is prachtig ingericht en het personeel is super vriendelijk. 10/10!',
  },
];
