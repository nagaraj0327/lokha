import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Seo from '../seo/Seo';
import { communityIcons } from '../components/CommunityIcons';
import { eventIcons } from '../components/EventIcons';
import { images } from '../assets/media';

const highlights = [
  { icon: 'people', title: 'Founder Network', description: 'Connect with fellow founders, exchange experiences, and learn from people building across different industries.' },
  { icon: 'starPerson', title: 'Mentor Connections', description: 'Get access to experienced mentors who can share practical insights and guidance.' },
  { icon: 'people', title: 'Founder Meetups', description: 'Join curated meetups, networking sessions, and community gatherings.' },
  { icon: 'bookOpen', title: 'Workshops & Learning', description: 'Participate in sessions focused on startup building, product, business, funding, and growth.' },
  { icon: 'chat', title: 'Peer Learning', description: 'Learn from other founders, share challenges, and discover practical solutions together.' },
  { icon: 'graduationCap', title: 'Alumni Network', description: 'Stay connected with the Lokha Innovation community even after completing a program.' },
];

const howItWorks = [
  { n: '01', title: 'Connect', text: 'Meet founders, mentors, and ecosystem members.' },
  { n: '02', title: 'Learn', text: 'Exchange knowledge through workshops, discussions, and shared experiences.' },
  { n: '03', title: 'Collaborate', text: 'Find opportunities to collaborate, build partnerships, and solve problems together.' },
  { n: '04', title: 'Grow', text: 'Continue building relationships and accessing the ecosystem as your startup grows.' },
];

const inAction = [
  { image: images.community2, title: 'Founder Meetups', description: 'Real conversations. Real connections.' },
  { image: images.community4, title: 'Networking Evenings', description: 'Founders and partners connecting in person.' },
  { image: images.community5, title: 'Community Meetups', description: 'Casual sessions to share ideas and challenges.' },
  { image: images.communityEvent, title: 'Community Events', description: 'Find people, exchange ideas, and discover opportunities.' },
];

function getIcon(key) {
  return communityIcons[key] || eventIcons[key];
}

export default function Community() {
  return (
    <div>
      <Seo title="Community" description="Connect with founders, mentors, and ecosystem partners in the Lokha Innovation community." />
      <PageHeader
        eyebrow="Community"
        title="Where Founders Build Together"
        description="Connect with founders, mentors, and ecosystem partners to share ideas, solve challenges, and create meaningful opportunities throughout your startup journey."
        image={images.community1}
        clear
      />

      {/* Why join — same pattern as the Mentors page's "Why Mentor" section */}
      <section className="py-20 md:py-28 bg-ink-900 text-paper">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-start justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-signal mb-4">How the Community Works</p>
              <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-xl">Build, learn, and grow together.</h2>
            </div>
            <Link to="/apply" className="btn-ghost-dark shrink-0">Join the Community</Link>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <Reveal className="rounded-xl overflow-hidden">
              <img src={images.community3} alt="Founders in a community discussion circle" className="w-full h-full object-cover" />
            </Reveal>
            <div className="divide-y divide-ink-700">
              {howItWorks.map((item, idx) => (
                <Reveal key={item.n} delay={idx * 80} className="py-6 first:pt-0">
                  <p className="eyebrow text-signal mb-2">{item.n}</p>
                  <h3 className="font-display text-xl mb-2">{item.title}</h3>
                  <p className="text-paper/60 text-sm leading-relaxed">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-signal mb-4">What You Get</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Community Highlights</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {highlights.map((h, idx) => {
              const Icon = getIcon(h.icon);
              return (
                <Reveal key={h.title} delay={idx * 60} className="border hairline rounded-xl p-7 hover:border-signal hover:shadow-lg transition-all duration-300">
                  <span className="w-11 h-11 rounded-full bg-signal/10 text-signal flex items-center justify-center mb-5">
                    {Icon && <Icon width="20" height="20" />}
                  </span>
                  <p className="font-display text-lg mb-2">{h.title}</p>
                  <p className="text-ink-700 text-sm leading-relaxed">{h.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community in Action — mentor-card style grid, real event photos */}
      <section className="py-20 md:py-28 bg-paper border-t hairline">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-signal mb-4">From Our Events</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Community in Action</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inAction.map((a, idx) => (
              <Reveal key={a.title} delay={idx * 80} className="group">
                <div className="relative block aspect-[4/5] overflow-hidden rounded-xl bg-ink-800">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-lg text-paper leading-tight">{a.title}</h3>
                    <p className="text-paper/70 text-xs mt-1">{a.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 overflow-hidden text-center">
        <img src={images.bg7} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/95 via-sky-500/90 to-sky-600/95" />
        <div className="container-x relative">
          <Reveal>
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight max-w-2xl mx-auto text-paper tracking-tight">Build. Connect. Grow Together.</h2>
            <p className="text-paper/80 mt-5 max-w-lg mx-auto">Become part of the Lokha Innovation community and build alongside people who are moving ideas forward.</p>
            <Link
              to="/apply"
              className="mt-8 inline-flex items-center gap-2 bg-paper text-ink-900 font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors"
            >
              Join the Community
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
