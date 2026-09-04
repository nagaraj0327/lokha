const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const navIcons = {
  mentors: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M4.8 20c0-3.6 3.2-6.4 7.2-6.4s7.2 2.8 7.2 6.4" />
    </svg>
  ),
  investors: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4 18V9.5M9.3 18V6M14.6 18v-8M20 18V3" />
      <path d="M3.5 18h17" />
    </svg>
  ),
  events: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v3.4M16 3v3.4" />
    </svg>
  ),
  community: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="8.3" cy="8.5" r="2.6" />
      <circle cx="16.2" cy="9.3" r="2" />
      <path d="M3.2 19.2c0-2.9 2.3-5.1 5.1-5.1s5.1 2.2 5.1 5.1" />
      <path d="M14.6 14.5c2.2.3 3.9 2.1 3.9 4.3" />
    </svg>
  ),
  careers: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="7.5" width="17" height="12" rx="1.5" />
      <path d="M8.7 7.5V5.8a1.5 1.5 0 0 1 1.5-1.5h3.6a1.5 1.5 0 0 1 1.5 1.5V7.5" />
      <path d="M3.5 12.5h17" />
    </svg>
  ),
  partners: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M8.5 12 5 15.5 3.5 14M15.5 12 19 15.5 20.5 14" />
      <path d="M9.5 8.2 12 5.7l2.5 2.5" />
      <path d="M12 5.7v6.6M5 15.5c0 1.9 1.5 3.4 3.4 3.4M19 15.5c0 1.9-1.5 3.4-3.4 3.4" />
    </svg>
  ),
  consult: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4 5.5h16v10H9.5L5 19v-3.5H4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  ),
  blog: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="4.5" width="14" height="15" rx="1.2" />
      <path d="M7 8.5h7M7 12h7M7 15.5h4" />
      <path d="M17.5 8v9a2.5 2.5 0 0 0 2.5-2.5V8h-2.5z" />
    </svg>
  ),
  faqs: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.6 9.3a2.4 2.4 0 0 1 4.6 1c0 1.6-2.2 1.8-2.2 3.4" />
      <circle cx="12" cy="16.6" r="0.15" fill="currentColor" />
    </svg>
  ),
  contact: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 6.5l8 6 8-6" />
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
