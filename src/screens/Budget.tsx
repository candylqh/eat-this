import { useApp } from '../state';

export function Budget() {
  const { go } = useApp();
  return (
    <div className="screen" style={{ padding: '26px 20px 24px', gap: 14 }}>
      <div style={{ fontSize: 19, lineHeight: 1.35, color: '#6B5A42' }}>How much time have you got?</div>

      <button
        type="button"
        onClick={() => go('suggestion')}
        className="budget-card quick"
      >
        <div style={{ position: 'absolute', top: 16, right: 16 }}>
          <svg width="92" height="92" viewBox="0 0 60 60" aria-hidden="true">
            <g style={{ animation: 'steam 2.4s ease-in-out infinite' }}>
              <path d="M24 16 q3-4 0-8" fill="none" stroke="#E8A33D" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M33 15 q3-5 0-9" fill="none" stroke="#E8A33D" strokeWidth="2.6" strokeLinecap="round" />
            </g>
            <ellipse cx="30" cy="27" rx="17" ry="5" fill="#FFFDF8" stroke="#0F172A" strokeWidth="2.5" />
            <path d="M11 27 q3 20 19 20 q16 0 19-20 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M18 36 q12 6 24 0" fill="none" stroke="#FFF8EE" strokeWidth="2.2" strokeLinecap="round" opacity="0.75" />
          </svg>
        </div>
        <div className="display" style={{ fontSize: 46, lineHeight: 0.92 }}>
          QUICK
          <br />
          LUNCH
        </div>
        <div className="mono" style={{ fontSize: 12, letterSpacing: '0.03em', color: '#6B5A42' }}>back in ~30 min</div>
      </button>

      <button
        type="button"
        onClick={() => go('suggestion')}
        className="budget-card open"
      >
        <div style={{ position: 'absolute', top: 16, right: 16 }}>
          <svg width="92" height="92" viewBox="0 0 60 60" aria-hidden="true">
            <circle cx="30" cy="31" r="19" fill="#FDEBD0" stroke="#0F172A" strokeWidth="2.5" />
            <path d="M30 20 v11 h9" fill="none" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 10 l6 4M40 10 l-6 4" stroke="#F59E0B" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="display" style={{ fontSize: 46, lineHeight: 0.92 }}>
          I HAVE
          <br />
          TIME
        </div>
        <div className="mono" style={{ fontSize: 12, letterSpacing: '0.03em', color: '#6B5A42' }}>no rush today</div>
      </button>
    </div>
  );
}
