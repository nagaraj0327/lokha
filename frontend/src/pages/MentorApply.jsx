import { useState } from 'react';
import Seo from '../seo/Seo';
import { images } from '../assets/media';
import { submitApplication } from '../services/applicationService';
import { useToast } from '../context/ToastContext';

const countries = [
  'India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Singapore', 'Canada',
  'Australia', 'Germany', 'France', 'Netherlands', 'Other',
];

const supportTypes = [
  'Early-stage startups', 'Growing businesses', 'Technology companies',
  'Product-based businesses', 'Service businesses', 'Social / Impact ventures', 'Other',
];

const expertiseAreas = [
  'Business Strategy', 'Technology & Product', 'AI & Innovation', 'Marketing & Brand',
  'Sales & Business Development', 'Finance & Fundraising', 'Leadership & Management',
  'Operations', 'Legal & Compliance', 'Other',
];

const industries = [
  'Technology', 'Finance & Fintech', 'Healthcare', 'Education', 'Retail & E-commerce',
  'Manufacturing', 'Real Estate', 'Media & Entertainment', 'Agriculture', 'Energy & Sustainability',
  'Consulting & Professional Services', 'Other',
];

const founderStages = ['Idea / Pre-Seed', 'Early Stage', 'Growth Stage', 'Scaling'];
const availabilityOptions = ['1–2 hours per month', '3–5 hours per month', '5+ hours per month'];
const geoPreferences = ['Local / Regional', 'India', 'Global', 'No Preference'];

const initial = {
  firstName: '', lastName: '', email: '', secondaryEmail: '', country: '', city: '',
  organization: '', designation: '', website: '', linkedin: '',
  bio: '', motivation: '', mentorshipExperience: '',
  wasFounder: '', hasInvested: '', supportTypes: [],
  expertiseAreas: [], industries: [],
  format: '', founderStages: [], availability: '', geoPreference: '',
  contribution: '', referred: '', referralName: '',
  confirmed: false, agreedToGuidelines: false,
  hp_token: '',
};

// Distinct premium palette for this page only — deep forest green + brushed gold,
// separate from both the site-wide theme and the consultant application's navy/gold.
const FOREST = '#0E2A20';
const FOREST_SOFT = '#123527';
const GOLD = '#C9A227';

function SectionHeader({ n, title }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-display text-xl" style={{ color: GOLD }}>{n}</span>
      <span className="w-8 h-px" style={{ background: GOLD }} />
      <h2 className="eyebrow text-ink-900">{title}</h2>
    </div>
  );
}

const Field = ({ label, children, full, required }) => (
  <label className={`block ${full ? 'md:col-span-2' : ''}`}>
    <span className="eyebrow text-ink-700 block mb-2">
      {label}{required && <span style={{ color: GOLD }}>*</span>}
    </span>
    {children}
  </label>
);

const inputCls = 'w-full border hairline px-4 py-3 bg-white focus:outline-none text-ink-900 transition-colors mentor-gold-focus';

function Checkbox({ checked, onChange, label }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <span
        className="mt-0.5 shrink-0 w-5 h-5 border flex items-center justify-center transition-colors"
        style={checked ? { background: GOLD, borderColor: GOLD } : { borderColor: '#c9c4b8' }}
      >
        {checked && (
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" style={{ color: FOREST }} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L19 7" />
          </svg>
        )}
      </span>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
      <span className="text-sm text-ink-700 leading-snug">{label}</span>
    </label>
  );
}

function Radio({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors"
        style={{ borderColor: checked ? GOLD : '#c9c4b8' }}
      >
        {checked && <span className="w-2.5 h-2.5 rounded-full" style={{ background: GOLD }} />}
      </span>
      <input type="radio" className="sr-only" checked={checked} onChange={onChange} />
      <span className="text-sm text-ink-700">{label}</span>
    </label>
  );
}

export default function MentorApply() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle');
  const { showToast } = useToast();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const toggleInArray = (key, value, max) => {
    setForm((f) => {
      const set = new Set(f[key]);
      if (set.has(value)) {
        set.delete(value);
      } else {
        if (max && set.size >= max) return f;
        set.add(value);
      }
      return { ...f, [key]: Array.from(set) };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.confirmed || !form.agreedToGuidelines) {
      showToast('Please confirm both checkboxes before submitting.', 'error');
      return;
    }
    setStatus('sending');
    try {
      await submitApplication({ ...form, formType: 'mentor-application' });
      setStatus('sent');
      showToast('Mentor application submitted.');
    } catch (err) {
      setStatus('sent');
      showToast(err.message || 'Something went wrong, but we saved your details.', 'error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="pt-[72px] min-h-[70vh] flex items-center bg-paper">
        <div className="container-x text-center py-24 max-w-xl mx-auto">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8" style={{ background: 'rgba(201,162,39,0.12)', color: GOLD }}>
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7" />
            </svg>
          </span>
          <p className="eyebrow mb-4" style={{ color: GOLD }}>Application Received</p>
          <h1 className="font-display text-3xl md:text-4xl mb-6">Thank You for Your Interest in Lokha Innovation.</h1>
          <p className="text-ink-700">
            Our team will review your profile and areas of expertise. If your background aligns with the
            needs of founders in our ecosystem, we'll reach out to discuss the next steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Seo title="Become a Mentor" description="Join the Lokha Innovation Mentor Network and help founders build, grow, and scale." />
      <style>{`.mentor-gold-focus:focus { border-color: ${GOLD} !important; box-shadow: 0 0 0 1px ${GOLD}; } .mentor-form .eyebrow { font-size: 0.92rem; letter-spacing: 0.04em; }`}</style>

      <section className="relative pt-[72px] text-paper overflow-hidden" style={{ background: `linear-gradient(160deg, ${FOREST} 0%, ${FOREST_SOFT} 100%)` }}>
        <div className="absolute inset-0">
          <img src={images.bgme} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, ${FOREST} 0%, rgba(14,42,32,0.9) 55%, rgba(14,42,32,0.65) 100%)` }} />
        </div>
        <div className="container-x relative py-20 md:py-28 max-w-3xl">
          <p className="eyebrow mb-4" style={{ color: GOLD }}>Join the Lokha Innovation Mentor Network</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Share Your Experience. <span style={{ color: GOLD }}>Guide Ambition. Create Impact.</span>
          </h1>
          <p className="mt-6 text-paper/70 max-w-xl text-lg leading-relaxed">
            At Lokha Innovation, we believe meaningful mentorship can turn ideas into stronger businesses
            and ambitious founders into confident leaders.
          </p>
          <p className="mt-4 text-paper/60 max-w-xl leading-relaxed">
            We are building a network of experienced founders, business leaders, professionals, investors,
            and industry experts who are willing to share their knowledge, challenge ideas, and help
            emerging businesses navigate their growth journey.
          </p>
          <p className="mt-4 text-paper/60 max-w-xl leading-relaxed">
            Mentor applications are open throughout the year. Every application is reviewed based on
            professional experience, expertise, and potential contribution to the Lokha Innovation ecosystem.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-paper">
        <form onSubmit={onSubmit} className="container-x max-w-4xl space-y-16 mentor-form">
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="hp_token_mentor">Leave this field empty</label>
            <input type="text" id="hp_token_mentor" name="hp_token" tabIndex={-1} autoComplete="off" value={form.hp_token} onChange={onChange} />
          </div>

          {/* 01 */}
          <div>
            <SectionHeader n="01" title="Personal Information" />
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Preferred First Name" required>
                <input required name="firstName" value={form.firstName} onChange={onChange} placeholder="Enter your first name" className={inputCls} />
              </Field>
              <Field label="Last Name" required>
                <input required name="lastName" value={form.lastName} onChange={onChange} placeholder="Enter your last name" className={inputCls} />
              </Field>
              <Field label="Primary Email" required>
                <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="name@company.com" className={inputCls} />
              </Field>
              <Field label="Secondary Email">
                <input type="email" name="secondaryEmail" value={form.secondaryEmail} onChange={onChange} placeholder="Optional backup email" className={inputCls} />
              </Field>
              <Field label="Country" required>
                <select required name="country" value={form.country} onChange={onChange} className={inputCls}>
                  <option value="">Select your country</option>
                  {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="City" required>
                <input required name="city" value={form.city} onChange={onChange} placeholder="Enter your city" className={inputCls} />
              </Field>
            </div>
          </div>

          {/* 02 */}
          <div>
            <SectionHeader n="02" title="Professional Profile" />
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Company / Organization" required>
                <input required name="organization" value={form.organization} onChange={onChange} placeholder="Enter your company or organization" className={inputCls} />
              </Field>
              <Field label="Job Title / Designation" required>
                <input required name="designation" value={form.designation} onChange={onChange} placeholder="e.g. Founder, CEO, CTO, Director" className={inputCls} />
              </Field>
              <Field label="Company Website">
                <input type="url" name="website" value={form.website} onChange={onChange} placeholder="https://yourcompany.com" className={inputCls} />
              </Field>
              <Field label="LinkedIn Profile" required>
                <input required type="url" name="linkedin" value={form.linkedin} onChange={onChange} placeholder="https://linkedin.com/in/your-profile" className={inputCls} />
              </Field>
            </div>
          </div>

          {/* 03 */}
          <div>
            <SectionHeader n="03" title="Your Experience" />
            <div className="grid gap-6">
              <Field label="Professional Bio & Expertise" required full>
                <textarea required rows={4} name="bio" value={form.bio} onChange={onChange} placeholder="Tell us about your professional journey, key achievements, and the experience you would bring to founders and emerging businesses." className={inputCls} />
              </Field>
              <Field label="Why do you want to become a mentor at Lokha Innovation?" required full>
                <textarea required rows={4} name="motivation" value={form.motivation} onChange={onChange} placeholder="Tell us what motivates you to share your experience and contribute to the growth of founders and businesses." className={inputCls} />
              </Field>
              <Field label="Mentorship Experience" full>
                <textarea rows={3} name="mentorshipExperience" value={form.mentorshipExperience} onChange={onChange} placeholder="Have you previously mentored founders, entrepreneurs, students, teams, or businesses? Briefly describe your experience." className={inputCls} />
              </Field>
            </div>
          </div>

          {/* 04 */}
          <div>
            <SectionHeader n="04" title="Founder & Business Experience" />
            <div className="grid md:grid-cols-2 gap-10 mb-8">
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Have you been part of a startup or founding team?<span style={{ color: GOLD }}>*</span></span>
                <div className="flex gap-8">
                  <Radio label="Yes" checked={form.wasFounder === 'Yes'} onChange={() => setForm({ ...form, wasFounder: 'Yes' })} />
                  <Radio label="No" checked={form.wasFounder === 'No'} onChange={() => setForm({ ...form, wasFounder: 'No' })} />
                </div>
              </div>
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Have you invested in or advised startups/businesses?<span style={{ color: GOLD }}>*</span></span>
                <div className="flex gap-8">
                  <Radio label="Yes" checked={form.hasInvested === 'Yes'} onChange={() => setForm({ ...form, hasInvested: 'Yes' })} />
                  <Radio label="No" checked={form.hasInvested === 'No'} onChange={() => setForm({ ...form, hasInvested: 'No' })} />
                </div>
              </div>
            </div>
            <span className="eyebrow text-ink-700 block mb-4">What type of founders or businesses would you be most comfortable supporting?<span style={{ color: GOLD }}>*</span></span>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {supportTypes.map((s) => (
                <Checkbox key={s} label={s} checked={form.supportTypes.includes(s)} onChange={() => toggleInArray('supportTypes', s)} />
              ))}
            </div>
          </div>

          {/* 05 */}
          <div>
            <SectionHeader n="05" title="Areas of Expertise" />
            <span className="eyebrow text-ink-700 block mb-2">Which areas can you confidently mentor founders in?<span style={{ color: GOLD }}>*</span></span>
            <p className="text-sm text-ink-700/70 mb-4">Select up to 3.</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
              {expertiseAreas.map((a) => (
                <Checkbox key={a} label={a} checked={form.expertiseAreas.includes(a)} onChange={() => toggleInArray('expertiseAreas', a, 3)} />
              ))}
            </div>
            <span className="eyebrow text-ink-700 block mb-4">Industry Experience</span>
            <p className="text-sm text-ink-700/70 mb-4">Select the industries where you have professional experience.</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {industries.map((i) => (
                <Checkbox key={i} label={i} checked={form.industries.includes(i)} onChange={() => toggleInArray('industries', i)} />
              ))}
            </div>
          </div>

          {/* 06 */}
          <div>
            <SectionHeader n="06" title="Mentorship Preferences" />
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Preferred Mentorship Format</span>
                <div className="space-y-3 mb-8">
                  {['Online', 'In-Person', 'Hybrid'].map((f) => (
                    <Radio key={f} label={f} checked={form.format === f} onChange={() => setForm({ ...form, format: f })} />
                  ))}
                </div>
                <span className="eyebrow text-ink-700 block mb-4">Availability</span>
                <div className="space-y-3">
                  {availabilityOptions.map((a) => (
                    <Radio key={a} label={a} checked={form.availability === a} onChange={() => setForm({ ...form, availability: a })} />
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Preferred Founder Stage</span>
                <div className="space-y-3 mb-8">
                  {founderStages.map((s) => (
                    <Checkbox key={s} label={s} checked={form.founderStages.includes(s)} onChange={() => toggleInArray('founderStages', s)} />
                  ))}
                </div>
                <span className="eyebrow text-ink-700 block mb-4">Geographic Preference</span>
                <div className="space-y-3">
                  {geoPreferences.map((g) => (
                    <Radio key={g} label={g} checked={form.geoPreference === g} onChange={() => setForm({ ...form, geoPreference: g })} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 07 */}
          <div>
            <SectionHeader n="07" title="Additional Information" />
            <div className="grid gap-6">
              <Field label="How would you like to contribute to the Lokha Innovation ecosystem?" full>
                <textarea rows={3} name="contribution" value={form.contribution} onChange={onChange} placeholder="Share any additional information, expertise, networks, or resources that you believe could benefit founders." className={inputCls} />
              </Field>
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Were you referred by someone in the Lokha Innovation network?</span>
                <div className="flex gap-8 mb-6">
                  <Radio label="Yes" checked={form.referred === 'Yes'} onChange={() => setForm({ ...form, referred: 'Yes' })} />
                  <Radio label="No" checked={form.referred === 'No'} onChange={() => setForm({ ...form, referred: 'No' })} />
                </div>
                {form.referred === 'Yes' && (
                  <Field label="Referral Name">
                    <input name="referralName" value={form.referralName} onChange={onChange} placeholder="Referral Name" className={inputCls} />
                  </Field>
                )}
              </div>
            </div>
          </div>

          {/* 08 */}
          <div>
            <SectionHeader n="08" title="Confirmation" />
            <div className="space-y-4">
              <Checkbox
                checked={form.confirmed}
                onChange={() => setForm({ ...form, confirmed: !form.confirmed })}
                label="I confirm that the information provided in this application is accurate and understand that Lokha Innovation may contact me regarding suitable mentorship opportunities."
              />
              <Checkbox
                checked={form.agreedToGuidelines}
                onChange={() => setForm({ ...form, agreedToGuidelines: !form.agreedToGuidelines })}
                label="I agree to follow Lokha Innovation's professional standards and mentor guidelines."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-transform hover:-translate-y-0.5"
            style={{ background: GOLD, color: FOREST }}
          >
            {status === 'sending' ? 'Submitting…' : 'Submit Mentor Application'}
          </button>
        </form>
      </section>
    </div>
  );
}
