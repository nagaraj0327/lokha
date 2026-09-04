import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { programs } from '../config/content.config';
import { formConfigs } from '../config/forms.config';
import { images } from '../assets/media';
import { submitApplicationWithFiles } from '../services/applicationService';
import { useToast } from '../context/ToastContext';
import Seo from '../seo/Seo';

const inputCls = 'w-full border border-ink-800/15 rounded-md px-4 py-3.5 bg-white focus:outline-none focus:border-signal focus:ring-1 focus:ring-signal transition-colors text-ink-900';
const labelCls = 'eyebrow text-ink-700 block mb-2';
const requiredMark = <span className="text-signal">*</span>;

function buildInitialState(config) {
  const state = { agree: false, hp_token: '' }; // hp_token is the honeypot — real users never see it
  config.sections.forEach((section) => {
    section.fields.forEach((f) => {
      if (f.type === 'checkboxGroup') state[f.name] = [];
      else if (f.type === 'file') state[f.name] = null;
      else state[f.name] = '';
    });
  });
  return state;
}

function Field({ field, form, onChange, onFileChange }) {
  const { name, label, type, required, options } = field;

  if (type === 'programSelect') {
    return (
      <label className="block">
        <span className={labelCls}>{label}</span>
        <select name={name} value={form[name]} onChange={onChange} className={inputCls}>
          {programs.map((p) => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
        </select>
      </label>
    );
  }

  if (type === 'text' || type === 'email' || type === 'tel') {
    return (
      <label className="block">
        <span className={labelCls}>{label}{required ? <> {requiredMark}</> : null}</span>
        <input required={required} type={type} name={name} value={form[name]} onChange={onChange} className={inputCls} />
      </label>
    );
  }

  if (type === 'textarea') {
    return (
      <label className="block">
        <span className={labelCls}>{label}</span>
        <textarea rows={4} name={name} value={form[name]} onChange={onChange} className={inputCls} />
      </label>
    );
  }

  if (type === 'radio') {
    return (
      <fieldset>
        <legend className={labelCls}>{label}</legend>
        <div className="flex gap-6 mt-2">
          {['Yes', 'No'].map((v) => (
            <label key={v} className="flex items-center gap-2 text-ink-800 cursor-pointer">
              <input
                type="radio"
                name={name}
                value={v}
                checked={form[name] === v}
                onChange={onChange}
                className="accent-signal w-4 h-4"
              />
              {v}
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  if (type === 'checkboxGroup') {
    return (
      <div>
        <p className={labelCls}>Select all that apply</p>
        <div className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-3 text-ink-800 cursor-pointer">
              <input
                type="checkbox"
                name={name}
                value={opt}
                checked={form[name].includes(opt)}
                onChange={onChange}
                className="accent-signal w-4 h-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'file') {
    return (
      <label className="block">
        <span className={labelCls}>{label}</span>
        <input type="file" name={name} onChange={onFileChange} className={`${inputCls} file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-ink-900 file:text-paper file:text-sm file:font-medium`} />
        {form[name] && <p className="text-xs text-ink-700 mt-1.5">Selected: {form[name].name}</p>}
      </label>
    );
  }

  return null;
}

export default function ProgramApply() {
  const { programId } = useParams();
  const program = programs.find((p) => p.id === programId);
  const config = formConfigs[programId];

  const [form, setForm] = useState(() =>
    config ? { ...buildInitialState(config), currentStage: program?.name || '' } : {}
  );
  const [status, setStatus] = useState('idle');
  const { showToast } = useToast();

  if (!program || !config) return <Navigate to="/programs" replace />;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name !== 'agree') {
      setForm((f) => ({
        ...f,
        [name]: checked ? [...f[name], value] : f[name].filter((s) => s !== value),
      }));
    } else if (type === 'checkbox') {
      setForm((f) => ({ ...f, [name]: checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const onFileChange = (e) => {
    const { name, files } = e.target;
    setForm((f) => ({ ...f, [name]: files?.[0] || null }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const fd = new FormData();
      fd.append('program', program.name);
      Object.entries(form).forEach(([key, value]) => {
        if (value instanceof File) fd.append(key, value);
        else if (Array.isArray(value)) fd.append(key, value.join(', '));
        else fd.append(key, value ?? '');
      });

      await submitApplicationWithFiles(fd);
      setStatus('sent');
      showToast(`Application to ${program.name} submitted.`);
    } catch (err) {
      setStatus('sent');
      showToast(err.message || 'Something went wrong, but we saved your details.', 'error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="pt-[72px] min-h-[70vh] flex items-center bg-paper">
        <div className="container-x text-center py-24">
          <p className="eyebrow text-signal mb-4">Application Received</p>
          <h1 className="font-display text-4xl md:text-5xl mb-6">Thanks, {(form.fullName || '').split(' ')[0] || 'founder'}.</h1>
          <p className="text-ink-700 max-w-md mx-auto">
            Your application to <strong>{program.name}</strong> is in. Our program team reviews every
            application within 5 business days and will email {form.email || 'you'} with next steps.
          </p>
          <Link to="/programs" className="btn-ghost mt-8 inline-flex">Back to Programs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-paper min-h-screen pt-[72px]">
      <Seo title={`${program.name} Application`} description={`Apply to Lokha Innovation's ${program.name} program.`} />
      {/* Colorful geometric banner */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-moss-500 via-moss-400 to-signal-500">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
          <polygon points="0,200 160,40 320,200" fill="rgba(11,13,12,0.10)" />
          <polygon points="220,200 400,20 580,200" fill="rgba(11,13,12,0.14)" />
          <polygon points="480,200 660,60 800,200" fill="rgba(246,244,238,0.10)" />
          <polygon points="620,200 800,80 800,200" fill="rgba(255,90,31,0.18)" />
        </svg>
      </div>

      <div className="container-x">
        <div className="max-w-3xl mx-auto -mt-20 md:-mt-24 relative">
          <div className="bg-paper rounded-t-2xl shadow-2xl border border-ink-800/10 px-6 sm:px-12 pt-10 pb-8">
            <div className="flex items-center gap-3 mb-8">
              <img src={images.logo} alt="Lokha Innovation" className="w-10 h-10 object-contain" />
              <span className="font-display text-lg text-ink-900">Lokha Innovation</span>
            </div>
            <p className="eyebrow text-signal mb-3">{program.n} · {program.stage}</p>
            <h1 className="font-display text-3xl md:text-5xl leading-[1.1] text-ink-900">{program.name} Application</h1>
            <p className="mt-4 text-ink-700 text-lg">{program.short}</p>
          </div>

          <div className="bg-paper rounded-b-2xl shadow-2xl border border-t-0 border-ink-800/10 px-6 sm:px-12 py-10 md:py-14">
            <form onSubmit={onSubmit} className="space-y-12">
              {/* Honeypot — hidden from real users via CSS + off-screen position; bots that auto-fill every field trip it */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="hp_token">Leave this field empty</label>
                <input type="text" id="hp_token" name="hp_token" tabIndex={-1} autoComplete="off" value={form.hp_token} onChange={onChange} />
              </div>

              {config.sections.map((section) => (
                <div key={section.title}>
                  <p className="font-display text-xl mb-6 pb-3 border-b hairline">{section.title}</p>
                  <div className="space-y-6">
                    {section.fields.map((field) => (
                      <Field key={field.name} field={field} form={form} onChange={onChange} onFileChange={onFileChange} />
                    ))}
                  </div>
                </div>
              ))}

              <label className="flex items-start gap-3 text-sm text-ink-700 cursor-pointer">
                <input
                  required
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={onChange}
                  className="accent-signal w-4 h-4 mt-0.5"
                />
                I agree to the <Link to="/faqs" className="underline hover:text-signal">Terms &amp; Privacy Policy</Link>.
              </label>

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center !py-4 text-base">
                {status === 'sending' ? 'Submitting…' : `Apply for ${program.name}`}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="h-24" />
    </div>
  );
}
