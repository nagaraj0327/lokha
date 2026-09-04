import { useState } from 'react';
import Modal from './Modal';
import { submitApplicationWithFiles } from '../services/applicationService';
import { useToast } from '../context/ToastContext';

const initial = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  topic: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
  hp_token: '', // honeypot
};

const labelCls = 'block text-sm font-semibold text-ink-900 mb-2';
const inputCls =
  'w-full bg-ink-900/[0.045] border border-transparent rounded-xl px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 focus:outline-none focus:border-signal focus:bg-white transition-colors';

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

export default function ConsultationBookingModal({ open, onClose }) {
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
      fd.append('formType', 'consultation-booking');
      fd.append('program', 'Book a Consultation');
      Object.entries(form).forEach(([key, value]) => fd.append(key, value ?? ''));
      await submitApplicationWithFiles(fd);
      setStatus('sent');
      showToast('Consultation request submitted successfully.');
    } catch (err) {
      setStatus('sent');
      showToast(err.message || 'Something went wrong, but we saved your details.', 'error');
    }
  };

  return (
    <Modal open={open} onClose={handleClose} labelledBy="consultation-booking-heading">
      {status === 'sent' ? (
        <div className="p-8 md:p-14 text-center">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-signal/10 text-signal mb-6">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12.5 9.5 18 20 6" />
            </svg>
          </span>
          <h2 className="font-display text-2xl md:text-3xl mb-3">Thanks, {form.fullName.split(' ')[0] || 'there'}.</h2>
          <p className="text-ink-700 max-w-sm mx-auto">
            Your consultation request has been received. Our team will confirm a time that works over email.
          </p>
          <button type="button" onClick={handleClose} className="btn-primary mt-8">
            Close
          </button>
        </div>
      ) : (
        <>
          <div className="sticky top-0 z-10 bg-paper border-b hairline px-6 md:px-10 pt-7 pb-5 flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-signal mb-3">Book a Consultation</p>
              <h2 id="consultation-booking-heading" className="font-display text-2xl md:text-[1.75rem] leading-tight max-w-md">
                Book a Consultation
              </h2>
              <p className="text-ink-700 text-sm mt-3 max-w-md leading-relaxed">
                Schedule a one-on-one meeting with our team.
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
            <div className="px-6 md:px-10 py-8 space-y-5">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="consult_hp_token">Leave this field empty</label>
                <input type="text" id="consult_hp_token" name="hp_token" tabIndex={-1} autoComplete="off" value={form.hp_token} onChange={onChange} />
              </div>

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
                <Field label="Company / Startup">
                  <input name="company" value={form.company} onChange={onChange} placeholder="Where you work" className={inputCls} />
                </Field>
              </div>

              <Field label="What would you like to discuss?" required>
                <textarea required name="topic" value={form.topic} onChange={onChange} rows={3} className={inputCls} />
              </Field>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Preferred Date">
                  <input type="date" name="preferredDate" value={form.preferredDate} onChange={onChange} className={inputCls} />
                </Field>
                <Field label="Preferred Time">
                  <input type="time" name="preferredTime" value={form.preferredTime} onChange={onChange} className={inputCls} />
                </Field>
              </div>

              <Field label="Message">
                <textarea name="message" value={form.message} onChange={onChange} rows={3} className={inputCls} />
              </Field>
            </div>

            <div className="sticky bottom-0 bg-paper border-t hairline px-6 md:px-10 py-5 flex justify-end">
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full md:w-auto justify-center disabled:opacity-60">
                {status === 'sending' ? 'Submitting…' : 'Request a Consultation'}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
}
