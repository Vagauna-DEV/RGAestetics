import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/home/CTASection';

const team = [
  {
    name: 'Amélie van der Berg',
    role: 'Founder & Laser Specialist',
    bio: 'Amélie founded Lumière Studio after years in the beauty industry, with a focus on calm, high-quality treatments and thoughtful client care.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=400&q=80',
  },
  {
    name: 'Sophie Janssen',
    role: 'Nail Artist & Gel Specialist',
    bio: 'Sophie is known for precise work, elegant finishes, and gel nail sets that stay polished for weeks.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    name: 'Nora de Wit',
    role: 'Skin Therapist & Facial Specialist',
    bio: 'Nora works closely with each client to build treatments that support glow, balance, and long-term skin health.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
  },
];

const values = [
  {
    title: 'Excellence',
    description: 'We care about the full experience, from treatment quality to the calm atmosphere of the salon.',
  },
  {
    title: 'Honesty',
    description: 'We give clear, realistic advice and recommend only what genuinely fits your needs.',
  },
  {
    title: 'Care',
    description: 'We take the time to understand your goals and create treatments that feel personal and considered.',
  },
];

export default function EnglishAboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#2C2A26' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(44,42,38,0.85), rgba(44,42,38,0.95))' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C4A882' }}>
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAF8', fontWeight: 400, fontStyle: 'italic' }}>
            About Lumière Studio
          </h1>
          <div className="mt-4 w-12 h-px mx-auto" style={{ backgroundColor: '#C4A882' }} />
          <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9188' }}>
            A place where beauty, calm, and craftsmanship come together.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
                <Image src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" alt="Lumière Studio story" fill unoptimized style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>
                Founded in Amsterdam
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
                Beauty with a quieter rhythm
              </h2>
              <div className="w-10 h-px mb-6" style={{ backgroundColor: '#C4A882' }} />
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#7D7168' }}>
                <p>
                  Lumière Studio was created as a salon where clients could feel genuinely looked after, not hurried through a treatment list. The focus has always been on careful work, calm surroundings, and personal advice.
                </p>
                <p>
                  The name Lumière, French for light, reflects the studio’s philosophy: helping each client feel polished, comfortable, and more like herself.
                </p>
                <p>
                  Today, the salon welcomes clients looking for laser hair removal, elegant nail work, and tailored facials delivered with consistency and warmth.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/en/contact" className="btn-gold px-7 py-3 text-sm">
                  Book an appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#F2E8DF' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>
              Meet the Team
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              The people behind the salon
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto mb-5 overflow-hidden" style={{ width: '180px', height: '180px', borderRadius: '50%', border: '3px solid #F2E8DF', boxShadow: '0 0 0 4px #C4A882' }}>
                  <Image src={member.image} alt={member.name} fill unoptimized style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <h3 className="text-xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
                  {member.name}
                </h3>
                <p className="text-sm mt-1 font-medium" style={{ color: '#C4A882' }}>
                  {member.role}
                </p>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: '#7D7168' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C4A882' }}>
              What We Value
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center p-8 bg-white" style={{ borderRadius: '2px', boxShadow: '0 2px 20px rgba(44,42,38,0.06)' }}>
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#2C2A26', fontWeight: 400 }}>
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

      <CTASection locale="en" />
    </>
  );
}
