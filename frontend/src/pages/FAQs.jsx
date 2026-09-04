import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { faqs } from '../config/content.config';
import { images } from '../assets/media';

export default function FAQs() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      <PageHeader
        eyebrow="FAQs"
        title="Common questions"
        description="From applications and selection to incubation, funding, and partnerships — find answers to the questions founders ask most."
        image={images.faqHero}
        clear
        boldTitle
      />

      <section className="py-20 md:py-28 bg-paper">
        <div className="container-x max-w-3xl">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={f.q} className="border-b hairline">
                <button
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl md:text-2xl">{f.q}</span>
                  <span className={`shrink-0 w-8 h-8 border hairline flex items-center justify-center transition-transform ${isOpen ? 'rotate-45 border-signal text-signal' : ''}`}>
                    <svg width="12" height="12" viewBox="0 0 14 14"><path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="1.4" /></svg>
                  </span>
                </button>
                {isOpen && <p className="text-ink-700 leading-relaxed pb-7 max-w-xl reveal">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
