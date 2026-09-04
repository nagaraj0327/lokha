export default function Marquee({
  items = ['Build', 'Launch', 'Scale', 'Globally'],
  speed = 28,
  dark = true,
  variant = 'type',
  repeat = 4,
}) {
  const track = Array.from({ length: repeat }, () => items).flat();
  const marqueeStyle = {
    animation: `marquee ${speed}s linear infinite`,
    '--marquee-shift': `${100 / repeat}%`,
  };

  if (variant === 'ticker') {
    return (
      <div
        className={`overflow-hidden border-y ${dark ? 'bg-ink-900 border-ink-600' : 'border-ink-900/15'}`}
        aria-hidden="true"
      >
        <div
          className="flex items-center whitespace-nowrap will-change-transform"
          style={marqueeStyle}
        >
          {track.map((item, i) => (
            <span
              key={i}
              className={`flex items-center gap-3 px-8 md:px-10 py-6 md:py-8 border-r ${dark ? 'border-ink-600' : 'border-ink-900/15'}`}
            >
              {item.tag && (
                <span className={`eyebrow ${dark ? 'text-signal' : 'text-ink-900/60'}`}>{item.tag}</span>
              )}
              {item.label && (
                <span className={`text-sm ${dark ? 'text-paper/70' : 'text-ink-900/70'}`}>{item.label}</span>
              )}
              <span className={`font-display text-2xl md:text-3xl ${dark ? 'text-paper' : 'text-ink-900'}`}>{item.value}</span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden border-y ${dark ? 'bg-ink-900 border-ink-600' : 'bg-paper border-ink-800/10'} py-5 md:py-7`}
      aria-hidden="true"
    >
      <div
        className="flex items-center whitespace-nowrap will-change-transform"
        style={marqueeStyle}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className={`flex items-center font-display italic text-3xl md:text-5xl px-6 md:px-10 ${
              dark ? 'text-paper' : 'text-ink-900'
            }`}
          >
            {item}
            <span className="text-signal not-italic mx-6 md:mx-10 text-2xl md:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
