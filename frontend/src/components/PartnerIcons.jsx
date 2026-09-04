const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const partnerIcons = {
  bank: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M4.5 9.5v9M8.5 9.5v9M15.5 9.5v9M19.5 9.5v9" />
      <path d="M3 20.5h18" />
    </svg>
  ),
  cpu: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5 5l1.8 1.8M17.2 17.2 19 19M19 5l-1.8 1.8M6.8 17.2 5 19" />
    </svg>
  ),
  headset: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.3" />
      <rect x="17" y="13" width="4" height="6" rx="1.3" />
      <path d="M19 19v.5A3.5 3.5 0 0 1 15.5 23H13" />
    </svg>
  ),
  globe: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.4 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.4-3.8-8.5S9.5 5.8 12 3.5Z" />
    </svg>
  ),
  quote: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 8.5C4 6 6 4 8.5 4v2.2c-1.3 0-2.3 1-2.3 2.3v.3H8.5v6H4V8.5Z" />
      <path d="M13.5 8.5c0-2.5 2-4.5 4.5-4.5v2.2c-1.3 0-2.3 1-2.3 2.3v.3H18v6h-4.5V8.5Z" />
    </svg>
  ),
  megaphone: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M3 10.5v3a1 1 0 0 0 1 1h1.5l1 5h2l-.8-5H9l9 4v-13l-9 4H4a1 1 0 0 0-1 1Z" />
      <path d="M18 8.5a4 4 0 0 1 0 7" />
    </svg>
  ),
  network: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="18" cy="7" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M8 8.2 10.3 16M16 8.2 13.7 16M8.2 7h7.6" />
    </svg>
  ),
  arrowRight: (props) => (
    <svg viewBox="0 0 24 24" {...common} strokeWidth={2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
};
