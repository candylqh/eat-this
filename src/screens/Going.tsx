import { useApp } from '../state';
import { KayaCatGoing } from '../components/KayaCat';
import { formatClock } from '../lib/format';

export function Going() {
  const { currentResult, go } = useApp();
  const { stall, leaveAt, backAt } = currentResult;

  return (
    <div className="screen" style={{ padding: '26px 20px 22px', overflowY: 'auto' }}>
      <div
        className="mono"
        style={{
          alignSelf: 'flex-start',
          padding: '6px 14px',
          borderRadius: 999,
          background: '#DC2626',
          border: '2px solid #0F172A',
          color: '#FFFFFF',
          fontSize: 11.5,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
        }}
      >
        Going
      </div>
      <div className="display" style={{ marginTop: 22, fontSize: 40, lineHeight: 0.94 }}>{stall.centreName.toUpperCase()}</div>
      <div className="mono" style={{ marginTop: 8, fontSize: 13.5, color: '#6B5A42' }}>
        {stall.unit} · {stall.signatureDish} · ${stall.price.toFixed(2)}
      </div>
      <div style={{ marginTop: 24, padding: 18, background: '#FFE9C4', border: '2.5px solid #0F172A', borderRadius: 22, boxShadow: '0 4px 0 #0F172A' }}>
        <div className="display" style={{ fontSize: 32, lineHeight: 1 }}>LEAVE {formatClock(leaveAt)}</div>
        <div style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.45, color: '#6B5A42' }}>
          Back by {formatClock(backAt)}.
        </div>
      </div>

      <div style={{ marginTop: 22, display: 'flex', justifyContent: 'center' }}>
        <KayaCatGoing />
      </div>

      <button type="button" onClick={() => go('post')} className="btn-outline" style={{ marginTop: 20 }}>Later: did you go?</button>
      <button type="button" onClick={() => go('plates')} className="btn-outline tint" style={{ marginTop: 10 }}>This adds a plate to your board</button>
    </div>
  );
}
