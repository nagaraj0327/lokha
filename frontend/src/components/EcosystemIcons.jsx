const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const ecosystemIcons = {
  startups: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="8.5" cy="8" r="2.6" />
      <circle cx="16" cy="9" r="2" />
      <path d="M3.2 19c0-2.9 2.4-5.2 5.3-5.2S13.8 16.1 13.8 19" />
      <path d="M14.8 14.3c2.3.2 4.1 2.1 4.1 4.4" />
    </svg>
  ),
  mentors: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.2" y="7.5" width="17.6" height="12" rx="1.5" />
      <path d="M8.5 7.5v-1.8a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v1.8" />
      <path d="M3.2 12.5h17.6" />
    </svg>
  ),
  investors: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 20.2c-3.6-2.1-8-5.4-8-9.9A4.6 4.6 0 0 1 12 7.3a4.6 4.6 0 0 1 8 3c0 4.5-4.4 7.8-8 9.9z" />
      <path d="m9.2 12 1.8 1.8 3.8-3.8" />
    </svg>
  ),
  countries: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.4 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.4-3.7-8.5S9.6 5.8 12 3.5z" />
    </svg>
  ),
  funds: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 3 4 8.5v3L12 21l8-9.5v-3L12 3z" />
      <path d="M4 8.5 12 14l8-5.5" />
    </svg>
  ),
};
