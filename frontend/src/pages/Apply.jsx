import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Seo from '../seo/Seo';
import { images } from '../assets/media';
import { submitApplicationWithFiles } from '../services/applicationService';
import { useToast } from '../context/ToastContext';

const SUPPORT_OPTIONS = ['Mentorship', 'Incubation', 'Acceleration', 'Funding', 'Market Access', 'Partnerships'];

const initial = {
  // Personal Details
  fullName: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  linkedin: '',
  occupation: '',
  // Founder & Startup
  startupName: '',
  founderName: '',
  coFounderDetails: '',
  website: '',
  industry: '',
  startupStage: '',
  // The Idea
  problemStatement: '',
  solution: '',
  targetMarket: '',
  businessModel: '',
  revenueModel: '',
  teamSize: '',
  // Traction & Funding
  currentTraction: '',
  fundingRaised: '',
  mvpLink: '',
  pitchDeck: null,
  demoVideo: null,
  // Support Needed
  supportNeeded: [],
  whyLokha: '',
  hp_token: '', // honeypot — real users never see or fill this
};

const labelCls = 'block text-sm font-semibold text-ink-900 mb-2';
const inputCls =
  'w-full bg-ink-900/[0.045] border border-transparent rounded-xl px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 focus:outline-none focus:border-signal focus:bg-white transition-colors';
const sectionLabelCls = 'eyebrow text-signal mb-6';

function Field({ label, required, children, full, hint }) {
  return (
    <label className={`block ${full ? 'md:col-span-2' : ''}`}>
      <span className={labelCls}>
        {label}
        {required && <span className="text-signal"> *</span>}
      </span>
      {children}
      {hint && <span className="block text-xs text-ink-700/50 mt-1.5">{hint}</span>}
    </label>
  );
}

export default function Apply() {
  const [form, setForm] = useState(initial);
  const [founderNameTouched, setFounderNameTouched] = useState(false);
  const [status, setStatus] = useState('idle');
  const { showToast } = useToast();

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => {
      const next = { ...f, [name]: value };
      // Keep Founder Name in sync with Full Name until the person edits it themselves
      if (name === 'fullName' && !founderNameTouched) next.founderName = value;
      return next;
    });
  };

  const onFounderNameChange = (e) => {
    setFounderNameTouched(true);
    setForm((f) => ({ ...f, founderName: e.target.value }));
  };

  const onFileChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.files?.[0] || null }));

  const toggleSupport = (option) => {
    setForm((f) => ({
      ...f,
      supportNeeded: f.supportNeeded.includes(option)
        ? f.supportNeeded.filter((s) => s !== option)
        : [...f.supportNeeded, option],
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.supportNeeded.length === 0) {
      showToast('Please select at least one type of support you need.', 'error');
      return;
    }
    setStatus('sending');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value instanceof File) fd.append(key, value);
        else if (key === 'supportNeeded') fd.append(key, value.join(', '));
        else fd.append(key, value ?? '');
      });
      await submitApplicationWithFiles(fd);
      setStatus('sent');
      showToast('Application submitted successfully.');
    } catch (err) {
      setStatus('sent');
      showToast(err.message || 'Something went wrong, but we saved your details.', 'error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="pt-[72px] min-h-[70vh] flex items-center bg-paper">
        <div className="container-x text-center py-24">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-signal/10 text-signal mb-6">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12.5 9.5 18 20 6" />
            </svg>
          </span>
          <p className="eyebrow text-signal mb-4">Application Received</p>
          <h1 className="font-display text-4xl md:text-5xl mb-6">Thank you for applying to LOKHA Innovation.</h1>
          <p className="text-ink-700 max-w-md mx-auto">
            Our team will review your application and get in touch with you soon
            {form.email ? <> at <span className="text-ink-900 font-medium">{form.email}</span></> : ''}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Seo title="Apply Now" description="Apply to Lokha Innovation's startup incubator programs — free, and takes about 10 minutes." />
      <PageHeader
        eyebrow="Apply Now"
        title="Apply to LOKHA Innovation"
        description="Tell us about yourself, your startup, the problem you're solving, and where you are in your journey. Our team will review your application and connect with you if there's a fit."
        image={images.bgq}
      />

      <section className="py-16 md:py-24 bg-paper">
        <form onSubmit={onSubmit} className="container-x max-w-4xl space-y-14">
          {/* Honeypot — hidden from real users via CSS + off-screen position; bots that auto-fill every field trip it */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="hp_token">Leave this field empty</label>
            <input type="text" id="hp_token" name="hp_token" tabIndex={-1} autoComplete="off" value={form.hp_token} onChange={onChange} />
          </div>

          <div>
            <p className={sectionLabelCls}>Personal Details</p>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full Name" required>
                <input required name="fullName" value={form.fullName} onChange={onChange} placeholder="Your full name" className={inputCls} />
              </Field>
              <Field label="Email Address" required>
                <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="name@example.com" className={inputCls} />
              </Field>
              <Field label="Phone Number" required>
                <input required type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91 98765 43210" className={inputCls} />
              </Field>
              <Field label="Country" required>
                <input required name="country" value={form.country} onChange={onChange} className={inputCls} />
              </Field>
              <Field label="City">
                <input name="city" value={form.city} onChange={onChange} className={inputCls} />
              </Field>
              <Field label="LinkedIn Profile">
                <input name="linkedin" value={form.linkedin} onChange={onChange} placeholder="https://linkedin.com/in/…" className={inputCls} />
              </Field>
              <Field label="Current Occupation / Role" required full>
                <input required name="occupation" value={form.occupation} onChange={onChange} className={inputCls} />
              </Field>
            </div>
          </div>

          <div>
            <p className={sectionLabelCls}>Founder &amp; Startup</p>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Startup Name" required>
                <input required name="startupName" value={form.startupName} onChange={onChange} className={inputCls} />
              </Field>
              <Field label="Founder Name" required hint="Auto-filled from your full name — edit if different.">
                <input required name="founderName" value={form.founderName} onChange={onFounderNameChange} className={inputCls} />
              </Field>
              <Field label="Co-Founder Details" full>
                <input name="coFounderDetails" value={form.coFounderDetails} onChange={onChange} placeholder="Name, role" className={inputCls} />
              </Field>
              <Field label="Website">
                <input name="website" value={form.website} onChange={onChange} placeholder="https://" className={inputCls} />
              </Field>
              <Field label="Industry" required>
                <input required name="industry" value={form.industry} onChange={onChange} className={inputCls} />
              </Field>
              <Field label="Startup Stage" required full>
                <select required name="startupStage" value={form.startupStage} onChange={onChange} className={inputCls}>
                  <option value="" disabled>Select your stage</option>
                  <option value="Idea">Idea</option>
                  <option value="Validation">Validation</option>
                  <option value="Pre-Incubation">Pre-Incubation</option>
                  <option value="Incubation">Incubation</option>
                  <option value="Acceleration">Acceleration</option>
                </select>
              </Field>
            </div>
          </div>

          <div>
            <p className={sectionLabelCls}>The Idea</p>
            <div className="grid gap-5">
              <Field label="Problem Statement" required full>
                <textarea required rows={3} name="problemStatement" value={form.problemStatement} onChange={onChange} className={inputCls} />
              </Field>
              <Field label="Solution" required full>
                <textarea required rows={3} name="solution" value={form.solution} onChange={onChange} className={inputCls} />
              </Field>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Target Market" required>
                  <input required name="targetMarket" value={form.targetMarket} onChange={onChange} className={inputCls} />
                </Field>
                <Field label="Business Model">
                  <input name="businessModel" value={form.businessModel} onChange={onChange} className={inputCls} />
                </Field>
                <Field label="Revenue Model">
                  <input name="revenueModel" value={form.revenueModel} onChange={onChange} className={inputCls} />
                </Field>
                <Field label="Team Size">
                  <input name="teamSize" value={form.teamSize} onChange={onChange} className={inputCls} />
                </Field>
              </div>
            </div>
          </div>

          <div>
            <p className={sectionLabelCls}>Traction &amp; Funding</p>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Current Traction" full>
                <textarea rows={2} name="currentTraction" value={form.currentTraction} onChange={onChange} placeholder="Users, revenue, pilots, waitlist…" className={inputCls} />
              </Field>
              <Field label="Funding Raised">
                <input name="fundingRaised" value={form.fundingRaised} onChange={onChange} placeholder="e.g. Pre-Seed, $50K" className={inputCls} />
              </Field>
              <Field label="MVP / Product Link">
                <input name="mvpLink" value={form.mvpLink} onChange={onChange} placeholder="https://" className={inputCls} />
              </Field>
              <Field label="Pitch Deck Upload" hint="PDF or PPT, up to 10MB">
                <input type="file" name="pitchDeck" accept=".pdf,.ppt,.pptx" onChange={onFileChange} className={`${inputCls} py-2.5 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-signal/10 file:text-signal file:text-xs file:font-semibold`} />
              </Field>
              <Field label="Demo Video" hint="MP4 or a link works too">
                <input type="file" name="demoVideo" accept="video/*" onChange={onFileChange} className={`${inputCls} py-2.5 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-signal/10 file:text-signal file:text-xs file:font-semibold`} />
              </Field>
            </div>
          </div>

          <div>
            <p className={sectionLabelCls}>Support Needed</p>
            <div className="space-y-5">
              <div>
                <span className={labelCls}>
                  What support are you looking for?<span className="text-signal"> *</span>
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {SUPPORT_OPTIONS.map((option) => {
                    const active = form.supportNeeded.includes(option);
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => toggleSupport(option)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                          active
                            ? 'bg-signal/10 border-signal text-signal'
                            : 'bg-ink-900/[0.045] border-transparent text-ink-700 hover:border-ink-900/15'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
              <Field label="Why are you interested in LOKHA Innovation?">
                <textarea rows={3} name="whyLokha" value={form.whyLokha} onChange={onChange} className={inputCls} />
              </Field>
            </div>
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full md:w-auto justify-center disabled:opacity-60">
            {status === 'sending' ? 'Submitting…' : 'Submit Application'}
          </button>
        </form>
      </section>
    </div>
  );
}
