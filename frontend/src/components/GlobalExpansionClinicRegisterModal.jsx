import { useState } from 'react';
import Modal from './Modal';
import { submitApplicationWithFiles } from '../services/applicationService';
import { useToast } from '../context/ToastContext';

const initial = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  role: '',
  currentMarket: '',
  targetMarket: '',
  expansionPlan: '',
  challenge: '',
  learnGoal: '',
  website: '',
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

export default function GlobalExpansionClinicRegisterModal({ open, onClose, eventName }) {
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
      fd.append('formType', 'global-expansion-clinic-registration');
      fd.append('program', eventName || 'Global Expansion Clinic');
      Object.entries(form).forEach(([key, value]) => fd.append(key, value ?? ''));
      await submitApplicationWithFiles(fd);
      setStatus('sent');
      showToast('Registration submitted successfully.');
    } catch (err) {
      setStatus('sent');
      showToast(err.message || 'Something went wrong, but we saved your details.', 'error');
    }
  };

  return (
    <Modal open={open} onClose={handleClose} labelledBy="global-expansion-clinic-register-heading">
      {status === 'sent' ? (
        <div className="p-8 md:p-14 text-center">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-signal/10 text-signal mb-6">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12.5 9.5 18 20 6" />
            </svg>
          </span>
          <h2 className="font-display text-2xl md:text-3xl mb-3">Thanks, {form.fullName.split(' ')[0] || 'there'}.</h2>
          <p className="text-ink-700 max-w-sm mx-auto">
            Your registration for the {eventName || 'Global Expansion Clinic'} has been received. We'll send joining details closer to the session.
          </p>
          <button type="button" onClick={handleClose} className="btn-primary mt-8">
            Close
          </button>
        </div>
      ) : (
        <>
          <div className="sticky top-0 z-10 bg-paper border-b hairline px-6 md:px-10 pt-7 pb-5 flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-signal mb-3">Clinic Registration</p>
              <h2 id="global-expansion-clinic-register-heading" className="font-display text-2xl md:text-[1.75rem] leading-tight max-w-md">
                Register for the {eventName || 'Global Expansion Clinic'}
              </h2>
              <p className="text-ink-700 text-sm mt-3 max-w-md leading-relaxed">
                Get practical guidance on entering new markets, from legal setup and localization to go-to-market strategy and avoiding common expansion challenges.
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
                <label htmlFor="gec_hp_token">Leave this field empty</label>
                <input type="text" id="gec_hp_token" name="hp_token" tabIndex={-1} autoComplete="off" value={form.hp_token} onChange={onChange} />
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
                </div>
              </div>

              <div>
                <p className={sectionLabelCls}>Company Details</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Startup / Company Name" required>
                    <input required name="companyName" value={form.companyName} onChange={onChange} placeholder="Your company" className={inputCls} />
                  </Field>
                  <Field label="Your Role" required>
                    <input required name="role" value={form.role} onChange={onChange} placeholder="e.g. Founder, COO" className={inputCls} />
                  </Field>
                  <Field label="Current Market / Country" required>
                    <input required name="currentMarket" value={form.currentMarket} onChange={onChange} placeholder="Where you operate today" className={inputCls} />
                  </Field>
                  <Field label="Target Market / Country" required>
                    <input required name="targetMarket" value={form.targetMarket} onChange={onChange} placeholder="Where you're expanding to" className={inputCls} />
                  </Field>
                </div>
              </div>

              <div>
                <p className={sectionLabelCls}>Expansion Goals</p>
                <div className="space-y-5">
                  <Field label="What are you planning to expand into?" required>
                    <textarea required name="expansionPlan" value={form.expansionPlan} onChange={onChange} rows={3} className={inputCls} />
                  </Field>
                  <Field label="What is your biggest challenge in entering a new market?" required>
                    <textarea required name="challenge" value={form.challenge} onChange={onChange} rows={3} className={inputCls} />
                  </Field>
                  <Field label="What would you like to learn from this clinic?" required>
                    <textarea required name="learnGoal" value={form.learnGoal} onChange={onChange} rows={3} className={inputCls} />
                  </Field>
                </div>
              </div>

              <div>
                <p className={sectionLabelCls}>Optional</p>
                <Field label="Website / LinkedIn Profile">
                  <input name="website" value={form.website} onChange={onChange} placeholder="https://" className={inputCls} />
                </Field>
              </div>
            </div>

            <div className="sticky bottom-0 bg-paper border-t hairline px-6 md:px-10 py-5 flex justify-end">
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full md:w-auto justify-center disabled:opacity-60">
                {status === 'sending' ? 'Submitting…' : 'Register for the Clinic'}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
}
