import { useApp } from '../state';
import { STALLS } from '../data/seedStalls';
import { OFFICE_ANCHOR } from '../data/office';
import { walkTimeMinutes } from '../lib/geo';
import { AmoyPlate, MaxwellPlate, HongLimPlate, ChinatownPlate, TelokAyerPlate, KayaFaceIcon } from '../components/icons';

// Purely decorative stickers — only 5 hand-drawn variants exist, cycled
// across whichever real stalls are shown as "already eaten" below.
const STICKERS = [AmoyPlate, MaxwellPlate, HongLimPlate, ChinatownPlate, TelokAyerPlate];

const EATEN_DATES = ['TODAY', '24 AUG', '19 AUG', '12 AUG', '5 AUG'];
const EATEN_COUNT = 5;
const EMPTY_SHOWN = 3;

function PlateCell({ name, unit, date, Sticker }: { name: string; unit: string; date: string; Sticker: React.ComponentType }) {
  return (
    <div className="plate-cell filled">
      <Sticker />
      <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 600, lineHeight: 1.3, width: '100%', overflowWrap: 'break-word' }}>{name}</div>
      <div className="mono" style={{ fontSize: 11, width: '100%', textAlign: 'center', overflowWrap: 'break-word' }}>{unit}</div>
      <div className="mono" style={{ fontSize: 9.5, color: '#6E5C41' }}>{date}</div>
    </div>
  );
}

function EmptyCell() {
  return (
    <div className="plate-cell empty">
      <div style={{ width: 46, height: 46, borderRadius: 999, border: '2.5px dashed #DEC69E' }} />
      <div className="mono" style={{ fontSize: 9.5, color: '#6E5C41' }}>EMPTY</div>
    </div>
  );
}

export function Plates() {
  const { restart } = useApp();

  const eaten = STALLS.slice(0, EATEN_COUNT);
  const remaining = STALLS.slice(EATEN_COUNT);
  const emptyShown = Math.min(EMPTY_SHOWN, remaining.length);
  const toGo = remaining.length - emptyShown;
  const nearRemainingCount = remaining.filter((s) => walkTimeMinutes(OFFICE_ANCHOR, s) <= 6).length;

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <div className="screen-scroll">
        <div>
          <div className="eyebrow">Your plates</div>
          <div className="display" style={{ marginTop: 6, fontSize: 46, lineHeight: 0.94 }}>
            {Math.min(EATEN_COUNT, STALLS.length)} OF {STALLS.length} STALLS
          </div>
          <div style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.45, color: '#6B5A42' }}>
            One plate per stall you&rsquo;ve actually eaten at, within a ten-minute walk of the office.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {eaten.map((stall, i) => (
            <PlateCell key={stall.id} name={stall.name} unit={stall.unit} date={EATEN_DATES[i]} Sticker={STICKERS[i % STICKERS.length]} />
          ))}
          {Array.from({ length: emptyShown }).map((_, i) => (
            <EmptyCell key={i} />
          ))}
          {toGo > 0 && (
            <div className="plate-cell empty">
              <div className="display" style={{ fontSize: 30, lineHeight: 1, color: '#6E5C41' }}>+{toGo}</div>
              <div className="mono" style={{ fontSize: 9.5, color: '#6E5C41' }}>TO GO</div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '14px 15px', background: '#FFFFFF', border: '2.5px solid #0F172A', borderRadius: '20px 20px 6px 20px' }}>
          <KayaFaceIcon />
          <div style={{ flex: 1, fontSize: 14, lineHeight: 1.45 }}>
            {nearRemainingCount} of the remaining stalls are within six minutes&rsquo; walk. You&rsquo;ll get one at a time, on days the clock allows it.
          </div>
        </div>
      </div>

      <div className="screen-footer" style={{ gap: 0 }}>
        <button type="button" onClick={restart} className="btn-outline tint">Back to lunch</button>
      </div>
    </div>
  );
}
