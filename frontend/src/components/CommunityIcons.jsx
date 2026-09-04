const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const communityIcons = {
  people: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="8.5" cy="8" r="3" />
      <path d="M2.8 19c0-3.1 2.5-5.5 5.7-5.5s5.7 2.4 5.7 5.5" />
      <circle cx="16.5" cy="8.8" r="2.2" />
      <path d="M14.8 13.7c2.3.3 4 2.1 4 4.5" />
    </svg>
  ),
  starPerson: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="9.5" cy="8.5" r="3.5" />
      <path d="M3.5 19.5c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M18.3 8.6l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z" />
    </svg>
  ),
  bookOpen: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 6.5c-1.6-1.3-3.7-2-6.5-2v12c2.8 0 4.9.7 6.5 2 1.6-1.3 3.7-2 6.5-2v-12c-2.8 0-4.9.7-6.5 2Z" />
      <path d="M12 6.5v12" />
    </svg>
  ),
  chat: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4 5.5h13v8.5H9.5L5 18v-4H4z" />
      <path d="M20 9.5v8.5h-2.5v3l-3.5-3h-4" />
    </svg>
  ),
  graduationCap: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" />
      <path d="M6.5 11v4.5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V11" />
      <path d="M21.5 9v6" />
    </svg>
  ),
  handshake: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M8.5 12 5 15.5 3.5 14M15.5 12 19 15.5 20.5 14" />
      <path d="M9.5 8.2 12 5.7l2.5 2.5" />
      <path d="M12 5.7v6.6M5 15.5c0 1.9 1.5 3.4 3.4 3.4M19 15.5c0 1.9-1.5 3.4-3.4 3.4" />
    </svg>
  ),
};
