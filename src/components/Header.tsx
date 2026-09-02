import { KayaCatHeader } from './KayaCat';
import { formatClock } from '../lib/format';

export function Header({ now, onLogoClick, onAvatarClick }: { now: Date; onLogoClick: () => void; onAvatarClick: () => void }) {
  return (
    <div className="app-header">
      <button type="button" onClick={onLogoClick} className="logo logo-btn" aria-label="Back to home">
        EAT THIS.
      </button>
      <div className="weather-pill">
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <circle cx="6" cy="6" r="3.2" fill="#F59E0B" />
          <g stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round">
            <path d="M6 0.8v1.4M6 9.8v1.4M0.8 6h1.4M9.8 6h1.4" />
          </g>
        </svg>
        {/* Time is real (state.now); 33° is a placeholder — weather is out of scope. */}
        <div>{formatClock(now)} · 33°</div>
      </div>
      <KayaCatHeader onClick={onAvatarClick} />
    </div>
  );
}
