import { useApp } from '../state';
import { AmoyPlate, MaxwellPlate, HongLimPlate, ChinatownPlate, TelokAyerPlate, KayaFaceIcon } from '../components/icons';

interface Plate {
  icon: React.ReactNode;
  name: string;
  unit: string;
  date: string;
}

const PLATES: Plate[] = [
  { icon: <AmoyPlate />, name: 'Amoy', unit: '01-32', date: 'TODAY' },
  { icon: <MaxwellPlate />, name: 'Maxwell', unit: '01-10', date: '24 AUG' },
  { icon: <HongLimPlate />, name: 'Hong Lim', unit: '02-77', date: '19 AUG' },
  { icon: <ChinatownPlate />, name: 'Chinatown', unit: '02-149', date: '12 AUG' },
  { icon: <TelokAyerPlate />, name: 'Telok Ayer', unit: '01-05', date: '5 AUG' },
];

function PlateCell({ plate }: { plate: Plate }) {
  return (
    <div className="plate-cell filled">
      {plate.icon}
      <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 600, lineHeight: 1.3, whiteSpace: 'nowrap' }}>{plate.name}</div>
      <div className="mono" style={{ fontSize: 11, whiteSpace: 'nowrap' }}>{plate.unit}</div>
      <div className="mono" style={{ fontSize: 9.5, color: '#6E5C41' }}>{plate.date}</div>
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

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <div className="screen-scroll">
        <div>
          <div className="eyebrow">Your plates</div>
          <div className="display" style={{ marginTop: 6, fontSize: 46, lineHeight: 0.94 }}>5 OF 41 STALLS</div>
          <div style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.45, color: '#6B5A42' }}>
            One plate per stall you&rsquo;ve actually eaten at, within a ten-minute walk of the office.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {PLATES.map((p) => (
            <PlateCell key={p.name} plate={p} />
          ))}
          <EmptyCell />
          <EmptyCell />
          <EmptyCell />
          <div className="plate-cell empty">
            <div className="display" style={{ fontSize: 30, lineHeight: 1, color: '#6E5C41' }}>+33</div>
            <div className="mono" style={{ fontSize: 9.5, color: '#6E5C41' }}>TO GO</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '14px 15px', background: '#FFFFFF', border: '2.5px solid #0F172A', borderRadius: '20px 20px 6px 20px' }}>
          <KayaFaceIcon />
          <div style={{ flex: 1, fontSize: 14, lineHeight: 1.45 }}>Four of the empty ones are within six minutes. You&rsquo;ll get one at a time, on days the clock allows it.</div>
        </div>
      </div>

      <div className="screen-footer" style={{ gap: 0 }}>
        <button type="button" onClick={restart} className="btn-outline tint">Back to lunch</button>
      </div>
    </div>
  );
}
