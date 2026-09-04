import { useEffect, useState } from 'react';
import { directorImages } from '../assets/media';

function InitialsAvatar({ name }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-signal-500 via-signal-400 to-moss-500">
      <span className="font-display text-7xl md:text-8xl text-paper">{initials}</span>
    </div>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function Directors({ directors }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const d = directors[index];

  const go = (dir) => {
    setIndex((i) => (i + dir + directors.length) % directors.length);
  };

  // Auto-advance every 6s; pause while the card is hovered, and always
  // restart the countdown after a manual click so it doesn't jump right
  // after someone interacts with it. Skipped entirely for users who've
  // asked the OS for reduced motion.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || prefersReducedMotion || directors.length <= 1) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % directors.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused, directors.length, index]);

  return (
    <section className="py-24 md:py-32 bg-ink-900 text-paper">
      <div className="container-x">
        <p className="eyebrow text-signal mb-4">Leadership</p>
        <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight mb-16">Directors</h2>

        <div
          className="max-w-[1450px] mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-8 md:h-[460px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="h-64 md:h-full overflow-hidden rounded-2xl bg-ink-800">
            {directorImages[d.img] ? (
              <img
                src={directorImages[d.img]}
                alt={d.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <InitialsAvatar name={d.name} />
            )}
          </div>

          <div className="bg-ink-800 rounded-2xl p-10 md:p-12 flex flex-col justify-between h-full">
            <div>
              <p className="eyebrow text-paper/40 mb-5">{String(index + 1).padStart(2, '0')} / {String(directors.length).padStart(2, '0')}</p>
              <p className="font-display text-2xl md:text-3xl leading-[1.25] max-w-4xl">
                &ldquo;{d.quote}&rdquo;
              </p>
            </div>

            <div className="mt-10">
              <p className="font-semibold text-paper">
                {d.name} <span className="text-signal font-normal">| Lokha Innovation</span>
              </p>
              <p className="text-paper/60 text-sm mt-1">{d.role}</p>
              <a
                href={d.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 mt-3 text-signal text-sm font-medium hover:text-signal-400 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
                View LinkedIn
              </a>

              <div className="flex items-center gap-5 mt-8">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous director"
                    className="w-11 h-11 rounded-full border border-paper/25 flex items-center justify-center hover:border-paper transition-colors"
                  >
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M15 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next director"
                    className="w-11 h-11 rounded-full bg-signal text-ink-900 flex items-center justify-center hover:bg-signal-400 transition-colors"
                  >
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {directors.map((dir, i) => (
                    <button
                      key={dir.name}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to ${dir.name}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === index ? 'w-6 bg-signal' : 'w-1.5 bg-paper/25 hover:bg-paper/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
