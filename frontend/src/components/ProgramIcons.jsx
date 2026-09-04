const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const programIcons = {
  'idea-validation': (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.2 11.1c.5.35.7.85.7 1.4H14.5c0-.55.2-1.05.7-1.4A6 6 0 0 0 12 3z" />
    </svg>
  ),
  'pre-incubation': (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 2.5c2.4 1.9 3.8 5 3.8 8.3 0 1.9-.5 3.6-1.3 5l-2.5-1.4-2.5 1.4c-.8-1.4-1.3-3.1-1.3-5 0-3.3 1.4-6.4 3.8-8.3z" />
      <circle cx="12" cy="9.8" r="1.3" />
      <path d="M8.2 13.5 5.5 15l1 3.2M15.8 13.5l2.7 1.5-1 3.2" />
    </svg>
  ),
  incubation: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4 15h4l2-9 3 14 2-9h5" />
    </svg>
  ),
  acceleration: (props) => (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5a8.5 8.5 0 0 1 0 17M3.7 9.5h16.6M3.7 14.5h16.6" />
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
