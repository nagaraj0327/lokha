/** Formats seconds as m:ss for video/audio players. */
export function formatTime(totalSeconds) {
  if (!isFinite(totalSeconds)) return '0:00';
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}
