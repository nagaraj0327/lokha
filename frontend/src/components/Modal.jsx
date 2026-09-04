import { useEffect } from 'react';

export default function Modal({ open, onClose, children, labelledBy }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
    >
      <div className="absolute inset-0 bg-ink-900/75 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full md:max-w-2xl md:mx-6 bg-paper rounded-t-3xl md:rounded-3xl shadow-2xl max-h-[92vh] md:max-h-[88vh] overflow-y-auto reveal">
        {children}
      </div>
    </div>
  );
}
