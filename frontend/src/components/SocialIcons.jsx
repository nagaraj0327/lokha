const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const socialIcons = {
  linkedin: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 10.5v6M8 7.8v.02" />
      <path d="M11.5 16.5v-3.6c0-1.3.9-2.4 2.4-2.4s2.1 1 2.1 2.5v3.5" />
    </svg>
  ),
  x: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4.5 4.5l15 15M19.5 4.5l-15 15" />
    </svg>
  ),
  instagram: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M16.6 7.4v.02" />
    </svg>
  ),
  youtube: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M10.5 9.7v4.6l4-2.3z" fill="currentColor" stroke="none" />
    </svg>
  ),
};
