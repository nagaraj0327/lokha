import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../seo/Seo';
import { careerIcons } from '../components/CareerIcons';
import { eventIcons } from '../components/EventIcons';
import { communityIcons } from '../components/CommunityIcons';
import { images } from '../assets/media';

const stats = [
  { icon: 'building', value: '100+', label: 'Startups Hiring' },
  { icon: 'people', value: '500+', label: 'Opportunities' },
  { icon: 'pin', value: 'Multiple', label: 'Locations' },
  { icon: 'trendingUp', value: 'Growing', label: 'Every Day' },
];

const whyExplore = [
  { icon: 'rocket', title: 'Startup Opportunities', description: 'Discover roles across startups at different stages of growth.' },
  { icon: 'personArrow', title: 'Learn & Grow', description: 'Work with experienced founders and teams while building valuable skills.' },
  { icon: 'lightbulb', title: 'Meaningful Work', description: 'Join teams solving real problems and building products that matter.' },
  { icon: 'sitemap', title: 'Ecosystem Connections', description: 'Connect with founders, mentors, and companies across the Lokha Innovation ecosystem.' },
];

const roles = ['All Roles', 'Technology & Product', 'Design & Creative', 'Business & Growth', 'Operations', 'Other'];
const roleIcons = { 'Technology & Product': 'code', 'Design & Creative': 'palette', 'Business & Growth': 'trendingUp', Operations: 'gear', Other: 'grid' };

const openings = [
  { role: 'Technology & Product', company: 'Voltix Labs', tag: 'V', tagColor: 'bg-indigo-600', title: 'Frontend Developer', location: 'Hyderabad, India', type: 'Full-time', description: 'Build intuitive and performant web applications used by thousands.' },
  { role: 'Business & Growth', company: 'Greenly', tag: 'G', tagColor: 'bg-emerald-600', title: 'Growth & Marketing Associate', location: 'Bengaluru, India', type: 'Full-time', description: 'Drive growth through creative campaigns, content, and data-driven strategies.' },
  { role: 'Design & Creative', company: 'Finvo', tag: 'F', tagColor: 'bg-blue-700', title: 'Product Design Intern', location: 'Remote', type: 'Internship', description: 'Work with the design team to create impactful products and experiences.' },
];

function getIcon(key) {
  return careerIcons[key] || eventIcons[key] || communityIcons[key];
}

export default function Careers() {
  const [activeRole, setActiveRole] = useState('All Roles');
  const shown = activeRole === 'All Roles' ? openings : openings.filter((o) => o.role === activeRole);

  return (
    <div>
      <Seo title="Career Center" description="Discover meaningful career opportunities across the Lokha Innovation ecosystem." />

      {/* Hero — full-bleed dark, consistent with the rest of the site */}
      <section className="relative pt-[72px] bg-ink-900 text-paper overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.careerHero} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
        </div>

        <div className="container-x relative py-20 md:py-28">
          <Reveal>
            <p className="eyebrow text-signal mb-4" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>Career Center</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-2xl" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.65)' }}>
              Build Your Career Where Innovation Happens
            </h1>
            <p className="mt-6 text-paper/70 max-w-xl text-lg leading-relaxed">
              Discover meaningful career opportunities across the Lokha Innovation ecosystem. Connect with
              ambitious startups, growing teams, and organizations looking for people ready to build, learn,
              and make an impact.
            </p>

            <a href="#featured-opportunities" className="btn-primary inline-flex items-center gap-2 mt-9">
              Explore Opportunities
              <span aria-hidden="true">→</span>
            </a>

            <div className="flex flex-wrap gap-3 mt-10">
              {stats.map((s) => {
                const Icon = getIcon(s.icon);
                return (
                  <div key={s.label} className="flex items-center gap-3 bg-paper/10 backdrop-blur-sm border border-paper/20 rounded-lg px-4 py-3">
                    <span className="w-9 h-9 rounded-md bg-signal/20 text-signal flex items-center justify-center shrink-0">
                      {Icon && <Icon width="18" height="18" />}
                    </span>
                    <div>
                      <p className="text-paper font-semibold text-sm leading-none">{s.value}</p>
                      <p className="text-paper/55 text-xs mt-1.5">{s.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Explore Careers */}
      <section className="py-20 md:py-24 bg-paper">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-signal mb-4">Why Lokha Innovation</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Why Explore Careers Through Lokha Innovation?</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {whyExplore.map((w, idx) => {
              const Icon = getIcon(w.icon);
              return (
                <Reveal key={w.title} delay={idx * 70} className="rounded-2xl border hairline p-7 text-center flex flex-col items-center hover:border-signal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                  <span className="w-14 h-14 rounded-xl bg-signal/10 text-signal flex items-center justify-center mb-5">
                    {Icon && <Icon width="24" height="24" />}
                  </span>
                  <p className="font-display text-lg mb-2">{w.title}</p>
                  <p className="text-ink-700 text-sm leading-relaxed">{w.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore by Role — interactive filter */}
      <section className="py-20 md:py-24 bg-ink-900 text-paper">
        <div className="container-x">
          <Reveal className="text-center mb-10">
            <p className="eyebrow text-signal mb-3">Filter by Track</p>
            <h2 className="font-display text-2xl md:text-3xl">Explore Opportunities by Role</h2>
          </Reveal>
          <Reveal className="flex flex-wrap justify-center gap-3">
            {roles.map((r) => {
              const Icon = getIcon(roleIcons[r]);
              const active = activeRole === r;
              return (
                <button
                  key={r}
                  onClick={() => setActiveRole(r)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors border ${
                    active
                      ? 'bg-signal text-ink-900 border-signal'
                      : 'border-paper/20 text-paper/80 hover:border-signal hover:text-signal'
                  }`}
                >
                  {Icon && <Icon width="16" height="16" />}
                  {r}
                </button>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section id="featured-opportunities" className="py-20 md:py-24 bg-paper">
        <div className="container-x">
          <Reveal className="flex items-center justify-between gap-4 mb-10">
            <h2 className="font-display text-2xl md:text-3xl">Featured Opportunities</h2>
            <Link to="/apply" className="eyebrow text-signal hover:text-signal-600 transition-colors inline-flex items-center gap-1.5 shrink-0">
              View all opportunities
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {shown.map((o, idx) => (
              <Reveal key={o.title} delay={idx * 80} className="group rounded-2xl border hairline overflow-hidden hover:border-signal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className={`h-1.5 ${o.tagColor}`} />
                <div className="p-7">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <span className={`w-11 h-11 rounded-lg ${o.tagColor} text-paper flex items-center justify-center font-display text-lg shrink-0`}>
                        {o.tag}
                      </span>
                      <div>
                        <p className="font-display text-base leading-tight">{o.title}</p>
                        <p className="text-ink-800/50 text-xs mt-1">{o.company}</p>
                      </div>
                    </div>
                    <span className="text-ink-800/30 group-hover:text-signal transition-colors shrink-0"><careerIcons.bookmark width="18" height="18" /></span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-ink-800/40"><careerIcons.pin width="14" height="14" /></span>
                    <span className="text-ink-800/50 text-xs">{o.location}</span>
                    <span className="eyebrow text-signal bg-signal/10 rounded-full px-2.5 py-1 text-[10px] ml-1">{o.type}</span>
                  </div>
                  <p className="text-ink-700 text-sm leading-relaxed mb-5">{o.description}</p>
                  <Link to="/apply" className="eyebrow text-signal group-hover:text-signal-600 transition-colors inline-flex items-center gap-1.5">
                    View Opportunity
                    <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
            {shown.length === 0 && (
              <p className="text-ink-700 col-span-3 text-center py-10">No openings in this track right now — check back soon.</p>
            )}
          </div>
        </div>
      </section>

      {/* For Talent / For Startups — photo + gradient CTA panels */}
      <section className="pb-20 md:pb-28 bg-paper">
        <div className="container-x grid md:grid-cols-2 gap-6">
          <Reveal className="relative overflow-hidden rounded-2xl min-h-[320px] flex items-end">
            <img src={images.bgk} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/95 via-indigo-950/75 to-indigo-900/20" />
            <div className="relative p-8">
              <span className="w-11 h-11 rounded-full bg-paper/15 backdrop-blur-sm text-paper flex items-center justify-center mb-5">
                <careerIcons.personArrow width="20" height="20" />
              </span>
              <p className="eyebrow text-indigo-300 mb-2">For Talent</p>
              <h3 className="font-display text-2xl text-paper mb-3">Your Next Opportunity Could Start Here</h3>
              <p className="text-paper/70 text-sm leading-relaxed mb-6 max-w-sm">
                Whether you're starting your career or bringing years of experience, Lokha Innovation connects
                you with teams where your skills can create meaningful impact.
              </p>
              <Link to="/apply" className="inline-flex items-center gap-2 bg-paper text-ink-900 font-semibold text-sm px-5 py-3 rounded-full hover:bg-paper/90 transition-colors">
                Explore Opportunities
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative overflow-hidden rounded-2xl min-h-[320px] flex items-end">
            <img src={images.bgme} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-signal-600/95 via-signal-600/75 to-signal-500/20" />
            <div className="relative p-8">
              <span className="w-11 h-11 rounded-full bg-ink-900/20 backdrop-blur-sm text-ink-900 flex items-center justify-center mb-5">
                <careerIcons.building width="20" height="20" />
              </span>
              <p className="eyebrow text-ink-900/70 mb-2">For Startups</p>
              <h3 className="font-display text-2xl text-ink-900 mb-3">Build Your Team With the Right Talent</h3>
              <p className="text-ink-900/70 text-sm leading-relaxed mb-6 max-w-sm">
                Looking for people who can help your startup move faster? Share your hiring needs with Lokha
                Innovation and connect with motivated talent from our ecosystem.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-ink-900 text-paper font-semibold text-sm px-5 py-3 rounded-full hover:bg-ink-800 transition-colors">
                Post a Job
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
