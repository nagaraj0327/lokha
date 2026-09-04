import { serviceIcons, ArrowUpRight } from './ServiceIcons';
import { serviceImages } from '../assets/media';
import Reveal from './Reveal';

export default function ServiceCard({ service, delay = 0 }) {
  const Icon = serviceIcons[service.name];
  const image = serviceImages[service.name];
  return (
    <Reveal
      delay={delay}
      className="relative bg-white/60 border hairline flex flex-col hover:border-signal transition-colors group overflow-hidden"
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-700">
          <img
            src={image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
        </div>
      )}

      <div className="relative p-8 flex flex-col flex-1">
        {Icon && (
          <span
            className={`inline-flex items-center justify-center w-12 h-12 rounded-full border border-signal/40 bg-white text-signal mb-6 ${image ? '-mt-14 shadow-sm' : ''}`}
          >
            <Icon className="w-5 h-5" />
          </span>
        )}
        <h3 className="font-display text-xl mb-3">{service.name}</h3>
        <p className="text-ink-700 text-sm leading-relaxed pr-8">{service.description}</p>

        {service.sub && (
          <ul className="mt-6 pt-6 border-t hairline space-y-2">
            {service.sub.map((x) => (
              <li key={x} className="text-xs text-ink-700 flex gap-2">
                <span className="text-signal">—</span>{x}
              </li>
            ))}
          </ul>
        )}

        <span className="absolute bottom-6 right-6 inline-flex items-center justify-center w-9 h-9 rounded-full bg-signal/10 text-signal group-hover:bg-signal group-hover:text-ink-900 transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </Reveal>
  );
}
