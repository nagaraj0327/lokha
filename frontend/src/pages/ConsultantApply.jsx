import { useState } from 'react';
import Seo from '../seo/Seo';
import { images } from '../assets/media';
import { submitApplication } from '../services/applicationService';
import { useToast } from '../context/ToastContext';

const industries = [
  'Technology', 'Finance & Fintech', 'Healthcare', 'Education', 'Retail & E-commerce',
  'Manufacturing', 'Real Estate', 'Media & Entertainment', 'Agriculture', 'Energy & Sustainability',
  'Consulting & Professional Services', 'Other',
];

const experienceRanges = ['1–3 Years', '4–7 Years', '8–12 Years', '13–20 Years', '20+ Years'];

const consultingAreas = [
  'Business Strategy', 'Startup Advisory', 'Technology & Digital Transformation',
  'Product Development', 'AI & Innovation', 'Marketing & Brand Strategy',
  'Sales & Business Development', 'Finance & Fundraising', 'Operations & Process Optimization',
  'Leadership & Organizational Development', 'Legal & Compliance', 'Other',
];

const engagementModels = ['Project-Based', 'Advisory', 'Retainer', 'Short-Term Consulting', 'Long-Term Consulting'];
const engagementFormats = ['Virtual', 'In-Person', 'Hybrid'];
const orgPreferences = ['Early-Stage Startups', 'Growing Businesses', 'Established Companies', 'Founders & Entrepreneurs', 'Innovation Projects'];
const availabilityOptions = ['1–5 Hours / Month', '5–10 Hours / Month', '10–20 Hours / Month', '20+ Hours / Month'];
const workingLocations = ['Remote', 'On-Site', 'Both'];

const initial = {
  fullName: '', email: '', phone: '', location: '',
  designation: '', organization: '', industry: '', experience: '', linkedin: '', website: '',
  primaryArea: '', supportAreas: [],
  summary: '', challenges: '', valueBrought: '',
  engagementModel: '', engagementFormat: '', orgPreference: [],
  availability: '', workingLocation: '',
  motivation: '',
  confirmed: false,
  hp_token: '',
};

// Distinct premium palette for this page only — navy + brushed gold,
// separate from the site-wide ink/signal-orange theme.
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

export default function ConsultantApply() {
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
      await submitApplication({ ...form, formType: 'consultant-application' });
      setStatus('sent');
      showToast('Consultant application submitted.');
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
          <h1 className="font-display text-3xl md:text-4xl mb-6">Thank you for your interest in joining the Lokha Innovation Consultant Network.</h1>
          <p className="text-ink-700">
            Our team will review your professional profile and expertise. If your experience aligns with
            current or upcoming consulting opportunities, our team will contact you for the next stage.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Seo title="Book a Consultation" description="Join the Lokha Innovation Consultant Network and work with startups, founders, and growing businesses." />
      <style>{`.gold-focus:focus { border-color: ${GOLD} !important; box-shadow: 0 0 0 1px ${GOLD}; } .consultant-form .eyebrow { font-size: 0.92rem; letter-spacing: 0.04em; }`}</style>

      <section className="relative pt-[72px] text-paper overflow-hidden" style={{ background: `linear-gradient(160deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)` }}>
        <div className="absolute inset-0">
          <img src={images.bgm} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, ${NAVY} 0%, rgba(11,18,32,0.9) 55%, rgba(11,18,32,0.65) 100%)` }} />
        </div>
        <div className="container-x relative py-20 md:py-28 max-w-3xl">
          <p className="eyebrow mb-4" style={{ color: GOLD }}>Book a Consultation</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Bring Your Expertise. <span style={{ color: GOLD }}>Create Business Impact.</span>
          </h1>
          <p className="mt-6 text-paper/70 max-w-xl text-lg leading-relaxed">
            Join the Lokha Innovation Consultant Network and work with startups, founders, and growing
            businesses that need experienced guidance across strategy, technology, operations, finance,
            marketing, and business development.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-paper">
        <form onSubmit={onSubmit} className="container-x max-w-4xl space-y-16 consultant-form">
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
                <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="name@company.com" className={inputCls} />
              </Field>
              <Field label="Phone Number" required>
                <input required name="phone" value={form.phone} onChange={onChange} placeholder="+91 XXXXX XXXXX" className={inputCls} />
              </Field>
              <Field label="Location">
                <input name="location" value={form.location} onChange={onChange} placeholder="City, State, Country" className={inputCls} />
              </Field>
            </div>
          </div>

          {/* 02 */}
          <div>
            <SectionHeader n="02" title="Professional Profile" />
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Current Designation" required>
                <input required name="designation" value={form.designation} onChange={onChange} placeholder="e.g. CEO, Founder, Consultant, CTO, CFO" className={inputCls} />
              </Field>
              <Field label="Company / Organization" required>
                <input required name="organization" value={form.organization} onChange={onChange} placeholder="Enter your organization" className={inputCls} />
              </Field>
              <Field label="Industry / Sector" required>
                <select required name="industry" value={form.industry} onChange={onChange} className={inputCls}>
                  <option value="">Select your industry</option>
                  {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </Field>
              <Field label="Years of Professional Experience" required>
                <select required name="experience" value={form.experience} onChange={onChange} className={inputCls}>
                  <option value="">Select experience</option>
                  {experienceRanges.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </Field>
              <Field label="LinkedIn Profile" required>
                <input required type="url" name="linkedin" value={form.linkedin} onChange={onChange} placeholder="https://linkedin.com/in/your-profile" className={inputCls} />
              </Field>
              <Field label="Professional Website / Portfolio">
                <input type="url" name="website" value={form.website} onChange={onChange} placeholder="https://yourwebsite.com" className={inputCls} />
              </Field>
            </div>
          </div>

          {/* 03 */}
          <div>
            <SectionHeader n="03" title="Consulting Expertise" />
            <div className="grid gap-6">
              <Field label="Primary Consulting Area" required>
                <select required name="primaryArea" value={form.primaryArea} onChange={onChange} className={inputCls}>
                  <option value="">Select your primary area</option>
                  {consultingAreas.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </Field>
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Areas You Can Support</span>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {consultingAreas.map((area) => (
                    <Checkbox
                      key={area}
                      label={area}
                      checked={form.supportAreas.includes(area)}
                      onChange={() => toggleInArray('supportAreas', area)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 04 */}
          <div>
            <SectionHeader n="04" title="Consulting Profile" />
            <div className="grid gap-6">
              <Field label="Professional Summary" required full>
                <textarea required rows={4} name="summary" value={form.summary} onChange={onChange} placeholder="Briefly describe your professional background, key achievements, and consulting experience." className={inputCls} />
              </Field>
              <Field label="What Business Challenges Can You Help Solve?" required full>
                <textarea required rows={4} name="challenges" value={form.challenges} onChange={onChange} placeholder="Describe the types of business, operational, strategic, or technical challenges you can help organizations address." className={inputCls} />
              </Field>
              <Field label="Key Areas of Value You Bring" required full>
                <textarea required rows={4} name="valueBrought" value={form.valueBrought} onChange={onChange} placeholder="Describe the specific outcomes, capabilities, or expertise you can bring to startups and businesses." className={inputCls} />
              </Field>
            </div>
          </div>

          {/* 05 */}
          <div>
            <SectionHeader n="05" title="Engagement Preferences" />
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Preferred Engagement Model<span style={{ color: GOLD }}>*</span></span>
                <div className="space-y-3">
                  {engagementModels.map((m) => (
                    <Radio key={m} label={m} checked={form.engagementModel === m} onChange={() => setForm({ ...form, engagementModel: m })} />
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Preferred Engagement Format<span style={{ color: GOLD }}>*</span></span>
                <div className="space-y-3 mb-8">
                  {engagementFormats.map((m) => (
                    <Radio key={m} label={m} checked={form.engagementFormat === m} onChange={() => setForm({ ...form, engagementFormat: m })} />
                  ))}
                </div>
                <span className="eyebrow text-ink-700 block mb-4">Organizations You Prefer to Work With</span>
                <div className="space-y-3">
                  {orgPreferences.map((o) => (
                    <Checkbox key={o} label={o} checked={form.orgPreference.includes(o)} onChange={() => toggleInArray('orgPreference', o)} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 06 */}
          <div>
            <SectionHeader n="06" title="Availability" />
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Availability<span style={{ color: GOLD }}>*</span></span>
                <div className="space-y-3">
                  {availabilityOptions.map((a) => (
                    <Radio key={a} label={a} checked={form.availability === a} onChange={() => setForm({ ...form, availability: a })} />
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow text-ink-700 block mb-4">Preferred Working Location</span>
                <div className="space-y-3">
                  {workingLocations.map((w) => (
                    <Radio key={w} label={w} checked={form.workingLocation === w} onChange={() => setForm({ ...form, workingLocation: w })} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 07 */}
          <div>
            <SectionHeader n="07" title="Your Motivation" />
            <Field label="Why would you like to join the Lokha Innovation Consultant Network?" required full>
              <textarea required rows={4} name="motivation" value={form.motivation} onChange={onChange} placeholder="Tell us what motivates you to work with founders, startups, and businesses through Lokha Innovation." className={inputCls} />
            </Field>
          </div>

          {/* 08 */}
          <div>
            <SectionHeader n="08" title="Professional Confirmation" />
            <Checkbox
              checked={form.confirmed}
              onChange={() => setForm({ ...form, confirmed: !form.confirmed })}
              label="I confirm that the information provided is accurate and authorize Lokha Innovation to review my profile for suitable consulting opportunities."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-transform hover:-translate-y-0.5"
            style={{ background: GOLD, color: NAVY }}
          >
            {status === 'sending' ? 'Submitting…' : 'Submit Consultant Application'}
          </button>
        </form>
      </section>
    </div>
  );
}
