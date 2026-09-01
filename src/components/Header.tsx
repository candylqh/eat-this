import { KayaCatHeader } from './KayaCat';

export function Header({ onAvatarClick }: { onAvatarClick: () => void }) {
  return (
    <div className="app-header">
      <div className="logo">EAT THIS.</div>
      <div className="weather-pill">
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <circle cx="6" cy="6" r="3.2" fill="#F59E0B" />
          <g stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round">
            <path d="M6 0.8v1.4M6 9.8v1.4M0.8 6h1.4M9.8 6h1.4" />
          </g>
        </svg>
        <div>12:15 · 33°</div>
      </div>
      <KayaCatHeader onClick={onAvatarClick} />
    </div>
  );
}
