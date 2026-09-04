import { Link } from 'react-router-dom';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { events, programs } from '../config/content.config';
import { images } from '../assets/media';

const filters = ['All', ...programs.map((p) => p.name)];

export default function Events() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? events : events.filter((e) => e.program === filter);

  return (
    <div>
      <PageHeader
        eyebrow="Events"
        title="Workshops, Bootcamps & Demo Days"
        description="Discover upcoming workshops, bootcamps, demo days, and other startup-focused events designed to help founders learn, connect, build, and grow."
        image={images.eventsHero}
        clear
        boldTitle
      />

      <section id="upcoming-events" className="py-20 md:py-28 bg-paper">
        <div className="container-x">
          <div className="flex flex-wrap gap-3 mb-14">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`eyebrow px-4 py-2.5 border transition-colors ${
                  filter === f ? 'bg-ink-900 text-paper border-ink-900' : 'border-ink-800/20 text-ink-700 hover:border-ink-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {shown.map((ev, idx) => (
              <Reveal key={ev.name} delay={idx * 60}>
                <Link
                  to={`/events/${ev.slug}`}
                  className="block border hairline p-8 hover:border-signal transition-colors h-full"
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="eyebrow text-moss">{ev.type}</span>
                    <span className="eyebrow text-signal">{ev.date}</span>
                  </div>
                  <h2 className="font-display text-2xl mb-2">{ev.name}</h2>
                  <p className="text-ink-800/50 text-xs mb-4">Part of — {ev.program}</p>
                  <p className="text-ink-700 text-sm leading-relaxed">{ev.description}</p>
                </Link>
              </Reveal>
            ))}
            {shown.length === 0 && <p className="text-ink-700">No events for this program yet — check back soon.</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
