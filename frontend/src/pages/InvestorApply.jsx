import { useState } from 'react';
import Seo from '../seo/Seo';
import { images } from '../assets/media';
import { submitApplication } from '../services/applicationService';
import { useToast } from '../context/ToastContext';

const investorTypes = [
  'Angel Investor', 'Venture Capital Firm', 'Corporate / Strategic Investor',
  'Family Office', 'Government / Public Fund', 'Accelerator / Syndicate', 'Other',
];

const stageFocus = [
  'Idea / Pre-Seed', 'Seed', 'Series A', 'Series B+', 'Growth Stage',
];

const sectorsOfInterest = [
  'Technology & SaaS', 'Fintech', 'Healthtech', 'AI & Deep Tech', 'Climate & Sustainability',
  'Consumer & E-commerce', 'Education', 'Agritech', 'Manufacturing & Industrial', 'Other',
];

const checkSizes = [
  'Under $25K', '$25K – $100K', '$100K – $500K', '$500K – $2M', '$2M+',
];

const involvementLevels = ['Capital Only', 'Capital + Mentorship', 'Capital + Board Seat / Active Involvement'];
const meetingFormats = ['Virtual', 'In-Person', 'Hybrid'];
const hearAboutOptions = ['Referral', 'Social Media', 'Event / Demo Day', 'Search Engine', 'Partner Network', 'Other'];

const initial = {
  fullName: '', email: '', phone: '', location: '',
  investorType: '', firmName: '', title: '', linkedin: '', website: '',
  aum: '', yearsInvesting: '',
  stageFocus: [], sectorsOfInterest: [], checkSize: '', involvementLevel: '',
  thesis: '', portfolioHighlights: '',
  meetingFormat: '', hearAbout: '',
  motivation: '',
  confirmed: false,
  hp_token: '',
};

// Distinct premium palette for this page only — navy + brushed gold,
// separate from the site-wide ink/signal-orange theme. Matches the
// Consultant / Mentor application pages for a consistent "apply" experience.
const NAVY = '#0B1220';
const NAVY_SOFT = '#101B30';
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

const inputCls = 'w-full border hairline px-4 py-3 bg-white focus:outline-none text-ink-900 transition-colors gold-focus';

function Checkbox({ checked, onChange, label }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <span
        className="mt-0.5 shrink-0 w-5 h-5 border flex items-center justify-center transition-colors"
        style={checked ? { background: GOLD, borderColor: GOLD } : { borderColor: '#c9c4b8' }}
      >
        {checked && (
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" style={{ color: NAVY }} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
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

export default function InvestorApply() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle');
  const { showToast } = useToast();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const toggleInArray = (key, value) => {
    setForm((f) => {
      const set = new Set(f[key]);
      set.has(value) ? set.delete(value) : set.add(value);
      return { ...f, [key]: Array.from(set) };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.confirmed) {
      showToast('Please confirm your information before submitting.', 'error');
      return;
    }
    setStatus('sending');
    try {
      await submitApplication({ ...form, formType: 'investor-application' });
      setStatus('sent');
      showToast('Investor application submitted.');
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
          <h1 className="font-display text-3xl md:text-4xl mb-6">Thank you for your interest in investing with Lokha Innovation.</h1>
          <p className="text-ink-700">
            Our investment relations team will review your profile and investment thesis. If there's a fit
            with our current or upcoming cohorts, we'll reach out to schedule an introductory call.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Seo title="Investor Application" description="Apply to become an investor partner with the Lokha Innovation ecosystem and connect with vetted, mentor-approved startups." />
      <style>{`.gold-focus:focus { border-color: ${GOLD} !important; box-shadow: 0 0 0 1px ${GOLD}; } .investor-form .eyebrow { font-size: 0.92rem; letter-spacing: 0.04em; }`}</style>

      <section className="relative pt-[72px] text-paper overflow-hidden" style={{ background: `linear-gradient(160deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)` }}>
        <div className="absolute inset-0">
          <img src={images.bgm} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, ${NAVY} 0%, rgba(11,18,32,0.9) 55%, rgba(11,18,32,0.65) 100%)` }} />
        </div>
        <div className="container-x relative py-20 md:py-28 max-w-3xl">
          <p className="eyebrow mb-4" style={{ color: GOLD }}>Investor Application</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Back the Founders. <span style={{ color: GOLD }}>Shape What's Next.</span>
          </h1>
          <p className="mt-6 text-paper/70 max-w-xl text-lg leading-relaxed">
            Join the Lokha Innovation Investor Network and get access to vetted, mentor-approved startups
            from our cohorts — with warm introductions, curated deal flow, and a direct line to founders
            building across technology, fintech, healthtech, climate, and more.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-paper">
        <form onSubmit={onSubmit} className="container-x max-w-4xl space-y-16 investor-form">
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="hp_token">Leave this field empty</label>
            <input type="text" id="hp_token" name="hp_token" tabIndex={-1} autoComplete="off" value={form.hp_token} onChange={onChange} />
          </div>

          {/* 01 */}
          <div>
            <SectionHeader n="01" title="Personal Information" />
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full Name" required>
                <input required name="fullName" value={form.fullName} onChange={onChange} placeholder="Enter your full name" className={inputCls} />
              </Field>
              <Field label="Professional Email Address" required>
                <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="name@firm.com" className={inputCls} />
              </Field>
              <Field label="Phone Number" required>
                <input required name="phone" value={form.phone} onChange={onChange} placeholder="+91 XXXXX XXXXX" className={inputCls} />
              </Field>
              <Field label="Location" required>
                <input required name="location" value={form.location} onChange={onChange} placeholder="City, State, Country" className={inputCls} />
              </Field>
            </div>
          </div>

          {/* 02 */}
          <div>
            <SectionHeader n="02" title="Investor Profile" />
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Investor Type" required>
                <select required name="investorType" value={form.investorType} onChange={onChange} className={inputCls}>
                  <option value="">Select investor type</option>
                  {investorTypes.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </Field>
              <Field label="Firm / Fund Name">
                <input name="firmName" value={form.firmName} onChange={onChange} placeholder="Leave blank if investing individually" className={inputCls} />
              </Field>
              <Field label="Title / Role" required>
                <input required name="title" value={form.title} onChange={onChange} placeholder="e.g. Managing Partner, Angel Investor" className={inputCls} />
              </Field>
              <Field label="Years of Investing Experience">
                <input name="yearsInvesting" value={form.yearsInvesting} onChange={onChange} placeholder="e.g. 5 years" className={inputCls} />
              </Field>
              <Field label="LinkedIn Profile" required>
                <input required type="url" name="linkedin" value={form.linkedin} onChange={onChange} placeholder="https://linkedin.com/in/your-profile" className={inputCls} />
              </Field>
              <Field label="Firm / Fund Website">
                <input type="url" name="website" value={form.website} onChange={onChange} placeholder="https://yourfirm.com" className={inputCls} />
              </Field>
            </div>
          </div>

          {/* 03 */}
          <div>
            <SectionHeader n="03" title="Investment Focus" />
            <div className="grid gap-10">
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Stage Focus<span style={{ color: GOLD }}>*</span></span>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {stageFocus.map((s) => (
                    <Checkbox key={s} label={s} checked={form.stageFocus.includes(s)} onChange={() => toggleInArray('stageFocus', s)} />
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Sectors of Interest<span style={{ color: GOLD }}>*</span></span>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {sectorsOfInterest.map((s) => (
                    <Checkbox key={s} label={s} checked={form.sectorsOfInterest.includes(s)} onChange={() => toggleInArray('sectorsOfInterest', s)} />
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Typical Check Size" required>
                  <select required name="checkSize" value={form.checkSize} onChange={onChange} className={inputCls}>
                    <option value="">Select check size</option>
                    {checkSizes.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </Field>
              </div>
            </div>
          </div>

          {/* 04 */}
          <div>
            <SectionHeader n="04" title="Investment Thesis" />
            <div className="grid gap-6">
              <Field label="What is your investment thesis?" required full>
                <textarea required rows={4} name="thesis" value={form.thesis} onChange={onChange} placeholder="Describe what you look for in a startup — stage, traction, team, market, or other criteria." className={inputCls} />
              </Field>
              <Field label="Notable Portfolio Companies or Past Investments" full>
                <textarea rows={4} name="portfolioHighlights" value={form.portfolioHighlights} onChange={onChange} placeholder="Share a few investments you're proud of, or examples that reflect your investing style." className={inputCls} />
              </Field>
            </div>
          </div>

          {/* 05 */}
          <div>
            <SectionHeader n="05" title="Engagement Preferences" />
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Level of Involvement<span style={{ color: GOLD }}>*</span></span>
                <div className="space-y-3">
                  {involvementLevels.map((m) => (
                    <Radio key={m} label={m} checked={form.involvementLevel === m} onChange={() => setForm({ ...form, involvementLevel: m })} />
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Preferred Meeting Format</span>
                <div className="space-y-3">
                  {meetingFormats.map((m) => (
                    <Radio key={m} label={m} checked={form.meetingFormat === m} onChange={() => setForm({ ...form, meetingFormat: m })} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 06 */}
          <div>
            <SectionHeader n="06" title="Your Motivation" />
            <div className="grid gap-6">
              <Field label="Why would you like to invest through Lokha Innovation?" required full>
                <textarea required rows={4} name="motivation" value={form.motivation} onChange={onChange} placeholder="Tell us what draws you to our ecosystem and the founders we work with." className={inputCls} />
              </Field>
              <Field label="How did you hear about us?">
                <select name="hearAbout" value={form.hearAbout} onChange={onChange} className={inputCls}>
                  <option value="">Select an option</option>
                  {hearAboutOptions.map((h) => <option key={h} value={h}>{h}</option>)}
                </select>
              </Field>
            </div>
          </div>

          {/* 07 */}
          <div>
            <SectionHeader n="07" title="Investor Confirmation" />
            <Checkbox
              checked={form.confirmed}
              onChange={() => setForm({ ...form, confirmed: !form.confirmed })}
              label="I confirm that the information provided is accurate and authorize Lokha Innovation to review my profile for suitable investment opportunities."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-transform hover:-translate-y-0.5"
            style={{ background: GOLD, color: NAVY }}
          >
            {status === 'sending' ? 'Submitting…' : 'Submit Investor Application'}
          </button>
        </form>
      </section>
    </div>
  );
}
