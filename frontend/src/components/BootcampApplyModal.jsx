import { useState } from 'react';
import Modal from './Modal';
import { submitApplicationWithFiles } from '../services/applicationService';
import { useToast } from '../context/ToastContext';

const initial = {
  fullName: '',
  email: '',
  phone: '',
  startupName: '',
  role: '',
  startupStage: '',
  problem: '',
  ideaSummary: '',
  goal: '',
  website: '',
  pitchDeck: null,
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

export default function BootcampApplyModal({ open, onClose, eventName }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const { showToast } = useToast();

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onFileChange = (e) => setForm((f) => ({ ...f, pitchDeck: e.target.files?.[0] || null }));

  const handleClose = () => {
    onClose();
    // reset shortly after close so the closing animation isn't affected
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
      fd.append('formType', 'bootcamp-application');
      fd.append('program', eventName || 'Founders Fundamentals Bootcamp');
      Object.entries(form).forEach(([key, value]) => {
        if (value instanceof File) fd.append(key, value);
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

  return (
    <Modal open={open} onClose={handleClose} labelledBy="bootcamp-apply-heading">
      {status === 'sent' ? (
        <div className="p-8 md:p-14 text-center">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-signal/10 text-signal mb-6">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12.5 9.5 18 20 6" />
            </svg>
          </span>
          <h2 className="font-display text-2xl md:text-3xl mb-3">Thanks, {form.fullName.split(' ')[0] || 'founder'}.</h2>
          <p className="text-ink-700 max-w-sm mx-auto">
            Your application for the {eventName || 'Bootcamp'} has been received. Our team reviews every application within 5 business days.
          </p>
          <button type="button" onClick={handleClose} className="btn-primary mt-8">
            Close
          </button>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="sticky top-0 z-10 bg-paper border-b hairline px-6 md:px-10 pt-7 pb-5 flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-signal mb-3">Bootcamp Application</p>
              <h2 id="bootcamp-apply-heading" className="font-display text-2xl md:text-[1.75rem] leading-tight max-w-md">
                Apply for the {eventName || 'Founders Fundamentals Bootcamp'}
              </h2>
              <p className="text-ink-700 text-sm mt-3 max-w-md leading-relaxed">
                Ready to turn your idea into a stronger startup? Tell us about yourself, your idea, and what you want to achieve through the Bootcamp.
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
              {/* Honeypot */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="bootcamp_hp_token">Leave this field empty</label>
                <input type="text" id="bootcamp_hp_token" name="hp_token" tabIndex={-1} autoComplete="off" value={form.hp_token} onChange={onChange} />
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
                      <option value="Aspiring Founder">Aspiring Founder</option>
                    </select>
                  </Field>
                  <Field label="Startup Stage" required>
                    <select required name="startupStage" value={form.startupStage} onChange={onChange} className={inputCls}>
                      <option value="" disabled>Select your stage</option>
                      <option value="Idea">Idea</option>
                      <option value="Validation">Validation</option>
                      <option value="MVP">MVP</option>
                      <option value="Early Stage">Early Stage</option>
                    </select>
                  </Field>
                </div>
              </div>

              <div>
                <p className={sectionLabelCls}>About Your Startup</p>
                <div className="space-y-5">
                  <Field label="What problem are you solving?" required>
                    <textarea required name="problem" value={form.problem} onChange={onChange} rows={3} className={inputCls} />
                  </Field>
                  <Field label="Tell us about your idea or startup." required>
                    <textarea required name="ideaSummary" value={form.ideaSummary} onChange={onChange} rows={3} className={inputCls} />
                  </Field>
                  <Field label="What do you want to achieve from this Bootcamp?" required>
                    <textarea required name="goal" value={form.goal} onChange={onChange} rows={3} className={inputCls} />
                  </Field>
                </div>
              </div>

              <div>
                <p className={sectionLabelCls}>Optional</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Website / LinkedIn">
                    <input name="website" value={form.website} onChange={onChange} placeholder="https://" className={inputCls} />
                  </Field>
                  <Field label="Pitch Deck / Document" hint="PDF or PPT, up to 10MB">
                    <input type="file" name="pitchDeck" accept=".pdf,.ppt,.pptx,.doc,.docx" onChange={onFileChange} className={`${inputCls} py-2.5 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-signal/10 file:text-signal file:text-xs file:font-semibold`} />
                  </Field>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-paper border-t hairline px-6 md:px-10 py-5 flex justify-end">
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full md:w-auto justify-center disabled:opacity-60">
                {status === 'sending' ? 'Submitting…' : 'Apply for the Bootcamp'}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
}
