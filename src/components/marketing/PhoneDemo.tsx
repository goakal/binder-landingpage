import { useEffect, useRef } from 'react';

/**
 * The dark phone frame the feature sections show demo clips in.
 *
 * `mp4` is optional but should be passed whenever the asset exists: Safari does
 * not play webm, and a webm-only <video> renders as a black rectangle there
 * rather than falling back to anything.
 *
 * Nothing autoplays on load. Pages now carry up to three of these, so the clip
 * stays at `preload="none"` behind its poster until it scrolls into view, and
 * pauses again on the way out. Under `prefers-reduced-motion` it never starts —
 * the poster is the whole experience, which is why `poster` should always be
 * passed.
 */
export const PhoneDemo = ({
  webm,
  mp4,
  poster,
  alt,
}: {
  webm: string;
  mp4?: string;
  poster?: string;
  alt: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // play() rejects if the element is torn down mid-promise, and on iOS
        // low-power mode, which refuses autoplay outright. Neither is worth an
        // unhandled rejection — the poster stays up and the page is fine.
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative', width: 'min(300px,80%)', aspectRatio: '9/19.5', background: '#1C1B1A', borderRadius: 44, padding: 11, boxShadow: '0 30px 70px rgba(28,27,26,0.22)' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', background: '#F7F6FD' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 83, height: 19, background: '#1C1B1A', borderRadius: '0 0 16px 16px', zIndex: 2 }} />
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          poster={poster}
          aria-label={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        >
          <source src={webm} type="video/webm" />
          {mp4 && <source src={mp4} type="video/mp4" />}
        </video>
      </div>
    </div>
  );
};
