import { Link } from 'react-router-dom';

export default function PageHeader({ eyebrow, title, description, image, clear = false, boldTitle = false, ctaLabel, ctaTo }) {
  return (
    <section className="relative pt-[72px] bg-ink-900 text-paper overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className={`w-full h-full object-cover ${clear ? 'opacity-100' : 'opacity-30'}`} />
          <div className={`absolute inset-0 ${clear ? 'bg-ink-900/32' : 'bg-gradient-to-t from-ink-900 via-ink-900/85 to-ink-900/60'}`} />
          {clear && <div className="absolute inset-0 bg-gradient-to-t from-ink-900/18 via-transparent to-transparent" />}
        </div>
      )}
      <div className="container-x relative py-20 md:py-28">
        {eyebrow && <p className="eyebrow text-signal mb-4" style={clear ? { textShadow: '0 2px 14px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.9)' } : undefined}>{eyebrow}</p>}
        <h1
          className={boldTitle ? 'font-sans font-extrabold text-4xl md:text-6xl leading-[1.05] max-w-3xl tracking-tight' : 'font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl'}
          style={clear ? { textShadow: '0 2px 20px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)' } : undefined}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-paper/70 max-w-xl text-lg leading-relaxed" style={clear ? { textShadow: '0 1px 12px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.9)' } : undefined}>
            {description}
          </p>
        )}
        {ctaLabel && ctaTo && (
          ctaTo.startsWith('#') ? (
            <a href={ctaTo} className="btn-primary inline-flex items-center gap-2 mt-8">
              {ctaLabel}
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <Link to={ctaTo} className="btn-primary inline-flex items-center gap-2 mt-8">
              {ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
