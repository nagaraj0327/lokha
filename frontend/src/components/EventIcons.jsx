const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const eventIcons = {
  search: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.5 19.5 15 15" />
    </svg>
  ),
  users: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="8.5" cy="8" r="3" />
      <path d="M2.8 19c0-3.1 2.5-5.5 5.7-5.5s5.7 2.4 5.7 5.5" />
      <circle cx="16.5" cy="8.8" r="2.2" />
      <path d="M14.8 13.7c2.3.3 4 2.1 4 4.5" />
    </svg>
  ),
  sitemap: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="9" y="3.5" width="6" height="4.5" rx="1" />
      <rect x="3" y="16" width="6" height="4.5" rx="1" />
      <rect x="15" y="16" width="6" height="4.5" rx="1" />
      <path d="M12 8v4M6 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  rocket: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 15c3-2.5 4.5-6.3 3.7-10.7C11.3 3.5 7.5 5 5 8c-1 3-.3 5.3 1 7l1 4 2.3-1.7L11.5 19l1-2.5" />
      <circle cx="13" cy="8" r="1.6" />
      <path d="M7 15c-2 .5-3 2-3.5 4 2-.5 3.5-1.5 4-3.5" />
    </svg>
  ),
  trendingUp: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M3.5 16.5 9.5 10l4 4 6.5-7.5" />
      <path d="M15.5 6h4.5v4.5" />
    </svg>
  ),
  presentation: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="1.2" />
      <path d="M9 20l3-4 3 4M12 16v4" />
      <path d="M7.5 12l2.5-3 2 2 3.5-4" />
    </svg>
  ),
  lightbulb: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.45 1 1.15 1 1.9V17h5v-1.2c0-.75.4-1.45 1-1.9A6 6 0 0 0 12 3Z" />
    </svg>
  ),
  cube: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z" />
      <path d="M4 8l8 4.5L20 8M12 12.5V21" />
    </svg>
  ),
  checkCircle: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.2 12.3l2.5 2.5 5-5.6" />
    </svg>
  ),
  clock: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.3 2" />
    </svg>
  ),
  target: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.7" fill="currentColor" />
    </svg>
  ),
  calendar: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v3.4M16 3v3.4" />
    </svg>
  ),
};
