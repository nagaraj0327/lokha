import { Link } from 'react-router-dom';
import { footerInfo, quickLinks } from '../config/content.config';
import { images } from '../assets/media';
import { socialIcons } from './SocialIcons';

const sitemap = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/services', label: 'Services' },
  { to: '/mentors', label: 'Mentors' },
  { to: '/investors', label: 'Investors' },
  { to: '/events', label: 'Events' },
  { to: '/community', label: 'Community' },
  { to: '/careers', label: 'Careers' },
  { to: '/partners', label: 'Partners' },
  { to: '/blog', label: 'Blog' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/lokha-innovation-ecosystem/', icon: socialIcons.linkedin },
  { label: 'X', href: 'https://x.com/lokhainnovation?s=11', icon: socialIcons.x },
  { label: 'Instagram', href: 'https://www.instagram.com/lokhainnovation?utm_source=qr', icon: socialIcons.instagram },
  { label: 'YouTube', href: 'https://youtube.com/@lokhainnovation?si=2eMF7thgFi7yNqfA', icon: socialIcons.youtube },
];

const legalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-conditions', label: 'Terms & Conditions' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-paper border-t border-ink-600">
      <div className="container-x py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={images.logo} alt="Lokha Innovation" className="w-11 h-11 object-contain" />
            <span className="font-display text-2xl font-medium">Lokha Innovation</span>
          </Link>
          <p className="text-paper/60 text-sm max-w-xs leading-relaxed">
            Empowering startups to build, launch, and scale globally — through mentorship, incubation, funding access, and a worldwide founder ecosystem.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link to="/apply" className="inline-flex items-center justify-center rounded-full bg-signal text-ink-900 text-sm font-semibold px-6 py-2.5 hover:brightness-110 transition">
              Apply Today
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-paper/30 text-paper text-sm font-semibold px-6 py-2.5 hover:border-signal hover:text-signal transition">
              Subscribe to Updates
            </Link>
          </div>

          <div className="flex gap-3 mt-6">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-paper/25 rounded-md text-paper/70 hover:text-signal hover:border-signal transition-colors"
                >
                  <Icon width="16" height="16" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="eyebrow text-signal mb-4">Quick Links</p>
          <ul className="space-y-2.5 text-sm text-paper/70">
            {quickLinks.map((q) => (
              <li key={q}><Link to={`/${q.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} className="hover:text-paper transition-colors">{q}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-signal mb-4">Sitemap</p>
          <ul className="space-y-2.5 text-sm text-paper/70">
            {sitemap.slice(0, 7).map((s) => (
              <li key={s.to}><Link to={s.to} className="hover:text-paper transition-colors">{s.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-signal mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm text-paper/70">
            <li>{footerInfo.email}</li>
            <li>{footerInfo.phone}</li>
            <li>{footerInfo.address}</li>
          </ul>
          <div className="mt-5">
            <p className="eyebrow text-paper/50 mb-2">Newsletter</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex rounded-full overflow-hidden border border-ink-600 focus-within:border-signal">
              <input
                type="email"
                required
                placeholder="you@startup.com"
                className="bg-ink-800 px-4 py-2 text-sm w-full text-paper placeholder:text-paper/40 focus:outline-none"
              />
              <button className="bg-signal text-ink-900 px-4 text-sm font-semibold shrink-0">Join</button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-700">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper/45">
          <p>© {new Date().getFullYear()} Lokha Innovation. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
