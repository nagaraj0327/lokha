import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { programs } from '../config/content.config';
import { images, programImages } from '../assets/media';

export default function Programs() {
  const [searchParams] = useSearchParams();
  const requestedId = searchParams.get('open');
  const initialId = programs.some((p) => p.id === requestedId) ? requestedId : programs[0].id;
  const [openId, setOpenId] = useState(initialId);
  const sectionRefs = useRef({});

  useEffect(() => {
    if (requestedId && programs.some((p) => p.id === requestedId)) {
      setOpenId(requestedId);
      const el = sectionRefs.current[requestedId];
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestedId]);

  return (
    <div>
      <PageHeader
        eyebrow="Programs"
        title="Programs Designed for Every Stage of Your Startup Journey"
        description="From first validating an idea to expanding into new markets — click a program to see everything it includes and every event that runs inside it."
        image={images.bgpr}
        clear
        boldTitle
      />

      <section className="py-20 md:py-28 bg-paper">
        <div className="container-x">
          <div className="space-y-8">
            {programs.map((p, idx) => {
              const open = openId === p.id;
              return (
                <Reveal key={p.id} delay={idx * 60}>
                  <div
                    ref={(el) => (sectionRefs.current[p.id] = el)}
                    className={`scroll-mt-24 border rounded-2xl overflow-hidden transition-colors ${
                      open ? 'border-signal' : 'border-ink-800/12 hover:border-ink-800/25'
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(open ? null : p.id)}
                      className="w-full flex flex-col sm:flex-row items-stretch text-left group"
                      aria-expanded={open}
                    >
                      <div className="sm:w-64 h-40 sm:h-auto shrink-0 overflow-hidden">
                        <img
                          src={programImages[p.id]}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 flex items-center justify-between gap-6 px-6 sm:px-8 py-6">
                        <div className="flex items-center gap-5 md:gap-8">
                          <span className={`font-display text-3xl md:text-4xl transition-colors ${open ? 'text-signal' : 'text-ink-800/30'}`}>{p.n}</span>
                          <div>
                            <h2 className="font-display text-2xl md:text-3xl group-hover:text-signal transition-colors">{p.name}</h2>
                            <p className="text-ink-700 text-sm mt-1">{p.stage}</p>
                          </div>
                        </div>
                        <span className={`shrink-0 w-9 h-9 rounded-full border border-ink-800/15 flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-45 border-signal text-signal' : ''}`}>
                          <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="1.4" /></svg>
                        </span>
                      </div>
                    </button>

                    {open && (
                      <div className="px-6 sm:px-8 pb-10 pt-2 grid md:grid-cols-2 gap-12 reveal border-t border-ink-800/10">
                        <div className="pt-8">
                          <p className="text-ink-800 text-lg leading-relaxed mb-8">{p.description}</p>
                          <p className="eyebrow text-moss mb-4">What's Included</p>
                          <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                            {p.includes.map((inc) => (
                              <li key={inc} className="text-sm text-ink-700 flex gap-2 items-start">
                                <span className="text-signal mt-1">—</span>{inc}
                              </li>
                            ))}
                          </ul>
                          <Link to={`/apply/${p.id}`} className="btn-primary mt-8">Apply to {p.name}</Link>
                        </div>

                        <div className="pt-8">
                          <p className="eyebrow text-moss mb-4">Events in This Program</p>
                          <div className="space-y-4">
                            {p.events.map((ev) => (
                              <div key={ev.name} className="border hairline p-5 hover:border-signal transition-colors rounded-lg">
                                <div className="flex items-center justify-between gap-4">
                                  <h3 className="font-display text-lg">{ev.name}</h3>
                                  <span className="eyebrow text-signal shrink-0">{ev.cadence}</span>
                                </div>
                                <p className="text-ink-700 text-sm mt-2 leading-relaxed">{ev.detail}</p>
                              </div>
                            ))}
                          </div>
                          <Link to="/events" className="text-sm eyebrow text-ink-700 hover:text-signal transition-colors mt-5 inline-block">See All Events →</Link>
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden text-center">
        <img src={images.bg7} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/95 via-sky-500/90 to-sky-600/95" />
        <div className="container-x relative">
          <Reveal>
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight max-w-2xl mx-auto text-paper tracking-tight">Identify the right stage for your startup.</h2>
            <p className="text-paper/80 mt-5 max-w-lg mx-auto">Book a free consultation and our program team will place you in the right cohort.</p>
            <Link
              to="/become-a-consultant"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-paper text-ink-900 font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors"
            >
              Book a Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
