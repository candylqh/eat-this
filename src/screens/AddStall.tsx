import { useApp } from '../state';
import { CoinIcon } from '../components/icons';

export function AddStall() {
  const { fileFind } = useApp();

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <div className="screen-scroll">
        <div className="eyebrow">Your find</div>
        <div className="display" style={{ fontSize: 42, lineHeight: 0.94 }}>
          TELL US WHERE
          <br />
          YOU ATE.
        </div>
        <div style={{ fontSize: 14.5, lineHeight: 1.45, color: '#6B5A42' }}>
          Stalls nobody has logged are the ones worth adding. Four fields, then it&rsquo;s in the pool.
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="field">
            <label>Hawker centre or building</label>
            <input type="text" placeholder="Golden Shoe Food Centre" />
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div className="field" style={{ flex: 1 }}>
              <label>Unit</label>
              <input type="text" className="mono-field" placeholder="02-14" />
            </div>
            <div className="field" style={{ flex: 1 }}>
              <label>Price</label>
              <input type="text" className="mono-field" placeholder="$4.80" />
            </div>
          </div>
          <div className="field">
            <label>What you ate</label>
            <input type="text" placeholder="Duck rice, extra chilli" />
          </div>
          <div className="field">
            <label>One thing to know</label>
            <textarea rows={2} placeholder="Closes when the duck runs out, usually 1:30." />
          </div>
        </div>

        <div className="hint-panel">
          <CoinIcon />
          <div style={{ flex: 1 }}>Three credits now. Two more the first time someone eats there and says the walk was right.</div>
        </div>
      </div>

      <div className="screen-footer">
        <button type="button" onClick={fileFind} className="btn-cta">Add it</button>
      </div>
    </div>
  );
}
