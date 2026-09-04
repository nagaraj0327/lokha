import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Seo from '../seo/Seo';
import Reveal from '../components/Reveal';
import { eventIcons } from '../components/EventIcons';
import { events } from '../config/content.config';
import BootcampApplyModal from '../components/BootcampApplyModal';
import AIBuildWeekApplyModal from '../components/AIBuildWeekApplyModal';
import DemoDayInviteModal from '../components/DemoDayInviteModal';
import InvestorMeetupInviteModal from '../components/InvestorMeetupInviteModal';
import CustomerDiscoverySprintApplyModal from '../components/CustomerDiscoverySprintApplyModal';
import GlobalExpansionClinicRegisterModal from '../components/GlobalExpansionClinicRegisterModal';

// Events that use an in-page premium apply modal instead of the generic /apply page,
// mapped to the modal component that renders their form.
const MODAL_APPLY_COMPONENTS = {
  'founders-fundamentals-bootcamp': BootcampApplyModal,
  'ai-build-week': AIBuildWeekApplyModal,
  'demo-day-cohort-9': DemoDayInviteModal,
  'investor-meetup-fintech-focus': InvestorMeetupInviteModal,
  'customer-discovery-sprint': CustomerDiscoverySprintApplyModal,
  'global-expansion-clinic': GlobalExpansionClinicRegisterModal,
};

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-signal shrink-0">
        <eventIcons.checkCircle width="18" height="18" />
      </span>
      <span className="text-ink-700 text-sm leading-relaxed">{children}</span>
    </li>
  );
}

function MetaPill({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-3 bg-paper/10 backdrop-blur-sm border border-paper/20 rounded-lg px-4 py-3">
      <span className="w-9 h-9 rounded-md bg-signal/20 text-signal flex items-center justify-center shrink-0">
        <Icon width="18" height="18" />
      </span>
      <div>
        <p className="text-paper font-semibold text-sm leading-none">{value}</p>
        <p className="text-paper/55 text-xs mt-1.5">{label}</p>
      </div>
    </div>
  );
}

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const ApplyModal = MODAL_APPLY_COMPONENTS[slug];
  const useModalApply = Boolean(ApplyModal);

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 560);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!event) return <Navigate to="/events" replace />;

  return (
    <div>
      <Seo title={event.name} description={event.description} />

      {/* Hero — full-bleed dark, consistent with the rest of the site */}
      <section className="relative pt-[72px] bg-ink-900 text-paper overflow-hidden">
        <div className="absolute inset-0">
          <img src={event.image} alt="" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/85 to-ink-900/55" />
        </div>

        <div className="container-x relative pt-8 pb-4 text-xs text-paper/45 flex items-center gap-2">
          <Link to="/" className="hover:text-paper transition-colors">Home</Link>
          <span>/</span>
          <Link to="/events" className="hover:text-paper transition-colors">Events</Link>
          <span>/</span>
          <span className="text-paper/70">{event.name}</span>
        </div>

        <div className="container-x relative pt-8 pb-20 md:pb-24">
          <Reveal>
            <p className="eyebrow text-signal mb-4" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
              {event.type} • {event.date}
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.65)' }}>
              {event.name}
            </h1>
            <p className="mt-6 text-paper/70 max-w-xl text-lg leading-relaxed">
              {event.about?.[0]}
            </p>

            <div className="flex flex-wrap gap-3 mt-9">
              <MetaPill icon={eventIcons.calendar} value={event.date} label="Program Date" />
              <MetaPill icon={eventIcons.clock} value={event.duration} label="Duration" />
              <MetaPill icon={eventIcons.target} value={event.program} label="Program Stage" />
            </div>

            {useModalApply ? (
              <button type="button" onClick={() => setApplyOpen(true)} className="btn-primary inline-flex items-center gap-2 mt-9">
                {event.ctaLabel}
                <span aria-hidden="true">→</span>
              </button>
            ) : (
              <Link
                to="/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 mt-9"
              >
                {event.ctaLabel}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </Reveal>
        </div>
      </section>

      {/* About + What you'll learn */}
      <section className="py-20 md:py-24 bg-paper border-t hairline">
        <div className="container-x grid md:grid-cols-2 gap-14">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl mb-5">About the {event.type}</h2>
            <div className="space-y-4">
              {event.about?.map((p, i) => (
                <p key={i} className="text-ink-700 leading-relaxed">{p}</p>
              ))}
            </div>
          </Reveal>

          {event.learn?.length > 0 && (
            <Reveal delay={100}>
              <h2 className="font-display text-2xl md:text-3xl mb-5">What You'll Learn</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {event.learn.map((l) => {
                  const Icon = eventIcons[l.icon];
                  return (
                    <div
                      key={l.label}
                      className="border hairline rounded-xl p-5 text-center flex flex-col items-center gap-3 hover:border-signal hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {Icon && (
                        <span className="w-11 h-11 rounded-lg bg-signal/10 text-signal flex items-center justify-center">
                          <Icon width="22" height="22" />
                        </span>
                      )}
                      <p className="text-sm text-ink-900 leading-snug">{l.label}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Journey timeline (only for multi-day events) */}
      {event.journey?.length > 0 && (
        <section className="py-20 md:py-24 bg-ink-900 text-paper">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow text-signal mb-3">Program Flow</p>
              <h2 className="font-display text-2xl md:text-3xl mb-12">Your {event.journey.length}-Day Journey</h2>
            </Reveal>
            <div className="grid md:grid-cols-5 gap-4">
              {event.journey.map((day, idx) => {
                const Icon = eventIcons[day.icon];
                return (
                  <Reveal key={day.day} delay={idx * 80} className="relative h-full">
                    <div className="border border-paper/15 rounded-xl overflow-hidden h-full bg-paper/[0.03] hover:border-signal hover:bg-paper/[0.06] transition-all duration-300">
                      {day.image && (
                        <div className="h-28 overflow-hidden">
                          <img src={day.image} alt={day.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="p-6">
                        <p className="eyebrow text-signal mb-4">{day.day}</p>
                        {Icon && (
                          <span className="w-11 h-11 rounded-lg bg-signal/15 text-signal flex items-center justify-center mb-4">
                            <Icon width="22" height="22" />
                          </span>
                        )}
                        <p className="font-display text-lg mb-2">{day.title}</p>
                        <p className="text-paper/60 text-sm leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Who should attend + takeaways */}
      <section className="py-20 md:py-24 bg-paper border-t hairline">
        <div className="container-x grid md:grid-cols-2 gap-14">
          {event.whoShouldAttend?.length > 0 && (
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl mb-6">Who Should Attend?</h2>
              <ul className="space-y-3">
                {event.whoShouldAttend.map((w) => <CheckItem key={w}>{w}</CheckItem>)}
              </ul>
            </Reveal>
          )}
          {event.takeaways?.length > 0 && (
            <Reveal delay={100}>
              <h2 className="font-display text-2xl md:text-3xl mb-6">What You'll Take Away</h2>
              <ul className="space-y-3">
                {event.takeaways.map((t) => <CheckItem key={t}>{t}</CheckItem>)}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20 md:pb-28 bg-paper">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 rounded-xl bg-paper/15 text-paper flex items-center justify-center shrink-0">
                <eventIcons.rocket width="26" height="26" />
              </span>
              <div>
                <p className="font-display text-xl md:text-2xl text-paper">Ready to take the first step?</p>
                <p className="text-paper/75 text-sm mt-1">Kickstart your founder journey with Lokha Innovation.</p>
              </div>
            </div>
            {useModalApply ? (
              <button
                type="button"
                onClick={() => setApplyOpen(true)}
                className="inline-flex items-center gap-2 bg-paper text-ink-900 font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors shrink-0"
              >
                {event.ctaLabel}
                <span aria-hidden="true">→</span>
              </button>
            ) : (
              <Link
                to="/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-paper text-ink-900 font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors shrink-0"
              >
                {event.ctaLabel}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </Reveal>
        </div>
      </section>

      {/* Sticky apply bar — stays visible while scrolling past the hero */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-ink-900/95 backdrop-blur border-t border-paper/10 transition-transform duration-300 ${
          showStickyBar ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="container-x py-3.5 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-paper text-sm font-semibold truncate">{event.name}</p>
            <p className="text-paper/50 text-xs hidden sm:block">{event.type} • {event.date} • {event.duration}</p>
          </div>
          {useModalApply ? (
            <button type="button" onClick={() => setApplyOpen(true)} className="btn-primary !py-2.5 !px-5 text-sm shrink-0 inline-flex items-center gap-2">
              {event.ctaLabel}
              <span aria-hidden="true">→</span>
            </button>
          ) : (
            <Link
              to="/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-5 text-sm shrink-0 inline-flex items-center gap-2"
            >
              {event.ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>

      {useModalApply && (
        <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} eventName={event.name} />
      )}
    </div>
  );
}
