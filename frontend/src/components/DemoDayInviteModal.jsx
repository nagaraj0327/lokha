import { useState } from 'react';
import Modal from './Modal';
import { submitApplicationWithFiles } from '../services/applicationService';
import { useToast } from '../context/ToastContext';

const initial = {
  fullName: '',
  email: '',
  phone: '',
  linkedin: '',
  organization: '',
  role: '',
  interest: '',
  notes: '',
  hp_token: '', // honeypot
};

const labelCls = 'block text-sm font-semibold text-ink-900 mb-2';
const inputCls =
  'w-full bg-ink-900/[0.045] border border-transparent rounded-xl px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 focus:outline-none focus:border-signal focus:bg-white transition-colors';
const sectionLabelCls = 'eyebrow text-signal mb-5';

function Field({ label, required, children, hint }) {
  return (
    <label className="block">
      <span className={labelCls}>
        {label}
        {required && <span className="text-signal"> *</span>}
      </span>
      {children}
      {hint && <span className="block text-xs text-ink-700/50 mt-1.5">{hint}</span>}
    </label>
  );
}

export default function DemoDayInviteModal({ open, onClose, eventName }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const { showToast } = useToast();

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm(initial);
      setStatus('idle');
    }, 200);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const fd = new FormData();
      fd.append('formType', 'demo-day-invite-request');
      fd.append('program', eventName || 'Demo Day — Cohort 9');
      Object.entries(form).forEach(([key, value]) => fd.append(key, value ?? ''));
      await submitApplicationWithFiles(fd);
      setStatus('sent');
      showToast('Invite request submitted successfully.');
    } catch (err) {
      setStatus('sent');
      showToast(err.message || 'Something went wrong, but we saved your details.', 'error');
    }
  };

  return (
    <Modal open={open} onClose={handleClose} labelledBy="demo-day-invite-heading">
      {status === 'sent' ? (
        <div className="p-8 md:p-14 text-center">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-signal/10 text-signal mb-6">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12.5 9.5 18 20 6" />
            </svg>
          </span>
          <h2 className="font-display text-2xl md:text-3xl mb-3">Thanks, {form.fullName.split(' ')[0] || 'there'}.</h2>
          <p className="text-ink-700 max-w-sm mx-auto">
            Your invite request for {eventName || 'Demo Day'} has been received. Our team will follow up shortly with next steps.
          </p>
          <button type="button" onClick={handleClose} className="btn-primary mt-8">
            Close
          </button>
        </div>
      ) : (
        <>
          <div className="sticky top-0 z-10 bg-paper border-b hairline px-6 md:px-10 pt-7 pb-5 flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-signal mb-3">Demo Day Invite</p>
              <h2 id="demo-day-invite-heading" className="font-display text-2xl md:text-[1.75rem] leading-tight max-w-md">
                Request an Invite to {eventName || 'Demo Day'}
              </h2>
              <p className="text-ink-700 text-sm mt-3 max-w-md leading-relaxed">
                Join a curated room of investors, corporate partners, and ecosystem leaders as Cohort 9 startups present their businesses and growth opportunities.
              </p>
            </div>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="shrink-0 w-10 h-10 rounded-full border hairline flex items-center justify-center text-ink-900 hover:border-signal hover:text-signal transition-colors"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <form onSubmit={onSubmit}>
            <div className="px-6 md:px-10 py-8 space-y-10">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="demoday_hp_token">Leave this field empty</label>
                <input type="text" id="demoday_hp_token" name="hp_token" tabIndex={-1} autoComplete="off" value={form.hp_token} onChange={onChange} />
              </div>

              <div>
                <p className={sectionLabelCls}>Your Details</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name" required>
                    <input required name="fullName" value={form.fullName} onChange={onChange} placeholder="Your full name" className={inputCls} />
                  </Field>
                  <Field label="Work Email" required>
                    <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="name@company.com" className={inputCls} />
                  </Field>
                  <Field label="Phone Number">
                    <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91 98765 43210" className={inputCls} />
                  </Field>
                  <Field label="LinkedIn Profile">
                    <input name="linkedin" value={form.linkedin} onChange={onChange} placeholder="https://linkedin.com/in/…" className={inputCls} />
                  </Field>
                </div>
              </div>

              <div>
                <p className={sectionLabelCls}>Organization</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Organization / Company / Fund" required>
                    <input required name="organization" value={form.organization} onChange={onChange} placeholder="Where you work" className={inputCls} />
                  </Field>
                  <Field label="Your Role" required>
                    <select required name="role" value={form.role} onChange={onChange} className={inputCls}>
                      <option value="" disabled>Select your role</option>
                      <option value="Angel Investor">Angel Investor</option>
                      <option value="VC / Investment Firm">VC / Investment Firm</option>
                      <option value="Corporate Partner">Corporate Partner</option>
                      <option value="Founder">Founder</option>
                      <option value="Ecosystem Partner">Ecosystem Partner</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                </div>
              </div>

              <div>
                <p className={sectionLabelCls}>Interest</p>
                <div className="space-y-5">
                  <Field label="What are you interested in exploring at Demo Day?" required>
                    <select required name="interest" value={form.interest} onChange={onChange} className={inputCls}>
                      <option value="" disabled>Select an option</option>
                      <option value="Investment Opportunities">Investment Opportunities</option>
                      <option value="Strategic Partnerships">Strategic Partnerships</option>
                      <option value="Startup Collaboration">Startup Collaboration</option>
                      <option value="Ecosystem Connections">Ecosystem Connections</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                  <Field label="Anything specific you'd like us to know?">
                    <textarea name="notes" value={form.notes} onChange={onChange} rows={3} className={inputCls} />
                  </Field>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-paper border-t hairline px-6 md:px-10 py-5 flex justify-end">
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full md:w-auto justify-center disabled:opacity-60">
                {status === 'sending' ? 'Submitting…' : 'Request an Invite'}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
}
