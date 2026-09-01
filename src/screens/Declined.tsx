import { useApp } from '../state';

function ReasonButton({ onClick, icon, title, subtitle }: { onClick: () => void; icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <button type="button" onClick={onClick} className="reason-card">
      {icon}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 17, fontWeight: 600 }}>{title}</div>
        <div className="mono" style={{ marginTop: 2, fontSize: 11.5, color: '#6E5C41' }}>{subtitle}</div>
      </div>
    </button>
  );
}

export function Declined() {
  const { back, swap } = useApp();

  return (
    <div className="screen" style={{ padding: '20px 20px 22px', gap: 14 }}>
      <button type="button" onClick={back} className="btn-back">← Amoy Street 01-32</button>

      <div className="display" style={{ fontSize: 40, lineHeight: 0.94 }}>
        WHAT&rsquo;S OFF
        <br />
        ABOUT IT?
      </div>

      <ReasonButton
        onClick={() => swap('far')}
        title="Too far"
        subtitle="six minutes is more than I want"
        icon={
          <svg width="34" height="34" viewBox="0 0 24 24" style={{ flexShrink: 0 }} aria-hidden="true">
            <path d="M3 12h13M12 6.5l6 5.5-6 5.5" fill="none" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 5v14" stroke="#DC2626" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
        }
      />

      <ReasonButton
        onClick={() => swap('hot')}
        title="Too hot"
        subtitle="I want air-con, not a fan"
        icon={
          <svg width="34" height="34" viewBox="0 0 24 24" style={{ flexShrink: 0 }} aria-hidden="true">
            <circle cx="12" cy="13" r="6" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" />
            <g stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 2v2.5M3 13h2.5M18.5 13H21M5.4 6.4l1.8 1.8M18.6 6.4l-1.8 1.8" />
            </g>
          </svg>
        }
      />

      <ReasonButton
        onClick={() => swap('mood')}
        title="Not feeling it"
        subtitle="chicken rice, not today"
        icon={
          <svg width="34" height="34" viewBox="0 0 24 24" style={{ flexShrink: 0 }} aria-hidden="true">
            <circle cx="12" cy="12" r="9" fill="#FBE0B6" stroke="#0F172A" strokeWidth="2.2" />
            <circle cx="9" cy="10.5" r="1.3" fill="#0F172A" />
            <circle cx="15" cy="10.5" r="1.3" fill="#0F172A" />
            <path d="M9 16h6" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        }
      />

      <div style={{ marginTop: 4, padding: '13px 15px', background: '#FFF3DF', border: '2px dashed #DEC69E', borderRadius: 18, fontSize: 13.5, lineHeight: 1.45, color: '#6B5A42' }}>
        One replacement, then that&rsquo;s lunch. We won&rsquo;t hand you a list.
      </div>
    </div>
  );
}
