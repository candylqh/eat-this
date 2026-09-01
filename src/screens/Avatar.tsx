import { useApp, shopButtonState, type AccessoryKey } from '../state';
import { KayaCatAvatar } from '../components/KayaCat';
import { CoinIcon } from '../components/icons';

interface ShopItem {
  key: AccessoryKey;
  cost: number;
  label: string;
  icon: React.ReactNode;
}

const ITEMS: ShopItem[] = [
  {
    key: 'hat',
    cost: 8,
    label: 'Hawker cap',
    icon: (
      <svg width="58" height="58" viewBox="0 0 60 60" aria-hidden="true">
        <path d="M10 34 q20-22 40 0 q-7 6-20 6 q-13 0-20-6 Z" fill="#DC2626" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
        <path d="M18 28 q12-9 24 0" fill="none" stroke="#FFF8EE" strokeWidth="3" strokeLinecap="round" />
        <path d="M12 40 h36" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'scarf',
    cost: 6,
    label: 'Kopi scarf',
    icon: (
      <svg width="58" height="58" viewBox="0 0 60 60" aria-hidden="true">
        <path d="M12 24 q18 11 36 0 l4 11 q-22 12-44 0 Z" fill="#16A34A" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
        <path d="M40 36 l6 14" fill="none" stroke="#16A34A" strokeWidth="6" strokeLinecap="round" />
        <path d="M40 36 l6 14" fill="none" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" opacity="0.35" />
      </svg>
    ),
  },
  {
    key: 'specs',
    cost: 10,
    label: 'Menu specs',
    icon: (
      <svg width="58" height="58" viewBox="0 0 60 60" aria-hidden="true">
        <g fill="#FFF8EE" stroke="#0F172A" strokeWidth="3">
          <circle cx="20" cy="30" r="11" />
          <circle cx="42" cy="30" r="11" />
        </g>
        <path d="M31 30h0.5M9 26l-5-3M53 26l5-3" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Avatar() {
  const { state, buy, go, restart } = useApp();

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <div className="screen-scroll">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="eyebrow" style={{ flex: 1 }}>Your Kaya Cat</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '6px 12px 6px 8px', borderRadius: 999, background: '#FFE9C4', border: '2.5px solid #0F172A' }}>
            <CoinIcon size={18} />
            <div className="mono" style={{ fontSize: 14, fontWeight: 600 }}>{state.credits}</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', padding: '14px 0 6px', background: '#FFE9C4', border: '2.5px solid #0F172A', borderRadius: 24, boxShadow: '0 4px 0 #0F172A' }}>
          <KayaCatAvatar wearHat={state.worn.hat} wearScarf={state.worn.scarf} wearSpecs={state.worn.specs} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 12, borderLeft: '3px solid #F0D9B0' }}>
          <div style={{ fontSize: 14, lineHeight: 1.45 }}>Three credits for the queue read at Amoy 01-32.</div>
          <div style={{ fontSize: 14, lineHeight: 1.45 }}>Five for adding Golden Shoe 02-14 before anyone else.</div>
        </div>

        <div className="eyebrow">Spend them</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {ITEMS.map((item) => {
            const btn = shopButtonState(state, item.key, item.cost);
            return (
              <div key={item.key} className="shop-cell">
                {item.icon}
                <div style={{ textAlign: 'center', fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>{item.label}</div>
                <div className="mono" style={{ fontSize: 11.5, color: '#6E5C41' }}>{item.cost} credits</div>
                <button
                  type="button"
                  onClick={() => buy(item.key, item.cost)}
                  className="shop-btn"
                  style={{ background: btn.bg, color: btn.fg }}
                >
                  {btn.label}
                </button>
              </div>
            );
          })}

          <div className="shop-cell locked">
            <svg width="58" height="58" viewBox="0 0 60 60" aria-hidden="true">
              <ellipse cx="30" cy="26" rx="18" ry="5" fill="#FFFDF8" stroke="#DEC69E" strokeWidth="3" />
              <path d="M12 26 q3 20 18 20 q15 0 18-20 Z" fill="#FFF3DF" stroke="#DEC69E" strokeWidth="3" strokeLinejoin="round" />
            </svg>
            <div style={{ textAlign: 'center', fontSize: 14, fontWeight: 600, lineHeight: 1.3, color: '#6B5A42' }}>Second bowl</div>
            <div className="mono" style={{ fontSize: 11.5, color: '#6E5C41' }}>20 credits</div>
            <div className="shop-btn locked-btn">Not yet</div>
          </div>
        </div>
      </div>

      <div className="screen-footer">
        <button type="button" onClick={() => go('add')} className="btn-outline">Add a stall for 3 credits</button>
        <button type="button" onClick={restart} className="btn-quiet" style={{ padding: 10, fontSize: 13.5 }}>Back to lunch</button>
      </div>
    </div>
  );
}
