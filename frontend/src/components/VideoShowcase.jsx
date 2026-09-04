import { useRef, useState, useEffect } from 'react';
import { formatTime } from '../utils/format';

export default function VideoShowcase({ src, poster, channel = 'Lokha Innovation', title }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      setCurrent(v.currentTime);
      setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
    };
    const onMeta = () => setDuration(v.duration);
    const onEnd = () => setPlaying(false);
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('loadedmetadata', onMeta);
    v.addEventListener('ended', onEnd);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('loadedmetadata', onMeta);
      v.removeEventListener('ended', onEnd);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const onSeek = (e) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * duration;
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="w-full bg-ink-900 border border-ink-600 shadow-2xl overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-ink-600">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-signal flex items-center justify-center font-display text-ink-900 text-sm font-semibold shrink-0">L</span>
          <div>
            <p className="text-paper text-sm font-medium leading-tight">{channel}</p>
            {title && <p className="text-paper/40 text-xs leading-tight mt-0.5">{title}</p>}
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-paper/40">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5"/></svg>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
      </div>

      {/* Video surface */}
      <div className="relative aspect-video bg-black group cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-cover"
          playsInline
          preload="metadata"
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-ink-900/25 transition-opacity">
            <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-paper/95 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="ml-1">
                <path d="M6 4L20 12L6 20V4Z" fill="#0B0D0C" />
              </svg>
            </span>
          </div>
        )}
      </div>

      {/* Control bar */}
      <div className="px-5 pt-3 pb-4">
        <div
          className="h-1.5 bg-ink-600 rounded-full cursor-pointer relative overflow-hidden"
          onClick={onSeek}
        >
          <div className="h-full bg-signal rounded-full" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="text-paper hover:text-signal transition-colors" aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 4L20 12L6 20V4Z" fill="currentColor"/></svg>
              )}
            </button>
            <button onClick={toggleMute} className="text-paper hover:text-signal transition-colors" aria-label={muted ? 'Unmute' : 'Mute'}>
              {muted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M17 9l5 6M22 9l-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M15.5 9a4 4 0 010 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              )}
            </button>
            <span className="eyebrow text-paper/50">{formatTime(current)} / {formatTime(duration)}</span>
          </div>
          <span className="eyebrow text-paper/30">Lokha Innovation</span>
        </div>
      </div>
    </div>
  );
}
