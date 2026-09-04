const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const contactIcons = {
  send: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M21 3 3 10.5l7.5 3L14 21l7-18Z" />
      <path d="M10.5 13.5 21 3" />
    </svg>
  ),
  mail: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 6.5l8 6 8-6" />
    </svg>
  ),
  phone: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M6.5 3.5h3l1.3 4.5-2 1.6a11.5 11.5 0 0 0 5.6 5.6l1.6-2 4.5 1.3v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 5 5.1a1.5 1.5 0 0 1 1.5-1.6Z" />
    </svg>
  ),
  mapPin: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
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
  calendar: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v3.4M16 3v3.4" />
    </svg>
  ),
  expand: (props) => (
    <svg viewBox="0 0 24 24" {...common} strokeWidth={2} {...props}>
      <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
    </svg>
  ),
  arrowRight: (props) => (
    <svg viewBox="0 0 24 24" {...common} strokeWidth={2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  list: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M8 6h13M8 12h13M8 18h13" />
      <circle cx="3.5" cy="6" r="1" fill="currentColor" stroke="none" />
      <circle cx="3.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="3.5" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  pencil: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="M14 6.5 17.5 10" />
    </svg>
  ),
  clock: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.3 2" />
    </svg>
  ),
  briefcase: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3.5" y="7.5" width="17" height="12" rx="1.5" />
      <path d="M8.7 7.5V5.8a1.5 1.5 0 0 1 1.5-1.5h3.6a1.5 1.5 0 0 1 1.5 1.5V7.5" />
      <path d="M3.5 12.5h17" />
    </svg>
  ),
  lock: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="5" y="10.5" width="14" height="10" rx="1.8" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  ),
};
