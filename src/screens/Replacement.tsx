import { useApp, SWAPS } from '../state';
import { NoodleDish } from '../components/icons';
import { MiniRibbon } from '../components/TimeRibbon';

export function Replacement() {
  const { state, commit } = useApp();
  const sw = SWAPS[state.reason];

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <div className="screen-scroll">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            className="mono"
            style={{ padding: '4px 11px', borderRadius: 999, background: '#0F172A', color: '#FFE9C4', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Instead
          </div>
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6E5C41' }}>{sw.tag}</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div className="display" style={{ flex: 1, fontSize: 42, lineHeight: 0.92, textWrap: 'balance' }}>MAXWELL FOOD CENTRE</div>
          <div
            className="mono"
            style={{ flexShrink: 0, marginTop: 5, padding: '5px 9px', borderRadius: 999, background: '#0F172A', color: '#FFE9C4', fontSize: 13, fontWeight: 500 }}
          >
            01-10
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
          <NoodleDish />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ fontSize: 17, fontWeight: 600 }}>Fishball noodles, dry</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <div className="mono" style={{ fontSize: 17 }}>$4.00</div>
              <div className="mono" style={{ fontSize: 12, color: '#6E5C41' }}>soup on the side</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="display" style={{ fontSize: 44, lineHeight: 0.95 }}>BACK BY 12:46</div>
          <div style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.4, color: '#6B5A42' }}>Your meeting is at 1:00.</div>
          <MiniRibbon weights={[4, 5, 15, 4, 14]} spareLabel="14 min spare" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, paddingLeft: 12, borderLeft: '3px solid #F0D9B0' }}>
          <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>{sw.reason}</div>
          <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>Air-conditioned seating on the second floor, and the queue at 01-10 reads five minutes.</div>
          <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>Priya ate here in June and put it on her list twice since.</div>
        </div>
      </div>

      <div className="screen-footer">
        <button type="button" onClick={commit} className="btn-cta">I&rsquo;ll go</button>
        <div className="mono" style={{ textAlign: 'center', fontSize: 11, letterSpacing: '0.04em', color: '#6E5C41' }}>That was the swap. Tomorrow, then.</div>
      </div>
    </div>
  );
}
