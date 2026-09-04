import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { images } from '../assets/media';
import { navIcons, ArrowUpRight } from './NavIcons';

const primary = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/services', label: 'Services' },
];

const ecosystemItems = [
  { to: '/mentors', icon: navIcons.mentors, title: 'Mentors', subtitle: 'Connect with industry experts', description: 'Meet our mentors and get guidance from experienced leaders.' },
  { to: '/investors', icon: navIcons.investors, title: 'Investors', subtitle: 'Explore investment opportunities', description: 'Discover startups and innovative ideas ready to scale.' },
  { to: '/events', icon: navIcons.events, title: 'Events', subtitle: 'Join upcoming events', description: 'Workshops, demo days, and networking events near you.' },
  { to: '/community', icon: navIcons.community, title: 'Community', subtitle: 'Be part of our growing community', description: 'Collaborate, learn, and grow with like-minded people.' },
  { to: '/careers', icon: navIcons.careers, title: 'Careers', subtitle: 'Explore career opportunities', description: 'Join our mission and work on impactful projects.' },
  { to: '/partners', icon: navIcons.partners, title: 'Partners', subtitle: 'Collaborate with us', description: 'Partner with us to build the future of innovation.' },
];

const ecosystemCta = {
  to: '/become-a-consultant',
  newTab: true,
  icon: navIcons.consult,
  title: 'Book a Consultation',
  subtitle: "Let's build something great together",
};

const moreItems = [
  { to: '/blog', icon: navIcons.blog, title: 'News & Blog', subtitle: 'Insights, updates and stories', description: 'Read announcements, founder stories, and ecosystem news.' },
  { to: '/faqs', icon: navIcons.faqs, title: 'FAQs', subtitle: 'Answers to common questions', description: 'Find quick answers about programs, funding, and applying.' },
  { to: '/contact', icon: navIcons.contact, title: 'Contact', subtitle: 'Get in touch with our team', description: 'Reach out and we will get back to you shortly.' },
];

const menus = {
  ecosystem: { items: ecosystemItems, cta: ecosystemCta, cols: 6 },
  more: { items: moreItems, cols: 3 },
};

function MegaMenuLink({ item }) {
  const Icon = item.icon;
  return (
    <Link
      to={item.to}
      target={item.newTab ? '_blank' : undefined}
      rel={item.newTab ? 'noopener noreferrer' : undefined}
      className="group flex flex-col gap-3 rounded-xl p-4 hover:bg-ink-800 transition-colors"
    >
      <span className="w-9 h-9 rounded-lg bg-ink-800 group-hover:bg-ink-700 flex items-center justify-center text-paper transition-colors shrink-0">
        <Icon width="18" height="18" />
      </span>
      <span>
        <p className="text-sm font-semibold text-paper leading-snug">{item.title}</p>
        <p className="text-xs text-paper/60 mt-1 leading-snug">{item.subtitle}</p>
        {item.description && <p className="text-xs text-paper/40 mt-1.5 leading-relaxed">{item.description}</p>}
      </span>
    </Link>
  );
}

function MegaMenuTrigger({ name, label, openMenu, setOpenMenu }) {
  const open = openMenu === name;
  return (
    <button
      className={`flex items-center gap-1 text-sm font-medium py-2 transition-colors ${
        open ? 'text-signal' : 'text-paper hover:text-signal'
      }`}
      onMouseEnter={() => setOpenMenu(name)}
      onClick={() => setOpenMenu((v) => (v === name ? null : name))}
      aria-expanded={open}
    >
      {label}
      <svg width="10" height="6" viewBox="0 0 10 6" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </button>
  );
}

function MegaPanel({ items, cta, cols }) {
  return (
    <div className="bg-ink-900 border border-ink-600 shadow-2xl rounded-2xl p-2">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {items.map((item) => (
          <MegaMenuLink key={item.to} item={item} />
        ))}
      </div>
      {cta && (
        <>
          <div className="h-px bg-ink-700 my-2 mx-2" />
          <Link
            to={cta.to}
            target={cta.newTab ? '_blank' : undefined}
            rel={cta.newTab ? 'noopener noreferrer' : undefined}
            className="group flex items-center gap-3 rounded-xl p-4 hover:bg-ink-800 transition-colors"
          >
            <span className="w-9 h-9 rounded-lg bg-ink-800 group-hover:bg-ink-700 flex items-center justify-center text-paper transition-colors shrink-0">
              <cta.icon width="18" height="18" />
            </span>
            <span className="flex-1">
              <p className="text-sm font-semibold text-paper leading-snug">{cta.title}</p>
              <p className="text-xs text-paper/60 mt-0.5 leading-snug">{cta.subtitle}</p>
            </span>
            <ArrowUpRight width="18" height="18" className="text-paper/50 group-hover:text-signal group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        </>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  const dark = scrolled || !isHome;
  const activeMenu = openMenu ? menus[openMenu] : null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        dark ? 'bg-ink-900' : 'bg-transparent'
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={images.logo} alt="Lokha Innovation" className="w-11 h-11 object-contain" />
          <span className="font-display text-2xl font-medium tracking-tight text-paper">Lokha Innovation</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {primary.map((p) => (
            <NavLink
              key={p.to}
              to={p.to}
              end={p.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium py-2 border-b-2 transition-colors ${
                  isActive ? 'border-signal text-signal' : 'border-transparent text-paper hover:text-signal'
                }`
              }
            >
              {p.label}
            </NavLink>
          ))}
          <MegaMenuTrigger name="ecosystem" label="Ecosystem" openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <MegaMenuTrigger name="more" label="More" openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/become-a-consultant" target="_blank" rel="noopener noreferrer" className="btn-ghost-dark !py-2.5 !px-4 text-sm">Book a Consultation</Link>
          <Link to="/apply" className="btn-primary !py-2.5 !px-5 text-sm">Apply Now</Link>
        </div>

        <button
          className="lg:hidden text-paper"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="1.8" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="1.8" /></svg>
          )}
        </button>
      </div>

      {activeMenu && (
        <div className="hidden lg:block absolute left-0 right-0 top-full pt-3 z-50">
          <div className="container-x">
            <MegaPanel items={activeMenu.items} cta={activeMenu.cta} cols={activeMenu.cols} />
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="lg:hidden bg-ink-900 border-t border-ink-600 max-h-[80vh] overflow-y-auto">
          <div className="container-x py-6 flex flex-col gap-1">
            {primary.map((p) => (
              <Link key={p.to} to={p.to} className="py-2.5 text-paper/90 hover:text-signal text-sm border-b border-ink-700">
                {p.label}
              </Link>
            ))}
            {[...ecosystemItems, ecosystemCta, ...moreItems].map((p) => (
              <Link
                key={p.to}
                to={p.to}
                target={p.newTab ? '_blank' : undefined}
                rel={p.newTab ? 'noopener noreferrer' : undefined}
                className="py-2.5 text-paper/90 hover:text-signal text-sm border-b border-ink-700"
              >
                {p.title}
              </Link>
            ))}
            <Link to="/apply" className="btn-primary justify-center mt-4">Apply Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
