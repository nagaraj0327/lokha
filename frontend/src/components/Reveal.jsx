import useInViewport from '../hooks/useInViewport';

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, visible] = useInViewport();

  return (
    <Tag
      ref={ref}
      className={`${className} ${visible ? 'reveal' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
