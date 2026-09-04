import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Seo from '../seo/Seo';
import { mentors } from '../config/content.config';
import { images, mentorImages } from '../assets/media';

function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const whyMentor = [
  {
    n: '01',
    title: 'Shape the Next Generation',
    text: 'Guide promising founders with practical insights, experience, and strategic direction.',
  },
  {
    n: '02',
    title: 'Share What Experience Has Taught You',
    text: 'Help entrepreneurs avoid common challenges and make better decisions at critical stages.',
  },
  {
    n: '03',
    title: 'Exchange Ideas & Perspectives',
    text: 'Engage with founders working on new technologies, markets, and business models.',
  },
  {
    n: '04',
    title: 'Grow Through the Ecosystem',
    text: 'Build meaningful connections with entrepreneurs, investors, industry leaders, and fellow mentors.',
  },
];

export default function Mentors() {
  return (
    <div>
      <Seo title="Mentors" description="Meet the mentors and operators behind Lokha Innovation." />
      <PageHeader
        eyebrow="Mentors"
        title="Meet Our Expert Mentors"
        description="Founders, industry leaders, and experienced operators who provide practical guidance, strategic insights, and expertise to help startups build, grow, and scale."
        image={images.bgo}
        clear
      />

      <section className="py-20 md:py-28 bg-ink-900 text-paper">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-start justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-signal mb-4">Why Mentor With Lokha?</p>
              <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-xl">Why Become a Mentor?</h2>
            </div>
            <Link to="/become-a-mentor" target="_blank" rel="noopener noreferrer" className="btn-ghost-dark shrink-0">Become a Mentor</Link>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <Reveal className="rounded-xl overflow-hidden">
              <img src={images.montors} alt="Mentor and mentee reviewing work together" className="w-full h-full object-cover" />
            </Reveal>
            <div className="divide-y divide-ink-700">
              {whyMentor.map((item, idx) => (
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

      <section className="py-20 md:py-28 bg-paper">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((m, idx) => {
              const key = m.img.replace(/\.(jpeg|png)$/, '');
              return (
                <Reveal key={m.name} delay={idx * 80} className="group">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="relative block aspect-[4/5] overflow-hidden rounded-xl bg-ink-800"
                  >
                    <img
                      src={mentorImages[key]}
                      alt={m.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
                    <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-paper/95 flex items-center justify-center text-ink-900 group-hover:bg-signal transition-colors">
                      <LinkedInIcon className="w-4.5 h-4.5" />
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h2 className="font-display text-lg text-paper leading-tight">{m.name}</h2>
                      <p className="text-paper/70 text-xs mt-1">{m.role}</p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
