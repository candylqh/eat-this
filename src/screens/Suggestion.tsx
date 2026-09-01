import { useApp } from '../state';
import { ChickenRiceDish } from '../components/icons';
import { MiniRibbon } from '../components/TimeRibbon';

export function Suggestion() {
  const { go, commit, decline } = useApp();

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <div className="screen-scroll">
        <div className="eyebrow">Quick lunch · back in ~30 min</div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div className="display" style={{ flex: 1, fontSize: 30, lineHeight: 0.92, textWrap: 'balance' }}>
            TELOK BLANGAH CRESCENT FOOD CENTRE
          </div>
          <div
            className="mono"
            style={{
              flexShrink: 0,
              marginTop: 5,
              padding: '5px 9px',
              borderRadius: 999,
              background: '#0F172A',
              color: '#FFE9C4',
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            01-32
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 14px',
            background: '#FFE9C4',
            border: '2.5px solid #0F172A',
            borderRadius: 20,
            boxShadow: '0 4px 0 #0F172A',
          }}
        >
          <ChickenRiceDish />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ fontSize: 17, fontWeight: 600 }}>Hainanese chicken rice</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <div className="mono" style={{ fontSize: 17 }}>$4.50</div>
              <div className="mono" style={{ fontSize: 12, color: '#6E5C41' }}>+$1 egg</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="display" style={{ fontSize: 44, lineHeight: 0.95 }}>BACK BY 12:52</div>
          <div style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.4, color: '#6B5A42' }}>Your meeting is at 1:00.</div>
          <MiniRibbon weights={[6, 7, 15, 6, 8]} spareLabel="8 min spare" />
          <button type="button" onClick={() => go('feasibility')} className="btn-outline tint" style={{ marginTop: 14, padding: 11, fontSize: 14 }}>
            See how that adds up
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, paddingLeft: 12, borderLeft: '3px solid #F0D9B0' }}>
          <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>Six minutes there, sheltered the whole way — it's 33°, and you'd normally walk ten.</div>
          <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>Fan-cooled, and you're back eight minutes early, so the client at 2:00 still gets a dry shirt.</div>
          <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>Nobody in the department has eaten here.</div>
        </div>

        <div style={{ position: 'relative', padding: '14px 15px', background: '#FFFFFF', border: '2.5px solid #0F172A', borderRadius: '20px 20px 20px 6px' }}>
          <div style={{ fontSize: 14.5, lineHeight: 1.5 }}>&ldquo;Queue looks bad but moves fast. Ask for less rice, they give a lot.&rdquo;</div>
          <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="10" cy="10" r="8" fill="#FFE9C4" stroke="#0F172A" strokeWidth="1.8" />
              <circle cx="7.5" cy="9" r="1.2" fill="#0F172A" />
              <circle cx="12.5" cy="9" r="1.2" fill="#0F172A" />
              <path d="M8 13 q2 1.6 4 0" fill="none" stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.04em', color: '#6E5C41' }}>Wei Ming · last Tuesday</div>
          </div>
        </div>
      </div>

      <div className="screen-footer">
        <button type="button" onClick={commit} className="btn-cta">I&rsquo;ll go</button>
        <button type="button" onClick={decline} className="btn-quiet">Not today</button>
      </div>
    </div>
  );
}
