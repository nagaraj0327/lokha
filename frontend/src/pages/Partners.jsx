import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../seo/Seo';
import { partnerIcons } from '../components/PartnerIcons';
import { communityIcons } from '../components/CommunityIcons';
import { careerIcons } from '../components/CareerIcons';
import { eventIcons } from '../components/EventIcons';
import { images } from '../assets/media';

const heroStats = [
  { icon: 'people', value: '50+', label: 'Partners' },
  { icon: 'handshake', value: '100+', label: 'Collaborations' },
  { icon: 'globe', value: '6+', label: 'Countries' },
  { icon: 'rocket', value: 'Endless', label: 'Possibilities' },
];

const partnerTypes = [
  { icon: 'graduationCap', title: 'Universities', description: 'Collaborating to foster innovation, entrepreneurship, and future-ready talent.', image: 'partnerUniversities' },
  { icon: 'building', title: 'Corporates', description: 'Partnering to drive innovation, explore new ideas, and create meaningful impact.', image: 'partnerCorporates' },
  { icon: 'people', title: 'Investors', description: 'Working together to support early-stage startups and high-potential founders.', image: 'partnerInvestors' },
  { icon: 'bank', title: 'Government Agencies', description: 'Joining hands to enable startup growth, innovation, and economic development.', image: 'partnerGovernment' },
  { icon: 'cpu', title: 'Technology Partners', description: 'Collaborating to provide startups access to cutting-edge tools, platforms, and expertise.', image: 'partnerTechnology' },
  { icon: 'headset', title: 'Service Providers', description: 'Supporting startups with essential services to build, grow, and scale their businesses.', image: 'partnerService' },
];

const whyPartner = [
  { icon: 'personArrow', label: 'Access to a vibrant startup ecosystem' },
  { icon: 'network', label: 'Co-create impactful programs and initiatives' },
  { icon: 'megaphone', label: 'Enhance brand visibility and thought leadership' },
  { icon: 'trendingUp', label: 'Drive innovation and economic growth' },
  { icon: 'globe', label: 'Make a lasting social impact' },
];

function getIcon(key) {
  return partnerIcons[key] || communityIcons[key] || careerIcons[key] || eventIcons[key];
}

export default function Partners() {
  return (
    <div>
      <Seo title="Partners" description="Partner with Lokha Innovation — universities, corporates, investors, government agencies, technology and service partners." />

      {/* Hero */}
      <section className="relative pt-[72px] bg-ink-900 text-paper overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.bgme} alt="" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
        </div>

        <div className="container-x relative py-20 md:py-24">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
            <Reveal>
              <p className="eyebrow text-signal mb-4" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>Partner With Us</p>
              <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-2xl" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.65)' }}>
                Build the ecosystem with <span className="text-signal">us</span>
              </h1>
              <p className="mt-6 text-paper/70 max-w-xl text-lg leading-relaxed">
                We collaborate with universities, corporations, investors, government agencies, technology
                and service partners to empower startups and drive innovation.
              </p>

              <div className="flex flex-wrap gap-8 mt-10">
                {heroStats.map((s) => {
                  const Icon = getIcon(s.icon);
                  return (
                    <div key={s.label} className="flex items-center gap-3">
                      <span className="text-signal shrink-0">{Icon && <Icon width="22" height="22" />}</span>
                      <div>
                        <p className="text-paper font-semibold leading-none">{s.value}</p>
                        <p className="text-paper/55 text-xs mt-1.5">{s.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={120} className="hidden lg:block w-72 bg-paper/10 backdrop-blur-sm border border-paper/15 rounded-xl p-6 shrink-0">
              <span className="text-signal block mb-3"><partnerIcons.quote width="26" height="26" /></span>
              <p className="font-display text-xl leading-snug text-paper">Great things happen when we build together.</p>
              <span className="block w-8 h-0.5 bg-signal mt-4" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partner Ecosystem grid */}
      <section className="py-20 md:py-24 bg-paper">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-signal mb-4">Our Partner Ecosystem</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Stronger together. Greater impact.</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {partnerTypes.map((p, idx) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal
                  key={p.title}
                  delay={idx * 60}
                  className="group border hairline rounded-xl overflow-hidden hover:border-signal hover:shadow-lg transition-all duration-300 flex flex-col bg-white"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={images[p.image]}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7 pt-0 flex flex-col flex-1">
                    <span className="w-14 h-14 rounded-full bg-signal/10 text-signal border-4 border-white flex items-center justify-center -mt-7 mb-5 shadow">
                      {Icon && <Icon width="24" height="24" />}
                    </span>
                    <p className="font-display text-lg mb-2">{p.title}</p>
                    <p className="text-ink-700 text-sm leading-relaxed flex-1">{p.description}</p>
                    <span className="mt-5 w-9 h-9 rounded-full border hairline flex items-center justify-center text-ink-800/40 group-hover:border-signal group-hover:text-signal group-hover:translate-x-0.5 transition-all self-end">
                      <partnerIcons.arrowRight width="16" height="16" />
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Why partner */}
          <Reveal delay={100} className="mt-14 bg-ink-800/[0.03] border hairline rounded-2xl p-8 md:p-10">
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
              {whyPartner.map((w) => {
                const Icon = getIcon(w.icon);
                return (
                  <div key={w.label} className="flex flex-col items-center text-center">
                    <span className="text-ink-900 mb-3">{Icon && <Icon width="22" height="22" />}</span>
                    <p className="text-ink-700 text-sm leading-relaxed">{w.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <div className="text-center mt-14">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Become a Partner
              <span aria-hidden="true">→</span>
            </Link>
            <p className="text-ink-700 text-sm mt-5">Let's build the future of innovation together.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
