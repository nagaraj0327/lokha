import useInViewport from '../hooks/useInViewport';

/**
 * Like Reveal, but slides in horizontally instead of fading up — used for
 * rows that should animate in one-by-one (e.g. the Directors list).
 * @param {'left'|'right'} from - which side the element slides in from.
 */
export default function SlideReveal({ children, className = '', delay = 0, from = 'left' }) {
  const [ref, visible] = useInViewport();
  const animationClass = from === 'left' ? 'slide-in-left' : 'slide-in-right';

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? animationClass : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
