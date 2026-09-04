const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const careerIcons = {
  building: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="5" y="3.5" width="10" height="17" rx="1" />
      <path d="M15 9.5h4v11H5" />
      <path d="M8 7h1M11 7h1M8 10.5h1M11 10.5h1M8 14h1M11 14h1" />
    </svg>
  ),
  pin: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  ),
  personArrow: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c0-3.3 2.5-5.8 5.5-5.8" />
      <path d="M14 15l3.5-3.5M17.5 11.5v3.5M17.5 11.5H14" />
    </svg>
  ),
  code: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M8.5 8 4 12l4.5 4M15.5 8l4.5 4-4.5 4M13.5 6l-3 12" />
    </svg>
  ),
  palette: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 3.5a8.3 8.3 0 1 0 0 16.6c1.1 0 1.8-.9 1.8-1.9 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1 .8-1.7 1.8-1.7h1.7c2 0 3.7-1.7 3.7-3.7 0-3.7-3.7-6.7-8-6.7Z" />
      <circle cx="7.3" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.2" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  gear: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M17.7 6.3l-1.5 1.5M7.8 16.2l-1.5 1.5M17.7 17.7l-1.5-1.5M7.8 7.8 6.3 6.3" />
    </svg>
  ),
  grid: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </svg>
  ),
  bookmark: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M6.5 4h11v16l-5.5-3.5L6.5 20V4Z" />
    </svg>
  ),
};
