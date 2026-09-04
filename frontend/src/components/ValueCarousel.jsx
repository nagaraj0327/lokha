import { useState } from 'react';

export default function ValueCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const item = items[index];

  const go = (dir) => {
    setIndex((i) => (i + dir + items.length) % items.length);
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={item.img} alt={item.eyebrow} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="eyebrow text-signal mb-4">{item.eyebrow}</p>
        <p className="font-display text-2xl md:text-3xl leading-snug text-ink-900 mb-8">
          {item.text}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-ink-800/25 flex items-center justify-center hover:border-ink-900 transition-colors"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M15 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="w-11 h-11 rounded-full bg-signal text-ink-900 flex items-center justify-center hover:bg-signal-400 transition-colors"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
