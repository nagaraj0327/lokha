import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { blogPosts } from '../config/content.config';
import { images } from '../assets/media';

const calendarIcon = (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
    <path d="M3.5 9.5h17M8 3v3.4M16 3v3.4" />
  </svg>
);

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}

function getPostMeta(dayOffset) {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  if (dayOffset === 0) return { label: 'Today', badge: null };
  if (dayOffset > 0) return { label: formatDate(date), badge: 'Upcoming' };
  return { label: formatDate(date), badge: null };
}

export default function Blog() {
  return (
    <div>
      <PageHeader
        eyebrow="News & Blog"
        title="Insights That Move Startups Forward"
        description="Stay informed with startup insights, technology trends, funding opportunities, founder stories, and updates from the Lokha Innovation ecosystem."
        image={images.blogHero}
        boldTitle
        clear
      />

      <section className="py-20 md:py-28 bg-paper">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((b, idx) => {
              const { label, badge } = getPostMeta(b.dayOffset);
              return (
                <Reveal
                  key={b.title}
                  delay={idx * 70}
                  className="group cursor-pointer flex flex-col bg-white rounded-xl border hairline overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={images[b.image]}
                      alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-moss text-paper text-[11px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full">
                      {b.category}
                    </span>
                    {badge && (
                      <span className="absolute top-3 right-3 bg-paper text-ink-900 text-[11px] font-semibold px-3 py-1.5 rounded-full shadow">
                        {badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-ink-800/50 text-xs mb-2.5">
                      {calendarIcon}
                      {label}
                    </div>
                    <h2 className="font-display text-xl leading-snug mb-2.5 group-hover:text-signal transition-colors">{b.title}</h2>
                    <p className="text-ink-700 text-sm leading-relaxed flex-1 mb-4">{b.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-moss text-sm font-semibold group-hover:gap-2.5 transition-all">
                      Read More
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="text-center mt-16">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 border-2 border-moss text-moss font-semibold px-6 py-3 rounded-full hover:bg-moss hover:text-paper transition-colors"
            >
              View All Articles
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
