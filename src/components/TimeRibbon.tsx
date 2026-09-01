const HATCH = 'repeating-linear-gradient(135deg, #F6B98A, #F6B98A 4px, #FBD5BA 4px, #FBD5BA 8px)';
const HATCH_MINI = 'repeating-linear-gradient(135deg, #F6B98A, #F6B98A 3px, #FBD5BA 3px, #FBD5BA 6px)';

interface MiniRibbonProps {
  /** flex weights for walk / queue / eat / walk-back / spare */
  weights: [number, number, number, number, number];
  spareLabel: string;
}

/** Compact ribbon shown under the "back by" card on screens 1 and 4b. */
export function MiniRibbon({ weights, spareLabel }: MiniRibbonProps) {
  const [walk, queue, eat, back, spare] = weights;
  return (
    <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'stretch', gap: 2, height: 12 }}>
        <div style={{ flex: walk, background: '#FCD9A8', borderRadius: 999 }} />
        <div style={{ flex: queue, background: HATCH_MINI, borderRadius: 999 }} />
        <div style={{ flex: eat, background: '#F59E0B', borderRadius: 999 }} />
        <div style={{ flex: back, background: '#FCD9A8', borderRadius: 999 }} />
        <div style={{ flex: spare, border: '2px dotted #E4B4B4', borderRadius: 999 }} />
      </div>
      <div className="mono" style={{ fontSize: 12, fontWeight: 600, color: '#DC2626', flexShrink: 0 }}>
        {spareLabel}
      </div>
    </div>
  );
}

function WalkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5.5l4.5 4.5-4.5 4.5" fill="none" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function WalkBackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M16 10H5M9 5.5L4.5 10 9 14.5" fill="none" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function QueueIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="5" cy="10" r="2.2" fill="#0F172A" />
      <circle cx="11" cy="10" r="2.2" fill="#0F172A" />
      <circle cx="17" cy="10" r="2.2" fill="#0F172A" opacity="0.4" />
    </svg>
  );
}
function BowlIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <ellipse cx="11" cy="9" rx="8" ry="2.4" fill="#FFFDF8" stroke="#0F172A" strokeWidth="1.8" />
      <path d="M3 9 q1.4 9 8 9 q6.6 0 8-9 Z" fill="#FFE9C4" stroke="#0F172A" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

interface FullRibbonProps {
  leaveTime: string;
  meetingLabel: string;
  walk: number;
  queue: number;
  eat: number;
  walkBack: number;
  spare: number;
  backAtLabel: string;
  footNote: string;
}

/** The signature time-ribbon breakdown on the feasibility and replacement screens. */
export function FullRibbon({ leaveTime, meetingLabel, walk, queue, eat, walkBack, spare, backAtLabel, footNote }: FullRibbonProps) {
  return (
    <div>
      <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, letterSpacing: '0.06em', color: '#6E5C41' }}>
        <span>{leaveTime}</span>
        <span style={{ color: '#DC2626' }}>{meetingLabel}</span>
      </div>

      <div style={{ marginTop: 6, display: 'flex', alignItems: 'stretch', gap: 3, height: 104, paddingRight: 4, borderRight: '4px solid #DC2626', borderRadius: 2 }}>
        <div style={{ flex: walk, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', background: '#FCD9A8', border: '2px solid #0F172A', borderRadius: 14 }}>
          <div className="mono" style={{ fontSize: 13, fontWeight: 600 }}>{walk}</div>
          <WalkIcon />
        </div>
        <div style={{ flex: queue, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', background: HATCH, border: '2px solid #0F172A', borderRadius: 14 }}>
          <div className="mono" style={{ fontSize: 13, fontWeight: 600 }}>{queue}</div>
          <QueueIcon />
        </div>
        <div style={{ flex: eat, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', background: '#F59E0B', border: '2px solid #0F172A', borderRadius: 14 }}>
          <div className="mono" style={{ fontSize: 13, fontWeight: 600 }}>{eat}</div>
          <BowlIcon />
        </div>
        <div style={{ flex: walkBack, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', background: '#FCD9A8', border: '2px solid #0F172A', borderRadius: 14 }}>
          <div className="mono" style={{ fontSize: 13, fontWeight: 600 }}>{walkBack}</div>
          <WalkBackIcon />
        </div>
        <div style={{ flex: spare, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', border: '2px dotted #E4B4B4', borderRadius: 14 }}>
          <div className="mono" style={{ fontSize: 13, fontWeight: 600, color: '#DC2626' }}>{spare}</div>
        </div>
      </div>

      <div className="mono" style={{ display: 'flex', alignItems: 'flex-start', marginTop: 7, fontSize: 9.5, letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.25 }}>
        <div style={{ flex: walk, color: '#6E5C41', paddingRight: 4 }}>Walk</div>
        <div style={{ flex: queue, color: '#6E5C41', paddingRight: 4 }}>Queue</div>
        <div style={{ flex: eat, color: '#6E5C41', paddingRight: 4 }}>Eat</div>
        <div style={{ flex: walkBack, color: '#6E5C41', paddingRight: 4 }}>Walk back</div>
        <div style={{ flex: spare, color: '#DC2626' }}>Spare</div>
      </div>

      <div className="mono" style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#6B5A42' }}>
        <span>{backAtLabel}</span>
        <span style={{ color: '#6E5C41' }}>{footNote}</span>
      </div>
    </div>
  );
}
