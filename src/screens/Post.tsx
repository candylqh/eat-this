import { useApp } from '../state';
import { CoinIcon } from '../components/icons';

const WENT_CHIPS = ['No queue', '5 min', '10 min', '20 min +'];
const MISSED_CHIPS = ['Ran out of time', 'Ate elsewhere', 'Meeting overran', 'Wasn’t hungry'];

export function Post() {
  const { state, sayWent, sayMissed, pickChip, filePost, restart } = useApp();
  const went = state.outcome === 'went';
  const chips = went ? WENT_CHIPS : MISSED_CHIPS;

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <div className="screen-scroll">
        <div className="eyebrow">1:04 PM · Amoy Street 01-32</div>
        <div className="display" style={{ fontSize: 44, lineHeight: 0.94 }}>DID YOU GO?</div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            type="button"
            onClick={sayWent}
            className="outcome-card"
            style={{ background: went ? '#FFE9C4' : '#FFFFFF' }}
          >
            <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true">
              <ellipse cx="32" cy="36" rx="27" ry="17" fill="#FFFDF8" stroke="#0F172A" strokeWidth="3" />
              <path d="M20 39 q12 8 24 0 q-3 8-12 8 q-9 0-12-8 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.6" strokeLinejoin="round" />
              <path d="M18 34 q4-11 14-11 q10 0 14 11 Z" fill="#F7E7C2" stroke="#0F172A" strokeWidth="2.6" strokeLinejoin="round" />
            </svg>
            <div style={{ fontSize: 16, fontWeight: 600 }}>I went</div>
          </button>
          <button
            type="button"
            onClick={sayMissed}
            className="outcome-card"
            style={{ background: went ? '#FFFFFF' : '#FFE9C4' }}
          >
            <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true">
              <ellipse cx="32" cy="36" rx="27" ry="17" fill="#FFFDF8" stroke="#0F172A" strokeWidth="3" />
              <ellipse cx="32" cy="35" rx="18" ry="10" fill="none" stroke="#EBD9BC" strokeWidth="2.4" />
              <path d="M20 24 L44 48" stroke="#DEC69E" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div style={{ fontSize: 16, fontWeight: 600 }}>I didn&rsquo;t</div>
          </button>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 600 }}>{went ? 'How long was the queue?' : 'What got in the way?'}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {chips.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => pickChip(i)}
                className="chip"
                style={{ background: state.chip === i ? '#FFE9C4' : '#FFFFFF' }}
              >
                {label}
              </button>
            ))}
          </div>
          <div style={{ height: 1, background: '#F0E2CC' }} />
          <div style={{ fontSize: 15, fontWeight: 600 }}>Anything to pass on?</div>
          <textarea rows={3} placeholder="Ask for less rice, they give a lot." />
          <div className="mono" style={{ fontSize: 11, color: '#6E5C41' }}>Goes to the eleven people who eat within your walk.</div>
        </div>

        <div className="hint-panel">
          <CoinIcon />
          <div style={{ flex: 1 }}>
            {went
              ? 'Three credits. The queue read is what makes tomorrow’s answer right.'
              : 'One credit. Knowing you skipped keeps the walk estimate honest.'}
          </div>
        </div>
      </div>

      <div className="screen-footer">
        <button type="button" onClick={filePost} className="btn-cta">Send it</button>
        <button type="button" onClick={restart} className="btn-quiet" style={{ padding: 10, fontSize: 13.5 }}>Skip</button>
      </div>
    </div>
  );
}
