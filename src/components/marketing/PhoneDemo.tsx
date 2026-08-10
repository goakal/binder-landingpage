/**
 * The dark phone frame the feature sections show demo clips in.
 *
 * `mp4` is optional but should be passed whenever the asset exists: Safari does
 * not play webm, and a webm-only <video> renders as a black rectangle there
 * rather than falling back to anything.
 */
export const PhoneDemo = ({ webm, mp4, alt }: { webm: string; mp4?: string; alt: string }) => (
  <div style={{ position: 'relative', width: 'min(300px,80%)', aspectRatio: '9/19.5', background: '#1C1B1A', borderRadius: 44, padding: 11, boxShadow: '0 30px 70px rgba(28,27,26,0.22)' }}>
    <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', background: '#F7F6FD' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 83, height: 19, background: '#1C1B1A', borderRadius: '0 0 16px 16px', zIndex: 2 }} />
      <video autoPlay loop muted playsInline aria-label={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
        <source src={webm} type="video/webm" />
        {mp4 && <source src={mp4} type="video/mp4" />}
      </video>
    </div>
  </div>
);
