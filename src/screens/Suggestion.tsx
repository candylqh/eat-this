import { useApp } from '../state';
import { DishIcon } from '../components/icons';
import { MiniRibbon } from '../components/TimeRibbon';
import { reasoningLines } from '../lib/feasibility';
import { formatClock } from '../lib/format';

export function Suggestion() {
  const { state, currentResult, go, commit, decline } = useApp();
  const { stall, walkOutMin, queueMin, eatMin, walkBackMin, spareMin, backAt, feasible } = currentResult;
  const [line1, line2] = reasoningLines(currentResult);

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <div className="screen-scroll">
        <div className="eyebrow">
          {state.budgetMin <= 30 ? 'Quick lunch' : 'Open lunch'} · back in ~{state.budgetMin} min
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div className="display" style={{ flex: 1, fontSize: 30, lineHeight: 0.92, textWrap: 'balance' }}>
            {stall.centreName.toUpperCase()}
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
          <button type="button" onClick={() => go('feasibility')} className="btn-outline tint" style={{ marginTop: 14, padding: 11, fontSize: 14 }}>
            See how that adds up
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, paddingLeft: 12, borderLeft: '3px solid #F0D9B0' }}>
          <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>{line1}</div>
          <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>{line2}</div>
        </div>
      </div>

      <div className="screen-footer">
        <button type="button" onClick={commit} className="btn-cta">I&rsquo;ll go</button>
        <button type="button" onClick={decline} className="btn-quiet">Not today</button>
      </div>
    </div>
  );
}
