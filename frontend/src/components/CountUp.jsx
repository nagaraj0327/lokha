import { useEffect, useRef, useState } from 'react';
import useInViewport from '../hooks/useInViewport';

// Splits a display value like "500+" or "$50M+" into its animatable pieces.
function parseValue(raw) {
  const match = String(raw).match(/^([^\d]*)([\d,.]+)([^\d]*)$/);
  if (!match) return { prefix: '', target: 0, suffix: raw, decimals: 0 };
  const [, prefix, numberPart, suffix] = match;
  const decimals = numberPart.includes('.') ? numberPart.split('.')[1].length : 0;
  const target = parseFloat(numberPart.replace(/,/g, ''));
  return { prefix, target, suffix, decimals };
}

function formatNumber(n, decimals) {
  return n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function CountUp({ value, duration = 1400, className = '' }) {
  const [ref, visible] = useInViewport();
  const [display, setDisplay] = useState(() => {
    const { prefix, suffix, decimals } = parseValue(value);
    return `${prefix}${formatNumber(0, decimals)}${suffix}`;
  });
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;

    const { prefix, target, suffix, decimals } = parseValue(value);
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = target * eased;
      setDisplay(`${prefix}${formatNumber(decimals ? current : Math.round(current), decimals)}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [visible, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
