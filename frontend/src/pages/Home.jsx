import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import LazyVideo from '../components/LazyVideo';
import Directors from '../components/Directors';
import ServiceCard from '../components/ServiceCard';
import CountUp from '../components/CountUp';
import { programIcons, ArrowUpRight } from '../components/ProgramIcons';
import { ecosystemIcons } from '../components/EcosystemIcons';
import { images, videos } from '../assets/media';
import { programs, services, mentors, directors, ecosystemStats } from '../config/content.config';
import { mentorImages } from '../assets/media';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden bg-ink-900">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videos.lokha}
          poster={images.lokhaPoster}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/70 to-ink-900/30" />
        <div className="absolute inset-0 bg-grain" />

        <div className="container-x relative pb-20 md:pb-28 text-paper">
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] max-w-4xl">
            Empowering startups to build, launch, and scale globally
          </h1>
          <p className="mt-8 text-paper/75 text-lg md:text-xl max-w-xl leading-relaxed">
            We help founders transform innovative ideas into successful businesses through
            mentorship, incubation, funding access, technical support, and a global startup ecosystem.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/apply" className="btn-primary">Apply Now</Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="container-x grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow text-signal mb-4">Who We Are</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              A world-class innovation ecosystem for founders who build to last.
            </h2>
            <p className="text-ink-700 text-lg leading-relaxed mb-4">
              We are a startup incubator dedicated to supporting entrepreneurs, innovators, students,
              researchers, and early-stage companies — accelerating growth through expert mentorship,
              business guidance, technical resources, and access to investors.
            </p>
            <Link to="/about" className="btn-ghost mt-4">Learn About Us</Link>
          </Reveal>
          <Reveal delay={150} className="relative">
            <img src={images.bgk} alt="Founders collaborating in a workshop" className="w-full h-[420px] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-ink-900 text-paper p-6 max-w-[220px] hidden sm:block">
              <p className="font-display text-3xl text-signal">05</p>
              <p className="text-sm text-paper/70 mt-1">Mission pillars guiding every cohort</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programs teaser */}
      <section className="py-24 md:py-32 bg-ink-900 text-paper">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-signal mb-4">Our Programs</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Programs built for <span className="text-signal">every stage</span>
            </h2>
            <p className="mt-5 text-paper/60 text-lg">From idea to impact, our programs support startups at every step of their journey with mentorship, resources, and global connections.</p>
          </Reveal>

          <div className="flex flex-col md:flex-row items-stretch">
            {programs.map((p, idx) => {
              const Icon = programIcons[p.id];
              return (
                <div key={p.id} className="flex items-stretch flex-1">
                  <Reveal delay={idx * 100} className="flex-1 border border-ink-600 p-7 group hover:border-signal/50 transition-colors">
                    <div className="flex items-start justify-between mb-6">
                      {Icon && (
                        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-signal/40 text-signal">
                          <Icon className="w-5 h-5" />
                        </span>
                      )}
                      <span className="font-display text-2xl text-paper/25">{p.n}</span>
                    </div>
                    <h3 className="eyebrow text-paper mb-2">{p.name}</h3>
                    <span className="block w-8 h-[2px] bg-signal mb-4" />
                    <p className="text-paper/55 text-sm leading-relaxed mb-6">{p.short}</p>
                    <Link to="/programs" className="text-sm font-semibold text-paper group-hover:text-signal transition-colors inline-flex items-center gap-1.5">
                      Explore Program
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </Reveal>
                  {idx < programs.length - 1 && (
                    <div className="hidden md:flex items-center px-1">
                      <span className="w-6 h-px border-t border-dashed border-signal/40" />
                      <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                      <span className="w-6 h-px border-t border-dashed border-signal/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Reveal className="flex items-center justify-center gap-6 mt-14">
            <span className="hidden sm:block flex-1 max-w-[160px] h-px bg-ink-600" />
            <Link to="/programs" className="btn-ghost-dark inline-flex items-center gap-2">
              View All Programs
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <span className="hidden sm:block flex-1 max-w-[160px] h-px bg-ink-600" />
          </Reveal>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-signal mb-4">How We Support Founders</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Comprehensive support for founders.</h2>
            <p className="mt-5 text-ink-700 text-lg">End-to-end support to help you build, launch and scale with confidence.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 6).map((s, idx) => (
              <ServiceCard key={s.name} service={s} delay={idx * 80} />
            ))}
          </div>
          <Reveal className="text-center mt-14">
            <Link to="/services" className="btn-ghost">All Services</Link>
          </Reveal>
        </div>
      </section>

      {/* Ecosystem stats */}
      <section className="py-24 md:py-28 bg-paper">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-signal mb-4">Our Ecosystem</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-ink-900">
              A thriving community of <span className="text-signal">builders</span>
            </h2>
          </Reveal>
          <div className="flex flex-wrap justify-center">
            {ecosystemStats.map((s, idx) => {
              const Icon = ecosystemIcons[s.icon];
              return (
                <Reveal
                  key={s.label}
                  delay={idx * 80}
                  className={`flex flex-col items-center text-center px-8 py-6 ${idx > 0 ? 'md:border-l border-ink-900/15' : ''}`}
                >
                  {Icon && (
                    <span className="inline-flex items-center justify-center w-10 h-10 text-signal mb-4">
                      <Icon className="w-8 h-8" />
                    </span>
                  )}
                  <CountUp value={s.value} className="font-display text-4xl md:text-5xl text-ink-900" />
                  <p className="text-ink-900/55 text-sm mt-2">{s.label}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video + mission */}
      <section className="relative py-28 md:py-36 bg-ink-900 text-paper overflow-hidden">
        <LazyVideo className="absolute inset-0 w-full h-full object-cover opacity-30" src={videos.raje} />
        <div className="absolute inset-0 bg-ink-900/60" />
        <div className="container-x relative">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-signal mb-4">Our Mission</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              To create a world-class innovation ecosystem that empowers entrepreneurs to build globally successful companies.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Mentors teaser */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="container-x">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight text-ink-900 mb-4">Mentors</h2>
              <p className="text-ink-700 leading-relaxed">
                Immediate access to a network of world-class operators. Plug into tactical guidance, valuable
                connections, and real-world insight to help you move faster from day one.
              </p>
            </div>
            <Link to="/mentors" className="btn-ghost !rounded-full shrink-0">All Mentors</Link>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {mentors.map((m, idx) => (
              <Reveal key={m.name} delay={idx * 80}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
                  <img
                    src={mentorImages[m.img.replace(/\.(jpeg|png)$/, '')]}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-paper leading-tight">{m.name}</h3>
                    <p className="text-paper/75 text-sm mt-0.5">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <Directors directors={directors} />

      {/* Final CTA */}
      <section className="bg-ink-900 text-paper py-24 md:py-32">
        <div className="container-x text-center max-w-2xl mx-auto">
          <p className="eyebrow text-signal mb-4">Ready to Get Started?</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Let's build what's next <span className="text-signal">together.</span>
          </h2>
          <p className="mt-6 text-paper/60 text-lg">
            Join our ecosystem and take your startup from idea to impact.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/apply" className="btn-primary">Apply Now</Link>
            <Link to="/contact" className="btn-ghost-dark">Talk to Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
