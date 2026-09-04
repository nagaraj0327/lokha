import { useState } from 'react';
import Modal from './Modal';
import { submitApplicationWithFiles } from '../services/applicationService';
import { useToast } from '../context/ToastContext';

const initial = {
  fullName: '',
  email: '',
  phone: '',
  linkedin: '',
  startupName: '',
  role: '',
  stage: '',
  targetCustomers: '',
  problem: '',
  spokenToCustomers: '',
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

export default function CustomerDiscoverySprintApplyModal({ open, onClose, eventName }) {
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
      fd.append('formType', 'customer-discovery-sprint-application');
      fd.append('program', eventName || 'Customer Discovery Sprint');
      Object.entries(form).forEach(([key, value]) => fd.append(key, value ?? ''));
      await submitApplicationWithFiles(fd);
      setStatus('sent');
      showToast('Application submitted successfully.');
    } catch (err) {
      setStatus('sent');
      showToast(err.message || 'Something went wrong, but we saved your details.', 'error');
    }
  };

  return (
    <Modal open={open} onClose={handleClose} labelledBy="customer-discovery-sprint-apply-heading">
      {status === 'sent' ? (
        <div className="p-8 md:p-14 text-center">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-signal/10 text-signal mb-6">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12.5 9.5 18 20 6" />
            </svg>
          </span>
          <h2 className="font-display text-2xl md:text-3xl mb-3">Thanks, {form.fullName.split(' ')[0] || 'founder'}.</h2>
          <p className="text-ink-700 max-w-sm mx-auto">
            Your application for the {eventName || 'Customer Discovery Sprint'} has been received. Our team reviews every application within 5 business days.
          </p>
          <button type="button" onClick={handleClose} className="btn-primary mt-8">
            Close
          </button>
        </div>
      ) : (
        <>
          <div className="sticky top-0 z-10 bg-paper border-b hairline px-6 md:px-10 pt-7 pb-5 flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-signal mb-3">Sprint Application</p>
              <h2 id="customer-discovery-sprint-apply-heading" className="font-display text-2xl md:text-[1.75rem] leading-tight max-w-md">
                Join the {eventName || 'Customer Discovery Sprint'}
              </h2>
              <p className="text-ink-700 text-sm mt-3 max-w-md leading-relaxed">
                Learn how to talk to customers, uncover meaningful patterns, and turn real conversations into validated insights for your startup.
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
                <label htmlFor="cds_hp_token">Leave this field empty</label>
                <input type="text" id="cds_hp_token" name="hp_token" tabIndex={-1} autoComplete="off" value={form.hp_token} onChange={onChange} />
              </div>

              <div>
                <p className={sectionLabelCls}>Your Details</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name" required>
                    <input required name="fullName" value={form.fullName} onChange={onChange} placeholder="Your full name" className={inputCls} />
                  </Field>
                  <Field label="Email Address" required>
                    <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="name@example.com" className={inputCls} />
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
                <p className={sectionLabelCls}>Startup Details</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Startup / Idea Name" required>
                    <input required name="startupName" value={form.startupName} onChange={onChange} placeholder="What's it called?" className={inputCls} />
                  </Field>
                  <Field label="Your Role" required>
                    <select required name="role" value={form.role} onChange={onChange} className={inputCls}>
                      <option value="" disabled>Select your role</option>
                      <option value="Founder">Founder</option>
                      <option value="Co-Founder">Co-Founder</option>
                      <option value="Product Lead">Product Lead</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                  <Field label="Current Stage" required>
                    <select required name="stage" value={form.stage} onChange={onChange} className={inputCls}>
                      <option value="" disabled>Select your stage</option>
                      <option value="Idea">Idea</option>
                      <option value="Early Validation">Early Validation</option>
                      <option value="MVP">MVP</option>
                      <option value="Early Stage">Early Stage</option>
                    </select>
                  </Field>
                </div>
              </div>

              <div>
                <p className={sectionLabelCls}>Customer Discovery</p>
                <div className="space-y-5">
                  <Field label="Who are your target customers?" required>
                    <textarea required name="targetCustomers" value={form.targetCustomers} onChange={onChange} rows={3} className={inputCls} />
                  </Field>
                  <Field label="What problem are you trying to validate?" required>
                    <textarea required name="problem" value={form.problem} onChange={onChange} rows={3} className={inputCls} />
                  </Field>
                  <Field label="Have you already spoken to potential customers?" required>
                    <select required name="spokenToCustomers" value={form.spokenToCustomers} onChange={onChange} className={inputCls}>
                      <option value="" disabled>Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </Field>
                  <Field label="What would you like to learn or validate during the Sprint?" required>
                    <textarea required name="learnGoal" value={form.learnGoal} onChange={onChange} rows={3} className={inputCls} />
                  </Field>
                </div>
              </div>

              <div>
                <p className={sectionLabelCls}>Optional</p>
                <Field label="Website / Project Link">
                  <input name="website" value={form.website} onChange={onChange} placeholder="https://" className={inputCls} />
                </Field>
              </div>
            </div>

            <div className="sticky bottom-0 bg-paper border-t hairline px-6 md:px-10 py-5 flex justify-end">
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full md:w-auto justify-center disabled:opacity-60">
                {status === 'sending' ? 'Submitting…' : 'Join the Next Sprint'}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
}
