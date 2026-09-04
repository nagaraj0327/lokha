import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Seo from '../seo/Seo';
import { contactIcons } from '../components/ContactIcons';
import { socialIcons } from '../components/SocialIcons';
import { footerInfo } from '../config/content.config';
import { eventIcons } from '../components/EventIcons';
import { images } from '../assets/media';
import { submitContactMessage } from '../services/contactService';
import { useToast } from '../context/ToastContext';
import ConsultationBookingModal from '../components/ConsultationBookingModal';

const OFFICE_ADDRESS =
  'D.No. 76/97, L. Venkaiah Nagar, Ballari Road, Kurnool, Andhra Pradesh – 518004';

const interests = [
  'General Inquiry',
  'Apply to a Program',
  'Become a Mentor',
  'Become an Investor',
  'Partnership',
  'Media / Press',
  'Other',
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/lokha-innovation-ecosystem/', icon: socialIcons.linkedin },
  { label: 'X', href: 'https://x.com/lokhainnovation?s=11', icon: socialIcons.x },
  { label: 'Instagram', href: 'https://www.instagram.com/lokhainnovation?utm_source=qr', icon: socialIcons.instagram },
  { label: 'YouTube', href: 'https://youtube.com/@lokhainnovation?si=2eMF7thgFi7yNqfA', icon: socialIcons.youtube },
];

const inputCls = 'w-full border hairline pl-10 pr-4 py-3 bg-white focus:outline-none focus:border-signal transition-colors text-sm';

function FieldIcon({ icon: Icon }) {
  return (
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-800/35 pointer-events-none">
      <Icon width="15" height="15" />
    </span>
  );
}

function ConnectRow({ icon: Icon, label, children, action }) {
  return (
    <div className="flex items-start gap-4 py-4 border-b hairline last:border-0">
      <span className="w-10 h-10 rounded-full bg-signal/10 text-signal flex items-center justify-center shrink-0">
        <Icon width="17" height="17" />
      </span>
      <div>
        <p className="text-sm font-semibold text-ink-900">{label}</p>
        <div className="text-ink-700 text-sm mt-0.5">{children}</div>
        {action}
      </div>
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', organization: '', interest: '', message: '', hp_token: '',
  });
  const { showToast } = useToast();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitContactMessage(form);
      setStatus('sent');
      showToast('Message sent — we\'ll reply within one business day.');
    } catch (err) {
      setStatus('sent');
      showToast(err.message || 'Something went wrong, but we saved your message.', 'error');
    }
  };

  return (
    <div>
      <Seo title="Contact Us" description="Get in touch with the Lokha Innovation team." />

      {/* Hero */}
      <section className="relative bg-ink-900 text-paper pt-[72px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.contactHeroPhoto} alt="" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/75 to-ink-900/10" />
        </div>
        <div className="container-x relative py-14 md:py-20 max-w-2xl">
          <Reveal>
            <p className="eyebrow text-signal mb-4">Contact Us</p>
            <h1 className="font-sans font-extrabold text-4xl md:text-5xl leading-[1.05] tracking-tight mb-2">
              Let's Build
              <br />
              <span className="text-signal">What's Next</span>
            </h1>
            <span className="block w-14 h-1 bg-signal mt-4 mb-5" />
            <p className="text-paper/75 leading-relaxed max-w-lg mb-8">
              Have an idea, a startup, or an opportunity to collaborate? Connect with Lokha Innovation and
              let's explore the right opportunity together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/apply" className="btn-primary inline-flex items-center gap-2">
                Apply to Lokha
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-paper">
        <div className="container-x grid md:grid-cols-[1fr_360px] gap-14 items-start">
          {/* Send a Message */}
          <Reveal id="send-a-message">
            <p className="eyebrow text-signal mb-3">Let's Start a Conversation</p>
            <h2 className="font-display text-3xl md:text-4xl mb-2">We'd Love to Hear From You!</h2>
            <span className="block w-14 h-1 bg-signal mt-3 mb-5" />
            <p className="text-ink-700 leading-relaxed max-w-xl mb-9">
              Whether you're building your first idea, scaling a startup, looking to invest, or exploring a
              partnership, tell us what you're looking for. We'll help you find the right path within the
              Lokha Innovation ecosystem.
            </p>

            {status === 'sent' ? (
              <div className="border border-moss/40 bg-moss/5 p-8 rounded-lg max-w-xl">
                <p className="font-display text-2xl text-moss mb-2">Message sent.</p>
                <p className="text-ink-700 text-sm">Our team typically replies within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5 max-w-xl">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="hp_token">Leave this field empty</label>
                  <input type="text" id="hp_token" name="hp_token" tabIndex={-1} autoComplete="off" value={form.hp_token} onChange={onChange} />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-xs font-medium text-ink-800 block mb-1.5">Full Name <span className="text-signal">*</span></span>
                    <span className="relative block">
                      <FieldIcon icon={contactIcons.users} />
                      <input required name="name" value={form.name} onChange={onChange} placeholder="Enter your full name" className={inputCls} />
                    </span>
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-ink-800 block mb-1.5">Work Email <span className="text-signal">*</span></span>
                    <span className="relative block">
                      <FieldIcon icon={contactIcons.mail} />
                      <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="Enter your work email" className={inputCls} />
                    </span>
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-ink-800 block mb-1.5">Phone Number <span className="text-signal">*</span></span>
                    <span className="relative block">
                      <FieldIcon icon={contactIcons.phone} />
                      <input required name="phone" value={form.phone} onChange={onChange} placeholder="Enter your phone number" className={inputCls} />
                    </span>
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-ink-800 block mb-1.5">Startup / Organization</span>
                    <span className="relative block">
                      <FieldIcon icon={contactIcons.briefcase} />
                      <input name="organization" value={form.organization} onChange={onChange} placeholder="Enter your startup or organization" className={inputCls} />
                    </span>
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-medium text-ink-800 block mb-1.5">I'm interested in <span className="text-signal">*</span></span>
                  <span className="relative block">
                    <FieldIcon icon={contactIcons.list} />
                    <select required name="interest" value={form.interest} onChange={onChange} className={inputCls}>
                      <option value="">Select what interests you</option>
                      {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </span>
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-ink-800 block mb-1.5">Tell us how we can help <span className="text-signal">*</span></span>
                  <span className="relative block">
                    <span className="absolute left-3 top-3.5 text-ink-800/35 pointer-events-none">
                      <contactIcons.pencil width="15" height="15" />
                    </span>
                    <textarea required name="message" value={form.message} onChange={onChange} placeholder="Write your message here..." rows={5} className={inputCls} />
                  </span>
                </label>

                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 bg-signal text-paper font-semibold px-6 py-3 rounded-full hover:brightness-110 transition w-fit"
                  >
                    <contactIcons.send width="16" height="16" />
                    {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
                    <span aria-hidden="true">→</span>
                  </button>
                  <span className="inline-flex items-center gap-1.5 text-ink-800/45 text-xs">
                    <contactIcons.lock width="12" height="12" />
                    Your information is safe with us. We will never share your details.
                  </span>
                </div>
              </form>
            )}
          </Reveal>

          {/* Connect With Lokha */}
          <Reveal delay={120}>
            <p className="eyebrow text-signal mb-3">Get In Touch</p>
            <h2 className="font-display text-2xl mb-2">Connect With Lokha</h2>
            <span className="block w-10 h-1 bg-signal mb-2" />

            <div>
              <ConnectRow icon={contactIcons.mail} label="Email Us">
                {footerInfo.email}
              </ConnectRow>
              <ConnectRow icon={contactIcons.phone} label="Call Us">
                {footerInfo.phone}
              </ConnectRow>
              <ConnectRow icon={contactIcons.mapPin} label="Visit Us">
                {OFFICE_ADDRESS}
              </ConnectRow>
              <ConnectRow icon={contactIcons.clock} label="Office Hours">
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </ConnectRow>
              <ConnectRow
                icon={contactIcons.calendar}
                label="Book a Consultation"
                action={
                  <button
                    type="button"
                    onClick={() => setConsultationOpen(true)}
                    className="inline-flex items-center gap-1 text-signal text-sm font-semibold mt-1.5 hover:text-signal-600 transition-colors"
                  >
                    Book Now
                    <span aria-hidden="true">→</span>
                  </button>
                }
              >
                Schedule a one-on-one meeting with our team.
              </ConnectRow>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Location */}
      <section className="pb-16 md:pb-24 bg-paper">
        <div className="container-x grid md:grid-cols-[320px_1fr] gap-8 items-start">
          <Reveal>
            <p className="eyebrow text-signal mb-3">Find Us Here</p>
            <h2 className="font-display text-2xl mb-3">Our Location</h2>
            <p className="text-ink-700 text-sm leading-relaxed mb-6">
              Visit our ecosystem and connect with the people building what's next.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-ink-900 text-paper flex items-center justify-center hover:bg-signal transition-colors"
                  >
                    <Icon width="15" height="15" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={100} className="h-[320px] md:h-[360px] w-full overflow-hidden rounded-xl border hairline relative">
            <iframe
              title="Lokha Innovation office map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed`}
            />
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg px-4 py-3 max-w-[240px]">
              <p className="text-sm font-semibold text-ink-900">Lokha Innovation</p>
              <p className="text-ink-700 text-xs mt-0.5">{OFFICE_ADDRESS}</p>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal text-xs font-semibold mt-1.5 inline-flex items-center gap-1 hover:text-signal-600 transition-colors"
              >
                View on Google Maps
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 md:py-16 bg-ink-900 text-paper overflow-hidden">
        <div className="container-x">
          <Reveal className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-6">
              <span className="w-16 h-16 rounded-full border-2 border-dashed border-signal/50 text-signal flex items-center justify-center shrink-0">
                <eventIcons.rocket width="24" height="24" />
              </span>
              <div>
                <p className="font-display text-2xl md:text-3xl">
                  Have an <span className="text-signal">Idea Worth Building?</span>
                </p>
                <p className="text-paper/65 text-sm mt-2 max-w-lg">
                  Lokha Innovation brings together the people, knowledge, and opportunities that can help turn
                  ambitious ideas into meaningful ventures.
                </p>
              </div>
            </div>
            <Link to="/apply" className="btn-ghost-dark inline-flex items-center gap-2 shrink-0">
              Start Your Journey
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <ConsultationBookingModal open={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </div>
  );
}
