import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import VideoShowcase from '../components/VideoShowcase';
import ValueCarousel from '../components/ValueCarousel';
import { images, videos } from '../assets/media';

const offers = [
  {
    name: 'Startup Incubation',
    description: 'Transform innovative ideas into validated business opportunities through structured guidance and expert mentorship.',
    img: images.bg7,
    to: '/programs?open=incubation',
  },
  {
    name: 'Startup Acceleration',
    description: 'Scale your startup with fundraising support, customer acquisition strategies, market expansion, and business growth planning.',
    img: images.bg6,
    to: '/programs?open=acceleration',
  },
  {
    name: 'Expert Mentorship',
    description: 'Receive personalized guidance from experienced founders, entrepreneurs, investors, and industry specialists.',
    img: images.bg11,
    to: '/mentors',
  },
  {
    name: 'Investor Readiness',
    description: 'Develop a compelling business model, financial projections, investment strategy, and an investor-ready pitch deck.',
    img: images.bg9,
    to: '/investors',
  },
  {
    name: 'Corporate Partnerships',
    description: 'Collaborate with industry leaders, technology partners, government organizations, and innovation ecosystems.',
    img: images.bg22,
    to: '/partners',
  },
  {
    name: 'Global Network',
    description: 'Connect with investors, mentors, alumni founders, startup communities, and international business partners.',
    img: images.bg12,
    to: '/community',
  },
];

const howWeWork = [
  {
    t: 'Mentor-Led',
    d: "Every startup is matched with experienced founders, entrepreneurs, investors, and industry experts who provide one-on-one guidance, strategic advice, and continuous support throughout the entrepreneurial journey.",
    img: images.bg3,
    to: '/mentors',
  },
  {
    t: 'Stage-Matched',
    d: "Programs are designed around your startup's current growth stage — from idea validation and MVP development to fundraising, customer growth, market expansion, and global scaling.",
    img: images.bg4,
    to: '/programs',
  },
  {
    t: 'Globally Connected',
    d: 'Founders gain access to an international network of investors, corporate partners, successful entrepreneurs, accelerators, universities, and innovation leaders, creating opportunities for collaboration, investment, and worldwide expansion.',
    img: images.bg5,
    to: '/investors',
  },
];

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About Us"
        title="Building the Next Generation of Innovative Startups"
        description="We are a startup incubator and accelerator dedicated to helping entrepreneurs transform bold ideas into successful, scalable businesses. Our mission is to empower founders through expert mentorship, structured programs, strategic partnerships, investor access, and a thriving entrepreneurial community."
        image={images.bg2}
        clear
        boldTitle
      />

      <section className="py-24 md:py-32 bg-paper">
        <div className="container-x">
          <Reveal>
            <ValueCarousel
              items={[
                {
                  eyebrow: 'Our Mission',
                  text: 'To empower entrepreneurs with the knowledge, mentorship, funding opportunities, and global connections required to build innovative, sustainable, and high-impact businesses.',
                  img: images.bgcar,
                },
                {
                  eyebrow: 'Our Vision',
                  text: 'To become a globally recognized innovation ecosystem that nurtures visionary founders, accelerates breakthrough startups, and contributes to economic growth through entrepreneurship and technology.',
                  img: images.bg3,
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ink-900 text-paper">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow text-signal mb-4">What We Offer</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Everything a founder needs to build and scale.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((o, idx) => (
              <Reveal key={o.name} delay={idx * 60}>
                <Link
                  to={o.to}
                  className="block bg-ink-800 border border-ink-600 rounded-lg overflow-hidden hover:border-signal transition-colors group"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img src={o.img} alt={o.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <p className="font-mono text-signal text-sm mb-4">{String(idx + 1).padStart(2, '0')}</p>
                    <h3 className="font-display text-xl mb-3 group-hover:text-signal transition-colors">{o.name}</h3>
                    <p className="text-paper/60 text-sm leading-relaxed mb-4">{o.description}</p>
                    <span className="inline-flex items-center gap-2 eyebrow text-signal">
                      Learn More
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-paper">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow text-signal mb-4">How We Work</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Built on real company-building experience.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {howWeWork.map((c, idx) => (
              <Reveal key={c.t} delay={idx * 100}>
                <div className="aspect-[4/3] overflow-hidden mb-6 rounded-lg">
                  <img src={c.img} alt={c.t} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-display text-xl mb-3">{c.t}</h3>
                <p className="text-ink-700 text-sm leading-relaxed mb-5">{c.d}</p>
                <Link to={c.to} className="inline-flex items-center gap-2 eyebrow text-signal hover:text-signal-600 transition-colors">
                  Learn More
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-paper border-t hairline">
        <div className="container-x">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <p className="eyebrow text-signal mb-4">Where We Build</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Where innovation meets infrastructure.</h2>
            <p className="mt-6 text-ink-700 text-lg leading-relaxed">
              Inside our campus, founders get dedicated desks, focus rooms and event space built to a
              global standard — powered by a community of mentors, operators and investors. Take a look
              inside.
            </p>
          </Reveal>
          <Reveal delay={150} className="max-w-4xl mx-auto">
            <VideoShowcase
              src={videos.rajj}
              poster={images.rajjPoster}
              channel="Lokha Innovation"
              title="Inside the Campus — A Look Around"
            />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 bg-gradient-to-br from-[#00D4FF] to-[#0077C2] text-ink-900 overflow-hidden">
        <img src={images.bgf} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-multiply" />
        <div className="container-x relative text-center">
          <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">Ready to build something that lasts?</h2>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/apply" className="bg-ink-900 text-paper font-semibold px-8 py-4 rounded-full">Apply Now</Link>
            <Link to="/community" className="btn-ghost border-ink-900/40 hover:border-ink-900">Join Our Community</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
