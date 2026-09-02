import { useApp, swapTagLabel, getStallById } from '../state';
import { DishIcon } from '../components/icons';
import { MiniRibbon } from '../components/TimeRibbon';
import { reasoningLines } from '../lib/feasibility';
import { formatClock } from '../lib/format';

export function Replacement() {
  const { state, currentResult, commit } = useApp();
  const { stall, walkOutMin, queueMin, eatMin, walkBackMin, spareMin, backAt, feasible } = currentResult;
  const [line1, line2] = reasoningLines(currentResult);
  const previousStallId = state.declinedStallIds[state.declinedStallIds.length - 1];
  const previousStallName = previousStallId ? getStallById(previousStallId).name : null;
  const tag =
    state.lastReason === 'far' && previousStallName
      ? `Closer than ${previousStallName}`
      : state.lastReason
        ? swapTagLabel(state.lastReason)
        : 'Instead';

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
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6E5C41' }}>{tag}</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div className="display" style={{ flex: 1, fontSize: 42, lineHeight: 0.92, textWrap: 'balance' }}>{stall.centreName.toUpperCase()}</div>
          <div
            className="mono"
            style={{ flexShrink: 0, marginTop: 5, padding: '5px 9px', borderRadius: 999, background: '#0F172A', color: '#FFE9C4', fontSize: 13, fontWeight: 500 }}
          >
            {stall.unit}
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
          <DishIcon signatureDish={stall.signatureDish} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ fontSize: 17, fontWeight: 600 }}>{stall.signatureDish}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <div className="mono" style={{ fontSize: 17 }}>${stall.price.toFixed(2)}</div>
              <div className="mono" style={{ fontSize: 12, color: '#6E5C41' }}>{stall.cuisine}</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="display" style={{ fontSize: 44, lineHeight: 0.95 }}>BACK BY {formatClock(backAt)}</div>
          <div style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.4, color: '#6B5A42' }}>
            Your meeting is at {formatClock(state.nextCommitmentAt)}.
          </div>
          <MiniRibbon
            weights={[walkOutMin, queueMin, eatMin, walkBackMin, Math.max(spareMin, 0)]}
            spareLabel={feasible ? `${spareMin} min spare` : `${Math.abs(spareMin)} min short`}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, paddingLeft: 12, borderLeft: '3px solid #F0D9B0' }}>
          <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>{line1}</div>
          <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>{line2}</div>
        </div>
      </div>

      <div className="screen-footer">
        <button type="button" onClick={commit} className="btn-cta">I&rsquo;ll go</button>
        <div className="mono" style={{ textAlign: 'center', fontSize: 11, letterSpacing: '0.04em', color: '#6E5C41' }}>That was the swap. Tomorrow, then.</div>
      </div>
    </div>
  );
}
