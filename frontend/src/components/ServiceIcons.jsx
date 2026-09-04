const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const serviceIcons = {
  'Startup Mentorship': (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <circle cx="17" cy="7" r="2.4" />
      <path d="M14.8 14.8c2.6.3 4.7 2.5 4.7 5.2" />
    </svg>
  ),
  'Business Development': (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  ),
  'Product Development': (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M9 8 4.5 12 9 16" />
      <path d="M15 8l4.5 4-4.5 4" />
    </svg>
  ),
  'Legal Support': (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 3.5l7 2.8v5c0 4.6-3 7.9-7 9.2-4-1.3-7-4.6-7-9.2v-5l7-2.8z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  ),
  'Financial Support': (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="6.5" width="17" height="12" rx="1.5" />
      <path d="M3.5 10.5h17" />
      <circle cx="16.5" cy="14.5" r="1.4" />
    </svg>
  ),
  'Marketing Support': (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4 11v3a1 1 0 0 0 1 1h1.4l3.9 3V7l-3.9 3H5a1 1 0 0 0-1 1z" />
      <path d="M13.5 9.2a4 4 0 0 1 0 6.6M16.3 6.8a7.6 7.6 0 0 1 0 11.4" />
    </svg>
  ),
};

export function ArrowUpRight(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} strokeWidth={2} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
