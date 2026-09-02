/**
 * Only two hand-drawn dish stickers exist (chicken rice / noodles), so this
 * picks whichever reads closer for a given stall — decorative, not a claim
 * about the exact dish.
 */
export function DishIcon({ signatureDish }: { signatureDish: string }) {
  const isNoodleLike = /noodle|mee|kway|bee hoon|beehoon|bee hoon|mian/i.test(signatureDish);
  return isNoodleLike ? <NoodleDish /> : <ChickenRiceDish />;
}

export function CoinIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" style={{ flexShrink: 0 }} aria-hidden="true">
      <circle cx="14" cy="14" r="10" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.4" />
      <circle cx="14" cy="14" r="5.5" fill="none" stroke="#0F172A" strokeWidth="2" />
    </svg>
  );
}

export function KayaFaceIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" style={{ flexShrink: 0 }} aria-hidden="true">
      <path d="M6 11 L4.5 4 L11 7 Z" fill="#F6C685" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 11 L23.5 4 L17 7 Z" fill="#F6C685" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="14" cy="16" r="9" fill="#FBE0B6" stroke="#0F172A" strokeWidth="2" />
      <circle cx="10.6" cy="15" r="1.4" fill="#0F172A" />
      <circle cx="17.4" cy="15" r="1.4" fill="#0F172A" />
      <path d="M11.5 19.5 q2.5 2.2 5 0" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Hainanese chicken rice, used on the suggestion screen. */
export function ChickenRiceDish() {
  return (
    <svg width="66" height="66" viewBox="0 0 64 64" style={{ flexShrink: 0 }} aria-hidden="true">
      <ellipse cx="32" cy="40" rx="29" ry="18" fill="#FFFDF8" stroke="#0F172A" strokeWidth="2.8" />
      <ellipse cx="32" cy="39" rx="20" ry="11.5" fill="none" stroke="#EBD9BC" strokeWidth="2.2" />
      <path d="M17 38 q4-12 15-12 q11 0 15 12 Z" fill="#F7E7C2" stroke="#0F172A" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M20 43 q12 8 24 0 q-3 8-12 8 q-9 0-12-8 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M36 21 q7-4 8 3" fill="none" stroke="#16A34A" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

/** Fishball noodles, used on the replacement screen. */
export function NoodleDish() {
  return (
    <svg width="66" height="66" viewBox="0 0 64 64" style={{ flexShrink: 0 }} aria-hidden="true">
      <ellipse cx="32" cy="38" rx="26" ry="15" fill="#FFFDF8" stroke="#0F172A" strokeWidth="2.8" />
      <path d="M8 36 q4 18 24 18 q20 0 24-18 Z" fill="#F7E7C2" stroke="#0F172A" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M17 36 q8 5 16 1M22 43 q8 4 15-1" fill="none" stroke="#E8A33D" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="26" cy="33" r="4" fill="#FFFDF8" stroke="#0F172A" strokeWidth="2.2" />
      <circle cx="38" cy="35" r="4" fill="#FFFDF8" stroke="#0F172A" strokeWidth="2.2" />
      <g style={{ animation: 'steam 2.5s ease-in-out infinite' }}>
        <path d="M32 22 q4-5 0-10" fill="none" stroke="#E8A33D" strokeWidth="2.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function AmoyPlate() {
  return (
    <svg width="58" height="58" viewBox="0 0 64 64" aria-hidden="true">
      <ellipse cx="32" cy="40" rx="28" ry="16" fill="#FFFDF8" stroke="#0F172A" strokeWidth="3" />
      <path d="M8 40 q6-14 20-14 q6 0 10 3" fill="#F7E7C2" stroke="#0F172A" strokeWidth="2.8" strokeLinejoin="round" />
      <g fill="#F59E0B" stroke="#0F172A" strokeWidth="2.4">
        <rect x="34" y="27" width="20" height="6" rx="3" />
        <rect x="34" y="36" width="20" height="6" rx="3" />
      </g>
    </svg>
  );
}

export function MaxwellPlate() {
  return (
    <svg width="58" height="58" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M48 8 l10 6 -18 14" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="30" cy="30" rx="24" ry="7" fill="#FFFDF8" stroke="#0F172A" strokeWidth="3" />
      <path d="M6 30 q4 24 24 24 q20 0 24-24 Z" fill="#F7E7C2" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
      <path d="M14 36 q8 6 16 0 q8-6 16 0" fill="none" stroke="#E8A33D" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M16 44 q7 5 14 0 q7-5 14 0" fill="none" stroke="#E8A33D" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function HongLimPlate() {
  return (
    <svg width="54" height="54" viewBox="0 0 64 64" aria-hidden="true">
      <ellipse cx="32" cy="34" rx="24" ry="15" fill="#FFFDF8" stroke="#0F172A" strokeWidth="3" />
      <path d="M10 33 q4 17 22 17 q18 0 22-17 Z" fill="#E8734A" stroke="#0F172A" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M20 38 q10 6 20 0" fill="none" stroke="#FFE9C4" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function ChinatownPlate() {
  return (
    <svg width="54" height="54" viewBox="0 0 64 64" aria-hidden="true">
      <ellipse cx="32" cy="36" rx="27" ry="17" fill="#FFFDF8" stroke="#0F172A" strokeWidth="3" />
      <path d="M14 36 q6-9 18-9 q12 0 18 9 q-6 9-18 9 q-12 0-18-9 Z" fill="#5B4636" stroke="#0F172A" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M22 33 q10 5 20 0" fill="none" stroke="#F7E7C2" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function TelokAyerPlate() {
  return (
    <svg width="54" height="54" viewBox="0 0 64 64" aria-hidden="true">
      <ellipse cx="32" cy="36" rx="27" ry="17" fill="#FFFDF8" stroke="#0F172A" strokeWidth="3" />
      <path d="M16 30 q7 12 16 12 q9 0 16-12 Z" fill="#16A34A" opacity="0.28" />
      <path d="M18 34 q5-10 14-10 q9 0 14 10 Z" fill="#F7E7C2" stroke="#0F172A" strokeWidth="2.6" strokeLinejoin="round" />
      <circle cx="32" cy="41" r="5" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.4" />
    </svg>
  );
}
