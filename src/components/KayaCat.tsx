interface HeaderCatProps {
  onClick?: () => void;
}

/** Small bobbing mascot used as the header avatar button. */
export function KayaCatHeader({ onClick }: HeaderCatProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="avatar-btn"
      title="Kaya Cat · your credits"
      aria-label="Kaya Cat, your credits"
    >
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M9 15 L7.5 6.5 L15.5 10.5 Z" fill="#F6C685" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
        <path d="M31 15 L32.5 6.5 L24.5 10.5 Z" fill="#F6C685" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="20" cy="22" r="13" fill="#FBE0B6" stroke="#0F172A" strokeWidth="2" />
        <circle cx="15" cy="21" r="1.9" fill="#0F172A" />
        <circle cx="25" cy="21" r="1.9" fill="#0F172A" />
        <circle cx="11.5" cy="25.5" r="2.4" fill="#F59E0B" opacity="0.5" />
        <circle cx="28.5" cy="25.5" r="2.4" fill="#F59E0B" opacity="0.5" />
        <path d="M17.5 26 q2.5 2.4 5 0" fill="none" stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </button>
  );
}

/** Medium mascot with a bowl, used on the Going screen. */
export function KayaCatGoing() {
  return (
    <svg width="140" height="150" viewBox="0 0 120 132" aria-label="Kaya Cat, heading out" style={{ animation: 'bob 3.4s ease-in-out infinite' }}>
      <ellipse cx="60" cy="128" rx="30" ry="4.5" fill="#0F172A" opacity="0.1" />
      <path d="M36 42 L32 22 L50 32 Z" fill="#F6C685" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
      <path d="M84 42 L88 22 L70 32 Z" fill="#F6C685" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="60" cy="58" r="31" fill="#FBE0B6" stroke="#0F172A" strokeWidth="3" />
      <circle cx="49" cy="54" r="4" fill="#0F172A" />
      <circle cx="71" cy="54" r="4" fill="#0F172A" />
      <circle cx="38" cy="66" r="5.5" fill="#F59E0B" opacity="0.45" />
      <circle cx="82" cy="66" r="5.5" fill="#F59E0B" opacity="0.45" />
      <path d="M53 67 q7 6.5 14 0" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
      <g style={{ animation: 'steam 2.6s ease-in-out infinite' }}>
        <path d="M60 14 q4-5 0-10" fill="none" stroke="#E8A33D" strokeWidth="3" strokeLinecap="round" />
      </g>
      <ellipse cx="60" cy="108" rx="19" ry="4.5" fill="#FFFDF8" stroke="#0F172A" strokeWidth="3" />
      <path d="M41 108 q3 15 19 15 q16 0 19-15 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="38" cy="104" r="7" fill="#FBE0B6" stroke="#0F172A" strokeWidth="3" />
      <circle cx="82" cy="104" r="7" fill="#FBE0B6" stroke="#0F172A" strokeWidth="3" />
    </svg>
  );
}

interface AvatarCatProps {
  wearHat: boolean;
  wearScarf: boolean;
  wearSpecs: boolean;
}

/** Full mascot with body + toggleable accessories, used on the avatar/shop screen. */
export function KayaCatAvatar({ wearHat, wearScarf, wearSpecs }: AvatarCatProps) {
  return (
    <svg width="168" height="172" viewBox="0 0 120 132" aria-label="Kaya Cat" style={{ animation: 'bob 3.6s ease-in-out infinite' }}>
      <ellipse cx="60" cy="126" rx="30" ry="4.5" fill="#0F172A" opacity="0.1" />
      <path d="M44 84 q16 7 32 0 l5 34 q-21 9-42 0 Z" fill="#FBE0B6" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
      <path d="M36 42 L32 22 L50 32 Z" fill="#F6C685" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
      <path d="M84 42 L88 22 L70 32 Z" fill="#F6C685" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="60" cy="60" r="31" fill="#FBE0B6" stroke="#0F172A" strokeWidth="3" />
      <circle cx="49" cy="56" r="4" fill="#0F172A" />
      <circle cx="71" cy="56" r="4" fill="#0F172A" />
      <circle cx="38" cy="68" r="5.5" fill="#F59E0B" opacity="0.45" />
      <circle cx="82" cy="68" r="5.5" fill="#F59E0B" opacity="0.45" />
      <path d="M53 69 q7 6.5 14 0" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
      {wearHat && (
        <g>
          <path d="M28 43 q32-31 64 0 q-15 8-32 8 q-17 0-32-8 Z" fill="#DC2626" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
          <path d="M42 30 q18-11 36 0" fill="none" stroke="#FFF8EE" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 45 h76" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 45 h76" fill="none" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" opacity="0.35" />
          <path d="M36 44 L32 20 L52 33 Z" fill="#F6C685" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
          <path d="M84 44 L88 20 L68 33 Z" fill="#F6C685" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
          <path d="M39 40 L37 27 L47 34 Z" fill="#F59E0B" opacity="0.55" />
          <path d="M81 40 L83 27 L73 34 Z" fill="#F59E0B" opacity="0.55" />
        </g>
      )}
      {wearScarf && (
        <g>
          <path d="M42 94 q18 9 36 0 l2 11 q-20 10-40 0 Z" fill="#16A34A" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
          <path d="M74 104 l5 15" fill="none" stroke="#16A34A" strokeWidth="7" strokeLinecap="round" />
          <path d="M74 104 l5 15" fill="none" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" opacity="0.35" />
        </g>
      )}
      {wearSpecs && (
        <g fill="none" stroke="#0F172A" strokeWidth="3">
          <circle cx="49" cy="56" r="10" />
          <circle cx="71" cy="56" r="10" />
          <path d="M59 56h2M39 54l-7-3M81 54l7-3" strokeLinecap="round" />
        </g>
      )}
      <g style={{ animation: 'steam 2.8s ease-in-out infinite' }}>
        <path d="M60 14 q4-5 0-10" fill="none" stroke="#E8A33D" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}
