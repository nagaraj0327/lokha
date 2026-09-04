import useInViewport from '../hooks/useInViewport';

/**
 * Same visual result as a plain autoplay <video>, but the (often large)
 * video file isn't requested from the network until the element is close
 * to entering the viewport. Use for any below-the-fold background video —
 * never for the above-the-fold hero, which should load immediately.
 */
export default function LazyVideo({ src, className, poster }) {
  const [ref, isVisible] = useInViewport({ rootMargin: '400px', threshold: 0 });

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <video
          className="w-full h-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      ) : (
        poster && <img src={poster} alt="" className="w-full h-full object-cover" />
      )}
    </div>
  );
}
